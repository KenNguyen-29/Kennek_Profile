import type { CvProject } from "@/data/cv-content";

interface CvProjectBlockProps {
  project: CvProject;
  labels: {
    role: string;
    responsibilities: string;
    tech: string;
    team: string;
  };
}

export default function CvProjectBlock({ project, labels }: CvProjectBlockProps) {
  return (
    <div className="cv-entry mt-3 border-l-2 border-emerald-200 pl-3 print:border-zinc-300">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-[13px] font-semibold text-zinc-900">{project.title}</h4>
        {project.period && (
          <span className="text-[11px] text-zinc-500">{project.period}</span>
        )}
      </div>
      <p className="mt-1 text-[12px] leading-relaxed text-zinc-600">
        {project.description}
      </p>
      <p className="mt-1 text-[11px] text-zinc-700">
        <span className="font-semibold">{labels.role}: </span>
        {project.role}
      </p>
      {project.responsibilities.length > 0 && (
        <div className="mt-1.5">
          <p className="text-[11px] font-semibold text-zinc-700">
            {labels.responsibilities}:
          </p>
          <ul className="mt-0.5 list-inside list-disc space-y-0.5 text-[11px] leading-relaxed text-zinc-600">
            {project.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
      <p className="mt-1.5 text-[11px] text-zinc-600">
        <span className="font-semibold text-zinc-700">{labels.tech}: </span>
        {project.techStack}
      </p>
      {project.teamSize && (
        <p className="mt-0.5 text-[11px] text-zinc-500">
          {labels.team}: {project.teamSize}
        </p>
      )}
      {project.links && project.links.length > 0 && (
        <p className="mt-1 text-[11px] text-zinc-600">
          {project.links.map((link, i) => (
            <span key={link.url}>
              {i > 0 && " · "}
              <span className="font-medium">{link.label}: </span>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-link break-all text-emerald-700 underline decoration-emerald-400 underline-offset-2 hover:text-emerald-900"
              >
                {link.url.replace("https://", "")}
              </a>
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
