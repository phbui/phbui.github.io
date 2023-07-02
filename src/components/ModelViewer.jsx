import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { debounce } from 'lodash';

const ModelViewer = React.memo(() => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  const fpsLimit = 30; // limit to 30 frames per second
  let then = 0;
  
  const animate = useCallback((now = 0) => {
    const elapsed = now - then;
    const fpsInterval = 1000 / fpsLimit;
  
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
    requestAnimationFrame(animate);
  }, []);

  const handleResize = useCallback(debounce(() => {
    cameraRef.current.aspect = window.innerWidth / window.innerHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
  }, 200), []);

  const handleScroll = useCallback((event) => {
    const delta = Math.sign(event.deltaY);
    sceneRef.current.rotation.y += delta * 0.1; // Lowered to 0.1 to decrease amount of rotation per event.
  }, []);

  useEffect(() => {
    let scene, camera, renderer;

    // Create a scene, camera, and renderer
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: false, precision: 'lowp', alpha: false }); // Antialiasing off
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff); // Set background color to white

    // Store scene, camera, and renderer references
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Load the model
    const loader = new STLLoader();
    loader.load('src/assets/gundam.stl', (geometry) => {
      const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, wireframeLinewidth: 0.5});
      const mesh = new THREE.Mesh(geometry, material);
      mesh.frustumCulled = true;

      mesh.rotation.x = -Math.PI / 2;
      mesh.scale.set(0.01, 0.01, 0.01); // Lowered scale to make the model smaller.
      mesh.position.z = -0.25;

      scene.add(mesh);
    });

    // Set up camera position
    camera.position.z = 0.3;
    camera.position.y = 1;

    // Animation loop
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('wheel', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleScroll);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [animate, handleResize, handleScroll]);

  return <div ref={containerRef} />;
});

export default ModelViewer;
