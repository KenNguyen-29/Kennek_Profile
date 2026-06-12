"use client";

import { useI18n } from "@/lib/LanguageProvider";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import HoverCard from "./motion/HoverCard";

export default function GrowthMindset() {
  const { t } = useI18n();

  return (
    <SectionReveal id="growth">
      <HudHeading
        code={t.ui.sections.growth.code}
        title={t.ui.sections.growth.title}
        subtitle={t.ui.sections.growth.subtitle}
      />
      <StaggerGroup className="mt-8 space-y-2">
        {t.growthMindset.map((item) => (
          <StaggerItem key={item.id}>
            <HoverCard className="hud-panel flex items-center gap-4 px-5 py-4">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-glow" />
              <p className="text-sm text-zinc-400">{item.text}</p>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionReveal>
  );
}
