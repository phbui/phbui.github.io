import React, { useEffect, useRef, useCallback, useState } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { debounce } from 'lodash';
import TWEEN from '@tweenjs/tween.js';

const ModelViewer = React.memo(() => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const defaultX = 0;
  const defaultY = 0.7;
  const defaultZ = 1.25;

  const cameraPositionsAndRotations = [
    { position: { x: defaultX, y: defaultY, z: defaultZ }, rotation: { x: 0, y: 0, z: 0 } },
    { position: { x: 1, y: 1, z: 0 }, rotation: { x: 0, y: 2, z: 0 } },
    { position: { x: -1, y: 1, z: 0 }, rotation: { x: 0, y: -2, z: 0 } },
    { position: { x: 0, y: 1, z: -2 }, rotation: { x: 0, y: -3, z: 0 } },
    // Add more as needed
  ];

  const [currentCameraSettingIndex, setCameraSettingIndex] = useState(0);

  const fpsLimit = 30; // limit to 30 frames per second
  let then = 0;
  
  const animate = useCallback((now = 0) => {
    const elapsed = now - then;
    const fpsInterval = 1000 / fpsLimit;
  
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      TWEEN.update();
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
    let nextIndex = currentCameraSettingIndex + delta;
  
    // Ensure index is within bounds of our array
    nextIndex = Math.max(0, nextIndex);
    nextIndex = Math.min(cameraPositionsAndRotations.length - 1, nextIndex);
  
    if (nextIndex !== currentCameraSettingIndex) {
      const currentPosition = { x: cameraRef.current.position.x, y: cameraRef.current.position.y, z: cameraRef.current.position.z };
      const currentRotation = { x: cameraRef.current.rotation.x, y: cameraRef.current.rotation.y, z: cameraRef.current.rotation.z };
  
      new TWEEN.Tween(currentPosition)
        .to(cameraPositionsAndRotations[nextIndex].position, 2000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          cameraRef.current.position.set(currentPosition.x, currentPosition.y, currentPosition.z);
        })
        .start();
  
      new TWEEN.Tween(currentRotation)
        .to(cameraPositionsAndRotations[nextIndex].rotation, 2000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          cameraRef.current.rotation.set(currentRotation.x, currentRotation.y, currentRotation.z);
        })
        .start();
  
      setCameraSettingIndex(nextIndex);
    }
    console.log(`Current camera position: x=${cameraRef.current.position.x}, y=${cameraRef.current.position.y}, z=${cameraRef.current.position.z}`);
    console.log(`Current camera rotation: x=${cameraRef.current.rotation.x}, y=${cameraRef.current.rotation.y}, z=${cameraRef.current.rotation.z}`);
  
  }, [currentCameraSettingIndex]);
  

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

      scene.add(mesh);
    });

    // Set up camera position
    camera.position.x = defaultX;
    camera.position.y = defaultY;
    camera.position.z = defaultZ;

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
  }, [animate, handleResize, handleScroll, currentCameraSettingIndex]);

  return <div ref={containerRef} />;
});

export default ModelViewer;
