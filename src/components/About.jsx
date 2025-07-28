import { PiNotebook } from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";

export default function About() {
  const academics = [
    {
      timeline: "2022 – Present",
      institution: "Guru Nanak Institutions Technical Campus",
      degree: "B.Tech – Computer Science and Engineering",
      location: "Hyderabad, India",
    },
    {
      timeline: "2020 – 2022",
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate – PCM",
      location: "Hyderabad, India",
    },
    {
      timeline: "2019 – 2020",
      institution: "Sri Chaitanya Techno School",
      degree: "Secondary Education – Class X",
      location: "Hyderabad, India",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 max-w-7xl mx-auto flex flex-col justify-center"
    >
      <div className="border-b border-gray-200 w-full mb-10">
        <h2 className="text-3xl font-bold text-white pb-2 text-center">
          🧑🏻‍🚀 Mission Log
        </h2>
      </div>

      {/* Full Width Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Mission Cards — 8 of 12 columns */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/20 text-gray-300 shadow-md">
            <p className="text-cyan-400 font-medium mb-2">🧪 Origin Protocol</p>
            <p className="text-sm leading-relaxed">
              My coding journey began with Java and Python — where logic turned
              into creativity and sparked my love for development.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/20 text-gray-300 shadow-md">
            <p className="text-cyan-400 font-medium mb-2">🚀 Stack Launch</p>
            <p className="text-sm leading-relaxed">
              I embraced full-stack development with the MERN stack to craft
              responsive interfaces and powerful backend logic.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/20 text-gray-300 shadow-md">
            <p className="text-cyan-400 font-medium mb-2">🛠️ Field Missions</p>
            <p className="text-sm leading-relaxed">
              Real-world projects like FilmFlick and Blogger tested my skills,
              helping me build for real users with real needs.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/20 text-gray-300 shadow-md">
            <p className="text-cyan-400 font-medium mb-2">🧠 Ongoing Exploration</p>
            <p className="text-sm leading-relaxed">
              I thrive on curiosity — always experimenting with new tools,
              patterns, and best practices to push my craft forward.
            </p>
          </div>
        </div>

        {/* Academic Journey — 4 of 12 columns */}
        <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-md h-fit">
          <div className="flex items-center gap-2 mb-4 text-cyan-400 font-semibold text-lg">
            <GiGraduateCap className="text-xl" />
            Academic Journey
          </div>

          <div className="relative border-l-2 border-cyan-500/30 pl-6 space-y-10">
            {academics.map((entry, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-8 top-1 w-3 h-3 bg-cyan-400 rounded-full shadow-md"></div>
                <p className="text-xs text-gray-400">{entry.timeline}</p>
                <h4 className="text-white font-semibold leading-tight">
                  {entry.institution}
                </h4>
                <p className="text-gray-300 text-sm font-light">
                  {entry.degree}
                </p>
                <p className="text-xs text-cyan-400 mt-1">{entry.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
