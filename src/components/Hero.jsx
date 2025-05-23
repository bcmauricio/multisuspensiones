import React from "react";
import portada from "../assets/portada.png";
import logoColor from "../assets/LOGO COLOR.png";

export default function Hero() {
  return (
    <section
      className="relative text-white text-center py-32 px-4 bg-cover bg-center font-zabal"
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
          className="mx-auto h-72 md:h-80 mb-10"
          style={{ maxWidth: "400px" }}
        />

        <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tight text-yellow-400">
          ¡Expertos{" "}
          <span className="bg-yellow-400 text-black px-3 not-italic">EN</span>{" "}
          <span className="italic text-white text-[1.1em]">
            SUSPENSIÓN!
          </span>
        </h1>


        <a
          href="https://tutienda.com"
          target="_blank"
          className="inline-block mt-6 bg-yellow-400 text-black font-bold italic px-8 py-4 rounded shadow hover:bg-yellow-300 transition font-zabal text-lg tracking-wide"
        >
          Ir a la tienda en linea
        </a>

        
      </div>
    </section>
  );
}
