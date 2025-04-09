
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
      className={`overflow-hidden ${plan.highlighted ? 'card-luminous h-full' : 'card-codecima h-full'}`}
      onClick={onClick}
    >
      {plan.highlighted && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-max z-10 bg-codecima-purple text-white text-xs font-bold uppercase py-1.5 px-4 rounded-full shadow-lg border border-codecima-purple/80 animate-pulse">
          Más popular
        </div>
      )}
      
      <div className={`${
        plan.highlighted 
          ? 'bg-gradient-to-br from-codecima-navy to-codecima-darkblue p-6 text-center' 
          : 'bg-gradient-to-br from-codecima-navy to-codecima-darkblue p-6 text-center'
        }`}>
        <h3 className={`text-xl font-bold text-white mb-4 ${
          plan.highlighted 
            ? 'bg-codecima-purple inline-block px-3 py-1 rounded' 
            : 'bg-codecima-blue inline-block px-3 py-1 rounded'
        }`}>
          {plan.name}
        </h3>
        
        {plan.icons && plan.icons.length > 0 && (
          <div className="flex justify-center space-x-4 my-4">
            {plan.icons.map((icon, i) => (
              <div key={i} className={`${icon.color} p-3 rounded-full`}>
                <icon.component size={20} />
              </div>
            ))}
          </div>
        )}
        
        <div className="text-gray-300 mb-2">{plan.description}</div>
      </div>
      
      <div className={`p-6 text-center ${plan.highlighted ? 'bg-white' : 'bg-codecima-darkblue/30'}`}>
        <div className="mb-4">
          <span className={`text-3xl font-bold ${plan.highlighted ? 'text-codecima-darkblue' : 'text-white'}`}>
            USD {plan.price}
          </span>
        </div>
        
        <div className="space-y-3 mb-6">
          {plan.features.slice(0, 5).map((feature, i) => (
            <div key={i} className={`flex items-start ${plan.highlighted ? 'justify-center' : 'justify-start'}`}>
              {feature.included ? (
                <CheckCircle 
                  className={`${plan.highlighted ? 'text-codecima-blue' : 'text-codecima-lightblue'} mr-2 mt-0.5 flex-shrink-0`} 
                  size={18} 
                />
              ) : (
                <X className="text-gray-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
              )}
              <span className={`${
                feature.included 
                  ? (plan.highlighted ? 'text-gray-700 text-sm' : 'text-gray-300 text-sm') 
                  : 'text-gray-500 text-sm'
              }`}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        
        <Button 
          className={`w-full ${
            plan.highlighted 
              ? 'bg-codecima-blue hover:bg-codecima-blue/80' 
              : 'bg-codecima-purple hover:bg-codecima-purple/80 text-white'
          }`}
        >
          ¡Lo quiero! - 10% DCTO
        </Button>
      </div>
    </Card>
  );
};

export default StandardPlanCard;
