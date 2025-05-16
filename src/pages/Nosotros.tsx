import React from "react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import {
  Users,
  Code,
  Award,
  Clock,
  Globe,
  Zap,
  Briefcase,
  Cpu,
} from "lucide-react";

const Nosotros = () => {
  const stats = [
    { label: "Años de experiencia", value: "5+" },
    { label: "Clientes satisfechos", value: "50+" },
    { label: "Proyectos completados", value: "50" },
    { label: "Especialistas", value: "2+" },
  ];

  const values = [
    { title: "Orientación al cliente", description: "Ponemos al cliente en el centro de todo lo que hacemos, adaptándonos a sus necesidades." },
    {  title: "Excelencia técnica", description: "Nos comprometemos con el más alto estándar de calidad en nuestras soluciones." },
    {  title: "Innovación constante", description: "Buscamos constantemente nuevas formas de mejorar y ofrecer soluciones de vanguardia." },
    {  title: "Compromiso con los plazos", description: "Entregamos en el tiempo acordado, respetando los cronogramas establecidos." },
    {  title: "Responsabilidad social", description: "Contribuimos positivamente a la sociedad a través de nuestras soluciones e iniciativas." },
    { title: "Agilidad y adaptabilidad", description: "Nos adaptamos rápidamente a los cambios del mercado y a las necesidades de nuestros clientes." },
  ];

  const teamMembers = [
    {
      name: "Erik Quisnia",
      position: "CEO & Fundador",
      description: "Con más de 6 años de experiencia en el sector tecnológico, Erik ha liderado la visión estratégica de CodeCima desde sus inicios.",
      image: "https://previews.123rf.com/images/djvstock/djvstock1701/djvstock170102949/69084495-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-perfil-ejecutivo-del-hombre-de-negocios.jpg",
      icon: <Briefcase size={24} aria-hidden="true" />,
    },
    {
      name: "Edison Gualle",
      position: "CTO",
      description: "Ingeniero de software con experiencia en desarrollo de soluciones empresariales. Lidera nuestro equipo técnico y define la arquitectura de nuestros productos.",
      image: "https://previews.123rf.com/images/djvstock/djvstock1701/djvstock170102949/69084495-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-perfil-ejecutivo-del-hombre-de-negocios.jpg",
      icon: <Cpu size={24} aria-hidden="true" />,
    },
    {
      name: "Niurka Silva",
      position: "Directora de Marketing",
      description: "Especialista en marketing digital con enfoque en el sector B2B. Responsable de nuestra estrategia de comunicación y crecimiento.",
      image: "https://previews.123rf.com/images/djvstock/djvstock1701/djvstock170102949/69084495-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-perfil-ejecutivo-del-hombre-de-negocios.jpg",
      icon: <Users size={24} aria-hidden="true" />,
    },
  ];

  const AnimatedBorderCard = ({ children, className = "" }) => (
    <div className={`relative group p-[2px] rounded-2xl bg-transparent ${className}`}>
      <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute inset-[-50%] bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5,#9333ea,#2563eb,#4f46e5)] animate-spin-slow opacity-50 rounded-full" />
      </div>
      <div className="relative z-10 bg-[#0b0b23] rounded-2xl p-6 sm:p-8 h-full flex flex-col transition-transform duration-300 group-hover:scale-[1.015]">
        {children}
      </div>
    </div>
  );

  const AnimatedBorderCardSmall = ({ children, className = "" }) => (
    <div className={`relative z-0 group rounded-xl bg-transparent p-[2px] ${className}`}>
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-[-200%] bg-[conic-gradient(from_180deg_at_50%_50%,#4f46e5,#9333ea,#2563eb,#4f46e5)] animate-spin-slow opacity-40 blur-[1px]" />
      </div>
      <div className="relative z-10 bg-[#0b0b23] rounded-xl px-6 py-5 text-center flex flex-col justify-center items-center h-full group-hover:scale-[1.02] transition-transform duration-300">
        {children}
      </div>
    </div>
  );

  return (
    <Layout>
      <Seo
        title="Nosotros | CodeCima"
        description="Conoce al equipo de CodeCima y los valores que nos guían. Somos una empresa enfocada en soluciones digitales efectivas, escalables y humanas."
        keywords="equipo CodeCima, quienes somos, valores empresa, desarrolladores Ecuador, empresa de software"
        image="/images/preview.webp"
        url="https://www.codecima.com.ec/nosotros"
      />

      <section className="pt-24 pb-16 w-full bg-gradient-to-b from-[#0a0a1b] via-[#0a0a23] to-[#0b0b2b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl font-bold mb-6 text-white">
                Sobre <span className="text-codecima-blue">CodeCima</span>
              </h1>
              <p className="text-gray-300 mb-6">
                Somos una empresa ecuatoriana especializada en desarrollo de software y sitios web. Desde 2019, hemos ayudado a empresas a digitalizarse con soluciones modernas y eficientes.
              </p>
              <p className="text-gray-300">
                Nuestra misión es simplificar procesos complejos con tecnología útil, intuitiva y hecha a medida para cada cliente.
              </p>
            </div>
            <div>
              <AnimatedBorderCard>
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="Equipo de desarrollo de CodeCima"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </AnimatedBorderCard>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <AnimatedBorderCardSmall key={index}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-codecima-blue mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </AnimatedBorderCardSmall>
            ))}
          </div>

          {/* Valores */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Nuestros <span className="text-codecima-blue">Valores</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Estos principios guían todo lo que hacemos.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <AnimatedBorderCard key={index}>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </AnimatedBorderCard>
              ))}
            </div>
          </div>

          {/* Equipo */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Nuestro <span className="text-codecima-blue">Equipo</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Conoce a las personas que hacen posible nuestras soluciones.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedBorderCard key={index}>
                  <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto border-2 border-codecima-blue/50 group-hover:border-codecima-blue transition-colors duration-300">
                    <img
                      src={member.image}
                      alt={`Foto de ${member.name}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-codecima-blue">{member.icon}</span>
                      <h4 className="text-codecima-blue font-semibold">{member.position}</h4>
                    </div>
                    <p className="text-gray-400">{member.description}</p>
                  </div>
                </AnimatedBorderCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
