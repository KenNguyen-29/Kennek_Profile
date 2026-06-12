import BackgroundEffects from "@/components/BackgroundEffects";
import Navbar from "@/components/Navbar";
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
      <div className="relative z-10">
        <Navbar />
        <main className="relative min-w-0">
          <Hero />
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
    </>
  );
}
