import React from "react";

export default function Hero() {
  return (
    <section className="bg-amarillo text-black text-center py-24 px-4 relative overflow-hidden">
      <img
        src="/logo-ms.png"
        alt="Multisuspensiones del Norte"
        className="mx-auto h-28 mb-6"
      />
      <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">
        <span className="text-black">¡</span>
        <span className="text-black">Expertos </span>
        <span className="text-white bg-black px-2">en</span>{" "}
        <span className="text-black">Suspensión!</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto">
        Especialistas en suspensión y dirección automotriz
      </p>
      <a
        href="#about"
        className="inline-block mt-8 bg-white text-black font-bold text-lg px-8 py-3 transform -skew-x-12 hover:scale-105 transition"
      >
        VER MÁS
      </a>
    </section>
  );
}
