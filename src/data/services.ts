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
  type LucideIcon,
} from "lucide-react";

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
  tagline: string;
  summary: string;
  description: string;
  rightClient: string;
  timeFactor: string;
  valuePromise: string;
  includes: string[];
  tools?: string[];
  segments: ("emprendedores" | "pymes" | "empresas" | "publico")[];
  modality: ServiceModality[];
}

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

export const SERVICES: Service[] = [
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
    rightClient:
      "Dueño de PyME o gerente con tecnología desordenada, accesos perdidos y sin documentación.",
    timeFactor: "Primeros 90 días",
    valuePromise:
      "Infraestructura tecnológica completamente ordenada, documentada y bajo tu control directo con ecosistema empresarial configurado.",
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
    rightClient:
      "Gerente de empresa que opera con procesos manuales y siente que la competencia le gana con tecnología.",
    timeFactor: "Primer trimestre",
    valuePromise:
      "Hoja de ruta de transformación digital implementada con procesos manuales convertidos en flujos digitales.",
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
    rightClient:
      "Empresa o institución que necesita un director de tecnología pero no puede absorber el costo de un CTO full-time.",
    timeFactor: "Primer trimestre",
    valuePromise:
      "Área TI estructurada, procesos documentados y dirección estratégica activa con tu negocio.",
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
    rightClient:
      "Dueño o gerente que siente que gasta demasiado en tecnología o está a punto de hacer una inversión grande.",
    timeFactor: "Desde el primer diagnóstico",
    valuePromise:
      "Plan concreto para reducir costos TI entre un 30% y un 50% sin sacrificar rendimiento ni seguridad.",
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
    rightClient:
      "PyME o empresa que necesita soporte continuo predecible y con SLA, sin pagar un equipo TI interno.",
    timeFactor: "Desde el primer mes",
    valuePromise:
      "Soporte TI con SLA, horas definidas y trazabilidad mensual de incidentes y resoluciones.",
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
    rightClient:
      "Profesional independiente o dueño de PyME sin presencia digital profesional o con una que no genera confianza.",
    timeFactor: "Primeras semanas",
    valuePromise:
      "Presencia digital completamente operativa: sitio web bajo tu dominio, correo corporativo, Google Maps y canales listos.",
    includes: [
      "Sitio web corporativo, landing o portafolio",
      "SEO técnico (Search Console, velocidad, metaetiquetas)",
      "Perfil de Negocio Google y Maps",
      "Dominio propio y correo corporativo",
      "Hosting con Cloudflare y Hostinger",
    ],
    segments: ["emprendedores", "pymes"],
    modality: ["consultoria"],
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
    rightClient:
      "Dueño de PyME que gestiona clientes o procesos con Excel y sabe que eso no puede escalar.",
    timeFactor: "Antes de cerrar el primer trimestre",
    valuePromise:
      "Sistema web funcionando en producción con base de datos, panel de administración y versión móvil instalable.",
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
    rightClient:
      "Desde emprendedores que no saben cómo pautar hasta gerentes que necesitan auditar a su agencia.",
    timeFactor: "Primeros 90 días",
    valuePromise:
      "Inversión publicitaria alineada a resultados con métricas claras de costo de adquisición de cliente.",
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
    rightClient:
      "Desde el dueño de PyME sin controles básicos hasta la gran empresa con ISO pero sin seguridad real en las personas.",
    timeFactor: "Primeros 90 días",
    valuePromise:
      "Postura de seguridad real: controles técnicos activos, equipo formado para detectar ataques de ingeniería social y plan documentado.",
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
    rightClient:
      "Gerente que toma decisiones tecnológicas y necesita información estructurada, no opinión.",
    timeFactor: "Entrega mensual desde el primer mes",
    valuePromise:
      "Inteligencia tecnológica continua para que cada decisión se tome con criterio.",
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
    rightClient:
      "PyMEs y empresas que ya tienen procesos definidos y quieren liberarlos del trabajo manual repetitivo.",
    timeFactor: "Primeros 90 días",
    valuePromise:
      "Procesos clave automatizados con agentes de IA conectados a tu negocio, con biblioteca de prompts y clones digitales operativos.",
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
];


export const SEARCH_TAGS: Record<string, string[]> = {
  'arquitectura-ti': [
    'orden tecnologia', 'organizar sistemas', 'infraestructura', 'google workspace',
    'microsoft 365', 'correo empresa', 'servidor', 'nube', 'cloud', 'dominio',
    'hosting', 'cloudflare', 'dns', 'redes', 'vpn', 'caos tecnologico',
    'no tengo orden en mi empresa', 'quiero organizar mi tecnologia',
  ],
  'presencia-digital': [
    'pagina web', 'sitio web', 'web', 'pagina internet', 'quiero una web',
    'paginas webs', 'crear pagina', 'hacer pagina', 'diseño web', 'landing',
    'aparecer en google', 'seo', 'google', 'redes sociales', 'instagram',
    'facebook', 'quiero vender online', 'tienda online', 'catalogo digital',
    'marketing digital', 'posicionamiento', 'visibilidad', 'presencia online',
    'me buscan en internet', 'no tengo pagina', 'quiero salir en google',
  ],
  'ciberseguridad': [
    'seguridad', 'hackear', 'hacker', 'robo datos', 'proteger empresa',
    'contraseñas', 'virus', 'malware', 'ransomware', 'phishing', 'estafa',
    'antivirus', 'backup', 'respaldo', 'me hackearon', 'ciberataque',
    'proteccion', 'vulnerabilidad', 'robo informacion', 'datos seguros',
    'ciberseguridad', 'seguro', 'proteger mis datos',
  ],
  'software-medida': [
    'sistema', 'software', 'aplicacion', 'app', 'programa', 'desarrollar',
    'automatizar', 'automatizacion', 'proceso manual', 'planilla excel',
    'base de datos', 'sistema a medida', 'sistema propio', 'erp', 'crm',
    'quiero un sistema', 'quiero automatizar', 'cansado de excel',
    'gestion empresa', 'control inventario', 'facturacion', 'cotizacion',
  ],
  'ia-corporativa': [
    'inteligencia artificial', 'ia', 'chatbot', 'bot', 'robot', 'automatizar',
    'automatizacion', 'n8n', 'flujos trabajo', 'agente ia', 'clon digital',
    'reducir costos', 'ahorrar tiempo', 'productividad', 'whatsapp automatico',
    'responder automatico', 'contenido automatico', 'video ia', 'voz ia',
    'quiero usar ia', 'inteligencia en mi negocio', 'atencion automatizada',
  ],
  'soporte-ti': [
    'soporte', 'ayuda computador', 'problema computador', 'soporte tecnico',
    'asistencia tecnica', 'arreglar', 'configurar', 'instalar', 'impresora',
    'red wifi', 'internet lento', 'correo no funciona', 'no puedo entrar',
    'no funciona', 'problema tecnico', 'mantenimiento',
  ],
  'cto-externo': [
    'director tecnologia', 'cto', 'lider tecnologico', 'estrategia tecnologica',
    'no tengo jefe de tecnologia', 'quien me guia', 'toma de decisiones ti',
    'roadmap tecnologico', 'planificacion tecnologica', 'gerente ti',
    'necesito alguien que me guie', 'asesor tecnologico', 'direccion ti',
  ],
  'diagnostico-ti': [
    'diagnostico', 'auditoria', 'revisar sistemas', 'evaluar tecnologia',
    'que tengo mal', 'que necesito mejorar', 'analisis tecnologico',
    'no se por donde empezar', 'quiero saber que falla', 'primer paso',
    'consultoria inicial', 'revision', 'estado actual',
  ],
  'capacitacion': [
    'capacitacion', 'curso', 'entrenar', 'aprender', 'formacion', 'taller',
    'ensenar uso tecnologia', 'mis empleados no saben usar', 'office',
    'excel', 'word', 'teams', 'correo', 'herramientas digitales',
    'transformacion digital equipo', 'adoptacion tecnologica',
  ],
  'mercado-publico': [
    'mercado publico', 'licitacion', 'propuesta', 'bases', 'ley de compras',
    'gobierno', 'municipio', 'servicio publico', 'organismo estado',
    'ficha empresa', 'registro proveedor', 'contrato estado',
    'quiero venderle al estado', 'postular licitacion',
  ],
  'plan-360': [
    'todo incluido', 'servicio completo', 'plan completo', 'todo en uno',
    'acompañamiento total', 'necesito todo', 'desde cero', 'empresa nueva',
    'emprendimiento', 'startup', 'quiero todo resuelto',
  ],
};

export const getServiceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
