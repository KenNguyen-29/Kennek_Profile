"use client";

import {
  Flame,
  MessageCircle,
  RefreshCw,
  Shield,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { strengths } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  RefreshCw,
  Flame,
  MessageCircle,
  Users,
  Shield,
};

export default function Strengths() {
  return (
    <SectionReveal id="strengths">
      <HudHeading code="PASS" title="Passive Abilities" />
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((item) => {
          const Icon = iconMap[item.icon] ?? Zap;
          return (
            <div
              key={item.id}
              className="hud-panel group p-5 transition-colors hover:border-violet/40"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center border border-violet/30 bg-violet/10">
                  <Icon size={14} className="text-violet-glow" />
                </div>
                <h3 className="font-display text-sm font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-zinc-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionReveal>
  );
}
