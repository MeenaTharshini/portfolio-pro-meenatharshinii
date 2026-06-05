"use client";

import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const links = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:meenatharshiniiyappan@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Call",
      href: "tel:+916374093373",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/MeenaTharshini",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/meenatharshini-i-410343301/",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let’s <span className="text-purple-500">Connect</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Open to internships, freelance opportunities, and software engineering roles.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

          {links.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={
                item.label === "GitHub" || item.label === "LinkedIn"
                  ? "_blank"
                  : undefined
              }
              rel={
                item.label === "GitHub" || item.label === "LinkedIn"
                  ? "noreferrer"
                  : undefined
              }
              className="bg-[#151B2E] border border-purple-500/10 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 text-slate-300 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:text-white"
            >
              <div className="text-2xl text-purple-400">
                {item.icon}
              </div>

              <p className="text-sm font-medium">
                {item.label}
              </p>
            </a>
          ))}

        </div>

        {/* Contact Info */}
        <div className="mt-14 text-center text-slate-400 text-sm space-y-2">
          <p className="hover:text-purple-400 transition">
             meenatharshiniiyappan@gmail.com
          </p>
          <p className="hover:text-purple-400 transition">
             +91 63740 93373
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;