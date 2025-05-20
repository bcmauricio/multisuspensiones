import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonios de Clientes</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <blockquote className="bg-gray-100 p-4 rounded shadow">
          <p className="italic">"Excelente servicio, muy buena atención."</p>
          <footer className="text-right mt-2">– Juan Pérez</footer>
        </blockquote>
        <blockquote className="bg-gray-100 p-4 rounded shadow">
          <p className="italic">"Las refacciones llegaron rápido y todo bien."</p>
          <footer className="text-right mt-2">– Ana Gómez</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;