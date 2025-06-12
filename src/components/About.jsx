import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNode, FaJava, FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import expressIcon from "../assets/expressjs-icon.svg";

export default function About() {
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
      color: "#888",
    },
    { name: "MongoDB", logo: <SiMongodb />, color: "#4db33d" },
    { name: "Redux", logo: <TbBrandRedux />, color: "#764abc" },
    { name: "Tailwind CSS", logo: <RiTailwindCssFill />, color: "#38bdf8" },
    { name: "Java", logo: <FaJava />, color: "#f87171" },
    { name: "Python", logo: <FaPython />, color: "#facc15" },
  ];

  return (
    <section id="about" className="z-50 px-6 py-20 max-w-6xl mx-auto">
      <div className="flex justify-between items-center pb-2 mb-10 border-b border-gray-200">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <span>💻</span> About
        </h2>
        <a
          href="https://www.linkedin.com/in/saishashank-pemmaraju-426b37293/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-300 hover:underline"
        >
          View LinkedIn →
        </a>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex flex-col md:flex-row justify-between gap-12">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">My Story</h3>
          <p className="text-gray-400 leading-relaxed">
            I’m a passionate Full Stack Developer with a knack for building
            scalable, responsive web apps. My interest in development began with
            Java and Python, and evolved into full stack engineering using the
            MERN stack.
            <br />
            <br />
            I enjoy solving complex problems and continuously seek to improve my
            skills. I'm particularly proud of FilmFlick and Blogger—projects that
            let me combine technical knowledge and user-first design.
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-6">Education</h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-400">2022 – Present</p>
              <p className="font-bold">Guru Nanak Institutions</p>
              <p className="text-gray-400">Hyderabad, India</p>
              <p className="text-sm">CS Engineering Student</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">2020 – 2022</p>
              <p className="font-bold">Sri Chaitanya Junior College</p>
              <p className="text-gray-400">Hyderabad, India</p>
              <p className="text-sm">M.P.C Student</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6">My Skillset</h3>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-md text-center text-white flex flex-col items-center gap-2"
                style={{ color: skill.color }}
              >
                <div className="text-3xl">{skill.logo}</div>
                <p className="text-sm font-semibold text-white">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
