import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import Seo from "@/components/Seo";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const GlowCard = ({ children }) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    className="relative group p-[2px] rounded-2xl"
  >
    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-[-100%] bg-[conic-gradient(from_180deg_at_50%_50%,#4f46e5,#9333ea,#2563eb)] animate-spin-slow opacity-30 rounded-full" />
    </div>
    <div className="relative z-10 bg-[#0b0b23] rounded-2xl p-6 sm:p-8 shadow-lg shadow-purple-800/10">
      {children}
    </div>
  </motion.div>
);

const faqList = [
  {
    q: "¿Ofrecen periodo de prueba?",
    a: "Sí, ofrecemos un periodo de prueba de 14 días para que puedas evaluar nuestras soluciones.",
  },
  {
    q: "¿Cuánto tiempo toma la implementación?",
    a: "El tiempo de implementación varía según la complejidad, pero generalmente entre 2 y 4 semanas.",
  },
  {
    q: "¿Ofrecen capacitación?",
    a: "Sí, incluimos capacitación completa para tu equipo como parte de la implementación.",
  },
  {
    q: "¿Qué soporte técnico ofrecen?",
    a: "Dependiendo del plan, ofrecemos soporte técnico en horario laboral o 24/7.",
  },
];

const Contacto = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Layout>
      <Seo
        title="Contáctanos | CodeCima"
        description="¿Tienes preguntas o quieres trabajar con nosotros? Contáctanos y recibe asesoría personalizada sobre páginas web, hosting o sistemas a medida."
        keywords="contacto CodeCima, desarrollo web Ecuador, hosting Riobamba, agencia digital Ecuador"
        image="/images/preview.webp"
        url="https://www.codecima.com.ec/contacto"
      />

      <section className="pt-24 pb-16 w-full bg-gradient-to-b from-[#0a0a1b] via-[#0a0a23] to-[#0b0b2b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-codecima-blue">Contáctanos</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Estamos aquí para responder a tus preguntas y ayudarte a encontrar
              la solución perfecta para tu empresa.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Columna izquierda */}
            <div className="space-y-8 lg:col-span-1">
              <GlowCard>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Información de contacto
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <MapPin className="text-codecima-blue" size={24} aria-hidden="true" />,
                      title: "Dirección",
                      desc: "Ent. 1 ESPOCH, Riobamba 060155, Ecuador",
                    },
                    {
                      icon: <Phone className="text-codecima-blue" size={24} aria-hidden="true" />,
                      title: "Teléfono",
                      desc: "+593 99 940 6026",
                    },
                    {
                      icon: <Mail className="text-codecima-blue" size={24} aria-hidden="true" />,
                      title: "Email",
                      desc: "info@codecima.com",
                    },
                    {
                      icon: <Clock className="text-codecima-blue" size={24} aria-hidden="true" />,
                      title: "Horario de atención",
                      desc: "Lunes a Viernes: 6:00 AM - 8:00 PM",
                    },
                  ].map(({ icon, title, desc }, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-codecima-blue/10 p-3 rounded-lg mr-4">
                        {icon}
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">{title}</h3>
                        <p className="text-gray-400">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>

              {/* FAQ */}
              <GlowCard>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Preguntas Frecuentes
                </h2>
                <p className="text-gray-400 mb-4 text-sm">
                  Haz clic en cada pregunta para ver la respuesta
                </p>
                <div className="space-y-4">
                  {faqList.map((item, i) => (
                    <motion.div
                      key={i}
                      layout
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className={`cursor-pointer bg-codecima-darkblue/50 p-5 rounded-xl border transition flex justify-between items-center hover:border-codecima-blue ${
                        openIndex === i
                          ? "border-codecima-blue"
                          : "border-codecima-blue/20"
                      }`}
                    >
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-0">
                          {item.q}
                        </h3>
                        <AnimatePresence>
                          {openIndex === i && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-gray-400 mt-3"
                            >
                              {item.a}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`ml-4 shrink-0 transition-transform text-codecima-blue ${
                          openIndex === i ? "rotate-180" : ""
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
              </GlowCard>
            </div>

            {/* Columna derecha */}
            <div className="space-y-8 lg:col-span-2">
              <GlowCard>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Envíanos un mensaje
                </h2>
                <p className="text-gray-300 mb-6">
                  Completa el formulario y un asesor se pondrá en contacto contigo a la brevedad.
                </p>
                <ContactForm />
              </GlowCard>

              <GlowCard>
                <h2 className="text-xl font-bold text-white mb-4">
                  Nuestra ubicación
                </h2>
                <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.408292797993!2d-78.6459522!3d-1.6628384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d3810a5fa36f8f%3A0x28f3f09e89e0aa18!2sEntrada%201%20ESPOCH%2C%20Riobamba%20060155%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1715741874924!5m2!1ses!2sec"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg w-full h-full"
                  ></iframe>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
