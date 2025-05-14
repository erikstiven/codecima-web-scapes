import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import GlowButton from '@/components/ui/GlowButton';
import { Plan } from '@/data/pricingData';

interface HostingPlanCardProps {
  plan: Plan;
  onClick: () => void;
}

const HostingPlanCard: React.FC<HostingPlanCardProps> = ({ plan, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: plan.highlighted ? 1.05 : 1.025 }}
      className={cn(
        'relative inline-flex overflow-hidden rounded-lg p-[1px] flex-grow transition-transform duration-300 ease-in-out group cursor-pointer',
        plan.highlighted ? 'scale-[1.05] z-10' : ''
      )}
    >
      {/* Fondo animado girando */}
      <span
        className={cn(
          'absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#2563eb_100%)]',
          !plan.highlighted
            ? 'opacity-50 group-hover:opacity-80 transition duration-500'
            : 'opacity-0'
        )}
      />
      
      {/* Resplandor al hover */}
      <span
        className={cn(
          'absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 blur-xl transition duration-500',
          !plan.highlighted ? 'block' : 'hidden'
        )}
      />

      {/* Contenido de la tarjeta */}
      <div
        className={cn(
          'relative z-10 rounded-lg p-6 pt-8 text-center flex flex-col justify-between backdrop-blur-xl shadow-xl transition-all duration-500',
          plan.highlighted
            ? 'bg-gradient-to-br from-[#fc4a1a] via-[#f7b733] to-[#4facfe] text-white'
            : 'bg-gradient-to-br from-codecima-darkblue/90 to-blue-900/90 text-white'
        )}
      >
        {/* Etiqueta MÁS POPULAR */}
        {plan.highlighted && (
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-[#f12711] to-[#f5af19] text-white text-xs font-bold uppercase py-1.5 px-6 rounded-full shadow-lg">
            MÁS POPULAR
          </div>
        )}

        {/* Nombre del plan */}
        <h3
          className={cn(
            'text-lg font-bold mb-4 mt-2 inline-block px-3 py-1 rounded-md',
            plan.highlighted ? 'bg-white text-black' : 'bg-codecima-blue text-white'
          )}
        >
          {plan.name}
        </h3>

        {/* Íconos */}
        {plan.icons && (
          <div className="flex justify-center space-x-4 mb-4">
            {plan.icons.map((icon, i) => (
              <div key={i} className={cn(icon.color, 'p-2 rounded-full')}>
                <icon.component size={20} />
              </div>
            ))}
          </div>
        )}

        {/* Descripción */}
        <p className="text-sm mb-3">{plan.description}</p>

        {/* Precio */}
        <div className="text-4xl font-bold mb-6">USD {plan.price}</div>

        {/* Características */}
        <div className="space-y-3 mb-10 text-left">
          {plan.features.slice(0, 6).map((f, i) =>
            f.included && (
              <div key={i} className="flex items-center">
                <CheckCircle className="text-codecima-blue mr-3 flex-shrink-0" size={18} />
                <span>{f.text}</span>
              </div>
            )
          )}
        </div>

        {/* Botón */}
        <GlowButton className="w-full mt-auto">
          ¡Lo quiero! – 10% DCTO
        </GlowButton>
      </div>
    </motion.div>
  );
};

export default HostingPlanCard;
