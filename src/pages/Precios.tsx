
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CheckCircle, X, Zap, Database, Server, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const categoryData = {
  'diseno-web': {
    title: 'Paquetes Diseño Web',
    subtitle: 'Contrata HOY tu página WEB + HOSTING + DOMINIO',
    plans: [
      {
        id: 'landing-page',
        name: 'Landing Page',
        price: '149',
        highlighted: false,
        description: 'Ideal para profesionales independientes',
        features: [
          { text: '10 Correos Corporativos', included: true },
          { text: 'Diseño Web HTML5', included: true },
          { text: '1 Página', included: true },
          { text: 'SEO Básico - Metadatos', included: true },
          { text: 'Responsive', included: true },
          { text: 'Formulario de Contacto', included: true },
          { text: 'Redes Sociales', included: false },
          { text: 'Catálogo de Productos', included: false },
        ],
      },
      {
        id: 'basico',
        name: 'Básico',
        price: '199',
        highlighted: false,
        description: 'Estudios, consultorías y servicios',
        features: [
          { text: '25 Correos Corporativos', included: true },
          { text: 'Diseño Web HTML5', included: true },
          { text: '5 Páginas', included: true },
          { text: 'SEO Básico - Metadatos', included: true },
          { text: 'Responsive', included: true },
          { text: 'Formulario de Contacto', included: true },
          { text: 'Redes Sociales', included: true },
          { text: 'Catálogo de Productos', included: false },
        ],
      },
      {
        id: 'avanzado',
        name: 'Avanzado',
        price: '499',
        highlighted: true,
        description: 'Web completa y autoadministrable',
        features: [
          { text: '100 Correos Corporativos', included: true },
          { text: 'Diseño Web Autoadministrable', included: true },
          { text: 'Productos, Servicios Ilimitados', included: true },
          { text: 'SEO - Posicionamiento Avanzado', included: true },
          { text: 'Responsive', included: true },
          { text: 'Formulario Inteligente (A/I)', included: true },
          { text: 'Capacitación 5 Video Manual', included: true },
          { text: 'Catálogo de Productos', included: true },
        ],
      },
      {
        id: 'premium',
        name: 'Premium',
        price: '799',
        highlighted: false,
        description: 'Tienda virtual completa',
        features: [
          { text: '150 Correos Corporativos', included: true },
          { text: 'Diseño Web Autoadministrable', included: true },
          { text: 'Tienda Virtual - E-Commerce', included: true },
          { text: 'SEO - Posicionamiento Avanzado', included: true },
          { text: 'Responsive', included: true },
          { text: 'Formulario Inteligente (A/I)', included: true },
          { text: 'Capacitación & Manual', included: true },
          { text: 'Buscador (AJAX)', included: true },
          { text: 'Ventas vía WhatsApp', included: true },
        ],
      },
    ],
  },
  'hosting': {
    title: 'Hosting',
    subtitle: 'Elija su plan de Hosting Veloz y Seguro para WordPress, Joomla y HTML',
    plans: [
      {
        id: 'hosting-premium',
        name: 'HOSTING PREMIUM',
        price: '100',
        highlighted: false,
        description: '1 año Hosting PREMIUM',
        features: [
          { text: 'SuperCacher + SSD', included: true },
          { text: '30-Day Money-Back Guarantee', included: true },
          { text: 'Garantía de devolución del dinero hasta 30 días', included: true },
          { text: 'Soporte técnico 24/7', included: true },
          { text: 'Uptime garantizado 99.9%', included: true },
          { text: 'Backups automáticos', included: true },
        ],
        icons: [
          { name: 'zap', component: Zap, color: 'bg-codecima-purple text-white' },
          { name: 'server', component: Server, color: 'bg-codecima-blue text-white' },
          { name: 'shield', component: Shield, color: 'bg-purple-500 text-white' },
        ]
      },
      {
        id: 'hosting-wordpress',
        name: 'HOSTING WordPress',
        price: '100',
        highlighted: false,
        description: '1 Año Hosting WordPress',
        features: [
          { text: 'LiteSpeed® Cache + SSD', included: true },
          { text: '30-Day Money-Back Guarantee', included: true },
          { text: 'Garantía de devolución del dinero hasta 30 días', included: true },
          { text: 'Soporte técnico 24/7', included: true },
          { text: 'Optimizado para WordPress', included: true },
          { text: 'Actualizaciones automáticas', included: true },
        ],
        icons: [
          { name: 'zap', component: Zap, color: 'bg-codecima-purple text-white' },
          { name: 'database', component: Database, color: 'bg-codecima-blue text-white' },
          { name: 'shield', component: Shield, color: 'bg-purple-500 text-white' },
        ]
      },
    ],
  },
  'logotipos': {
    title: 'Logotipos',
    subtitle: 'Diseños profesionales para tu marca',
    plans: [
      {
        id: 'logo-basico',
        name: 'Logo Básico',
        price: '99',
        highlighted: false,
        description: 'Ideal para emprendedores',
        features: [
          { text: '2 Propuestas de diseño', included: true },
          { text: '2 Revisiones', included: true },
          { text: 'Entrega en 5 días', included: true },
          { text: 'Formato JPG/PNG', included: true },
          { text: 'Formato vectorial', included: false },
          { text: 'Manual de marca', included: false },
        ],
      },
      {
        id: 'logo-profesional',
        name: 'Logo Profesional',
        price: '199',
        highlighted: true,
        description: 'Para pequeñas empresas',
        features: [
          { text: '3 Propuestas de diseño', included: true },
          { text: '3 Revisiones', included: true },
          { text: 'Entrega en 3 días', included: true },
          { text: 'Todos los formatos', included: true },
          { text: 'Formato vectorial', included: true },
          { text: 'Manual de marca básico', included: true },
        ],
      },
      {
        id: 'logo-premium',
        name: 'Logo Premium',
        price: '349',
        highlighted: false,
        description: 'Solución completa de branding',
        features: [
          { text: '5 Propuestas de diseño', included: true },
          { text: 'Revisiones ilimitadas', included: true },
          { text: 'Entrega en 7 días', included: true },
          { text: 'Todos los formatos', included: true },
          { text: 'Manual de marca completo', included: true },
          { text: 'Papelería básica', included: true },
        ],
      },
    ],
  },
  'contenido': {
    title: 'Contenido',
    subtitle: 'Contenido profesional para tu web y redes sociales',
    plans: [
      {
        id: 'contenido-basico',
        name: 'Básico',
        price: '149',
        highlighted: false,
        description: 'Ideal para emprendedores',
        features: [
          { text: '5 publicaciones mensuales', included: true },
          { text: '1 Red social', included: true },
          { text: 'Diseño básico', included: true },
          { text: 'Copywriting', included: true },
          { text: 'Informe mensual', included: false },
          { text: 'Estrategia de contenido', included: false },
        ],
      },
      {
        id: 'contenido-estandar',
        name: 'Estándar',
        price: '299',
        highlighted: true,
        description: 'Para pequeñas empresas',
        features: [
          { text: '12 publicaciones mensuales', included: true },
          { text: '2 Redes sociales', included: true },
          { text: 'Diseño profesional', included: true },
          { text: 'Copywriting avanzado', included: true },
          { text: 'Informe mensual', included: true },
          { text: 'Estrategia de contenido', included: true },
        ],
      },
      {
        id: 'contenido-premium',
        name: 'Premium',
        price: '499',
        highlighted: false,
        description: 'Solución completa de contenido',
        features: [
          { text: '20 publicaciones mensuales', included: true },
          { text: '3 Redes sociales', included: true },
          { text: 'Diseño premium', included: true },
          { text: 'Copywriting profesional', included: true },
          { text: 'Informe semanal', included: true },
          { text: 'Estrategia completa', included: true },
        ],
      },
    ],
  },
};

const Precios = () => {
  const [activeTab, setActiveTab] = useState('diseno-web');
  const navigate = useNavigate();

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

  const handlePlanClick = (categoryId, planId) => {
    navigate(`/precios/${categoryId}/${planId}`);
  };

  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-3 text-white">
              Nuestros <span className="text-codecima-purple">Precios</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ofrecemos soluciones para todos los presupuestos. Contrata HOY tu página WEB + 
              HOSTING + DOMINIO. ¡Ahora con Chatbot GRATIS!
            </p>
          </motion.div>

          <Tabs 
            defaultValue="diseno-web" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-codecima-darkblue/50 border border-codecima-blue/20 p-1">
                <TabsTrigger 
                  value="diseno-web" 
                  className="data-[state=active]:bg-codecima-blue data-[state=active]:text-white"
                >
                  Diseño Web
                </TabsTrigger>
                <TabsTrigger 
                  value="hosting" 
                  className="data-[state=active]:bg-codecima-blue data-[state=active]:text-white"
                >
                  Hosting
                </TabsTrigger>
                <TabsTrigger 
                  value="logotipos" 
                  className="data-[state=active]:bg-codecima-blue data-[state=active]:text-white"
                >
                  Logotipos
                </TabsTrigger>
                <TabsTrigger 
                  value="contenido" 
                  className="data-[state=active]:bg-codecima-blue data-[state=active]:text-white"
                >
                  Contenido
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(categoryData).map(([categoryId, category]) => (
              <TabsContent key={categoryId} value={categoryId} className="space-y-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
                  <p className="text-gray-400">{category.subtitle}</p>
                </div>

                <motion.div 
                  className={`grid ${categoryId === 'hosting' ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-4'} gap-8 ${
                    categoryId === 'logotipos' || categoryId === 'contenido' ? 'justify-items-center max-w-5xl mx-auto' : ''
                  }`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {category.plans.map((plan) => (
                    <motion.div 
                      key={plan.id} 
                      variants={itemVariants}
                      onClick={() => handlePlanClick(categoryId, plan.id)}
                      className={`cursor-pointer ${categoryId === 'logotipos' || categoryId === 'contenido' ? 'w-full max-w-md' : ''}`}
                    >
                      {categoryId === 'hosting' ? (
                        <Card className="overflow-hidden card-luminous h-full">
                          <div className="bg-gradient-to-br from-codecima-navy to-codecima-darkblue p-6 text-center">
                            <h3 className="text-xl font-bold text-white mb-4 bg-codecima-blue inline-block px-3 py-1 rounded">{plan.name}</h3>
                            <div className="flex justify-center space-x-4 my-4">
                              {plan.icons && plan.icons.map((icon, i) => (
                                <div key={i} className={`${icon.color} p-3 rounded-full`}>
                                  <icon.component size={20} />
                                </div>
                              ))}
                            </div>
                            <div className="text-gray-300 mb-2">{plan.description}</div>
                          </div>
                          <div className="p-6 text-center bg-white">
                            <div className="mb-4">
                              <span className="text-3xl font-bold text-codecima-darkblue">USD {plan.price}</span>
                            </div>
                            <div className="space-y-3 mb-6">
                              {plan.features.slice(0, 3).map((feature, i) => (
                                <div key={i} className="flex items-start justify-center">
                                  <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
                                  <span className="text-gray-700 text-sm">{feature.text}</span>
                                </div>
                              ))}
                            </div>
                            <Button className="bg-codecima-blue hover:bg-codecima-blue/80 w-full">
                              Contratar Ahora
                            </Button>
                          </div>
                        </Card>
                      ) : (
                        <Card className={`h-full flex flex-col ${
                          plan.highlighted 
                            ? 'card-luminous border-codecima-blue/60 relative before:absolute before:inset-0 before:bg-codecima-blue/5 before:z-0 before:rounded-lg shadow-[0_0_25px_rgba(53,182,255,0.25)]' 
                            : 'card-codecima'
                        }`}>
                          {plan.highlighted && (
                            <div className="absolute -top-3 left-0 right-0 mx-auto w-max z-10 bg-codecima-blue text-white text-xs font-bold uppercase py-1.5 px-4 rounded-full shadow-lg border border-codecima-blue/80 animate-pulse">
                              Más popular
                            </div>
                          )}
                          
                          <CardContent className="p-6 flex-grow relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-gray-400 mb-6">{plan.description}</p>
                            
                            <div className="flex items-baseline mb-6">
                              <span className="text-4xl font-bold text-white">USD {plan.price}</span>
                            </div>
                            
                            <div className="space-y-3 mb-8">
                              {plan.features.map((feature, i) => (
                                <div key={i} className="flex items-start">
                                  {feature.included ? (
                                    <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
                                  ) : (
                                    <X className="text-gray-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                                  )}
                                  <span className={feature.included ? "text-gray-300" : "text-gray-500"}>
                                    {feature.text}
                                  </span>
                                </div>
                              ))}
                            </div>
                            
                            <Button 
                              className={`w-full ${
                                plan.highlighted 
                                  ? 'bg-codecima-blue hover:bg-codecima-blue/80 text-white shadow-[0_0_15px_rgba(53,182,255,0.3)]' 
                                  : 'bg-codecima-darkblue border border-codecima-blue/50 hover:bg-codecima-blue/20'
                              }`}
                            >
                              ¡Lo quiero! - 10% DCTO
                            </Button>
                          </CardContent>
                        </Card>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 text-center bg-codecima-darkblue/50 border border-codecima-blue/30 rounded-lg p-8 card-luminous">
            <div className="flex items-center justify-center mb-4">
              <Shield className="text-codecima-blue mr-2" size={24} />
              <h2 className="text-2xl font-bold text-white">Garantía de satisfacción</h2>
            </div>
            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="flex items-start justify-center">
                <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">Soporte técnico 24/7 incluido en todos los planes</span>
              </div>
              <div className="flex items-start justify-center">
                <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">Si no estás satisfecho, te devolvemos tu dinero en los primeros 30 días</span>
              </div>
              <div className="flex items-start justify-center">
                <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-gray-300">Upgrades y actualizaciones gratuitas durante el primer año</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Precios;

