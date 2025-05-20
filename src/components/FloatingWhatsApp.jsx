import React from "react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/526632116684"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl text-sm font-bold flex items-center gap-2 animate-bounce"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Ícono de WhatsApp en SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 448 512"
        fill="currentColor"
      >
        <path d="M380.9 97.1C339-15.4 210.6-33.9 109.3 24.1 4.6 83.6-30.2 210.4 26.2 310.8L1.6 447.6c-3.4 19.4 13.2 35.6 32.6 32.6l136.9-24.5c100.7 56.5 228.5 21.9 288-82.9 58-104.4 24.2-232.3-78.2-290.3zM222.2 395.8c-30.5 0-60.1-8.9-85.3-25.7l-6.1-4-81.3 14.5 14.6-79.2-4.1-6.5c-31.2-50-29.3-113.9 4.8-162.1 34.1-48.2 91.4-73.6 148.8-66.1 57.6 7.6 107.4 44.4 128.4 98.2 21 53.8 8.3 115.4-32.1 157.5-29.4 30-69.1 47.3-111.6 47.3z" />
      </svg>
      WhatsApp
    </a>
  );
}
