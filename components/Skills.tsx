"use client";

import { skillGroups } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";

export default function Skills() {
  return (
    <SectionReveal id="skills">
      <HudHeading
        code="LOAD"
        title="Skill Loadout"
        subtitle="Equipped tools & technologies."
      />
      <div className="mt-8 space-y-4">
        {skillGroups.map((group) => (
          <div key={group.category} className="hud-panel p-4 sm:p-5">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-glow">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="chip-violet">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}
