"use client";

import { education } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import HoverCard from "./motion/HoverCard";

export default function Education() {
  return (
    <SectionReveal id="education">
      <HudHeading code="EDU" title="Học vấn" />
      <StaggerGroup className="mt-8 space-y-3">
        {education.map((edu) => (
          <StaggerItem key={edu.id}>
            <HoverCard className="hud-panel p-5 sm:p-6">
              <span className="chip">{edu.period}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {edu.institution}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">{edu.degree}</p>
              {edu.gpa && (
                <span className="chip-accent mt-3">GPA {edu.gpa}</span>
              )}
              <p className="mt-3 text-sm text-zinc-600">{edu.description}</p>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionReveal>
  );
}
