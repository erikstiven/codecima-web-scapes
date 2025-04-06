
import React from 'react';
import { Smartphone, Settings, Activity, FileCheck, Clock, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Smartphone />,
      title: 'App Android',
      description: 'La aplicación móvil permite revisar y experimentar fácil en dispositivos Android, conectándose a sus locutores'
    },
    {
      icon: <Settings />,
      title: 'Sistema adaptable',
      description: 'Adaptable a los diversos necesidades de tus clientes, integrando nuevas funcionalidades y personalización'
    },
    {
      icon: <Activity />,
      title: 'Integración con GPS',
      description: 'Ofrecemos seguimiento mediante tecnología de GPS mediante APIs para el seguimiento en tiempo real de vehículos'
    },
    {
      icon: <FileCheck />,
      title: 'Facturación Electrónica',
      description: 'Emite facturas electrónicas desde nuestro facturador e integra con servicios para cobrarlos en línea'
    },
    {
      icon: <Clock />,
      title: 'Soporte 24/7',
      description: 'Contamos con un equipo dedicado para resolver dudas y problemas en cualquier momento que lo necesites'
    },
    {
      icon: <BarChart />,
      title: 'Reportes en tiempo real',
      description: 'Visualiza datos actualizados al instante para tomar decisiones basadas en información precisa del negocio'
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-radial from-codecima-blue/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-white">Fortalece tu empresa con estas </span>
            <span className="text-codecima-blue">Herramientas</span>
          </h2>
          <p className="text-gray-400">Hechas para incrementar la productividad de tu empresa</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-codecima-darkblue/50 border border-codecima-blue/10 hover:border-codecima-blue/30 transition-all hover:bg-codecima-darkblue/70 group">
              <div className="text-codecima-blue mb-4 p-3 bg-codecima-blue/10 rounded-lg inline-block group-hover:bg-codecima-blue/20 transition-colors">
                {React.cloneElement(feature.icon, { size: 24 })}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
