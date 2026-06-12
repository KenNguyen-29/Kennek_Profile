"use client";

import { awards } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";

export default function Award() {
  return (
    <SectionReveal id="awards">
      <HudHeading code="ACH" title="Achievements" />
      {awards.map((award) => (
        <div key={award.id} className="mt-8 hud-panel p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            <span className="chip-violet">{award.year}</span>
          </div>
          <h3 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
            {award.title}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-coral">
            {award.event}
          </p>
          <p className="mt-4 text-sm text-zinc-500">{award.description}</p>
        </div>
      ))}
    </SectionReveal>
  );
}
