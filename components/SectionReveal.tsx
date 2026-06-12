"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { easeOut, viewport } from "@/lib/motion";

interface SectionRevealProps {
  id?: string;
  children: ReactNode;
}

export default function SectionReveal({ id, children }: SectionRevealProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section id={id} className="zone border-t border-void-border/80">
        <div className="shell">{children}</div>
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease: easeOut }}
      className="zone border-t border-void-border/80"
    >
      <div className="shell">{children}</div>
    </motion.section>
  );
}
