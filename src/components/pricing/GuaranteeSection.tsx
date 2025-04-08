
import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  return (
    <div className="mt-16 text-center bg-codecima-darkblue/50 border border-codecima-blue/30 rounded-lg p-8 card-luminous">
      <div className="flex items-center justify-center mb-4">
        <Shield className="text-codecima-blue mr-2" size={24} />
        <h2 className="text-2xl font-bold text-white">Garantía de satisfacción</h2>
      </div>
      <div className="space-y-3 max-w-2xl mx-auto">
        <div className="flex items-start justify-center">
          <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
          <span className="text-gray-300">Soporte técnico 24/7 incluido en todos los planes</span>
        </div>
        <div className="flex items-start justify-center">
          <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
          <span className="text-gray-300">Si no estás satisfecho, te devolvemos tu dinero en los primeros 30 días</span>
        </div>
        <div className="flex items-start justify-center">
          <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
          <span className="text-gray-300">Upgrades y actualizaciones gratuitas durante el primer año</span>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;
