
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, X } from 'lucide-react';

const Precios = () => {
  const pricingPlans = [
    {
      name: 'Básico',
      description: 'Para empresas pequeñas que están iniciando',
      price: '250',
      features: [
        { text: 'Hasta 5 usuarios', included: true },
        { text: 'Control de flotas básico', included: true },
        { text: 'Facturación electrónica', included: true },
        { text: 'App móvil limitada', included: true },
        { text: 'Soporte en horario laboral', included: true },
        { text: 'Reportes básicos', included: true },
        { text: 'Integraciones personalizadas', included: false },
        { text: 'Seguimiento GPS avanzado', included: false },
      ],
      highlighted: false,
    },
    {
      name: 'Profesional',
      description: 'Para empresas en crecimiento',
      price: '450',
      features: [
        { text: 'Hasta 15 usuarios', included: true },
        { text: 'Control completo de flotas', included: true },
        { text: 'Facturación electrónica', included: true },
        { text: 'App móvil completa', included: true },
        { text: 'Soporte 24/5', included: true },
        { text: 'Reportes avanzados', included: true },
        { text: 'Integración API limitada', included: true },
        { text: 'Seguimiento GPS en tiempo real', included: true },
      ],
      highlighted: true,
    },
    {
      name: 'Empresarial',
      description: 'Para grandes operaciones',
      price: '950',
      features: [
        { text: 'Usuarios ilimitados', included: true },
        { text: 'Control completo de flotas', included: true },
        { text: 'Facturación electrónica ilimitada', included: true },
        { text: 'App móvil personalizada', included: true },
        { text: 'Soporte 24/7 prioritario', included: true },
        { text: 'Reportes personalizados', included: true },
        { text: 'Integraciones API completas', included: true },
        { text: 'Seguimiento GPS avanzado', included: true },
      ],
      highlighted: false,
    },
  ];

  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-codecima-blue">Nuestros </span>
              <span className="text-white">Precios</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Planes adaptados a las necesidades de tu empresa con la mejor relación calidad-precio del mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`
                  rounded-lg p-6 transition-all
                  ${plan.highlighted 
                    ? 'bg-gradient-to-br from-codecima-blue/20 to-codecima-purple/20 border-2 border-codecima-blue/30 transform md:-translate-y-4' 
                    : 'bg-codecima-darkblue/50 border border-gray-700 hover:border-codecima-blue/20'}
                `}
              >
                {plan.highlighted && (
                  <div className="bg-codecima-blue text-white text-xs font-bold uppercase py-1 px-2 rounded-full inline-block mb-4">
                    Más popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/mes</span>
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
                      ? 'bg-codecima-blue hover:bg-codecima-blue/80' 
                      : 'bg-codecima-darkblue border border-codecima-blue/50 hover:bg-codecima-blue/20'
                  }`}
                >
                  Seleccionar plan
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-codecima-darkblue/50 border border-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">¿Necesitas una solución personalizada?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contáctanos para discutir tus requerimientos específicos y te prepararemos una propuesta a medida para tu empresa.
            </p>
            <Button className="bg-codecima-blue hover:bg-codecima-blue/80">
              Contactar a un asesor
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Precios;
