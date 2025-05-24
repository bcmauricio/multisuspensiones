import React from "react";
import banner from "../assets/servicio-domicilio.png";

const Delivery = () => {
  return (
    <section className="bg-yellow-400 py-14 font-zabal">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
        <img
          src={banner}
          alt="Servicio a domicilio gratis"
          className="w-4/5 md:w-[45%] lg:w-[50%] rounded-xl"
        />
        <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-xl">
          <h2 className="text-4xl md:text-5xl font-black italic mb-4">
            <span className="text-black">¡SERVICIO A</span>{" "}
            <span className="text-white">DOMICILIO</span>{" "}
            <span className="text-black">GRATIS!</span>
            <span className="text-black text-xl font-normal">*</span>
          </h2>
          <p className="text-black text-base md:text-lg mb-2">
            Recibe tus refacciones sin costo hasta la puerta de tu casa o taller.
          </p>
          <p className="text-black italic font-bold mb-2">
            ¡Rápido, fácil y seguro!
          </p>
          <p className="text-black text-sm italic">*Aplica solo en la ciudad de Tijuana</p>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
