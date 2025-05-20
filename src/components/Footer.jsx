import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Dirección */}
        <div>
          <h4 className="text-xl font-bold mb-2">Dirección</h4>
          <p>Tijuana, Baja California, México</p>
        </div>

        {/* Horarios */}
        <div>
          <h4 className="text-xl font-bold mb-2">Horarios de Atención</h4>
          <ul className="space-y-1 text-sm">
            <li><strong>Lunes a Viernes:</strong> 8:00 a.m. – 6:00 p.m.</li>
            <li><strong>Sábados:</strong> 8:00 a.m. – 3:30 p.m.</li>
            <li><strong>Domingos:</strong> Cerrado</li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h4 className="text-xl font-bold mb-2">Síguenos</h4>
          <p className="text-sm">Facebook | Instagram | TikTok</p>
          {/* Opcional: reemplazar con íconos y links reales */}
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Multisuspensiones del Norte. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
