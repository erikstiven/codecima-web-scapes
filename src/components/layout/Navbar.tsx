import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Productos", path: "/productos" },
    { name: "Portafolio", path: "/portafolio" },
    { name: "Precios", path: "/precios" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-codecima-navy/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/public/images/logo-codecima.webp"
                alt="Logo Codecima"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <span className="text-codecima-blue font-bold text-xl">CODE</span>
              <span className="text-white font-bold text-xl">CIMA</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-2 py-2 text-sm font-medium transition-colors relative ${
                  location.pathname === link.path
                    ? "text-codecima-blue"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-codecima-blue" />
                )}
              </Link>
            ))}
            <Button
              asChild
              className="bg-codecima-blue hover:bg-codecima-blue/80 font-semibold"
            >
              <Link to="/cotizar">
                <Rocket size={16} className="mr-2" />
                ¡Empezar!
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-codecima-darkblue/20 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-codecima-navy/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "text-codecima-blue bg-codecima-darkblue/30"
                    : "text-gray-300 hover:text-white hover:bg-codecima-darkblue/10"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                asChild
                className="w-full bg-codecima-blue hover:bg-codecima-blue/80"
              >
                <Link to="/cotizar" onClick={() => setIsMenuOpen(false)}>
                  <Rocket size={16} className="mr-2" />
                  ¡Empezar!
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
