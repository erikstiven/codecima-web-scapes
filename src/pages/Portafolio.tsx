
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Portafolio = () => {
  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'software', name: 'Desarrollo de Software' },
    { id: 'movil', name: 'Desarrollo Móvil' },
    { id: 'ia', name: 'Inteligencia Artificial' },
    { id: 'bi', name: 'Business Intelligence' },
    { id: 'logistica', name: 'Logística' },
    { id: 'rrhh', name: 'Recursos Humanos' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión de Flotas',
      description: 'Desarrollo de una solución integral para la administración y control de flotas de vehículos en tiempo real',
      client: 'Cliente: TransLogic S.A.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
      category: 'software'
    },
    {
      id: 2,
      title: 'Aplicación de Monitoreo GPS',
      description: 'Aplicación móvil para el seguimiento en tiempo real de vehículos con informes detallados y alertas',
      client: 'Cliente: FleetTech Inc.',
      image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6',
      category: 'movil'
    },
    {
      id: 3,
      title: 'Sistema de Mantenimiento Predictivo',
      description: 'Plataforma de análisis predictivo para anticipar necesidades de mantenimiento en flotas de transporte',
      client: 'Cliente: TransMaritime S.A.',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f',
      category: 'ia'
    },
    {
      id: 4,
      title: 'Panel de Control Empresarial',
      description: 'Dashboard interactivo para visualización de KPIs y métricas clave de rendimiento de flota',
      client: 'Cliente: Logística Integral Ltda.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      category: 'bi'
    },
    {
      id: 5,
      title: 'Sistema de Optimización de Rutas',
      description: 'Software para la planificación y optimización de rutas de transporte con ahorro de combustible',
      client: 'Cliente: EcoTrans S.A.',
      image: 'https://images.unsplash.com/photo-1581092921461-7a32b05ae331',
      category: 'logistica'
    },
    {
      id: 6,
      title: 'App de Gestión de Conductores',
      description: 'Aplicación para administración de personal, horarios y cumplimiento de normativas',
      client: 'Cliente: Transportes Rápidos C.A.',
      image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163',
      category: 'rrhh'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('todos');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeCategory === 'todos') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <Layout>
      <section className="pt-24 pb-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-codecima-blue text-lg font-medium mb-2">
              Nuestro Portafolio
            </h2>
            <h1 className="text-4xl font-bold text-white mb-3">
              Proyectos destacados
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubre nuestras soluciones tecnológicas implementadas para clientes en diversos sectores
            </p>
          </motion.div>

          {/* Category filters - updated to match the design */}
          <motion.div 
            className="flex justify-center mb-12 overflow-x-auto pb-2 hide-scrollbar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-nowrap space-x-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`${
                    activeCategory === category.id 
                      ? 'filter-button-active' 
                      : 'filter-button-inactive'
                  } filter-button whitespace-nowrap`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects grid - updated with luminous card style */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                className="overflow-hidden rounded-lg"
              >
                <Card className="h-full flex flex-col card-codecima card-luminous">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-codecima-blue text-white text-xs font-medium px-3 py-1 rounded-full">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </div>
                  </div>
                  <CardContent className="flex flex-col flex-grow p-6 text-left">
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-gray-400 text-xs">{project.client}</span>
                      <Button variant="ghost" size="sm" className="text-codecima-blue hover:text-white hover:bg-codecima-blue/20">
                        Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="bg-codecima-darkblue/30 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              ¿Listo para iniciar tu próximo proyecto?
            </h2>
            <p className="text-gray-400 mb-8">
              Nuestro equipo de expertos está listo para ayudarte a implementar soluciones tecnológicas para tu negocio.
            </p>
            <Button className="btn-codecima">
              <a href="/contacto">Contáctanos ahora</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portafolio;
