"use client";

import { useI18n } from "@/lib/LanguageProvider";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import HoverCard from "./motion/HoverCard";

export default function Skills() {
  const { t } = useI18n();

  return (
    <SectionReveal id="skills">
      <HudHeading
        code={t.ui.sections.skills.code}
        title={t.ui.sections.skills.title}
        subtitle={t.ui.sections.skills.subtitle}
      />
      <StaggerGroup className="mt-8 space-y-3">
        {t.skillGroups.map((group) => (
          <StaggerItem key={group.category}>
            <HoverCard className="hud-panel p-4 sm:p-5">
              <h3 className="text-xs font-medium uppercase tracking-wider text-emerald-glow">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip-accent">
                    {skill}
                  </span>
                ))}
              </div>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionReveal>
  );
}
