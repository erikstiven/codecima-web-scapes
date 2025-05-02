import React from "react";
import { motion } from "framer-motion";

// Estrellas normales (sin fugaces)
const AnimatedStars = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    {[...Array(60)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          width: "2px",
          height: "2px",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: 0.1,
        }}
        animate={{ opacity: [0.1, 0.8, 0.1] }}
        transition={{
          duration: 4 + Math.random() * 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

const SpaceHeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Fondo de galaxias */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,255,0.2),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(128,0,255,0.2),transparent_40%)]" />
      
      {/* Estrellas animadas normales */}
      <AnimatedStars />
    </div>
  );
};

export default SpaceHeroBackground;
