"use client";

import { Award as AwardIcon, Trophy } from "lucide-react";
import { awards } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

export default function Award() {
  return (
    <SectionReveal id="awards">
      <div className="section-container min-w-0">
        <SectionHeading
          label="Awards"
          title="Recognition"
          description="Achievements that reflect dedication and skill."
          align="center"
        />

        <div className="mx-auto mt-12 grid min-w-0 max-w-2xl grid-cols-1 gap-5 sm:mt-16 sm:gap-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="glass-card-hover relative min-w-0 overflow-hidden p-5 transition-all duration-300 hover:shadow-emerald-500/10 sm:p-8 md:p-10"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />

              <div className="relative flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300 sm:h-14 sm:w-14">
                  <Trophy size={24} className="sm:hidden" />
                  <Trophy size={28} className="hidden sm:block" />
                </div>
                <div className="min-w-0">
                  <span className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                    {award.year}
                  </span>
                  <h3 className="mt-1 break-words font-display text-lg font-bold text-white sm:text-xl md:text-2xl">
                    {award.title}
                  </h3>
                  <p className="mt-1 flex min-w-0 flex-wrap items-center gap-2 text-sm font-medium text-slate-300 sm:text-base">
                    <AwardIcon size={14} className="shrink-0 text-emerald-300" />
                    <span className="break-words">{award.event}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
