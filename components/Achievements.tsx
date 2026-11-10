
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTrophy,
  FaCode,
  FaJava,
  FaShieldAlt,
  FaBriefcase,
  FaUsers,
  FaCertificate,
  FaAward
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface Achievement {
  title: string;
  description: string;
  category: string;
  icon: IconType;
  highlight: string;
  number: string;
}

const achievements: Achievement[] = [
  {
    title: "Best Performer Intern",
    description:
      "Recognized for outstanding performance and contributions during the internship at Advorix Technologies.",
    category: "Professional Recognition",
    icon: FaTrophy,
    highlight: "Best Performer",
    number: "01",
  },
  {
    title: "Infosys Virtual Internship 7.0",
    description:
      "Selected for the Infosys Springboard virtual internship program, gaining exposure to industry-oriented learning.",
    category: "Internship",
    icon: FaBriefcase,
    highlight: "Infosys Springboard",
    number: "02",
  },
  {
    title: "LeetCode",
    description:
      "Solved more than 240 coding challenges, strengthening problem-solving skills and understanding of data structures and algorithms.",
    category: "Problem Solving",
    icon: FaCode,
    highlight: "240+ Problems",
    number: "03",
  },
  {
    title: "Programming in Java",
    description:
      "Achieved an Elite Gold certification with a score of 95%, placing in the Top 5% in the NPTEL course.",
    category: "NPTEL Certification",
    icon: FaJava,
    highlight: "95% • Elite Gold • Top 5%",
    number: "04",
  },
  {
    title: "Cybersecurity and Privacy",
    description:
      "Successfully completed the NPTEL certification, gaining knowledge of cybersecurity principles and privacy protection.",
    category: "NPTEL Certification",
    icon: FaShieldAlt,
    highlight: "79% • Elite Silver",
    number: "05",
  },
  {
    title: "Technical Certifications",
    description:
      "Completed Python and Java Foundation certifications and technical learning programs, including Microsoft Azure Cloud Computing.",
    category: "Technical Learning",
    icon: FaCertificate,
    highlight: "Python • Java • Azure",
    number: "06",
  },
  {
    title: "Hackathon Leadership",
    description:
      "Led Team SMIS across three competitive hackathons. Hack Synapse 2026: selected among the Top 10 teams. DeepSprint Innovest 3.0: advanced to the final round after two evaluation rounds. HackWithAmypo: qualified for the final round after multiple preliminary stages.",
    category: "Leadership & Hackathons",
    icon: FaUsers,
    highlight: "3 Hackathons • Team Lead",
    number: "07",
  },
];

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="achievements"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-5 py-24 text-white md:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-purple-400 md:text-sm">
            Milestones & Recognition
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My <span className="text-purple-400">Achievements</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Every milestone represents a step forward in my journey of
            learning, building, competing and leading.
          </p>
        </motion.div>

        {/* Desktop expandable gallery */}
        <div
          className="hidden h-[460px] gap-3 md:flex"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {achievements.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={item.number}
                layout
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={`${item.title}, ${isActive ? "expanded" : "collapsed"}`}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                animate={{
                  flex: isActive ? 5 : 1,
                  opacity: isActive ? 1 : 0.8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 24,
                }}
                className={`group relative min-w-0 cursor-pointer overflow-hidden rounded-3xl border ${
                  isActive
                    ? "border-purple-500/50 bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950"
                    : "border-slate-800 bg-slate-900 hover:border-purple-500/30"
                }`}
              >
                {/* Decorative background */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_55%)]" />

                {/* Collapsed panel */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-between py-7 transition-opacity duration-300 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span className="text-xs font-bold tracking-widest text-slate-500">
                    {item.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-xl text-purple-400">
                    <Icon />
                  </div>

                  <span
                    className="text-sm font-semibold tracking-wide text-slate-300"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {item.title}
                  </span>

                  <span className="text-xs text-purple-400">+</span>
                </div>

                {/* Expanded panel */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                      className="relative flex h-full min-w-[250px] flex-col justify-between p-7 lg:p-9"
                    >
                      <div>
                        <div className="mb-8 flex items-center justify-between">
                          <span className="text-sm font-bold tracking-[0.2em] text-purple-400">
                            {item.number} / 07
                          </span>

                          <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-300">
                            {item.category}
                          </span>
                        </div>

                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-3xl text-purple-400">
                          <Icon />
                        </div>

                        <h3 className="max-w-lg text-2xl font-bold leading-tight text-white lg:text-3xl">
                          {item.title}
                        </h3>

                        <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 lg:text-base">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-purple-500/20 pt-6">
                        <span className="text-sm font-semibold text-purple-300">
                          {item.highlight}
                        </span>

                        <FaAward className="text-purple-400 text-xl" /></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile and tablet accordion */}
        <div className="flex flex-col gap-3 md:hidden">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={item.number}
                layout
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isActive
                    ? "border-purple-500/50 bg-gradient-to-br from-purple-950/70 to-slate-900"
                    : "border-slate-800 bg-slate-900/80"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isActive ? -1 : index)
                  }
                  aria-expanded={isActive}
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span className="text-xs font-bold text-purple-400">
                    {item.number}
                  </span>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-xl text-purple-400">
                    <Icon />
                  </span>

                  <span className="flex-1 text-sm font-semibold text-white">
                    {item.title}
                  </span>

                  <span className="text-xl text-purple-400">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pl-20">
                        <span className="text-xs font-medium text-purple-300">
                          {item.category}
                        </span>

                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          {item.description}
                        </p>

                        <p className="mt-4 border-t border-purple-500/20 pt-4 text-sm font-semibold text-purple-400">
                          {item.highlight}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Footer hint */}
        <p className="mt-8 text-center text-xs tracking-wide text-slate-600">
          EXPLORE THE PANELS TO DISCOVER EACH MILESTONE
        </p>
      </div>
    </section>
  );
}
