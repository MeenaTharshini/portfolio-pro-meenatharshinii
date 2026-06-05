"use client";

import React from "react";
import {
  FaLaptopCode,
  FaServer,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

const skills = [
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    items: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    title: "Languages",
    icon: <FaCode />,
    items: ["Python", "Java", "C++", "C"],
  },
  {
    title: "Tools & Platforms",
    icon: <FaDatabase />,
    items: [
      "MongoDB",
      "MySQL",
      "Git",
      "GitHub",
      "Figma",
      "Vercel",
      "Render",
      "Netlify",
      "Groq LLM API",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="text-purple-500">Skills</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use for web development,
            problem solving, and software projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#151B2E] border border-purple-500/10 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl mb-5">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-5">
                {skill.title}
              </h3>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}