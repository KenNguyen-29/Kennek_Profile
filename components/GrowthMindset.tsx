"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sprout } from "lucide-react";
import { growthMindset } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

export default function GrowthMindset() {
  return (
    <SectionReveal id="growth">
      <div className="section-container min-w-0">
        <SectionHeading
          label="Growth Mindset"
          title="Always evolving"
          description="Areas I'm actively developing — framed as growth, not limitations."
          align="center"
        />

        <div className="mx-auto mt-12 grid min-w-0 max-w-3xl grid-cols-1 gap-4 sm:mt-16">
          {growthMindset.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glow-card group flex min-w-0 items-start gap-4 p-5 sm:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/15">
                <Sprout size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  {item.text}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="mt-1 shrink-0 text-slate-600 transition-colors group-hover:text-emerald-400"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
