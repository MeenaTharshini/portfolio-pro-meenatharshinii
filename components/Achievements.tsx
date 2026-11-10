
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaAward,
  FaCode,
  FaJava,
  FaShieldAlt,
  FaBriefcase,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface Achievement {
  title: string;
  description: string;
  category: string;
  icon: IconType;
  highlight?: string;
}

const achievements: Achievement[] = [
  {
    title: "Best Performer Intern",
    description:
      "Recognized for outstanding performance and contributions during the internship at Advorix Technologies.",
    category: "Professional",
    icon: FaTrophy,
    highlight: "Recognition",
  },
  {
    title: "Infosys Virtual Internship 7.0",
    description:
      "Selected for the Infosys Springboard virtual internship program, gaining exposure to industry-oriented learning.",
    category: "Internship",
    icon: FaBriefcase,
    highlight: "Infosys",
  },
  {
    title: "240+ LeetCode Problems",
    description:
      "Practiced data structures, algorithms and problem-solving through consistent coding challenges.",
    category: "Problem Solving",
    icon: FaCode,
    highlight: "240+",
  },
  {
    title: "Programming in Java – NPTEL",
    description:
      "Achieved Elite Gold certification with a score of 95%, placing in the Top 5%.",
    category: "Academic",
    icon: FaJava,
    highlight: "95% • Elite Gold",
  },
  {
    title: "Cybersecurity and Privacy – NPTEL",
    description:
      "Completed the NPTEL certification, developing knowledge of cybersecurity principles and privacy protection.",
    category: "Certification",
    icon: FaShieldAlt,
    highlight: "79%",
  },
  {
    title: "Technical Certifications",
    description:
      "Completed Python and Java Foundation certifications and technical learning programs, including Microsoft Azure Cloud Computing.",
    category: "Technical",
    icon: FaCertificate,
    highlight: "Python • Java • Azure",
  },
  {
    title: "Hack Synapse 2026 – Team Lead",
    description:
      "Led Team SMIS during Hack Synapse 2026, working on Trust Wipe as a team-based technology project.",
    category: "Leadership",
    icon: FaUsers,
    highlight: "Team SMIS",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Milestones & Recognition
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My <span className="text-purple-400">Achievements</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            A collection of academic milestones, technical accomplishments,
            professional experiences and leadership contributions.
          </p>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
                whileHover={{ y: -7 }}
                className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-7 transition-colors duration-300 hover:border-purple-500/50 hover:bg-slate-900"
              >
                {/* Icon and category */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-2xl text-purple-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon aria-hidden="true" />
                  </div>

                  <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-400">
                    {item.category}
                  </span>
                </div>

                {/* Achievement details */}
                <h3 className="mb-3 text-xl font-semibold leading-snug text-white transition-colors group-hover:text-purple-300">
                  {item.title}
                </h3>

                <p className="flex-grow text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                {/* Highlight */}
                {item.highlight && (
                  <div className="mt-6 border-t border-slate-800 pt-5">
                    <span className="text-sm font-semibold tracking-wide text-purple-400">
                      {item.highlight}
                    </span>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
