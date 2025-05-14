import React from 'react';
import { Plan } from '@/data/pricingData';
import { CheckCircle } from 'lucide-react';
import { cn } from "@/lib/utils";
import GlowButton from '@/components/ui/GlowButton';

interface StandardPlanCardProps {
  plan: Plan;
  onClick: () => void;
}

const StandardPlanCard: React.FC<StandardPlanCardProps> = ({ plan, onClick }) => {
  return (
    <div className="relative h-full flex flex-col">
      {/* Etiqueta de "MÁS POPULAR" */}
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 
          bg-gradient-to-r from-[#f12711] to-[#f5af19] 
          text-white text-xs font-bold uppercase 
          py-1.5 px-6 rounded-full shadow-lg">
          MÁS POPULAR
        </div>
      )}

      <div 
        className={cn(
          "relative inline-flex overflow-hidden rounded-lg p-[1px] flex-grow group cursor-pointer transition-transform duration-300 ease-in-out",
          plan.highlighted ? "scale-[1.05] z-10" : "hover:scale-[1.025]"
        )}
        onClick={onClick}
      >
        {/* Fondo animado girando */}
        <span 
          className={cn(
            "absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#2563eb_100%)]",
            !plan.highlighted ? "opacity-50 group-hover:opacity-80 transition duration-500" : "opacity-0"
          )} 
        />
        
        {/* Resplandor al hover */}
        <span 
          className={cn(
            "absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 blur-xl transition duration-500",
            !plan.highlighted ? "block" : "hidden"
          )} 
        />

        {/* Contenido de la tarjeta */}
        <div 
          className={cn(
            "relative z-10 rounded-lg p-6 pt-8 text-center flex-grow flex flex-col backdrop-blur-xl",
            plan.highlighted 
              ? "bg-gradient-to-br from-[#fc4a1a] via-[#f7b733] to-[#4facfe] text-white" 
              : "bg-gradient-to-br from-codecima-darkblue/90 to-blue-900/90 text-white"
          )}
        >
          {/* Título del Plan */}
          <h3 className={cn(
            "text-lg font-bold mb-4 mt-2 inline-block px-3 py-1 rounded-md",
            plan.highlighted 
              ? "bg-white text-black" 
              : "bg-codecima-blue text-white"
          )}>
            {plan.name}
          </h3>

          {/* Descripción del Plan */}
          <div className="text-white/90 mb-4 min-h-[50px]">{plan.description}</div>

          {/* Precio del Plan */}
          <div className="mb-6">
            <span className="text-4xl font-bold">USD {plan.price}</span>
          </div>

          {/* Lista de Características */}
          <div className="space-y-3 mb-8 text-left flex-grow">
            {plan.features.slice(0, 6).map((feature, i) => (
              feature.included && (
                <div key={i} className="flex items-center">
                  <CheckCircle 
                    className={cn(
                      "mr-3 flex-shrink-0",
                      plan.highlighted ? "text-white" : "text-codecima-blue"
                    )} 
                    size={20} 
                  />
                  <span className="text-white/90 text-sm">{feature.text}</span>
                </div>
              )
            ))}
          </div>

          {/* Botón de Acción */}
          <div className="mt-auto">
            <GlowButton className="w-full">
              ¡Lo quiero! - 30% DCTO
            </GlowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardPlanCard;