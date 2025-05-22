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
];

export default function Brands() {
  return (
    <section className="bg-white py-20 px-6 text-center font-zabal" id="brands">
      <h2 className="text-4xl font-black italic text-yellow-500 uppercase mb-12">
        Trabajamos con las mejores marcas
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center max-w-6xl mx-auto">
        {brands.map((brand, idx) => (
          <div key={idx} className="flex items-center justify-center">
            <img
              src={brand.src}
              alt={brand.alt}
              className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
