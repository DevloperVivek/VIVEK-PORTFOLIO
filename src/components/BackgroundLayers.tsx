import React, { useEffect } from "react";

export const BackgroundLayers: React.FC = () => {
  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Only schedule a new rAF if we don't already have one pending
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          // Only update if position meaningfully changed (>2px) to skip micro-movements
          if (Math.abs(e.clientX - lastX) > 2 || Math.abs(e.clientY - lastY) > 2) {
            document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
            document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
            lastX = e.clientX;
            lastY = e.clientY;
          }
          rafId = 0;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    /*
     * GPU LAYER PROMOTION STRATEGY:
     * The outer div is `fixed` with `transform: translateZ(0)` (via index.css rule)
     * which hoists it to its own compositor layer.
     * This means browser scrolling never triggers a repaint of this element.
     * Each inner div uses `will-change: opacity` or `will-change: transform` only
     * where animations actually occur, keeping composited layer count minimal.
     */
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-bg-primary"
      style={{ willChange: "transform" }}
    >
      {/* Layer 1: Deep space base gradient — fully static, painted once */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#030712] via-[#090B15] to-[#030712]" />

      {/* Layer 2: Static dot grid — no animation, static paint */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Layer 3: Grain texture — static SVG tile, no animation, no blend mode */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "160px 160px",
        }}
      />

      {/* Layer 4: Mouse-following radial glow
          Reads CSS custom properties set by the mouse handler above.
          CSS custom properties update does NOT trigger a paint — only the
          element that reads them is invalidated, and since this element
          has will-change:transform it's on its own compositor layer. */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(700px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,212,255,0.07), rgba(124,58,237,0.04) 55%, transparent 100%)`,
          willChange: "transform",
        }}
      />

      {/* Static corner glows — large blurred divs, painted once, never move */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-[120px] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-accent-purple/5 blur-[150px] translate-x-1/3 translate-y-1/3"
        style={{ willChange: "transform" }}
      />
    </div>
  );
};

export default BackgroundLayers;
