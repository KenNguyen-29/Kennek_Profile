"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";
import { setLenisInstance } from "@/lib/smoothScroll";
import SmoothScrollBridge from "./SmoothScrollBridge";
import "lenis/dist/lenis.css";

const lenisOptions = {
  lerp: 0.1,
  duration: 1.15,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1,
  autoRaf: true,
  anchors: true,
} as const;

function NativeScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    setLenisInstance(undefined);
  }, []);

  return <>{children}</>;
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia(
      "(max-width: 768px), (pointer: coarse)"
    ).matches;
    const isCv = pathname === "/cv";

    setEnabled(!isCv && !reduceMotion && !isMobile);
  }, [pathname]);

  if (!enabled) {
    return <NativeScroll>{children}</NativeScroll>;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      <SmoothScrollBridge />
      {children}
    </ReactLenis>
  );
}
