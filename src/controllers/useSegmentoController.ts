import { useEffect } from "react";
import { getSegmentBySlug } from "@/models/segments";

export const useSegmentoController = (slug: string | undefined) => {
  const segment = slug ? getSegmentBySlug(slug) : undefined;

  useEffect(() => {
    if (segment) {
      document.title = `${segment.title} | MOT[IA]RZO Labs`;
    }
  }, [segment]);

  return { segment };
};
