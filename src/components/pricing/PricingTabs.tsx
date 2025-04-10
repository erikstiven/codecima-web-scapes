
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import StandardPlanCard from './StandardPlanCard';
import HostingPlanCard from './HostingPlanCard';
import { categoryData } from '@/data/pricingData';

interface PricingTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  handlePlanClick: (categoryId: string, planId: string) => void;
}

const PricingTabs: React.FC<PricingTabsProps> = ({ 
  activeTab, 
  setActiveTab, 
  handlePlanClick 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <Tabs 
      defaultValue="diseno-web" 
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full max-w-7xl mx-auto"
    >
      <div className="flex justify-center mb-8">
        <TabsList className="bg-codecima-darkblue/50 border border-codecima-blue/20 p-1">
          <TabsTrigger 
            value="diseno-web" 
            className="data-[state=active]:bg-codecima-blue data-[state=active]:text-white"
          >
            Diseño Web
          </TabsTrigger>
          <TabsTrigger 
            value="hosting" 
            className="data-[state=active]:bg-codecima-blue data-[state=active]:text-white"
          >
            Hosting
          </TabsTrigger>
          <TabsTrigger 
            value="logotipos" 
            className="data-[state=active]:bg-codecima-blue data-[state=active]:text-white"
          >
            Logotipos
          </TabsTrigger>
          <TabsTrigger 
            value="contenido" 
            className="data-[state=active]:bg-codecima-blue data-[state=active]:text-white"
          >
            Contenido
          </TabsTrigger>
        </TabsList>
      </div>

      {Object.entries(categoryData).map(([categoryId, category]) => (
        <TabsContent key={categoryId} value={categoryId} className="space-y-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
            <p className="text-gray-400">{category.subtitle}</p>
          </div>

          <motion.div 
            className={`grid gap-6 ${
              categoryId === 'hosting' ? 'md:grid-cols-2 max-w-4xl mx-auto' : 
              categoryId === 'logotipos' || categoryId === 'contenido' ? 'md:grid-cols-3 max-w-5xl mx-auto' : 
              'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto'
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {category.plans.map((plan) => (
              <motion.div 
                key={plan.id} 
                variants={itemVariants}
                className="w-full cursor-pointer h-full"
              >
                {categoryId === 'hosting' ? (
                  <HostingPlanCard 
                    plan={plan} 
                    onClick={() => handlePlanClick(categoryId, plan.id)} 
                  />
                ) : (
                  <StandardPlanCard 
                    plan={plan} 
                    onClick={() => handlePlanClick(categoryId, plan.id)} 
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PricingTabs;
