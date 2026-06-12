"use client";

import Image from "next/image";
import { useState } from "react";
import { contact } from "@/data/profile";
import { cvFullContent } from "@/data/cv-content";
import { useI18n } from "@/lib/LanguageProvider";
import CvProjectBlock from "./CvProjectBlock";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="cv-section mb-5">
      <h2 className="mb-2 border-b border-zinc-300 pb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-700 print:border-zinc-400 print:text-zinc-800">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function CvDocument() {
  const { locale, t } = useI18n();
  const [avatarError, setAvatarError] = useState(false);
  const c = t.ui.cv;
  const cv = cvFullContent[locale];
  const projectLabels = {
    role: c.labels.role,
    responsibilities: c.labels.responsibilities,
    tech: c.labels.tech,
    team: c.labels.team,
  };

  return (
    <article className="cv-document mx-auto max-w-[210mm] bg-white px-6 py-8 text-zinc-800 shadow-hud print:shadow-none sm:px-10 sm:py-10">
      <header className="cv-section mb-6 flex gap-5 border-b border-zinc-200 pb-5 print:border-zinc-300 sm:gap-6">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            {contact.name}
          </h1>
          <p className="mt-1 text-sm font-semibold tracking-[0.2em] text-emerald-700 print:text-zinc-800">
            {cv.role}
          </p>
          <ul className="mt-3 grid gap-1 text-xs text-zinc-600 sm:grid-cols-2">
            <li>
              <span className="font-medium text-zinc-500">{c.labels.phone}: </span>
              {contact.phone}
            </li>
            <li>
              <span className="font-medium text-zinc-500">{c.labels.dob}: </span>
              {cv.dob}
            </li>
            <li>
              <span className="font-medium text-zinc-500">{c.labels.email}: </span>
              {contact.email}
            </li>
            <li className="sm:col-span-2">
              <span className="font-medium text-zinc-500">{c.labels.location}: </span>
              {cv.location}
            </li>
            <li>
              <span className="font-medium text-zinc-500">{c.labels.github}: </span>
              <a
                href={cv.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-link text-emerald-700 underline decoration-emerald-400 underline-offset-2 hover:text-emerald-900"
              >
                {cv.github.replace("https://", "")}
              </a>
            </li>
            <li>
              <span className="font-medium text-zinc-500">{c.labels.portfolio}: </span>
              <a
                href={cv.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-link text-emerald-700 underline decoration-emerald-400 underline-offset-2 hover:text-emerald-900"
              >
                {cv.portfolio.replace("https://", "")}
              </a>
            </li>
          </ul>
        </div>
        <div className="cv-photo shrink-0">
          <div className="relative h-[140px] w-[112px] overflow-hidden rounded-md border border-zinc-200 bg-zinc-100 sm:h-[168px] sm:w-[134px]">
            {avatarError ? (
              <div className="flex h-full items-center justify-center bg-emerald-50 text-lg font-bold text-emerald-700">
                NH
              </div>
            ) : (
              <Image
                src={contact.avatar}
                alt={contact.name}
                fill
                className="object-cover object-top"
                priority
                sizes="134px"
                onError={() => setAvatarError(true)}
              />
            )}
          </div>
        </div>
      </header>

      <Section title={c.sections.summary}>
        <p className="text-[13px] leading-relaxed text-zinc-700">{cv.about}</p>
      </Section>

      <Section title={c.sections.education}>
        <div className="space-y-2">
          {cv.education.map((edu) => (
            <div key={edu.institution} className="cv-entry">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[13px] font-semibold text-zinc-900">
                  {edu.institution}
                </h3>
                <span className="text-xs text-zinc-500">{edu.period}</span>
              </div>
              <p className="text-xs text-zinc-600">
                {edu.degree}
                {edu.gpa ? ` · GPA ${edu.gpa}` : ""}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={c.sections.skills}>
        <div className="space-y-2">
          {cv.skills.map((group) => (
            <div key={group.category} className="text-[12px]">
              <span className="font-semibold text-zinc-800">{group.category}: </span>
              <span className="text-zinc-600">{group.items.join(" · ")}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title={c.sections.languages}>
        <p className="text-[13px] text-zinc-700">{cv.foreignLanguage}</p>
      </Section>

      <Section title={c.sections.experience}>
        <div className="space-y-5">
          {cv.workExperience.map((block) => (
            <div key={`${block.company}-${block.period}`} className="cv-work-block">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[13px] font-bold uppercase text-zinc-900">
                  {block.role}
                </h3>
                <span className="text-xs text-zinc-500">{block.period}</span>
              </div>
              <p className="text-xs font-medium text-emerald-700 print:text-zinc-700">
                {block.company}
              </p>
              {block.projects.map((project) => (
                <CvProjectBlock
                  key={project.title}
                  project={project}
                  labels={projectLabels}
                />
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section title={c.sections.highlightProjects}>
        <div className="space-y-1">
          {cv.highlightProjects.map((project) => (
            <CvProjectBlock
              key={project.title}
              project={project}
              labels={projectLabels}
            />
          ))}
        </div>
      </Section>

      <Section title={c.sections.awards}>
        {cv.awards.map((award) => (
          <div key={award.title} className="cv-entry">
            <h3 className="text-[13px] font-semibold text-zinc-900">{award.title}</h3>
            <p className="text-xs text-zinc-600">
              {award.event} · {award.date}
            </p>
          </div>
        ))}
      </Section>
    </article>
  );
}
