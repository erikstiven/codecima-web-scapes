import { Zap, Database, Server, Shield } from "lucide-react";

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
  fullDescription?: string | string[]; // permite usar HTML o un array de strings
  //faqs?: { question: string; answer: string }[];
  gallery?: { url: string; alt: string }[];
}

export interface PricingCategory {
  title: string;
  subtitle: string;
  plans: Plan[];
}

export const categoryData: Record<string, PricingCategory> = {
  "diseno-web": {
    title: "Paquetes Diseño Web",
    subtitle: "Contrata HOY tu página WEB + HOSTING + DOMINIO",
    plans: [
      {
        id: "spark",
        name: "Plan Spark ✨",
        price: "160",
        highlighted: false,
        description: "Ideal para profesionales o servicios básicos",
        fullDescription: [
          "La opción ideal para quienes desean destacar en internet con una presencia impactante y profesional.",
          "Con este plan, obtienes una Landing Page moderna, estratégica y optimizada, diseñada para captar la atención desde el primer segundo y guiar al visitante hacia una acción concreta, ya sea contactarte, conocer tus servicios o iniciar una compra.",
          "Una Landing Page bien diseñada no solo es estética, sino funcional: está creada con un objetivo específico y mide resultados. Es el primer paso hacia una transformación digital real y efectiva.",
          "🔹 ¿Por qué una Landing Page?",
          "En un mundo cada vez más digital y competitivo, tener una landing page no es un lujo, es una necesidad. Es la herramienta perfecta para:",
          "• Transmitir confianza y profesionalismo desde el primer clic.",
          "• Atraer clientes potenciales y presentar tu propuesta de valor de forma clara y directa.",
          "• Maximizar conversiones, enfocando toda la estructura visual y de contenido a un solo objetivo.",
          "• Medir resultados y ajustar tu estrategia según el comportamiento del usuario.",
          "• Destacar en buscadores, gracias a su estructura optimizada para SEO.",
          "Además, las Landing Pages son ideales para campañas de marketing, lanzamientos, eventos, promociones o simplemente para contarle al mundo quién eres y qué haces de forma memorable.",
        ],

        features: [
          { text: "No incluye CMS", included: false },
          {
            text: "Landing Page con 5 secciones y navegación vertical",
            included: true,
          },
          {
            text: "Diseño 100% responsivo (computadoras, laptops, tablets y celulares)",
            included: true,
          },
          { text: "Integración con redes sociales", included: true },
          {
            text: "Soporte para videos, animaciones, galerías de fotos, banners e iFrames",
            included: true,
          },
          { text: "Ubicación en Google Maps", included: true },
          { text: "Formulario de contacto", included: true },
          { text: "10 correos corporativos", included: true },
          { text: "SEO básico", included: true },
          { text: "1 año de hosting gratuito", included: true },
          { text: "ChatBot básico", included: true },
          { text: "Soporte técnico por 3 meses", included: true },
          {
            text: "Extras: CMS opcional por $65/año",
            included: true,
          },
        ],
        gallery: [
          {
            url: "https://blog.hubspot.es/hubfs/media/16216960490296087.jpeg",
            alt: "Vista general del plan Spark",
          },
          {
            url: "https://cdn.escala.com/wp-content/uploads/2022/04/escala-landing-page-ejemplos-escala.png",
            alt: "Formulario de contacto Spark",
          },
        ],
      },
      {
        id: "boost",
        name: "Plan Boost 🚀",
        price: "210",
        highlighted: false,
        description:
          "Ideal para quienes buscan velocidad, dinamismo y una experiencia moderna",
        fullDescription: [
          "Ideal para quienes desean llevar su sitio web a un siguiente nivel con una experiencia más dinámica e interactiva.",
          "Este plan ofrece una SPA (Single Page Application), lo que permite una navegación fluida y veloz entre secciones sin recargar la página, brindando una experiencia moderna y profesional a los visitantes.",
          "Es perfecto para marcas que quieren proyectar confianza, solidez y agilidad en la navegación.",
          "🔹 ¿Por qué una SPA profesional?",
          "Una SPA mejora significativamente la experiencia del usuario, al eliminar tiempos de carga innecesarios. Ideal para sitios donde se desea mantener la atención del visitante sin interrupciones.",
          "• Mejora la velocidad de navegación entre secciones.",
          "• Proyecta una imagen tecnológica y moderna.",
          "• Reduce la fricción para que los usuarios accedan rápidamente a la información que buscan.",
          "• Mayor compatibilidad con animaciones y transiciones suaves.",
          "• Aumenta la posibilidad de conversión al mantener el enfoque del usuario.",
          "Un sitio rápido y fluido puede marcar la diferencia entre captar un cliente o perderlo. Con Boost, das un paso adelante en tu presencia digital.",
        ],
        features: [
          { text: "No incluye CMS", included: false },
          {
            text: "SPA (Single Page Application) con 5 secciones/pestañas",
            included: true,
          },
          {
            text: "Diseño 100% responsivo (computadoras, laptops, tablets y celulares)",
            included: true,
          },
          { text: "Integración con redes sociales", included: true },
          {
            text: "Soporte para videos, animaciones, galerías de fotos, banners e iFrames",
            included: true,
          },
          { text: "Ubicación en Google Maps", included: true },
          { text: "Formulario de contacto", included: true },
          { text: "Reseñas de clientes", included: true },
          { text: "30 correos corporativos", included: true },
          {
            text: "Configuración de 6 correos (Gmail y Outlook)",
            included: true,
          },
          { text: "SEO básico", included: true },
          { text: "1 año de hosting gratuito", included: true },
          { text: "ChatBot básico", included: true },
          { text: "Soporte técnico por 6 meses", included: true },
          { text: "Extras: CMS opcional por $65/año", included: true },
        ],
        gallery: [
          {
            url: "https://pleybast.com/wp-content/uploads/2023/07/ejemplo-de-pagina-de-inicio-de-sitio-web.png",
            alt: "Vista general SPA",
          },
          {
            url: "https://pleybast.com/wp-content/uploads/2023/07/ejemplo-de-inicio-de-una-pagina-web.png",
            alt: "Interfaz SPA con reseñas",
          },
        ],
      },

      {
        id: "elite",
        name: "Plan Elite ⚡",
        price: "499",
        highlighted: true,
        description:
          "Ideal para negocios que quieren crecer, gestionar y actualizar su sitio sin depender de terceros",
        fullDescription: [
          "Pensado para negocios en crecimiento que requieren autonomía y escalabilidad digital.",
          "Este plan incluye una plataforma autoadministrable con CMS, lo que permite al cliente gestionar y actualizar sus productos, servicios o contenidos de manera sencilla, sin depender de un desarrollador.",
          "Ideal para marcas que buscan profesionalismo, independencia y optimización constante.",
          "🔹 ¿Por qué una plataforma autoadministrable?",
          "Contar con un CMS te permite tener el control total de tu sitio web, adaptarlo a tus campañas, temporadas o cambios de estrategia sin complicaciones.",
          "• Agrega o modifica productos y servicios en cualquier momento.",
          "• Gestiona secciones personalizadas según tus necesidades.",
          "• Mantén tu sitio siempre actualizado sin costo adicional por cambios.",
          "• Potente SEO avanzado para mejorar tu posicionamiento en buscadores.",
          "• Capacidad de crecimiento ilimitado: más contenido, más oportunidades.",
          "Este plan es una inversión para negocios que evolucionan constantemente y quieren una herramienta flexible, potente y moderna.",
        ],
        features: [
          { text: "Plataforma autoadministrable con CMS", included: true },
          { text: "Productos y servicios ilimitados", included: true },
          { text: "Catálogo virtual de productos", included: true },
          { text: "Múltiples secciones", included: true },
          {
            text: "Diseño 100% responsivo (computadoras, laptops, tablets y celulares)",
            included: true,
          },
          { text: "Integración con redes sociales", included: true },
          {
            text: "Soporte para videos, animaciones, galerías de fotos, banners e iFrames",
            included: true,
          },
          { text: "Ubicación en Google Maps", included: true },
          { text: "Formulario de contacto inteligente", included: true },
          { text: "50 correos corporativos", included: true },
          {
            text: "Configuración de 6 correos (Gmail y Outlook)",
            included: true,
          },
          { text: "Software de posicionamiento SEO avanzado", included: true },
          { text: "1 año de hosting gratuito", included: true },
          {
            text: "1 año de Elementor gratuito (si se usa Elementor)",
            included: true,
          },
          { text: "ChatBot básico", included: true },
          { text: "Soporte técnico por 6 meses", included: true },
          {
            text: "Capacitación para la gestión de la plataforma",
            included: true,
          },
          {
            text: "Extras: Elementor es gratuito el primer año si se implementa",
            included: true,
          },
        ],
        gallery: [
          {
            url: "https://evaporto.com/wp-content/uploads/2022/01/Mejores-paginas-de-cursos-online-gratuitas-Miriadax.jpg",
            alt: "Diseño profesional Elite",
          },
          {
            url: "https://bigredes.com/wp-content/uploads/2021/04/paginas-web-educativas-y-de-cursos-online@learndash-1024x546.jpg",
            alt: "Vista de CMS autogestionable",
          },
        ],
      },

      {
        id: "titan",
        name: "Plan Titan 🏆",
        price: "799",
        highlighted: false,
        description:
          "Ideal para negocios que desean vender productos online de forma profesional",
        fullDescription: [
          "Diseñado para emprendedores y empresas que desean vender por internet de manera profesional.",
          "Con Titan obtienes una tienda virtual completa, con pasarela de pagos integrada, catálogo ilimitado y herramientas enfocadas en convertir visitantes en compradores.",
          "Ideal para quienes quieren aprovechar al máximo el comercio electrónico y competir al más alto nivel.",
          "🔹 ¿Por qué tener una tienda virtual profesional?",
          "El comercio digital ha dejado de ser una opción para convertirse en una necesidad. Un e-commerce bien diseñado mejora tus ventas, posiciona tu marca y permite escalar sin límites.",
          "• Venta directa desde tu sitio, sin intermediarios.",
          "• Pagos seguros con Stripe, PayPal y ventas por WhatsApp.",
          "• Catálogo organizado de productos con múltiples secciones.",
          "• Control total de tu inventario y gestión desde el CMS.",
          "• Posicionamiento SEO avanzado para atraer más clientes.",
          "• Plataforma responsiva, accesible desde cualquier dispositivo.",
          "Titan es el impulso que tu negocio necesita para expandirse y vender 24/7 sin fronteras.",
        ],
        features: [
          { text: "Tienda virtual / E-commerce", included: true },
          { text: "Plataforma autoadministrable con CMS", included: true },
          { text: "Múltiples secciones", included: true },
          { text: "Productos y servicios ilimitados", included: true },
          { text: "Catálogo virtual de productos", included: true },
          { text: "Recepción de pagos con Stripe y PayPal", included: true },
          { text: "Botón de venta vía WhatsApp", included: true },
          {
            text: "Diseño 100% responsivo (computadoras, laptops, tablets y celulares)",
            included: true,
          },
          { text: "Integración con redes sociales", included: true },
          {
            text: "Soporte para videos, animaciones, galerías de fotos, banners e iFrames",
            included: true,
          },
          { text: "Ubicación en Google Maps", included: true },
          { text: "Formulario de contacto inteligente", included: true },
          { text: "100 correos corporativos", included: true },
          {
            text: "Configuración de 10 correos (Gmail y Outlook)",
            included: true,
          },
          { text: "Software de posicionamiento SEO avanzado", included: true },
          { text: "1 año de hosting gratuito", included: true },
          { text: "ChatBot", included: true },
          { text: "Soporte técnico por 6 meses", included: true },
          {
            text: "Capacitación para la gestión de la plataforma",
            included: true,
          },
          {
            text: "Extras: Elementor es gratuito el primer año si se implementa",
            included: true,
          },
        ],
        gallery: [
          {
            url: "https://images.ctfassets.net/crb83veve8xb/3437ISyv6Wsqn6V2EeUjnF/f5758fc6e3a0c52f118e00fbe5c00e5c/amazon.webp",
            alt: "Ejemplo de tienda online Titan",
          },
          {
            url: "https://cdn.appdesign.dev/wp-content/uploads/2019/07/disen%CC%83o-tienda-online-decoracio%CC%81n.jpg",
            alt: "Vista de productos en catálogo",
          },
        ],
      },
    ],
  },
  hosting: {
    title: "Hosting",
    subtitle:
      "Elija su plan de Hosting Veloz y Seguro para WordPress, Joomla y HTML",
    plans: [
      {
        id: "hosting-express",
        name: "Hosting Express ⚡",
        price: "35",
        highlighted: false,
        description:
          "Ideal para páginas básicas, portafolios o emprendimientos que inician",
        fullDescription: [
          "Una opción económica, confiable y rápida para quienes están iniciando su presencia en internet.",
          "Con Hosting Express de CODECIMA tendrás todo lo necesario para alojar una página institucional, portafolio o sitio informativo con excelente rendimiento y soporte personalizado.",
          "Este plan está diseñado especialmente para emprendedores y profesionales independientes que necesitan estabilidad, seguridad y facilidad técnica sin complicarse.",
          "🔹 ¿Por qué elegir Hosting Express?",
          "En el mercado ecuatoriano, tener presencia web ya no es un lujo, es una necesidad. Este plan te permite tener tu sitio online de forma profesional, sin pagar demás.",
          "• Recursos justos para sitios sencillos y eficientes.",
          "• Certificado SSL incluido, para proteger tu página y mejorar el posicionamiento.",
          "• Soporte directo y personalizado en español, sin intermediarios.",
          "• Incluye instalación de WordPress o carga de plantilla HTML, completamente gratis.",
          "Es perfecto para quienes necesitan publicar su web sin complicarse y con atención humana cercana.",
        ],
        icons: [
          {
            name: "zap",
            component: Zap,
            color: "bg-codecima-purple text-white",
          },
          {
            name: "database",
            component: Database,
            color: "bg-codecima-blue text-white",
          },
          {
            name: "shield",
            component: Shield,
            color: "bg-purple-500 text-white",
          },
        ],
        features: [
          { text: "10 GB SSD", included: true },
          { text: "80 MB RAM dedicada", included: true },
          { text: "Certificado SSL gratuito", included: true },
          { text: "Configuración de base de datos", included: true },
          { text: "5 correos corporativos", included: true },
          { text: "30.000 inodos", included: true },
          { text: "20 procesos simultáneos", included: true },
          { text: "Backups semanales", included: true },
          { text: "Panel personalizado y acceso FTP", included: true },
          { text: "Soporte técnico vía WhatsApp", included: true },
          {
            text: "Instalación gratuita de WordPress o carga de HTML",
            included: true,
          },
          { text: "Uptime garantizado 99.9%", included: true },
        ],
        gallery: [
          {
            url: "https://www.hostinger.com/mx/tutoriales/wp-content/uploads/sites/39/2018/06/Que-es-un-hosting-web.png",
            alt: "Hosting básico para sitios personales",
          },
        ],
      },

      {
        id: "hosting-turbo",
        name: "Hosting Turbo 💻",
        price: "60",
        highlighted: false,
        description:
          "Ideal para negocios pequeños, blogs activos o catálogos virtuales",
        fullDescription: [
          "Pensado para negocios que buscan velocidad, estabilidad y espacio para crecer.",
          "Este plan brinda mayor capacidad y permite alojar sitios web, ideal para e-commerce, blogs activos o empresas con más requerimientos técnicos.",
          "Con Hosting Turbo tendrás recursos optimizados y soporte directo para mantener tu sitio siempre activo, rápido y bien posicionado.",
          "🔹 ¿Por qué elegir Hosting Turbo?",
          "A diferencia de otros proveedores, aquí cuentas con recursos dedicados y atención personalizada, sin pagar mensualidades altas. Perfecto para quienes quieren un servicio serio y accesible.",
          "• Almacenamiento y RAM suficientes para crecer sin miedo.",
          "• Optimización para WordPress con caché y rendimiento profesional.",
          "• Instalación incluida de CMS o carga completa de tu web.",
          "Es el paso ideal para quienes ya están en línea o quieren iniciar con bases sólidas y escalables.",
        ],
        icons: [
          {
            name: "zap",
            component: Zap,
            color: "bg-codecima-purple text-white",
          },
          {
            name: "database",
            component: Database,
            color: "bg-codecima-blue text-white",
          },
          {
            name: "shield",
            component: Shield,
            color: "bg-purple-500 text-white",
          },
        ],
        features: [
          { text: "20 GB SSD", included: true },
          { text: "150 MB RAM dedicada", included: true },
          { text: "Certificado SSL gratuito", included: true },
          { text: "Configuración de base de datos complejas", included: true },
          { text: "Correos corporativos ilimitados", included: true },
          { text: "60.000 inodos", included: true },
          { text: "40 procesos simultáneos", included: true },
          { text: "Backups semanales", included: true },
          {
            text: "Panel con estadísticas, FTP y dominio conectado",
            included: true,
          },
          { text: "Optimización para WordPress con LiteSpeed", included: true },
          { text: "Soporte técnico prioritario", included: true },
          { text: "Instalación gratuita de CMS o HTML", included: true },
          { text: "CDN Cloudflare básico", included: true },
          { text: "Uptime garantizado 99.9%", included: true },
        ],
        gallery: [
          {
            url: "https://www.hostinger.com/mx/tutoriales/wp-content/uploads/sites/39/2018/06/Que-es-un-hosting-web.png",
            alt: "Hosting básico para sitios personales",
          },
        ],
      },
    ],
  },
  logotipos: {
    title: "Logotipos",
    subtitle: "Impulsa tu marca desde el primer trazo",
    plans: [
      {
        id: "logo-basico",
        name: "Logo Básico",
        price: "20",
        highlighted: false,
        description: "Para quienes buscan algo simple y funcional",
        fullDescription: [
          "Un diseño sencillo pero efectivo para emprendedores que están dando sus primeros pasos.",
          "Ideal si necesitas algo rápido, visualmente limpio y directo para usar en redes sociales o tu web.",
        ],
        features: [
          { text: "1 propuesta de diseño", included: true },
          { text: "1 revisión", included: true },
          { text: "Entrega en 3 días", included: true },
          { text: "Formato JPG/PNG", included: true },
          { text: "Formato vectorial (SVG/AI)", included: false },
          { text: "Manual de marca", included: false },
        ],
        gallery: [
          {
            url: "https://www.neothek.com/libs17/img/grafico/logo/muestra-logos1.jpg",
            alt: "Logo básico",
          },
        ],
      },
      {
        id: "logo-profesional",
        name: "Logo Profesional",
        price: "35",
        highlighted: true,
        description:
          "Para negocios que buscan crecer con identidad visual clara",
        fullDescription: [
          "Un logo versátil, escalable y profesional para marcas que quieren diferenciarse.",
          "Incluye los archivos editables y adaptaciones para redes o impresión.",
        ],
        features: [
          { text: "2 propuestas de diseño", included: true },
          { text: "2 revisiones", included: true },
          { text: "Entrega en 2-3 días", included: true },
          { text: "Todos los formatos (JPG, PNG, SVG, AI)", included: true },
          { text: "Formato vectorial", included: true },
          { text: "Manual de marca básico", included: false },
        ],
        gallery: [
          {
            url: "https://www.neothek.com/libs17/img/grafico/logo/muestra-logos1.jpg",
            alt: "Logo básico",
          },
        ],
      },
      {
        id: "logo-premium",
        name: "Logo Premium",
        price: "50",
        highlighted: false,
        description: "Para marcas que buscan una identidad visual completa",
        fullDescription: [
          "Este plan te entrega más que un logo: construye una imagen coherente para tu marca.",
          "Incluye aplicaciones visuales y recursos para mantener una presencia profesional en todos los medios.",
        ],
        features: [
          { text: "3 propuestas de diseño", included: true },
          { text: "Revisiones ilimitadas", included: true },
          { text: "Entrega en 3-4 días", included: true },
          { text: "Todos los formatos (JPG, PNG, SVG, AI)", included: true },
          { text: "Manual de marca completo", included: true },
          {
            text: "Papelería básica (tarjeta y hoja membretada)",
            included: true,
          },
        ],
        gallery: [
          {
            url: "https://www.neothek.com/libs17/img/grafico/logo/muestra-logos1.jpg",
            alt: "Logo básico",
          },
        ],
      },
    ],
  },

  contenido: {
    title: "Contenido",
    subtitle: "Contenido profesional para tu web y redes sociales",
    plans: [
      {
        id: "contenido-basico",
        name: "Plan Básico",
        price: "50",
        highlighted: false,
        description: "Para emprendedores que inician su presencia digital",
        fullDescription: [
          "Este plan está diseñado para emprendedores y pequeños negocios que desean comenzar a tener presencia en redes sociales.",
          "Incluye diseño gráfico básico, textos atractivos y publicación en una red social, ideal para iniciar y validar tu marca.",
          "Recibirás un informe mensual con resultados clave para ver tu crecimiento.",
        ],
        features: [
          { text: "5 publicaciones mensuales", included: true },
          { text: "1 red social", included: true },
          { text: "Diseño básico", included: true },
          { text: "Copywriting básico", included: true },
          { text: "Informe mensual", included: true },
          { text: "Estrategia de contenido", included: false },
        ],
        gallery: [
          {
            url: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f0c892186873009.657cc3f9ab9ad.png",
            alt: "Publicación premium con diseño adaptado",
          },
        ],
      },
      {
        id: "contenido-estandar",
        name: "Plan Estándar",
        price: "80",
        highlighted: true,
        description: "Para marcas que buscan crecer en redes sociales",
        fullDescription: [
          "Ideal para negocios en crecimiento que desean mantener presencia activa y profesional en más de una red social.",
          "Incluye publicaciones diseñadas con estilo uniforme, textos persuasivos y una estrategia básica para conectar con tu audiencia.",
          "Recibirás un informe mensual con análisis de rendimiento.",
        ],
        features: [
          { text: "12 publicaciones mensuales", included: true },
          { text: "2 redes sociales", included: true },
          { text: "Diseño profesional", included: true },
          { text: "Copywriting avanzado", included: true },
          { text: "Informe mensual", included: true },
          { text: "Estrategia de contenido básica", included: true },
        ],
        gallery: [
          {
            url: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f0c892186873009.657cc3f9ab9ad.png",
            alt: "Publicación premium con diseño adaptado",
          },
        ],
      },
      {
        id: "contenido-premium",
        name: "Plan Premium",
        price: "120",
        highlighted: false,
        description: "Solución completa para marcas que quieren destacar",
        fullDescription: [
          "Pensado para empresas que desean destacar con contenido personalizado, estrategias completas y presencia profesional en múltiples plataformas.",
          "Incluye diseños premium, textos adaptados al tono de tu marca, planificación avanzada y monitoreo semanal del rendimiento.",
          "Con este plan tu marca transmite solidez, profesionalismo y constancia.",
        ],
        features: [
          { text: "20 publicaciones mensuales", included: true },
          { text: "3 redes sociales", included: true },
          { text: "Diseño premium personalizado", included: true },
          { text: "Copywriting profesional", included: true },
          { text: "Informe semanal", included: true },
          { text: "Estrategia de contenido completa", included: true },
        ],
        gallery: [
          {
            url: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/f0c892186873009.657cc3f9ab9ad.png",
            alt: "Publicación premium con diseño adaptado",
          },
        ],
      },
    ],
  },
};
