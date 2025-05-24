import React from "react";

export default function About() {
  return (
    <section className="bg-white text-black py-20 px-6 text-center font-zabal" id="about">
      <h2 className="text-4xl font-black italic uppercase mb-6 text-black">
        ¿Quiénes somos?
      </h2>

      <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-12 font-medium text-gray-800 text-justify">
        En <strong>Multisuspensiones del Norte</strong>, nos especializamos en refacciones para suspensión y dirección automotriz. <br />
        Con más de 5 años de experiencia, ayudamos a que tu vehículo mantenga su máximo rendimiento con piezas de calidad. <br />
        Precios competitivos y atención al cliente que realmente marca la diferencia. <br />
        Ubicados en Tijuana, somos tu refaccionaria de confianza.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 text-left">
        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold italic mb-3 text-black">Misión</h3>
          <p className="text-base text-gray-700 leading-relaxed">
            Brindar refacciones de suspensión y dirección automotriz de la más alta calidad
            para todo tipo de vehículo en México, mediante un servicio ágil, cordial y eficiente,
            respaldado por un equipo comprometido con la satisfacción del cliente.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold italic mb-3 text-black">Visión</h3>
          <p className="text-base text-gray-700 leading-relaxed">
            Consolidarnos como la refaccionaria líder en Baja California,
            reconocida por su excelencia en la distribución de partes de suspensión y dirección automotriz,
            así como por su atención personalizada y compromiso con la calidad.
          </p>
        </div>
      </div>
    </section>
  );
}
