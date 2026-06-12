"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";

function DifficultyBar({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-600">
        Diff
      </span>
      <div className="flex gap-0.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-3 ${
              i < level ? "bg-coral" : "bg-void-deep"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <SectionReveal id="projects">
      <HudHeading
        code="MSN"
        title="Active Missions"
        subtitle="Real projects shipped & in progress."
      />
      <div className="mt-8 space-y-4">
        {projects.map((project, i) => (
          <article
            key={project.id}
            className="hud-panel group p-5 transition-colors hover:border-coral/30 sm:p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-violet-glow">
                  M-{String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                    Role: {project.role}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {project.featured && (
                  <span className="chip border-coral/40 text-coral">Featured</span>
                )}
                <DifficultyBar level={project.difficulty} />
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
            {(project.github || project.demo) && (
              <div className="mt-5 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-zinc-500 hover:text-violet-glow"
                  >
                    GitHub <ArrowUpRight size={12} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-hud-cyan"
                  >
                    Live <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            )}
            {!project.github && !project.demo && (
              <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                Status: Private / In development
              </p>
            )}
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}
