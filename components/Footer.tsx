"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp, viewport } from "@/lib/motion";

export default function Footer() {
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
          © {year} {profile.name}
        </p>
        <p className="text-sm text-zinc-600">Built with Next.js</p>
      </div>
    </motion.footer>
  );
}
