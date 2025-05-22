import React from "react";
import img1 from "../assets/ig1.png";
import img2 from "../assets/ig2.png";
import img3 from "../assets/ig3.png";
import img4 from "../assets/ig4.png";

export default function InstagramFeed() {
  return (
    <section className="bg-gray-100 py-20 px-4 text-center font-zabal">
      <h2 className="text-4xl font-black italic uppercase text-yellow-500 mb-10">
        Síguenos en Instagram
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[img1, img2, img3, img4].map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img}
              alt={`Post ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <p className="mt-10 text-lg">
        <a
          href="https://www.instagram.com/multisuspensiones/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 underline font-medium hover:text-yellow-600 transition"
        >
          Ver más en nuestro perfil →
        </a>
      </p>
    </section>
  );
}
