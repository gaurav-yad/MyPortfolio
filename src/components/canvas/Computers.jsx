import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1.8} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight
        position={[-20, 10, 10]}
        angle={0.8}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    // add a listener to check if the screen size is less than 500px
    const mediaQeury = window.matchMedia("(max-width: 500px)");

    // set the initial state of isMobile
    setMobile(mediaQeury.matches);


    // handle the change in screen size
    const handleMediaQueryChange = (e) => {
      setMobile(e.matches);
    };

    // add the listener for the change in screen size
    mediaQeury.addEventListener("change", handleMediaQueryChange);

    // remove the listener when the component is unmounted
    return () => {
      mediaQeury.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
