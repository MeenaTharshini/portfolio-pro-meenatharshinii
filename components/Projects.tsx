import React from "react";
import {
  FaRobot,
  FaBriefcase,
  FaFileAlt,
  FaShieldAlt,
  FaTint,
  FaGithub,
  FaExternalLinkAlt,
  FaGraduationCap,
} from "react-icons/fa";

const projects = [
  {
    title: "EVOLV",
    status: "Live",
    year: "2026",
    highlight: "Gamified Interactive Python Learning Platform",
    desc:
      "A gamified Python learning platform designed to make programming education structured, interactive, and engaging. EVOLV addresses passive learning and inconsistent practice through a 60-topic progressive learning pathway. Each topic follows a four-stage journey — Video, Concept, Hands-on Coding, and Quiz — supported by an integrated code execution environment, assessments, XP rewards, badges, daily streaks, and learning progress tracking.",
    icon: <FaGraduationCap />,
    github: "https://github.com/MeenaTharshini/Evolv_X",
    live: "https://evolv-x-three.vercel.app/#/dashboard",
    tech: [
      "Python",
      "React.js",
      "Vite",
      "Supabase",
      "Code Execution",
      "Quizzes",
      "Gamification",
      "Progress Tracking",
    ],
  },

  {
    title: "Trust Wipe",
    status: "Live",
    year: "2026",
    desc: "Secure data sanitization and verification platform with JWT authentication, SHA-256 evidence hashing, RSA certificate signing, QR-based verification, and Socket.IO real-time monitoring.",
    icon: <FaShieldAlt />,
    github: "https://github.com/MeenaTharshini/Trust_Wipe",
    live: "https://trust-wipe-tau.vercel.app/",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Socket.IO",
      "SHA-256",
      "RSA",
    ],
  },

  {
    title: "LifeLink",
    status: "Live",
    year: "2026",
    desc: "Blood donor management platform with authentication, blood request management, location-based donor discovery, and real-time donor matching using Supabase.",
    icon: <FaTint />,
    github: "https://github.com/MeenaTharshini/Life-Link",
    live: "https://life-link-blood-finder-network.onrender.com/",
    tech: [
      "React.js",
      "Express.js",
      "Supabase",
      "Node.js",
      "JavaScript",
    ],
  },

  {
    title: "Dhanvantri Bot",
    status: "In Progress",
    year: "2026",
    desc: "AI-powered health and wellness companion providing Ayurvedic and Siddha-inspired recommendations with Groq LLaMA integration and conversational healthcare assistance.",
    icon: <FaRobot />,
    github: "https://github.com/MeenaTharshini/Dhanvantri-MedicalBot",
    live: "#",
    tech: [
      "Flask",
      "SQLite",
      "Groq LLaMA",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  {
    title: "Job Portal",
    status: "Live",
    year: "2026",
    desc: "Full-stack MERN job portal featuring recruiter dashboard, role-based authentication, job posting, and application tracking.",
    icon: <FaBriefcase />,
    github: "https://github.com/MeenaTharshini/Advorix_Internship_Project",
    live: "https://smis-jobportal.onrender.com",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
    ],
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