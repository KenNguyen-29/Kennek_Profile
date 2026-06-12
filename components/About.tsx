"use client";

import { motion } from "framer-motion";
import {
  Brain,
  CheckCircle2,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";
import { about, profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

const icons = [Code2, Rocket, Brain, Sparkles];

export default function About() {
  const paragraphs = about.summary.split("\n\n");

  return (
    <SectionReveal id="about">
      <div className="section-container min-w-0">
        <SectionHeading
          label="About Me"
          title="More than just a developer"
          description="A young builder with backend depth, AI curiosity, and a mindset that never stops learning."
        />

        <div className="mt-12 grid min-w-0 gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="glass-card relative min-w-0 overflow-hidden p-5 sm:p-7 md:p-8 lg:col-span-3 lg:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300"
            >
              <Sparkles size={12} />
              {profile.tagline}
            </motion.span>

            <div className="space-y-4">
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-base leading-relaxed text-slate-300 sm:text-lg"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {about.highlights.map((item, index) => {
              const Icon = icons[index] ?? CheckCircle2;
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="glow-card group min-w-0 p-5 sm:p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300 transition-all group-hover:shadow-[0_0_16px_rgba(34,197,94,0.12)]">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                    {item}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
