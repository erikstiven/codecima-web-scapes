
import React from 'react';
import Layout from '@/components/layout/Layout';

const Portafolio = () => {
  const projects = [
    {
      title: 'Sistema de Logística para TransNorte',
      description: 'Implementación de un sistema completo para la gestión de flotas y seguimiento de envíos.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      category: 'Carga Pesada'
    },
    {
      title: 'Plataforma de Paquetería EnviosYa',
      description: 'Desarrollo de plataforma integrada con seguimiento en tiempo real para empresa de paquetería.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      category: 'Paquetería'
    },
    {
      title: 'Sistema Integral para LogisTruck',
      description: 'Solución completa que incluye módulos de facturación, GPS y mantenimiento preventivo.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      category: 'Carga Pesada'
    },
    {
      title: 'Portal de Cliente para FastDelivery',
      description: 'Portal de autoservicio para clientes de empresa de transporte de paquetería.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      category: 'Paquetería'
    },
    {
      title: 'App Móvil para Conductores de MegaTransport',
      description: 'Aplicación móvil para conductores con registro de actividades y comunicación directa.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      category: 'Carga Pesada'
    },
    {
      title: 'Sistema de Ruteo Inteligente ExpressBox',
      description: 'Algoritmo de optimización de rutas para empresa de paquetería con alta demanda.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      category: 'Paquetería'
    }
  ];

  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-white">Nuestro </span>
              <span className="text-codecima-blue">Portafolio</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Descubre algunos de nuestros casos de éxito implementando soluciones tecnológicas para empresas de transporte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-codecima-darkblue/50 rounded-lg overflow-hidden border border-codecima-blue/10 hover:border-codecima-blue/30 transition-all group">
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-codecima-blue text-white text-xs font-medium px-2 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portafolio;
