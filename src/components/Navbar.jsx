import React from "react";
import isologo from "../assets/ISOLOGO-MS-COLOR.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-amarillo z-50 shadow-md py-3 px-6 flex justify-between items-center">
     <img
        src={isologo}
        alt="MS Isologo"
        className="h-12 md:h-14"
      />
      <ul className="flex gap-4 md:gap-6 text-sm md:text-base font-bold text-black uppercase">
        <li><a href="#about" className="hover:underline">Nosotros</a></li>
        <li><a href="#catalog" className="hover:underline">Catálogo</a></li>
        <li><a href="#sucursal" className="hover:underline">Sucursal</a></li>
        <li><a href="#contact" className="hover:underline">Contacto</a></li>
      </ul>
    </nav>
  );
}
