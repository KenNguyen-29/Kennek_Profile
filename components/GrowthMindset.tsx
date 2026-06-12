"use client";

import { growthMindset } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import HoverCard from "./motion/HoverCard";

export default function GrowthMindset() {
  return (
    <SectionReveal id="growth">
      <HudHeading
        code="GROWTH"
        title="Đang phát triển"
        subtitle="Những điều mình đang cố gắng cải thiện."
      />
      <StaggerGroup className="mt-8 space-y-2">
        {growthMindset.map((item) => (
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
