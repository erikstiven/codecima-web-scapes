
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
      className={`overflow-hidden ${
        plan.highlighted 
          ? 'border border-codecima-blue shadow-lg shadow-blue-500/20' 
          : 'border border-codecima-blue/30'
      } h-full cursor-pointer`}
      onClick={onClick}
    >
      <div className="bg-codecima-darkblue p-6 text-center relative">
        {plan.highlighted && (
          <div className="absolute -top-4 left-0 right-0 mx-auto w-max z-10 bg-codecima-purple text-white text-xs font-bold uppercase py-1.5 px-4 rounded-full shadow-lg border border-codecima-purple/80 animate-pulse">
            Más popular
          </div>
        )}
        
        <h3 className={`text-lg font-bold text-white mb-4 mt-2 ${
          plan.highlighted 
            ? 'bg-codecima-purple inline-block px-3 py-1 rounded-md' 
            : 'bg-codecima-blue inline-block px-3 py-1 rounded-md'
        }`}>
          {plan.name}
        </h3>
        
        <div className="text-white mb-3">{plan.description}</div>
        
        <div className="mb-6 mt-8">
          <span className="text-4xl font-bold text-white">
            USD {plan.price}
          </span>
        </div>
        
        <div className="space-y-4 mb-6 text-left">
          {plan.features.slice(0, 6).map((feature, i) => (
            feature.included && (
              <div key={i} className="flex items-center">
                <CheckCircle 
                  className="text-codecima-blue mr-3 flex-shrink-0" 
                  size={20} 
                />
                <span className="text-white text-sm">
                  {feature.text}
                </span>
              </div>
            )
          ))}
        </div>
        
        <Button 
          className={`w-full mt-2 ${
            plan.highlighted 
              ? 'bg-codecima-purple hover:bg-codecima-purple/80 text-white' 
              : 'bg-codecima-blue hover:bg-codecima-blue/80 text-white'
          }`}
        >
          ¡Lo quiero! - 10% DCTO
        </Button>
      </div>
    </Card>
  );
};

export default StandardPlanCard;
