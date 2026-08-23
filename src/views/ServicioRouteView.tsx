import { useParams, Navigate } from "react-router-dom";
import { useServicioController } from "@/controllers/useServicioController";
import ServicioView from "@/views/ServicioView";
import PaginasWebServiceView from "@/views/services/PaginasWebServiceView";
import DesarrolloSoftwareServiceView from "@/views/services/DesarrolloSoftwareServiceView";
import CiberseguridadServiceView from "@/views/services/CiberseguridadServiceView";
import VigilanciaInnovacionServiceView from "@/views/services/VigilanciaInnovacionServiceView";

const ServicioRouteView = () => {
  const { slug } = useParams<{ slug: string }>();
  const { service } = useServicioController(slug);

  if (!service) return <Navigate to="/#servicios" replace />;
  if (slug === "presencia-digital") return <PaginasWebServiceView />;
  if (slug === "desarrollo-software") return <DesarrolloSoftwareServiceView />;
  if (slug === "ciberseguridad") return <CiberseguridadServiceView />;
  return <ServicioView service={service} />;
};

export default ServicioRouteView;
