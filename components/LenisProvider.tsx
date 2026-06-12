"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";
import { setLenisInstance } from "@/lib/smoothScroll";
import SmoothScrollBridge from "./SmoothScrollBridge";
import "lenis/dist/lenis.css";

const lenisOptions = {
  lerp: 0.05,
  duration: 2.5,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2.15,
  autoRaf: true,
  anchors: true,
} as const;

function CvRouteReset({ children }: { children: React.ReactNode }) {
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
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const isCv = pathname === "/cv";
  const enabled = !isCv && !reduceMotion;

  if (!enabled) {
    return <CvRouteReset>{children}</CvRouteReset>;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      <SmoothScrollBridge />
      {children}
    </ReactLenis>
  );
}
