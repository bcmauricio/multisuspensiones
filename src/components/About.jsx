import React from "react";

export default function About() {
  return (
    <section className="bg-white text-black py-20 px-6 text-center" id="about">
      <h2 className="text-4xl font-extrabold uppercase mb-6">¿Quiénes somos?</h2>
      
      <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-10">
        En <strong>Multisuspensiones del Norte</strong> somos una empresa orgullosamente bajacaliforniana que busca 
        posicionarse como referente en el mercado automotriz. Nos distinguimos por ofrecer refacciones 
        automotrices de alta calidad y un servicio excepcional, siempre acompañados de la calidez de nuestros 
        asesores y el compromiso con nuestros clientes.
      </p>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-left">
        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">Misión</h3>
          <p>
            Distribuir refacciones de la mejor calidad en desempeño y fabricación para cualquier vehículo en México, 
            a través de un servicio ágil, cordial y eficiente brindado por nuestros asociados.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">Visión</h3>
          <p>
            Ser reconocidos como el líder distribuidor de partes de suspensión automotriz en Baja California.
          </p>
        </div>
      </div>
    </section>
  );
}
