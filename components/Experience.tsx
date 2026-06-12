"use client";

import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

export default function Experience() {
  return (
    <SectionReveal id="experience">
      <div className="section-container min-w-0">
        <SectionHeading
          label="Experience"
          title="Work journey"
          description="My professional experience building real-world applications."
        />

        <div className="relative mt-12 min-w-0 sm:mt-16">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-400/40 via-emerald-500/20 to-transparent lg:block" />

          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
            {experiences.map((exp) => (
              <article key={exp.id} className="relative min-w-0 lg:pl-20">
                <div className="absolute left-8 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-emerald-400 bg-white/[0.08] shadow-[0_0_12px_rgba(34,197,94,0.3)] backdrop-blur-sm lg:block" />

                <div className="glass-card-hover min-w-0 border-l-2 border-emerald-400/30 p-5 pl-5 transition-all duration-300 hover:border-emerald-400/50 hover:shadow-emerald-500/10 sm:p-6 sm:pl-6 md:p-7 md:pl-7 lg:border-l-0 lg:p-8">
                  <div className="min-w-0">
                    <span className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                      {exp.period}
                    </span>
                    <h3 className="mt-2 break-words font-display text-lg font-semibold text-white sm:text-xl">
                      {exp.role}
                    </h3>
                    <div className="mt-2 flex min-w-0 flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:text-base">
                      <span className="flex min-w-0 items-center gap-1.5">
                        <Briefcase size={14} className="shrink-0 text-emerald-400/70" />
                        <span className="break-words">{exp.company}</span>
                      </span>
                      <span className="flex min-w-0 items-center gap-1.5">
                        <MapPin size={14} className="shrink-0 text-emerald-400/70" />
                        <span className="break-words">{exp.location}</span>
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {exp.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
