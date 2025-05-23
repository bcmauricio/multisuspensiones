import React from "react";
import banner from "../assets/servicio-domicilio.png";

const Delivery = () => {
  return (
    <section className="bg-yellow-400 py-10 font-zabal">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
        <img
          src={banner}
          alt="Servicio a domicilio gratis"
          className="w-4/5 md:w-[35%] rounded-xl"
        />
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-5xl font-black italic text-black mb-2">
            ¡Servicio a domicilio GRATIS!
          </h2>
          <p className="text-black mt-1 text-lg md:text-xl font-medium leading-relaxed text-center md:text-left">
            Recibe tus refacciones el mismo día <span className="text-sm">*</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Delivery;
