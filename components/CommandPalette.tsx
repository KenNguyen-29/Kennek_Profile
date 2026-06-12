"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { commandLinks } from "@/data/profile";
import { smoothScrollToElement } from "@/lib/smoothScroll";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = commandLinks.filter((l) =>
    l.label.toLowerCase().includes(query.toLowerCase())
  );

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    smoothScrollToElement(href, { duration: 900, offset: 80 });
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed right-4 top-4 z-50 hidden items-center gap-2 border border-void-border bg-void-panel/80 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500 backdrop-blur-md transition-colors hover:border-violet/40 hover:text-violet-glow sm:flex"
      >
        <Search size={12} />
        <span>Jump to</span>
        <kbd className="border border-void-border px-1.5 py-0.5 text-[9px] text-zinc-600">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="fixed left-1/2 top-[20%] z-[70] w-[calc(100%-2rem)] max-w-md -translate-x-1/2">
        <div className="hud-panel overflow-hidden">
          <div className="flex items-center gap-2 border-b border-void-border px-4 py-3">
            <Search size={16} className="text-violet-glow" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Jump to section..."
              className="flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-zinc-600"
            />
          </div>
          <ul className="max-h-64 overflow-y-auto py-2">
            {filtered.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => go(link.href)}
                  className="w-full px-4 py-2.5 text-left font-mono text-xs text-zinc-400 transition-colors hover:bg-violet/10 hover:text-violet-glow"
                >
                  {link.label}
                </button>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-4 py-3 font-mono text-xs text-zinc-600">
                No match
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
