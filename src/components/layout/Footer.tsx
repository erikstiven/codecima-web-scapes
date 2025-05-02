import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className="bg-codecima-darkblue pt-16 pb-8 border-t border-codecima-blue/30 shadow-[0_-1px_0_0_rgba(53,182,255,0.15)] text-sm text-gray-400">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* LOGO & DESCRIPCIÓN */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="text-codecima-blue" size={24} />
              <span className="text-codecima-blue font-bold text-xl">CODE</span>
              <span className="text-white font-bold text-xl">CIMA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software para empresas de transporte de{' '}
              <span className="text-codecima-blue font-medium">Carga Pesada</span> y{' '}
              <span className="text-codecima-blue font-medium">Paquetería</span>
            </p>
          </div>

          {/* EMPRESA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><Link to="/nosotros" className="hover:text-codecima-blue">› Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-codecima-blue">› Contacto</Link></li>
              <li><Link to="/legal" className="hover:text-codecima-blue">› Legal</Link></li>
            </ul>
          </div>

          {/* SERVICIOS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li><Link to="/productos" className="hover:text-codecima-blue">› Productos</Link></li>
              <li><Link to="/precios" className="hover:text-codecima-blue">› Precios</Link></li>
              <li><Link to="/portafolio" className="hover:text-codecima-blue">› Portafolio</Link></li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="text-codecima-blue" size={18} />
                <a href="mailto:ventas@codecima.com" className="hover:text-codecima-blue">ventas@codecima.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="text-codecima-blue" size={18} />
                <a href="tel:+51924911094" className="hover:text-codecima-blue">+51 924 911 094</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="text-codecima-blue" size={18} />
                <span>Km 9.3, Carr. Central, Ate, Lima, Perú.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-codecima-blue/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} CODECIMA. Todos los derechos reservados.</p>

          <div className="flex gap-5">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-codecima-blue transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
