"use client";

import { useState } from "react";

export default function About() {
  const [active, setActive] = useState("identity");

  const content = {
    identity:
      "Computer Science Engineering student building full-stack and AI-powered applications.",

    projects:
      "Built AI, healthcare, and productivity-focused web applications using modern technologies.",

    skills:
      "Working with React, Node.js, MongoDB, Flask, REST APIs, and AI integrations.",

    growth:
      "Solved 168+ LeetCode problems while strengthening DSA and software engineering fundamentals.",

    goal:
      "Focused on building scalable products and growing as a software engineer through continuous learning.",
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            CSE Student &{" "}
            <span className="text-purple-500">Product Builder</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Building practical software solutions through full-stack development,
            AI integrations, and continuous learning.
          </p>
        </div>

        {/* Interactive Text */}
        <p className="text-slate-300 text-lg md:text-xl leading-8 max-w-4xl mx-auto">
          I am a{" "}
          <span
            onMouseEnter={() => setActive("identity")}
            className="text-purple-400 cursor-pointer font-medium"
          >
            Computer Science Engineering student
          </span>{" "}
          passionate about building practical software solutions.

          {" "}My work includes{" "}
          <span
            onMouseEnter={() => setActive("projects")}
            className="text-purple-400 cursor-pointer font-medium"
          >
            full-stack applications
          </span>
          , AI systems, and modern web development.

          {" "}I continuously improve through{" "}
          <span
            onMouseEnter={() => setActive("growth")}
            className="text-purple-400 cursor-pointer font-medium"
          >
            projects and DSA
          </span>
          .

          {" "}My technical focus is{" "}
          <span
            onMouseEnter={() => setActive("skills")}
            className="text-purple-400 cursor-pointer font-medium"
          >
            scalable software development
          </span>
          .
        </p>

        {/* Dynamic Card */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8">
            <p className="text-slate-300 text-lg leading-8">
              {content[active as keyof typeof content]}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

          <div className="bg-[#151B2E] p-5 rounded-2xl border border-purple-500/10">
            <h3 className="text-3xl font-bold text-purple-400">4</h3>
            <p className="text-slate-400 text-sm mt-2">Featured Projects</p>
          </div>

          <div className="bg-[#151B2E] p-5 rounded-2xl border border-purple-500/10">
            <h3 className="text-3xl font-bold text-purple-400">168+</h3>
            <p className="text-slate-400 text-sm mt-2">LeetCode Solved</p>
          </div>

          <div className="bg-[#151B2E] p-5 rounded-2xl border border-purple-500/10">
            <h3 className="text-3xl font-bold text-purple-400">2+</h3>
            <p className="text-slate-400 text-sm mt-2">Internships</p>
          </div>

          <div className="bg-[#151B2E] p-5 rounded-2xl border border-purple-500/10">
            <h3 className="text-3xl font-bold text-purple-400">9.55</h3>
            <p className="text-slate-400 text-sm mt-2">CGPA</p>
          </div>

        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {[
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Flask",
            "REST APIs",
            "AI Integration",
            "DSA",
          ].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-2xl bg-[#151B2E] border border-purple-500/10 text-purple-300 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}