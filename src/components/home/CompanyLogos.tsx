
import React from 'react';
import { motion } from 'framer-motion';

const CompanyLogos = () => {
  const companies = [
    { name: 'GEX' },
    { name: 'Samadhi' },
    { name: 'Trans Dexlibert' },
    { name: 'SLM' },
    { name: 'JCL' },
    { name: 'Beton Xeal' },
    { name: 'Cargo Sierra' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl text-white mb-10 font-medium">
          Empresas que <span className="text-codecima-blue font-semibold">confían en nosotros</span>
        </h2>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {companies.map((company, index) => (
            <motion.div 
              key={company.name} 
              className="flex items-center justify-center py-4 px-6"
              variants={itemVariants}
            >
              <div className="text-white font-semibold company-logo hover:text-codecima-blue transition-colors duration-300 hover:scale-110 transition-transform">
                {company.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyLogos;
