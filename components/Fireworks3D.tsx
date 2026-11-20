"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

type BurstProps = {
  origin: [number, number, number];
  apex: [number, number, number];
  delay: number;
  seed: number;
  primaryColor: string;
  secondaryColor: string;
  particleCount?: number;
};

function FireworkBurst({
  origin,
  apex,
  delay,
  seed,
  primaryColor,
  secondaryColor,
  particleCount = 320,
}: BurstProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const trailRef = useRef<THREE.Points>(null);
  const headRef = useRef<THREE.Points>(null);
  const elapsed = useRef(-delay);
  const count = particleCount;

  const { colors, velocities } = useMemo(() => {
    const colorValues = new Float32Array(count * 3);
    const particleVelocities: THREE.Vector3[] = [];

    const random = (index: number, salt: number) => {
      const value = Math.sin((seed + index * 19.17 + salt * 47.31) * 12.9898) * 43758.5453;
      return value - Math.floor(value);
    };

    const cPrimary = new THREE.Color(primaryColor);
    const cSecondary = new THREE.Color(secondaryColor);
    const cFlash = new THREE.Color("#FFF5C2");

    for (let i = 0; i < count; i += 1) {
      const angle = random(i, 1) * Math.PI * 2;
      const vertical = 0.18 + random(i, 2) * 0.82;
      const horizontal = Math.sqrt(Math.max(0, 1 - vertical * vertical));
      const speed = 1.35 + random(i, 3) * 1.45;
      particleVelocities.push(new THREE.Vector3(
        Math.cos(angle) * horizontal * speed,
        (vertical - 0.22) * speed,
        Math.sin(angle) * horizontal * speed
      ));

      const roll = random(i, 4);
      const color = roll < 0.68
        ? cPrimary.clone().lerp(cFlash, random(i, 5) * 0.25)
        : roll < 0.9
          ? cSecondary.clone().lerp(cPrimary, random(i, 6) * 0.5)
          : cFlash.clone();

      colorValues[i * 3] = color.r;
      colorValues[i * 3 + 1] = color.g;
      colorValues[i * 3 + 2] = color.b;
    }

    return { colors: colorValues, velocities: particleVelocities };
  }, [count, primaryColor, secondaryColor, seed]);

  const burstPositions = useMemo(() => new Float32Array(count * 3), [count]);
  const trailPositions = useMemo(() => new Float32Array(48 * 3), []);
  const headPositions = useMemo(() => new Float32Array(3), []);

  useFrame((_, delta) => {
    const burst = pointsRef.current;
    const trail = trailRef.current;
    const head = headRef.current;
    if (!burst || !trail || !head) return;

    elapsed.current += Math.min(delta, 0.05);
    if (elapsed.current > 7.2) elapsed.current = 0;

    const t = elapsed.current;
    const burstAttribute = burst.geometry.getAttribute("position");
    const trailAttribute = trail.geometry.getAttribute("position");
    const headAttribute = head.geometry.getAttribute("position");
    const burstMaterial = burst.material as THREE.PointsMaterial;
    const trailMaterial = trail.material as THREE.PointsMaterial;
    const headMaterial = head.material as THREE.PointsMaterial;

    if (t < 0) {
      burstMaterial.opacity = 0;
      trailMaterial.opacity = 0;
      headMaterial.opacity = 0;
      return;
    }

    const launchDuration = 1.25;
    if (t < launchDuration) {
      const launchProgress = t / launchDuration;
      const ease = 1 - Math.pow(1 - launchProgress, 1.7);
      const headX = THREE.MathUtils.lerp(origin[0], apex[0], ease);
      const headY = THREE.MathUtils.lerp(origin[1], apex[1], ease);
      const headZ = THREE.MathUtils.lerp(origin[2], apex[2], ease);

      headAttribute.setXYZ(0, headX, headY, headZ);
      headAttribute.needsUpdate = true;
      headMaterial.opacity = 0.95;

      for (let i = 0; i < 48; i += 1) {
        const trailProgress = THREE.MathUtils.clamp(
          ease - i * 0.022,
          0,
          ease
        );
        const distanceProgress = ease > 0
          ? THREE.MathUtils.clamp(trailProgress / ease, 0, 1)
          : 0;
        trailAttribute.setXYZ(
          i,
          THREE.MathUtils.lerp(origin[0], headX, distanceProgress),
          THREE.MathUtils.lerp(origin[1], headY, distanceProgress),
          THREE.MathUtils.lerp(origin[2], headZ, distanceProgress)
        );
      }
      trailAttribute.needsUpdate = true;
      trailMaterial.opacity = Math.min(0.95, launchProgress * 3);
      burstMaterial.opacity = 0;
      return;
    }

    trailMaterial.opacity = 0;
    headMaterial.opacity = 0;
    const burstTime = t - launchDuration;
    const gravity = 0.42;
    const drag = 0.24;

    for (let i = 0; i < count; i += 1) {
      const velocity = velocities[i];
      const effectiveTime = (1 - Math.exp(-drag * burstTime)) / drag;
      const x = apex[0] + velocity.x * effectiveTime;
      const y = apex[1] + velocity.y * effectiveTime - 0.5 * gravity * burstTime * burstTime;
      const z = apex[2] + velocity.z * effectiveTime;
      burstAttribute.setXYZ(i, x, y, z);
    }

    burstAttribute.needsUpdate = true;
    const flicker = Math.sin(burstTime * 22 + seed) * 0.12;
    const fadeIn = Math.min(1, burstTime / 0.12);
    const fadeOut = Math.max(0, (4.15 - burstTime) / 1.35);
    burstMaterial.opacity = Math.max(0, Math.min(0.95, (fadeIn * fadeOut) + flicker));
  });

  return (
    <>
      <points ref={headRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[headPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#FFF7B8"
          size={0.16}
          sizeAttenuation
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <points ref={trailRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[trailPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={primaryColor}
          size={0.045}
          sizeAttenuation
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[burstPositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.082}
          sizeAttenuation
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexColors
        />
      </points>
    </>
  );
}

function FireworkField() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <FireworkBurst
        origin={[-5.2, -3.3, -2.1]}
        apex={[-3.2, 1.8, -1.8]}
        delay={0.2}
        seed={111}
        primaryColor="#FFE5A3"
        secondaryColor="#F2A900"
        particleCount={300}
      />
      <FireworkBurst
        origin={[4.8, -3.4, -2.4]}
        apex={[3.2, 2.1, -1.5]}
        delay={2.15}
        seed={222}
        primaryColor="#FFCF67"
        secondaryColor="#FF7A89"
        particleCount={350}
      />
      <FireworkBurst
        origin={[0.2, -3.6, -2.8]}
        apex={[0.2, 2.8, -2.2]}
        delay={4.1}
        seed={333}
        primaryColor="#FFF2B2"
        secondaryColor="#C9183B"
        particleCount={380}
      />
      <Sparkles
        color="#D9B45B"
        count={55}
        noise={0.25}
        opacity={0.42}
        scale={[12, 7, 3]}
        size={1.8}
        speed={0.12}
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
      dpr={[1, 1.35]}
      fallback={<span aria-hidden="true" />}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
    >
      <FireworkField />
    </Canvas>
  );
}
