
import React, { useEffect } from 'react';
import { Play, Rocket, Star, Sparkles, Zap } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import ContactForm from '../ContactForm';

// Animated flying rocket component
const FlyingRocket = () => {
  return (
    <motion.div
      className="absolute z-10"
      initial={{ x: -100, y: 100, opacity: 0 }}
      animate={{
        x: [null, 400, 300, 200, 0, -100],
        y: [null, 0, 150, 50, 100, 100],
        rotate: [0, 15, 5, -15, -5, 0],
        opacity: [0, 1, 1, 1, 1, 0]
      }}
      transition={{
        duration: 15,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Rocket size={40} className="text-codecima-lightblue filter drop-shadow-[0_0_8px_rgba(53,182,255,0.8)]" />
    </motion.div>
  );
};

// Floating rocket for title section
const FloatingRocket = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    const animateRocket = async () => {
      while (true) {
        await controls.start({
          y: [0, -15, 0, 10, 0],
          rotate: [0, 5, 0, -5, 0],
          transition: { 
            duration: 6, 
            ease: "easeInOut", 
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity
          }
        });
      }
    };
    
    animateRocket();
  }, [controls]);
  
  return (
    <motion.div 
      animate={controls}
      className="absolute -top-16 -right-12 text-codecima-blue opacity-80"
    >
      <Rocket size={80} />
    </motion.div>
  );
};

// Floating stars that twinkle
const FloatingStars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        >
          {i % 2 === 0 ? (
            <Star size={i % 3 === 0 ? 24 : 16} className="text-yellow-300" />
          ) : (
            <Sparkles size={i % 3 === 0 ? 24 : 16} className="text-codecima-purple" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Character mascot that floats near the form
const CharacterMascot = () => {
  return (
    <motion.div 
      className="absolute -bottom-10 -right-16 z-10"
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.div 
        className="relative w-32 h-32 rounded-full bg-gradient-to-br from-codecima-purple to-codecima-blue flex items-center justify-center"
        animate={{ 
          boxShadow: [
            "0 0 15px rgba(113, 86, 229, 0.4)", 
            "0 0 25px rgba(113, 86, 229, 0.6)", 
            "0 0 15px rgba(113, 86, 229, 0.4)"
          ] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Zap size={50} className="text-white transform -rotate-12" />
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 rounded-full bg-codecima-blue/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-codecima-purple/5 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* New animated elements */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-codecima-lightblue/5 blur-2xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
        
        {/* Add floating stars across the hero */}
        <FloatingStars />
        
        {/* Add flying rocket that moves across the screen */}
        <FlyingRocket />
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="space-y-8 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <FloatingRocket />
              <motion.h1 
                className="text-5xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  className="text-purple-500 block"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Software
                </motion.span>
                <motion.span 
                  className="text-white block mt-2"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Personalizado
                </motion.span>
              </motion.h1>
            </div>
            
            <motion.p 
              className="text-gray-300 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Para empresas de transporte de Carga Pesada y Paquetería
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-codecima-purple to-codecima-blue opacity-70 blur-sm"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <button className="relative flex items-center text-white bg-codecima-blue hover:bg-codecima-blue/80 rounded-md px-6 py-3 transition-colors">
                <Play size={20} className="mr-2" />
                <span className="font-medium">Ver Demo</span>
              </button>
            </motion.div>
            
            <motion.div 
              className="flex space-x-3 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  className="w-2 h-2 rounded-full bg-codecima-blue/70"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10"
          >
            {/* Add character mascot near the form */}
            <CharacterMascot />
            
            <motion.div
              className="absolute -z-10 inset-0 bg-codecima-blue/5 rounded-xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Orbit effect around the form */}
            <div className="absolute -inset-3 z-0">
              <motion.div
                className="absolute w-10 h-10 rounded-full bg-codecima-purple/30 blur-md"
                animate={{
                  x: [0, 150, 300, 300, 150, 0, -150, -300, -300, -150, 0],
                  y: [-150, -300, -150, 150, 300, 150, 300, 150, -150, -300, -150],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute w-6 h-6 rounded-full bg-codecima-blue/30 blur-md"
                animate={{
                  x: [0, -150, -300, -300, -150, 0, 150, 300, 300, 150, 0],
                  y: [150, 300, 150, -150, -300, -150, -300, -150, 150, 300, 150],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
            
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 40px rgba(0, 117, 255, 0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-codecima-darkblue/80 border-2 border-codecima-blue/30 rounded-xl overflow-hidden shadow-lg relative z-10"
            >
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
