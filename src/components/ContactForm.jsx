import React, { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-black text-white py-20 px-6 font-zabal" id="contact">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-black italic uppercase mb-6 text-white">
          Contáctanos
        </h2>
        <p className="mb-8">¿Tienes dudas? Envíanos un mensaje y te respondemos pronto.</p>

        {sent ? (
          <p className="text-green-400 font-semibold">
            ¡Gracias por tu mensaje! Te contactaremos pronto.
          </p>
        ) : (
          <form
  action="https://formspree.io/f/mblonwda"
  method="POST"
  className="grid gap-4 text-left"
  onSubmit={(e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSent(true);
          form.reset();
        } else {
          alert("Hubo un error al enviar. Intenta más tarde.");
        }
      })
      .catch(() =>
        alert("Error de red. Revisa tu conexión o intenta más tarde.")
      );
  }}
>

            <input
              type="text"
              name="nombre"
              required
              placeholder="Tu nombre"
              className="p-3 rounded bg-white text-black"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Tu correo"
              className="p-3 rounded bg-white text-black"
            />
            <textarea
              name="mensaje"
              required
              placeholder="Escribe tu mensaje..."
              rows="4"
              className="p-3 rounded bg-white text-black"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded transition"
            >
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
