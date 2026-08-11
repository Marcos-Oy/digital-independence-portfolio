import { Stethoscope, Map, Wrench, Headset, type LucideIcon } from "lucide-react";

export interface MethodStep {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const METHOD_STEPS: MethodStep[] = [
  {
    icon: Stethoscope,
    title: "Diagnóstico",
    desc: "Auditamos tu infraestructura actual sin costo, sin compromiso.",
  },
  {
    icon: Map,
    title: "Hoja de ruta",
    desc: "Priorizamos qué resolver primero según impacto y presupuesto.",
  },
  {
    icon: Wrench,
    title: "Implementación",
    desc: "Construimos y desplegamos con tu equipo o de forma autónoma.",
  },
  {
    icon: Headset,
    title: "Acompañamiento",
    desc: "Dirección tecnológica activa y continua, no un proyecto que termina.",
  },
];
