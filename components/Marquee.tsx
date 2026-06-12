"use client";

import { useI18n } from "@/lib/LanguageProvider";

export default function Marquee() {
  const { t } = useI18n();

  const items = [
    ...t.profile.typingRoles,
    ...t.skillGroups.flatMap((g) => g.skills).slice(0, 12),
    t.profile.tagline,
  ];
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-void-border/50 bg-void-panel/30 py-3 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-void to-transparent" />
      <div className="animate-marquee flex w-max gap-8">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 text-sm text-zinc-500"
          >
            <span className="text-emerald-glow/80">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
