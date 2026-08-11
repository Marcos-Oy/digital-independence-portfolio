import { Lock, Radar, Brain, LayoutGrid, Globe, PieChart, type LucideIcon } from "lucide-react";
import type { ServiceArea } from "@/models/services";
import type { ScrollIconMode } from "@/views/shared/ScrollContextIcon";

interface AreaVisual {
  icon: LucideIcon;
  mode: ScrollIconMode;
}

/** Ícono grande de fondo y comportamiento de scroll por área, para que cada
 * servicio tenga una decoración acorde a su contexto en vez de un genérico
 * gráfico repetido en todos lados. */
export const AREA_VISUALS: Record<ServiceArea, AreaVisual> = {
  "ciberseguridad": { icon: Lock, mode: "unlock" },
  "vigilancia-innovacion": { icon: Radar, mode: "rotate" },
  "ia-corporativa": { icon: Brain, mode: "pulse" },
  "estrategia-direccion-ti": { icon: LayoutGrid, mode: "rotate" },
  "desarrollo-presencia": { icon: Globe, mode: "rotate" },
  "optimizacion-costos": { icon: PieChart, mode: "rotate" },
};
