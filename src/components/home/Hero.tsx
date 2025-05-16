import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import { Code, MonitorSmartphone, Zap } from "lucide-react";
import SpaceHeroBackground from "@/components/background/SpaceBackground";

const techLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "Logo de React",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    alt: "Logo de Laravel",
  },
  {
    src: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256",
    alt: "Logo de Node.js",
  },
  {
    src: "https://www.svgrepo.com/show/374144/typescript.svg",
    alt: "Logo de TypeScript",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "Logo de Tailwind CSS",
  },
];
const FloatingTechBar = () => (
  <div className="relative z-10 flex flex-wrap justify-center gap-3 sm:gap-4 px-4 mt-6">
    {techLogos.map((logo, i) => (
      <motion.div
        key={i}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 p-2 bg-white/10 rounded-full"
        whileHover={{ scale: 1.1 }}
        initial={{ y: 10, opacity: 0, filter: "blur(6px)" }}
        animate={{ y: [10, -6, 0], opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 1.5,
          delay: i * 0.20,
          ease: "easeOut",
        }}
        title={logo.alt}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          loading="lazy"
          width={40}
          height={40}
          className="w-full h-full object-contain opacity-70"
        />
      </motion.div>
    ))}
  </div>
);


const Hero = () => {
  return (
    <section
      className="relative min-h-screen pt-28 pb-36 overflow-hidden text-white bg-[#0a0a23]"
      aria-label="Sección principal: desarrollo de software"
    >
      <Helmet>
        <title>CodeCima | Desarrollo de Software a Medida para Empresas</title>
        <meta
          name="description"
          content="Empresa de desarrollo de software a medida. Creamos landing pages, ecommerce y sistemas web escalables para empresas que buscan resultados reales."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CodeCima" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a23" />
        <meta property="og:title" content="CodeCima | Desarrollo de Software a Medida para Empresas" />
        <meta
          property="og:description"
          content="Creamos soluciones digitales: landing pages, ecommerce y sistemas empresariales escalables para empresas que buscan destacar."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codecima.com" />
        <meta property="og:image" content="https://www.codecima.com/images/og-image.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CodeCima | Desarrollo de Software a Medida para Empresas" />
        <meta
          name="twitter:description"
          content="Landing pages, ecommerce y sistemas empresariales hechos a medida para tu empresa."
        />
        <meta name="twitter:image" content="https://www.codecima.com/images/og-image.webp" />
        <link rel="canonical" href="https://www.codecima.com/" />
        <link rel="preload" as="image" href="/images/img-hero.webp" />
      </Helmet>

      <SpaceHeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="block text-codecima-blue">Creamos Soluciones</span>
              <span className="block text-purple-500">que Impulsan tu Negocio</span>
            </motion.h1>

            <motion.p
              className="text-sm text-codecima-blue font-semibold uppercase tracking-wide"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Sitios web, tiendas online, plataformas empresariales
            </motion.p>

            <motion.p
              className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Somos una empresa de desarrollo enfocada en resultados. Diseñamos{' '}
              <span className="text-codecima-blue font-medium">sitios rápidos, seguros y escalables</span>{' '}
              que te ayudan a vender más, automatizar procesos y destacar online. Desde{' '}
              <span className="text-codecima-blue font-medium">landing pages</span> hasta{' '}
              <span className="text-codecima-blue font-medium">sistemas empresariales completos</span>.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a
                href="https://wa.me/593999406026?text=Hola%2C%20estoy%20interesado%20en%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20desarrollo%20de%20software.%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20una%20cotizaci%C3%B3n%20adaptada%20a%20mi%20empresa%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicita tu cotización por WhatsApp"
              >
                <GlowButton>Solicita una cotización →</GlowButton>
              </a>

              <a
                href="/portafolio"
                className="text-sm flex items-center justify-center font-medium border border-white/30 text-white rounded-xl px-4 py-2 hover:bg-white/10 transition"
                title="Ver proyectos desarrollados por CodeCima"
              >
                Ver Portafolio
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.img
              src="/images/img-hero.webp"
              alt="Desarrollador creando soluciones digitales para empresas"
              loading="lazy"
              width={640}
              height={400}
              className="w-10/12 max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]"
              animate={{ y: [0, -4, 0], scale: [1, 1.005, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <div className="mt-10">
          <FloatingTechBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
