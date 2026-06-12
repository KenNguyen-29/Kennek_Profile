"use client";

import { about } from "@/data/profile";
import HudHeading from "./HudHeading";
import SectionReveal from "./SectionReveal";
import FadeIn from "./motion/FadeIn";
import { StaggerGroup, StaggerItem } from "./motion/Stagger";

export default function About() {
  const paragraphs = about.summary.split("\n\n");

  return (
    <SectionReveal id="about">
      <HudHeading
        code="ABOUT"
        title="Giới thiệu"
        subtitle="Builder, learner, hướng tới AI engineering."
      />
      <FadeIn className="mt-8 hud-panel p-5 sm:p-6">
        <div className="space-y-5">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base"
            >
              {para}
            </p>
          ))}
        </div>
        <div className="mt-6 border-t border-void-border/80 pt-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Điểm nổi bật
          </p>
          <StaggerGroup className="grid gap-2 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <StaggerItem key={h}>
                <div className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-glow" />
                  {h}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </FadeIn>
    </SectionReveal>
  );
}
