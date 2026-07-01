import {
  ShieldCheck,
  BarChart3,
  Cog,
  Wallet,
  Globe,
  Building2,
  type LucideIcon,
} from "lucide-react";

// Dolor / Problema: específico y verosímil, no genérico. Loss aversion pesa
// más que gain framing, por eso esta sección va primero, apenas terminado el VSL.
export const PAIN_POINTS = [
  "No sabes quién tiene acceso a tus cuentas, correos o sistemas si un colaborador se va mañana.",
  "Tus respaldos \"existen\", pero nunca los has probado de verdad.",
  "Un solo correo de phishing bien hecho podría vaciar una cuenta o secuestrar tus datos.",
  "Tomas decisiones importantes mirando una planilla atrasada, no un dashboard en tiempo real.",
  "Tu equipo pierde horas copiando datos entre Excel, WhatsApp y sistemas que no se hablan entre sí.",
  "Sospechas que gastas de más en tecnología, pero no tienes cómo comprobarlo.",
];

export const PAIN_REFRAME =
  "Si algo de esto te resulta familiar, no es porque no sepas de tecnología. Es porque tu ecosistema digital nunca fue diseñado como un sistema, y cuando la tecnología se construye en partes sueltas, termina siendo un problema en lugar de una solución.";

export const GENERAL_RIGHT_CLIENT =
  "Emprendedores, profesionales independientes, PyMEs, grandes empresas y organismos del sector público que necesitan ordenar, proteger o hacer crecer su tecnología, sin importar en qué etapa estén hoy.";

// El Método: reduce el riesgo percibido mostrando el mecanismo paso a paso
// antes de pedir el compromiso. Coincide con cómo opera realmente el negocio.
export const METHOD_STEPS = [
  {
    n: "01",
    title: "Diagnóstico sin costo",
    desc: "Revisamos tu situación actual: qué tienes, qué falta y qué te está costando dinero, tiempo o riesgo hoy.",
  },
  {
    n: "02",
    title: "Hoja de ruta priorizada",
    desc: "Ordenamos las acciones según el impacto real en tu negocio, no según lo que sea más fácil de vender.",
  },
  {
    n: "03",
    title: "Implementación por etapas",
    desc: "Empezamos por lo que resuelve el dolor más urgente. No necesitas contratarlo todo de una vez.",
  },
  {
    n: "04",
    title: "Dirección tecnológica activa",
    desc: "Seguimos como tu Director de Tecnología externo, ajustando el rumbo a medida que tu negocio crece.",
  },
];

// Satisfacción / Beneficios: estado futuro concreto, en contraste directo con
// PAIN_POINTS. Cifras reales ya usadas en el catálogo de servicios, no estimadas para esta landing.
export interface Benefit {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const BENEFITS: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Control real de tus accesos",
    desc: "Sabes exactamente quién tiene acceso a qué, con respaldos que sí funcionan cuando los necesitas.",
  },
  {
    icon: BarChart3,
    title: "Decisiones con datos, no con intuición",
    desc: "Dashboards en tiempo real conectados a tus fuentes reales de información.",
  },
  {
    icon: Cog,
    title: "Menos trabajo manual repetitivo",
    desc: "Los procesos críticos de tu operación quedan automatizados y documentados.",
  },
  {
    icon: Wallet,
    title: "Menos gasto en tecnología",
    desc: "Reduces entre un 30% y un 50% tu gasto en TI sin sacrificar rendimiento ni seguridad.",
  },
  {
    icon: Globe,
    title: "Presencia digital que vende",
    desc: "Tu sitio y tus canales generan confianza real, no solo existen.",
  },
  {
    icon: Building2,
    title: "Un Director de Tecnología externo",
    desc: "Dirección estratégica activa, sin el costo de un CTO a tiempo completo.",
  },
];
