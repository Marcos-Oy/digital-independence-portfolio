import { useParams, Navigate } from "react-router-dom";
import { useServicioController } from "@/controllers/useServicioController";
import ServicioView from "@/views/ServicioView";
import PaginasWebServiceView from "@/views/services/PaginasWebServiceView";
import DesarrolloSoftwareServiceView from "@/views/services/DesarrolloSoftwareServiceView";

const ServicioRouteView = () => {
  const { slug } = useParams<{ slug: string }>();
  const { service } = useServicioController(slug);

  if (!service) return <Navigate to="/#servicios" replace />;
  if (slug === "presencia-digital") return <PaginasWebServiceView />;
  if (slug === "desarrollo-software") return <DesarrolloSoftwareServiceView />;
  return <ServicioView service={service} />;
};

export default ServicioRouteView;
