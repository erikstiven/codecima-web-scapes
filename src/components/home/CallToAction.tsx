import React from "react";
import ContactForm from "../ContactForm";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a0a1f] to-[#0b0b23] overflow-visible">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-white">Hablemos de </span>
            <span className="text-codecima-blue">negocios</span>
          </h2>
          <p className="text-codecima-blue font-semibold">Solicita DEMOSTRACIÓN</p>
          <p className="text-gray-400 text-sm sm:text-base">¡Recibe asesoría de expertos!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
