import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ChevronLeft, Shield, Zap, Database, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// This is the same data as in Precios.tsx - in a real app, this would be centralized in a data store or API
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
        fullDescription: `
          <p>Nuestro plan Landing Page es perfecto para profesionales independientes que necesitan establecer presencia en línea. Con este plan, obtendrás:</p>
          
          <p>Una página web moderna y atractiva diseñada para convertir visitantes en clientes. Incluye un formulario de contacto para que tus clientes puedan comunicarse contigo fácilmente.</p>
          
          <p>Tu sitio web estará optimizado para dispositivos móviles gracias a nuestro diseño responsive, y además incluimos configuración SEO básica para mejorar tu visibilidad en los motores de búsqueda.</p>
          
          <p>El plan incluye 10 cuentas de correo corporativo con tu dominio personalizado, lo que dará una imagen profesional a tu negocio.</p>
        `,
        faqs: [
          {
            question: '¿Cuánto tiempo toma implementar este plan?',
            answer: 'El tiempo estimado de entrega para el plan Landing Page es de 5-7 días hábiles desde la aprobación del diseño.'
          },
          {
            question: '¿Puedo agregar más páginas en el futuro?',
            answer: 'Sí, puedes actualizar tu plan en cualquier momento o solicitar páginas adicionales con un costo extra.'
          },
          {
            question: '¿El hosting y dominio están incluidos?',
            answer: 'Sí, este plan incluye hosting y un dominio .com por el primer año.'
          }
        ]
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
        fullDescription: `
          <p>Nuestro plan Básico es perfecto para estudios, consultorías y servicios que necesitan establecer presencia en línea. Con este plan, obtendrás:</p>
          
          <p>Una página web moderna y atractiva diseñada para convertir visitantes en clientes. Incluye un formulario de contacto para que tus clientes puedan comunicarse contigo fácilmente.</p>
          
          <p>Tu sitio web estará optimizado para dispositivos móviles gracias a nuestro diseño responsive, y además incluimos configuración SEO básica para mejorar tu visibilidad en los motores de búsqueda.</p>
          
          <p>El plan incluye 25 cuentas de correo corporativo con tu dominio personalizado, lo que dará una imagen profesional a tu negocio.</p>
        `,
        faqs: [
          {
            question: '¿Cuánto tiempo toma implementar este plan?',
            answer: 'El tiempo estimado de entrega para el plan Básico es de 7-10 días hábiles desde la aprobación del diseño.'
          },
          {
            question: '¿Puedo agregar más páginas en el futuro?',
            answer: 'Sí, puedes actualizar tu plan en cualquier momento o solicitar páginas adicionales con un costo extra.'
          },
          {
            question: '¿El hosting y dominio están incluidos?',
            answer: 'Sí, este plan incluye hosting y un dominio .com por el primer año.'
          }
        ]
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
        fullDescription: `
          <p>Nuestro plan Avanzado es perfecto para empresas que necesitan una web completa y autoadministrable. Con este plan, obtendrás:</p>
          
          <p>Una página web moderna y atractiva diseñada para convertir visitantes en clientes. Incluye un formulario de contacto para que tus clientes puedan comunicarse contigo fácilmente.</p>
          
          <p>Tu sitio web estará optimizado para dispositivos móviles gracias a nuestro diseño responsive, y además incluimos configuración SEO básica para mejorar tu visibilidad en los motores de búsqueda.</p>
          
          <p>El plan incluye 100 cuentas de correo corporativo con tu dominio personalizado, lo que dará una imagen profesional a tu negocio.</p>
        `,
        faqs: [
          {
            question: '¿Cuánto tiempo toma implementar este plan?',
            answer: 'El tiempo estimado de entrega para el plan Avanzado es de 10-14 días hábiles desde la aprobación del diseño.'
          },
          {
            question: '¿Puedo agregar más páginas en el futuro?',
            answer: 'Sí, puedes actualizar tu plan en cualquier momento o solicitar páginas adicionales con un costo extra.'
          },
          {
            question: '¿El hosting y dominio están incluidos?',
            answer: 'Sí, este plan incluye hosting y un dominio .com por el primer año.'
          }
        ]
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
        fullDescription: `
          <p>Nuestro plan Premium es perfecto para empresas que necesitan una tienda virtual completa. Con este plan, obtendrás:</p>
          
          <p>Una página web moderna y atractiva diseñada para convertir visitantes en clientes. Incluye un formulario de contacto para que tus clientes puedan comunicarse contigo fácilmente.</p>
          
          <p>Tu sitio web estará optimizado para dispositivos móviles gracias a nuestro diseño responsive, y además incluimos configuración SEO básica para mejorar tu visibilidad en los motores de búsqueda.</p>
          
          <p>El plan incluye 150 cuentas de correo corporativo con tu dominio personalizado, lo que dará una imagen profesional a tu negocio.</p>
        `,
        faqs: [
          {
            question: '¿Cuánto tiempo toma implementar este plan?',
            answer: 'El tiempo estimado de entrega para el plan Premium es de 14-21 días hábiles desde la aprobación del diseño.'
          },
          {
            question: '¿Puedo agregar más páginas en el futuro?',
            answer: 'Sí, puedes actualizar tu plan en cualquier momento o solicitar páginas adicionales con un costo extra.'
          },
          {
            question: '¿El hosting y dominio están incluidos?',
            answer: 'Sí, este plan incluye hosting y un dominio .com por el primer año.'
          }
        ]
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
        ],
        fullDescription: `
          <p>Nuestro HOSTING PREMIUM está diseñado para ofrecer el máximo rendimiento para tus aplicaciones web. Utilizamos tecnología SuperCacher + SSD para garantizar velocidades de carga óptimas.</p>
          
          <p>Características destacadas:</p>
          
          <ul>
            <li>Almacenamiento SSD de alta velocidad</li>
            <li>Panel de control intuitivo</li>
            <li>Certificado SSL gratuito</li>
            <li>Backups automáticos diarios</li>
            <li>Soporte técnico 24/7</li>
            <li>99.9% de uptime garantizado</li>
          </ul>
          
          <p>Ideal para sitios web de empresas, tiendas online y aplicaciones web que requieren alto rendimiento.</p>
        `,
        faqs: [
          {
            question: '¿Qué es SuperCacher?',
            answer: 'SuperCacher es nuestra tecnología propietaria de almacenamiento en caché que mejora significativamente la velocidad de carga de tu sitio web al guardar copias de los archivos estáticos y contenido dinámico.'
          },
          {
            question: '¿Puedo migrar mi sitio web actual a este hosting?',
            answer: 'Sí, ofrecemos migración gratuita de tu sitio web actual a nuestros servidores.'
          },
          {
            question: '¿Cuántas visitas mensuales soporta?',
            answer: 'Este plan está optimizado para manejar hasta 100,000 visitas mensuales sin afectar el rendimiento.'
          }
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
        ],
        fullDescription: `
          <p>Nuestro HOSTING WordPress está optimizado para ofrecer el máximo rendimiento para tus sitios web de WordPress. Utilizamos tecnología LiteSpeed® Cache + SSD para garantizar velocidades de carga óptimas.</p>
          
          <p>Características destacadas:</p>
          
          <ul>
            <li>Almacenamiento SSD de alta velocidad</li>
            <li>Panel de control intuitivo</li>
            <li>Certificado SSL gratuito</li>
            <li>Backups automáticos diarios</li>
            <li>Soporte técnico 24/7</li>
            <li>Optimizado para WordPress</li>
          </ul>
          
          <p>Ideal para sitios web de empresas, tiendas online y aplicaciones web que requieren alto rendimiento.</p>
        `,
        faqs: [
          {
            question: '¿Qué es LiteSpeed® Cache?',
            answer: 'LiteSpeed® Cache es nuestra tecnología propietaria de almacenamiento en caché que mejora significativamente la velocidad de carga de tu sitio web al guardar copias de los archivos estáticos y contenido dinámico.'
          },
          {
            question: '¿Puedo migrar mi sitio web actual a este hosting?',
            answer: 'Sí, ofrecemos migración gratuita de tu sitio web actual a nuestros servidores.'
          },
          {
            question: '¿Cuántas visitas mensuales soporta?',
            answer: 'Este plan está optimizado para manejar hasta 100,000 visitas mensuales sin afectar el rendimiento.'
          }
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
        fullDescription: `
          <p>Nuestro plan Logo Básico es perfecto para emprendedores que necesitan un logo profesional para su marca. Con este plan, obtendrás:</p>
          
          <p>2 propuestas de diseño para que elijas la que más te guste. Incluye 2 revisiones para que puedas hacer los cambios que necesites.</p>
          
          <p>El logo se entrega en formato JPG/PNG para que puedas usarlo en tu web y redes sociales.</p>
        `,
        faqs: [
          {
            question: '¿Cuánto tiempo toma implementar este plan?',
            answer: 'El tiempo estimado de entrega para el plan Logo Básico es de 5 días hábiles desde la aprobación del diseño.'
          },
          {
            question: '¿Puedo solicitar más propuestas de diseño?',
            answer: 'Sí, puedes solicitar propuestas adicionales con un costo extra.'
          },
          {
            question: '¿El formato vectorial está incluido?',
            answer: 'No, el formato vectorial no está incluido en este plan. Puedes solicitarlo con un costo extra.'
          }
        ]
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
        fullDescription: `
          <p>Nuestro plan Logo Profesional es perfecto para pequeñas empresas que necesitan un logo profesional para su marca. Con este plan, obtendrás:</p>
          
          <p>3 propuestas de diseño para que elijas la que más te guste. Incluye 3 revisiones para que puedas hacer los cambios que necesites.</p>
          
          <p>El logo se entrega en todos los formatos para que puedas usarlo en tu web, redes sociales y papelería.</p>
        `,
        faqs: [
          {
            question: '¿Cuánto tiempo toma implementar este plan?',
            answer: 'El tiempo estimado de entrega para el plan Logo Profesional es de 3 días hábiles desde la aprobación del diseño.'
          },
          {
            question: '¿Puedo solicitar más propuestas de diseño?',
            answer: 'Sí, puedes solicitar propuestas adicionales con un costo extra.'
          },
          {
            question: '¿El manual de marca está incluido?',
            answer: 'Sí, este plan incluye un manual de marca básico.'
          }
        ]
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
        fullDescription: `
          <p>Nuestro plan Logo Premium es perfecto para empresas que necesitan una solución completa de branding. Con este plan, obtendrás:</p>
          
          <p>5 propuestas de diseño para que elijas la que más te guste. Incluye revisiones ilimitadas para que puedas hacer los cambios que necesites.</p>
          
          <p>El logo se entrega en todos los formatos para que puedas usarlo en tu web, redes sociales y papelería.</p>
        `,
        faqs: [
          {
            question: '¿Cuánto tiempo toma implementar este plan?',
            answer: 'El tiempo estimado de entrega para el plan Logo Premium es de 7 días hábiles desde la aprobación del diseño.'
          },
          {
            question: '¿Puedo solicitar más propuestas de diseño?',
            answer: 'Sí, puedes solicitar propuestas adicionales con un costo extra.'
          },
          {
            question: '¿La papelería está incluida?',
            answer: 'Sí, este plan incluye papelería básica.'
          }
        ]
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
        fullDescription: `
          <p>Nuestro plan Contenido Básico es perfecto para emprendedores que necesitan contenido profesional para su web y redes sociales. Con este plan, obtendrás:</p>
          
          <p>5 publicaciones mensuales para tu red social. Incluye diseño básico y copywriting.</p>
        `,
        faqs: [
          {
            question: '¿Cuánto tiempo toma implementar este plan?',
            answer: 'El tiempo estimado de entrega para el plan Contenido Básico es de 5 días hábiles desde la aprobación del diseño.'
          },
          {
            question: '¿Puedo solicitar más publicaciones?',
            answer: 'Sí, puedes solicitar publicaciones adicionales con un costo extra.'
          },
          {
            question: '¿El informe mensual está incluido?',
            answer: 'No, el informe mensual no está incluido en este plan. Puedes solicitarlo con un costo extra.'
          }
        ]
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
        fullDescription: `
          <p>Nuestro plan Contenido Estándar es perfecto para pequeñas empresas que necesitan contenido profesional para su web y redes sociales. Con este plan, obtendrás:</p>
          
          <p>12 publicaciones mensuales para tus redes sociales. Incluye diseño profesional y copywriting avanzado.</p>
        `,
        faqs: [
          {
            question: '¿Cuánto tiempo toma implementar este plan?',
            answer: 'El tiempo estimado de entrega para el plan Contenido Estándar es de 7 días hábiles desde la aprobación del diseño.'
          },
          {
            question: '¿Puedo solicitar más publicaciones?',
            answer: 'Sí, puedes solicitar publicaciones adicionales con un costo extra.'
          },
          {
            question: '¿La estrategia de contenido está incluida?',
            answer: 'Sí, este plan incluye una estrategia de contenido.'
          }
        ]
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
        fullDescription: `
          <p>Nuestro plan Contenido Premium es perfecto para empresas que necesitan una solución completa de contenido para su web y redes sociales. Con este plan, obtendrás:</p>
          
          <p>20 publicaciones mensuales para tus redes sociales. Incluye diseño premium y copywriting profesional.</p>
        `,
        faqs: [
          {
            question: '¿Cuánto tiempo toma implementar este plan?',
            answer: 'El tiempo estimado de entrega para el plan Contenido Premium es de 10 días hábiles desde la aprobación del diseño.'
          },
          {
            question: '¿Puedo solicitar más publicaciones?',
            answer: 'Sí, puedes solicitar publicaciones adicionales con un costo extra.'
          },
          {
            question: '¿La estrategia de contenido está incluida?',
            answer: 'Sí, este plan incluye una estrategia de contenido completa.'
          }
        ]
      },
    ],
  },
};

// Sample gallery images for carousel
const galleryImages = [
  { url: "/placeholder.svg", alt: "Sample design 1" },
  { url: "/placeholder.svg", alt: "Sample design 2" },
  { url: "/placeholder.svg", alt: "Sample design 3" },
  { url: "/lovable-uploads/9e068d17-4f09-4dfa-b60d-65d4e4b1a124.png", alt: "Sample design 4" },
];

const PlanDetails = () => {
  const { categoryId, planId } = useParams();
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryId && planId) {
      const category = categoryData[categoryId];
      if (category) {
        const selectedPlan = category.plans.find(p => p.id === planId);
        if (selectedPlan) {
          setPlan({ ...selectedPlan, categoryTitle: category.title });
          setLoading(false);
          return;
        }
      }
      // If category or plan not found
      navigate('/precios');
      toast.error('Plan no encontrado');
    }
  }, [categoryId, planId, navigate]);

  if (loading) {
    return (
      <Layout>
        <div className="pt-28 pb-16 flex justify-center items-center min-h-[60vh]">
          <div className="animate-pulse text-codecima-blue text-xl">Cargando información del plan...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button 
              variant="outline" 
              className="mb-6 bg-codecima-darkblue border-codecima-blue/40 text-gray-300 hover:bg-codecima-blue/20"
              onClick={() => navigate('/precios')}
            >
              <ChevronLeft size={16} className="mr-2" />
              Volver a Precios
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-2">
                <span className="text-codecima-blue">{plan.name}</span>
              </h1>
              <div className="flex items-center">
                <p className="text-gray-400">{plan.categoryTitle}</p>
                <div className="ml-3 text-2xl font-bold text-white">USD {plan.price}</div>
              </div>
            </motion.div>
          </div>

          {/* Gallery Carousel Card */}
          <Card className="card-luminous bg-codecima-darkblue/70 mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Galería de ejemplos</h2>
              
              <Carousel className="w-full">
                <CarouselContent>
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="overflow-hidden border-codecima-blue/20">
                          <CardContent className="flex aspect-video items-center justify-center p-0">
                            <img 
                              src={image.url} 
                              alt={image.alt} 
                              className="w-full h-full object-cover"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-4">
                  <CarouselPrevious className="static translate-y-0 bg-codecima-darkblue border-codecima-blue/40 text-white hover:bg-codecima-blue/30" />
                  <CarouselNext className="static translate-y-0 bg-codecima-darkblue border-codecima-blue/40 text-white hover:bg-codecima-blue/30" />
                </div>
              </Carousel>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="card-luminous bg-codecima-darkblue/70 mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">Descripción del Plan</h2>
                  <div 
                    className="text-gray-300 prose prose-invert prose-blue max-w-none"
                    dangerouslySetInnerHTML={{ __html: plan.fullDescription }}
                  />
                </CardContent>
              </Card>

              {plan.faqs && (
                <Card className="card-luminous bg-codecima-darkblue/70">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Preguntas Frecuentes</h2>
                    <div className="space-y-4">
                      {plan.faqs.map((faq, index) => (
                        <div key={index}>
                          <h3 className="text-codecima-blue font-medium mb-1">{faq.question}</h3>
                          <p className="text-gray-300">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div>
              <Card className="card-luminous bg-codecima-darkblue/70 sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-4">Características</h2>
                  
                  {plan.icons && (
                    <div className="flex justify-around mb-4">
                      {plan.icons.map((icon, i) => (
                        <div key={i} className={`${icon.color} p-2 rounded-full`}>
                          <icon.component size={20} />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-codecima-blue hover:bg-codecima-blue/80 mb-3">
                    Contratar Ahora
                  </Button>
                  
                  <Button variant="outline" className="w-full border-codecima-blue/50 text-white hover:bg-codecima-blue/10">
                    Solicitar Más Información
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlanDetails;
