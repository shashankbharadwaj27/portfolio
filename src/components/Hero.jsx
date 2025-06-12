import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center px-2 pt-28 md:pt-32 gap-10 md:gap-20"
    >
      <div className="max-w-6xl text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-cyan-400">
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

        <p className="text-lg text-center text-gray-300">
          Fuelled by curiosity, driven by code.
        </p>
        <div className="flex justify-center space-x-4 mt-6 text-2xl">
          <a
            href="https://github.com/shashankbharadwaj27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/saishashank-pemmaraju-426b37293/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-gray-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
