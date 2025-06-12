export default function Navbar({ activeSection, setActiveSection }) {
  const linkClasses = (id) =>
    `text-xl transition-colors ${
      activeSection === id ? "text-cyan-400 font-semibold" : "text-gray-400"
    } hover:text-cyan-400`;

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent flex justify-center items-center px-6 py-6">
      <div className="bg-white/10 backdrop-blur-md rounded-4xl border border-white/20 p-4 space-x-6 hidden md:flex font-medium">
        <button className={linkClasses("home")} onClick={() => handleClick("home")}>
          Home
        </button>
        <button className={linkClasses("projects")} onClick={() => handleClick("projects")}>
          Work
        </button>
        <button className={linkClasses("about")} onClick={() => handleClick("about")}>
          About
        </button>
        <button className={linkClasses("contact")} onClick={() => handleClick("contact")}>
          Contact
        </button>
      </div>
    </nav>
  );
}
