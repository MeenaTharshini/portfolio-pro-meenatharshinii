"use client";
import { motion } from "framer-motion";
import {
  FaSchool,
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaAward,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";

function Timeline() {
  const timelineData = [
  {
    year: "2024 - Present",
    title: "B.E Computer Science Engineering",
    description:
      "Pursuing Computer Science Engineering with CGPA above 9.0 and focus on software development.",
    icon: <FaGraduationCap />,
  },
  {
    year: "2025",
    title: "Full Stack Development",
    description:
      "Built expertise in React, Node.js, MongoDB, Flask, REST APIs, and deployment.",
    icon: <FaLaptopCode />,
  },
  {
    year: "2025",
    title: "Competitive Programming",
    description:
      "Solved 168+ LeetCode problems while strengthening DSA fundamentals.",
    icon: <FaRocket />,
  },
  {
    year: "2025",
    title: "NPTEL Java Certification",
    description:
      "Achieved 95% score with strong understanding of Java and OOP concepts.",
    icon: <FaAward />,
  },
  {
    year: "2025",
    title: "Advorix Technologies",
    description:
      "Recognized as Best Performer Intern for development contribution and teamwork.",
    icon: <FaBriefcase />,
  },
  {
    year: "2025",
    title: "Infosys Virtual Internship",
    description:
      "Selected for Infosys Springboard Virtual Internship Program 7.0.",
    icon: <FaBriefcase />,
  },
];

  return (
    <section id="timeline" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Career & <span className="text-purple-500">Growth</span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            A structured view of my academic progress, skills development, and professional experience.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[3px] bg-purple-500/20 -translate-x-1/2" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-14 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >

              {/* Card */}
              <div className="w-full md:w-1/2 px-4">
                <div className="
                  bg-[#151B2E]
                  border border-purple-500/10
                  rounded-3xl
                  p-7
                  transition-all duration-300
                  hover:border-purple-500/40
                  hover:shadow-[0_0_25px_rgba(168,85,247,0.12)]
                ">

                  <div className="flex items-center gap-4 mb-4">

                    <div className="
                      w-12 h-12
                      rounded-xl
                      bg-purple-500/10
                      flex items-center justify-center
                      text-purple-400 text-xl
                    ">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-purple-400 text-sm">
                        {item.year}
                      </p>

                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>

                  </div>

                  <p className="text-slate-400 leading-7 text-sm">
                    {item.description}
                  </p>

                </div>
              </div>

              {/* Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900 shadow-lg shadow-purple-500/40" />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Timeline;