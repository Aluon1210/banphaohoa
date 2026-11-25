"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const revealTimers = new Set<number>();
    let observer: IntersectionObserver | undefined;

    // This layout client component hydrates before streamed page components.
    // Defer DOM-only reveal classes so React hydrates the page unchanged first.
    const initialize = () => {
      root.dataset.revealReady = "true";
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>("[data-scroll-reveal]")
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target as HTMLElement;
            if (element.dataset.revealSequence === "image" && !reducedMotion.matches) {
              element.classList.add("is-visible");
              const timer = window.setTimeout(() => {
                element.classList.add("is-revealed");
                revealTimers.delete(timer);
              }, 320);
              revealTimers.add(timer);
            } else {
              element.classList.add("is-revealed");
            }
            observer?.unobserve(element);
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -12% 0px" }
      );

      elements.forEach((element) => observer?.observe(element));
    };

    const initializeTimer = window.setTimeout(initialize, 500);

    return () => {
      window.clearTimeout(initializeTimer);
      observer?.disconnect();
      revealTimers.forEach(window.clearTimeout);
      revealTimers.clear();
      delete root.dataset.revealReady;
    };
  }, []);

  return null;
}
