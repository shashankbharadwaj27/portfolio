import { FaHome, FaUser, FaCode,FaToolbox, FaEnvelope,FaFile } from "react-icons/fa";

export default function Sidebar({ activeSection, setActiveSection }) {
  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "about", icon: <FaUser />, label: "About" },
    { id: "projects", icon: <FaCode />, label: "Projects" },
    {id:"skills", icon:<FaToolbox />, label:"Skills"},
    { id: "certifications", icon: <FaFile />, label: "Certifications" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  const linkClasses = (id) =>
    `group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300
     ${
       activeSection === id
         ? "bg-cyan-400 text-black shadow-[0_0_20px_#06b6d4]"
         : "bg-white/10 text-gray-400 hover:bg-cyan-400 hover:text-black"
     }`;

  return (
    <nav className="fixed top-1/2 left-6 -translate-y-1/2 z-50 hidden md:flex flex-col items-center space-y-6">
      <div className="relative z-10 flex flex-col space-y-6">
        {navItems.map(({ id, icon, label }) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`${linkClasses(id)} nav-buttons group hover:rotate-[15deg] transition-transform duration-300`}
            title={label}
          >
            {icon}
            <span className="absolute left-14 opacity-0 group-hover:opacity-100 bg-cyan-400 text-black text-xs px-2 py-1 rounded-md whitespace-nowrap transition-opacity duration-200">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
