"use client";

import { motion } from "framer-motion";
import { Gamepad2, Sparkles } from "lucide-react";
import { favoriteGames, interests } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

export default function BeyondCoding() {
  return (
    <SectionReveal id="beyond-coding">
      <div className="section-container min-w-0">
        <SectionHeading
          label="Beyond Coding"
          title="When I'm not coding"
          description="Life outside the IDE — hobbies that keep me creative, competitive, and balanced."
          align="center"
        />

        <div className="mt-12 grid min-w-0 grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {interests.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -4 }}
              className="glow-card group min-w-0 p-5 sm:p-6"
            >
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/10 bg-white/[0.04] text-2xl"
              >
                {item.emoji}
              </motion.span>
              <h3 className="font-display text-base font-semibold text-white">
                {item.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm font-medium text-slate-400">
            <Gamepad2 size={16} className="text-emerald-300" />
            <span>Favorite Games</span>
            <Sparkles size={14} className="text-emerald-300/60" />
          </div>

          <div className="mx-auto grid min-w-0 max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
            {favoriteGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`glow-card group relative min-w-0 overflow-hidden p-5 sm:p-6 ${game.border}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${game.accent} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {game.name}
                  </h3>
                  <motion.span
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="mt-3 inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-300 backdrop-blur-sm"
                  >
                    {game.rank}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
