import astronaut_img from '../assets/astronaut.png';
import Certifications from './Certifications';

const messages = {
  home: "🚀 Welcome aboard! The journey through my work begins here.",
  about: "📖 Mission Log: A quick transmission about who I am and why I code.",
  projects: "🧩 Project Bay: Here’s what I’ve built across past missions.",
  skills: "🛠️ Systems Check: Tools, technologies, and frameworks I pilot.",
  certifications: "These are the badges I’ve earned across the galaxies—each one proof of missions completed and skills mastered.",
  contact: "📡 Communications online. Let’s connect across the void.",
};

// The order in which sections appear on the site
const sectionOrder = ["home", "about", "projects", "skills", "certifications", "contact"];

// Helper to get next section ID
function getNextSection(current) {
  const index = sectionOrder.indexOf(current);
  return index < sectionOrder.length - 1 ? sectionOrder[index + 1] : null;
}

export default function Astronaut({ section, setActiveSection }) {
  const nextSection = getNextSection(section);

  const handleNext = () => {
    if (nextSection) {
      const el = document.getElementById(nextSection);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveSection(nextSection); // Sync with sidebar
      }
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 flex items-end space-x-2 animate-float">
      <img src={astronaut_img} alt="Astronaut" className="w-32 h-32" />
      <div className="bg-white/10 backdrop-blur-md text-white text-lg px-4 py-3 rounded-xl border border-white/20 max-w-xs shadow-md">
        <p>{messages[section]}</p>
        {nextSection && (
          <button
            onClick={handleNext}
            className="mt-2 text-cyan-400 text-sm hover:underline transition-all"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}

