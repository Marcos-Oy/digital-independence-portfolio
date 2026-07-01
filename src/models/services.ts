import {
  Server,
  Workflow,
  Building2,
  Users,
  Wallet,
  Headphones,
  Globe,
  Code2,
  Megaphone,
  Shield,
  Radar,
  Lightbulb,
  Brain,
  LayoutGrid,
  TrendingDown,
  Layers,
  ShieldCheck,
  Sparkles,
  Plug,
  Cog,
  BarChart3,
  Database,
  type LucideIcon,
} from "lucide-react";
import imgArquitectura from "@/assets/services/arquitectura-ti.jpg";
import imgTransformacion from "@/assets/services/transformacion-digital.jpg";
import imgDireccion from "@/assets/services/direccion-ti.jpg";
import imgOptimizacion from "@/assets/services/optimizacion-costos-ti.jpg";
import imgSoporte from "@/assets/services/soporte-ti-gestionado.jpg";
import imgPresencia from "@/assets/services/presencia-digital.jpg";
import imgDesarrollo from "@/assets/services/desarrollo-software.jpg";
import imgMarketing from "@/assets/services/marketing-digital.jpg";
import imgCiberseguridad from "@/assets/services/ciberseguridad.jpg";
import imgVigilancia from "@/assets/services/vigilancia-innovacion.jpg";
import imgIA from "@/assets/services/ia-corporativa.jpg";
import imgIntegracionPlataformas from "@/assets/services/integracion-plataformas.jpg";
import imgAutomatizacion from "@/assets/services/automatizacion-procesos.jpg";
import imgDashboards from "@/assets/services/dashboards-kpi.jpg";
import imgIntegracionBD from "@/assets/services/integracion-bd.jpg";

export type ServiceArea =
  | "estrategia-direccion-ti"
  | "optimizacion-costos"
  | "desarrollo-presencia"
  | "seguridad-inteligencia"
  | "ia-corporativa";

export type ServiceModality = "consultoria" | "asesoria" | "mentoria";

export const MODALITY_LABELS: Record<ServiceModality, string> = {
  consultoria: "Consultoría",
  asesoria: "Asesoría",
  mentoria: "Mentoría",
};

export const MODALITY_COLORS: Record<ServiceModality, string> = {
  consultoria: "bg-primary/10 text-primary border-primary/20",
  asesoria: "bg-secondary/10 text-secondary border-secondary/20",
  mentoria: "bg-accent/10 text-accent border-accent/20",
};

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  navLabel: string;
  area: ServiceArea;
  areaLabel: string;
  icon: LucideIcon;
  image: string;
  tagline: string;
  summary: string;
  description: string;
  // Segundo párrafo de "¿En qué consiste?": cómo se ejecuta en la práctica.
  approach: string;
  // 3 diferenciadores concretos, no genéricos ("valor agregado").
  addedValue: string[];
  rightClient: string;
  timeFactor: string;
  valuePromise: string;
  // Dolores específicos que resuelve este servicio (usados en landings de
  // conversión). "description" hace de nutrir, "includes" de método y
  // "valuePromise" de beneficio: no se duplica contenido para landings futuras.
  painPoints: string[];
  includes: string[];
  tools?: string[];
  segments: ("emprendedores" | "pymes" | "empresas" | "publico")[];
  modality: ServiceModality[];
}

const SERVICE_IMAGES: Record<string, string> = {
  "arquitectura-ti": imgArquitectura,
  "transformacion-digital": imgTransformacion,
  "direccion-ti": imgDireccion,
  "optimizacion-costos-ti": imgOptimizacion,
  "soporte-ti-gestionado": imgSoporte,
  "presencia-digital": imgPresencia,
  "desarrollo-software": imgDesarrollo,
  "marketing-digital": imgMarketing,
  "ciberseguridad": imgCiberseguridad,
  "vigilancia-innovacion": imgVigilancia,
  "ia-corporativa": imgIA,
  "integracion-plataformas": imgIntegracionPlataformas,
  "automatizacion-procesos": imgAutomatizacion,
  "dashboards-kpi": imgDashboards,
  "integracion-bd": imgIntegracionBD,
};

export const AREAS: { id: ServiceArea; label: string; desc: string; icon: LucideIcon }[] = [
  {
    id: "estrategia-direccion-ti",
    label: "Estrategia y Dirección TI",
    desc: "Diseñamos, construimos y dirigimos la infraestructura tecnológica de tu negocio: arquitectura, transformación digital y dirección estratégica activa.",
    icon: LayoutGrid,
  },
  {
    id: "optimizacion-costos",
    label: "Optimización y Costos TI",
    desc: "Reducimos tu gasto en tecnología entre un 30% y un 50% sin sacrificar rendimiento ni seguridad, con soporte mensual predecible.",
    icon: TrendingDown,
  },
  {
    id: "desarrollo-presencia",
    label: "Desarrollo y Presencia Digital",
    desc: "Sitios web, software a medida y marketing digital con criterio técnico. Desde tu primera página hasta sistemas que escalan.",
    icon: Layers,
  },
  {
    id: "seguridad-inteligencia",
    label: "Seguridad e Inteligencia Tecnológica",
    desc: "Ciberseguridad técnica y humana, cumplimiento normativo y vigilancia tecnológica continua para que cada decisión sea informada.",
    icon: ShieldCheck,
  },
  {
    id: "ia-corporativa",
    label: "Inteligencia Artificial Corporativa",
    desc: "Agentes con memoria, automatización no-code y clones digitales que liberan a tu equipo del trabajo manual repetitivo.",
    icon: Sparkles,
  },
];

const RAW_SERVICES: Omit<Service, "image">[] = [
  {
    slug: "arquitectura-ti",
    title: "Arquitectura TI",
    shortTitle: "Arquitectura TI",
    navLabel: "Orden en tu tecnología",
    area: "estrategia-direccion-ti",
    areaLabel: "Estrategia y Dirección TI",
    icon: Server,
    tagline: "Infraestructura tecnológica ordenada y bajo tu control.",
    summary:
      "Diseño e implementación de tu infraestructura tecnológica completa: ecosistema empresarial, nube, dominio, hosting y herramientas seleccionadas por negocio.",
    description:
      "Diseñamos e implementamos la infraestructura tecnológica completa de tu negocio. Configuramos Google Workspace o Microsoft 365 (usuarios, permisos, seguridad), infraestructura en nube cuando corresponde, Cloudflare (DNS, CDN, protección DDoS, SSL, firewall), hosting con Hostinger, bases de datos y selección de herramientas según tu operación real.",
    approach:
      "Partimos por auditar tu ecosistema actual: qué cuentas, dominios, correos y accesos existen, quién los controla y qué falta documentar. Con ese diagnóstico configuramos Google Workspace o Microsoft 365, dejamos Cloudflare protegiendo tu DNS y tu tráfico, y montamos el hosting adecuado según el tamaño real de tu operación, no según lo que te vendieron antes.",
    addedValue: [
      "Documentación completa: nunca más dependes de que una sola persona sepa cómo funciona tu tecnología.",
      "Elegimos herramientas según tu negocio real, no paquetes genéricos que después te quedan grandes o chicos.",
      "Quedas con acceso y control directo de todo, sin depender de terceros para hacer cambios básicos.",
    ],
    rightClient:
      "Dueño de PyME o gerente con tecnología desordenada, accesos perdidos y sin documentación.",
    timeFactor: "Primeros 90 días",
    valuePromise:
      "Infraestructura tecnológica completamente ordenada, documentada y bajo tu control directo con ecosistema empresarial configurado.",
    painPoints: [
      "No tienes un mapa de qué cuentas, dominios y accesos existen en tu negocio, ni quién los controla.",
      "Si se va un colaborador clave, nadie sabe qué contraseñas o sistemas manejaba.",
      "Tu correo, tu nube y tu hosting quedaron configurados por distintas personas, en distintos momentos, sin criterio único.",
    ],
    includes: [
      "Google Workspace o Microsoft 365 (usuarios, permisos, seguridad)",
      "Cloudflare: DNS, CDN, protección DDoS, SSL y firewall",
      "Hosting con Hostinger (compartido o VPS)",
      "SQL avanzado y modelado de datos",
      "Documentación completa del ecosistema",
      "Selección de herramientas por negocio",
    ],
    tools: ["Microsoft 365", "Google Workspace", "Cloudflare", "Hostinger", "SQL"],
    segments: ["emprendedores", "pymes", "empresas", "publico"],
    modality: ["consultoria"],
  },
  {
    slug: "transformacion-digital",
    title: "Transformación Digital",
    shortTitle: "Transformación Digital",
    navLabel: "Digitaliza tu negocio",
    area: "estrategia-direccion-ti",
    areaLabel: "Estrategia y Dirección TI",
    icon: Workflow,
    tagline: "De procesos manuales a flujos digitales medibles.",
    summary:
      "Diagnóstico del estado tecnológico, hoja de ruta de modernización por etapas y conversión de procesos manuales en flujos digitales seguros.",
    description:
      "Hacemos un diagnóstico del estado tecnológico actual, diseñamos la hoja de ruta de modernización por etapas, implementamos nuevas herramientas, capacitamos al equipo e integramos ciberseguridad al proceso desde el primer día.",
    approach:
      "Empezamos evaluando qué procesos hoy dependen de papel, planillas sueltas o coordinación manual, y diseñamos una hoja de ruta por etapas realista para tu equipo, no un cambio radical de un día para otro. Implementamos las herramientas, capacitamos a las personas que las van a usar y dejamos la ciberseguridad incorporada desde el primer paso, no como un parche posterior.",
    addedValue: [
      "La transición se hace por etapas: tu equipo no queda expuesto a un cambio total de golpe.",
      "Incluye capacitación real, no solo la instalación de un software que nadie sabe usar.",
      "La ciberseguridad se integra desde el diseño, no se agrega después como remedio.",
    ],
    rightClient:
      "Gerente de empresa que opera con procesos manuales y siente que la competencia le gana con tecnología.",
    timeFactor: "Primer trimestre",
    valuePromise:
      "Hoja de ruta de transformación digital implementada con procesos manuales convertidos en flujos digitales.",
    painPoints: [
      "Sigues operando con procesos manuales mientras la competencia ya digitalizó los suyos.",
      "Cada intento de modernizar tu negocio queda a medias porque nadie lidera el cambio completo.",
      "Tu equipo se resiste a nuevas herramientas porque nunca hubo un plan claro de transición.",
    ],
    includes: [
      "Diagnóstico del estado tecnológico actual",
      "Hoja de ruta por etapas",
      "Implementación de nuevas herramientas",
      "Capacitación del equipo",
      "Ciberseguridad integrada al proceso",
    ],
    segments: ["pymes", "empresas", "publico"],
    modality: ["consultoria", "asesoria"],
  },
  {
    slug: "direccion-ti",
    title: "Dirección de Departamento TI y Talento",
    shortTitle: "Dirección de TI (CTO Externo)",
    navLabel: "Tu director de tecnología",
    area: "estrategia-direccion-ti",
    areaLabel: "Estrategia y Dirección TI",
    icon: Building2,
    tagline: "Un CTO sin el costo de uno a tiempo completo.",
    summary:
      "Diseño completo del área TI desde cero: roles, procesos, stack estandarizado y dirección estratégica activa.",
    description:
      "Diseñamos tu área TI desde cero: definimos roles y responsabilidades, procesos internos, stack tecnológico estandarizado y asumimos la dirección estratégica activa. Además identificamos perfiles TI requeridos, definimos habilidades por cargo, criterios técnicos de evaluación y conducimos el onboarding tecnológico del nuevo colaborador.",
    approach:
      "Actuamos como tu Director de Tecnología externo: definimos los roles y procesos que debería tener un área TI real, seleccionamos un stack tecnológico estandarizado y tomamos decisiones estratégicas contigo de forma continua. Si necesitas contratar talento TI, te ayudamos a definir el perfil, evaluar candidatos técnicamente y guiar el onboarding tecnológico del nuevo colaborador.",
    addedValue: [
      "Tienes dirección tecnológica estratégica sin pagar el sueldo de un CTO a tiempo completo.",
      "Te acompañamos también en la contratación de tu futuro equipo TI, con criterios técnicos reales.",
      "Las decisiones tecnológicas dejan de tomarse de forma reactiva o por 'quien sabe más de computadores'.",
    ],
    rightClient:
      "Empresa o institución que necesita un director de tecnología pero no puede absorber el costo de un CTO full-time.",
    timeFactor: "Primer trimestre",
    valuePromise:
      "Área TI estructurada, procesos documentados y dirección estratégica activa con tu negocio.",
    painPoints: [
      "No tienes a nadie que tome decisiones tecnológicas con criterio estratégico, solo a quien 'sabe de computadores'.",
      "Cada área tecnológica avanza por su cuenta, sin una dirección que las conecte.",
      "Contratar un CTO a tiempo completo no es viable para tu presupuesto actual.",
    ],
    includes: [
      "Roles y responsabilidades del área TI",
      "Procesos internos y políticas",
      "Stack tecnológico estandarizado",
      "Dirección estratégica activa",
      "Perfiles TI y criterios de evaluación",
      "Onboarding tecnológico de colaboradores",
    ],
    segments: ["pymes", "empresas", "publico"],
    modality: ["consultoria"],
  },
  {
    slug: "optimizacion-costos-ti",
    title: "Reducción de Costos TI",
    shortTitle: "Reducción de Costos TI",
    navLabel: "Gasta menos en tecnología",
    area: "optimizacion-costos",
    areaLabel: "Optimización y Costos TI",
    icon: Wallet,
    tagline: "Ahorra entre 30% y 50% sin perder rendimiento.",
    summary:
      "Auditoría de hardware, licencias e infraestructura cloud para identificar dónde estás gastando de más.",
    description:
      "Auditoría de hardware con cotización y ensamblado de PCs a medida (ahorro del 30% al 50% vs equipo de fábrica). Auditoría de licencias y software (detectar lo que pagas y no usas). Evaluación de infraestructura en nube según tamaño y uso real.",
    approach:
      "Auditamos tu hardware, tus licencias y tu infraestructura en la nube para identificar exactamente dónde estás gastando de más. Si necesitas equipos nuevos, cotizamos y ensamblamos PCs a medida con un ahorro real de 30% a 50% frente a equipos de fábrica equivalentes, sin sacrificar el rendimiento que tu operación necesita.",
    addedValue: [
      "El ahorro es medible: entregamos el plan con los números concretos de lo que dejas de gastar.",
      "Revisamos licencias que pagas y no usas, no solo el hardware.",
      "El equipo ensamblado a medida rinde igual o mejor que uno de fábrica, a menor costo.",
    ],
    rightClient:
      "Dueño o gerente que siente que gasta demasiado en tecnología o está a punto de hacer una inversión grande.",
    timeFactor: "Desde el primer diagnóstico",
    valuePromise:
      "Plan concreto para reducir costos TI entre un 30% y un 50% sin sacrificar rendimiento ni seguridad.",
    painPoints: [
      "Pagas licencias de software que ni siquiera recuerdas para qué sirven.",
      "Compraste o estás por comprar equipos sin comparar si hay una opción igual de buena y más barata.",
      "Nadie ha auditado tu infraestructura en la nube para saber si estás pagando de más.",
    ],
    includes: [
      "Auditoría de hardware y cotizaciones",
      "Ensamblado de PCs a medida",
      "Auditoría de licencias y software",
      "Evaluación de infraestructura en nube",
      "Plan de reducción de costos priorizado",
    ],
    segments: ["emprendedores", "pymes", "empresas", "publico"],
    modality: ["consultoria"],
  },
  {
    slug: "soporte-ti-gestionado",
    title: "Soporte TI Gestionado",
    shortTitle: "Soporte TI Gestionado",
    navLabel: "Soporte técnico mensual",
    area: "optimizacion-costos",
    areaLabel: "Optimización y Costos TI",
    icon: Headphones,
    tagline: "Soporte mensual con SLA claro y horas definidas.",
    summary:
      "Contrato mensual con límite de horas y SLA de tiempo de respuesta, soporte remoto y presencial según acuerdo.",
    description:
      "Contrato mensual con límite de horas definido y SLA de tiempo de respuesta. Soporte remoto y presencial según acuerdo. Activación progresiva según capacidad operativa disponible.",
    approach:
      "Definimos contigo una bolsa de horas mensual y un SLA de tiempo de respuesta claro, para que el soporte deje de depender de la disponibilidad de una sola persona. Cada incidente queda registrado y trazado, y te entregamos un reporte mensual para que sepas exactamente en qué se usaron las horas contratadas.",
    addedValue: [
      "SLA de respuesta definido por escrito, no una promesa verbal de 'te ayudo cuando pueda'.",
      "Reporte mensual de incidentes, para que el soporte deje de ser una caja negra.",
      "Escala según tu operación: partimos con las horas que necesitas hoy, no con un contrato sobredimensionado.",
    ],
    rightClient:
      "PyME o empresa que necesita soporte continuo predecible y con SLA, sin pagar un equipo TI interno.",
    timeFactor: "Desde el primer mes",
    valuePromise:
      "Soporte TI con SLA, horas definidas y trazabilidad mensual de incidentes y resoluciones.",
    painPoints: [
      "Cuando algo falla, dependes de la disponibilidad de una persona, no de un servicio con tiempos garantizados.",
      "No tienes trazabilidad de cuántas horas de soporte usas ni en qué se van.",
      "Pagar un equipo TI interno no compensa frente al volumen real de incidentes que tienes.",
    ],
    includes: [
      "Bolsa mensual de horas",
      "SLA de tiempo de respuesta",
      "Soporte remoto y presencial",
      "Reporte mensual de incidentes",
    ],
    segments: ["pymes", "empresas"],
    modality: ["consultoria"],
  },
  {
    slug: "presencia-digital",
    title: "Presencia Digital",
    shortTitle: "Presencia Digital",
    navLabel: "Presencia digital y páginas web",
    area: "desarrollo-presencia",
    areaLabel: "Desarrollo y Presencia Digital",
    icon: Globe,
    tagline: "Sitio profesional, dominio propio y aparición en Google.",
    summary:
      "Sitios corporativos, landing pages de alta conversión y portafolios profesionales con SEO técnico y Google Maps.",
    description:
      "Sitios web corporativos, landing pages de alta conversión y portafolios profesionales. SEO técnico: Google Search Console, velocidad, estructura, metaetiquetas. Perfil de Negocio Google y Maps. Dominio y servidor configurados con Cloudflare y Hostinger.",
    approach:
      "Construimos tu sitio web, landing page o portafolio bajo tu propio dominio, con SEO técnico desde el primer día: Google Search Console, velocidad de carga, estructura y metaetiquetas correctas. Configuramos tu Perfil de Negocio en Google y Maps para que te encuentren cerca, y dejamos el hosting funcionando sobre Cloudflare y Hostinger.",
    addedValue: [
      "SEO técnico incluido desde el inicio, no como un servicio aparte que se cobra después.",
      "Quedas con dominio y correo corporativo propio, reforzando la seriedad de tu marca.",
      "El sitio se diseña para convertir visitas en contactos reales, no solo para 'existir' en internet.",
    ],
    rightClient:
      "Profesional independiente o dueño de PyME sin presencia digital profesional o con una que no genera confianza.",
    timeFactor: "Primeras semanas",
    valuePromise:
      "Presencia digital completamente operativa: sitio web bajo tu dominio, correo corporativo, Google Maps y canales listos.",
    painPoints: [
      "No apareces en Google cuando alguien busca lo que ofreces.",
      "Tu sitio web, si existe, no transmite la seriedad de tu negocio real.",
      "No tienes correo con tu propio dominio, y eso resta credibilidad frente a clientes o licitaciones.",
    ],
    includes: [
      "Sitio web corporativo, landing o portafolio",
      "SEO técnico (Search Console, velocidad, metaetiquetas)",
      "Perfil de Negocio Google y Maps",
      "Dominio propio y correo corporativo",
      "Hosting con Cloudflare y Hostinger",
    ],
    segments: ["emprendedores", "pymes"],
    modality: ["consultoria", "asesoria", "mentoria"],
  },
  {
    slug: "desarrollo-software",
    title: "Desarrollo de Software Web",
    shortTitle: "Desarrollo de Software",
    navLabel: "Apps y sistemas web a medida",
    area: "desarrollo-presencia",
    areaLabel: "Desarrollo y Presencia Digital",
    icon: Code2,
    tagline: "Sistemas a medida para escalar tu operación.",
    summary:
      "E-commerce, CRM a medida, gestores de eventos y sistemas internos con base de datos, panel de administración y versión móvil.",
    description:
      "Desarrollamos e-commerce, CRMs a medida, gestores de eventos y sistemas internos. Cada proyecto se entrega con base de datos, panel de administración y versión móvil instalable, listo para producción.",
    approach:
      "Levantamos contigo el proceso real que hoy manejas en Excel o a mano, diseñamos la base de datos y el panel de administración, y desarrollamos el sistema de punta a punta: e-commerce, CRM, gestor de eventos o el sistema interno que tu operación necesite. Todo se entrega instalable también en versión móvil y listo para producción, no como un prototipo.",
    addedValue: [
      "El sistema queda en producción, no como una demo que nunca se termina de usar.",
      "Incluye panel de administración pensado para que tu equipo lo use sin depender de un programador.",
      "Se construye a la medida de tu proceso real, no adaptando tu negocio a un software genérico.",
    ],
    rightClient:
      "Dueño de PyME que gestiona clientes o procesos con Excel y sabe que eso no puede escalar.",
    timeFactor: "Antes de cerrar el primer trimestre",
    valuePromise:
      "Sistema web funcionando en producción con base de datos, panel de administración y versión móvil instalable.",
    painPoints: [
      "Gestionas clientes, ventas o inventario en planillas de Excel que se rompen cuando el negocio crece.",
      "Cada proceso nuevo significa otra planilla más, y ya nadie las entiende todas.",
      "No tienes un sistema propio: dependes de herramientas genéricas que no calzan con tu operación real.",
    ],
    includes: [
      "Análisis y diseño funcional",
      "Desarrollo full-stack",
      "Base de datos y panel de administración",
      "Versión móvil instalable (PWA)",
      "Despliegue en producción",
    ],
    segments: ["pymes", "empresas", "publico"],
    modality: ["consultoria"],
  },
  {
    slug: "marketing-digital",
    title: "Dirección de Marketing Digital",
    shortTitle: "Marketing Digital",
    navLabel: "Publicidad y marketing digital",
    area: "desarrollo-presencia",
    areaLabel: "Desarrollo y Presencia Digital",
    icon: Megaphone,
    tagline: "Publicidad con criterio, sin perder dinero ni cuentas suspendidas.",
    summary:
      "SEO/SEM, Meta Ads, LinkedIn Ads, TikTok Ads, Google Ads y estrategia de contenidos con IA. Tres niveles: mentoría, asesoría y consultoría.",
    description:
      "Trabajamos SEO/SEM, Meta Ads, LinkedIn Ads, TikTok Ads y Google Ads con foco en políticas y cumplimiento publicitario por plataforma (evitar suspensiones y rechazos). Estrategia de contenidos con IA (ChatGPT, Claude, Canva AI). Operamos en tres niveles: mentoría para emprendedores, asesoría para PyMEs y consultoría para empresas.",
    approach:
      "Trabajamos SEO/SEM, Meta Ads, LinkedIn Ads, TikTok Ads y Google Ads con foco explícito en cumplir las políticas publicitarias de cada plataforma, para que tu cuenta no termine suspendida o tus campañas rechazadas. Sumamos estrategia de contenidos apoyada en IA (ChatGPT, Claude, Canva AI) y operamos en tres niveles distintos según el tamaño de tu negocio: mentoría, asesoría o consultoría.",
    addedValue: [
      "Cuidamos el cumplimiento publicitario de cada plataforma para evitar suspensiones y rechazos.",
      "Medimos con métricas reales de costo de adquisición de cliente, no solo alcance o likes.",
      "Tienes tres niveles de trabajo: desde aprender a pautar tú mismo hasta que gestionemos todo por ti.",
    ],
    rightClient:
      "Desde emprendedores que no saben cómo pautar hasta gerentes que necesitan auditar a su agencia.",
    timeFactor: "Primeros 90 días",
    valuePromise:
      "Inversión publicitaria alineada a resultados con métricas claras de costo de adquisición de cliente.",
    painPoints: [
      "Inviertes en publicidad sin saber si realmente te está generando clientes o solo alcance.",
      "Te han suspendido o rechazado campañas por no cumplir las políticas de cada plataforma.",
      "No sabes si tu agencia actual está optimizando tu inversión o solo cobrando por gestionarla.",
    ],
    includes: [
      "SEO técnico y SEM",
      "Meta Ads, LinkedIn Ads, TikTok Ads, Google Ads",
      "Cumplimiento publicitario por plataforma",
      "Estrategia de contenidos con IA",
      "Tres niveles: mentoría, asesoría y consultoría",
    ],
    segments: ["emprendedores", "pymes", "empresas", "publico"],
    modality: ["consultoria", "asesoria", "mentoria"],
  },
  {
    slug: "ciberseguridad",
    title: "Ciberseguridad: Gestión y Estrategia",
    shortTitle: "Ciberseguridad",
    navLabel: "Seguridad informática",
    area: "seguridad-inteligencia",
    areaLabel: "Seguridad e Inteligencia Tecnológica",
    icon: Shield,
    tagline: "Postura de seguridad real, técnica y humana.",
    summary:
      "Auditoría técnica, controles, formación contra ingeniería social, cumplimiento ISO 27001 / Ley 19.628 y ciberseguridad diferencial.",
    description:
      "Auditoría técnica y controles de seguridad. Formación a funcionarios y colaboradores contra ingeniería social y phishing. Cumplimiento ISO 27001 y Ley 19.628. Ciberseguridad industrial OT/ICS para entornos productivos. Ciberseguridad diferencial con módulo para niños (grooming, acoso, controles parentales) y módulo para mujeres (doxing, acoso digital, seguridad física integrada).",
    approach:
      "Partimos con una auditoría técnica de tus controles actuales y formamos a tu equipo contra phishing e ingeniería social, porque la mayoría de los ataques entran por las personas, no por la tecnología. Si tu negocio lo requiere, trabajamos también cumplimiento ISO 27001 y Ley 19.628, ciberseguridad industrial OT/ICS, y módulos diferenciales de seguridad para la protección de niños y de mujeres frente al acoso digital.",
    addedValue: [
      "Formamos a las personas, no solo instalamos software: la mayoría de los ataques entran por ahí.",
      "Cubrimos cumplimiento normativo real (ISO 27001, Ley 19.628), no solo una checklist genérica.",
      "Incluye módulos diferenciales poco comunes en el mercado: seguridad infantil y de género.",
    ],
    rightClient:
      "Desde el dueño de PyME sin controles básicos hasta la gran empresa con ISO pero sin seguridad real en las personas.",
    timeFactor: "Primeros 90 días",
    valuePromise:
      "Postura de seguridad real: controles técnicos activos, equipo formado para detectar ataques de ingeniería social y plan documentado.",
    painPoints: [
      "Cualquiera de tu equipo podría caer en un correo de phishing bien armado, y hoy nadie está entrenado para detectarlo.",
      "No cumples, o no sabes si cumples, con la Ley 19.628 o estándares como ISO 27001.",
      "Tienes controles técnicos, pero cero formación humana contra ingeniería social.",
    ],
    includes: [
      "Auditoría técnica y controles",
      "Formación contra phishing e ingeniería social",
      "Cumplimiento ISO 27001 y Ley 19.628",
      "Ciberseguridad industrial OT/ICS",
      "Módulos diferenciales: infantil y de género",
    ],
    segments: ["emprendedores", "pymes", "empresas", "publico"],
    modality: ["consultoria", "asesoria"],
  },
  {
    slug: "vigilancia-innovacion",
    title: "Vigilancia e Innovación Tecnológica",
    shortTitle: "Vigilancia e Innovación",
    navLabel: "Tendencias y oportunidades TI",
    area: "seguridad-inteligencia",
    areaLabel: "Seguridad e Inteligencia Tecnológica",
    icon: Radar,
    tagline: "Inteligencia tecnológica continua para decidir mejor.",
    summary:
      "Monitoreo de tendencias del sector, movimientos digitales de la competencia, herramientas emergentes y alertas regulatorias. Retainer con entrega mensual.",
    description:
      "Monitoreo continuo de tendencias del sector, movimientos digitales de la competencia, nuevas herramientas relevantes al negocio y alertas de seguridad y cambios regulatorios. Identificación de tecnologías emergentes aplicables a tu operación con criterio estratégico y de costo. Servicio de retainer con entrega mensual.",
    approach:
      "Monitoreamos de forma continua las tendencias de tu sector, los movimientos digitales de tu competencia, nuevas herramientas relevantes para tu operación y alertas de seguridad o cambios regulatorios que te puedan afectar. Es un servicio de retainer con entrega mensual: recibes un informe estructurado, no una opinión suelta.",
    addedValue: [
      "Recibes información estructurada mes a mes, no una alerta aislada cuando ya es tarde.",
      "Identificamos tecnologías emergentes aplicables a tu negocio con criterio de costo real.",
      "Te enteras de riesgos regulatorios y de seguridad antes de que se conviertan en un problema.",
    ],
    rightClient:
      "Gerente que toma decisiones tecnológicas y necesita información estructurada, no opinión.",
    timeFactor: "Entrega mensual desde el primer mes",
    valuePromise:
      "Inteligencia tecnológica continua para que cada decisión se tome con criterio.",
    painPoints: [
      "Te enteras de que existía una herramienta o tendencia relevante cuando ya perdiste la ventaja de ser el primero.",
      "Decides sobre tecnología con la opinión de alguien del equipo, no con inteligencia estructurada.",
      "No tienes un radar que te avise de cambios regulatorios o riesgos emergentes en tu sector.",
    ],
    includes: [
      "Informe mensual de tendencias",
      "Monitoreo de competencia digital",
      "Alertas de seguridad y regulación",
      "Identificación de tecnologías emergentes",
      "Recomendaciones de implementación priorizadas",
    ],
    segments: ["pymes", "empresas", "publico"],
    modality: ["consultoria", "asesoria"],
  },
  {
    slug: "ia-corporativa",
    title: "Inteligencia Artificial Corporativa",
    shortTitle: "IA Corporativa",
    navLabel: "Automatización e inteligencia artificial",
    area: "ia-corporativa",
    areaLabel: "Inteligencia Artificial Corporativa",
    icon: Brain,
    tagline: "Agentes, automatización y clones digitales operando tu negocio.",
    summary:
      "Diagnóstico de procesos automatizables, agentes con memoria, ingeniería de prompts, automatización no-code y clones digitales.",
    description:
      "Diagnóstico de procesos automatizables. Implementación de agentes de IA con memoria y acceso a documentos del negocio. Ingeniería de prompts corporativa y biblioteca de prompts productivos. Automatización no-code con N8N (flujos de trabajo) y ManyChat (atención automatizada). Clones digitales con HeyGen y ElevenLabs para ventas, soporte y contenido.",
    approach:
      "Diagnosticamos qué procesos de tu negocio son realmente automatizables con IA y por dónde conviene empezar. Implementamos agentes con memoria y acceso a los documentos de tu empresa, construimos una biblioteca de prompts corporativa, y automatizamos flujos con N8N y ManyChat. Cuando aplica, sumamos clones digitales con HeyGen y ElevenLabs para ventas, soporte o contenido.",
    addedValue: [
      "Los agentes de IA quedan conectados a tus documentos reales, no son un chatbot genérico.",
      "Recibes una biblioteca de prompts corporativa reutilizable por todo tu equipo.",
      "Priorizamos qué automatizar primero según impacto real, no según lo que esté de moda.",
    ],
    rightClient:
      "PyMEs y empresas que ya tienen procesos definidos y quieren liberarlos del trabajo manual repetitivo.",
    timeFactor: "Primeros 90 días",
    valuePromise:
      "Procesos clave automatizados con agentes de IA conectados a tu negocio, con biblioteca de prompts y clones digitales operativos.",
    painPoints: [
      "Tu equipo responde manualmente preguntas repetitivas que un agente de IA podría resolver solo.",
      "Sabes que la IA podría ahorrarte horas de trabajo, pero no sabes por dónde empezar ni con qué herramienta.",
      "Has probado ChatGPT genérico, pero no tienes un sistema de IA conectado realmente a tu negocio.",
    ],
    includes: [
      "Diagnóstico de procesos automatizables",
      "Agentes de IA con memoria y RAG",
      "Biblioteca corporativa de prompts",
      "Automatización no-code con N8N y ManyChat",
      "Clones digitales con HeyGen y ElevenLabs",
    ],
    tools: ["N8N", "ManyChat", "HeyGen", "ElevenLabs", "ChatGPT", "Claude", "Gemini"],
    segments: ["pymes", "empresas", "publico"],
    modality: ["consultoria"],
  },
  {
    slug: "integracion-plataformas",
    title: "Integración de Plataformas",
    shortTitle: "Integración de Plataformas",
    navLabel: "Conecta tus sistemas",
    area: "desarrollo-presencia",
    areaLabel: "Desarrollo y Presencia Digital",
    icon: Plug,
    tagline: "Que tus herramientas conversen entre sí, sin reescribirlas.",
    summary:
      "Conectamos tus sistemas existentes (CRM, ERP, e-commerce, planillas, plataformas SaaS) mediante APIs, webhooks y conectores personalizados.",
    description:
      "Diseñamos e implementamos integraciones entre las plataformas que ya usas para que dejen de operar en silos. Trabajamos con APIs REST, webhooks, middleware de integración (N8N, Zapier, Make) y conectores personalizados cuando se requiere. Resultado: tus datos fluyen entre sistemas sin doble digitación ni archivos manuales.",
    approach:
      "Mapeamos las plataformas que ya usas (CRM, ERP, e-commerce, planillas, SaaS) y sus flujos de datos, y diseñamos las integraciones necesarias vía APIs REST, webhooks o middleware como N8N, Zapier y Make. El resultado es que tus sistemas dejan de operar como islas separadas y tus datos fluyen entre ellos sin doble digitación.",
    addedValue: [
      "No reescribimos tus sistemas actuales: los conectamos, protegiendo tu inversión previa.",
      "Eliminamos la doble digitación manual entre plataformas, con la integración documentada.",
      "Quedas con monitoreo de las integraciones, no una conexión frágil que nadie sabe mantener.",
    ],
    rightClient:
      "PyME o empresa que ya invirtió en varias plataformas (CRM, e-commerce, contabilidad, ERP) y necesita que se comuniquen entre sí.",
    timeFactor: "Primeros 60 días",
    valuePromise:
      "Tus plataformas conectadas operando como un solo ecosistema, con datos sincronizados y sin trabajo manual de copiado.",
    painPoints: [
      "Cargas los mismos datos a mano en dos o tres sistemas distintos porque no se comunican entre sí.",
      "Ya invertiste en varias plataformas, pero cada una funciona como una isla separada.",
      "Los errores de doble digitación te están costando tiempo y, a veces, plata.",
    ],
    includes: [
      "Mapeo de plataformas y flujos de datos",
      "Integraciones vía API REST y webhooks",
      "Middleware de integración (N8N, Zapier, Make)",
      "Conectores personalizados cuando se requiere",
      "Documentación técnica y monitoreo",
    ],
    tools: ["N8N", "Zapier", "Make", "REST APIs", "Webhooks"],
    segments: ["pymes", "empresas", "publico"],
    modality: ["consultoria"],
  },
  {
    slug: "automatizacion-procesos",
    title: "Automatización de Procesos",
    shortTitle: "Automatización de Procesos",
    navLabel: "Automatiza tu operación",
    area: "ia-corporativa",
    areaLabel: "Inteligencia Artificial Corporativa",
    icon: Cog,
    tagline: "Mapeamos, rediseñamos y automatizamos tus flujos de trabajo.",
    summary:
      "Diagnosticamos procesos manuales, los rediseñamos y automatizamos flujos completos para reducir tiempos y eliminar errores humanos.",
    description:
      "Levantamos los procesos críticos de tu operación, identificamos cuellos de botella y tareas repetitivas, rediseñamos el flujo y lo automatizamos con N8N, ManyChat, Power Automate o scripts a medida. Aplica a ventas, post-venta, facturación, onboarding, reportería y back-office.",
    approach:
      "Levantamos tus procesos críticos (ventas, post-venta, facturación, onboarding, reportería) para identificar cuellos de botella y tareas repetitivas, rediseñamos el flujo y lo automatizamos con N8N, ManyChat, Power Automate o scripts a medida. Cada automatización queda con notificaciones, reportes y trazabilidad de cada ejecución.",
    addedValue: [
      "Medimos la reducción real de tiempos y errores, no solo 'automatizamos y listo'.",
      "Cada flujo automatizado queda documentado, para que tu equipo entienda cómo funciona.",
      "Capacitamos a tu equipo para operar y ajustar las automatizaciones, no dependes solo de nosotros.",
    ],
    rightClient:
      "Empresa con procesos definidos pero ejecutados manualmente, con doble digitación, planillas y tareas repetitivas que consumen horas del equipo.",
    timeFactor: "Primeros 90 días",
    valuePromise:
      "Procesos clave automatizados con reducción medible de tiempos y errores, y trazabilidad completa de cada ejecución.",
    painPoints: [
      "Tu equipo repite manualmente la misma tarea decenas de veces por semana.",
      "Los errores humanos en procesos repetitivos (facturación, reportería, seguimiento) ya te han costado dinero o reclamos.",
      "Nadie tiene tiempo de rediseñar el proceso, así que sigue funcionando 'como siempre'.",
    ],
    includes: [
      "Levantamiento y mapeo de procesos",
      "Rediseño de flujos para automatización",
      "Implementación con N8N, Power Automate o a medida",
      "Notificaciones, reportes y alertas automáticas",
      "Documentación y capacitación del equipo",
    ],
    tools: ["N8N", "Power Automate", "Zapier", "ManyChat"],
    segments: ["pymes", "empresas", "publico"],
    modality: ["consultoria", "asesoria"],
  },
  {
    slug: "dashboards-kpi",
    title: "Dashboards y KPI",
    shortTitle: "Dashboards y KPI",
    navLabel: "Visibilidad de tu negocio",
    area: "estrategia-direccion-ti",
    areaLabel: "Estrategia y Dirección TI",
    icon: BarChart3,
    tagline: "Indicadores en tiempo real para decidir con datos, no con intuición.",
    summary:
      "Diseñamos e implementamos dashboards interactivos con KPIs en tiempo real conectados a tus fuentes de datos: ventas, operaciones, finanzas y marketing.",
    description:
      "Definimos los indicadores que realmente importan para tu negocio, conectamos las fuentes de datos (bases de datos, planillas, APIs, plataformas SaaS) y construimos dashboards interactivos en Power BI, Looker Studio o Metabase. Entregamos el tablero operativo y la capacitación para que tu equipo lo use a diario.",
    approach:
      "Definimos junto a ti los indicadores que realmente importan para tu negocio, conectamos tus fuentes de datos reales (bases de datos, planillas, APIs, plataformas SaaS) y construimos dashboards interactivos en Power BI, Looker Studio o Metabase. Entregamos el tablero funcionando y capacitamos a tu equipo ejecutivo para que lo use a diario, no solo una vez al mes.",
    addedValue: [
      "Los KPIs se eligen contigo según tu negocio, no una plantilla genérica de indicadores.",
      "Incluye capacitación al equipo ejecutivo, para que el tablero se use de verdad, no solo se mire una vez.",
      "Se conecta a tus fuentes reales de datos, con actualización automática, no reportes copiados a mano.",
    ],
    rightClient:
      "Gerente o dueño que toma decisiones a ciegas, con reportes manuales tardíos y sin visibilidad real de su operación.",
    timeFactor: "Primer mes",
    valuePromise:
      "Tablero ejecutivo en tiempo real con los KPIs clave de tu negocio, accesible desde cualquier dispositivo.",
    painPoints: [
      "Tomas decisiones importantes con el reporte de la semana pasada, no con datos de hoy.",
      "Cada área te entrega sus números en un formato distinto, y armar el panorama completo te toma horas.",
      "No tienes forma de ver, en un solo lugar, cómo va realmente tu negocio.",
    ],
    includes: [
      "Definición de KPIs por área",
      "Conexión a fuentes de datos (BD, APIs, planillas)",
      "Dashboards interactivos en Power BI o Looker Studio",
      "Alertas y reportes automáticos",
      "Capacitación al equipo ejecutivo",
    ],
    tools: ["Power BI", "Looker Studio", "Metabase", "Excel"],
    segments: ["pymes", "empresas", "publico"],
    modality: ["consultoria", "asesoria"],
  },
  {
    slug: "integracion-bd",
    title: "Integración de Bases de Datos",
    shortTitle: "Integración de Bases de Datos",
    navLabel: "Una sola fuente de verdad",
    area: "estrategia-direccion-ti",
    areaLabel: "Estrategia y Dirección TI",
    icon: Database,
    tagline: "De datos dispersos a una única fuente confiable.",
    summary:
      "Consolidamos información dispersa entre planillas, sistemas y plataformas en una base de datos única, estructurada y consultable.",
    description:
      "Auditamos tus fuentes de datos (Excel, sistemas legacy, plataformas SaaS, bases de datos), diseñamos el modelo unificado, implementamos procesos ETL y entregamos una base consolidada lista para reportería, analítica y operación diaria. Trabajamos con SQL Server, PostgreSQL, MySQL y bases cloud.",
    approach:
      "Auditamos tus fuentes de datos actuales (Excel, sistemas legacy, plataformas SaaS, bases de datos existentes), diseñamos un modelo de datos unificado e implementamos procesos ETL para consolidar todo en una sola base confiable. Trabajamos con SQL Server, PostgreSQL, MySQL y bases en la nube según lo que tu operación necesite.",
    addedValue: [
      "Terminas con una sola fuente de verdad, no versiones distintas de los mismos datos por área.",
      "Los procesos de carga quedan automatizados, no dependen de que alguien copie y pegue cada semana.",
      "Incluye documentación y gobierno de datos, para que la base se mantenga confiable en el tiempo.",
    ],
    rightClient:
      "Empresa con datos críticos en planillas dispersas, sistemas que no se hablan y reportes que nadie confía porque cada área tiene su versión.",
    timeFactor: "Primer trimestre",
    valuePromise:
      "Base de datos única, limpia y consultable con procesos automáticos de carga desde tus fuentes operativas.",
    painPoints: [
      "Cada área tiene 'su' versión de los datos, y nadie confía del todo en los reportes.",
      "Tu información crítica vive dispersa entre Excel, sistemas legacy y plataformas que no se conectan.",
      "Migrar o consolidar tus datos suena riesgoso, así que sigues postergándolo.",
    ],
    includes: [
      "Auditoría de fuentes de datos",
      "Diseño de modelo de datos unificado",
      "Procesos ETL y carga automatizada",
      "Migración desde planillas y sistemas legacy",
      "Documentación y gobierno de datos",
    ],
    tools: ["SQL Server", "PostgreSQL", "MySQL", "Oracle"],
    segments: ["pymes", "empresas", "publico"],
    modality: ["consultoria"],
  },
];

export const SERVICES: Service[] = RAW_SERVICES.map((s) => ({
  ...s,
  image: SERVICE_IMAGES[s.slug],
}));




export const SEARCH_TAGS: Record<string, string[]> = {
  'arquitectura-ti': [
    'correo empresa', 'correo corporativo', 'google workspace', 'microsoft 365',
    'office 365', 'dominio', 'hosting', 'servidor', 'nube', 'cloud', 'cloudflare',
    'dns', 'redes', 'vpn', 'infraestructura', 'orden tecnologia', 'organizar sistemas',
    'no tengo correo empresa', 'quiero correo con mi dominio', 'caos tecnologico',
    'quiero organizar mi tecnologia', 'no tengo orden', 'todo desordenado',
  ],
  'transformacion-digital': [
    'digitalizar', 'digitalizar empresa', 'modernizar', 'modernizacion',
    'dejar de usar papel', 'procesos digitales', 'ir a la nube', 'transformar negocio',
    'quiero digitalizar', 'cambio digital', 'empresa anticuada', 'todo en papel',
    'quiero ser mas moderno', 'actualizarme', 'subir a la nube', 'trabajar online',
    'hacer todo digital', 'automatizar procesos empresa',
  ],
  'direccion-ti': [
    'cto', 'cto externo', 'director tecnologia', 'gerente ti', 'jefe ti',
    'lider tecnologico', 'estrategia tecnologica', 'quien me guia en tecnologia',
    'no tengo jefe de tecnologia', 'necesito un experto', 'asesor tecnologico',
    'roadmap tecnologico', 'planificacion tecnologica', 'toma decisiones ti',
    'guia tecnologica', 'necesito alguien que dirija mi tecnologia',
  ],
  'optimizacion-costos-ti': [
    'reducir costos', 'bajar costos', 'ahorrar', 'ahorro', 'gasto tecnologia',
    'estoy pagando mucho', 'licencias caras', 'muy caro', 'optimizar gastos',
    'recortar presupuesto ti', 'pago demasiado', 'factura alta tecnologia',
    'cuanto gasto en tecnologia', 'reducir gastos digitales', 'optimizar costos',
  ],
  'soporte-ti-gestionado': [
    'soporte', 'soporte tecnico', 'ayuda tecnica', 'asistencia tecnica',
    'problema computador', 'no funciona', 'ayuda computador', 'help desk',
    'mantenimiento', 'configurar', 'instalar programa', 'correo no funciona',
    'internet lento', 'red wifi', 'no puedo entrar', 'problema tecnico',
    'computador lento', 'virus computador', 'necesito soporte mensual',
  ],
  'presencia-digital': [
    'pagina web', 'paginas web', 'sitio web', 'sitios web', 'web', 'pagina internet',
    'quiero una web', 'quiero un sitio', 'necesito una pagina', 'crear pagina',
    'hacer pagina', 'diseño web', 'landing page', 'aparecer en google', 'seo',
    'quiero salir en google', 'no tengo pagina', 'presencia online', 'google maps',
    'posicionamiento web', 'visibilidad online', 'me buscan en internet',
    'catalogo digital', 'quiero tener pagina', 'no tengo sitio web',
  ],
  'desarrollo-software': [
    'sistema', 'sistema a medida', 'software', 'aplicacion', 'app', 'programa',
    'desarrollar', 'quiero un sistema', 'quiero una app', 'quiero una aplicacion',
    'automatizar', 'cansado de excel', 'planilla excel', 'proceso manual',
    'base de datos', 'erp', 'crm', 'tienda online', 'ecommerce', 'e-commerce',
    'control inventario', 'facturacion', 'cotizacion', 'gestion empresa',
    'sistema propio', 'quiero automatizar mis procesos', 'software a medida',
  ],
  'marketing-digital': [
    'redes sociales', 'publicidad', 'ads', 'anuncios', 'facebook', 'instagram',
    'tiktok', 'linkedin', 'google ads', 'sem', 'campanas publicitarias',
    'quiero mas seguidores', 'quiero mas clientes', 'marketing', 'contenido',
    'estrategia redes sociales', 'publicidad online', 'pauta digital',
    'meta ads', 'llegar a mas gente', 'vender mas por redes',
  ],
  'ciberseguridad': [
    'me hackearon', 'hackeo', 'hacker', 'seguridad', 'proteger', 'proteger empresa',
    'virus', 'malware', 'ransomware', 'phishing', 'estafa', 'estafa online',
    'robo datos', 'robo informacion', 'datos robados', 'contraseñas', 'antivirus',
    'backup', 'respaldo', 'ciberataque', 'vulnerabilidad', 'datos seguros',
    'alguien entro a mis cuentas', 'me robaron datos', 'quiero estar seguro',
    'proteger mis clientes', 'seguridad informatica', 'cumplimiento seguridad',
  ],
  'vigilancia-innovacion': [
    'tendencias tecnologicas', 'innovacion', 'nuevas tecnologias', 'que tecnologia usar',
    'inteligencia competitiva', 'vigilancia tecnologica', 'investigacion tecnologica',
    'estar al dia', 'que hay nuevo en tecnologia', 'competencia tecnologica',
    'monitorear tecnologia', 'alertas tecnologicas', 'radar tecnologico',
  ],
  'ia-corporativa': [
    'inteligencia artificial', 'ia', 'chatbot', 'bot', 'robot', 'automatizar con ia',
    'n8n', 'flujos trabajo', 'agente ia', 'clon digital', 'whatsapp automatico',
    'responder automatico', 'atencion automatizada', 'reducir costos con ia',
    'ahorrar tiempo con ia', 'productividad ia', 'contenido automatico',
    'quiero usar inteligencia artificial', 'ia en mi negocio', 'automatizacion ia',
  ],
};

export const getServiceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
