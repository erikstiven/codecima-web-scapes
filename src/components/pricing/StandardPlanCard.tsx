
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
          ? 'relative shadow-[0_0_30px_rgba(113,82,245,0.4)]' 
          : 'card-codecima'
      }`}
      onClick={onClick}
    >
      {plan.highlighted && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-max z-10 bg-codecima-purple text-white text-xs font-bold uppercase py-1.5 px-4 rounded-full shadow-lg border border-codecima-purple/80 animate-pulse">
          Más popular
        </div>
      )}
      
      <div className={`${
        plan.highlighted 
          ? 'bg-gradient-to-br from-[#0a1a40] via-[#094e9e] to-codecima-purple/30 backdrop-blur-sm' 
          : 'bg-gradient-to-br from-[#0c1f45] to-[#031b38]'
        } p-6 flex-grow relative z-0 border-b ${
          plan.highlighted ? 'border-codecima-purple/30' : 'border-codecima-blue/30'
        }`}>
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-gray-400 mb-6">{plan.description}</p>
        
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold text-white">USD {plan.price}</span>
        </div>
        
        <div className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start">
              {feature.included ? (
                <CheckCircle className={`${plan.highlighted ? 'text-codecima-purple' : 'text-codecima-lightblue'} mr-2 mt-0.5 flex-shrink-0`} size={18} />
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
              ? 'bg-codecima-purple hover:bg-codecima-purple/80 text-white shadow-[0_0_15px_rgba(113,86,229,0.4)]' 
              : 'bg-codecima-lightblue border border-codecima-blue/50 hover:bg-codecima-lightblue/80 text-white'
          }`}
        >
          ¡Lo quiero! - 10% DCTO
        </Button>
      </div>
    </Card>
  );
};

export default StandardPlanCard;
