const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${((i * 37 + 11) % 97) + 1}%`,
  top: `${((i * 53 + 19) % 93) + 3}%`,
  size: 1.5 + (i % 3) * 0.75,
  delay: (i % 6) * 1.5,
  duration: 14 + (i % 7) * 2,
  opacity: 0.12 + (i % 4) * 0.06,
}));

const GRADIENT_LINES = [
  { top: "12%", delay: "0s" },
  { top: "35%", delay: "-3s" },
  { top: "58%", delay: "-6s" },
  { top: "78%", delay: "-2s" },
];

export default function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#020617]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07120C]/90 via-[#020617]/50 to-[#07120C]/80" />

      <div className="absolute inset-[-10%] animate-aurora bg-[radial-gradient(circle_at_25%_15%,rgba(34,197,94,0.18),transparent_40%),radial-gradient(circle_at_75%_25%,rgba(16,185,129,0.14),transparent_36%),radial-gradient(circle_at_50%_70%,rgba(110,231,183,0.10),transparent_38%),radial-gradient(circle_at_15%_85%,rgba(34,211,238,0.06),transparent_32%)]" />

      <div className="absolute -left-20 -top-32 h-72 w-72 rounded-full bg-green-500/15 blur-3xl animate-float sm:h-96 sm:w-96" />
      <div className="absolute right-0 top-[20%] h-80 w-80 rounded-full bg-emerald-400/12 blur-3xl animate-float-delayed sm:right-16 sm:h-[28rem] sm:w-[28rem]" />
      <div className="absolute bottom-[10%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl animate-pulse-slow sm:bottom-10 sm:h-96 sm:w-96" />
      <div
        className="absolute left-[15%] top-[55%] h-64 w-64 rounded-full bg-lime-400/8 blur-3xl animate-float sm:h-80 sm:w-80"
        style={{ animationDelay: "-4s" }}
      />

      <div className="absolute left-1/2 top-[8%] h-64 w-[min(80vw,700px)] -translate-x-1/2 rounded-full bg-emerald-500/8 blur-3xl" />
      <div className="absolute right-[10%] top-[45%] h-48 w-48 rounded-full bg-green-400/6 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-[25%] left-[8%] h-56 w-56 rounded-full bg-emerald-400/6 blur-3xl animate-pulse-slow" />

      {GRADIENT_LINES.map((line) => (
        <div
          key={line.top}
          className="absolute left-1/2 h-px w-[min(75vw,960px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent animate-gradient-x"
          style={{ top: line.top, animationDelay: line.delay }}
        />
      ))}

      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px] sm:[background-size:64px_64px]" />

      <div className="absolute inset-0">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className={`absolute rounded-full bg-emerald-300/40 animate-particle-float ${
              p.id % 3 === 0 ? "hidden sm:block" : ""
            }`}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-noise" />

      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020617]/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020617]/60 to-transparent" />
    </div>
  );
}
