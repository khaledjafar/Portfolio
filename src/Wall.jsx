/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 Wall.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

const Wall = (props) => {
  const { nodes, materials } = useGLTF('./model/Wall.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Cube4230.geometry} material={materials['Stone.050']} />
        <mesh geometry={nodes.Cube4230_1.geometry} material={materials['StoneDark.011']} />
      </group>
    </group>
  )
}

useGLTF.preload('./model/Wall.gltf')
export default Wall;
