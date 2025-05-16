import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import CompanyLogos from "@/components/home/CompanyLogos";
import SoftwareSection from "@/components/home/SoftwareSection";
import Features from "@/components/home/Features";
import CallToAction from "@/components/home/CallToAction";
import Seo from "@/components/Seo";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const Index = () => {
  return (
    <Layout>
      <Seo
        title="CodeCima - Desarrollo Web y Hosting en Ecuador"
        description="Creamos páginas web modernas y servicios de hosting desde Riobamba para todo el país. Posiciona tu marca con CodeCima."
        keywords="desarrollo web Ecuador, páginas web Riobamba, diseño web, hosting económico"
        image="/images/preview.webp"
        url="https://www.codecima.com.ec"
      />

      <Hero />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <CompanyLogos />
        </motion.div>
      </motion.div>

      <section className="bg-gradient-to-b from-[#0a0a1b] via-[#0a0a23] to-[#0b0b2b] pt-24 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="mb-20">
            <SoftwareSection
              title="Plataforma para"
              subtitle="Gestión de Talento Humano - ColTalent"
              description="Automatiza y optimiza la administración del personal con ColTalent. Una herramienta versátil para instituciones públicas, privadas y emprendimientos que buscan eficiencia, transparencia y orden en su gestión de talento humano."
              features={[
                "Gestión de permisos y vacaciones",
                "Historial académico y laboral",
                "Evaluaciones de desempeño",
                "Módulo de perfil del empleado",
                "Reportes automáticos",
                "Aprobaciones jerárquicas por rol",
              ]}
              imageUrl="/images/coltalent-pc.webp"
              link="https://coltalent.com/"
              contactLink="https://wa.me/593999406026"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <SoftwareSection
              title="Plataforma para"
              subtitle="Gestión de Trámites - ColtaVirtual"
              description="Digitaliza los procesos institucionales y mejora la atención ciudadana con ColtaVirtual. Un sistema de gestión de trámites orientado a municipalidades, GADs y entidades públicas que buscan eficiencia, control y transparencia."
              features={[
                "Registro y seguimiento de trámites",
                "Notificaciones automáticas al ciudadano",
                "Panel de seguimiento institucional",
                "Historial de actuaciones y estados",
                "Roles de usuario por área",
                "Acceso desde cualquier dispositivo",
              ]}
              imageUrl="/images/colta-en-linea-pc.webp"
              reversed
              link="https://colta-en-linea.com/"
              contactLink="https://wa.me/593999406026"
            />
          </motion.div>
        </motion.div>
      </section>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <Features />
        </motion.div>

        <motion.div variants={itemVariants}>
          <CallToAction />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Index;
