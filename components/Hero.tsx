"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { contact } from "@/data/profile";
import { useI18n } from "@/lib/LanguageProvider";
import { smoothScrollToElement } from "@/lib/smoothScroll";
import TextReveal from "@/components/motion/TextReveal";
import ScrollIndicator from "@/components/ScrollIndicator";
import { easeOut, scaleIn, slideInLeft, slideInRight, springSoft } from "@/lib/motion";

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.55 + i * 0.08, duration: 0.5, ease: easeOut },
  }),
};

export default function Hero() {
  const { t } = useI18n();
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section className="relative min-h-[100dvh] border-b border-void-border/60">
      <div className="shell grid min-h-[100dvh] grid-cols-1 items-center gap-10 py-10 lg:grid-cols-12 lg:gap-10 lg:py-16">
        <motion.div
          className="relative lg:col-span-5"
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
        >
          <motion.div
            className="hud-panel overflow-hidden p-1.5"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: easeOut }}
          >
            <motion.div
              className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg bg-void-deep lg:max-w-none"
              variants={scaleIn}
            >
              {avatarError ? (
                <div className="flex h-full items-center justify-center font-display text-7xl font-bold text-emerald/20">
                  NH
                </div>
              ) : (
                <Image
                  src={contact.avatar}
                  alt={contact.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 400px, 420px"
                  onError={() => setAvatarError(true)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-void-deep/90 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-4 flex items-center justify-between text-sm text-zinc-500"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: easeOut }}
          >
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-glow" />
              <span className="text-emerald-glow">{t.profile.status}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-emerald/60" />
              {contact.location}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          initial="hidden"
          animate="visible"
          variants={slideInRight}
        >
          <motion.p
            className="text-sm font-medium text-emerald-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: easeOut }}
          >
            {t.profile.role}
          </motion.p>

          <TextReveal
            text={contact.name}
            className="mt-2 font-display text-[clamp(2rem,6vw,3.75rem)] font-bold leading-[1.08] text-white"
            delay={0.25}
          />

          <motion.p
            className="mt-3 text-sm text-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            {t.profile.tagline}
          </motion.p>

          <div className="mt-5 flex flex-wrap gap-2">
            {t.profile.typingRoles.map((r, i) => (
              <motion.span
                key={r}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={chipVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="chip-accent cursor-default"
              >
                {r}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: easeOut }}
          >
            {t.profile.shortIntro}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, ...springSoft }}
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                smoothScrollToElement("#projects", { duration: 900, offset: 80 })
              }
              className="btn-hud"
            >
              {t.ui.hero.viewProjects}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                smoothScrollToElement("#contact", { duration: 900, offset: 80 })
              }
              className="btn-ghost-hud"
            >
              {t.ui.hero.contact}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
