
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChevronRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Productos = () => {
  const products = [
    {
      title: 'Software para',
      subtitle: 'Transportes de Carga Pesada',
      description: 'La versión de nuestro software para el transporte de carga pesada optimiza la organización y el control de empresas dedicadas a la carga terrestre, simplificando sus operaciones diarias.',
      features: [
        'Optimiza tus procesos',
        'Facturación electrónica',
        'Accede desde cualquier dispositivo',
        'Control de gastos operativos',
        'App Para Android',
        'Alojado en la nube'
      ],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81'
    },
    {
      title: 'Software para',
      subtitle: 'Empresas de Paquetería',
      description: 'Software diseñado para gestionar envíos de manera detallada, ofreciendo control total tanto a la empresa como al cliente que realiza sus encomiendas.',
      features: [
        'Optimiza tus procesos',
        'Facturación electrónica',
        'Accede desde cualquier dispositivo',
        'Control de gastos operativos',
        'App Para Android',
        'Alojado en la nube'
      ],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80
      }
    }
  };

  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-codecima-purple">Softwares</span>
            </h1>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-white">Nuestras </span>
              <span className="text-codecima-blue">Soluciones</span>
            </h2>
          </motion.div>

          <motion.div 
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product, index) => (
              <motion.div 
                key={index} 
                className="grid md:grid-cols-2 gap-8 items-center bg-codecima-navy/90 rounded-lg overflow-hidden border border-codecima-blue/20"
                variants={itemVariants}
              >
                <div className="p-8">
                  <div className="flex items-center mb-3">
                    <Shield className="text-codecima-blue mr-2" size={22} />
                    <h3 className="text-lg font-medium text-codecima-blue">Solución Segura</h3>
                  </div>
                  <h3 className="text-xl font-medium text-codecima-blue mb-1">{product.title}</h3>
                  <h2 className="text-2xl font-bold mb-4 text-white">{product.subtitle}</h2>
                  <p className="text-gray-300 mb-6 text-sm">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button className="btn-codecima">
                      Solicitar Asesoría
                    </Button>
                    
                    <Button variant="outline" className="btn-codecima-outline">
                      Ver Más <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
                
                <div className="relative h-full min-h-[350px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-codecima-navy/90 to-transparent z-10"></div>
                  <img
                    src={product.image}
                    alt={product.subtitle}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-3">
              <span className="text-white">Hablemos de </span>
              <span className="text-codecima-blue">negocios</span>
            </h2>
            <p className="text-codecima-blue font-semibold">Solicita DEMOSTRACIÓN</p>
            <p className="text-gray-400 text-sm mb-8">¡Recibe asesoría de expertos!</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Productos;
