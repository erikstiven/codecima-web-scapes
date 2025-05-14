import React from "react";
import { cn } from "@/lib/utils";

interface GlowCardContainerProps {
  children: React.ReactNode;
  className?: string;
  rounded?: string;
}

const GlowCardContainer: React.FC<GlowCardContainerProps> = ({
  children,
  className = "",
  rounded = "rounded-2xl",
}) => {
  return (
    <div className={cn("relative group p-[2px] w-full", rounded)}>
      <div
        className={cn(
          "absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5,#9333ea,#2563eb)] opacity-30 pointer-events-none",
          rounded
        )}
      />
      <div
        className={cn(
          "relative z-10 bg-[#0b0b23] backdrop-blur-xl shadow-xl border border-codecima-blue/30 hover:border-codecima-blue/80 transition-all",
          rounded,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default GlowCardContainer;
