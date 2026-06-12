"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface LazySectionProps {
  children: ReactNode;
  /** id anchor cho dock / smooth scroll trước khi section mount */
  anchorId?: string;
  minHeight?: string;
  rootMargin?: string;
}

export default function LazySection({
  children,
  anchorId,
  minHeight = "50vh",
  rootMargin = "280px 0px",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref}>
      {visible ? (
        children
      ) : (
        <div
          id={anchorId}
          aria-hidden
          style={{ minHeight }}
          className="border-t border-transparent"
        />
      )}
    </div>
  );
}
