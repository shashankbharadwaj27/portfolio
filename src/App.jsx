import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import FadeInSection from "./components/FadeInSection";
import Contact from "./components/Contact";
import GlowingBackground from "./components/GlowingBackground";
import Astronaut from "./components/Astronaut";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-transparent text-white font-sans">
      <GlowingBackground />
      <div className="z-50 relative">
        <Navbar activeSection={activeSection} />
        <FadeInSection><Hero /></FadeInSection>
        <FadeInSection><About /></FadeInSection>
        <FadeInSection><Projects /></FadeInSection>
        <FadeInSection><Skills /></FadeInSection>
        <FadeInSection><Certifications /></FadeInSection>
        <FadeInSection><Contact/></FadeInSection>
        <Astronaut section={activeSection} setActiveSection />
      </div>
    </main>
  );
}
