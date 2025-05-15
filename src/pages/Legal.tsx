import React from "react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";

const Legal = () => {
  return (
    <Layout>
      <Seo
        title="Términos y Políticas de Privacidad | CodeCima"
        description="Consulta los términos de uso, condiciones de servicio y políticas de privacidad de CodeCima. Transparencia y compromiso con tus datos."
        keywords="términos y condiciones CodeCima, política de privacidad, información legal, seguridad de datos, derechos del usuario"
        image="/images/preview.webp"
        url="https://www.codecima.com.ec/legal"
      />

      <section className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-white">
              Información Legal
            </h1>
            <p className="text-gray-300">
              Términos, condiciones y políticas de CodeCima.
            </p>
          </div>

          {/* Términos y Condiciones */}
          <section
            aria-labelledby="terminos"
            className="bg-codecima-darkblue/50 rounded-lg p-8 border border-codecima-blue/10 mb-8"
          >
            <h2
              id="terminos"
              className="text-2xl font-bold text-white mb-4"
            >
              Términos y Condiciones
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                Los siguientes términos y condiciones rigen el uso de los
                servicios ofrecidos por CodeCima, incluyendo el software,
                aplicaciones y sitio web. Al utilizar nuestros servicios,
                usted acepta estar sujeto a estos términos.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                1. Uso del Servicio
              </h3>
              <p>
                Nuestros servicios están diseñados para empresas y
                profesionales. Usted se compromete a usarlos únicamente con
                fines legales y bajo estos términos.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                2. Cuentas y Seguridad
              </h3>
              <p>
                Usted es responsable de su cuenta y contraseña. Toda
                actividad bajo su cuenta es su responsabilidad.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                3. Privacidad y Datos
              </h3>
              <p>
                La información personal que recopilamos está protegida bajo
                nuestra política de privacidad.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                4. Propiedad Intelectual
              </h3>
              <p>
                Todo el contenido y software son propiedad de CodeCima o sus
                licenciantes.
              </p>
            </div>
          </section>

          {/* Política de Privacidad */}
          <section
            aria-labelledby="privacidad"
            className="bg-codecima-darkblue/50 rounded-lg p-8 border border-codecima-blue/10 mb-8"
          >
            <h2
              id="privacidad"
              className="text-2xl font-bold text-white mb-4"
            >
              Política de Privacidad
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                En CodeCima, protegemos tu privacidad. Aquí detallamos cómo
                manejamos y protegemos tu información.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                1. Información que Recopilamos
              </h3>
              <p>
                Recopilamos datos como nombres, correos electrónicos,
                teléfonos y datos empresariales mediante formularios.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                2. Uso de la Información
              </h3>
              <p>
                Usamos tus datos para ofrecerte servicios, responderte,
                procesar pagos y cumplir con obligaciones legales.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                3. Protección de Datos
              </h3>
              <p>
                Aplicamos medidas de seguridad para evitar accesos no
                autorizados o alteración de tus datos.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-2">
                4. Derechos del Usuario
              </h3>
              <p>
                Puedes acceder, corregir o eliminar tus datos. Contáctanos
                para ejercer estos derechos.
              </p>
            </div>
          </section>

          {/* Información de la Empresa */}
          <section
            aria-labelledby="empresa"
            className="bg-codecima-darkblue/50 rounded-lg p-8 border border-codecima-blue/10"
          >
            <h2
              id="empresa"
              className="text-2xl font-bold text-white mb-4"
            >
              Información de la Empresa
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Nombre de la empresa:</strong>{" "}
                CodeCima
              </p>
              <p>
                <strong className="text-white">RUC:</strong> 0705871689001
              </p>
              <p>
                <strong className="text-white">Dirección:</strong> Ent. 1
                ESPOCH, Riobamba 060155, Ecuador
              </p>
              <p>
                <strong className="text-white">Correo electrónico:</strong>{" "}
                info@codecima.com
              </p>
              <p>
                <strong className="text-white">Teléfono:</strong>{" "}
                +593 99 940 6026
              </p>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
