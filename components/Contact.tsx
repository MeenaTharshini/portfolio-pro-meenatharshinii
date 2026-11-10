
"use client";

import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const links = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/MeenaTharshini",
      external: true,
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/meena-tharshini-i-410343301/",
      external: true,
    },
    {
      icon: <SiLeetcode />,
      label: "LeetCode",
      href: "https://leetcode.com/u/MeenaTharshiniI/",
      external: true,
    },
    {
      icon: <FaPhoneAlt />,
      label: "Call",
      href: "tel:+916374093373",
      external: false,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <div className="bg-[#151B2E] border border-purple-500/20 rounded-2xl p-6 md:p-10">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            {/* Left Content */}
            <div className="max-w-md">
              <p className="text-purple-400 uppercase tracking-[0.2em] text-xs font-semibold">
                Get in Touch
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Let's <span className="text-purple-400">Connect.</span>
              </h2>

              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Have an idea, opportunity, or project in mind?
                I'd love to connect and explore possibilities.
              </p>

              <a
                href="mailto:meenatharshiniiyappan@gmail.com"
                className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-all duration-300"
              >
                <FaEnvelope />
                Send an Email
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>

            {/* Right Contact Links */}
            <div className="flex flex-col gap-3 w-full md:max-w-[250px]">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  className="group flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/70 border border-slate-700 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <span className="flex items-center gap-3 text-slate-300 group-hover:text-white text-sm font-medium">
                    <span className="text-purple-400 text-lg">
                      {item.icon}
                    </span>
                    {item.label}
                  </span>

                  {item.external && (
                    <FaExternalLinkAlt className="text-xs text-slate-500 group-hover:text-purple-400 transition" />
                  )}
                </a>
              ))}
            </div>

          </div>

          {/* Footer */}
          <div className="border-t border-slate-700/70 mt-8 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Meena Tharshini. All rights reserved.
            </p>
            <p className="tracking-widest uppercase">
              Designed & Built with Purpose
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
