
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
  title: "Dhanvantri AI",
  year: "2025",
  status: "In Progress",
  highlight: "Safety-First AI Health & Wellness Companion",
  desc: "An AI-powered health companion designed around responsible healthcare conversations. Features emergency symptom recognition, medication safety safeguards, non-diagnostic responses, Tamil and English support, context-aware conversations, and primary/fallback AI models. Provides Ayurveda and Siddha-inspired wellness guidance with evidence awareness while prioritizing professional medical care when necessary.",
  icon: <FaRobot />,
  image: "/images/dhanvantri.png",
  github: "https://github.com/MeenaTharshini/Dhanvantri-MedicalBot",
  live: "#",
  tech: [
    "Python",
    "Flask",
    "SQLite",
    "Groq LLaMA",
    "AI Safety Prompting",
    "Bilingual AI",
    "Emergency Recognition",
    "HTML",
    "CSS",
    "JavaScript"
  ],
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
    title: "Job Portal",
    year: "2025",
    status: "Live",
    highlight: "Full-Stack MERN Recruitment Platform",
    desc: "A full-stack MERN job portal featuring a recruiter dashboard, role-based authentication, job posting, and application tracking.",
    icon: <FaBriefcase />,
    image: "/images/jobportal1.png",
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
      ? card.offsetWidth + 20
      : 340;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-900 text-white py-24 px-5 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-xs md:text-sm">
            What I've Built
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            My <span className="text-purple-500">Projects</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm leading-7">
            A showcase of my development journey, ideas transformed into
            applications, and solutions built through practical experience.
          </p>
        </div>

        {/* Carousel Arrows */}
        <div className="flex justify-end gap-3 mb-5">
          <button
            type="button"
            onClick={() => scrollCarousel("left")}
            aria-label="Previous project"
            className="w-10 h-10 rounded-full border border-purple-500/40 bg-[#151B2E] text-purple-300 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            <FaChevronLeft size={14} />
          </button>

          <button
            type="button"
            onClick={() => scrollCarousel("right")}
            aria-label="Next project"
            className="w-10 h-10 rounded-full border border-purple-500/40 bg-[#151B2E] text-purple-300 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            <FaChevronRight size={14} />
          </button>
        </div>

        {/* One Row of Small Project Cards */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 project-carousel"
        >
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card group flex-none w-[280px] sm:w-[310px] md:w-[330px] snap-start overflow-hidden rounded-2xl bg-[#151B2E] border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)]"
            >

              {/* Screenshot at Top - Wide 3:1 Aspect Ratio */}
<div className="relative w-full aspect-[3/1] overflow-hidden bg-gradient-to-br from-purple-950 via-slate-800 to-indigo-950">

  {/* Background Icon */}
  <div className="absolute inset-0 flex items-center justify-center text-purple-300 text-5xl opacity-20">
    {project.icon}
  </div>

  {/* Project Image */}
  <img
    src={project.image}
    alt={`${project.title} project screenshot`}
    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
  />

  {/* Project Number */}
  <span className="absolute top-2 left-2 z-10 bg-slate-950/80 text-white text-[9px] px-2 py-1 rounded-full">
    PROJECT 0{index + 1}
  </span>

  {/* Status */}
  <span
    className={`absolute top-2 right-2 z-10 text-[9px] font-semibold px-2 py-1 rounded-full ${
      project.status === "Live"
        ? "bg-green-500/20 text-green-300"
        : "bg-yellow-500/20 text-yellow-300"
    }`}
  >
    {project.status}
  </span>
</div>

              {/* Description at Bottom */}
              <div className="p-4 flex flex-col">

                {/* Title and Year */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-purple-400 text-lg shrink-0">
                      {project.icon}
                    </span>

                    <h3 className="text-lg font-bold text-white truncate">
                      {project.title}
                    </h3>
                  </div>

                  <span className="text-slate-500 text-xs shrink-0">
                    {project.year}
                  </span>
                </div>

                {/* Highlight */}
                <h4 className="text-purple-300 text-xs font-semibold mb-2 min-h-[32px]">
                  {project.highlight}
                </h4>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-5 mb-4 line-clamp-4 min-h-[80px]">
                  {project.desc}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                    Technologies & Tools
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-purple-500/10 text-purple-300 px-2 py-1 rounded-md text-[10px] border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4 border-t border-white/10 pt-3 mt-auto">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-200 transition"
                    >
                      <FaGithub size={15} />
                      <span className="text-xs font-medium">
                        Source Code
                      </span>
                    </a>
                  )}

                  {project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-200 transition"
                    >
                      <FaExternalLinkAlt size={12} />
                      <span className="text-xs font-medium">
                        Live Demo
                      </span>
                    </a>
                  ) : (
                    <span className="text-slate-500 text-xs">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Navigation Hint */}
        <p className="text-center text-slate-500 text-[10px] mt-3 tracking-widest">
          USE ARROWS OR SWIPE TO EXPLORE
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
