"use client";

import { skillGroups } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import HoverCard from "./motion/HoverCard";

export default function Skills() {
  return (
    <SectionReveal id="skills">
      <HudHeading
        code="SKILLS"
        title="Kỹ năng & công nghệ"
        subtitle="Stack công cụ thường dùng."
      />
      <StaggerGroup className="mt-8 space-y-3">
        {skillGroups.map((group) => (
          <StaggerItem key={group.category}>
            <HoverCard className="hud-panel p-4 sm:p-5">
              <h3 className="text-xs font-medium uppercase tracking-wider text-emerald-glow">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip-accent">
                    {skill}
                  </span>
                ))}
              </div>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionReveal>
  );
}
