import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import resume from '../assets/Shashank_Resume_compressed.pdf';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center px-4 pt-28 md:pt-32 gap-10 md:gap-20"
    >
      <div className="max-w-6xl w-full text-center md:text-left scale-[0.8] origin-top transform">
        <h2 className="text-xl text-center sm:text-3xl md:text-4xl font-bold mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="text-cyan-400 inline-block">
            <Typewriter
              words={['👋 Hello, I am Shashank Bharadwaj']}
              loop={3}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </span>
        </h2>

        <p className="text-base sm:text-md mb-2 text-center text-gray-300 ">
          MERN Stack developer | Machine Learning Practitioner
        </p>
        <p className="text-base sm:text-md text-center text-gray-300">
          Fuelled by curiosity, driven by code.
        </p>

        <div className="flex justify-center space-x-4 mt-6 text-2xl">
          <a
            href="https://github.com/shashankbharadwaj27"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub className="hover:text-gray-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/saishashank-pemmaraju-426b37293/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="hover:text-gray-600" />
          </a>
        </div>

        <div className="flex justify-center">
          <a
            href={resume}
            download
            className="mt-6 inline-block bg-cyan-400 text-black font-semibold px-6 py-2 rounded-lg hover:bg-cyan-300 hover:scale-105 transition-transform duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
