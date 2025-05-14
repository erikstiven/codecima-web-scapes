import React from "react";
import { cn } from "@/lib/utils";

interface ThinGlowCardProps {
  children: React.ReactNode;
  className?: string;
}

const ThinGlowCard: React.FC<ThinGlowCardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={cn(
        "relative group overflow-hidden rounded-2xl p-[1.5px] bg-transparent transition-transform duration-300 hover:scale-[1.01]",
        className
      )}
    >
      {/* Fondo animado en pseudo-elemento */}
      <div className="absolute inset-0 rounded-2xl z-0 pointer-events-none before:content-[''] before:absolute before:inset-[-150%] before:bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5,#9333ea,#2563eb)] before:animate-spin-slow before:opacity-50 before:rounded-full" />

      {/* Contenido sobre el borde */}
      <div className="relative z-10 bg-[#0b0b23] rounded-[calc(1rem-2px)] p-6 sm:p-8 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default ThinGlowCard;
