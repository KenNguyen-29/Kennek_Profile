"use client";

import { experiences } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import HoverCard from "./motion/HoverCard";

export default function Experience() {
  return (
    <SectionReveal id="experience">
      <HudHeading code="WORK" title="Kinh nghiệm" />
      <StaggerGroup className="mt-8 space-y-3">
        {experiences.map((exp) => (
          <StaggerItem key={exp.id}>
            <HoverCard className="hud-panel p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <span className="chip">{exp.period}</span>
                <span className="text-xs text-zinc-600">{exp.location}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {exp.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-emerald-glow">
                {exp.company}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {exp.description}
              </p>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionReveal>
  );
}
