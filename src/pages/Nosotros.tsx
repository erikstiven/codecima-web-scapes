
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Users, Code, Award, Clock, Globe, Zap } from 'lucide-react';

const Nosotros = () => {
  const stats = [
    { label: 'Años de experiencia', value: '8+' },
    { label: 'Clientes satisfechos', value: '100+' },
    { label: 'Proyectos completados', value: '150+' },
    { label: 'Especialistas', value: '25+' }
  ];

  const values = [
    { 
      icon: <Users size={24} />, 
      title: 'Orientación al cliente', 
      description: 'Ponemos al cliente en el centro de todo lo que hacemos, adaptándonos a sus necesidades.' 
    },
    { 
      icon: <Code size={24} />, 
      title: 'Excelencia técnica', 
      description: 'Nos comprometemos con el más alto estándar de calidad en nuestras soluciones.' 
    },
    { 
      icon: <Award size={24} />, 
      title: 'Innovación constante', 
      description: 'Buscamos constantemente nuevas formas de mejorar y ofrecer soluciones de vanguardia.' 
    },
    { 
      icon: <Clock size={24} />, 
      title: 'Compromiso con los plazos', 
      description: 'Entregamos en el tiempo acordado, respetando los cronogramas establecidos.' 
    },
    { 
      icon: <Globe size={24} />, 
      title: 'Responsabilidad social', 
      description: 'Contribuimos positivamente a la sociedad a través de nuestras soluciones e iniciativas.' 
    },
    { 
      icon: <Zap size={24} />, 
      title: 'Agilidad y adaptabilidad', 
      description: 'Nos adaptamos rápidamente a los cambios del mercado y a las necesidades de nuestros clientes.' 
    }
  ];

  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                <span className="text-white">Sobre </span>
                <span className="text-codecima-blue">CodeCima</span>
              </h1>
              <p className="text-gray-300 mb-6">
                Somos una empresa peruana especializada en el desarrollo de software para el sector de transporte y logística. Desde 2015, nos hemos dedicado a crear soluciones tecnológicas que transforman la manera en que las empresas gestionan sus operaciones.
              </p>
              <p className="text-gray-300">
                Nuestra misión es potenciar el crecimiento de las empresas de transporte a través de tecnología innovadora, simplificando procesos complejos y aumentando su eficiencia operativa.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-codecima-blue/20 rounded-lg blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Equipo de CodeCima"
                className="relative rounded-lg w-full h-auto object-cover border border-codecima-blue/30"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-codecima-darkblue rounded-lg p-6 text-center border border-codecima-blue/30 hover:border-codecima-blue/60 transition-all">
                <div className="text-3xl font-bold text-codecima-blue mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-white">Nuestros </span>
                <span className="text-codecima-blue">Valores</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Los principios que guían nuestro trabajo y definen nuestra cultura empresarial.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-codecima-darkblue rounded-lg p-6 border border-codecima-blue/30 hover:border-codecima-blue/60 transition-all group">
                  <div className="text-codecima-blue mb-4 p-3 bg-codecima-blue/10 rounded-lg inline-block group-hover:bg-codecima-blue/20 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-white">Nuestra </span>
                <span className="text-codecima-blue">Historia</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                El camino que hemos recorrido hasta convertirnos en líderes en soluciones tecnológicas para el transporte.
              </p>
            </div>

            <div className="relative border-l border-codecima-blue/50 pl-8 ml-4 space-y-10">
              <div className="relative">
                <div className="absolute -left-12 mt-1.5 h-7 w-7 rounded-full border-2 border-codecima-blue bg-codecima-darkblue flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-codecima-blue"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">2015</h3>
                  <h4 className="text-codecima-blue font-semibold mb-2">Fundación de CodeCima</h4>
                  <p className="text-gray-400">Comenzamos nuestro viaje con la visión de transformar el sector del transporte a través de soluciones tecnológicas innovadoras.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-12 mt-1.5 h-7 w-7 rounded-full border-2 border-codecima-blue bg-codecima-darkblue flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-codecima-blue"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">2017</h3>
                  <h4 className="text-codecima-blue font-semibold mb-2">Primer software de carga pesada</h4>
                  <p className="text-gray-400">Lanzamos nuestra primera versión del software especializado para empresas de transporte de carga pesada.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-12 mt-1.5 h-7 w-7 rounded-full border-2 border-codecima-blue bg-codecima-darkblue flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-codecima-blue"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">2019</h3>
                  <h4 className="text-codecima-blue font-semibold mb-2">Expansión a paquetería</h4>
                  <p className="text-gray-400">Ampliamos nuestra oferta con soluciones especializadas para empresas de paquetería y mensajería.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-12 mt-1.5 h-7 w-7 rounded-full border-2 border-codecima-blue bg-codecima-darkblue flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-codecima-blue"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">2021</h3>
                  <h4 className="text-codecima-blue font-semibold mb-2">Integración con GPS y app móvil</h4>
                  <p className="text-gray-400">Incorporamos tecnología GPS y lanzamos nuestra aplicación móvil para mejorar la experiencia de nuestros clientes.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-12 mt-1.5 h-7 w-7 rounded-full border-2 border-codecima-blue bg-codecima-darkblue flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-codecima-blue"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">2023</h3>
                  <h4 className="text-codecima-blue font-semibold mb-2">Inteligencia de negocios</h4>
                  <p className="text-gray-400">Implementamos módulos de BI para ofrecer análisis avanzados y reportes en tiempo real a nuestros clientes.</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-12 mt-1.5 h-7 w-7 rounded-full border-2 border-codecima-blue bg-codecima-darkblue flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-codecima-blue"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">2025</h3>
                  <h4 className="text-codecima-blue font-semibold mb-2">El futuro</h4>
                  <p className="text-gray-400">Seguimos innovando y expandiendo nuestras soluciones para satisfacer las necesidades cambiantes del sector.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
