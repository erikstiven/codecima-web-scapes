
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChevronRight } from 'lucide-react';

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
        <div className="text-center mb-4">
          <h3 className="inline-block text-sm text-codecima-blue font-semibold bg-codecima-blue/10 px-3 py-1 rounded-full">
            Solución Segura
          </h3>
        </div>
        
        <div className={`grid md:grid-cols-2 gap-8 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              <span className="text-codecima-blue">{title}</span>
              <br />
              <span className="text-white">{subtitle}</span>
            </h2>
            
            <p className="text-gray-300 text-sm">
              {description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-codecima-blue mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button className="bg-codecima-blue hover:bg-codecima-blue/80">
                Solicitar Asesoría
              </Button>
              
              <Button variant="outline" className="border-gray-700 text-white hover:bg-codecima-darkblue/50">
                Ver Más <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className={`${reversed ? 'order-first md:order-last' : ''}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-codecima-blue/20 rounded-lg blur-xl"></div>
              <img
                src={imageUrl}
                alt={title}
                className="relative rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
