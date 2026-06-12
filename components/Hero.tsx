"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { floatingBadges, profile } from "@/data/profile";
import { smoothScrollToElement } from "@/lib/smoothScroll";
import TypingEffect from "./TypingEffect";

function AvatarPlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white/[0.04]">
      <span className="font-display text-5xl font-bold text-emerald-300 sm:text-6xl md:text-7xl">
        NH
      </span>
    </div>
  );
}

export default function Hero() {
  const [avatarError, setAvatarError] = useState(false);

  const scrollTo = (id: string) => {
    smoothScrollToElement(id, { duration: 1050, offset: 80 });
  };

  return (
    <section className="relative min-h-[100dvh] bg-transparent pt-16 sm:min-h-screen sm:pt-20">
      <div className="section-container relative z-10 flex min-h-[calc(100dvh-4rem)] min-w-0 flex-col items-center justify-center gap-10 py-12 sm:min-h-[calc(100vh-5rem)] sm:gap-12 sm:py-16 md:flex-row md:items-center md:gap-10 md:py-16 lg:gap-16 xl:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="min-w-0 flex-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-xl"
          >
            <Sparkles size={14} className="shrink-0" />
            <span className="truncate">{profile.tagline}</span>
          </motion.div>

          <h1 className="break-words font-display text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="mt-4 font-display text-lg font-medium text-emerald-300 sm:text-xl md:text-2xl">
            <TypingEffect texts={profile.typingRoles} />
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg md:mx-0">
            {profile.shortIntro}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {floatingBadges.map((badge, i) => (
              <motion.span
                key={badge}
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2.5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-sm transition-colors hover:border-emerald-400/30 hover:bg-emerald-500/15"
              >
                {badge}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <button onClick={() => scrollTo("#projects")} className="btn-primary">
              View Projects
            </button>
            <button onClick={() => scrollTo("#contact")} className="btn-secondary">
              <Mail size={16} />
              Contact Me
            </button>
            <a href={profile.cvDownloadUrl} className="btn-secondary" download>
              <Download size={16} />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-[280px] shrink-0 sm:max-w-none md:w-auto"
        >
          <div className="absolute inset-[-18%] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.28)_0%,rgba(110,231,183,0.14)_38%,transparent_68%)] blur-2xl animate-avatar-glow" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/20 via-green-500/10 to-emerald-300/10 blur-2xl animate-avatar-glow [animation-delay:-3.5s]" />
          <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full border-2 border-emerald-400/20 shadow-[0_0_80px_rgba(34,197,94,0.15)] sm:h-64 sm:w-64 md:mx-0 md:h-72 md:w-72 lg:h-80 lg:w-80">
            {avatarError ? (
              <AvatarPlaceholder />
            ) : (
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                onError={() => setAvatarError(true)}
              />
            )}
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 left-1/2 max-w-[calc(100%-1rem)] -translate-x-1/2 rounded-2xl border border-emerald-400/10 bg-white/[0.04] px-4 py-2 text-center backdrop-blur-xl sm:-bottom-4 sm:left-auto sm:right-0 sm:max-w-none sm:translate-x-0 md:-right-4"
          >
            <p className="text-sm text-slate-400">Based in</p>
            <p className="text-sm font-medium text-white">{profile.location}</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-6 left-1/2 z-10 hidden min-h-[44px] min-w-[44px] -translate-x-1/2 items-center justify-center text-slate-500 transition-colors hover:text-emerald-300 sm:bottom-8 sm:flex"
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
