interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={`min-w-0 ${align === "center" ? "text-center" : ""}`}>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
