import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("suit.glb");
  return <primitive object={scene} scale={10} />;
};

const Look = () => {
  return (
    <div className="relative h-[50vh]"> 
      <div className="text-black text-center mt-20 darker-grotesque text-5xl">GO ON, TAKE A LOOK</div>
      <Canvas className="h-full mt-[5rem]" camera={{ position: [0, 0, 20] }}> 
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Model />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Look;
