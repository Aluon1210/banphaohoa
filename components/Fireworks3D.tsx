"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

type BurstProps = {
  position: [number, number, number];
  delay: number;
  seed: number;
  primaryColor?: string;
  secondaryColor?: string;
  particleCount?: number;
};

function SphericalBurst({
  position,
  delay,
  seed,
  primaryColor = "#D9B45B",
  secondaryColor = "#970019",
  particleCount = 240,
}: BurstProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const elapsed = useRef(-delay);
  const count = particleCount;

  const { colors, velocities } = useMemo(() => {
    const colorValues = new Float32Array(count * 3);
    const particleVelocities: THREE.Vector3[] = [];

    let value = seed;
    const random = () => {
      value = (value * 16807) % 2147483647;
      return (value - 1) / 2147483646;
    };

    const cPrimary = new THREE.Color(primaryColor);
    const cSecondary = new THREE.Color(secondaryColor);
    const cWhiteGold = new THREE.Color("#FFF9D6");
    const cAmber = new THREE.Color("#FFB74D");

    for (let i = 0; i < count; i += 1) {
      // Archimedes uniform spherical distribution
      const u = random() * 2 - 1;
      const theta = random() * Math.PI * 2;
      const sinPhi = Math.sqrt(Math.max(0, 1 - u * u));

      // Speed with realistic bell-curve spread
      const speed = 1.2 + random() * 1.5;
      const vx = sinPhi * Math.cos(theta) * speed;
      const vy = sinPhi * Math.sin(theta) * speed + 0.35;
      const vz = u * speed;

      particleVelocities.push(new THREE.Vector3(vx, vy, vz));

      // Color variation: Imperial Gold (60%), Ruby Crimson (25%), White-Gold Flash (15%)
      const roll = random();
      const col = new THREE.Color();
      if (roll < 0.6) {
        col.lerpColors(cPrimary, cAmber, random() * 0.3);
      } else if (roll < 0.85) {
        col.lerpColors(cSecondary, cPrimary, random() * 0.35);
      } else {
        col.copy(cWhiteGold);
      }

      colorValues[i * 3] = col.r;
      colorValues[i * 3 + 1] = col.g;
      colorValues[i * 3 + 2] = col.b;
    }

    return { colors: colorValues, velocities: particleVelocities };
  }, [seed, count, primaryColor, secondaryColor]);

  const initialPositions = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame((_, delta) => {
    const points = pointsRef.current;
    if (!points) return;

    elapsed.current += Math.min(delta, 0.05);
    // Loop period: 5.0 seconds
    if (elapsed.current > 5.0) {
      elapsed.current = 0;
    }

    const t = elapsed.current;
    const positionAttribute = points.geometry.getAttribute("position");
    const material = points.material as THREE.PointsMaterial;

    if (t < 0) {
      material.opacity = 0;
      return;
    }

    // Realistic physics: Air drag + gravity
    const gravity = 0.44;
    const drag = 0.26;

    for (let i = 0; i < count; i += 1) {
      const v = velocities[i];
      const effectiveT = (1 - Math.exp(-drag * t)) / drag;
      const x = position[0] + v.x * effectiveT;
      const y = position[1] + v.y * effectiveT - 0.5 * gravity * t * t;
      const z = position[2] + v.z * effectiveT;

      positionAttribute.setXYZ(i, x, y, z);
    }

    positionAttribute.needsUpdate = true;

    // Twinkling sparkle trail
    const flicker = Math.sin(t * 26 + seed) * 0.16;
    const fade = Math.max(0, Math.min(1, t / 0.12, (4.4 - t) / 1.2)) + flicker;
    material.opacity = Math.max(0, Math.min(0.98, fade));
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[initialPositions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        size={0.075}
        sizeAttenuation
        transparent
        vertexColors
      />
    </points>
  );
}

function FireworkField() {
  return (
    <>
      <ambientLight intensity={0.8} />
      {/* Burst 1: High Left - Royal Gold Kamuro */}
      <SphericalBurst
        delay={0.15}
        particleCount={260}
        position={[-3.2, 0.8, -1.8]}
        primaryColor="#D9B45B"
        secondaryColor="#970019"
        seed={111}
      />
      {/* Burst 2: Right Center - Crimson Festive Peony */}
      <SphericalBurst
        delay={1.4}
        particleCount={280}
        position={[2.9, 1.5, -1.2]}
        primaryColor="#FFD369"
        secondaryColor="#970019"
        seed={222}
      />
      {/* Burst 3: Apex High Center - Grand Golden Chrysanthemum */}
      <SphericalBurst
        delay={2.7}
        particleCount={300}
        position={[0.2, 2.5, -2.0]}
        primaryColor="#D9B45B"
        secondaryColor="#FF6B6B"
        seed={333}
      />
      {/* Burst 4: Lower Center-Left Accent */}
      <SphericalBurst
        delay={3.9}
        particleCount={220}
        position={[-1.8, -0.1, -0.9]}
        primaryColor="#FCE294"
        secondaryColor="#970019"
        seed={444}
      />
      {/* Continuous ambient gold dust & embers */}
      <Sparkles
        color="#D9B45B"
        count={75}
        noise={0.3}
        opacity={0.7}
        scale={[12, 7, 4]}
        size={2.6}
        speed={0.2}
      />
      <Sparkles
        color="#FF8A8A"
        count={30}
        noise={0.4}
        opacity={0.45}
        scale={[10, 6, 3]}
        size={2.0}
        speed={0.14}
      />
    </>
  );
}

export default function Fireworks3D() {
  return (
    <Canvas
      aria-hidden="true"
      camera={{ fov: 46, position: [0, 0, 8] }}
      className="fireworks-canvas"
      dpr={[1, 1.5]}
      fallback={<span aria-hidden="true" />}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
    >
      <FireworkField />
    </Canvas>
  );
}
