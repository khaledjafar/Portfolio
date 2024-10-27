import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('./model/ReactLogo.gltf');
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      // Increment rotation on the Y-axis
      groupRef.current.rotation.y += 0.01; // Adjust speed as needed
      console.log(materials);
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['default']} position={[0, 1.311, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.266}>
        <mesh geometry={nodes.Torus001.geometry} material={materials['default']} position={[0.336, -0.081, 0.024]} rotation={[-0.16, 0, -Math.PI / 2]} scale={[3.754, 1.468, 3.005]} />
        <mesh geometry={nodes.Torus002.geometry} material={materials['default']} position={[-0.515, -0.104, 0.165]} rotation={[-1.179, 0, -Math.PI / 2]} scale={[3.754, 1.468, 3.005]} />
        <mesh geometry={nodes.Torus003.geometry} material={materials['default']} position={[-0.035, -0.107, 0.004]} rotation={[0.89, 0, -Math.PI / 2]} scale={[3.754, 1.468, 3.005]} />
      </mesh>
    </group>
  );
};

useGLTF.preload('./model/ReactLogo.gltf');

export default ReactLogo;
