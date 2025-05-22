import React from "react";
import banner from "../assets/servicio-domicilio.jpg";

const Delivery = () => {
  return (
    <section className="bg-yellow-400 py-10 font-zabal">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6">
        <img
          src={banner}
          alt="Servicio a domicilio gratis"
          className="w-full md:w-1/2 rounded-xl"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black italic text-black">
            ¡Servicio a domicilio GRATIS!
          </h2>
          <p className="text-black mt-3 text-lg font-medium">
            Recibe tus refacciones el mismo día <span className="text-sm">*</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
