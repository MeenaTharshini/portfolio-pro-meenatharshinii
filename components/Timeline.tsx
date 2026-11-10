
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaAward,
  FaCode,
  FaShieldAlt,
  FaRocket,
  FaBuilding,
  FaCertificate,
  FaHeart,
} from "react-icons/fa";

type TimelineColor =
  | "blue"
  | "cyan"
  | "purple"
  | "amber"
  | "pink"
  | "green";

interface TimelineItem {
  period: string;
  category: string;
  title: string;
  organization: string;
  description: string;
  icon: ReactNode;
  tags: string[];
  color: TimelineColor;
}

const timelineData: TimelineItem[] = [
  {
    period: "2024 – 2028",
    category: "EDUCATION",
    title: "B.E. Computer Science Engineering",
    organization: "VSB Engineering College, Karur",
    description:
      "Pursuing Computer Science Engineering with a CGPA of 9.15, building a strong foundation in programming and core computer science concepts.",
    icon: <FaGraduationCap />,
    tags: ["Computer Science", "CGPA 9.15"],
    color: "blue",
  },
  {
    period: "December 2025 – January 2026",
    category: "INTERNSHIP",
    title: "Software Development Intern",
    organization: "New Technology Career Solutions",
    description:
      "Gained practical software development experience and strengthened programming and application development skills.",
    icon: <FaBuilding />,
    tags: ["Software Development"],
    color: "cyan",
  },
  {
    period: "January – February 2026",
    category: "INTERNSHIP",
    title: "Full Stack Development Intern",
    organization: "CodeAlpha",
    description:
      "Worked with Python, Django and SQLite to develop full-stack applications and explore backend development.",
    icon: <FaBriefcase />,
    tags: ["Python", "Django", "SQLite"],
    color: "purple",
  },
  {
    period: "February – March 2026",
    category: "INTERNSHIP",
    title: "Web Developer (Full Stack) Intern",
    organization: "Advorix Technologies",
    description:
      "Developed a Student Management System and Job Portal using MongoDB, Express.js, React.js and Node.js. Recognized as Best Performer Intern.",
    icon: <FaAward />,
    tags: ["MERN Stack", "Best Performer"],
    color: "amber",
  },
  {
    period: "March – April 2026",
    category: "INTERNSHIP",
    title: "UI/UX Design Intern",
    organization: "CodSoft",
    description:
      "Worked with Figma and developed practical experience in user interface and user experience design.",
    icon: <FaBriefcase />,
    tags: ["UI/UX", "Figma"],
    color: "pink",
  },
  {
    period: "June – July 2026",
    category: "INTERNSHIP",
    title: "Full Stack Development Intern",
    organization: "Thiranex",
    description:
      "Built full-stack applications using React.js, Node.js, Python, Flask and SQLAlchemy, integrating authentication, REST APIs and databases.",
    icon: <FaLaptopCode />,
    tags: ["React", "Node.js", "Flask", "REST APIs"],
    color: "cyan",
  },
  {
    period: "September 2026 – Present",
    category: "INTERNSHIP",
    title: "Infosys Springboard Internship 7.0",
    organization: "Infosys",
    description:
      "Selected for the Infosys Springboard Virtual Internship Program 7.0. Currently continuing the learning and development journey.",
    icon: <FaBuilding />,
    tags: ["Virtual Internship", "Ongoing"],
    color: "blue",
  },
  {
    period: "2025 – Present",
    category: "TECHNICAL GROWTH",
    title: "Competitive Programming",
    organization: "LeetCode",
    description:
      "Solved 240+ coding problems while strengthening data structures, algorithms and problem-solving skills.",
    icon: <FaCode />,
    tags: ["DSA", "Java", "Python"],
    color: "amber",
  },
  {
    period: "2025",
    category: "CERTIFICATION",
    title: "Programming in Java – 95%",
    organization: "NPTEL",
    description:
      "Successfully completed the NPTEL Programming in Java course with a score of 95% (top 5%) Elite + Gold, strengthening Java and object-oriented programming concepts.",
    icon: <FaCertificate />,
    tags: ["Java", "OOP"],
    color: "purple",
  },
  {
    period: "2026",
    category: "CERTIFICATION",
    title: "Cybersecurity and Privacy - 79%",
    organization: "NPTEL",
    description:
      "Completed the NPTEL certification in Cybersecurity and Privacy, with Elite + Silver, gaining knowledge of cybersecurity principles and privacy protection..",
    icon: <FaShieldAlt />,
    tags: ["Cybersecurity", "Privacy"],
    color: "green",
  },
  {
    period: "2025 – Present",
    category: "PROJECT DEVELOPMENT",
    title: "Building Real-World Applications",
    organization: "Independent Projects",
    description:
      "Developed projects including TrustWipe, DhanvantriBot, EVOLV and LifeLink, exploring secure data sanitization, AI-based health assistance, gamified learning and blood donor networking.",
    icon: <FaRocket />,
    tags: ["TrustWipe", "DhanvantriBot", "EVOLV", "LifeLink"],
    color: "pink",
  },
];

const colorStyles: Record<TimelineColor, string> = {
  blue: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
  purple: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  amber: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  pink: "text-pink-400 bg-pink-400/10 border-pink-400/30",
  green: "text-green-400 bg-green-400/10 border-green-400/30",
};

function Timeline() {
  return (
    <section
      id="timeline"
      className="relative isolate overflow-hidden bg-[#080d1c] px-5 py-24 text-white md:px-8"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Learn • Build • Grow
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            My <span className="text-purple-400">Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Every milestone represents a step forward — from academic
            foundations to internships, certifications and real-world projects.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute bottom-0 left-[15px] top-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-14">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.title}-${item.organization}`}
                  initial={{
                    opacity: 0,
                    y: 35,
                    x: isLeft ? -25 : 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                  }}
                  className={`relative flex pl-12 md:w-1/2 md:pl-0 ${
                    isLeft
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  {/* Single timeline node */}
                  <div
                    className={`absolute left-[7px] top-8 z-10 flex h-4 w-4 items-center justify-center rounded-full border-[3px] border-[#080d1c] bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)] md:left-auto ${
                      isLeft
                        ? "md:right-[-8px]"
                        : "md:left-[-8px]"
                    }`}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>

                  {/* Timeline card */}
                  <div className="group w-full rounded-2xl border border-white/10 bg-[#111a2e]/90 p-6 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-[0_10px_35px_rgba(168,85,247,0.12)] md:p-7">
                    {/* Date and category */}
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-semibold tracking-wide text-purple-300">
                        {item.period}
                      </span>

                      <span
                        className={`rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider ${
                          colorStyles[item.color]
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>

                    {/* Icon and title */}
                    <div className="mb-4 flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-xl ${
                          colorStyles[item.color]
                        }`}
                      >
                        {item.icon}
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-purple-300 md:text-xl">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-slate-400">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>

                    {/* Technology and achievement tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-slate-300 transition-colors duration-300 group-hover:border-purple-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline ending */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300">
            <FaHeart />
          </div>

          <h3 className="text-xl font-bold text-white">
            The Journey Continues...
          </h3>

          <p className="mt-2 text-sm tracking-wide text-slate-500">
            Learn. Build. Grow. Repeat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Timeline;
