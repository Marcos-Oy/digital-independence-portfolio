import { Rocket, Building, Landmark, Sparkles, type LucideIcon } from "lucide-react";

export type SegmentId = "emprendedores" | "pymes" | "empresas" | "publico";

export interface Segment {
  id: SegmentId;
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  audience: string;
  tone: "cercano" | "corporativo";
  size: string;
  ticket: "Bajo - medio" | "Medio - alto" | "Alto" | "Alto con plazos largos";
  channel: string;
  entryPoint: string;
  description: string;
  recommendedServices: string[]; // service slugs
}

export const SEGMENTS: Segment[] = [
  {
    id: "emprendedores",
    slug: "emprendedores",
    title: "Emprendedores y Profesionales Independientes",
    shortTitle: "Emprendedores",
    icon: Sparkles,
    audience: "Persona natural",
    tone: "cercano",
    size: "~500.000 en Chile",
    ticket: "Bajo - medio",
    channel: "Redes sociales, boca a boca, contenido orgánico",
    entryPoint: "Presencia Digital · Marketing Digital",
    description:
      "Si recién estás levantando tu negocio o trabajas por tu cuenta, te ayudamos a crear una presencia digital profesional y a aprender a pautar sin perder dinero. Hablamos claro, con ejemplos cotidianos y sin tecnicismos innecesarios.",
    recommendedServices: [
      "presencia-digital",
      "marketing-digital",
      "ciberseguridad",
      "optimizacion-costos-ti",
    ],
  },
  {
    id: "pymes",
    slug: "pymes",
    title: "PyMEs (2 a 50 personas)",
    shortTitle: "PyMEs",
    icon: Rocket,
    audience: "Persona natural o jurídica (SpA, Ltda)",
    tone: "corporativo",
    size: "~900.000 en Chile",
    ticket: "Medio - alto",
    channel: "LinkedIn, referidos, propuesta directa",
    entryPoint: "Arquitectura TI · Desarrollo Web · Ciberseguridad",
    description:
      "Ordenamos tu infraestructura tecnológica, desarrollamos el software que tu operación necesita y blindamos la seguridad de tus datos y clientes. Actuamos como tu Director de Tecnología externo, sin el costo de un CTO full-time.",
    recommendedServices: [
      "arquitectura-ti",
      "desarrollo-software",
      "ciberseguridad",
      "soporte-ti-gestionado",
      "ia-corporativa",
    ],
  },
  {
    id: "empresas",
    slug: "empresas",
    title: "Grandes Empresas (50+ colaboradores)",
    shortTitle: "Grandes Empresas",
    icon: Building,
    audience: "Persona jurídica (S.A., SpA)",
    tone: "corporativo",
    size: "~8.000 en Chile",
    ticket: "Alto",
    channel: "LinkedIn, propuesta ejecutiva formal",
    entryPoint: "Ciberseguridad Corporativa · IA · Transformación Digital",
    description:
      "Acompañamos a la gerencia en transformación digital, ciberseguridad corporativa y adopción de IA con métricas, ROI y cumplimiento. Trabajamos con métricas, lenguaje corporativo y entregables ejecutivos.",
    recommendedServices: [
      "transformacion-digital",
      "ciberseguridad",
      "ia-corporativa",
      "direccion-ti",
      "vigilancia-innovacion",
    ],
  },
  {
    id: "publico",
    slug: "sector-publico",
    title: "Sector Público",
    shortTitle: "Sector Público",
    icon: Landmark,
    audience: "Contrato con el Estado",
    tone: "corporativo",
    size: "~2.500 organismos",
    ticket: "Alto con plazos largos",
    channel: "Mercado Público (ChileCompra)",
    entryPoint: "Ciberseguridad · Formación · TI · Transformación",
    description:
      "Participamos en licitaciones de Mercado Público con propuestas técnicas para ciberseguridad, formación, infraestructura TI y transformación digital de organismos del Estado.",
    recommendedServices: [
      "ciberseguridad",
      "transformacion-digital",
      "arquitectura-ti",
      "vigilancia-innovacion",
    ],
  },
];

export const getSegmentBySlug = (slug: string) =>
  SEGMENTS.find((s) => s.slug === slug);
