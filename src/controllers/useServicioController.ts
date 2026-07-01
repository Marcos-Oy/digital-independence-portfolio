import { useEffect } from "react";
import { getServiceBySlug } from "@/models/services";

export const useServicioController = (slug: string | undefined) => {
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Independencia Digital`;
    }
  }, [service]);

  return { service };
};
