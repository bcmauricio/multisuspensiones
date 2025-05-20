import React from "react";
import portada from "../assets/portada.png"; // Asegúrate que esté en /assets
import logoColor from "../assets/LOGO COLOR.png";


export default function Hero() {
  return (
    <section
      className="relative text-white text-center py-32 px-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(${portada})`,
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Contenido */}
      <div className="relative z-10">
        <img
          src={logoColor}
          alt="Multisuspensiones del Norte"
          className="mx-auto h-48 md:h-60 mb-8 drop-shadow-2xl"
          style={{ maxWidth: "320px" }} // Esto te asegura control en pantallas grandes
        />
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight">
          <span className="text-yellow-400">¡Expertos </span>
          <span className="bg-white text-black px-2">en</span>{" "}
          <span className="text-yellow-400">Suspensión!</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto text-white">
          Especialistas en suspensión y dirección automotriz
        </p>
        <a
          href="#about"
          className="inline-block mt-8 bg-white text-black font-bold text-lg px-8 py-3 transform -skew-x-12 hover:scale-105 transition"
        >
          VER MÁS
        </a>
      </div>
    </section>
  );
}
