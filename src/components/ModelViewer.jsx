import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const ModelViewer = React.memo(() => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  const animate = useCallback(() => {
    requestAnimationFrame(animate);
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  }, []);

  useEffect(() => {
    let scene, camera, renderer;

    // Create a scene, camera, and renderer
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, precision: 'lowp', alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff); // Set background color to white

    // Store scene, camera, and renderer references
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    // Add a light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    // Load the model
    const loader = new STLLoader();
    loader.load('src/assets/unicorn_A.stl', (geometry) => {
      const material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, wireframeLinewidth: 0.5});
      const mesh = new THREE.Mesh(geometry, material);
      mesh.frustumCulled = true;

      mesh.rotation.x = -Math.PI / 2;
      mesh.position.z = -1;

      scene.add(mesh);
    });

    // Set up camera position
    camera.position.z = 1.75;
    camera.position.y = 1;

    // Animation loop
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleScroll = (event) => {
      const delta = Math.sign(event.deltaY);
      scene.rotation.y += delta * 0.2;
      console.log(scene.rotation.y)
    };

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
  }, [animate]);

  return <div ref={containerRef} />;
});

export default ModelViewer;