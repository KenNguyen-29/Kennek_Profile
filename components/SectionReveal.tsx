"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
  id?: string;
  children: ReactNode;
}

export default function SectionReveal({ id, children }: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px", amount: 0.08 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="zone border-t border-void-border/80"
    >
      <div className="shell">{children}</div>
    </motion.section>
  );
}
