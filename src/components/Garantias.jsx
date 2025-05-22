import React from "react";
import garantia from "../assets/garantia.jpg";

export default function Garantias() {
  return (
    <section className="bg-white text-black py-20 px-4 text-center font-zabal" id="garantias">
      <h2 className="text-4xl font-black italic uppercase mb-10 text-yellow-500">
        Nuestras Garantías
      </h2>

      <p className="max-w-2xl mx-auto text-lg font-medium text-gray-700 mb-12">
        En <strong>Multisuspensiones del Norte</strong> respaldamos cada producto que ofrecemos. 
        Compra con seguridad gracias a nuestras políticas claras de garantía y devolución.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl mx-auto mb-16">
        <div className="bg-yellow-400 text-black rounded-xl p-6 shadow-md w-72">
          <h3 className="text-2xl font-bold italic mb-2">Hasta 5 años</h3>
          <p className="text-lg">de garantía en amortiguadores</p>
        </div>

        <div className="bg-yellow-400 text-black rounded-xl p-6 shadow-md w-72">
          <h3 className="text-2xl font-bold italic mb-2">1 año</h3>
          <p className="text-lg">en suspensión y dirección</p>
        </div>

        <img
          src={garantia}
          alt="Certificado de garantía"
          className="w-40 md:w-52 rounded border border-black"
        />
      </div>

      <div className="bg-gray-100 text-left max-w-4xl mx-auto p-6 rounded-xl shadow">
        <h3 className="text-2xl font-bold italic text-yellow-600 mb-4">
          Políticas de Cambios y Devoluciones
        </h3>
        <ul className="list-disc list-inside text-base text-gray-800 space-y-2">
          <li>
            Dispones de <strong>90 días</strong> desde la fecha de compra para solicitar cambios o devoluciones.
          </li>
          <li>
            Debes presentar: comprobante de compra, refacción en su empaque original, formato de devolución y una identificación oficial.
          </li>
          <li>
            Devoluciones realizadas el mismo día deben gestionarse entre las 12:00 p.m. y 5:00 p.m.
          </li>
          <li>
            Los reembolsos pueden tardar hasta <strong>5 días hábiles</strong> según el método de pago.
          </li>
          <li>
            Todos los documentos deben coincidir con la persona que realizó la compra.
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-600 italic">
          *Aplican restricciones. Consulta a tu asesor para más información.
        </p>
      </div>
    </section>
  );
}
