"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

const resume = "/assets/resume.pdf";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Journey", id: "timeline" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-4 left-0 w-full z-50 px-4">
      <div className="max-w-7xl mx-auto relative">

        {/* Navbar */}
        <div className="bg-[#111827]/80 backdrop-blur-xl border border-purple-500/10 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer"
            >
              <h1 className="text-2xl font-bold text-white">
                MTI<span className="text-purple-500">.</span>
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-2 bg-slate-900/50 border border-white/5 rounded-full p-1.5">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="px-5 py-2 text-sm text-slate-300 hover:text-white hover:bg-purple-500/10 rounded-full cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">

              <a
                href={resume}
                target="_blank"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm hover:scale-105 transition"
              >
                Resume <FiDownload />
              </a>

              {/* Mobile Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-white text-2xl"
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>

            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 bg-[#111827]/95 backdrop-blur-xl border border-purple-500/10 rounded-3xl p-6">
            <div className="flex flex-col gap-5">

              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-purple-400 text-lg cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}

              <a
                href={resume}
                target="_blank"
                className="mt-2 w-fit flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white"
              >
                Resume <FiDownload />
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}