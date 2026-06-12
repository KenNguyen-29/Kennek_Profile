"use client";

import { growthMindset } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";

export default function GrowthMindset() {
  return (
    <SectionReveal id="growth">
      <HudHeading
        code="GRW"
        title="Growth Log"
        subtitle="Active skill upgrades in progress."
      />
      <ul className="mt-8 space-y-2">
        {growthMindset.map((item, i) => (
          <li
            key={item.id}
            className="hud-panel flex items-center gap-4 px-5 py-4"
          >
            <span className="font-mono text-xs text-violet-glow">
              LVL+{String(i + 1).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-void-border" />
            <p className="text-sm text-zinc-400">{item.text}</p>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}
