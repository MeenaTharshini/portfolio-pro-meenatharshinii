import React from "react";
import {
  FaRobot,
  FaBriefcase,
  FaFileAlt,
  FaTint,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
  title: "Dhanvantri Bot",
  status: "In Progress",
  year: "2026",
  desc: "AI-powered healthcare assistant with authentication, chat history, and Groq LLM integration for intelligent medical query responses. Currently being enhanced with improved healthcare workflows and AI capabilities.",
  icon: <FaRobot />,
  github: "https://github.com/MeenaTharshini/Dhanvantri-MedicalBot",
  live: "#",
  tech: ["Python", "Flask", "SQLite", "Groq API"],
},

  {
    title: "Job Portal",
    status: "Live",
    year: "2026",
    desc: "Full-stack MERN job portal with role-based authentication, recruiter dashboard, job posting, and application tracking.",
    icon: <FaBriefcase />,
    github:
      "https://github.com/MeenaTharshini/Advorix_Internship_Project",
    live: "https://smis-jobportal.onrender.com",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },

  {
    title: "Resume Generator",
    status: "Live",
    year: "2025",
    desc: "AI-powered healthcare assistant with authentication, conversation history, and Groq LLM integration. Currently being enhanced with advanced healthcare workflows and intelligent response capabilities.",
    icon: <FaFileAlt />,
    github:
      "https://github.com/MeenaTharshini/resume_generator",
    live: "https://resumegeneratorbymti.netlify.app/",
    tech: ["React", "Vite", "CSS"],
  },

  {
    title: "LiveLink",
    status: "In Development",
    year: "2026",
    desc: "Emergency blood donor network designed to connect donors and recipients through location-based matching.",
    icon: <FaTint />,
    github: "#",
    live: "#",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            Implementation
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="text-purple-500">Projects</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Projects showcasing full-stack development, AI integration,
            and software engineering practices.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                h-full
                bg-[#151B2E]
                border border-purple-500/10
                rounded-3xl
                p-8
                flex flex-col
                transition-all duration-300
                hover:-translate-y-2
                hover:border-purple-500/40
                hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]
              "
            >

              {/* Icon */}
              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-purple-500/10
                  flex items-center justify-center
                  text-purple-400 text-2xl
                  mb-6
                "
              >
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              {/* Status */}
              <div className="flex items-center gap-3 mt-3 mb-5">
                <span
                  className={`
                    px-3 py-1 rounded-full text-xs font-medium border
                    ${
                      project.status === "Live"
                        ? "bg-green-500/10 text-green-400 border-green-500/20"
                        : project.status === "Completed"
                        ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                        : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                    }
                  `}
                >
                  {project.status}
                </span>

                <span className="text-slate-500 text-sm">
                  {project.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-400 leading-7 mb-6 flex-grow">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-purple-500/10
                      text-purple-300
                      px-3 py-1
                      rounded-full
                      text-sm
                      border border-purple-500/20
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5 mt-auto">

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition"
                    title="GitHub Repository"
                  >
                    <FaGithub size={22} />
                  </a>
                )}

                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}

                {project.github === "#" &&
                  project.live === "#" && (
                    <span className="text-slate-500 text-sm">
                      Coming Soon
                    </span>
                  )}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;