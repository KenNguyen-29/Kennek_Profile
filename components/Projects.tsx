"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";
import HoverCard from "./motion/HoverCard";

export default function Projects() {
  return (
    <SectionReveal id="projects">
      <HudHeading
        code="PROJECTS"
        title="Dự án"
        subtitle="Các project đã và đang làm."
      />
      <StaggerGroup className="mt-8 space-y-3">
        {projects.map((project) => (
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
                  <span className="chip-accent">Featured</span>
                )}
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
                      className="inline-flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-emerald-glow"
                    >
                      GitHub <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-emerald-glow"
                    >
                      Live <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              )}
              {!project.github && !project.demo && (
                <p className="mt-4 text-xs text-zinc-600">
                  Private / Đang phát triển
                </p>
              )}
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionReveal>
  );
}
