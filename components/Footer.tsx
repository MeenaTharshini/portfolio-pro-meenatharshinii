import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-purple-500/10 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Main Text */}
        <p className="text-slate-300 text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="text-purple-400 font-medium">
            Meena Tharshini I
          </span>
          . All Rights Reserved.
        </p>

        {/* Divider line feel */}
        <div className="w-24 h-px bg-purple-500/20 mx-auto my-4"></div>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm">
          Built with <span className="text-purple-400">React</span> &
          <span className="text-purple-400"> Tailwind CSS</span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;