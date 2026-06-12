"use client";

import { useI18n } from "@/lib/LanguageProvider";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import FadeIn from "./motion/FadeIn";
import HoverCard from "./motion/HoverCard";

export default function Award() {
  const { t } = useI18n();

  return (
    <SectionReveal id="awards">
      <HudHeading
        code={t.ui.sections.award.code}
        title={t.ui.sections.award.title}
      />
      {t.awards.map((award) => (
        <FadeIn key={award.id} className="mt-8">
          <HoverCard className="hud-panel p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="inline-block text-2xl transition-transform duration-500 hover:rotate-12">
                🏆
              </span>
              <span className="chip-accent">{award.year}</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
              {award.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-emerald-glow">
              {award.event}
            </p>
            <p className="mt-4 text-sm text-zinc-500">{award.description}</p>
          </HoverCard>
        </FadeIn>
      ))}
    </SectionReveal>
  );
}
