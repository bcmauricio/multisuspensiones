import React, { useState, useEffect } from "react";

// Tu URL de Google Sheets publicada como CSV
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjG1zgjyp9PRqCQpY-6RIyK1G_7p1uUHaIWrRr35DNNdPYqvVKrChRkXbPK1NlKQSQyizRSUVZaF6l/pub?output=csv";

// Función básica para convertir CSV a JSON
function csvToJson(csv) {
  const lines = csv.split("\n").filter(Boolean);
  const headers = lines[0].split(",").map(h => h.trim().replace(/(^"|"$)/g, ""));
  return lines.slice(1).map(line => {
    const values = line.split(",").map(val => val.trim().replace(/(^"|"$)/g, ""));
    const obj = {};
    headers.forEach((header, i) => (obj[header] = values[i] || ""));
    return obj;
  });
}

export default function FacebookFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCSV() {
      try {
        const response = await fetch(SHEET_CSV_URL);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const csv = await response.text();
        const data = csvToJson(csv);
        setPosts(data.slice(0, 4)); // Solo los primeros 4
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCSV();
  }, []);

  return (
    <section
      className="bg-yellow-400 py-20 px-4 text-center font-zabal"
      id="facebook"
    >
      <h2 className="text-4xl font-black italic uppercase text-black mb-10">
        Últimos Posts
      </h2>
      {loading && <p className="text-black text-lg">Cargando publicaciones...</p>}
      {error && <p className="text-red-700 text-lg">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl shadow hover:scale-105 transition-transform duration-300 bg-white"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.message ? post.message.slice(0, 80) : "Facebook post"}
                  className="w-full h-80 object-cover rounded-t-xl"
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = "/no-image.png"; // imagen por default si falla
                  }}
                />

              )}
              <div className="p-3">
                <p className="text-sm text-left text-black font-medium">
                  {post.message}
                </p>
              </div>
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
