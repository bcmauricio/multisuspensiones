import React, { useEffect, useState } from "react";

export default function FacebookFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://drive.google.com/uc?id=1baUa1AS7Qxuq_vkO2r3RX5wJT9BPW_Zp&export=download")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        setError("Error al cargar el feed.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-yellow-400 py-20 px-4 text-center font-zabal" id="facebook">
      <h2 className="text-4xl font-black italic uppercase text-black mb-10">
        Síguenos en Facebook
      </h2>

      {loading && <p className="text-black text-lg">Cargando publicaciones...</p>}
      {error && <p className="text-red-700 text-lg">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.permalink_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl shadow hover:scale-105 transition-transform duration-300"
            >
              <img
                src={post.full_picture}
                alt={post.message?.slice(0, 80) || "Publicación de Facebook"}
                className="w-full h-60 object-cover"
              />
              {post.message && (
                <p className="text-sm p-2 text-left text-black">{post.message}</p>
              )}
            </a>
          ))}
        </div>
      )}

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
