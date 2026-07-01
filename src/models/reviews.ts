import { supabase } from "@/integrations/supabase/client";

export type Review = {
  id: string;
  name: string;
  city: string;
  service: string;
  rating: number;
  comment: string;
  created_at: string;
};

export const REVIEW_SERVICE_OPTIONS = [
  "Arquitectura TI",
  "Transformación Digital",
  "Dirección de TI (CTO Externo)",
  "Reducción de Costos TI",
  "Soporte TI Gestionado",
  "Presencia Digital",
  "Desarrollo de Software Web",
  "Dirección de Marketing Digital",
  "Ciberseguridad",
  "Vigilancia e Innovación Tecnológica",
  "Inteligencia Artificial Corporativa",
  "Consultoría puntual",
];

export const loadReviews = async (): Promise<Review[]> => {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(30);
  if (error || !data) return [];
  return data as Review[];
};

export interface NewReview {
  name: string;
  city: string;
  service: string;
  rating: number;
  comment: string;
}

export type SubmitReviewResult =
  | { ok: true }
  | { ok: false; message: string };

export const submitReview = async (review: NewReview): Promise<SubmitReviewResult> => {
  const { data, error } = await supabase.functions.invoke("submit-review", { body: review });

  if (error) {
    let message = "No fue posible enviar tu reseña.";
    const ctx = (error as { context?: Response }).context;
    try {
      const body = ctx ? await ctx.json() : null;
      if (body?.error) message = body.error;
    } catch { /* noop */ }
    return { ok: false, message };
  }

  if (data?.ok) return { ok: true };
  return { ok: false, message: data?.error ?? "Intenta de nuevo." };
};
