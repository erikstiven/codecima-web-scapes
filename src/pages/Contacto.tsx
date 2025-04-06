
import React from 'react';
import Layout from '@/components/layout/Layout';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contacto = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-codecima-blue">Contáctanos</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Estamos aquí para responder a tus preguntas y ayudarte a encontrar la solución perfecta para tu empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-codecima-darkblue/50 rounded-lg p-8 border border-codecima-blue/10 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Información de contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-codecima-blue/10 p-3 rounded-lg mr-4">
                      <MapPin className="text-codecima-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Dirección</h3>
                      <p className="text-gray-400">Av. N S. Calle Central, Ave. Lima, Perú</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-codecima-blue/10 p-3 rounded-lg mr-4">
                      <Phone className="text-codecima-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Teléfono</h3>
                      <p className="text-gray-400">+51 964 891 044</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-codecima-blue/10 p-3 rounded-lg mr-4">
                      <Mail className="text-codecima-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Email</h3>
                      <p className="text-gray-400">ventas@codecima.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-codecima-blue/10 p-3 rounded-lg mr-4">
                      <Clock className="text-codecima-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Horario de atención</h3>
                      <p className="text-gray-400">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-codecima-darkblue/50 rounded-lg p-8 border border-codecima-blue/10">
                <h2 className="text-2xl font-bold text-white mb-6">Preguntas Frecuentes</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-medium mb-1">¿Ofrecen periodo de prueba?</h3>
                    <p className="text-gray-400">Sí, ofrecemos un periodo de prueba de 14 días para que puedas evaluar nuestras soluciones.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-1">¿Cuánto tiempo toma la implementación?</h3>
                    <p className="text-gray-400">El tiempo de implementación varía según la complejidad, pero generalmente entre 2 y 4 semanas.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-1">¿Ofrecen capacitación?</h3>
                    <p className="text-gray-400">Sí, incluimos capacitación completa para tu equipo como parte de la implementación.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium mb-1">¿Qué soporte técnico ofrecen?</h3>
                    <p className="text-gray-400">Dependiendo del plan, ofrecemos soporte técnico en horario laboral o 24/7.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-codecima-darkblue/50 rounded-lg p-8 border border-codecima-blue/10">
                <h2 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h2>
                <p className="text-gray-300 mb-6">
                  Completa el formulario y un asesor se pondrá en contacto contigo a la brevedad.
                </p>
                
                <ContactForm />
              </div>
              
              <div className="bg-codecima-darkblue/50 rounded-lg p-8 border border-codecima-blue/10">
                <h2 className="text-xl font-bold text-white mb-4">Nuestra ubicación</h2>
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  {/* Aquí iría un mapa real, pero para este ejemplo usaremos una imagen */}
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                    alt="Mapa de ubicación"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-codecima-darkblue/50">
                    <div className="text-center p-4">
                      <p className="text-white font-bold">Mapa de ubicación</p>
                      <p className="text-gray-300 text-sm">Esta es una imagen de marcador de posición</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
