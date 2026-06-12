"use client";

import { ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

export default function Projects() {
  return (
    <SectionReveal id="projects">
      <div className="section-container min-w-0">
        <SectionHeading
          label="Projects"
          title="Highlight projects"
          description="Selected work showcasing fullstack development capabilities."
          align="center"
        />

        <div className="mt-12 grid min-w-0 grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="glass-card-hover group flex min-w-0 flex-col p-5 transition-all duration-300 hover:shadow-emerald-500/10 sm:p-6 md:p-7 lg:p-8"
            >
              <div className="mb-4 flex min-w-0 items-start justify-between gap-3">
                <h3 className="min-w-0 break-words font-display text-lg font-semibold text-white transition-colors group-hover:text-emerald-300 sm:text-xl">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="flex shrink-0 items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    <Star size={10} fill="currentColor" />
                    Featured
                  </span>
                )}
              </div>

              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-slate-500">
                {project.role}
              </p>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400 sm:text-base">
                {project.description}
              </p>

              <div className="mb-5 flex min-w-0 flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="max-w-full break-words rounded-md border border-emerald-400/10 bg-emerald-400/10 px-2.5 py-1.5 text-sm font-medium text-emerald-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !w-full sm:!w-auto"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !w-full sm:!w-auto"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {!project.github && !project.demo && (
                  <span className="text-sm italic text-slate-500">
                    Private / In development
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
