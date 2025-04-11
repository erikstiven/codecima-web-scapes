
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PricingTabs from '@/components/pricing/PricingTabs';
import GuaranteeSection from '@/components/pricing/GuaranteeSection';

const Precios = () => {
  const [activeTab, setActiveTab] = useState('diseno-web');
  const navigate = useNavigate();

  const handlePlanClick = (categoryId: string, planId: string) => {
    navigate(`/precios/${categoryId}/${planId}`);
  };

  return (
    <Layout>
      <section className="pt-28 pb-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.h1 
            className="text-4xl font-bold mb-3 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nuestros <motion.span 
              className="text-codecima-purple"
              whileHover={{ 
                scale: 1.05,
                color: "#8B5CF6",
                transition: { duration: 0.2 } 
              }}
            >
              Precios
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Ofrecemos soluciones para todos los presupuestos. Contrata HOY tu página WEB + 
            HOSTING + DOMINIO. ¡Ahora con Chatbot GRATIS!
          </motion.p>
        </motion.div>

        <PricingTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          handlePlanClick={handlePlanClick} 
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <GuaranteeSection />
        </motion.div>
      </section>
    </Layout>
  );
};

export default Precios;
