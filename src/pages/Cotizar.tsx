
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Phone, Mail, User, Building2, MessageSquare, Calendar, FileText } from 'lucide-react';

const Cotizar = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-white">Solicita una </span>
              <span className="text-codecima-blue">Cotización</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Completa el formulario a continuación y te enviaremos una cotización personalizada según tus necesidades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-codecima-darkblue/50 rounded-lg p-8 border border-codecima-blue/10">
              <h2 className="text-2xl font-bold text-white mb-6">Formulario de cotización</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center bg-codecima-darkblue/50 border border-gray-700 rounded px-4 py-3">
                    <User className="text-codecima-lightblue mr-2" size={20} />
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                  
                  <div className="flex items-center bg-codecima-darkblue/50 border border-gray-700 rounded px-4 py-3">
                    <User className="text-codecima-lightblue mr-2" size={20} />
                    <input
                      type="text"
                      placeholder="Apellido"
                      className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="flex items-center bg-codecima-darkblue/50 border border-gray-700 rounded px-4 py-3">
                  <Building2 className="text-codecima-lightblue mr-2" size={20} />
                  <input
                    type="text"
                    placeholder="Nombre de la empresa"
                    className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
                  />
                </div>
                
                <div className="flex items-center bg-codecima-darkblue/50 border border-gray-700 rounded px-4 py-3">
                  <Mail className="text-codecima-lightblue mr-2" size={20} />
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
                  />
                </div>
                
                <div className="flex items-center bg-codecima-darkblue/50 border border-gray-700 rounded px-4 py-3">
                  <Phone className="text-codecima-lightblue mr-2" size={20} />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
                  />
                </div>
                
                <div className="flex items-start bg-codecima-darkblue/50 border border-gray-700 rounded px-4 py-3">
                  <MessageSquare className="text-codecima-lightblue mr-2 mt-1" size={20} />
                  <textarea
                    placeholder="Describe tu proyecto o necesidades"
                    className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none min-h-[100px] resize-none"
                  ></textarea>
                </div>
                
                <div className="space-y-2">
                  <p className="text-white">Selecciona el tipo de software que necesitas:</p>
                  
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="carga-pesada" name="software-type" className="text-codecima-blue" />
                    <label htmlFor="carga-pesada" className="text-gray-300">Software para Carga Pesada</label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="paqueteria" name="software-type" className="text-codecima-blue" />
                    <label htmlFor="paqueteria" className="text-gray-300">Software para Paquetería</label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="personalizado" name="software-type" className="text-codecima-blue" />
                    <label htmlFor="personalizado" className="text-gray-300">Solución Personalizada</label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="no-seguro" name="software-type" className="text-codecima-blue" />
                    <label htmlFor="no-seguro" className="text-gray-300">No estoy seguro</label>
                  </div>
                </div>
                
                <Button className="w-full bg-codecima-blue hover:bg-codecima-blue/80 text-white py-3 rounded-md flex items-center justify-center mt-4">
                  Solicitar cotización
                </Button>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-codecima-darkblue/50 rounded-lg p-8 border border-codecima-blue/10">
                <h2 className="text-2xl font-bold text-white mb-6">Beneficios de solicitar una cotización</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-codecima-blue/10 p-2 rounded-lg mr-4 mt-1">
                      <Calendar className="text-codecima-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Respuesta rápida</h3>
                      <p className="text-gray-400 text-sm">Nuestro equipo te responderá en menos de 24 horas hábiles.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-codecima-blue/10 p-2 rounded-lg mr-4 mt-1">
                      <FileText className="text-codecima-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Propuesta detallada</h3>
                      <p className="text-gray-400 text-sm">Recibirás una propuesta personalizada según tus necesidades específicas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-codecima-blue/10 p-2 rounded-lg mr-4 mt-1">
                      <MessageSquare className="text-codecima-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Asesoría especializada</h3>
                      <p className="text-gray-400 text-sm">Un consultor especializado te guiará durante todo el proceso.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-codecima-blue/10 p-2 rounded-lg mr-4 mt-1">
                      <Building2 className="text-codecima-blue" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Sin compromiso</h3>
                      <p className="text-gray-400 text-sm">La cotización no te compromete a adquirir nuestros servicios.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-codecima-darkblue/50 rounded-lg p-8 border border-codecima-blue/10">
                <h2 className="text-xl font-bold text-white mb-4">Testimonios de clientes</h2>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-codecima-blue pl-4">
                    <p className="text-gray-300 italic mb-2">
                      "El proceso de cotización fue rápido y sencillo. La propuesta que recibimos se ajustaba perfectamente a nuestras necesidades."
                    </p>
                    <p className="text-codecima-blue font-medium">María Rodríguez - Gerente de Operaciones</p>
                  </div>
                  
                  <div className="border-l-2 border-codecima-blue pl-4">
                    <p className="text-gray-300 italic mb-2">
                      "Destaco la transparencia y el detalle de la cotización. No hubo sorpresas ni costos ocultos durante la implementación."
                    </p>
                    <p className="text-codecima-blue font-medium">Carlos Mendoza - Director de Logística</p>
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

export default Cotizar;
