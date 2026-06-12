import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-void-border py-8">
      <div className="shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          © {year} {profile.name} · Player ID {profile.name.split(" ").map((w) => w[0]).join("")}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          Built with Next.js · HUD v2
        </p>
      </div>
    </footer>
  );
}
