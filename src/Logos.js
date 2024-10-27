import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Logos = () => {
  const reactRef = useRef();
  const htmlRef = useRef();
  const cssRef = useRef();
  const githubRef = useRef();
  const bootstrapRef = useRef();
  const javascriptRef = useRef();
  const threejsRef = useRef();
  const tailwindRef = useRef();

  // Load the textures
  const reacttexture = useLoader(THREE.TextureLoader, './images/reacticon.png');
  const htmltexture = useLoader(THREE.TextureLoader, './images/htmlicon.png');
  const csstexture = useLoader(THREE.TextureLoader, './images/CSSicon.png');
  const bootstraptexture = useLoader(THREE.TextureLoader, './images/bootstrapicon.png');
  const javascripttexture = useLoader(THREE.TextureLoader, './images/javascripticon.png');
  const threejstexture = useLoader(THREE.TextureLoader, './images/threejsicon.png');
  const githubtexture = useLoader(THREE.TextureLoader, './images/githubicon.png');
  const tailwindtexture = useLoader(THREE.TextureLoader, './images/tailwindicon.png');

  // Rotate each plane on the Y-axis
  useFrame((_, delta) => {
    [reactRef, htmlRef, cssRef, githubRef, bootstrapRef, javascriptRef, threejsRef, tailwindRef].forEach(ref => {
      if (ref.current) ref.current.rotation.y += delta * 2; // Adjust speed as needed
    });
  });

  return (
    <>
      <mesh ref={reactRef} position={[0.3, -3.4, 3.4]}>
        <planeGeometry args={[0.1, 0.1]} />
        <meshBasicMaterial map={reacttexture} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={htmlRef} position={[0.3, -3.6, 3.4]}>
        <planeGeometry args={[0.1, 0.1]} />
        <meshBasicMaterial map={htmltexture} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={cssRef} position={[0.3, -3.8, 3.4]}>
        <planeGeometry args={[0.1, 0.1]} />
        <meshBasicMaterial map={csstexture} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={githubRef} position={[0.3, -4, 3.4]}>
        <planeGeometry args={[0.1, 0.1]} />
        <meshBasicMaterial map={githubtexture} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={bootstrapRef} position={[0.5, -3.4, 3.4]}>
        <planeGeometry args={[0.1, 0.1]} />
        <meshBasicMaterial map={bootstraptexture} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={javascriptRef} position={[0.5, -3.6, 3.4]}>
        <planeGeometry args={[0.1, 0.1]} />
        <meshBasicMaterial map={javascripttexture} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={threejsRef} position={[0.5, -3.8, 3.4]}>
        <planeGeometry args={[0.1, 0.1]} />
        <meshBasicMaterial map={threejstexture} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={tailwindRef} position={[0.5, -4, 3.4]}>
        <planeGeometry args={[0.1, 0.1]} />
        <meshBasicMaterial map={tailwindtexture} transparent={true} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default Logos;
