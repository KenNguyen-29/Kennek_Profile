"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { commandLinks } from "@/data/profile";
import { smoothScrollToElement } from "@/lib/smoothScroll";
import { easeOut, springSoft } from "@/lib/motion";

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

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: easeOut }}
        onClick={() => setOpen(true)}
        className="fixed right-4 top-4 z-50 hidden items-center gap-2 rounded-lg border border-void-border/80 bg-void-panel/80 px-3 py-2 text-xs text-zinc-500 backdrop-blur-md transition-colors hover:border-emerald/30 hover:text-emerald-glow sm:flex"
      >
        <Search size={14} />
        <span>Jump to</span>
        <kbd className="rounded border border-void-border px-1.5 py-0.5 text-[10px] text-zinc-600">
          ⌘K
        </kbd>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={springSoft}
              className="fixed left-1/2 top-[20%] z-[70] w-[calc(100%-2rem)] max-w-md -translate-x-1/2"
            >
              <div className="hud-panel overflow-hidden">
                <div className="flex items-center gap-2 border-b border-void-border px-4 py-3">
                  <Search size={16} className="text-emerald-glow" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Jump to section..."
                    className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
                  />
                </div>
                <ul className="max-h-64 overflow-y-auto py-2">
                  {filtered.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                    >
                      <button
                        onClick={() => go(link.href)}
                        className="w-full px-4 py-2.5 text-left text-sm text-zinc-400 transition-colors hover:bg-emerald/10 hover:text-emerald-glow"
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                  {filtered.length === 0 && (
                    <li className="px-4 py-3 text-sm text-zinc-600">No match</li>
                  )}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
