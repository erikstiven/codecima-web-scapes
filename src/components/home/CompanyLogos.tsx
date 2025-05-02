import React from "react";

const CompanyLogos = () => {
  const logos = [
    {
      alt: "Apple",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      alt: "Apache Spark",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
    },
    {
      alt: "Samsung",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    },
    {
      alt: "Sass",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    },
    {
      alt: "Facebook",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    },
    {
      alt: "Airbnb",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    },
  ];

  const repeated = [...logos, ...logos];

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
          <ul className="flex animate-infinite-scroll whitespace-nowrap gap-8 [&_li]:mx-2">
            {repeated.map((logo, index) => (
              <li key={index}>
                <div className="relative inline-flex h-20 w-40 items-center justify-center rounded-xl p-[1px] transition active:scale-95 overflow-hidden">
                  {/* Borde animado */}
                  <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#2563eb_100%)]" />
                  {/* Contenido interno */}
                  <span className="relative z-10 inline-flex h-full w-full items-center justify-center rounded-xl bg-codecima-navy backdrop-blur-xl">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-10 w-auto object-contain scale hover:grayscale-0 opacity-100 hover:opacity-100 transition duration-300"
                    />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
