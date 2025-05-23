import React from "react";
import qr from "../assets/qr-whatsapp.png";
import cotiza from "../assets/COTIZA.png";

export default function WhatsApp() {
  return (
    <section className="bg-yellow-400 py-20 px-4 text-center font-zabal" id="whatsapp">
      <h2 className="text-4xl font-black italic uppercase text-black mb-4">
        Cotiza por WhatsApp
      </h2>
      <p className="text-lg mb-10 text-black">
        ¡Atención personalizada, fácil y rápida!
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={cotiza}
            alt="Asesor"
            className="w-32 md:w-40 lg:w-48 object-contain"
          />
        </div>

        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://wa.me/526632116684"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-bold px-6 py-3 rounded shadow hover:bg-yellow-300 transition"
          >
            663 211 6684
          </a>
          <a
            href="https://wa.me/526643489665"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-bold px-6 py-3 rounded shadow hover:bg-yellow-300 transition"
          >
            664 348 9665
          </a>
          <a
            href="https://wa.me/526643165404"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-bold px-6 py-3 rounded shadow hover:bg-yellow-300 transition"
          >
            664 316 5404
          </a>
          <p className="text-black font-medium">Sucursal: 664 977 6511</p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <img
            src={qr}
            alt="Escanea el QR"
            className="w-44 h-44 md:w-52 md:h-52 rounded-xl border-4 border-black"
          />
          <p className="text-sm italic text-black">Escanéalo con tu cámara</p>
        </div>
      </div>
    </section>
  );
}
