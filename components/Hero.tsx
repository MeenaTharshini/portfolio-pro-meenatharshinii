"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

const minu = "/assets/minu.jpeg";
const resume = "/assets/resume.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 md:pt-32 px-6 md:px-10 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-5">
            Meena
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">
              Tharshini I
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-slate-300 mt-8 h-10">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "AI Application Builder",
                2000,
                "Problem Solver",
                2000,
                "Founder @SMIS Studio",
                2000,
              ]}
              speed={60}
              repeat={Infinity}
            />
          </div>

          <p className="text-purple-400 uppercase tracking-widest text-sm mt-2">
            • Open to Internships & Opportunities
          </p>

          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
            Computer Science Engineering student building scalable web applications,
            AI-powered solutions, and practical software products.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 px-7 py-3 rounded-xl flex items-center gap-3 transition"
            >
              View Projects <FaArrowRight />
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-xl border border-purple-500/30 hover:bg-purple-500/10 transition"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 text-2xl">
            <a href="https://github.com/" className="hover:text-purple-400">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/" className="hover:text-purple-400">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 w-[380px] h-[380px] md:w-[520px] md:h-[520px] bg-purple-500/20 rounded-full blur-3xl" />

            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              src={minu}
              alt="Meena"
              className="relative z-10 w-80 h-80 md:w-[420px] md:h-[420px] object-cover rounded-full border border-purple-500/40 shadow-lg"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}