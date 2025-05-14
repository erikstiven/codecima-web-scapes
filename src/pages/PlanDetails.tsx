import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { CheckCircle, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { categoryData } from "@/data/pricingData";
import GlowButton from "@/components/ui/GlowButton";

const AnimatedCard = ({ children, className = "" }) => (
  <div
    className={`relative group rounded-xl p-[1px] overflow-hidden ${className}`}
  >
    <div className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#2563eb_100%)] opacity-30 group-hover:opacity-80 transition duration-500" />
    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 blur-xl transition duration-500" />
    <div className="relative z-10 rounded-xl bg-gradient-to-b from-[#0a0a1b] via-[#0a0a23] to-[#0b0b2b] backdrop-blur-xl shadow-xl p-6">
      {children}
    </div>
  </div>
);
// ...importaciones sin cambios...

const PlanDetails = () => {
  const { categoryId, planId } = useParams();
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryId && planId) {
      const category = categoryData[categoryId];
      if (category) {
        const selectedPlan = category.plans.find((p) => p.id === planId);
        if (selectedPlan) {
          const fullDesc = selectedPlan.fullDescription;
          setPlan({
            ...selectedPlan,
            categoryTitle: category.title,
            fullDescription: Array.isArray(fullDesc)
              ? fullDesc
              : typeof fullDesc === "string"
              ? fullDesc
                  .split(". ")
                  .map((p) => p.trim() + (p.trim().endsWith(".") ? "" : "."))
              : [],
            gallery: selectedPlan.gallery || [],
          });
          setLoading(false);
          return;
        }
      }
      navigate("/precios");
      toast.error("Plan no encontrado");
    }
  }, [categoryId, planId, navigate]);

  if (loading) {
    return (
      <Layout>
        <div className="pt-28 pb-16 flex justify-center items-center min-h-[60vh]">
          <div className="animate-pulse text-codecima-blue text-xl">
            Cargando información del plan...
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-24 pb-16 w-full bg-gradient-to-b from-[#0a0a1b] via-[#0a0a23] to-[#0b0b2b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <GlowButton className="mb-6" onClick={() => navigate("/precios")}>
              <ChevronLeft size={16} className="mr-2" /> Volver a Precios
            </GlowButton>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-2">
                <span className="text-codecima-blue">{plan.name}</span>
              </h1>
              <div className="flex items-center">
                <p className="text-gray-400">{plan.categoryTitle}</p>
                <div className="ml-3 text-2xl font-bold text-white">
                  USD {plan.price}
                </div>
              </div>
            </motion.div>
          </div>

          <AnimatedCard className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              Galería de ejemplos
            </h2>
            <Carousel className="w-full">
              <CarouselContent>
                {(plan.gallery || []).map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden">
                        <div className="flex items-center justify-center max-h-[400px] p-4">
                          <img
                            src={image.url}
                            alt={image.alt || `Imagen del plan ${plan.name}`}
                            className="max-h-[350px] w-auto object-contain mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="static translate-y-0 bg-codecima-darkblue border-codecima-blue/40 text-white hover:bg-codecima-blue/30" />
                <CarouselNext className="static translate-y-0 bg-codecima-darkblue border-codecima-blue/40 text-white hover:bg-codecima-blue/30" />
              </div>
            </Carousel>
          </AnimatedCard>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <AnimatedCard>
                <h2 className="text-xl font-semibold text-white mb-4">
                  Descripción del Plan
                </h2>
                <div className="text-gray-300 prose prose-invert prose-blue max-w-none space-y-4">
                  {plan.fullDescription.map((line: string, index: number) => (
                    <p key={index} className="mb-2">
                      {line}
                    </p>
                  ))}
                </div>
              </AnimatedCard>
            </div>

            <div>
              <AnimatedCard className="sticky top-24">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Características
                </h2>

                {plan.icons && (
                  <div className="flex justify-around mb-4">
                    {plan.icons.map((icon, i) => (
                      <div key={i} className={`${icon.color} p-2 rounded-full`}>
                        <icon.component size={20} />
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle
                        className="text-codecima-blue mr-2 mt-0.5 flex-shrink-0"
                        size={18}
                      />
                      <span className="text-gray-300">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <GlowButton
                  className="mb-3 w-full"
                  onClick={() => {
                    const mensaje = encodeURIComponent(
                      "¡Hola! Estoy interesado en contratar uno de sus planes desde su sitio web."
                    );
                    const numero = "+593999406026";
                    window.open(
                      `https://wa.me/${numero}?text=${mensaje}`,
                      "_blank"
                    );
                  }}
                >
                  Contratar Ahora
                </GlowButton>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlanDetails;
