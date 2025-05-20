import React, { useState } from "react";
import isologo from "../assets/ISOLOGO-MS-COLOR.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-amarillo z-50 shadow-md py-3 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img
          src={isologo}
          alt="MS Isologo"
          className="h-12 md:h-14"
        />

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-black focus:outline-none"
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

        {/* Menú */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-amarillo text-center text-sm font-bold uppercase md:static md:flex md:items-center md:gap-6 md:w-auto md:bg-transparent md:text-left`}
        >
          <li className="p-3 md:p-0"><a href="#about" className="hover:underline">Nosotros</a></li>
          <li className="p-3 md:p-0"><a href="#catalog" className="hover:underline">Catálogo</a></li>
          <li className="p-3 md:p-0"><a href="#sucursal" className="hover:underline">Sucursal</a></li>
          <li className="p-3 md:p-0"><a href="#contact" className="hover:underline">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
