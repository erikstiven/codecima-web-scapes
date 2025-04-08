
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, X } from 'lucide-react';
import { Plan } from '@/data/pricingData';

interface StandardPlanCardProps {
  plan: Plan;
  onClick: () => void;
}

const StandardPlanCard: React.FC<StandardPlanCardProps> = ({ plan, onClick }) => {
  return (
    <Card 
      className={`h-full flex flex-col overflow-hidden ${
        plan.highlighted 
          ? 'relative shadow-[0_0_25px_rgba(53,182,255,0.25)]' 
          : 'card-codecima'
      }`}
      onClick={onClick}
    >
      {plan.highlighted && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-max z-10 bg-codecima-blue text-white text-xs font-bold uppercase py-1.5 px-4 rounded-full shadow-lg border border-codecima-blue/80 animate-pulse">
          Más popular
        </div>
      )}
      
      <div className={`${plan.highlighted ? 'bg-codecima-blue/20' : 'bg-codecima-darkblue/50'} p-6 flex-grow relative z-0 border-b border-codecima-blue/30`}>
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-gray-400 mb-6">{plan.description}</p>
        
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold text-white">USD {plan.price}</span>
        </div>
        
        <div className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start">
              {feature.included ? (
                <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
              ) : (
                <X className="text-gray-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
              )}
              <span className={feature.included ? "text-gray-300" : "text-gray-500"}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        
        <Button 
          className={`w-full ${
            plan.highlighted 
              ? 'bg-codecima-blue hover:bg-codecima-blue/80 text-white shadow-[0_0_15px_rgba(53,182,255,0.3)]' 
              : 'bg-codecima-darkblue border border-codecima-blue/50 hover:bg-codecima-blue/20'
          }`}
        >
          ¡Lo quiero! - 10% DCTO
        </Button>
      </div>
    </Card>
  );
};

export default StandardPlanCard;
