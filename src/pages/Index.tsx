
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import CompanyLogos from '@/components/home/CompanyLogos';
import SoftwareSection from '@/components/home/SoftwareSection';
import Features from '@/components/home/Features';
import CallToAction from '@/components/home/CallToAction';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <CompanyLogos />
        </motion.div>
        
        <motion.div variants={itemVariants}>
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
        </motion.div>
        
        <motion.div variants={itemVariants}>
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
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Features />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <CallToAction />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Index;
