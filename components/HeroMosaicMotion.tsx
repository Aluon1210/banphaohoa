"use client";

import { useEffect } from "react";

export function HeroMosaicMotion() {
  useEffect(() => {
    const mosaic = document.querySelector<HTMLElement>("[data-hero-mosaic]");
    if (!mosaic) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = false;

    const syncMotion = () => {
      mosaic.classList.toggle(
        "is-motion-active",
        isVisible && !document.hidden && !reducedMotion.matches,
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        syncMotion();
      },
      { threshold: 0.15 },
    );

    observer.observe(mosaic);
    document.addEventListener("visibilitychange", syncMotion);
    reducedMotion.addEventListener("change", syncMotion);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncMotion);
      reducedMotion.removeEventListener("change", syncMotion);
    };
  }, []);

  return null;
}
