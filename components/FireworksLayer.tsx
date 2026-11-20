"use client";

import dynamic from "next/dynamic";

const Fireworks3D = dynamic(() => import("@/components/Fireworks3D"), {
  ssr: false,
  loading: () => null,
});

export function FireworksLayer() {
  return (
    <div aria-hidden="true" className="fireworks-layer">
      <Fireworks3D />
    </div>
  );
}
