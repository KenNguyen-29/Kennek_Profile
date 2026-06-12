"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import FadeIn from "./motion/FadeIn";
import { springSoft } from "@/lib/motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass =
    "w-full min-h-[44px] rounded-lg border border-void-border bg-void-deep px-4 py-3 text-sm text-zinc-300 placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-emerald/40 focus:shadow-[0_0_0_3px_rgba(16,185,129,0.08)]";

  return (
    <SectionReveal id="contact">
      <HudHeading
        code="CONTACT"
        title="Liên hệ"
        subtitle="Sẵn sàng cho cơ hội, hợp tác và trao đổi."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <FadeIn className="hud-panel space-y-5 p-5 sm:p-6">
          {[
            { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
            { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
            { label: "Location", value: profile.location },
            ...(profile.github
              ? [{ label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github }]
              : []),
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-600">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.label === "GitHub" ? "_blank" : undefined}
                  rel={item.label === "GitHub" ? "noopener noreferrer" : undefined}
                  className="mt-1 block text-sm text-white transition-colors hover:text-emerald-glow"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 text-sm text-zinc-400">{item.value}</p>
              )}
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="hud-panel space-y-4 p-5 sm:p-6">
            <input type="text" required placeholder="Họ tên" className={inputClass} />
            <input type="email" required placeholder="Email" className={inputClass} />
            <input type="text" required placeholder="Tiêu đề" className={inputClass} />
            <textarea
              required
              rows={4}
              placeholder="Nội dung"
              className={`${inputClass} min-h-[120px] resize-none`}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={springSoft}
              className="btn-hud w-full"
            >
              {submitted ? "Đã gửi ✓" : "Gửi tin nhắn"}
            </motion.button>
            <p className="text-xs text-zinc-600">
              Form demo — liên hệ trực tiếp qua email để phản hồi nhanh hơn.
            </p>
          </form>
        </FadeIn>
      </div>
    </SectionReveal>
  );
}
