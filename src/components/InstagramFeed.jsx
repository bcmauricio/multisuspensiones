import React from "react";
import img1 from "../assets/ig1.png";
import img2 from "../assets/ig2.png";
import img3 from "../assets/ig3.png";
import img4 from "../assets/ig4.png";

export default function InstagramFeed() {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold uppercase mb-10">Síguenos en Instagram</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[img1, img2, img3, img4].map((img, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow hover:scale-105 transition-transform duration-300">
            <img src={img} alt={`Post ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      <p className="mt-8 text-lg">
        <a
          href="https://www.instagram.com/tucuenta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Ver más en nuestro perfil →
        </a>
      </p>
    </section>
  );
}
