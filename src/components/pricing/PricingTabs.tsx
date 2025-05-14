import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import StandardPlanCard from "./StandardPlanCard";
import HostingPlanCard from "./HostingPlanCard";
import { categoryData } from "@/data/pricingData";

interface PricingTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  handlePlanClick: (categoryId: string, planId: string) => void;
}

const PricingTabs: React.FC<PricingTabsProps> = ({
  activeTab,
  setActiveTab,
  handlePlanClick,
}) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: { when: "afterChildren" },
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 12, stiffness: 150 },
    },
    exit: {
      y: 20,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <Tabs
      defaultValue="diseno-web"
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full mb-8 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 flex justify-start md:justify-center relative">
        <TabsList className="inline-flex w-max md:w-auto justify-start md:justify-center bg-codecima-darkblue/30 border border-codecima-blue/30 rounded-xl shadow-xl backdrop-blur-sm p-1 gap-2">
          {[
            { value: "diseno-web", label: "Diseño Web" },
            { value: "hosting", label: "Hosting" },
            { value: "logotipos", label: "Logotipos" },
            { value: "contenido", label: "Contenido" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="group relative px-4 sm:px-5 md:px-6 py-2 text-sm sm:text-base whitespace-nowrap rounded-lg transition-all duration-300 text-white/60 hover:text-white/90 data-[state=active]:text-white data-[state=active]:bg-codecima-blue focus:outline-none focus:ring-2 focus:ring-codecima-blue/50 min-w-[110px] flex-shrink-0 text-center"
            >
              <span className="relative z-10">{tab.label}</span>
              <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-white" />
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <AnimatePresence mode="wait">
        <TabsContent value={activeTab} className="space-y-8">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            <motion.div
              className="text-center mb-10 px-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100 },
                },
                exit: { opacity: 0, y: 20 },
              }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {categoryData[activeTab].title}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                {categoryData[activeTab].subtitle}
              </p>
            </motion.div>

            <motion.div
              className={`grid gap-6 px-4 sm:px-0 ${
                activeTab === "hosting"
                  ? "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto"
                  : activeTab === "logotipos" || activeTab === "contenido"
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
              }`}
              variants={containerVariants}
            >
              {categoryData[activeTab].plans.map((plan) => (
                <motion.div
                  key={plan.id}
                  variants={itemVariants}
                  className="w-full cursor-pointer h-full"
                >
                  {activeTab === "hosting" ? (
                    <HostingPlanCard
                      plan={plan}
                      onClick={() => handlePlanClick(activeTab, plan.id)}
                    />
                  ) : (
                    <StandardPlanCard
                      plan={plan}
                      onClick={() => handlePlanClick(activeTab, plan.id)}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </TabsContent>
      </AnimatePresence>
    </Tabs>
  );
};

export default PricingTabs;
