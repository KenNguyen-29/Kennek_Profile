"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { setLenisInstance } from "@/lib/smoothScroll";

export default function SmoothScrollBridge() {
  const lenis = useLenis();

  useEffect(() => {
    setLenisInstance(lenis);
    return () => setLenisInstance(undefined);
  }, [lenis]);

  return null;
}
