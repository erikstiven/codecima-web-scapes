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
            className={`grid md:grid-cols-2 items-center ${
              reversed ? "flex-row-reverse" : ""
            }`}
          >
            <div className="p-10 space-y-6">
              <h3 className="text-codecima-blue text-lg font-semibold">
                {title}
              </h3>
              <h2 className="text-2xl font-bold text-white">{subtitle}</h2>
              <p className="text-gray-400 text-sm">{description}</p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                  >
                    <CheckCircle className="text-codecima-blue w-4 h-4 mt-0.5" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-6">
                <Link to={contactLink}>
                  <GlowButton>Solicitar Asesoría</GlowButton>
                </Link>

                <Link to={link}>
                  <GlowButton>
                    Ver Más <ChevronRight size={16} className="ml-2" />
                  </GlowButton>
                </Link>
              </div>
            </div>

            <motion.div
              className="flex justify-center items-center px-2 md:px-6 py-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={imageUrl}
                  alt={subtitle}
                  className="w-full max-w-[1000px] h-auto drop-shadow-2xl cursor-pointer"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
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
