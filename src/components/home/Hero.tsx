
import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from '../ContactForm';

const Hero = () => {
  return (
    <section className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-purple-500">Software</span> <br/>
              <span className="text-white">Personalizado</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Para empresas de transporte de Carga Pesada y Paquetería
            </p>
            <button className="flex items-center text-white bg-transparent border border-gray-600 hover:border-white rounded-md px-5 py-2 transition-colors">
              <Play size={16} className="mr-2" />
              <span>Ver Video</span>
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
