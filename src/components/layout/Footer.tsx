
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-codecima-darkblue pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Logo & Description */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-codecima-blue font-bold text-xl">CODE</span>
              <span className="text-white font-bold text-xl">CIMA</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Software para empresas de transporte de Carga Pesada y Paquetería
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-codecima-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-codecima-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-codecima-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-codecima-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Empresa */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/nosotros" className="text-gray-400 hover:text-codecima-blue transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-codecima-blue transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-gray-400 hover:text-codecima-blue transition-colors">
                  Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Servicios */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/productos" className="text-gray-400 hover:text-codecima-blue transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/precios" className="text-gray-400 hover:text-codecima-blue transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link to="/portafolio" className="text-gray-400 hover:text-codecima-blue transition-colors">
                  Portafolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contacto */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="text-codecima-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <a href="mailto:ventas@codecima.com" className="text-gray-400 hover:text-codecima-blue transition-colors">
                  ventas@codecima.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="text-codecima-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <a href="tel:+51964891044" className="text-gray-400 hover:text-codecima-blue transition-colors">
                  +51 964 891 044
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="text-codecima-blue mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">
                  Av. N S. Calle Central, Ave. Lima, Perú
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} CODECIMA. Todos los derechos reservados.
          </p>
          <div className="flex items-center text-gray-500 text-xs">
            <span>Con</span>
            <span className="text-red-500 mx-1">❤</span>
            <span>desde</span>
            <span className="font-semibold ml-1">Perú</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
