"use client";

import React from "react";
import {
  FaTrophy,
  FaAward,
  FaCode,
  FaLightbulb,
  FaJava,
} from "react-icons/fa";

const achievements = [
  {
    title: "Best Performer Intern",
    desc: "Recognized for outstanding performance and contribution at Advorix Technologies.",
    icon: <FaTrophy />,
  },
  {
    title: "Infosys Virtual Internship 7.0",
    desc: "Selected for a 6-month internship program under Infosys Springboard.",
    icon: <FaAward />,
  },
  {
    title: "168+ LeetCode Problems",
    desc: "Solved 168+ coding challenges with strong problem-solving skills.",
    icon: <FaCode />,
  },
  {
    title: "NPTEL Java - 95%",
    desc: "Achieved outstanding performance in Programming in Java course.",
    icon: <FaJava />,
  },
  {
    title: "Infosys Certifications",
    desc: "Completed Python Foundation and multiple technical certifications.",
    icon: <FaCode />,
  },
  {
    title: "Hackathon Participation",
    desc: "Participated in Smart India Hackathon selection and problem-solving events.",
    icon: <FaLightbulb />,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            Accomplishments
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="text-purple-500">Achievements</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Academic, technical, and professional milestones that define my journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-[#151B2E] border border-purple-500/10 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
            >

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl mb-6 transition-transform duration-300 hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-7">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}