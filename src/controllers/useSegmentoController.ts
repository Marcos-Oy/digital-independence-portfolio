import { useEffect } from "react";
import { getSegmentBySlug } from "@/models/segments";

export const useSegmentoController = (slug: string | undefined) => {
  const segment = slug ? getSegmentBySlug(slug) : undefined;

  useEffect(() => {
    if (segment) {
      document.title = `${segment.title} | Independencia Digital`;
    }
  }, [segment]);

  return { segment };
};
