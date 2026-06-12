"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionReveal({
  id,
  children,
  className = "",
}: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px", amount: 0.08 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`section-padding relative bg-transparent ${className}`}
    >
      {children}
    </motion.section>
  );
}
