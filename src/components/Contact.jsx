import telephone from "../assets/telephone.jpg";

export default function Contact() {
  return (
    <section id="contact" className="z-50 px-6 py-20 max-w-6xl mx-auto">
      <div className="border-b border-gray-300 mb-8">
        <h2 className="text-3xl font-bold">📬 Contact</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 p-4 flex-1 text-center md:text-left">
          <p className="py-5 text-lg text-gray-300">
            Are you interested in collaborating or want to connect or chat? If
            so, hit the contact button down below or&nbsp;
            <a
              className="text-cyan-400 underline"
              href="https://www.linkedin.com/in/saishashank-pemmaraju-426b37293/"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact me via LinkedIn
            </a>
            .
          </p>
          <button
            onClick={() =>
              (window.location.href = "mailto:saishashankpemmaraju@gmail.com")
            }
            className="cursor-pointer font-semibold bg-white hover:bg-cyan-600 text-black px-6 py-3 rounded-lg transition duration-300"
          >
            Contact me
          </button>
        </div>

        <img
          src={telephone}
          alt="Phone illustration"
          className="w-2/3 md:w-1/4 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hidden md:block"
        />
      </div>
    </section>
  );
}
