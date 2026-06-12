"use client";

import { useEffect, useState } from "react";
import {
  Cpu,
  Crosshair,
  Gamepad2,
  GitBranch,
  Radio,
  User,
  type LucideIcon,
} from "lucide-react";
import { dockNav } from "@/data/profile";
import { smoothScrollToElement } from "@/lib/smoothScroll";

const icons: Record<string, LucideIcon> = {
  User,
  Cpu,
  Crosshair,
  Gamepad2,
  GitBranch,
  Radio,
};

export default function DockNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = dockNav.map((d) => document.querySelector(d.href));
    const obs = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top?.target.id) setActive(`#${top.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 sm:bottom-6"
      aria-label="Section navigation"
    >
      <div className="flex items-center justify-between gap-1 border border-void-border bg-void-panel/90 px-2 py-2 shadow-dock backdrop-blur-xl sm:gap-2 sm:px-3">
        {dockNav.map((item) => {
          const Icon = icons[item.icon] ?? User;
          const isActive = active === item.href;
          return (
            <button
              key={item.id}
              onClick={() =>
                smoothScrollToElement(item.href, { duration: 900, offset: 80 })
              }
              className={`flex min-h-[44px] flex-1 flex-col items-center justify-center gap-0.5 rounded-sm px-1 transition-all sm:px-2 ${
                isActive
                  ? "bg-violet/20 text-violet-glow"
                  : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
              }`}
              aria-label={item.label}
              aria-current={isActive ? "true" : undefined}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 1.5} />
              <span className="hidden font-mono text-[9px] uppercase tracking-wider sm:block">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
