import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <div className="mt-16 text-center bg-codecima-darkblue/50 border border-codecima-blue/30 rounded-lg p-6 sm:p-8 md:p-10 card-luminous mx-4 sm:mx-auto max-w-4xl">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
        <Shield className="text-codecima-blue" size={24} />
        <h2 className="text-2xl font-bold text-white">Garantía de satisfacción</h2>
      </div>
      <div className="space-y-4 max-w-2xl mx-auto">
        <div className="flex items-start gap-2 text-left">
          <CheckCircle className="text-codecima-blue mt-0.5 flex-shrink-0" size={18} />
          <span className="text-gray-300 text-sm sm:text-base">
            Soporte técnico 24/7 incluido en todos los planes
          </span>
        </div>
        <div className="flex items-start gap-2 text-left">
          <CheckCircle className="text-codecima-blue mt-0.5 flex-shrink-0" size={18} />
          <span className="text-gray-300 text-sm sm:text-base">
            Si no estás satisfecho, te devolvemos tu dinero en los primeros 30 días
          </span>
        </div>
        <div className="flex items-start gap-2 text-left">
          <CheckCircle className="text-codecima-blue mt-0.5 flex-shrink-0" size={18} />
          <span className="text-gray-300 text-sm sm:text-base">
            Upgrades y actualizaciones gratuitas durante el primer año
          </span>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;
