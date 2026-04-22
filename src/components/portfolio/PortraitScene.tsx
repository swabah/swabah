import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron } from "@react-three/drei";
import * as THREE from "three";



const Orb = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, d) => {
    if (ref.current) {
      ref.current.rotation.x += d * 0.15;
      ref.current.rotation.y += d * 0.2;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <Icosahedron ref={ref} args={[1.4, 1]}>
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          emissive="#a78bfa"
          emissiveIntensity={0.4}
        />
      </Icosahedron>
    </Float>
  );
};

export const PortraitScene = () => (
  <Canvas
    camera={{ position: [0, 0, 5], fov: 45 }}
    dpr={[1, 1.5]}
    gl={{ antialias: true, alpha: true }}
    className="!absolute inset-0"
  >
    <ambientLight intensity={0.4} />
    <pointLight position={[5, 5, 5]} intensity={1.2} color="#c4b5fd" />
    <pointLight position={[-5, -3, -2]} intensity={0.8} color="#8b5cf6" />
    <Suspense fallback={null}>
      <Orb />
    </Suspense>
  </Canvas>
);
