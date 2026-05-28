import { useParams, Navigate } from "react-router-dom";
import { getServiceBySlug } from "@/data/services";
import ServicePageLayout from "@/components/ServicePageLayout";
import { useEffect } from "react";

const Servicio = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Independencia Digital`;
    }
  }, [service]);

  if (!service) return <Navigate to="/servicios" replace />;
  return <ServicePageLayout service={service} />;
};

export default Servicio;
