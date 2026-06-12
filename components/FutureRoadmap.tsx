"use client";

import { useI18n } from "@/lib/LanguageProvider";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import HoverCard from "./motion/HoverCard";

const statusStyle = {
  "in-progress": "border-emerald/40 text-emerald-glow bg-emerald/5",
  upcoming: "border-mint/30 text-mint bg-mint/5",
  future: "border-forest-light/40 text-mint-soft bg-forest/10",
};

export default function FutureRoadmap() {
  const { t } = useI18n();

  return (
    <SectionReveal id="roadmap">
      <HudHeading
        code={t.ui.sections.roadmap.code}
        title={t.ui.sections.roadmap.title}
        subtitle={t.ui.sections.roadmap.subtitle}
      />
      <div className="relative mt-8">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-emerald/50 via-mint/30 to-transparent sm:block" />
        <StaggerGroup className="space-y-3">
          {t.roadmap.map((phase) => (
            <StaggerItem key={phase.year}>
              <HoverCard className="hud-panel relative ml-0 p-5 sm:ml-8 sm:p-6">
                <div className="absolute -left-[1.125rem] top-6 hidden h-3 w-3 rounded-full border-2 border-emerald-glow bg-void-deep sm:block" />
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="font-display text-2xl font-bold text-white">
                    {phase.year}
                  </p>
                  <span className={`chip ${statusStyle[phase.status]}`}>
                    {t.ui.roadmapStatus[phase.status]}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-zinc-300">
                  {phase.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-zinc-500"
                    >
                      <span className="text-emerald-glow/70">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </SectionReveal>
  );
}
