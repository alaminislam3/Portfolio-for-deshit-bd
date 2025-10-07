import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Looplate",
    description:
      "A MERN Stack-powered platform that connects Restaurants, Charities, and Users to reduce local food waste by enabling food donations and pickups in real-time.",
    image: "https://i.ibb.co.com/kVJkCCg8/Screenshot-196.png",
    live: "https://looplate.netlify.app/",
    github: "https://github.com/alaminislam3/looplate-client",
    languages: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "User role-based authentication",
      "Food donation & pickup system",
      "Real-time updates and dashboards",
    ],
  },
  {
    title: "Leaftrack",
    description:
      "LeafTrack is a modern web application designed to help plant enthusiasts manage and track their plants with ease.",
    image: "https://i.ibb.co/prsJG5Vf/leaf-Track-ss-new.png",
    live: "https://practice-firebase-auth-9e8cd.web.app",
    github: "https://github.com/alaminislam3/LeafTrack",
    languages: ["React", "Firebase", "Tailwind"],
    features: [
      "Plant management dashboard",
      "Firebase authentication",
      "User-friendly responsive UI",
    ],
  },
  {
    title: "Learnify",
    description:
      "A full-stack web application where users can read, post, and manage articles easily.",
    image: "https://i.ibb.co/hJhrwdyB/learnify-ss.png",
    live: "https://learnify-500d1.web.app",
    github: "https://github.com/alaminislam3/Learnify",
    languages: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "Article creation and management",
      "User authentication & authorization",
      "Modern responsive design",
    ],
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="project"
      className="bg-[#d9cabf] px-6 py-12 sm:px-10 lg:px-[150px] sm:py-16 lg:py-24"
    >
      <h2 className="text-5xl font-extrabold text-black text-center mb-12">
        My Projects
      </h2>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col p-10 lg:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-md rounded-lg shadow-md transform transition-transform duration-500 hover:scale-110 object-cover"
              />
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-1/2 p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-black">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4 flex-wrap justify-center lg:justify-start">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#FD6E0A] text-white"
                >
                  Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#FD6E0A] text-white flex items-center gap-2"
                >
                  <FaGithub className="text-xl" /> GitHub
                </a>
                {/* Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn bg-[#FD6E0A] text-white"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-[#d9cabf] rounded-xl p-8 w-[600px] max-h-[90vh] overflow-y-auto shadow-lg relative text-black">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-red-600 font-bold text-xl"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            {/* Modal Content */}
            <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
            

            <p className="mb-4">{selectedProject.description}</p>

            <p className="mb-2">
              <strong>Languages & Tools:</strong>{" "}
              {selectedProject.languages?.join(", ")}
            </p>

            <div className="mb-4">
              <strong>Key Features:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {selectedProject.features?.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#FD6E0A] text-white"
              >
                Live Site
              </a>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#FD6E0A] text-white flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
