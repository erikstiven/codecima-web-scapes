import React from "react";
import {
  Smartphone,
  Settings,
  Activity,
  FileCheck,
  Clock,
  BarChart,
  ShieldCheck,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Settings />,
      title: "Panel Administrable",
      description:
        "Modifica el contenido de tu sitio sin conocimientos técnicos desde un panel seguro y fácil de usar.",
    },
    {
      icon: <FileCheck />,
      title: "Pasarela de Pagos",
      description:
        "Acepta pagos en línea con integración a Stripe, PayPhone o PayPal en tu tienda o plataforma.",
    },
    {
      icon: <Smartphone />,
      title: "Diseño Adaptable & App Android",
      description:
        "Tu sitio web se verá increíble en móviles, tablets y PCs. Además, puedes transformarlo en una app Android.",
    },
    {
      icon: <BarChart />,
      title: "Dashboard con estadísticas",
      description:
        "Visualiza datos en tiempo real para tomar decisiones informadas con gráficos dinámicos e intuitivos.",
    },
    {
      icon: <ShieldCheck />,
      title: "Seguridad avanzada",
      description:
        "Protección con autenticación segura, roles de acceso, encriptación y actualizaciones periódicas.",
    },
    {
      icon: <Clock />,
      title: "Optimización SEO y carga rápida",
      description:
        "Diseñado para posicionar en Google y ofrecer una experiencia veloz incluso en conexiones lentas.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a23] via-[#0b0b2b] to-[#0a0a23] border-y border-codecima-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">
            <span className="text-white">Fortalece tu empresa con estas </span>
            <span className="text-codecima-blue">Herramientas</span>
          </h2>
          <p className="text-gray-400">
            Hechas para incrementar la productividad de tu empresa
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative inline-flex h-full w-full rounded-xl p-[1px] overflow-hidden group"
            >
              {/* Borde animado como en CompanyLogos */}
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4f46e5_0%,#9333ea_50%,#2563eb_100%)]" />

              {/* Contenido interno */}
              <span className="relative z-10 inline-flex h-full w-full flex-col items-start justify-start gap-4 rounded-xl bg-codecima-navy p-6 backdrop-blur-xl transition-transform group-hover:scale-[1.01]">
                <div className="text-codecima-blue p-3 bg-codecima-blue/10 rounded-lg inline-block group-hover:bg-codecima-blue/20 transition-colors">
                  {React.cloneElement(feature.icon, { size: 24 })}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
