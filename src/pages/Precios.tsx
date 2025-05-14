import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PricingTabs from "@/components/pricing/PricingTabs";
import GuaranteeSection from "@/components/pricing/GuaranteeSection";
import GlowButton from "@/components/ui/GlowButton";
import { Shield, CheckCircle } from "lucide-react";

const Precios = () => {
  const [activeTab, setActiveTab] = useState("diseno-web");
  const navigate = useNavigate();

  const handlePlanClick = (categoryId: string, planId: string) => {
    navigate(`/precios/${categoryId}/${planId}`);
  };

  return (
    <Layout>
      <section className="pt-24 pb-16 w-full bg-gradient-to-b from-[#0a0a1b] via-[#0a0a23] to-[#0b0b2b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.h1
              className="text-4xl font-bold mb-3 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Nuestros{" "}
              <motion.span
                className="text-codecima-purple"
                whileHover={{
                  scale: 1.05,
                  color: "#8B5CF6",
                  transition: { duration: 0.2 },
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
              Ofrecemos soluciones para todos los presupuestos. Contrata HOY tu
              página WEB + HOSTING + DOMINIO. ¡Ahora con Chatbot GRATIS!
            </motion.p>
          </motion.div>

          <PricingTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handlePlanClick={handlePlanClick}
          />

          <motion.div
            className="mt-24 text-center p-10 bg-[#0b0b23] border border-codecima-blue/50 hover:border-codecima-blue/80 rounded-2xl transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w mx-auto px-8 sm:px-2 lg:px-8">
              <div className="flex items-center justify-center mb-4">
                <Shield className="text-codecima-blue mr-2" size={24} />
                <h2 className="text-2xl font-bold text-white">
                  Garantía de satisfacción
                </h2>
              </div>
              <div className="space-y-3 max-w-2xl mx-auto">
                <div className="flex items-start justify-center">
                  <CheckCircle
                    className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-300">
                    Soporte técnico 24/7 incluido en todos los planes
                  </span>
                </div>
                <div className="flex items-start justify-center">
                  <CheckCircle
                    className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-300">
                    Si no estás satisfecho, te devolvemos tu dinero en los
                    primeros 30 días
                  </span>
                </div>
                <div className="flex items-start justify-center">
                  <CheckCircle
                    className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-300">
                    Upgrades y actualizaciones gratuitas durante el primer año
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Precios;
