
"use client";

import { useState } from "react";

type TabKey = "overview" | "development" | "problemSolving" | "vision";

const aboutTabs: {
  id: TabKey;
  label: string;
  heading: string;
  description: string;
  points: string[];
}[] = [
  {
    id: "overview",
    label: "Who I Am",
    heading: "A developer driven by curiosity.",
    description:
      "I'm a Computer Science Engineering student passionate about transforming ideas into practical digital products. I enjoy exploring technology, understanding real-world problems, and building solutions that make a meaningful difference.",
    points: [
      "Interested in full-stack and AI-powered development",
      "Enjoy experimenting with new technologies",
      "Believe in learning by building",
    ],
  },
  {
    id: "development",
    label: "What I Build",
    heading: "From ideas to working products.",
    description:
      "My development journey spans full-stack applications, AI-powered systems, and security-focused solutions. I focus on building functional products that solve specific problems rather than simply experimenting with code.",
    points: [
      "EVOLV – Gamified Python learning platform",
      "Trust Wipe – Secure data sanitization and verification",
      "LifeLink – Blood donor discovery platform",
      "Dhanvantri AI – Safety-first healthcare companion",
      "Job Portal – MERN recruitment platform",
    ],
  },
  {
    id: "problemSolving",
    label: "Problem Solving",
    heading: "Consistency over shortcuts.",
    description:
      "I strengthen my programming fundamentals through Data Structures and Algorithms, coding challenges, and hands-on development. Every problem I solve helps me approach software engineering with better logic and clarity.",
    points: [
      "240+ LeetCode problems solved",
      "Practising Data Structures and Algorithms",
      "Building projects to apply concepts practically",
    ],
  },
  {
    id: "vision",
    label: "My Direction",
    heading: "Building technology with purpose.",
    description:
      "My goal is to become a strong software engineer and product builder. I'm particularly interested in intelligent applications, responsible AI, scalable systems, and turning meaningful ideas into useful products.",
    points: [
      "Explore responsible and practical AI applications",
      "Strengthen software architecture and engineering skills",
      "Build products that address real-world challenges",
    ],
  },
];

const techStack = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Supabase",
  "Flask",
  "REST APIs",
  "AI Integration",
  "Data Structures & Algorithms",
];

export default function About() {
  const [active, setActive] = useState<TabKey>("overview");

  const selectedTab = aboutTabs.find((tab) => tab.id === active)!;

  return (
    <section
      id="about"
      className="relative min-h-screen bg-slate-900 text-white py-24 px-5 md:px-8 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
            A Little About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            More Than Just{" "}
            <span className="text-purple-500">Code.</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-7">
            A curious mind, a continuous learner, and an aspiring software
            engineer who loves turning problems into purposeful products.
          </p>
        </div>

        {/* Main About Layout */}
        <div className="grid lg:grid-cols-[0.85fr_1.5fr] gap-8 items-stretch">

          {/* Left Identity Card */}
          <div className="rounded-3xl border border-purple-500/20 bg-[#151B2E] p-7 md:p-9 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-purple-400 text-3xl font-bold mb-7">
                {"</>"}
              </div>

              <p className="text-purple-400 text-xs uppercase tracking-[0.2em] font-semibold">
                My Identity
              </p>

              <h3 className="text-2xl md:text-3xl font-bold mt-3 leading-snug">
                Developer.
                <br />
                Problem Solver.
                <br />
                Product Builder.
                <br />
                ∞ Curiosity to Learn
              </h3>

              <p className="text-slate-400 text-sm leading-7 mt-5">
                I enjoy the complete journey of development - understanding
                a problem, designing a solution, writing code, and bringing
                an application to life.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">
                Current Focus
              </p>
              <p className="text-purple-300 font-medium text-sm">
                Full-Stack Development · AI · Problem Solving
              </p>
            </div>
          </div>

          {/* Right Interactive Section */}
          <div className="rounded-3xl border border-purple-500/20 bg-[#151B2E] p-6 md:p-9">

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-9">
              {aboutTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  aria-pressed={active === tab.id}
                  className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                    active === tab.id
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30"
                      : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Content */}
            <div aria-live="polite" className="min-h-[290px]">
              <p className="text-purple-400 text-xs uppercase tracking-widest font-semibold">
                {selectedTab.label}
              </p>

              <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-5">
                {selectedTab.heading}
              </h3>

              <p className="text-slate-400 text-sm md:text-base leading-8">
                {selectedTab.description}
              </p>

              <div className="mt-7 space-y-3">
                {selectedTab.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✦</span>
                    <p className="text-slate-300 text-sm leading-6">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-2 mt-8">
              {aboutTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  aria-label={`Show ${tab.label}`}
                  aria-pressed={active === tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === tab.id
                      ? "w-10 bg-purple-500"
                      : "w-4 bg-slate-700 hover:bg-purple-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

          {[
            { number: "05", label: "Featured Projects" },
            { number: "05", label: "Internships" },
            { number: "240+", label: "LeetCode Problems" },
            { number: "9.15", label: "CGPA" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group bg-[#151B2E] border border-purple-500/10 hover:border-purple-500/40 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-purple-400">
                {stat.number}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Interests */}
        <div className="mt-14 text-center">
          <p className="text-purple-400 uppercase tracking-[0.25em] text-xs font-semibold mb-6">
            Technologies I Work With
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2.5 rounded-xl bg-[#151B2E] border border-purple-500/15 text-slate-300 text-xs md:text-sm hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-16">
          <p className="text-slate-400 text-sm md:text-base italic">
            "I don't just want to learn how technology works.
            I want to build something meaningful with it."
          </p>
        </div>

      </div>
    </section>
  );
}
