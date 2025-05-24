import React from "react";
import portada from "../assets/portada.png";
import logoColor from "../assets/LOGO COLOR.png";

export default function Hero() {
  return (
    <section
      className="relative text-white text-center py-32 px-4 bg-cover bg-center font-zabal flex items-center justify-center"
      style={{
        backgroundImage: `url(${portada})`,
        minHeight: "90vh",
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <img
          src={logoColor}
          alt="Multisuspensiones del Norte"
          className="mx-auto h-80 md:h-96 mb-10"
          style={{ maxWidth: "450px" }}
        />

        <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tight text-yellow-400 mb-2">
          ¡Expertos{" "}
          <span className="bg-yellow-400 text-black px-3 not-italic">EN</span>{" "}
          <span className="italic text-white text-[1.1em]">SUSPENSIÓN!</span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-white mb-8">
          Y DIRECCIÓN AUTOMOTRIZ
        </p>

        <a
          href="https://tutienda.com"
          target="_blank"
          className="inline-block mt-4 bg-yellow-400 text-black font-bold italic px-8 py-4 rounded shadow hover:bg-yellow-300 transition text-lg tracking-wide"
        >
          Ir a la tienda en línea
        </a>
      </div>
    </section>
  );
}
