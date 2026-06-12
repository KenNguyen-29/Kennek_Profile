import BackgroundEffects from "@/components/BackgroundEffects";
import CommandPalette from "@/components/CommandPalette";
import LanguageToggle from "@/components/LanguageToggle";
import DockNav from "@/components/DockNav";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Strengths from "@/components/Strengths";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import BeyondCoding from "@/components/BeyondCoding";
import GrowthMindset from "@/components/GrowthMindset";
import FutureRoadmap from "@/components/FutureRoadmap";
import Award from "@/components/Award";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
          <About />
          <Strengths />
          <Skills />
          <Experience />
          <Projects />
          <BeyondCoding />
          <GrowthMindset />
          <FutureRoadmap />
          <Award />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
      <DockNav />
    </>
  );
}
