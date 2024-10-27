import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { ShaderMaterial } from "three";

const CyanSquareParticles = () => {
  const rock = useRef();
  
  useFrame((_, delta) => {
    rock.current.rotation.y += delta * 0.06;
    rock.current.rotation.x += delta * 0.03;
  });

  const texture3 = useLoader(THREE.TextureLoader, "./images/cyansquare.png");

  const rocksAmount = 30;
  const rockspositionArray = new Float32Array(rocksAmount * 3);
  
  for (let i = 0; i < rocksAmount * 3; i++) {
    rockspositionArray[i] = (Math.random() - 0.5) * 80.0;
  }

  // Custom Shader Material to apply texture colors to particles
  const particleMaterial = new ShaderMaterial({
    uniforms: {
      uTexture: { value: texture3 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * modelViewPosition;
        gl_PointSize = 30.0;
      }
    `,
    fragmentShader: `
      uniform sampler2D uTexture;
      varying vec2 vUv;
      void main() {
        gl_FragColor = texture2D(uTexture, gl_PointCoord);
      }
    `,
    transparent: true,
  });

  return (
    <points ref={rock}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={rockspositionArray.length / 3}
          itemSize={3}
          array={rockspositionArray}
        />
      </bufferGeometry>
      <primitive  attach="material" object={particleMaterial} />
    </points>
  );
};

export default CyanSquareParticles;
