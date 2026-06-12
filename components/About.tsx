"use client";

import { about } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";

export default function About() {
  const paragraphs = about.summary.split("\n\n");

  return (
    <SectionReveal id="about">
      <HudHeading
        code="CHAR"
        title="Character Bio"
        subtitle="Builder, learner, heading toward AI engineering."
      />
      <div className="mt-8 hud-panel p-5 sm:p-6">
        <div className="space-y-5">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base"
            >
              {para}
            </p>
          ))}
        </div>
        <div className="mt-6 border-t border-void-border pt-5">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
            Key traits unlocked
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 font-mono text-xs text-zinc-500"
              >
                <span className="text-violet-glow">+</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionReveal>
  );
}
