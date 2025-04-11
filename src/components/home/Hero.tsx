
import React, { useEffect, useState } from 'react';
import { Play, Rocket, Star, Sparkles, Zap, Send, ChevronRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [selectedSoftware, setSelectedSoftware] = useState('');
  
  const toggleCountryDropdown = () => {
    setCountryDropdownOpen(!countryDropdownOpen);
  };

  // Animated particle elements
  const Particles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: i % 3 === 0 ? '#0075ff' : i % 3 === 1 ? '#7156e5' : '#35b6ff',
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    );
  };

  // Animated flying rocket
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

  // Floating stars
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

  // Orbit effect for the main rocket
  const OrbitEffect = () => {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full">
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-codecima-blue/50 blur-sm"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: '0%',
            left: '50%',
            translateX: '-50%',
          }}
        />
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-codecima-purple/50 blur-sm"
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: '25%',
            right: '0%',
          }}
        />
        <motion.div
          className="absolute w-5 h-5 rounded-full bg-codecima-lightblue/50 blur-sm"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            bottom: '0%',
            left: '50%',
            translateX: '-50%',
          }}
        />
      </div>
    );
  };

  // Animated character for form
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

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Enhanced background with color gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-codecima-navy to-codecima-darkblue z-0">
        {/* Add a subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />
      </div>

      {/* Animated elements in background */}
      <Particles />
      <FloatingStars />
      <FlyingRocket />
      
      {/* Animated glow spots */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-codecima-blue/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-codecima-purple/5 blur-3xl"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side with title and CTA */}
          <motion.div 
            className="space-y-8 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Add orbiting effect around title */}
              <OrbitEffect />
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold leading-tight relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-codecima-purple to-purple-500 bg-clip-text text-transparent block"
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
              className="text-gray-300 text-xl max-w-md"
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
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="relative overflow-hidden group bg-gradient-to-r from-codecima-blue to-codecima-purple hover:from-codecima-purple hover:to-codecima-blue transition-all duration-500"
              >
                <motion.span
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-codecima-blue to-codecima-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <Play size={20} className="mr-2" />
                <span className="font-medium relative z-10">Ver Demo</span>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-codecima-blue/50 text-white hover:bg-codecima-blue/10 transition-all"
              >
                <span>Más Información</span>
                <ChevronRight size={16} className="ml-1" />
              </Button>
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
          
          {/* Right side with contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10"
          >
            {/* Add character mascot */}
            <CharacterMascot />
            
            {/* Form container with glass effect */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
              className="relative overflow-hidden rounded-xl bg-codecima-darkblue/50 backdrop-blur-xl border border-codecima-blue/30 shadow-2xl"
            >
              {/* Animated orbit effect inside the form */}
              <div className="absolute -inset-3 z-0">
                <motion.div
                  className="absolute w-10 h-10 rounded-full bg-codecima-purple/20 blur-md"
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
                  className="absolute w-6 h-6 rounded-full bg-codecima-blue/20 blur-md"
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
              
              {/* Form content */}
              <div className="relative z-10 p-6 space-y-4">
                <div className="flex items-center bg-codecima-navy/80 border border-codecima-blue/20 rounded-md px-4 py-3">
                  <input
                    type="text"
                    placeholder="Escribe tu nombre"
                    className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
                  />
                </div>
                
                <div className="flex items-center bg-codecima-navy/80 border border-codecima-blue/20 rounded-md px-4 py-3">
                  <input
                    type="tel"
                    placeholder="Escribe tu WhatsApp"
                    className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
                  />
                </div>
                
                <div className="flex items-center bg-codecima-navy/80 border border-codecima-blue/20 rounded-md px-4 py-3">
                  <input
                    type="email"
                    placeholder="Escribe tu correo"
                    className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
                  />
                </div>
                
                <div className="flex items-center bg-codecima-navy/80 border border-codecima-blue/20 rounded-md px-4 py-3">
                  <input
                    type="text"
                    placeholder="Escribe tu RUC o NIT"
                    className="bg-transparent w-full text-gray-300 placeholder-gray-500 focus:outline-none"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <div className="flex-1 relative bg-codecima-navy/80 border border-codecima-blue/20 rounded-md px-4 py-3">
                    <select
                      className="bg-transparent w-full text-gray-300 focus:outline-none appearance-none"
                      value={selectedSoftware}
                      onChange={(e) => setSelectedSoftware(e.target.value)}
                    >
                      <option value="" disabled selected className="text-gray-500">Elije un software</option>
                      <option value="carga-pesada" className="bg-codecima-navy text-white">Carga Pesada</option>
                      <option value="paqueteria" className="bg-codecima-navy text-white">Paquetería</option>
                      <option value="personalizado" className="bg-codecima-navy text-white">Personalizado</option>
                    </select>
                  </div>
                  
                  <div className="relative">
                    <div 
                      className="flex items-center justify-between bg-codecima-navy/80 border border-codecima-blue/20 rounded-md px-4 py-3 cursor-pointer min-w-[120px]"
                      onClick={toggleCountryDropdown}
                    >
                      <span className="text-gray-300">Perú</span>
                    </div>
                    
                    {countryDropdownOpen && (
                      <div className="absolute z-10 mt-1 w-full rounded-md bg-codecima-navy shadow-lg border border-codecima-blue/20">
                        <div className="py-1">
                          <button 
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-codecima-blue/20 w-full text-left"
                            onClick={() => {
                              setCountryDropdownOpen(false);
                            }}
                          >
                            Perú
                          </button>
                          <button 
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-codecima-blue/20 w-full text-left"
                            onClick={() => {
                              setCountryDropdownOpen(false);
                            }}
                          >
                            Colombia
                          </button>
                          <button 
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-codecima-blue/20 w-full text-left"
                            onClick={() => {
                              setCountryDropdownOpen(false);
                            }}
                          >
                            México
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-codecima-blue via-codecima-purple to-codecima-blue bg-size-200 bg-pos-0 hover:bg-pos-100 text-white py-3 rounded-md flex items-center justify-center transition-all duration-500"
                  style={{ backgroundSize: '200% auto' }}
                >
                  <Send className="mr-2 h-4 w-4" />
                  <span>SOLICITAR AHORA</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
