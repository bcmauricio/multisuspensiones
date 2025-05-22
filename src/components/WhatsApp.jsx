import React from "react";
import qr from "../assets/qr-whatsapp.png"; // Asegúrate de tener esta imagen

const numeros = [
  { label: "663 211 6684", link: "526632116684" },
  { label: "664 348 9665", link: "526643489665" },
  { label: "664 316 5404", link: "526643165404" },
  { label: "Sucursal: 977.6511", link: null },
];

export default function WhatsApp() {
  return (
    <section className="bg-amarillo text-black py-20 px-6 text-center font-zabal">
      <h2 className="text-4xl font-black italic uppercase mb-4">
        Cotiza por WhatsApp
      </h2>
      <p className="text-lg font-medium mb-10">
        ¡Atención personalizada, fácil y rápida!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div>
          <ul className="space-y-4 text-lg">
            {numeros.map((item, idx) => (
              <li key={idx}>
                {item.link ? (
                  <a
                    href={`https://wa.me/${item.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-white text-black font-bold rounded shadow hover:bg-gray-100 transition"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <img
            src={qr}
            alt="Escanea el QR"
            className="w-44 h-44 md:w-52 md:h-52 rounded-xl border-4 border-black"
          />
          <p className="text-sm mt-2 italic">Escanéalo con tu cámara</p>
        </div>
      </div>
    </section>
  );
}
