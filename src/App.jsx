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
import Lenis from 'lenis'

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
    // 🔥 Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // Request animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: Sync Lenis scroll with IntersectionObserver
    lenis.on("scroll", () => {
      // If you want to trigger something on scroll
    });

    return () => {
      lenis.destroy();
    };
  }, []);

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
