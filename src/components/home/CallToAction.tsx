import React from "react";
import ContactForm from "../ContactForm";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section
      className="relative py-24 bg-[#0b0b23] overflow-visible"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl font-bold mb-2 text-white"
          >
            ¿Listo para impulsar tu{" "}
            <span className="text-codecima-blue">negocio?</span>
          </h2>
          <p className="text-codecima-blue font-semibold">
            Cuéntanos tu idea o proyecto
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Te ayudamos a hacerlo realidad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
