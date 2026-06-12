"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Crosshair,
  Gamepad2,
  GitBranch,
  Radio,
  User,
  type LucideIcon,
} from "lucide-react";
import { dockIcons } from "@/data/profile";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useI18n } from "@/lib/LanguageProvider";
import { smoothScrollToElement } from "@/lib/smoothScroll";
import { springSoft } from "@/lib/motion";

const icons: Record<string, LucideIcon> = {
  User,
  Cpu,
  Crosshair,
  Gamepad2,
  GitBranch,
  Radio,
};

export default function DockNav() {
  const { t } = useI18n();
  const isMobile = useIsMobile();
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = t.ui.dock.map((d) => document.querySelector(d.href));
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
  }, [t.ui.dock]);

  const Nav = isMobile ? "nav" : motion.nav;
  const navProps = isMobile
    ? {}
    : {
        initial: { y: 80, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { delay: 1.1, ...springSoft },
      };

  return (
    <Nav
      {...navProps}
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 sm:bottom-6"
      aria-label="Section navigation"
    >
      <div
        className={`flex items-center justify-between gap-1 rounded-2xl border border-void-border/80 bg-void-panel/95 px-2 py-2 shadow-dock sm:gap-2 sm:px-3 ${
          isMobile ? "" : "backdrop-blur-xl"
        }`}
      >
        {t.ui.dock.map((item) => {
          const iconKey = dockIcons[item.id as keyof typeof dockIcons];
          const Icon = icons[iconKey] ?? User;
          const isActive = active === item.href;
          const Btn = isMobile ? "button" : motion.button;
          const btnProps = isMobile
            ? {}
            : {
                whileHover: { y: -3, scale: 1.05 },
                whileTap: { scale: 0.95 },
              };

          return (
            <Btn
              key={item.id}
              type="button"
              onClick={() => smoothScrollToElement(item.href)}
              {...btnProps}
              className={`relative flex min-h-[44px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 transition-colors sm:px-2 ${
                isActive
                  ? "text-emerald-glow"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
              aria-label={item.label}
              aria-current={isActive ? "true" : undefined}
            >
              {isActive && (
                <span className="absolute inset-0 rounded-xl bg-emerald/15" />
              )}
              <Icon
                size={18}
                strokeWidth={isActive ? 2.5 : 1.5}
                className="relative z-10"
              />
              <span className="relative z-10 hidden text-[10px] sm:block">
                {item.label}
              </span>
            </Btn>
          );
        })}
      </div>
    </Nav>
  );
}
