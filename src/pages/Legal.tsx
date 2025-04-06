
import React from 'react';
import Layout from '@/components/layout/Layout';

const Legal = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-white">Información Legal</h1>
            <p className="text-gray-300">
              Términos, condiciones y políticas de CodeCima.
            </p>
          </div>

          <div className="bg-codecima-darkblue/50 rounded-lg p-8 border border-codecima-blue/10 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Términos y Condiciones</h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Los siguientes términos y condiciones rigen el uso de los servicios ofrecidos por CodeCima, incluyendo el software, aplicaciones y sitio web. Al utilizar nuestros servicios, usted acepta estar sujeto a estos términos.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">1. Uso del Servicio</h3>
              <p>
                Nuestros servicios están diseñados para ser utilizados por empresas y profesionales del sector transporte. Usted se compromete a utilizar nuestros servicios únicamente para fines legales y de acuerdo con estos términos.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">2. Cuentas y Seguridad</h3>
              <p>
                Al registrarse en nuestros servicios, usted es responsable de mantener la confidencialidad de su cuenta y contraseña, así como de restringir el acceso a su computadora. Usted acepta la responsabilidad por todas las actividades que ocurran bajo su cuenta.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">3. Privacidad y Datos</h3>
              <p>
                La recopilación y uso de información personal está regida por nuestra Política de Privacidad, que forma parte integral de estos términos y condiciones.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">4. Derechos de Propiedad Intelectual</h3>
              <p>
                Todos los derechos de propiedad intelectual relacionados con nuestros servicios, incluyendo software, diseños, textos, gráficos y otros contenidos, son propiedad de CodeCima o sus licenciantes.
              </p>
            </div>
          </div>
          
          <div className="bg-codecima-darkblue/50 rounded-lg p-8 border border-codecima-blue/10 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Política de Privacidad</h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
                En CodeCima, respetamos su privacidad y nos comprometemos a proteger la información personal que compartimos. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos su información.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">1. Información que Recopilamos</h3>
              <p>
                Podemos recopilar información personal como nombres, direcciones de correo electrónico, números de teléfono e información de la empresa cuando usted se registra para utilizar nuestros servicios, completa formularios o se comunica con nosotros.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">2. Uso de la Información</h3>
              <p>
                Utilizamos la información recopilada para proporcionar y mejorar nuestros servicios, comunicarnos con usted, procesar pagos y cumplir con obligaciones legales.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">3. Protección de Datos</h3>
              <p>
                Implementamos medidas de seguridad para proteger su información contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-2">4. Derechos del Usuario</h3>
              <p>
                Usted tiene derecho a acceder, corregir o eliminar su información personal. Para ejercer estos derechos, contáctenos a través de los medios proporcionados.
              </p>
            </div>
          </div>
          
          <div className="bg-codecima-darkblue/50 rounded-lg p-8 border border-codecima-blue/10">
            <h2 className="text-2xl font-bold text-white mb-4">Información de la Empresa</h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Nombre de la empresa:</strong> CodeCima S.A.C.
              </p>
              <p>
                <strong className="text-white">RUC:</strong> 20XXXXXXXXX
              </p>
              <p>
                <strong className="text-white">Dirección registrada:</strong> Av. N S. Calle Central, Ave. Lima, Perú
              </p>
              <p>
                <strong className="text-white">Correo electrónico:</strong> legal@codecima.com
              </p>
              <p>
                <strong className="text-white">Teléfono:</strong> +51 964 891 044
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
