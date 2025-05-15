import React from "react";
import Layout from "@/components/layout/Layout";
import { Building2, Calendar, FileText, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Seo from "@/components/Seo";

const Cotizar = () => {
  return (
    <Layout>
      <Seo
        title="Solicita una Cotización | CodeCima"
        description="Formulario para recibir una cotización personalizada de servicios web y hosting."
        keywords="cotización web Ecuador, desarrollo web Riobamba"
        image="/images/preview.webp"
        url="https://www.codecima.com.ec/cotizar"
      />

      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-white">Solicita una </span>
              <span className="text-codecima-blue">Cotización</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Completa el formulario a continuación y te enviaremos una
              cotización personalizada según tus necesidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulario */}
            <div className="rounded-xl bg-gradient-to-b from-[#0a0a1b] via-[#0a0a23] to-[#0b0b2b] p-[1px]">
              <div className="rounded-xl bg-codecima-darkblue/70 p-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Formulario de cotización
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Beneficios + Testimonios */}
            <div className="space-y-8">
              {/* Beneficios */}
              <div className="rounded-xl bg-gradient-to-b from-[#0a0a1b] via-[#0a0a23] to-[#0b0b2b] p-[1px]">
                <div className="rounded-xl bg-codecima-darkblue/70 p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Beneficios de solicitar una cotización
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        icon: <Calendar className="text-codecima-blue" size={20} aria-hidden="true" />,
                        title: "Respuesta rápida",
                        desc: "Nuestro equipo te responderá en menos de 24 horas hábiles.",
                      },
                      {
                        icon: <FileText className="text-codecima-blue" size={20} aria-hidden="true" />,
                        title: "Propuesta detallada",
                        desc: "Recibirás una propuesta personalizada según tus necesidades específicas.",
                      },
                      {
                        icon: <MessageSquare className="text-codecima-blue" size={20} aria-hidden="true" />,
                        title: "Asesoría especializada",
                        desc: "Un consultor especializado te guiará durante todo el proceso.",
                      },
                      {
                        icon: <Building2 className="text-codecima-blue" size={20} aria-hidden="true" />,
                        title: "Sin compromiso",
                        desc: "La cotización no te compromete a adquirir nuestros servicios.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="bg-codecima-blue/10 p-2 rounded-lg mr-4 mt-1">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-white font-medium mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonios */}
              <div className="rounded-xl bg-gradient-to-b from-[#0a0a1b] via-[#0a0a23] to-[#0b0b2b] p-[1px]">
                <div className="rounded-xl bg-codecima-darkblue/70 p-6">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Testimonios de clientes
                  </h2>
                  <div className="space-y-6">
                    <div className="border-l-2 border-codecima-blue pl-4">
                      <p className="text-gray-300 italic mb-2">
                        "El proceso de cotización fue rápido y sencillo. La
                        propuesta que recibimos se ajustaba perfectamente a
                        nuestras necesidades."
                      </p>
                      <p className="text-codecima-blue font-medium">
                        María Rodríguez - Gerente de Operaciones
                      </p>
                    </div>
                    <div className="border-l-2 border-codecima-blue pl-4">
                      <p className="text-gray-300 italic mb-2">
                        "Destaco la transparencia y el detalle de la cotización.
                        No hubo sorpresas ni costos ocultos durante la
                        implementación."
                      </p>
                      <p className="text-codecima-blue font-medium">
                        Carlos Mendoza - Director de Logística
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fin derecha */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cotizar;
