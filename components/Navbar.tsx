"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/profile";
import {
  smoothScrollToElement,
  smoothScrollToTop,
} from "@/lib/smoothScroll";

const SCROLL_DURATION = 1050;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    smoothScrollToElement(href, { duration: SCROLL_DURATION, offset: 80 });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "border-b border-emerald-400/10 bg-[#020617]/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-16 min-w-0 items-center justify-between sm:h-20">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollToTop(SCROLL_DURATION);
          }}
          className="shrink-0 font-display text-lg font-bold tracking-tight text-white"
        >
          NH<span className="text-emerald-300">.</span>
        </a>

        <ul className="hidden min-w-0 items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="min-h-[44px] rounded-full px-4 py-2 text-sm text-slate-400 transition-colors hover:text-emerald-300"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary ml-2 !w-auto !px-5 !py-2.5 !text-sm"
            >
              Contact Me
            </button>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-400/10 bg-white/[0.04] text-slate-300 backdrop-blur-xl transition-colors hover:border-emerald-400/30 hover:text-emerald-300 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-emerald-400/10 bg-[#020617]/90 backdrop-blur-xl lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4 pb-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex min-h-[44px] w-full items-center rounded-xl px-4 py-3 text-left text-base text-slate-300 transition-colors hover:bg-emerald-500/5 hover:text-emerald-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-primary w-full"
                >
                  Contact Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
