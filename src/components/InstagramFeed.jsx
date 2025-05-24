import React from "react";

export default function FacebookFeed() {
  const posts = [
    {
      full_picture: "https://via.placeholder.com/400x300?text=Post+1",
      permalink_url: "https://facebook.com/post1",
      message: "Conoce nuestras promociones del mes en suspensión."
    },
    {
      full_picture: "https://via.placeholder.com/400x300?text=Post+2",
      permalink_url: "https://facebook.com/post2",
      message: "¡Servicio a domicilio sin costo en Tijuana!"
    },
    {
      full_picture: "https://via.placeholder.com/400x300?text=Post+3",
      permalink_url: "https://facebook.com/post3",
      message: "Nuevas marcas de amortiguadores ya disponibles."
    },
    {
      full_picture: "https://via.placeholder.com/400x300?text=Post+4",
      permalink_url: "https://facebook.com/post4",
      message: "Agradecemos a todos nuestros clientes por su preferencia."
    }
  ];

  return (
    <section className="bg-yellow-400 py-20 px-4 text-center font-zabal" id="facebook">
      <h2 className="text-4xl font-black italic uppercase text-black mb-10">
        Síguenos en Facebook
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.permalink_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-xl shadow hover:scale-105 transition-transform duration-300"
          >
            <img
              src={post.full_picture}
              alt={post.message.slice(0, 80)}
              className="w-full h-60 object-cover"
            />
            <p className="text-sm p-2 text-left text-black">
              {post.message}
            </p>
          </a>
        ))}
      </div>

      <p className="mt-10 text-lg text-black">
        <a
          href="https://www.facebook.com/Multisuspensiones"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium hover:text-yellow-700 transition"
        >
          Ver más en nuestro Facebook →
        </a>
      </p>
    </section>
  );
}
