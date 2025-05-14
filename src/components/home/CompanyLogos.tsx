import React from "react";

const CompanyLogos = () => {
  const logos = [
    {
      alt: "Eudaimonia",
      src: "/public/images/CompanyLogos/eudaimonia-logo.png",
      url: "https://www.codecima.com",
    },
    {
      alt: "TropicTrade",
      src: "/public/images/CompanyLogos/tropictrade-logo.png",
      url: "https://www.tropictradesas.com/",
    },
    {
      alt: "BetaDent",
      src: "/public/images/CompanyLogos/betadent-logo.png",
      url: "https://dent.codecima.com/",
    },
    {
      alt: "Zahofer Dental",
      src: "/public/images/CompanyLogos/zahofer-logo.png",
      url: "https://zahofer.codecima.com/",
    },
    
  ];

  // Si hay menos de 4 logos, no se repiten ni se animan
  const shouldAnimate = logos.length >= 4;
  const displayedLogos = shouldAnimate ? [...logos, ...logos] : logos;

  return (
    <section className="py-16 bg-gradient-to-b from-[#0a0a23] via-[#0b0b2b] to-[#0a0a23] border-y border-codecima-blue/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl text-white mb-12 font-medium">
          Empresas que{" "}
          <span className="text-codecima-blue font-semibold">
            confían en nosotros
          </span>
        </h2>

        <div className="relative w-full overflow-hidden">
          <ul
            className={`flex ${
              shouldAnimate ? "animate-infinite-scroll" : "justify-center flex-wrap"
            } whitespace-nowrap gap-6 sm:gap-8 md:gap-10 [&_li]:mx-2`}
          >
            {displayedLogos.map((logo, index) => (
              <li key={index}>
                <a href={logo.url} target="_blank" rel="noopener noreferrer">
                  <div className="relative inline-flex h-16 sm:h-20 w-32 sm:w-40 items-center justify-center rounded-xl p-[1px] transition active:scale-95 overflow-hidden">
                    {/* Borde animado */}
                    <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#2563eb_100%)]" />
                    {/* Contenido interno */}
                    <span className="relative z-10 inline-flex h-full w-full items-center justify-center rounded-xl bg-codecima-navy backdrop-blur-xl">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-8 sm:h-10 w-auto object-contain transition duration-300 hover:grayscale-0 opacity-100 hover:opacity-100"
                      />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
