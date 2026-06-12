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
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import HoverCard from "./motion/HoverCard";

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
      <HudHeading code="STRENGTH" title="Điểm mạnh" />
      <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((item) => {
          const Icon = iconMap[item.icon] ?? Zap;
          return (
            <StaggerItem key={item.id}>
              <HoverCard className="hud-panel group h-full p-5 hover:border-emerald/25">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald/20 bg-emerald/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={16} className="text-emerald-glow" />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {item.description}
                </p>
              </HoverCard>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </SectionReveal>
  );
}
