import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import PricingTabs from "@/components/pricing/PricingTabs";
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
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
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
            className="mt-24 text-center p-9 bg-[#0b0b23] border border-codecima-blue/50 hover:border-codecima-blue/80 rounded-2xl transition-all max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center gap-2">
              <Shield className="text-codecima-blue" size={40} />
              <h3 className="text-white text-2xl font-bold">
                Garantía de Satisfacción
              </h3>
              <p className="text-gray-400 max-w-2xl text-base mt-2">
                Tu tranquilidad es lo primero. Todos nuestros planes incluyen:
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-left text-white/90 max-w-4xl mx-auto">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-codecima-blue mt-1" size={18} />
                <span>
                  <strong>Soporte técnico 24/7</strong> incluido en todos los
                  planes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-codecima-blue mt-1" size={18} />
                <span>
                  <strong>Acompañamiento personalizado</strong> desde la
                  planificación hasta el lanzamiento
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-codecima-blue mt-1" size={18} />
                <span>
                  <strong>Actualizaciones gratuitas</strong> durante el primer
                  año
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-codecima-blue mt-1" size={18} />
                <span>
                  <strong>Mejoras continuas</strong> según feedback de nuestros
                  clientes
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Precios;
