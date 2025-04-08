
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Plan } from '@/data/pricingData';

interface HostingPlanCardProps {
  plan: Plan;
  onClick: () => void;
}

const HostingPlanCard: React.FC<HostingPlanCardProps> = ({ plan, onClick }) => {
  return (
    <Card className="overflow-hidden card-luminous h-full" onClick={onClick}>
      <div className="bg-gradient-to-br from-codecima-navy to-codecima-darkblue p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-4 bg-codecima-blue inline-block px-3 py-1 rounded">{plan.name}</h3>
        <div className="flex justify-center space-x-4 my-4">
          {plan.icons && plan.icons.map((icon, i) => (
            <div key={i} className={`${icon.color} p-3 rounded-full`}>
              <icon.component size={20} />
            </div>
          ))}
        </div>
        <div className="text-gray-300 mb-2">{plan.description}</div>
      </div>
      <div className="p-6 text-center bg-white">
        <div className="mb-4">
          <span className="text-3xl font-bold text-codecima-darkblue">USD {plan.price}</span>
        </div>
        <div className="space-y-3 mb-6">
          {plan.features.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-start justify-center">
              <CheckCircle className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0" size={18} />
              <span className="text-gray-700 text-sm">{feature.text}</span>
            </div>
          ))}
        </div>
        <Button className="bg-codecima-blue hover:bg-codecima-blue/80 w-full">
          Contratar Ahora
        </Button>
      </div>
    </Card>
  );
};

export default HostingPlanCard;
