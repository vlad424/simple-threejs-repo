import React from "react";
import { OrbitControls, Text } from "@react-three/drei";

const Cube = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Cube;
