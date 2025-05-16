import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-codecima-darkblue pt-16 pb-8 border-t border-codecima-blue/30 shadow-[0_-1px_0_0_rgba(53,182,255,0.15)] text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* LOGO & DESCRIPCIÓN */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logo-codecima.webp"
                alt="Logo Codecima"
                className="w-10 h-10 object-contain"
              />
              <div className="text-xl font-bold">
                <span className="text-codecima-blue">CODE</span>
                <span className="text-white">CIMA</span>
              </div>
            </div>
            <p className="text-gray-300 text-justify leading-relaxed text-sm">
              Transformamos ideas en soluciones digitales para empresas privadas,
              instituciones públicas y emprendimientos que buscan destacar en un
              mundo cada vez más conectado.
            </p>
          </div>

          {/* EMPRESA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/nosotros" className="hover:text-codecima-blue">
                  › Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-codecima-blue">
                  › Contacto
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-codecima-blue">
                  › Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICIOS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/productos" className="hover:text-codecima-blue">
                  › Productos
                </Link>
              </li>
              <li>
                <Link to="/precios" className="hover:text-codecima-blue">
                  › Precios
                </Link>
              </li>
              <li>
                <Link to="/portafolio" className="hover:text-codecima-blue">
                  › Portafolio
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-center">
                <Mail className="text-codecima-blue" size={18} />
                <a
                  href="mailto:info@codecima.com"
                  className="hover:text-codecima-blue break-words"
                >
                  info@codecima.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-codecima-blue" size={18} />
                <a href="tel:+593999406026" className="hover:text-codecima-blue">
                  +593 99 940 6026
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="text-codecima-blue mt-1" size={18} />
                <div className="space-y-1">
                  <p>
                    <span className="font-medium text-white">Matriz:</span> Riobamba, Ecuador
                  </p>
                  <p>
                    <span className="font-medium text-white">Sucursal 1:</span> Machala, Ecuador
                  </p>
                  <p>
                    <span className="font-medium text-white">Sucursal 2:</span> Puyo, Ecuador
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-codecima-blue/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} CODECIMA. Todos los derechos reservados.</p>
          <div className="flex gap-5 text-gray-400">
            <a
              href="https://www.facebook.com/CodeCimaEc/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-codecima-blue transition-all"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/codecimaec/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-codecima-blue transition-all"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@codecimaec"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-codecima-blue transition-all"
            >
              <SiTiktok size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/codecima"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-codecima-blue transition-all"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
