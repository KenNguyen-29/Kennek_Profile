"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/profile";
import { useI18n } from "@/lib/LanguageProvider";
import { fadeUp, viewport } from "@/lib/motion";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className="border-t border-void-border/60 py-8"
    >
      <div className="shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-zinc-600">
          © {year} {contact.name}
        </p>
        <p className="text-sm text-zinc-600">{t.ui.footer.builtWith}</p>
      </div>
    </motion.footer>
  );
}
