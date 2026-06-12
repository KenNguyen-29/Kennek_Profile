import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden border-t border-emerald-400/10 bg-transparent py-6 sm:py-8">
      <div className="section-container flex min-w-0 flex-col items-center justify-between gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
        <p className="text-sm text-slate-500">
          &copy; {year}{" "}
          <span className="text-slate-300">{profile.name}</span>. All rights
          reserved.
        </p>
        <p className="text-sm text-slate-600">
          Built with{" "}
          <span className="text-emerald-400/80">Next.js</span>, Tailwind CSS &
          Framer Motion
        </p>
      </div>
    </footer>
  );
}
