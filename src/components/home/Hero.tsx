import React from "react";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import { Code, MonitorSmartphone, Play, Zap } from "lucide-react";
import SpaceHeroBackground from "@/components/background/SpaceBackground";

const techLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    alt: "Laravel",
  },
  {
    src: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256",
    alt: "Node.js",
  },
  {
    src: "https://www.svgrepo.com/show/374144/typescript.svg",
    alt: "TypeScript",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "Tailwind CSS",
  },
];

const FloatingTechBar = () => (
  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-0 flex gap-6">
    {techLogos.map((logo, i) => (
      <motion.div
        key={i}
        className="w-16 h-16 p-2 bg-white/20 backdrop-blur-sm rounded-full cursor-pointer"
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
          className="w-full h-full object-contain opacity-60"
        />
      </motion.div>
    ))}
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-32 overflow-hidden text-white bg-gradient-to-br from-[#0a0a23] via-[#110028] to-[#0c0c25]">
      
      {/* Fondo separado */}
      <SpaceHeroBackground />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IZQUIERDA: Texto y botones */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-codecima-blue">Desarrollo Web</span>
              <br />
              <span className="text-purple-500">Personalizado</span>{" "}
              <span className="text-purple-500">y Escalable</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-xl">
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
              mediante el desarrollo de páginas web, plataformas y sistemas a medida.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <GlowButton>
                <Play className="mr-2 h-4 w-4" />
                Ver Video
              </GlowButton>
              <GlowButton>Solicita una cotización →</GlowButton>
            </div>

            {/* Íconos destacados */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Code className="text-codecima-blue" size={18} />
                Código limpio
              </div>
              <div className="flex items-center gap-2">
                <MonitorSmartphone className="text-codecima-blue" size={18} />
                Responsive
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-codecima-blue" size={18} />
                Rápido y optimizado
              </div>
            </div>
          </motion.div>

          {/* DERECHA: Imagen animada */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 1 }}
            animate={{ scale: [1.10, 1, 1.10] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="/images/img-hero.png"
              alt="Hero"
              className="w-full max-w-md drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]"
            />
          </motion.div>
        </div>
      </div>

      {/* Logos tech flotando */}
      <FloatingTechBar />
    </section>
  );
};

export default Hero;
