import React from "react";
import { cn } from "@/lib/utils"; // O usa classNames si prefieres

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const GlowButton: React.FC<GlowButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none group transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95",
        className
      )}
      {...props}
    >
      {/* Fondo animado girando */}
      <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#2563eb_100%)] opacity-50 group-hover:opacity-80 transition duration-500" />
      
      {/* Resplandor al hover */}
      <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 blur-xl transition duration-500" />

      {/* Contenido */}
      <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-codecima-navy px-7 text-sm font-medium text-white backdrop-blur-xl gap-2 relative z-10">
        {children}
      </span>
    </button>
  );
};

export default GlowButton;
