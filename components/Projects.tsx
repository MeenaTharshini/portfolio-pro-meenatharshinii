
"use client";

import React, { useRef } from "react";
import {
  FaRobot,
  FaBriefcase,
  FaShieldAlt,
  FaTint,
  FaGithub,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const projects = [
  {
    title: "EVOLV",
    year: "2026",
    status: "Live",
    highlight: "Gamified Interactive Python Learning Platform",
    desc: "A gamified Python learning platform designed to make programming education structured, interactive, and engaging. EVOLV addresses passive learning and inconsistent practice through a 60-topic progressive learning pathway. Each topic follows a four-stage journey — Video, Concept, Hands-on Coding, and Quiz — supported by an integrated code execution environment, assessments, XP rewards, badges, daily streaks, and learning progress tracking.",
    icon: <FaGraduationCap />,
    image: "/images/evolv.png",
    github: "https://github.com/MeenaTharshini/Evolv_X",
    live: "https://evolv-x-three.vercel.app/#/dashboard",
    tech: ["Python", "React.js", "Vite", "Supabase", "Code Execution", "Quizzes", "Gamification", "Progress Tracking"],
  },
  {
    title: "Trust Wipe",
    year: "2026",
    status: "Live",
    highlight: "Secure Data Sanitization & Verification",
    desc: "A secure data sanitization and verification platform featuring JWT authentication, SHA-256 evidence hashing, RSA certificate signing, QR-based verification, and Socket.IO real-time monitoring.",
    icon: <FaShieldAlt />,
    image: "/images/trustwipe.png",
    github: "https://github.com/MeenaTharshini/Trust_Wipe",
    live: "https://trust-wipe-tau.vercel.app/",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.IO", "SHA-256", "RSA"],
  },
  {
    title: "LifeLink",
    year: "2026",
    status: "Live",
    highlight: "Blood Donor Management & Discovery Platform",
    desc: "A blood donor management platform with authentication, blood request management, location-based donor discovery, and donor matching using Supabase.",
    icon: <FaTint />,
    image: "/images/lifelink.png",
    github: "https://github.com/MeenaTharshini/Life-Link",
    live: "https://life-link-blood-finder-network.onrender.com/",
    tech: ["React.js", "Express.js", "Supabase", "Node.js", "JavaScript"],
  },
  {
    title: "Dhanvantri Bot",
    year: "2026",
    status: "In Progress",
    highlight: "Medical & Wellness Conversational Companion",
    desc: "A health and wellness companion providing Ayurvedic and Siddha-inspired recommendations with Groq LLaMA integration and conversational healthcare assistance.",
    icon: <FaRobot />,
    image: "/images/dhanvantri.png",
    github: "https://github.com/MeenaTharshini/Dhanvantri-MedicalBot",
    live: "#",
    tech: ["Flask", "SQLite", "Groq LLaMA", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Job Portal",
    year: "2026",
    status: "Live",
    highlight: "Full-Stack MERN Recruitment Platform",
    desc: "A full-stack MERN job portal featuring a recruiter dashboard, role-based authentication, job posting, and application tracking.",
    icon: <FaBriefcase />,
    image: "/images/jobportal.png",
    github: "https://github.com/MeenaTharshini/Advorix_Internship_Project",
    live: "https://smis-jobportal.onrender.com",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

const Projects = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const card = carouselRef.current.querySelector(
      ".project-card"
    ) as HTMLElement | null;

    const scrollAmount = card
      ? card.offsetWidth + 24
      : 700;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-900 text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm">
            What I've Built
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            My <span className="text-purple-500">Projects</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto leading-7">
            A showcase of my development journey, ideas transformed into
            applications, and solutions built through practical experience.
          </p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-end items-center gap-3 mb-7">
          <button
            type="button"
            onClick={() => scrollCarousel("left")}
            aria-label="Previous projects"
            className="w-11 h-11 rounded-full border border-purple-500/40 bg-[#151B2E] text-purple-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300"
          >
            <FaChevronLeft />
          </button>

          <button
            type="button"
            onClick={() => scrollCarousel("right")}
            aria-label="Next projects"
            className="w-11 h-11 rounded-full border border-purple-500/40 bg-[#151B2E] text-purple-300 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Single Row Project Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 project-carousel"
        >
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card group flex-none w-[90vw] md:w-[720px] lg:w-[850px] grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl bg-[#151B2E] border border-purple-500/15 hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_15px_50px_rgba(168,85,247,0.12)] snap-center"
            >
              {/* Project Image */}
              <div className="relative min-h-[250px] md:min-h-[420px] overflow-hidden bg-gradient-to-br from-purple-950 via-slate-800 to-indigo-950">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-purple-300">
                  <div className="text-7xl opacity-50 mb-4">
                    {project.icon}
                  </div>

                  <span className="text-sm uppercase tracking-[0.25em] opacity-70">
                    {project.title}
                  </span>
                </div>

                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                <span className="absolute top-5 left-5 bg-slate-950/80 backdrop-blur-md text-white text-xs px-4 py-2 rounded-full border border-white/10">
                  Project 0{index + 1}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8 lg:p-9 flex flex-col justify-center">

                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      project.status === "Live"
                        ? "bg-green-500/10 text-green-400 border-green-500/20"
                        : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                    }`}
                  >
                    {project.status}
                  </span>

                  <span className="text-slate-500 text-sm">
                    {project.year}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-purple-400 text-2xl">
                    {project.icon}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold">
                    {project.title}
                  </h3>
                </div>

                <h4 className="text-purple-300 font-medium text-sm md:text-base mb-4">
                  {project.highlight}
                </h4>

                <p className="text-slate-400 leading-6 text-sm mb-6">
                  {project.desc}
                </p>

                {/* Technologies */}
                <div className="mb-7">
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                    Technologies & Tools
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-500/10 text-purple-300 px-2.5 py-1.5 rounded-lg text-xs border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-5 mt-auto">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                    >
                      <FaGithub size={20} />
                      <span className="text-sm font-medium">Source Code</span>
                    </a>
                  )}

                  {project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                    >
                      <FaExternalLinkAlt size={16} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  ) : (
                    <span className="text-slate-500 text-sm">
                      Live demo coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Scroll Indicator */}
        <p className="text-center text-slate-500 text-xs mt-4 tracking-wider">
          USE THE ARROWS OR SWIPE TO EXPLORE PROJECTS
        </p>

      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .project-carousel {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .project-carousel::-webkit-scrollbar {
          display: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .project-carousel {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
