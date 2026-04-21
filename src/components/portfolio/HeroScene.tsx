import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* Slowly rotating sphere of points — soft, professional ambient backdrop */
const PointSphere = ({ count = 1800, radius = 3.2 }: { count?: number; radius?: number }) => {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Fibonacci sphere distribution = even, organic spacing
      const k = i + 0.5;
      const phi = Math.acos(1 - (2 * k) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * k;
      const r = radius * (0.85 + Math.random() * 0.3);
      arr[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      arr[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count, radius]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#c4b5fd"
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

/* Soft pulsing aurora ring behind the portrait */
const AuroraRing = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.08;
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.04;
    ref.current.scale.set(s, s, 1);
  });
  return (
    <mesh ref={ref} position={[0, 0, -0.5]}>
      <ringGeometry args={[1.6, 1.85, 128]} />
      <meshBasicMaterial
        color="#8b5cf6"
        transparent
        opacity={0.35}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export const HeroScene = () => (
  <Canvas
    camera={{ position: [0, 0, 6], fov: 45 }}
    dpr={[1, 1.5]}
    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    className="!absolute inset-0"
  >
    <ambientLight intensity={0.4} />
    <Suspense fallback={null}>
      <AuroraRing />
      <PointSphere />
    </Suspense>
  </Canvas>
);
