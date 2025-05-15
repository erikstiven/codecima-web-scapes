import React from "react";

const CompanyLogos = () => {
  const logos = [
    {
      alt: "Eudaimonia",
      src: "/images/CompanyLogos/eudaimonia-logo.webp",
      url: "https://www.codecima.com",
    },
    {
      alt: "TropicTrade",
      src: "/images/CompanyLogos/tropictrade-logo.webp",
      url: "https://www.tropictradesas.com/",
    },
    {
      alt: "BetaDent",
      src: "/images/CompanyLogos/betadent-logo.webp",
      url: "https://dent.codecima.com/",
    },
    {
      alt: "Zahofer Dental",
      src: "/images/CompanyLogos/zahofer-logo.webp",
      url: "https://zahofer.codecima.com/",
    },
  ];

  const shouldAnimate = logos.length >= 4;
  const displayedLogos = shouldAnimate ? [...logos, ...logos] : logos;

  return (
    <section className="py-16 bg-gradient-to-b from-[#0a0a23] via-[#0b0b2b] to-[#0a0a23] border-y border-codecima-blue/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl text-white mb-12 font-medium">
          Empresas que {" "}
          <span className="text-codecima-blue font-semibold">
            confían en nosotros
          </span>
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-6 sm:gap-8 md:gap-10">
            {displayedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <a href={logo.url} target="_blank" rel="noopener noreferrer">
                  <div className="relative inline-flex h-16 sm:h-20 w-32 sm:w-40 items-center justify-center rounded-xl p-[1px] transition active:scale-95 overflow-hidden">
                    <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#2563eb_100%)]" />
                    <span className="relative z-10 inline-flex h-full w-full items-center justify-center rounded-xl bg-codecima-navy backdrop-blur-xl">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-8 sm:h-10 w-auto object-contain transition duration-300 hover:grayscale-0 opacity-100 hover:opacity-100"
                      />
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CompanyLogos;
