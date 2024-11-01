/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 Book.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

const Book = (props) => {
  const { nodes, materials } = useGLTF('./model/Book.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cube012.geometry} material={materials['Brown.018']} />
        <mesh geometry={nodes.Cube012_1.geometry} material={materials['White.040']} />
        <mesh geometry={nodes.Cube012_2.geometry} material={materials['Metal.083']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Book.gltf')
export default Book ;