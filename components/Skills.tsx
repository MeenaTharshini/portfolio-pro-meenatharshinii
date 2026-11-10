
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaLayerGroup,
  FaGithub,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaPaintBrush,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiFlask,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiSupabase,
  SiPostman,
  SiFigma,
  SiVercel,
  SiRender,
  SiNetlify,
  SiGit,
} from "react-icons/si";

type AccentColor =
  | "blue"
  | "purple"
  | "cyan"
  | "green"
  | "amber"
  | "pink";

interface SkillItem {
  name: string;
  icon?: ReactNode;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: ReactNode;
  skills: SkillItem[];
  accent: AccentColor;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    subtitle: "Writing logic and solving problems",
    icon: <FaCode />,
    accent: "blue",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "C" },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    title: "Frontend Development",
    subtitle: "Building responsive user interfaces",
    icon: <FaLaptopCode />,
    accent: "purple",
    skills: [
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <FaPaintBrush /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "Building APIs and application logic",
    icon: <FaServer />,
    accent: "cyan",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Python Flask", icon: <SiFlask /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "REST APIs" },
      { name: "Groq LLM API" },
    ],
  },
  {
    title: "Databases",
    subtitle: "Data storage and management",
    icon: <FaDatabase />,
    accent: "green",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Neon PostgreSQL" },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },
  {
    title: "Core Computer Science",
    subtitle: "Fundamentals behind software engineering",
    icon: <FaLayerGroup />,
    accent: "amber",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "DBMS" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
    ],
  },
  {
    title: "Tools & Platforms",
    subtitle: "Development, collaboration and deployment",
    icon: <FaTools />,
    accent: "pink",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Netlify", icon: <SiNetlify /> },
    ],
  },
];

const accentStyles: Record<AccentColor, string> = {
  blue: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  purple: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  green: "text-green-400 bg-green-400/10 border-green-400/20",
  amber: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  pink: "text-pink-400 bg-pink-400/10 border-pink-400/20",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#080d1c] px-5 py-24 text-white md:px-8"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            What I Work With
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Technical <span className="text-purple-400">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            A collection of programming languages, frameworks, databases and
            tools I use to develop applications, solve problems and bring
            ideas to life.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111a2e]/90 p-7 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_12px_35px_rgba(168,85,247,0.12)]"
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-500/5 blur-3xl transition-all duration-300 group-hover:bg-purple-500/15" />

              {/* Category header */}
              <div className="relative mb-7 flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-2xl ${accentStyles[category.accent]}`}
                >
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Individual skills */}
              <div className="relative flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-200"
                  >
                    {skill.icon && (
                      <span className="text-sm text-purple-400">
                        {skill.icon}
                      </span>
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>

              {/* Bottom hover accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-medium tracking-wide text-slate-500">
            Always learning. Always building. Always improving.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
