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
          className="mx-auto h-60 md:h-72 mb-10"
          style={{ maxWidth: "400px" }}
        />

        <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tight text-yellow-400">
          ¡Expertos{" "}
          <span className="bg-yellow-400 text-black px-3 not-italic">EN</span>{" "}
          <span className="italic text-yellow-400 text-[1.25em]">
            SUSPENSIÓN!
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto text-white font-medium">
          Especialistas en suspensión y dirección automotriz
        </p>

        <a
  href="https://tutienda.com"
  target="_blank"
  className="inline-block mt-6 bg-yellow-400 text-black font-bold italic px-6 py-3 rounded shadow hover:bg-yellow-300 transition font-zabal"
>
  Ir a la tienda
</a>

        
      </div>
    </section>
  );
}
