import React from "react";
import qr from "../assets/qr-whatsapp.png"; // Asegúrate de tener esta imagen

const numeros = [
  "663 211 6684",
  "664 348 9665",
  "664 316 5404",
  "Sucursal: 977.6511",
];

export default function WhatsApp() {
  return (
    <section className="bg-amarillo text-black py-16 px-4 text-center">
      <h2 className="text-3xl font-bold uppercase mb-6">Cotiza por WhatsApp</h2>
      <p className="text-lg mb-6">¡Atención personalizada, fácil y rápida!</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <ul className="text-lg space-y-2">
          {numeros.map((tel, idx) => (
            <li key={idx}>
              <a
                href={`https://wa.me/52${tel.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {tel}
              </a>
            </li>
          ))}
        </ul>
        <img src={qr} alt="Escanea el QR" className="w-40 h-40" />
      </div>
    </section>
  );
}
