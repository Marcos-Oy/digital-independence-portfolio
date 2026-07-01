import { useParams, Navigate } from "react-router-dom";
import { useServicioController } from "@/controllers/useServicioController";
import ServicioView from "@/views/ServicioView";

const ServicioRouteView = () => {
  const { slug } = useParams<{ slug: string }>();
  const { service } = useServicioController(slug);

  if (!service) return <Navigate to="/servicios" replace />;
  return <ServicioView service={service} />;
};

export default ServicioRouteView;
