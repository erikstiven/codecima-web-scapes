
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

type SoftwareSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl: string;
  reversed?: boolean;
};

const SoftwareSection: React.FC<SoftwareSectionProps> = ({
  title,
  subtitle,
  description,
  features,
  imageUrl,
  reversed = false,
}) => {
  return (
    <section className="py-12 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-codecima-navy to-codecima-darkblue opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="bg-codecima-navy/90 rounded-lg overflow-hidden border border-codecima-blue/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={`grid md:grid-cols-2 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
            {/* Content */}
            <div className="p-8 space-y-6">
              <div>
                <motion.h3 
                  className="text-xl font-medium text-codecima-blue mb-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {title}
                </motion.h3>
                <motion.h2 
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {subtitle}
                </motion.h2>
              </div>
              
              <motion.p 
                className="text-gray-300 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {description}
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex space-x-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button className="bg-codecima-blue hover:bg-codecima-blue/80">
                  Solicitar Asesoría
                </Button>
                
                <Button variant="outline" className="border-codecima-blue/50 text-white hover:bg-codecima-blue/10">
                  Ver Más <ChevronRight size={16} className="ml-1" />
                </Button>
              </motion.div>
            </div>
            
            {/* Image */}
            <div className={`relative h-full ${reversed ? 'order-first md:order-last' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-codecima-navy/90 to-transparent z-10"></div>
              <img
                src={imageUrl}
                alt={subtitle}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftwareSection;
