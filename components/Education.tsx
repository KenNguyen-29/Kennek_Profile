"use client";

import { useI18n } from "@/lib/LanguageProvider";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import HoverCard from "./motion/HoverCard";

export default function Education() {
  const { t } = useI18n();

  return (
    <SectionReveal id="education">
      <HudHeading
        code={t.ui.sections.education.code}
        title={t.ui.sections.education.title}
      />
      <StaggerGroup className="mt-8 space-y-3">
        {t.education.map((edu) => (
          <StaggerItem key={edu.id}>
            <HoverCard className="hud-panel p-5 sm:p-6">
              <span className="chip">{edu.period}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {edu.institution}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">{edu.degree}</p>
              {edu.gpa && (
                <span className="chip-accent mt-3">GPA {edu.gpa}</span>
              )}
              <p className="mt-3 text-sm text-zinc-600">{edu.description}</p>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionReveal>
  );
}
