import React from "react";
import amortiguadores from "../assets/Amortiguadores.png";
import direccion from "../assets/direccion.png";
import suspension from "../assets/suspension.png";
import soportes from "../assets/soportes.png";
import Cremalleras from "../assets/Cremalleras.png";
import frenos from "../assets/frenos.png";
import Flechas from "../assets/Flechas.png";
import Resortes from "../assets/Resortes.png";


const productos = [
  {
    nombre: "Amortiguadores",
    imagen: amortiguadores,
  },
  {
    nombre: "Cremalleras",
    imagen: Cremalleras,
  },
  {
    nombre: "Discos-y-frenos",
    imagen: frenos,
  },
  {
    nombre: "Flechas",
    imagen: Flechas,
  },
  {
    nombre: "Resortes",
    imagen: Resortes,
  },
  {
    nombre: "Partes de Dirección",
    imagen: direccion,
  },
  {
    nombre: "Partes de Suspensión",
    imagen: suspension,
  },
  {
    nombre: "Soportes",
    imagen: soportes,
  },
];

const Catalog = () => {
  return (
    <section className="bg-black text-white py-20 px-4" id="catalog">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-black italic uppercase mb-12 text-yellow-400 tracking-wide">
          Catálogo de Refacciones
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productos.map((producto, index) => (
            <div
              key={index}
              className="bg-white text-black p-4 rounded-xl shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-48 object-contain bg-white mb-4"
              />
              <h3 className="text-lg font-semibold italic text-center">{producto.nombre}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
