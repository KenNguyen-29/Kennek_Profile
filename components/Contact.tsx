"use client";

import { useState, FormEvent } from "react";
import { profile } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass =
    "w-full min-h-[44px] border border-void-border bg-void-deep px-4 py-3 font-mono text-sm text-zinc-300 placeholder:text-zinc-600 outline-none transition-colors focus:border-violet/50";

  return (
    <SectionReveal id="contact">
      <HudHeading
        code="COM"
        title="Open Comms"
        subtitle="Open to opportunities, collaborations, and conversations."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="hud-panel space-y-5 p-5 sm:p-6">
          {[
            { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
            { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
            { label: "Location", value: profile.location },
            ...(profile.github
              ? [{ label: "GitHub", value: profile.github.replace("https://", ""), href: profile.github }]
              : []),
          ].map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.label === "GitHub" ? "_blank" : undefined}
                  rel={item.label === "GitHub" ? "noopener noreferrer" : undefined}
                  className="mt-1 block text-sm text-white hover:text-violet-glow"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 text-sm text-zinc-400">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="hud-panel space-y-4 p-5 sm:p-6">
          <input type="text" required placeholder="Name" className={inputClass} />
          <input type="email" required placeholder="Email" className={inputClass} />
          <input type="text" required placeholder="Subject" className={inputClass} />
          <textarea
            required
            rows={4}
            placeholder="Message"
            className={`${inputClass} min-h-[120px] resize-none`}
          />
          <button type="submit" className="btn-hud w-full">
            {submitted ? "Transmission sent ✓" : "Send transmission"}
          </button>
          <p className="font-mono text-[10px] text-zinc-600">
            Static demo — email directly for real inquiries.
          </p>
        </form>
      </div>
    </SectionReveal>
  );
}
