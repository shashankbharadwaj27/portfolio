import { link } from "framer-motion/client";
import blogger from "../assets/blogger-home.png";
import filmflick from "../assets/filmflick-home.png";
import greenmiles from "../assets/green-miles-home.png";
import Tilt from 'react-parallax-tilt';

const projectList = [
  {
    title: "FilmFlick",
    description:
      "A social platform for movie lovers to log watched films, write reviews, create lists, and follow friends’ activity. Built with React, Redux Toolkit, Node.js, and Express.",
    image: filmflick,
    link: "https://github.com/shashankbharadwaj27/FilmFlick",
  },
  {
    title: "Green Miles",
    description:"Green Miles predicts the driving range of electric and hybrid vehicles based on real-time vehicle and environmental inputs. It provides accurate estimates to help users plan their trips more efficiently.",
    image: greenmiles,
    link:"https://github.com/shashankbharadwaj27/GreenMiles"
  },
  {
    title: "Blogger",
    description:
      "Backend-driven blog platform with Express.js and MongoDB. Features include user authentication, post creation, commenting, and following other users.",
    image: blogger,
    link: "https://github.com/shashankbharadwaj27/Blogger",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="z-50 px-6 py-20 max-w-5xl mx-auto">
      <div className="border-b border-gray-200 w-full mb-10">
        <h2 className="text-2xl text-center pb-2 font-bold">🛠️ Engineering Deck</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareColor="cyan">
            <div
              key={index}
              className="bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md rounded-[10px] border border-white/20 p-6 flex flex-col justify-between max-h-lg"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-semibold hover:underline"
                >
                  GitHub →
                </a>
              </div>
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="mt-6 rounded-lg shadow-sm"
              />
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
