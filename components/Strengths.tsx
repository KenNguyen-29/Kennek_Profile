"use client";

import { motion } from "framer-motion";
import {
  Flame,
  MessageCircle,
  RefreshCw,
  Shield,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { strengths } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  RefreshCw,
  Flame,
  MessageCircle,
  Users,
  Shield,
};

export default function Strengths() {
  return (
    <SectionReveal id="strengths">
      <div className="section-container min-w-0">
        <SectionHeading
          label="Strengths"
          title="What I bring to the table"
          description="Core qualities that help me deliver, collaborate, and grow as a developer."
          align="center"
        />

        <div className="mt-12 grid min-w-0 grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {strengths.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Zap;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glow-card group min-w-0 p-5 sm:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300 transition-all duration-300 group-hover:border-emerald-400/30 group-hover:bg-emerald-500/15 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
