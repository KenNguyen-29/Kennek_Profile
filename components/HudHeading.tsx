"use client";

import { motion } from "framer-motion";
import { fadeUp, lineGrow, viewport } from "@/lib/motion";

interface HudHeadingProps {
  code: string;
  title: string;
  subtitle?: string;
}

export default function HudHeading({ code, title, subtitle }: HudHeadingProps) {
  return (
    <motion.div
      className="min-w-0"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: 0.05 },
        },
      }}
    >
      <div className="flex items-center gap-3">
        <motion.span
          variants={fadeUp}
          className="font-mono text-xs text-emerald-glow/80"
        >
          [{code}]
        </motion.span>
        <motion.div
          variants={lineGrow}
          style={{ originX: 0 }}
          className="h-px flex-1 bg-gradient-to-r from-emerald/40 to-transparent"
        />
      </div>
      <motion.h2
        variants={fadeUp}
        className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="mt-2 max-w-xl text-sm text-zinc-500"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
