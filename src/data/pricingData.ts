
import { Zap, Database, Server, Shield } from 'lucide-react';

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PlanIcon {
  name: string;
  component: React.FC<any>;
  color: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  highlighted: boolean;
  description: string;
  features: PlanFeature[];
  icons?: PlanIcon[];
}

export interface PricingCategory {
  title: string;
  subtitle: string;
  plans: Plan[];
}

export const categoryData: Record<string, PricingCategory> = {
  'diseno-web': {
    title: 'Paquetes Diseño Web',
    subtitle: 'Contrata HOY tu página WEB + HOSTING + DOMINIO',
    plans: [
      {
        id: 'landing-page',
        name: 'Landing Page',
        price: '149',
        highlighted: false,
        description: 'Ideal para profesionales independientes',
        features: [
          { text: '10 Correos Corporativos', included: true },
          { text: 'Diseño Web HTML5', included: true },
          { text: '1 Página', included: true },
          { text: 'SEO Básico - Metadatos', included: true },
          { text: 'Responsive', included: true },
          { text: 'Formulario de Contacto', included: true },
          { text: 'Redes Sociales', included: false },
          { text: 'Catálogo de Productos', included: false },
        ],
      },
      {
        id: 'basico',
        name: 'Básico',
        price: '199',
        highlighted: false,
        description: 'Estudios, consultorías y servicios',
        features: [
          { text: '25 Correos Corporativos', included: true },
          { text: 'Diseño Web HTML5', included: true },
          { text: '5 Páginas', included: true },
          { text: 'SEO Básico - Metadatos', included: true },
          { text: 'Responsive', included: true },
          { text: 'Formulario de Contacto', included: true },
          { text: 'Redes Sociales', included: true },
          { text: 'Catálogo de Productos', included: false },
        ],
      },
      {
        id: 'avanzado',
        name: 'Avanzado',
        price: '499',
        highlighted: true,
        description: 'Web completa y autoadministrable',
        features: [
          { text: '100 Correos Corporativos', included: true },
          { text: 'Diseño Web Autoadministrable', included: true },
          { text: 'Productos, Servicios Ilimitados', included: true },
          { text: 'SEO - Posicionamiento Avanzado', included: true },
          { text: 'Responsive', included: true },
          { text: 'Formulario Inteligente (A/I)', included: true },
          { text: 'Capacitación 5 Video Manual', included: true },
          { text: 'Catálogo de Productos', included: true },
        ],
      },
      {
        id: 'premium',
        name: 'Premium',
        price: '799',
        highlighted: false,
        description: 'Tienda virtual completa',
        features: [
          { text: '150 Correos Corporativos', included: true },
          { text: 'Diseño Web Autoadministrable', included: true },
          { text: 'Tienda Virtual - E-Commerce', included: true },
          { text: 'SEO - Posicionamiento Avanzado', included: true },
          { text: 'Responsive', included: true },
          { text: 'Formulario Inteligente (A/I)', included: true },
          { text: 'Capacitación & Manual', included: true },
          { text: 'Buscador (AJAX)', included: true },
          { text: 'Ventas vía WhatsApp', included: true },
        ],
      },
    ],
  },
  'hosting': {
    title: 'Hosting',
    subtitle: 'Elija su plan de Hosting Veloz y Seguro para WordPress, Joomla y HTML',
    plans: [
      {
        id: 'hosting-premium',
        name: 'HOSTING PREMIUM',
        price: '100',
        highlighted: false,
        description: '1 año Hosting PREMIUM',
        features: [
          { text: 'SuperCacher + SSD', included: true },
          { text: '30-Day Money-Back Guarantee', included: true },
          { text: 'Garantía de devolución del dinero hasta 30 días', included: true },
          { text: 'Soporte técnico 24/7', included: true },
          { text: 'Uptime garantizado 99.9%', included: true },
          { text: 'Backups automáticos', included: true },
        ],
        icons: [
          { name: 'zap', component: Zap, color: 'bg-codecima-purple text-white' },
          { name: 'server', component: Server, color: 'bg-codecima-blue text-white' },
          { name: 'shield', component: Shield, color: 'bg-purple-500 text-white' },
        ]
      },
      {
        id: 'hosting-wordpress',
        name: 'HOSTING WordPress',
        price: '100',
        highlighted: false,
        description: '1 Año Hosting WordPress',
        features: [
          { text: 'LiteSpeed® Cache + SSD', included: true },
          { text: '30-Day Money-Back Guarantee', included: true },
          { text: 'Garantía de devolución del dinero hasta 30 días', included: true },
          { text: 'Soporte técnico 24/7', included: true },
          { text: 'Optimizado para WordPress', included: true },
          { text: 'Actualizaciones automáticas', included: true },
        ],
        icons: [
          { name: 'zap', component: Zap, color: 'bg-codecima-purple text-white' },
          { name: 'database', component: Database, color: 'bg-codecima-blue text-white' },
          { name: 'shield', component: Shield, color: 'bg-purple-500 text-white' },
        ]
      },
    ],
  },
  'logotipos': {
    title: 'Logotipos',
    subtitle: 'Diseños profesionales para tu marca',
    plans: [
      {
        id: 'logo-basico',
        name: 'Logo Básico',
        price: '99',
        highlighted: false,
        description: 'Ideal para emprendedores',
        features: [
          { text: '2 Propuestas de diseño', included: true },
          { text: '2 Revisiones', included: true },
          { text: 'Entrega en 5 días', included: true },
          { text: 'Formato JPG/PNG', included: true },
          { text: 'Formato vectorial', included: false },
          { text: 'Manual de marca', included: false },
        ],
      },
      {
        id: 'logo-profesional',
        name: 'Logo Profesional',
        price: '199',
        highlighted: true,
        description: 'Para pequeñas empresas',
        features: [
          { text: '3 Propuestas de diseño', included: true },
          { text: '3 Revisiones', included: true },
          { text: 'Entrega en 3 días', included: true },
          { text: 'Todos los formatos', included: true },
          { text: 'Formato vectorial', included: true },
          { text: 'Manual de marca básico', included: true },
        ],
      },
      {
        id: 'logo-premium',
        name: 'Logo Premium',
        price: '349',
        highlighted: false,
        description: 'Solución completa de branding',
        features: [
          { text: '5 Propuestas de diseño', included: true },
          { text: 'Revisiones ilimitadas', included: true },
          { text: 'Entrega en 7 días', included: true },
          { text: 'Todos los formatos', included: true },
          { text: 'Manual de marca completo', included: true },
          { text: 'Papelería básica', included: true },
        ],
      },
    ],
  },
  'contenido': {
    title: 'Contenido',
    subtitle: 'Contenido profesional para tu web y redes sociales',
    plans: [
      {
        id: 'contenido-basico',
        name: 'Básico',
        price: '149',
        highlighted: false,
        description: 'Ideal para emprendedores',
        features: [
          { text: '5 publicaciones mensuales', included: true },
          { text: '1 Red social', included: true },
          { text: 'Diseño básico', included: true },
          { text: 'Copywriting', included: true },
          { text: 'Informe mensual', included: false },
          { text: 'Estrategia de contenido', included: false },
        ],
      },
      {
        id: 'contenido-estandar',
        name: 'Estándar',
        price: '299',
        highlighted: true,
        description: 'Para pequeñas empresas',
        features: [
          { text: '12 publicaciones mensuales', included: true },
          { text: '2 Redes sociales', included: true },
          { text: 'Diseño profesional', included: true },
          { text: 'Copywriting avanzado', included: true },
          { text: 'Informe mensual', included: true },
          { text: 'Estrategia de contenido', included: true },
        ],
      },
      {
        id: 'contenido-premium',
        name: 'Premium',
        price: '499',
        highlighted: false,
        description: 'Solución completa de contenido',
        features: [
          { text: '20 publicaciones mensuales', included: true },
          { text: '3 Redes sociales', included: true },
          { text: 'Diseño premium', included: true },
          { text: 'Copywriting profesional', included: true },
          { text: 'Informe semanal', included: true },
          { text: 'Estrategia completa', included: true },
        ],
      },
    ],
  },
};
