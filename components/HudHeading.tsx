interface HudHeadingProps {
  code: string;
  title: string;
  subtitle?: string;
}

export default function HudHeading({ code, title, subtitle }: HudHeadingProps) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-violet-glow">[{code}]</span>
        <div className="h-px flex-1 bg-gradient-to-r from-violet/40 to-transparent" />
      </div>
      <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-xl text-sm text-zinc-500">{subtitle}</p>
      )}
    </div>
  );
}
