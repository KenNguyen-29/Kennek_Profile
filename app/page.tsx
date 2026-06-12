import dynamic from "next/dynamic";
import BackgroundEffects from "@/components/BackgroundEffects";
import CommandPalette from "@/components/CommandPalette";
import LanguageToggle from "@/components/LanguageToggle";
import DockNav from "@/components/DockNav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import LazySection from "@/components/LazySection";

const About = dynamic(() => import("@/components/About"));
const Strengths = dynamic(() => import("@/components/Strengths"));
const Skills = dynamic(() => import("@/components/Skills"));
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const BeyondCoding = dynamic(() => import("@/components/BeyondCoding"));
const GrowthMindset = dynamic(() => import("@/components/GrowthMindset"));
const FutureRoadmap = dynamic(() => import("@/components/FutureRoadmap"));
const Award = dynamic(() => import("@/components/Award"));
const Education = dynamic(() => import("@/components/Education"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <LanguageToggle />
      <CommandPalette />
      <div className="relative z-10">
        <main className="min-w-0">
          <Hero />
          <Marquee />
          <LazySection anchorId="about" minHeight="55vh">
            <About />
          </LazySection>
          <LazySection anchorId="strengths" minHeight="45vh">
            <Strengths />
          </LazySection>
          <LazySection anchorId="skills" minHeight="45vh">
            <Skills />
          </LazySection>
          <LazySection anchorId="experience" minHeight="50vh">
            <Experience />
          </LazySection>
          <LazySection anchorId="projects" minHeight="55vh">
            <Projects />
          </LazySection>
          <LazySection anchorId="beyond-coding" minHeight="40vh">
            <BeyondCoding />
          </LazySection>
          <LazySection anchorId="growth" minHeight="35vh">
            <GrowthMindset />
          </LazySection>
          <LazySection anchorId="roadmap" minHeight="40vh">
            <FutureRoadmap />
          </LazySection>
          <LazySection anchorId="awards" minHeight="30vh">
            <Award />
          </LazySection>
          <LazySection anchorId="education" minHeight="35vh">
            <Education />
          </LazySection>
          <LazySection anchorId="contact" minHeight="45vh">
            <Contact />
          </LazySection>
        </main>
        <LazySection minHeight="12vh">
          <Footer />
        </LazySection>
      </div>
      <DockNav />
    </>
  );
}
