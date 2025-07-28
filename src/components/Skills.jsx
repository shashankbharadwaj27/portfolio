import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNode, FaJava, FaPython, FaToolbox } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import expressIcon from "../assets/expressjs-icon.svg";
import Tilt from "react-parallax-tilt";

export default function Skills() {
  const skills = [
    { name: "JavaScript", logo: <IoLogoJavascript />, color: "#facc15" },
    { name: "React.js", logo: <FaReact />, color: "#61dafb" },
    { name: "Node.js", logo: <FaNode />, color: "#68a063" },
    {
      name: "Express.js",
      logo: (
        <img
          src={expressIcon}
          alt="Express"
          className="w-8 h-8"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      ),
      color: "#999",
    },
    { name: "MongoDB", logo: <SiMongodb />, color: "#4db33d" },
    { name: "Redux", logo: <TbBrandRedux />, color: "#764abc" },
    { name: "Tailwind CSS", logo: <RiTailwindCssFill />, color: "#38bdf8" },
    { name: "Java", logo: <FaJava />, color: "#f87171" },
    { name: "Python", logo: <FaPython />, color: "#facc15" },
  ];

  return (
    <section
      id="skills"
      className="relative z-50 px-6 py-20 max-w-7xl mx-auto"
    >
      <div className="border-b border-gray-200 w-full mb-10">
        <h2 className="text-3xl font-bold text-white pb-2 text-center">
          	🧰 Skill Arsenal
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareColor="#0ff"
            className="hover:cursor-pointer "
          >
            <div
              key={index}
              className="bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md rounded-[10px] border border-white/20 p-6 flex flex-col justify-between"
              style={{ color: skill.color }}
            >
              <div className="text-4xl">{skill.logo}</div>
              <p className="text-sm font-semibold text-white">{skill.name}</p>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Floating background particles or stars layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full animate-pulse-slow bg-[radial-gradient(circle,_rgba(255,255,255,0.02)_1px,_transparent_1px)] [background-size:20px_20px]"></div>
      </div>
    </section>
  );
}
