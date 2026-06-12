"use client";

import { favoriteGames, interests } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";

const tierColors: Record<"S" | "SS", string> = {
  S: "border-hud-cyan/40 text-hud-cyan",
  SS: "border-coral/40 text-coral",
};

export default function BeyondCoding() {
  return (
    <SectionReveal id="beyond-coding">
      <HudHeading
        code="SQ"
        title="Side Quests"
        subtitle="Life outside the main storyline."
      />
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {interests.map((item) => (
          <div key={item.id} className="hud-panel p-5">
            <span className="text-2xl">{item.emoji}</span>
            <h3 className="mt-3 font-display text-sm font-semibold text-white">
              {item.label}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
          Ranked games
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {favoriteGames.map((game) => (
            <div key={game.id} className="hud-panel p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-white">
                  {game.name}
                </h3>
                <span
                  className={`chip ${tierColors[game.tier as keyof typeof tierColors]}`}
                >
                  Tier {game.tier}
                </span>
              </div>
              <p className="mt-2 font-mono text-xs text-violet-glow">
                {game.rank}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
