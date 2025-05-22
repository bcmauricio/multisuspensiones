import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 font-zabal">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center md:text-left text-sm">
        {/* Contacto */}
        <div>
          <h4 className="text-lg font-bold italic text-yellow-400 mb-3">📞 Contacto</h4>
          <p><FaPhoneAlt className="inline mr-2" />Sucursal: 977 6511</p>
          <p><FaWhatsapp className="inline mr-2 mt-1" />663 211 6684</p>
          <p><FaWhatsapp className="inline mr-2" />664 348 9665</p>
          <p><FaWhatsapp className="inline mr-2" />664 316 5404</p>
        </div>

        {/* Dirección */}
        <div>
          <h4 className="text-lg font-bold italic text-yellow-400 mb-3">📍 Dirección</h4>
          <p>
            Plaza Mariana, Ruta Independencia 7938-Int. 1<br />
            Mariano Matamoros, 22206<br />
            Tijuana, B.C., México
          </p>
        </div>

        {/* Horarios */}
        <div>
          <h4 className="text-lg font-bold italic text-yellow-400 mb-3">🕒 Horarios</h4>
          <p>Lunes a Viernes: 8:00 a.m. – 6:00 p.m.</p>
          <p>Sábados: 8:00 a.m. – 3:30 p.m.</p>
          <p>Domingos: Cerrado</p>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="text-lg font-bold italic text-yellow-400 mb-3">📲 Síguenos</h4>
          <div className="flex justify-center md:justify-start space-x-5 text-2xl mt-2">
            <a href="https://www.facebook.com/Multisuspensiones" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/multisuspensiones/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@multisuspensionesdn" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="mt-16">
        <h4 className="text-lg font-bold italic text-yellow-400 mb-4 text-center">📍 Encuéntranos en el mapa</h4>
        <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.9354229510515!2d-116.89830248481927!3d32.46621798106957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94e89c64e9d6d%3A0xa5a8e4d55b8ef69d!2sMultisuspensiones%20del%20Norte!5e0!3m2!1ses-419!2smx!4v1716321457894"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Multisuspensiones del Norte. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
