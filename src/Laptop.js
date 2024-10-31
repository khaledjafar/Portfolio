/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
        
import React, { useRef } from 'react'
import { useGLTF, Text, Html, Float } from '@react-three/drei'

export default function Laptop(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

  const MyWaveSVG = () => (
    <svg x="0px" y="0px" viewBox="0 0 1240 265">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#002544', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#749bc2', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path className="wave w0" fill="#4CC9FE" fillOpacity="1" d="M0,64L48,85.3C96,107,192,149,288,192C384,235,480,277,576,266.7C672,256,768,192,864,186.7C960,181,1056,235,1152,218.7C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      <path className="wave w1" fill="#4CC9FE" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,240C384,245,480,203,576,181.3C672,160,768,160,864,144C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      <path className="wave w2" fill="#4CC9FE" fillOpacity="1" d="M0,224L48,234.7C96,245,192,267,288,240C384,213,480,139,576,117.3C672,96,768,128,864,160C960,192,1056,224,1152,208C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      <path className="wave w3" fill="#4CC9FE" fillOpacity="1" d="M0,64L48,96C96,128,192,192,288,218.7C384,245,480,235,576,192C672,149,768,75,864,58.7C960,43,1056,85,1152,112C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    </svg>
  );


  return (
    <group ref={group} {...props} dispose={null}>
        <group position={[0, -1, 1.5]} scale={[0.1, 0.1, 0.1,]} >
        
            <mesh geometry={nodes.Circle001.geometry} material={nodes.Circle001.material} />
            <mesh geometry={nodes.Circle001_1.geometry} material={nodes.Circle001_1.material} />
            <mesh geometry={nodes.Circle001_2.geometry} material={materials.HeadPhoneHole} />
            <mesh geometry={nodes.Circle001_3.geometry} material={nodes.Circle001_3.material} />
            <mesh geometry={nodes.Circle001_4.geometry} material={nodes.Circle001_4.material} />
            <mesh geometry={nodes.Circle001_5.geometry} material={materials.TouchbarBorder} />
            <mesh geometry={nodes.Circle001_6.geometry} material={materials.Keyboard} />
            <mesh geometry={nodes.FrontCameraRing001.geometry} material={materials['CameraRIngBlack.002']} position={[-0.15, 19.57, -16.15,]} scale={5.8} />
            <mesh geometry={nodes.KeyboardKeyHole.geometry} material={nodes.KeyboardKeyHole.material} position={[-11.79, -0.15, -8.3,]} scale={5.8} />
            <mesh geometry={nodes.RubberFoot.geometry} material={materials.DarkRubber} position={[-11.95, -0.75, 7.86,]} scale={5.8} />
            <group position={[0.01, -0.21, -10.56,]} scale={5.8} >
            <mesh geometry={nodes.Circle012.geometry} material={materials.HingeBlack} />
            <mesh geometry={nodes.Circle012_1.geometry} material={materials.HingeMetal} />
        </group>
        <group position={[0, -0.51, 0,]} scale={5.8} >
            <mesh geometry={nodes.Circle006.geometry} material={nodes.Circle006.material} />
            <mesh geometry={nodes.Circle006_1.geometry} material={nodes.Circle006_1.material} />
        </group>
        <group position={[-11.79, -0.15, -8.3,]} scale={5.8} >
            <mesh geometry={nodes.Circle.geometry} material={nodes.Circle.material} />
            <mesh geometry={nodes.Circle_1.geometry} material={materials.Key} />
            <mesh geometry={nodes.Circle_2.geometry} material={materials.Touchbar} />
        </group>
                <group position={[0.01, -0.47, -10.41,]} rotation={[1.6, 0, 0,]} scale={5.8} >
                {/* <Html wrapperClass="text" position={[0,1,-2]}><div wrapperClass="divider"><h1>hello</h1></div></Html> */}

                    <mesh geometry={nodes.Circle002.geometry} material={nodes.Circle002.material} />
                    <mesh geometry={nodes.Circle002_1.geometry} material={materials.Screen} />
                    <mesh geometry={nodes.Circle002_2.geometry} material={materials.ScreenGlass}>
                    <Html position={[0, 0, -2]} distanceFactor={1.41} center>
                    <div className="container">
                        <header>
                            <div className='mt'>
                                {/* <nav>
                                    <ul>
                                    <li><a href="#aboutmyresume">Khaled jafar</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#projects">Projects</a></li>
                                    <li><a href="#contacts">Contact</a></li>
                                    </ul>
                                </nav> */}
                               
                            </div>
                            <MyWaveSVG />
                        </header>

                        <div className="row">
                            <div className="Homepage-body">
                                
                                <h1 style={{
                                filter: 'drop-shadow(2px 2px 6px rgba(220, 220, 220, 0.6))', 
                                color: '#fff',
                                 textAlign: 'center'
                            }}>Hi, I'm Khaled </h1>
                                
                                <p className='p-info'>I'm a frontend developer, I like to craft solid and scalable frontend<br/> products  with great user experiences</p>
                                <div className='big-circle'></div>
                                
                                <img src="./images/fullavatar2.png" className="Avatar" alt="MyAvatar" />
                            </div>
                        </div>
                    </div>

                    </Html>
                    </mesh> 

                    <mesh geometry={nodes.Circle002_3.geometry} material={materials.Rubber} />
                    <mesh geometry={nodes.Circle002_4.geometry} material={materials.DisplayGlass}>
   
                    </mesh> 
                    <mesh geometry={nodes.AppleLogo000.geometry} material={materials['AppleLogo.004']} position={[0, -0.11, -1.8]} rotation={[-Math.PI, 0, -Math.PI]}scale={[0.58, 0.58, 0.58]}></mesh> 
                
                </group>
        <group position={[12.2, 0.03, 0.6,]} scale={5.8} >
            <mesh geometry={nodes.Circle003.geometry} material={nodes.Circle003.material} />
            <mesh geometry={nodes.Circle003_1.geometry} material={nodes.Circle003_1.material} />
        </group>
        <group position={[-15.03, 0.03, 0.6,]} scale={5.8} >
            <mesh geometry={nodes.Circle009.geometry} material={nodes.Circle009.material} />
            <mesh geometry={nodes.Circle009_1.geometry} material={nodes.Circle009_1.material} />
        </group>
        </group>
       
    </group>
    
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')