"use client";

import {
  Database,
  Monitor,
  Server,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Database,
  Wrench,
  Users,
};

export default function Skills() {
  return (
    <SectionReveal id="skills">
      <div className="section-container min-w-0">
        <SectionHeading
          label="Skills"
          title="Tech stack & expertise"
          description="Technologies and tools I work with across the full development stack."
          align="center"
        />

        <div className="mt-12 grid min-w-0 grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] ?? Wrench;
            return (
              <div
                key={group.category}
                className="glass-card-hover min-w-0 overflow-hidden p-5 sm:p-6 md:p-7 lg:p-8"
              >
                <div className="mb-4 flex min-w-0 items-center gap-3 sm:mb-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="min-w-0 break-words font-display text-base font-semibold text-white sm:text-lg">
                    {group.category}
                  </h3>
                </div>

                <div className="flex min-w-0 flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
