"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6 z-[9999]
        w-12 h-12
        flex items-center justify-center
        rounded-full
        bg-purple-600
        text-white
        shadow-[0_0_20px_rgba(168,85,247,0.6)]
        hover:bg-purple-700
        hover:scale-110
        transition-all duration-300
      "
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}