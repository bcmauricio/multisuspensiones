import React from "react";

export default function Testimonials() {
  const testimonios = [
    {
      texto: "Excelente servicio, muy buena atención.",
      autor: "Juan Pérez",
    },
    {
      texto: "Las refacciones llegaron rápido y todo bien.",
      autor: "Ana Gómez",
    },
    {
      texto: "Buen surtido, buen precio y garantía clara.",
      autor: "Luis Ramírez",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 font-zabal" id="testimonios">
      <h2 className="text-4xl font-black italic text-yellow-500 text-center uppercase mb-12">
        Testimonios de Clientes
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonios.map((item, idx) => (
          <blockquote
            key={idx}
            className="bg-gray-100 p-6 rounded-xl shadow-md text-gray-800 text-left"
          >
            <p className="italic text-lg mb-4">“{item.texto}”</p>
            <footer className="text-right text-sm font-medium">
              – {item.autor}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
