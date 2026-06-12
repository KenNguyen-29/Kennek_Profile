"use client";

import { experiences } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";

export default function Experience() {
  return (
    <SectionReveal id="experience">
      <HudHeading code="LOG" title="Work History" subtitle="Completed campaigns." />
      <div className="mt-8 space-y-3">
        {experiences.map((exp, i) => (
          <article key={exp.id} className="hud-panel p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <span className="font-mono text-[10px] text-zinc-600">
                ENTRY #{String(i + 1).padStart(2, "0")}
              </span>
              <span className="chip">{exp.period}</span>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-white">
              {exp.role}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-coral">
              @ {exp.company}
            </p>
            <p className="mt-1 font-mono text-[10px] text-zinc-600">
              {exp.location}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              {exp.description}
            </p>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}
