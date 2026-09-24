"use client";

import { useEffect, useRef } from "react";

export function Background() {
  const spotlight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      spotlight.current?.style.setProperty("--x", `${e.clientX}px`);
      spotlight.current?.style.setProperty("--y", `${e.clientY}px`);
      spotlight.current?.style.setProperty("opacity", "1");
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(rgb(var(--grid)/0.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_75%)]" />
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/[0.07] blur-3xl" />
      <div
        ref={spotlight}
        className="absolute inset-0 opacity-0 transition-opacity duration-500 [background:radial-gradient(600px_circle_at_var(--x)_var(--y),rgb(var(--accent)/0.07),transparent_80%)]"
      />
    </div>
  );
}
