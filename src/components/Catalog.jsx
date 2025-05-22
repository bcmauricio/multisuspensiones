import React from "react";
import amortiguadores from "../assets/amortiguadores.jpg";
import direccion from "../assets/direccion.jpg";
import suspension from "../assets/suspension.jpg";
import soportes from "../assets/soportes.jpg";

const productos = [
  {
    nombre: "Amortiguadores",
    imagen: amortiguadores,
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

export default function Catalog() {
  return (
    <section className="bg-white text-black py-20 px-6 text-center font-zabal" id="catalog">
      <h2 className="text-4xl font-black italic uppercase mb-12 text-yellow-500 tracking-wide">
        Catálogo de Refacciones
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {productos.map((producto, idx) => (
          <div
            key={idx}
            className="bg-gray-100 shadow-md rounded-xl overflow-hidden transform hover:scale-105 transition"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold italic text-gray-800">
                {producto.nombre}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
