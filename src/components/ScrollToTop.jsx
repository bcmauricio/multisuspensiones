import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-5 p-3 rounded-full bg-yellow-400 text-black text-xl shadow-lg transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Ir arriba"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
