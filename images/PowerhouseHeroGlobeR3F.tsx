import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

type R3FProps = {
  className?: string;
  height?: number | string;
  wireColor?: string;   // e.g. '#67e8f9'
  energyColor?: string; // e.g. '#a78bfa'
  rotateSpeed?: number; // radians per second
  parallax?: boolean;
};

/** Internal component: wireframe sphere + energy arcs + particles */
function GlobeContent({
  wireColor = '#67e8f9',
  energyColor = '#a78bfa',
  rotateSpeed = 0.2,
  parallax = true,
}: Omit<R3FProps, 'className' | 'height'>) {
  const group = useRef<THREE.Group>(null!);
  const ring1 = useRef<THREE.Line>(null!);
  const ring2 = useRef<THREE.Line>(null!);
  const ring3 = useRef<THREE.Line>(null!);

  // Create wireframe sphere
  const sphere = useMemo(() => {
    const geom = new THREE.IcosahedronGeometry(1, 5);
    const wire = new THREE.WireframeGeometry(geom);
    const mat = new THREE.LineBasicMaterial({ color: wireColor, opacity: 0.25, transparent: true });
    return new THREE.LineSegments(wire, mat);
  }, [wireColor]);

  // Create three great-circle arcs
  const makeRing = (rot: [number, number, number]) => {
    const curve = new THREE.EllipseCurve(0, 0, 1.02, 1.02, 0, 2 * Math.PI, false, 0);
    const points = curve.getPoints(256).map((p) => new THREE.Vector3(p.x, 0, p.y));
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineDashedMaterial({
      color: energyColor,
      dashSize: 0.08,
      gapSize: 0.16,
      linewidth: 1,
      transparent: true,
      opacity: 0.9,
    } as any);
    const line = new THREE.Line(geom, mat);
    line.computeLineDistances();
    line.rotation.set(...rot);
    return line;
  };

  const particles = useMemo(() => {
    const count = 400;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 1.1 + Math.random() * 0.2;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      positions.set([x, y, z], i * 3);
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({ color: energyColor, size: 0.01, transparent: true, opacity: 0.8 });
    return new THREE.Points(geom, mat);
  }, [energyColor]);

  useFrame((state, delta) => {
    // Rotate globe
    if (group.current) {
      group.current.rotation.y += rotateSpeed * delta;
    }
    // Animate dashes
    const advance = (line?: THREE.Line) => {
      if (!line) return;
      const mat = line.material as THREE.LineDashedMaterial;
      mat.dashOffset = (mat.dashOffset || 0) - delta * 0.3;
    };
    advance(ring1.current);
    advance(ring2.current);
    advance(ring3.current);

    // Parallax effect
    if (parallax && group.current) {
      const x = (state.pointer.x || 0) * 0.15;
      const y = (state.pointer.y || 0) * 0.15;
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, y, 0.05);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -x, 0.05);
    }
  });

  return (
    <group ref={group}>
      <primitive object={sphere} />
      <line ref={ring1} geometry={makeRing([0, 0, 0]).geometry} material={makeRing([0, 0, 0]).material} />
      <line ref={ring2} geometry={makeRing([Math.PI / 3, 0, 0]).geometry} material={makeRing([Math.PI / 3, 0, 0]).material} />
      <line ref={ring3} geometry={makeRing([Math.PI / 2, Math.PI / 4, 0]).geometry} material={makeRing([Math.PI / 2, Math.PI / 4, 0]).material} />
      <primitive object={particles} />
    </group>
  );
}

const PowerhouseHeroGlobeR3F: React.FC<R3FProps> = ({
  className,
  height = 420,
  wireColor = '#67e8f9',
  energyColor = '#a78bfa',
  rotateSpeed = 0.2,
  parallax = true,
}) => {
  return (
    <div className={className} style={{ width: '100%', height: typeof height === 'number' ? `${height}px` : height }}>
      <Canvas gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 2.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <GlobeContent wireColor={wireColor} energyColor={energyColor} rotateSpeed={rotateSpeed} parallax={parallax} />
        {/* Optional controls for debugging; comment out for prod */}
        {/* <OrbitControls enableZoom={false} /> */}
      </Canvas>
    </div>
  );
};

export default PowerhouseHeroGlobeR3F;
