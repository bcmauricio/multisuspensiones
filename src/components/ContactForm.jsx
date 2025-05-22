import React from "react";

export default function ContactForm() {
  return (
    <section className="py-20 bg-white px-4 text-center font-zabal" id="contact">
      <h2 className="text-4xl font-black italic text-yellow-500 uppercase mb-6">
        Contáctanos
      </h2>
      <p className="max-w-2xl mx-auto text-lg font-medium text-gray-700 mb-10">
        ¿Tienes dudas o necesitas una cotización? ¡Escríbenos y con gusto te atenderemos!
      </p>

      <form className="max-w-xl mx-auto bg-gray-50 p-8 rounded-xl shadow space-y-6 text-left">
        <div>
          <label className="block mb-1 font-semibold">Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Correo electrónico</label>
          <input
            type="email"
            placeholder="tucorreo@ejemplo.com"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Mensaje</label>
          <textarea
            placeholder="¿En qué podemos ayudarte?"
            className="w-full p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-3 font-bold rounded hover:bg-yellow-500 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}
