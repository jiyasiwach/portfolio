import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

/** Fibonacci sphere: N evenly spread points. */
function spherePoints(n: number, r: number): Float32Array {
  const out = new Float32Array(n * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const theta = golden * i;
    out[i * 3] = Math.cos(theta) * rad * r;
    out[i * 3 + 1] = y * r;
    out[i * 3 + 2] = Math.sin(theta) * rad * r;
  }
  return out;
}

/** Line segments between points closer than `maxDist` (precomputed once). */
function links(pts: Float32Array, maxDist: number): Float32Array {
  const segs: number[] = [];
  const n = pts.length / 3;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dx = pts[i * 3] - pts[j * 3], dy = pts[i * 3 + 1] - pts[j * 3 + 1], dz = pts[i * 3 + 2] - pts[j * 3 + 2];
      if (dx * dx + dy * dy + dz * dz < maxDist * maxDist) segs.push(pts[i * 3], pts[i * 3 + 1], pts[i * 3 + 2], pts[j * 3], pts[j * 3 + 1], pts[j * 3 + 2]);
    }
  }
  return new Float32Array(segs);
}

function NetworkGlobe() {
  const group = useRef<THREE.Group>(null!);
  const pts = useMemo(() => spherePoints(520, 2.2), []);
  const lines = useMemo(() => links(pts, 0.42), [pts]);
  const lineGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(lines, 3));
    return g;
  }, [lines]);

  useFrame((state, dt) => {
    // slow spin + gentle parallax toward the pointer
    group.current.rotation.y += dt * 0.12;
    const tx = state.pointer.y * 0.35, ty = state.pointer.x * 0.5;
    group.current.rotation.x += (tx - group.current.rotation.x) * 0.04;
    group.current.position.x += (ty - group.current.position.x) * 0.04;
  });

  return (
    <group ref={group}>
      <Points positions={pts} stride={3}>
        <PointMaterial transparent color="#f5c450" size={0.045} sizeAttenuation depthWrite={false} opacity={0.95} />
      </Points>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#b4821e" transparent opacity={0.28} />
      </lineSegments>
      <mesh>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshBasicMaterial color="#f5c450" wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

/** Full-bleed 3D background for the hero. Pointer events pass through to the page. */
export default function Globe() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} />
        <Stars radius={60} depth={30} count={1800} factor={3} saturation={0} fade speed={0.6} />
        <NetworkGlobe />
      </Canvas>
    </div>
  );
}
