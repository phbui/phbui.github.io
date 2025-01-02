/* The code is a React component called `ModelViewer` that renders a 3D model viewer using the Three.js
library. It imports necessary dependencies such as React, Three.js, STLLoader, lodash, and TWEEN. */
import React, {
  useEffect,
  useRef,
  useCallback,
  useState,
  useMemo,
} from "react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { debounce, throttle } from "lodash";
import TWEEN from "@tweenjs/tween.js";

/**
 * The function generates interpolated camera settings based on a given array of settings and the
 * number of steps.
 * @returns The function `generateCameraSettings` returns an array of camera settings.
 */
const generateCameraSettings = (settings, steps) => {
  const newSettings = [];

  for (let i = 0; i < settings.length - 1; i++) {
    for (let j = 0; j <= steps; j++) {
      const t = j / steps;
      const interpPosition = {
        x: settings[i].position.x * (1 - t) + settings[i + 1].position.x * t,
        y: settings[i].position.y * (1 - t) + settings[i + 1].position.y * t,
        z: settings[i].position.z * (1 - t) + settings[i + 1].position.z * t,
      };
      const interpRotation = {
        x: settings[i].rotation.x * (1 - t) + settings[i + 1].rotation.x * t,
        y: settings[i].rotation.y * (1 - t) + settings[i + 1].rotation.y * t,
        z: settings[i].rotation.z * (1 - t) + settings[i + 1].rotation.z * t,
      };
      newSettings.push({ position: interpPosition, rotation: interpRotation });
    }
  }

  // Add the last setting
  newSettings.push(settings[settings.length - 1]);

  return newSettings;
};

const ModelViewer = React.memo(() => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  /* The line `const [defaultX, defaultY, defaultZ] = useMemo(() => [0, 0.7, 1.25], []);` is using the
  `useMemo` hook to memoize the values `[0, 0.7, 1.25]`. */
  const [defaultX, defaultY, defaultZ] = useMemo(() => [0, 0.7, 1.25], []);

  /* The `cameraPositionsAndRotations` constant is an array of camera settings. Each camera setting
  consists of a position and rotation object. The position object specifies the x, y, and z
  coordinates of the camera, while the rotation object specifies the rotation around the x, y, and z
  axes. */
  const cameraPositionsAndRotations = useMemo(
    () => [
      {
        position: { x: defaultX, y: defaultY, z: defaultZ },
        rotation: { x: 0, y: 0, z: 0 },
      },
      { position: { x: 1, y: 1, z: 0 }, rotation: { x: 0, y: 2, z: 0 } },
      { position: { x: -1, y: 1, z: 0 }, rotation: { x: 0, y: -2, z: 0 } },
      { position: { x: 0, y: 1, z: -2 }, rotation: { x: 0, y: -3, z: 0 } },
    ],
    [defaultX, defaultY, defaultZ]
  );

  const numInterpolationSteps = 10; // Change this to modify the number of steps
  /* The line `const interpolatedCameraPositionsAndRotations = useMemo(() =>
  generateCameraSettings(cameraPositionsAndRotations, numInterpolationSteps),
  [cameraPositionsAndRotations, numInterpolationSteps]);` is using the `useMemo` hook to memoize the
  result of the `generateCameraSettings` function. */
  const interpolatedCameraPositionsAndRotations = useMemo(
    () =>
      generateCameraSettings(
        cameraPositionsAndRotations,
        numInterpolationSteps
      ),
    [cameraPositionsAndRotations, numInterpolationSteps]
  );

  const [currentCameraSettingIndex, setCameraSettingIndex] = useState(0);

  const fpsLimit = 60; // limit to 30 frames per second
  let then = 0;

  /* The `animate` function is a callback function that is used to update and render the scene at a
specific frame rate. It uses the `requestAnimationFrame` method to continuously call itself,
creating a loop for rendering the scene. */
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

  /* The `handleResize` function is a debounced callback function that is used to handle the window
resize event. It is created using the `useCallback` hook and the `debounce` function from the lodash
library. */
  const handleResize = useCallback(
    debounce(() => {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    }, 10),
    []
  );

  /* The `handleScroll` function is a debounced callback function that is used to handle the window
  scroll event. It is created using the `useCallback` hook and the `throttle` function from the lodash
  library. */
  const handleScroll = useCallback(
    throttle(() => {
      // Get scroll position of the page
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // Convert scroll position to an index in our camera array
      let nextIndex = Math.floor(
        scrollPosition /
          (document.body.offsetHeight /
            interpolatedCameraPositionsAndRotations.length)
      );

      // Ensure index is within bounds of our array
      nextIndex = Math.max(0, nextIndex);
      nextIndex = Math.min(
        interpolatedCameraPositionsAndRotations.length - 1,
        nextIndex
      );

      if (nextIndex !== currentCameraSettingIndex) {
        const currentPosition = {
          x: cameraRef.current.position.x,
          y: cameraRef.current.position.y,
          z: cameraRef.current.position.z,
        };
        const currentRotation = {
          x: cameraRef.current.rotation.x,
          y: cameraRef.current.rotation.y,
          z: cameraRef.current.rotation.z,
        };

        new TWEEN.Tween(currentPosition)
          .to(interpolatedCameraPositionsAndRotations[nextIndex].position, 1000)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(() => {
            cameraRef.current.position.set(
              currentPosition.x,
              currentPosition.y,
              currentPosition.z
            );
          })
          .start();

        new TWEEN.Tween(currentRotation)
          .to(interpolatedCameraPositionsAndRotations[nextIndex].rotation, 1000)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(() => {
            cameraRef.current.rotation.set(
              currentRotation.x,
              currentRotation.y,
              currentRotation.z
            );
          })
          .start();

        setCameraSettingIndex(nextIndex);
      }
    }, 10),
    [currentCameraSettingIndex, interpolatedCameraPositionsAndRotations]
  );

  /* The `useEffect` hook is used to perform side effects in a React component. In this case, the effect
is responsible for setting up the initial state of the 3D model viewer. */
  useEffect(() => {
    let scene, camera, renderer;

    // Create a scene, camera, and renderer
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    renderer = new THREE.WebGLRenderer({
      antialias: false,
      precision: "lowp",
      alpha: false,
    }); // Antialiasing off
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0); // Set background color to white

    // Store scene, camera, and renderer references
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }

    /* The code is using the `STLLoader` from the Three.js library to load a 3D model file in STL format.
    It creates a new instance of the `STLLoader` and then calls its `load` method, passing in the file
    path of the STL model and a callback function. */
    const loader = new STLLoader();

    const gundamStlUrl =
      "https://raw.githubusercontent.com/phbui/phbui.github.io/main/src/assets/gundam.stl";

    fetch(gundamStlUrl)
      .then((response) => response.arrayBuffer())
      .then((data) => {
        const geometry = loader.parse(data);
        const material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: true,
          wireframeLinewidth: 10,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.frustumCulled = true;

        mesh.rotation.x = -Math.PI / 2;
        mesh.scale.set(0.01, 0.01, 0.01); // Lowered scale to make the model smaller.

        sceneRef.current.add(mesh);
      })
      .catch((error) => console.error("Error loading STL file:", error));

    // Set up camera position
    camera.position.x = defaultX;
    camera.position.y = defaultY;
    camera.position.z = defaultZ;

    // Animation loop
    animate();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [animate, defaultX, defaultY, defaultZ]);

  /* The `useEffect` hook is used to add event listeners for the `resize` and `wheel` events when the
component is mounted. The event listeners are added using the `window.addEventListener` method. */
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleResize, handleScroll]);

  return <div ref={containerRef} />;
});

export default ModelViewer;
