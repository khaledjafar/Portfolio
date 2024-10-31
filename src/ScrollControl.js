// import { ScrollControls, Scroll, PerspectiveCamera } from "@react-three/drei";

// import { useRef } from "react";


// const ScrollControl = () => {
// //   const model = useGLTF("./model/model.gltf");
// const { camera } = useThree();
// const scrollPosition = useRef();
// const scroll = useScroll();
// const CameraRef = useRef();


  
//   useFrame(() => {

//    cameraref.position.z = 2 + scroll(0,1,0);
//     // console.log(usescroll);

//   });
    
//     return(
//     <>
     
//         <ambientLight intensity={4} />
//         <directionalLight />
//         <perspectiveCamera ref={CameraRef} />

//         <ScrollControls pages={3} damping={0.4}>
//         <Scroll>
//           {/* <primitive object={model.scene} position={[1.5, -1, 0]} scale={0.5} /> */}
       
//             <mesh position={[0,0,1]}>
//                 <boxGeometry />
//                 <meshBasicMaterial color="#ECDFCC" />
//             </mesh>

//         </Scroll>

//         <Scroll html>


        
// <nav>
//   <div>
//     <ul>

//     </ul>
//   </div>
// </nav>



          
//         </Scroll>
//       </ScrollControls>
//     </>
//   );
// };

// export default ScrollControl;


import {useScroll } from "@react-three/drei";
import { ScrollControls, Scroll, PerspectiveCamera ,Cloud , Image as DreiImage  , Html , Text ,Text3D , Center , Float,Sparkles, Stars } from "@react-three/drei";
import {  } from "@react-three/drei";

import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

import Laptop from "./Laptop.js"
import ReactLogo from "./ReactLogo.jsx"
import Wall from "./Wall.jsx"
import Book from "./Book.jsx"
import Logos from "./Logos.js"
import RedSquareParticles from "./RedSquareParticles.js"
import BlueSquareParticles from "./BlueSquareParticles.js"
import CyanSquareParticles from "./CyanSquareParticles.js"
import GreenSquareParticles from "./GreenSquareParticles.js"
import OrangeSquareParticles from "./OrangeSquareParticles.js"
import PinkSquareParticles from "./PinkSquareParticles.js"
import PurpleSquareParticles from "./PurpleSquareParticles.js"
import WhiteSquareParticles from "./WhiteSquareParticles.js"
import YellowSquareParticles from "./YellowSquareParticles.js"

import Headphones from "./Headphones.jsx"

import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';




const ScrollContent = ({ cameraRef }) => {
   
const scroll = useScroll(); // Get scroll data from useScroll()
const boxRef = useRef(); // Reference for the box mesh

    useFrame(() => {
      if (cameraRef.current) {
        // Update camera's z-position based on scroll offset
        const newCameraZ = 2 + scroll.offset * 20; // Multiplier to control zoom speed
  
        // Check if the camera's z-position is less than or equal to 10
        if (newCameraZ < 5) {
          cameraRef.current.position.z = newCameraZ; // Zoom out
        } else {
          cameraRef.current.position.z = Math.min(newCameraZ, 5); // Prevent going above 20
        }
  
      
        if (boxRef.current) {
          const scaleValue = Math.max(0.5, 1 - (cameraRef.current.position.z - 2) / 8); // Scale down based on z-position
          boxRef.current.scale.set(scaleValue, scaleValue, scaleValue);
        }
      }
    });
    
    return null; 
  };
  


const ScrollControl = () => {
  
    const CameraRef = useRef();
    const boxRef = useRef(); 


  return (
    <>
    
      <ambientLight intensity={4} />
      <directionalLight />
      

      <PerspectiveCamera ref={CameraRef} makeDefault position={[0, 0, 2]} />

     
      <ScrollControls pages={4} damping={0.4}>
      
      <ScrollContent cameraRef={CameraRef} />
      
        
        
        <Scroll>
 

        {/* <ReactLogo position={[1, -4, 3]} scale={0.3}/> */}

        <Book position={[0, -3.7, 3]} scale={3} rotation={[Math.PI / 2 ,0 , 0]} />

        <Wall position={[0, -9, 1.2]} scale={1} />



        {/* <mesh ref={boxRef} position={[1, -0.5, 3]} scale={0.2}>
              <boxGeometry />
              <meshBasicMaterial color="#ECDFCC" />
            </mesh>  */}
            {/* <Headphones scale={0.05} position={[0.3,0,1.4]} /> */}

           
         
          <RedSquareParticles />
          <BlueSquareParticles />
          <CyanSquareParticles />
          <GreenSquareParticles />
          <OrangeSquareParticles />
          <PinkSquareParticles />
          <PurpleSquareParticles />
          <WhiteSquareParticles />
          <YellowSquareParticles /> 

          <Laptop />


          <Cloud position={[0, -2, 3]}
              width={100}
              opacity={3}
              scale={0.2}
              depthTest={false}
              depth={4}
              segments={20}
              speed={0.5}
              color={'#EEEEEE'}
          />
          <Logos />
          
          



          
        </Scroll>

        {/* Scroll for HTML elements */}
        <Scroll html>
            <div className="html-content">
                <ul className="html-sections">
                    <li className="html-part1">
                 
                    </li>
                    <li className="html-part2">  
                      <div className="aboutme-div">
                        <h1 className="aboutme-title" style={{
  filter: 'drop-shadow(2px 2px 6px rgba(220, 220, 220, 0.6))', 
  color: '#000',
  textAlign: 'center'
}}>About Me</h1>
                          <h1 className="aboutme-text">Hi, I'm Khaled Jafar, a passionate frontend developer with a love for
                            creating engaging and user-friendly web experiences.
                            I thrive on solving complex problems through clean, 
                            efficient code and always strive to keep up with the latest
                            trends in web development. My journey in frontend development
                            began with a interest for how design meets functionality,
                            and since then, I’ve specialized in creating responsive, 
                            accessible websites and applications.
                          </h1>
                      </div>   
                    </li>
                    <li className="html-part3">
                    <h1 style={{
  filter: 'drop-shadow(2px 2px 6px rgba(3, 3, 3, 0.6))', 
  color: '#fff',
  textAlign: 'center'
}}>
  About My Resume
</h1>                      <div className="aboutMyResume">
                        <div className="leftResume">
                          <div></div>
                          <div>
                          <table class="smooth-table">
                            <tr>
                              <td>Age:</td>
                              <td>23</td>
                            </tr>
                            <tr>
                              <td>Residence:</td>
                              <td>Jordan</td>
                            </tr>
                            <tr>
                              <td>Address:</td>
                              <td>Amman</td>
                            </tr>
                            <tr>
                              <td>E-mail:</td>
                              <td>khaledjafarmoh@gmail.com</td>
                            </tr>
                            <tr>
                              <td>PhoneNumber:</td>
                              <td>+962 798015904</td>
                            </tr>
                            <tr>
                              <td>Employed:</td>
                              <td>No</td>
                            </tr>
                          </table>
                          </div>
                        </div> 
                          {/* 2 */}
                          
                        <div>
                   
                        </div>
            
                      </div>
                    </li> 
                    <li className="html-part4">
                    <div class="card">
                         {/* <MyWaveSVG /> 
                          <div class="top-part">
                      </div>*/}
                          <div class="card-body">
                            <h1 style={{
  filter: 'drop-shadow(2px 2px 6px rgba(3, 3, 3, 0.6))', 
  color: '#fff',
  textAlign: 'center'
}}>Contacts</h1>
                              <div class="Platforms">

                                <a href="https://www.linkedin.com/in/khaled-jafar-abu-ijdea-a-547483274/" target="_blank" rel="noopener noreferrer">
                                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 50 50">
                                      <path fill="#ffffff" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                  </svg>
                                </a>
                                <a href="https://github.com/khaledjafar" target="_blank" rel="noopener noreferrer">
                                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 50 50">
                                      <path fill="#ffffff" d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                                  </svg>
                                </a>
                                <a href="https://www.instagram.com/khaled__jafar/" target="_blank" rel="noopener noreferrer">
                                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 50 50">
                                    <path fill="#ffffff" d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                                  </svg>
                                </a>
                              </div>
                              <div class="end-card">
                              <a href="https://www.linkedin.com/in/khaled-jafar-abu-ijdea-a-547483274/" target="_blank" rel="noopener noreferrer">
                                <button class="btn">Connect</button>
                              </a>
                              <a href="https://www.linkedin.com/in/khaled-jafar-abu-ijdea-a-547483274/" target="_blank" rel="noopener noreferrer">
                                <button class="btn2">Message</button>
                              </a>
                              </div>
                              <footer>
                                <p>© 2024 (Khaled jafar)</p>
                              </footer>
                          </div>
                      </div>
                    </li>
                </ul>
            </div>
            
        </Scroll>
       
      </ScrollControls>
     
      </>
  );
};



export default ScrollControl;
