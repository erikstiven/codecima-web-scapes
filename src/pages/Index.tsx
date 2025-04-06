
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import CompanyLogos from '@/components/home/CompanyLogos';
import SoftwareSection from '@/components/home/SoftwareSection';
import Features from '@/components/home/Features';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CompanyLogos />
      
      <SoftwareSection
        title="Software para"
        subtitle="Transportes de Carga Pesada"
        description="La versión de nuestro software para el transporte de carga pesada optimiza la organización y el control de empresas dedicadas a la carga terrestre, simplificando sus operaciones diarias."
        features={[
          'Optimiza tus procesos',
          'Facturación electrónica',
          'Accede desde cualquier dispositivo',
          'Control de gastos operativos',
          'App Para Android',
          'Alojado en la nube'
        ]}
        imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      />
      
      <SoftwareSection
        title="Software para"
        subtitle="Empresas de Paquetería"
        description="Software diseñado para gestionar envíos de manera detallada, ofreciendo control total a tu empresa como si tuviera ojos en toda su operación."
        features={[
          'Optimiza tus procesos',
          'Facturación electrónica',
          'Accede desde cualquier dispositivo',
          'Control de gastos operativos',
          'App Para Android',
          'Alojado en la nube'
        ]}
        imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
        reversed={true}
      />
      
      <Features />
      <CallToAction />
    </Layout>
  );
};

export default Index;
