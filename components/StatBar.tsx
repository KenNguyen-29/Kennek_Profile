"use client";

import { motion } from "framer-motion";

interface StatBarProps {
  label: string;
  value: number;
  color: "violet" | "cyan" | "coral";
}

const fills = {
  violet: "bg-gradient-to-r from-violet to-violet-glow",
  cyan: "bg-gradient-to-r from-cyan-600 to-hud-cyan",
  coral: "bg-gradient-to-r from-coral to-coral-soft",
};

export default function StatBar({ label, value, color }: StatBarProps) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between font-mono text-[10px] uppercase tracking-wider">
        <span className="text-zinc-500">{label}</span>
        <span className="text-zinc-400">{value}</span>
      </div>
      <div className="h-1.5 overflow-hidden bg-void-deep">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full ${fills[color]}`}
        />
      </div>
    </div>
  );
}
