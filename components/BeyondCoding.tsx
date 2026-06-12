"use client";

import { useI18n } from "@/lib/LanguageProvider";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import HoverCard from "./motion/HoverCard";

export default function BeyondCoding() {
  const { t } = useI18n();

  return (
    <SectionReveal id="beyond-coding">
      <HudHeading
        code={t.ui.sections.beyond.code}
        title={t.ui.sections.beyond.title}
        subtitle={t.ui.sections.beyond.subtitle}
      />
      <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {t.interests.map((item) => (
          <StaggerItem key={item.id}>
            <HoverCard className="hud-panel h-full p-5">
              <span className="inline-block text-2xl transition-transform duration-300 hover:scale-110">
                {item.emoji}
              </span>
              <h3 className="mt-3 font-display text-sm font-semibold text-white">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {item.description}
              </p>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <StaggerGroup className="mt-8">
        <StaggerItem>
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            {t.ui.sections.beyond.games}
          </p>
        </StaggerItem>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {t.favoriteGames.map((game) => (
            <StaggerItem key={game.id}>
              <HoverCard className="hud-panel p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  {game.name}
                </h3>
                <p className="mt-2 text-sm text-emerald-glow">{game.rank}</p>
              </HoverCard>
            </StaggerItem>
          ))}
        </div>
      </StaggerGroup>
    </SectionReveal>
  );
}
