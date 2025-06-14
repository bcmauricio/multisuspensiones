import React from "react";

export default function Testimonials() {
  const testimonios = [
    {
      texto: "Excelentes precios y buena atención.",
      autor: "Ruben Hernandez",
    },
    {
      texto: "Muy Grata experiencia, pacientes e incluso te orientan con las piezas que pudieras estar buscando y su plus servicio a domicilio.",
      autor: "Dianna Diaz",
    },
    {
      texto: "Excelente atencion por Whatsapp, respuesta muy rapida, entrega a domicilio en menos de 2 hrs.",
      autor: "Carlo Ficacci",
    },
    {
      texto: "Muy buen servicio, la verdad me atendieron muy bien, el envio a domicilio sin problemas.",
      autor: "Juan Garcia",
    },
     {
      texto: "Buen lugar para encontrar refacciones, excelente atencion.",
      autor: "Kenya Del Real",
    },
    {
      texto: "Eficientes y muy responsables buena calidad.",
      autor: "Adiel Maldonado",
    },
    {
      texto: "Excelente atencion y muy buenos precios recomendado 100%.",
      autor: "Rene Hernandez",
    },
    {
      texto: "Excelente trato, estacionamiento y buen trato.",
      autor: "Nestor Daniel Castro Flores",
    },
    {
      texto: "Buena variedad y calidad, incluso modelos viejos.",
      autor: "Juan Carlos Roman",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 font-zabal" id="testimonios">
      <h2 className="text-4xl font-black italic text-black text-center uppercase mb-12">
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
