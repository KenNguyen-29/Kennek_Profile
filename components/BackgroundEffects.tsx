export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-void-deep" />
      <div
        className="absolute -left-1/4 top-0 h-[70vh] w-[70vw] animate-mesh rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -right-1/4 bottom-0 h-[60vh] w-[60vw] animate-mesh rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)",
          animationDelay: "-9s",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[50vh] w-[50vw] -translate-x-1/2 -translate-y-1/2 animate-mesh rounded-full opacity-20 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)",
          animationDelay: "-4s",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
