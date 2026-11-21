"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const revealTimers = new Set<number>();
    root.dataset.revealReady = "true";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-reveal]")
    );
    const observer = new IntersectionObserver(
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
          observer.unobserve(element);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -12% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      revealTimers.forEach(window.clearTimeout);
      revealTimers.clear();
      delete root.dataset.revealReady;
    };
  }, []);

  return null;
}
