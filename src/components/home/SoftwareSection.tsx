import React from "react";
import { CheckCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";

type SoftwareSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl: string;
  reversed?: boolean;
};

const SoftwareSection: React.FC<SoftwareSectionProps> = ({
  title,
  subtitle,
  description,
  features,
  imageUrl,
  reversed = false,
}) => {
  return (
    <div className="relative rounded-2xl p-[2px] overflow-hidden group">
      {/* Borde animado */}
      <span className="absolute inset-[-30%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#2563eb_100%)] opacity-30 rounded-2xl" />

      {/* Contenido interno de la tarjeta */}
      <div className="relative z-10 bg-[#0b0b23] rounded-2xl overflow-hidden">
        <div className={`grid md:grid-cols-2 items-center ${reversed ? "flex-row-reverse" : ""}`}>
          
          {/* Texto con padding p-10 */}
          <div className="p-10 space-y-6">
            <h3 className="text-codecima-blue text-lg font-semibold">{title}</h3>
            <h2 className="text-2xl font-bold text-white">{subtitle}</h2>
            <p className="text-gray-400 text-sm">{description}</p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <CheckCircle className="text-codecima-blue w-4 h-4 mt-0.5" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              <GlowButton>
                Solicitar Asesoría
              </GlowButton>
              <GlowButton>
                Ver Más <ChevronRight size={16} className="ml-2" />
              </GlowButton>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <img
              src={imageUrl}
              alt={subtitle}
              className="w-full h-full object-cover rounded-r-2xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default SoftwareSection;
