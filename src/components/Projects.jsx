import blogger from "../assets/blogger-home.png";
import filmflick from "../assets/filmflick-home.png";

const projectList = [
  {
    title: "FilmFlick",
    description:
      "A social platform for movie lovers to log watched films, write reviews, create lists, and follow friends’ activity. Built with React, Redux Toolkit, Node.js, and Express.",
    image: filmflick,
    link: "https://github.com/shashankbharadwaj27",
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
    <section id="projects" className="z-50 px-6 py-20 max-w-6xl mx-auto">
      <div className="border-b border-gray-200 w-full mb-10">
        <h2 className="text-2xl pb-2 font-bold">✍🏻 My Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md rounded-[10px] border border-white/20 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="mt-6 rounded-lg shadow-sm"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
