"use client";

import { ArrowUpRight } from "lucide-react";
import { projectMeta } from "@/data/profile";
import { useI18n } from "@/lib/LanguageProvider";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import HoverCard from "./motion/HoverCard";

export default function Projects() {
  const { t } = useI18n();

  return (
    <SectionReveal id="projects">
      <HudHeading
        code={t.ui.sections.projects.code}
        title={t.ui.sections.projects.title}
        subtitle={t.ui.sections.projects.subtitle}
      />
      <StaggerGroup className="mt-8 space-y-3">
        {t.projects.map((project) => {
          const meta = projectMeta[project.id];
          return (
            <StaggerItem key={project.id}>
              <HoverCard className="hud-panel group p-5 hover:border-emerald/20 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-emerald-glow sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500">{project.role}</p>
                  </div>
                  {project.featured && (
                    <span className="chip-accent">{t.ui.sections.projects.featured}</span>
                  )}
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {meta?.techStack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
                {(meta?.github || meta?.demo) && (
                  <div className="mt-5 flex gap-4">
                    {meta.github && (
                      <a
                        href={meta.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-emerald-glow"
                      >
                        GitHub <ArrowUpRight size={14} />
                      </a>
                    )}
                    {meta.demo && (
                      <a
                        href={meta.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-emerald-glow"
                      >
                        Live <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                )}
                {!meta?.github && !meta?.demo && (
                  <p className="mt-4 text-xs text-zinc-600">
                    {t.ui.sections.projects.private}
                  </p>
                )}
              </HoverCard>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </SectionReveal>
  );
}
