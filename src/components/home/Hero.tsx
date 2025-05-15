import React from "react";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import { Code, MonitorSmartphone, Play, Zap } from "lucide-react";
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
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 p-2 bg-white/20 backdrop-blur-sm rounded-full cursor-pointer"
        whileHover={{
          scale: 1.2,
          boxShadow: "0 0 16px rgba(255,255,255,0.4)",
          rotate: [0, 5, -5, 0],
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 5 + Math.random(),
          repeat: Infinity,
          ease: "easeInOut",
        }}
        title={logo.alt}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          loading="lazy"
          className="w-full h-full object-contain opacity-60"
        />
      </motion.div>
    ))}
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-36 overflow-hidden text-white bg-gradient-to-br from-[#0a0a23] via-[#110028] to-[#0c0c25]">
      <SpaceHeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-codecima-blue">Desarrollo Web</span>
              <br />
              <span className="text-purple-500">Personalizado</span>{" "}
              <span className="text-purple-500">y Escalable</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0">
              Impulsamos el crecimiento de{" "}
              <span className="text-codecima-blue font-medium">
                empresas privadas
              </span>
              ,{" "}
              <span className="text-codecima-blue font-medium">
                grandes corporativos
              </span>{" "}
              y{" "}
              <span className="text-codecima-blue font-medium">
                emprendimientos
              </span>{" "}
              mediante el desarrollo de páginas web, plataformas y sistemas a
              medida.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://www.youtube.com/watch?v=j3wGF6A1hSw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlowButton>
                  <Play className="mr-2 h-4 w-4" />
                  Ver Video
                </GlowButton>
              </a>

              <a
                href="https://wa.me/593999406026"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlowButton>Solicita una cotización →</GlowButton>
              </a>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Code className="text-codecima-blue" size={18} aria-hidden="true" />
                Código limpio
              </div>
              <div className="flex items-center gap-2">
                <MonitorSmartphone className="text-codecima-blue" size={18} aria-hidden="true" />
                Responsive
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-codecima-blue" size={18} aria-hidden="true" />
                Rápido y optimizado
              </div>
            </div>
          </motion.div>

          <motion.img
            src="/images/img-hero.png"
            alt="Desarrollador creando soluciones web escalables para empresas"
            loading="lazy"
            className="w-10/12 max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]"
            animate={{ y: [0, -4, 0], scale: [1, 1.005, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="mt-10 block md:hidden">
          <FloatingTechBar />
        </div>
        <div className="hidden md:block mt-10">
          <FloatingTechBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
