"use client";

import { GraduationCap } from "lucide-react";
import { education } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

export default function Education() {
  return (
    <SectionReveal id="education">
      <div className="section-container min-w-0">
        <SectionHeading
          label="Education"
          title="Academic background"
          description="Formal education in software development and information technology."
        />

        <div className="mt-12 grid min-w-0 grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <article
              key={edu.id}
              className="glass-card-hover min-w-0 p-5 transition-all duration-300 hover:shadow-emerald-500/10 sm:p-6 md:p-7 lg:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
                <GraduationCap size={24} />
              </div>

              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                {edu.period}
              </span>

              <h3 className="mt-2 break-words font-display text-lg font-semibold text-white sm:text-xl">
                {edu.institution}
              </h3>

              <p className="mt-1 text-sm font-medium text-slate-300 sm:text-base">
                {edu.degree}
              </p>

              {edu.gpa && (
                <p className="mt-2 inline-block rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
                  GPA: {edu.gpa}
                </p>
              )}

              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                {edu.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
