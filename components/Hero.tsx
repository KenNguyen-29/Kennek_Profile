"use client";

import Image from "next/image";
import { useState } from "react";
import { Download, MapPin } from "lucide-react";
import { playerMeta, playerStats, profile } from "@/data/profile";
import { smoothScrollToElement } from "@/lib/smoothScroll";
import StatBar from "./StatBar";

export default function Hero() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section className="relative min-h-[100dvh] border-b border-void-border">
      <div className="shell grid min-h-[100dvh] grid-cols-1 items-center gap-10 py-10 lg:grid-cols-12 lg:gap-8 lg:py-16">
        {/* Character portrait */}
        <div className="relative lg:col-span-5">
          <div className="hud-panel p-1">
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden bg-void-deep lg:max-w-none">
              {avatarError ? (
                <div className="flex h-full items-center justify-center font-display text-7xl font-bold text-violet/30">
                  NH
                </div>
              ) : (
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 400px, 420px"
                  onError={() => setAvatarError(true)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-void-deep via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                    {playerMeta.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-zinc-600">
            <span>ID: {playerMeta.id}</span>
            <span className="flex items-center gap-1 text-zinc-500">
              <MapPin size={10} />
              {profile.location}
            </span>
          </div>
        </div>

        {/* Character sheet */}
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet-glow">
            {"// Player Profile"}
          </p>

          <h1 className="mt-3 font-display text-[clamp(2rem,6vw,3.75rem)] font-bold leading-[1.05] text-white">
            {profile.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="chip-violet">LV.{playerMeta.level}</span>
            <span className="chip">{playerMeta.class}</span>
            {profile.typingRoles.map((r) => (
              <span key={r} className="chip">
                {r}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-500 sm:text-base">
            {profile.shortIntro}
          </p>

          <div className="mt-8 hud-panel p-5 sm:p-6">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Attribute Stats
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {playerStats.map((stat) => (
                <StatBar
                  key={stat.id}
                  label={stat.label}
                  value={stat.value}
                  color={stat.color}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              onClick={() => smoothScrollToElement("#projects", { duration: 900, offset: 80 })}
              className="btn-hud"
            >
              View Missions
            </button>
            <button
              onClick={() => smoothScrollToElement("#contact", { duration: 900, offset: 80 })}
              className="btn-ghost-hud"
            >
              Open Comms
            </button>
            <a href={profile.cvDownloadUrl} className="btn-ghost-hud" download>
              <Download size={14} />
              CV File
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
