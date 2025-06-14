import React from "react";

import vazlo from "../assets/vazlo.png";
import cecra from "../assets/cecra.png";
import acp from "../assets/acp.png";
import grob from "../assets/grob.png";
import yokomitsu from "../assets/yokomitsu.png";
import kabuto from "../assets/kabuto.png";
import syd from "../assets/syd.png";
import kyb from "../assets/kyb.png";
import bilstein from "../assets/bilstein.png";
import UCP from "../assets/UCP.jpg";

const brands = [
  { src: vazlo, alt: "Vazlo Autoparts" },
  { src: cecra, alt: "Cecra by Vazlo" },
  { src: acp, alt: "ACP" },
  { src: grob, alt: "GROB" },
  { src: yokomitsu, alt: "Yokomitsu" },
  { src: kabuto, alt: "Kabuto" },
  { src: syd, alt: "SYD" },
  { src: kyb, alt: "KYB" },
  { src: bilstein, alt: "Bilstein" },
  { src: UCP, alt: "UCP" },
];

export default function Brands() {
  return (
    <section className="bg-black py-20 px-6 text-center font-zabal" id="marcas">
      <h2 className="text-4xl font-black italic text-yellow-500 uppercase mb-6 tracking-wide drop-shadow-md">
        Trabajamos con las mejores marcas
      </h2>
      <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12 rounded animate-pulse"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-10 max-w-6xl mx-auto">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center h-28 bg-white p-4 rounded-lg border border-gray-300 shadow-md hover:shadow-yellow-400/50 transition-transform duration-300 hover:scale-110 hover:rotate-1"
          >
            <img
              src={brand.src}
              alt={brand.alt}
              className="object-contain max-w-[80%] max-h-[60px] grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
