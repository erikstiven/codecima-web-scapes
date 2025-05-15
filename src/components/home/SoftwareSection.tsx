import React from "react";
import { CheckCircle, ChevronRight } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type SoftwareSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl: string;
  reversed?: boolean;
  link?: string;
  contactLink?: string;
};

const SoftwareSection: React.FC<SoftwareSectionProps> = ({
  title,
  subtitle,
  description,
  features,
  imageUrl,
  reversed = false,
  link = "#",
  contactLink = "/contacto",
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative p-[2px] rounded-2xl overflow-hidden group">
        <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#2563eb_100%)] opacity-50" />
        <span className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 blur-xl transition duration-500" />

        <div className="relative z-10 bg-[#0b0b23] rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl">
          <div
            className={cn(
              "flex flex-col md:flex-row items-center gap-8",
              reversed && "md:flex-row-reverse"
            )}
          >
            {/* Texto */}
            <div className="w-full p-10 space-y-6 text-center md:text-left">
              <h2 className="text-codecima-blue text-lg font-semibold">
                {title}
              </h2>
              <h3 className="text-2xl font-bold text-white">{subtitle}</h3>
              <p className="text-gray-400 text-sm">{description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                  >
                    <CheckCircle
                      className="text-codecima-blue w-4 h-4 mt-0.5"
                      aria-hidden="true"
                    />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
                <Link to={contactLink} aria-label="Solicitar asesoría">
                  <GlowButton>Solicitar Asesoría</GlowButton>
                </Link>

                <Link to={link} aria-label="Ver más del proyecto">
                  <GlowButton>
                    Ver Más <ChevronRight size={16} className="ml-2" />
                  </GlowButton>
                </Link>
              </div>
            </div>

            {/* Imagen */}
            <motion.div
              className="w-full flex justify-center items-center px-2 md:px-6 py-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Ir a ${subtitle}`}>
                <motion.img
                  src={imageUrl}
                  alt={`Vista del sistema ${subtitle}`}
                  loading="lazy"
                  width={800}
                  height={450}
                  className="w-full max-w-[600px] h-auto drop-shadow-2xl cursor-pointer"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSection;
