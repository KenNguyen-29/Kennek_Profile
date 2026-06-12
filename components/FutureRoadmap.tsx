"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Rocket, type LucideIcon } from "lucide-react";
import { roadmap } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

const statusConfig = {
  "in-progress": {
    label: "In Progress",
    color: "text-emerald-300",
    bg: "bg-emerald-500/10 border-emerald-400/20",
    dot: "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.4)]",
    bullet: "bg-emerald-400",
  },
  upcoming: {
    label: "Up Next",
    color: "text-green-300",
    bg: "bg-green-500/10 border-green-400/20",
    dot: "bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.4)]",
    bullet: "bg-green-400",
  },
  future: {
    label: "Vision",
    color: "text-lime-300",
    bg: "bg-lime-400/10 border-lime-400/20",
    dot: "bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.35)]",
    bullet: "bg-lime-400",
  },
};

const yearIcons: LucideIcon[] = [Cloud, Brain, Rocket];

export default function FutureRoadmap() {
  return (
    <SectionReveal id="roadmap">
      <div className="section-container min-w-0">
        <SectionHeading
          label="Career Vision"
          title="Future Roadmap"
          description="Where I'm headed — from solid backend engineering to AI-powered product building."
          align="center"
        />

        <div className="relative mx-auto mt-12 max-w-3xl min-w-0 sm:mt-16">
          <div className="absolute bottom-0 left-6 top-0 hidden w-px overflow-hidden sm:left-8 sm:block">
            <div className="h-full w-full bg-white/10" />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-emerald-400 via-green-400 to-lime-400"
            />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {roadmap.map((phase, index) => {
              const config = statusConfig[phase.status];
              const Icon = yearIcons[index] ?? Rocket;

              return (
                <motion.div
                  key={phase.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative min-w-0 sm:pl-20"
                >
                  <div className="absolute left-4 top-8 hidden sm:left-6 sm:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                      className={`h-4 w-4 rounded-full ${config.dot}`}
                    />
                  </div>

                  <div className="glow-card min-w-0 p-5 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl border ${config.bg}`}
                        >
                          <Icon size={18} className={config.color} />
                        </div>
                        <div>
                          <span
                            className={`text-sm font-bold uppercase tracking-wider ${config.color}`}
                          >
                            {phase.year}
                          </span>
                          <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                            {phase.title}
                          </h3>
                        </div>
                      </div>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${config.bg} ${config.color}`}
                      >
                        {config.label}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {phase.items.map((item, i) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + i * 0.08 }}
                          className="flex items-center gap-3 text-sm text-slate-300 sm:text-base"
                        >
                          <span
                            className={`h-1.5 w-1.5 shrink-0 rounded-full ${config.bullet}`}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
