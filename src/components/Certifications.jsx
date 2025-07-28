import { FaCertificate } from "react-icons/fa";
import ibm_logo from '../assets/ibm.png'
import aws_logo from '../assets/aws.png'
import deloitte_logo from '../assets/deloitte.png'

const certifications = [
  {
    title: "AWS Educate Introduction to Cloud 101",
    provider: "Amazon Web Services",
    link: "https://www.credly.com/badges/df6e3b22-a1f8-4c54-b922-18e5896cae9d/linked_in_profile",
    logo:aws_logo
  },
  {
    title: "Applied Data Science with Python - level 2",
    provider: "IBM",
    link: "https://www.credly.com/badges/96c667ff-5af4-46ed-ad3d-9237c4bf4183/linked_in_profile",
    logo:ibm_logo
  },
  {
    title: "Technology Job Simulation",
    provider: "Deloitte Australia",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_9pjSrmcEDZzQ98ipz_1752075131845_completion_certificate.pdf",
    logo: deloitte_logo,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="z-50 px-6 py-20 max-w-5xl mx-auto relative"
    >
      <div className="border-b border-gray-200 w-full mb-10">
        <h2 className="text-2xl text-center pb-2 font-bold">📜 Mission Badges: Certified Competencies</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-5 shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <div className="h-2xl min-h-72 flex items-center">
              <img className="w-xl" src={cert.logo} alt="" />
            </div>
            <div className="flex items-center gap-3 text-white mb-2">
              <h3 className="font-semibold text-base">{cert.title}</h3>
            </div>
            <p className="text-sm text-gray-400 mb-2">{cert.provider}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-400 hover:underline"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
