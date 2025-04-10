
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ChevronRight, Shield, Smartphone, Database, Server, Clock, Zap, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Product {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: Feature[];
  image: string;
  color: string;
}

const Productos = () => {
  const products: Product[] = [
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
      benefits: [
        {
          title: 'Rendimiento Óptimo',
          description: 'Sistema diseñado para manejar grandes volúmenes de datos sin pérdida de rendimiento.',
          icon: Zap
        },
        {
          title: 'Acceso móvil',
          description: 'Aplicación móvil para conductores y personal en ruta con actualizaciones en tiempo real.',
          icon: Smartphone
        },
        {
          title: 'Datos seguros',
          description: 'Seguridad y cifrado de datos para proteger la información de tu empresa y clientes.',
          icon: Shield
        },
        {
          title: 'En la nube',
          description: 'Alojamiento en la nube para acceso desde cualquier ubicación y dispositivo.',
          icon: Database
        }
      ],
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      color: 'codecima-blue'
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
      benefits: [
        {
          title: 'Tiempo real',
          description: 'Seguimiento en tiempo real de paquetes con actualizaciones automáticas para clientes.',
          icon: Clock
        },
        {
          title: 'App integrada',
          description: 'Aplicación móvil para repartidores con firma digital y comprobante de entrega.',
          icon: Smartphone
        },
        {
          title: 'Alta disponibilidad',
          description: 'Infraestructura de alta disponibilidad para operaciones ininterrumpidas.',
          icon: Server
        },
        {
          title: 'Máxima seguridad',
          description: 'Protocolos de seguridad avanzados para proteger datos sensibles de envíos.',
          icon: Shield
        }
      ],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      color: 'codecima-purple'
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
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
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ofrecemos soluciones tecnológicas especializadas para optimizar la gestión y las operaciones de tu empresa.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-codecima-darkblue rounded-xl border-2 border-codecima-blue/50 hover:border-codecima-blue/80 transition-all overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 md:p-10">
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className={`inline-block bg-${product.color}/10 p-2 rounded-lg mb-3`}>
                        <Shield className={`text-${product.color}`} size={22} />
                      </div>
                      <h3 className="text-xl font-medium text-codecima-blue mb-1">{product.title}</h3>
                      <h2 className="text-3xl font-bold mb-4 text-white">{product.subtitle}</h2>
                      <p className="text-gray-300 mb-8">{product.description}</p>
                    </motion.div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {product.features.map((feature, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-start"
                          variants={fadeInUp}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          custom={i * 0.1}
                        >
                          <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button className="bg-codecima-blue hover:bg-codecima-blue/80 text-white">
                        Solicitar Asesoría
                      </Button>
                      
                      <Button variant="outline" className="border-codecima-blue/50 text-white hover:bg-codecima-blue/10">
                        Ver Más <ChevronRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative h-full min-h-[350px] lg:min-h-[500px]">
                    {/* Removed the gradient overlay so images are fully visible */}
                    <img
                      src={product.image}
                      alt={product.subtitle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="p-8 md:p-10 border-t-2 border-codecima-blue/20">
                  <h3 className="text-xl font-bold text-white mb-6">Beneficios principales</h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    {product.benefits.map((benefit, i) => (
                      <motion.div 
                        key={i}
                        className="bg-codecima-darkblue/50 border border-codecima-blue/30 rounded-lg p-5 hover:border-codecima-blue/60 transition-all cursor-pointer"
                        whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0, 117, 255, 0.2)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="bg-codecima-blue/10 p-3 rounded-lg inline-block mb-3">
                          <benefit.icon className="text-codecima-blue" size={20} />
                        </div>
                        <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                        <p className="text-gray-400 text-sm">{benefit.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-20 text-center p-10 bg-codecima-darkblue border-2 border-codecima-blue/50 rounded-xl hover:border-codecima-blue/80 transition-all mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-3">
              <span className="text-white">Hablemos de </span>
              <span className="text-codecima-blue">negocios</span>
            </h2>
            <p className="text-codecima-blue font-semibold">Solicita DEMOSTRACIÓN</p>
            <p className="text-gray-400 text-sm mb-8">¡Recibe asesoría de expertos!</p>
            
            <Button 
              size="lg" 
              className="bg-codecima-purple hover:bg-codecima-purple/80 text-white"
            >
              Agendar una reunión
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Productos;
