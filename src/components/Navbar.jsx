import React, { useState } from "react";
import isologo from "../assets/LOGO COLOR.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-amarillo z-50 py-3 px-6 shadow-md font-zabal">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo a la izquierda */}
        <div className="flex items-center">
         <img
            src={isologo}
            alt="Logo MS"
            className="h-24 md:h-28 object-contain max-w-[280px]"
          />

        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-black focus:outline-none ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Menú a la derecha */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-amarillo text-center text-sm md:static md:flex md:items-center md:gap-6 md:w-auto md:bg-transparent ml-auto`}
        >
          <li className="p-3 md:p-0">
            <a
              href="#about"
              className="text-black font-medium italic tracking-wide hover:text-white transition"
            >
              Nosotros
            </a>
          </li>
           <li className="p-3 md:p-0">
            <a
              href="#marcas"
              className="text-black font-medium italic tracking-wide hover:text-white transition"
            >
              Marcas
            </a>
          </li>
          <li className="p-3 md:p-0">
            <a
              href="#catalog"
              className="text-black font-medium italic tracking-wide hover:text-white transition"
            >
              Catálogo
            </a>
          </li>
          <li className="p-3 md:p-0">
            <a
              href="#cotiza"
              className="text-black font-medium italic tracking-wide hover:text-white transition"
            >
              Cotiza
            </a>
          </li>
          <li className="p-3 md:p-0">
            <a
              href="#contact"
              className="text-black font-medium italic tracking-wide hover:text-white transition"
            >
              Contacto
            </a>
          </li>
          <li className="p-3 md:p-0">
            <a
              href="https://tutienda.com"
              target="_blank"
              className="text-black font-medium italic tracking-wide hover:text-white transition"
            >
              Tienda
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
