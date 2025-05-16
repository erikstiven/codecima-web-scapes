import React from "react";
import Layout from "@/components/layout/Layout";
import GlowButton from "@/components/ui/GlowButton";
import {
  ChevronRight,
  Shield,
  Database,
  Server,
  Clock,
  Users,
  FileCheck,
  Zap,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const Productos = () => {
  const products = [
    {
      title: "Plataforma para",
      subtitle: "Gestión del Talento Humano",
      description:
        "ColTalent permite automatizar procesos como permisos, gestión de personal, control de asistencias y organigramas. Ideal para instituciones públicas o privadas que buscan eficiencia en su talento humano.",
      features: [
        "Módulo de permisos",
        "Organigrama funcional",
        "Gestion de empleados",
        "Reportes estadísticos",
        "Roles y permisos",
        "Alojado en la nube",
      ],
      benefits: [
        {
          title: "Gestión eficiente",
          description:
            "Optimiza los tiempos y tareas del personal administrativo.",
          icon: FileCheck,
        },
        {
          title: "Control total",
          description:
            "Visualización y trazabilidad de movimientos y solicitudes.",
          icon: Shield,
        },
        {
          title: "Roles jerárquicos",
          description: "Cada usuario ve lo que le corresponde según su perfil.",
          icon: Users,
        },
        {
          title: "En la nube",
          description: "Disponible 24/7 desde cualquier navegador.",
          icon: Database,
        },
      ],
      image: "/images/coltalent-pc.webp",
      color: "codecima-blue",
    },
    {
      title: "Plataforma para",
      subtitle: "Gestión de Trámites Municipales",
      description:
        "ColtaVirtual es un sistema para la digitalización de trámites, ideal para municipios y entidades públicas. Permite el seguimiento en línea y mejora la transparencia de las solicitudes.",
      features: [
        "Módulo de trámites externos e internos",
        "Seguimiento en línea",
        "Roles de atención por área",
        "Notificaciones automáticas",
        "Control de tiempos por trámite",
        "Acceso desde cualquier dispositivo",
      ],
      benefits: [
        {
          title: "Transparencia",
          description:
            "Los ciudadanos pueden seguir el estado de sus trámites.",
          icon: Clock,
        },
        {
          title: "Alta disponibilidad",
          description: "Sistema en línea, siempre accesible.",
          icon: Server,
        },
        {
          title: "Optimización institucional",
          description: "Mejora los tiempos de atención y elimina el papel.",
          icon: Zap,
        },
        {
          title: "Control por roles",
          description: "Cada área solo accede a lo que le corresponde.",
          icon: Shield,
        },
      ],
      image: "/images/colta-en-linea-pc.webp",
      color: "codecima-purple",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Layout>
      <section className="pt-28 pb-24 bg-gradient-to-b from-[#0a0a1b] via-[#0a0a23] to-[#0b0b2b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-2 text-codecima-purple">
              Soluciones Digitales
            </h1>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-white">Software diseñado para </span>
              <span className="text-codecima-blue">
                empresas e instituciones
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Optimizamos procesos operativos, administrativos y de atención con
              sistemas web escalables adaptados a tus necesidades.
            </p>
          </motion.div>

          <div className="space-y-24">
            {products.map((product, index) => {
              const bgColor = "bg-codecima-blue/10";
              const textColor = "text-codecima-blue";

              return (
                <div
                  key={index}
                  className="relative p-[2px] rounded-2xl overflow-hidden group"
                >
                  <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#2563eb_100%)] opacity-30 rounded-2xl" />
                  <div className="relative z-10 bg-[#0b0b23] rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl">
                    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                      <div className="w-full lg:w-1/2 p-8 md:p-10">
                        <h3 className="text-xl font-medium text-codecima-blue mb-1">
                          {product.title}
                        </h3>
                        <h2 className="text-3xl font-bold mb-4 text-white">
                          {product.subtitle}
                        </h2>
                        <p className="text-gray-300 mb-8">
                          {product.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                          {product.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start"
                              variants={fadeInUp}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                            >
                              <CheckCircle
                                className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0"
                                size={18}
                              />
                              <span className="text-gray-300 text-sm">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-x-4 pt-0">
                          <a
                            href="https://wa.me/593999406026"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GlowButton>Solicitar Asesoría</GlowButton>
                          </a>

                          <a
                            href={
                              index === 0
                                ? "https://coltalent.com/"
                                : "https://colta-en-linea.com/"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GlowButton>
                              Ver Más{" "}
                              <ChevronRight size={16} className="ml-2" />
                            </GlowButton>
                          </a>
                        </div>
                      </div>

                      <motion.a
                        href={
                          index === 0
                            ? "https://coltalent.com/"
                            : "https://colta-en-linea.com/"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full lg:w-1/2 min-h-[300px] sm:min-h-[350px] lg:min-h-[500px] mt-[-4px] block cursor-pointer group"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <motion.img
                          src={product.image}
                          alt={product.subtitle}
                          className="w-full h-auto max-h-[500px] object-contain mx-auto drop-shadow-[0_0_25px_rgba(0,160,255,0.35)] group-hover:drop-shadow-[0_0_35px_rgba(0,160,255,0.6)] transition duration-300"
                          animate={{ y: [0, -10, 0] }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.a>
                    </div>

                    <div className="p-8 md:p-10 border-t-2 border-codecima-blue/20">
                      <h3 className="text-xl font-bold text-white mb-6">
                        Beneficios principales
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {product.benefits.map((benefit, i) => (
                          <motion.div
                            key={i}
                            className="bg-codecima-darkblue/50 border border-codecima-blue/30 rounded-lg p-5 hover:border-codecima-blue/60 transition-all cursor-pointer"
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="bg-codecima-blue/10 p-3 rounded-lg inline-block mb-3">
                              <benefit.icon
                                className="text-codecima-blue"
                                size={20}
                              />
                            </div>
                            <h4 className="text-white font-semibold mb-2">
                              {benefit.title}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {benefit.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <motion.div
            className="mt-24 text-center p-10 bg-[#0b0b23] border border-codecima-blue/50 hover:border-codecima-blue/80 rounded-2xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-3">
              <span className="text-white">¿Listo para impulsar tu </span>
              <span className="text-codecima-blue">negocio?</span>
            </h2>

            <p className="text-codecima-blue font-semibold mb-1">
              Cuéntanos tu idea o proyecto
            </p>

            <p className="text-gray-400 text-sm mb-8">
              Te ayudamos a hacerlo realidad con asesoría gratuita de nuestro
              equipo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593999406026?text=Hola%2C%20quisiera%20agendar%20una%20asesor%C3%ADa%20personalizada%20con%20el%20equipo%20de%20CodeCima."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-3 rounded-xl bg-codecima-blue text-white font-medium hover:bg-codecima-blue/90 transition">
                  Agendar una reunión
                </button>
              </a>

              <a
                href="https://wa.me/593999406026?text=Hola%2C%20me%20interesan%20los%20productos%20de%20CodeCima%20y%20quiero%20más%20información."
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center justify-center font-medium border border-white/30 text-white rounded-xl px-4 py-2 hover:bg-white/10 transition"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Productos;
