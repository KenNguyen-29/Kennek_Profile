"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function PrintTrigger() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("print") !== "1") return;

    const timer = setTimeout(() => {
      window.print();
    }, 600);

    return () => clearTimeout(timer);
  }, [searchParams]);

  return null;
}
