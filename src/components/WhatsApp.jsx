import React from "react";
import asesor from "../assets/COTIZA.png";
import qr from "../assets/qr-whatsapp.png";

const WhatsApp = () => {
  return (
    <section className="bg-yellow-400 text-black py-10 font-zabal">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-black italic mb-1">
          COTIZA POR WHATSAPP
        </h2>
        <p className="mb-6 text-sm md:text-base">
          ¡Atención personalizada, fácil y rápida!
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <img
            src={asesor}
            alt="asesor whatsapp"
            className="w-40 md:w-48 lg:w-56 object-contain"
          />

          <div className="flex flex-col items-center gap-3">
            <a
              href="https://wa.me/526632116884"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-bold py-2 px-6 rounded shadow hover:bg-gray-200 transition"
            >
              663 211 6684
            </a>
            <a
              href="https://wa.me/526643489665"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-bold py-2 px-6 rounded shadow hover:bg-gray-200 transition"
            >
              664 348 9665
            </a>
            <a
              href="https://wa.me/526643165404"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-bold py-2 px-6 rounded shadow hover:bg-gray-200 transition"
            >
              664 316 5404
            </a>
            <p className="text-sm">Sucursal: 664 977 6511</p>
          </div>

          <div className="text-center">
            <img
              src={qr}
              alt="QR WhatsApp"
              className="w-32 md:w-36 lg:w-40 object-contain"
            />
            <p className="italic text-sm mt-1">Escanéalo con tu cámara</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsApp;
