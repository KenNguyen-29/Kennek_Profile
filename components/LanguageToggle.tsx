"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/LanguageProvider";
import { easeOut } from "@/lib/motion";

export default function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5, ease: easeOut }}
      className="fixed left-4 top-4 z-50 flex items-center rounded-lg border border-void-border/80 bg-void-panel/80 p-0.5 backdrop-blur-md"
      role="group"
      aria-label={t.ui.lang.label}
    >
      {(["vi", "en"] as const).map((lang) => {
        const active = locale === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLocale(lang)}
            className={`relative min-h-[36px] min-w-[40px] rounded-md px-3 text-xs font-medium uppercase tracking-wider transition-colors ${
              active ? "text-emerald-glow" : "text-zinc-500 hover:text-zinc-300"
            }`}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-md bg-emerald/15"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">
              {lang === "vi" ? t.ui.lang.vi : t.ui.lang.en}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}
