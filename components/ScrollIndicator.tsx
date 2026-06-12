"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/LanguageProvider";
import { smoothScrollToElement } from "@/lib/smoothScroll";

export default function ScrollIndicator() {
  const { t } = useI18n();

  return (
    <motion.button
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      onClick={() => smoothScrollToElement("#about")}
      className="absolute bottom-28 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-zinc-600 transition-colors hover:text-emerald-glow sm:bottom-32"
      aria-label={t.ui.sections.about.title}
    >
      <span className="text-[10px] uppercase tracking-[0.2em]">
        {t.ui.hero.scroll}
      </span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={18} />
      </motion.span>
    </motion.button>
  );
}
