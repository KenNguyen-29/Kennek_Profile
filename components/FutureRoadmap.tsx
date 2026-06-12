"use client";

import { roadmap } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";

const statusStyle = {
  "in-progress": "border-emerald-500/40 text-emerald-400",
  upcoming: "border-hud-cyan/40 text-hud-cyan",
  future: "border-violet/40 text-violet-glow",
};

const statusLabel = {
  "in-progress": "Active",
  upcoming: "Queued",
  future: "Locked",
};

export default function FutureRoadmap() {
  return (
    <SectionReveal id="roadmap">
      <HudHeading code="TREE" title="Skill Tree" subtitle="Future unlock path." />
      <div className="relative mt-8">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-violet via-hud-cyan to-coral sm:block" />
        <div className="space-y-4">
          {roadmap.map((phase) => (
            <div
              key={phase.year}
              className="hud-panel relative ml-0 p-5 sm:ml-8 sm:p-6"
            >
              <div className="absolute -left-[1.125rem] top-6 hidden h-3 w-3 border-2 border-violet-glow bg-void-deep sm:block" />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="font-display text-2xl font-bold text-white">
                  {phase.year}
                </p>
                <span className={`chip ${statusStyle[phase.status]}`}>
                  {statusLabel[phase.status]}
                </span>
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold text-zinc-300">
                {phase.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-mono text-xs text-zinc-500"
                  >
                    <span className="text-violet-glow">◇</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
