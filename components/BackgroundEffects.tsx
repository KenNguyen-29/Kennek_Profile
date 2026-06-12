"use client";

import { useIsMobile } from "@/hooks/useIsMobile";

function MobileBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 bg-void-deep"
      aria-hidden
      style={{
        background:
          "radial-gradient(ellipse 100% 60% at 50% 0%, #0f2918 0%, #050a08 50%, #020604 100%)",
      }}
    />
  );
}

function DesktopBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% -10%, #0f2918 0%, #050a08 45%, #020604 100%)",
        }}
      />

      <div
        className="absolute -left-[20%] top-[5%] h-[75vh] w-[75vw] animate-mesh rounded-full blur-[110px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.28) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -right-[15%] top-[30%] h-[65vh] w-[65vw] animate-mesh rounded-full blur-[100px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(52,211,153,0.18) 0%, transparent 65%)",
          animationDelay: "-7s",
        }}
      />
      <div
        className="absolute bottom-0 left-[20%] h-[55vh] w-[55vw] animate-mesh rounded-full blur-[90px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(5,150,105,0.22) 0%, transparent 70%)",
          animationDelay: "-14s",
        }}
      />

      <div
        className="animate-grid-shift absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,211,153,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(2,6,4,0.75) 100%)",
        }}
      />

      {[
        { top: "12%", left: "8%", delay: "0s", size: 3 },
        { top: "28%", left: "85%", delay: "-3s", size: 2 },
        { top: "55%", left: "15%", delay: "-6s", size: 4 },
      ].map((p, i) => (
        <div
          key={i}
          className="animate-float absolute rounded-full bg-emerald-glow/40"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

export default function BackgroundEffects() {
  const isMobile = useIsMobile();

  return isMobile ? <MobileBackground /> : <DesktopBackground />;
}
