
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Productos = () => {
  const products = [
    {
      title: 'Software de Carga Pesada',
      description: 'Solución completa para empresas de transporte de carga pesada.',
      features: [
        'Control total de flotas',
        'Gestión de mantenimiento',
        'Registro de conductores',
        'Facturación electrónica',
        'Reportes avanzados',
        'Sistema de alerta de vencimientos'
      ],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
    },
    {
      title: 'Software de Paquetería',
      description: 'Gestiona envíos de manera eficiente con nuestra solución integral.',
      features: [
        'Seguimiento en tiempo real',
        'Gestión de rutas inteligente',
        'Control de entregas',
        'Gestión de clientes',
        'Reportes detallados',
        'Integración con API'
      ],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
    },
    {
      title: 'Soluciones personalizadas',
      description: 'Desarrollamos soluciones a medida según las necesidades específicas de tu empresa.',
      features: [
        'Análisis de requerimientos',
        'Desarrollo a medida',
        'Integraciones con sistemas existentes',
        'Acompañamiento continuo',
        'Soporte técnico especializado',
        'Actualizaciones programadas'
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    }
  ];

  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-codecima-blue">Nuestros </span>
              <span className="text-white">Productos</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Soluciones tecnológicas diseñadas específicamente para la industria del transporte, ofreciendo eficiencia y control total de sus operaciones.
            </p>
          </div>

          <div className="space-y-20">
            {products.map((product, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-codecima-blue/20 rounded-lg blur-xl"></div>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="relative rounded-lg w-full h-auto object-cover"
                    />
                  </div>
                </div>
                
                <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <h2 className="text-3xl font-bold mb-4 text-white">{product.title}</h2>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="text-codecima-blue mr-2 mt-1 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="bg-codecima-blue hover:bg-codecima-blue/80">
                    Solicitar información
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Productos;
