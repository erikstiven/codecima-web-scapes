import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { ArrowRight } from "lucide-react";
import { CardContent } from "@/components/ui/card";

const Portafolio = () => {
  const categories = [
    { id: "todos", name: "Todos" },
    { id: "web", name: "Páginas Web Corporativas" },
    { id: "ecommerce", name: "Tiendas Online" },
    { id: "sistemas", name: "Sistemas Institucionales" },
  ];

  const projects = [
    {
      id: 1,
      title: "TropicTrade S.A.S",
      description:
        "Sitio web corporativo para empresa exportadora de banano. Incluye presentación institucional, servicios, contacto, animaciones y diseño responsivo optimizado para captar clientes internacionales.",
      client: "Cliente: TropicTrade S.A.S",
      image: "/images/Portafolio/tropictrade-portafolio.webp",
      category: "web",
      link: "https://www.tropictradesas.com",
    },
    {
      id: 2,
      title: "Zahofer Dental",
      description:
        "Sitio web moderno para clínica odontológica. Incluye presentación de servicios dentales, información de contacto, botón de WhatsApp, optimización responsive y estructura pensada para convertir visitas en pacientes.",
      client: "Cliente: Zahofer Dental",
      image: "/images/Portafolio/zahofer-portafolio.webp",
      category: "web",
      link: "https://zahofer.codecima.com",
    },
    {
      id: 3,
      title: "Betadent",
      description:
        "Página web profesional para clínica odontológica. Presenta los servicios dentales, perfil de la doctora, formulario de contacto, conexión con WhatsApp y diseño responsive optimizado para atraer pacientes desde dispositivos móviles.",
      client: "Cliente: Betadent",
      image: "/images/Portafolio/betadent-portafolio.webp",
      category: "web",
      link: "https://dent.codecima.com",
    },
    {
      id: 4,
      title: "ColTalent - Gestión de Talento Humano",
      description:
        "Sistema web desarrollado para la gestión integral de talento humano. Incluye módulos de permisos, historial laboral y académico, evaluaciones, aprobaciones por rol y perfil de empleado. Ideal para instituciones públicas que buscan digitalizar procesos internos.",
      client: "Cliente: GAD Municipal del Cantón Colta - Ecuador",
      image: "/images/Portafolio/coltalent-portafolio.webp",
      category: "sistemas",
      link: "https://coltalent.com",
    },
    {
      id: 5,
      title: "ColtaVirtual - Gestión de Trámites",
      description:
        "Sistema institucional para la gestión digital de trámites. Permite a los ciudadanos realizar solicitudes en línea, recibir notificaciones automáticas y hacer seguimiento del estado de sus trámites. Incluye panel administrativo, control por roles y acceso desde cualquier dispositivo.",
      client: "Cliente: GAD Municipal del Cantón Colta - Ecuador",
      image: "/images/Portafolio/coltaenlinea-portafolio.webp",
      category: "sistemas",
      link: "https://colta-en-linea.com",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("todos");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setFilteredProjects(
      activeCategory === "todos"
        ? projects
        : projects.filter((project) => project.category === activeCategory)
    );
  }, [activeCategory]);

  return (
    <Layout>
      <Seo
        title="Portafolio | CodeCima"
        description="Conoce los proyectos desarrollados por CodeCima."
        keywords="portafolio desarrollo web, proyectos CodeCima, software Ecuador"
        image="/images/preview.webp"
        url="https://www.codecima.com.ec/portafolio"
      />

      <section className="min-h-screen pt-24 pb-32 w-full bg-[#0a0a1b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="text-center mb-12 text-white">
            <h1 className="text-codecima-blue text-lg font-medium mb-2">
              Nuestro Portafolio
            </h1>
            <h2 className="text-4xl font-bold mb-3">Proyectos destacados</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubre nuestras soluciones tecnológicas implementadas para clientes en diversos sectores.
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-12 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 border border-codecima-blue/30 rounded-lg p-1 w-fit mx-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? "bg-codecima-blue text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                  aria-label={`Mostrar categoría ${category.name}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tarjetas */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${filteredProjects.length <= 2 ? "justify-center" : ""}`}>
            {filteredProjects.length === 0 ? (
              <p className="text-gray-400 text-center col-span-full">
                Aún no hay proyectos en esta categoría. ¡Pronto verás más!
              </p>
            ) : (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col h-full bg-[#0b0b2b]/60 border border-codecima-blue/30 rounded-2xl transform-gpu backface-hidden"
                >
                  <div className="pt-6">
                    <div className="relative">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 bg-codecima-blue text-white text-sm font-semibold px-6 py-1 rounded-xl shadow-md whitespace-nowrap">
                        {categories.find((cat) => cat.id === project.category)?.name}
                      </div>

                      <div className="w-[80%] h-[200px] rounded-t-2xl bg-transparent mx-auto">
                        <img
                          src={project.image}
                          alt={project.title}
                          width={640}
                          height={360}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <CardContent className="flex flex-col flex-grow px-6 pt-6 pb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="mt-auto flex justify-between items-center w-full">
                        <span className="text-gray-400 text-xs">{project.client}</span>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Ver detalles de ${project.title}`}>
                          <button className="flex items-center gap-1 text-sm px-4 py-2 border border-codecima-blue/50 text-white rounded-xl hover:border-codecima-blue hover:text-codecima-blue transition-colors duration-300">
                            Ver detalles <ArrowRight className="w-4 h-4" aria-hidden="true" />
                          </button>
                        </a>
                      </div>
                    </CardContent>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portafolio;
