
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-3 text-white">
              Nuestros <span className="text-codecima-purple">Precios</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ofrecemos soluciones para todos los presupuestos. Contrata HOY tu página WEB + 
              HOSTING + DOMINIO. ¡Ahora con Chatbot GRATIS!
            </p>
          </motion.div>

          <PricingTabs 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            handlePlanClick={handlePlanClick} 
          />

          <GuaranteeSection />
        </div>
      </section>
    </Layout>
  );
};

export default Precios;
