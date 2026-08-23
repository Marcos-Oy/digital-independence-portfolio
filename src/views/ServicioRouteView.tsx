import { useParams, Navigate } from "react-router-dom";
import { useServicioController } from "@/controllers/useServicioController";
import ServicioView from "@/views/ServicioView";
import PaginasWebServiceView from "@/views/services/PaginasWebServiceView";
import DesarrolloSoftwareServiceView from "@/views/services/DesarrolloSoftwareServiceView";
import CiberseguridadServiceView from "@/views/services/CiberseguridadServiceView";
import VigilanciaInnovacionServiceView from "@/views/services/VigilanciaInnovacionServiceView";
import ReduccionCostosTiServiceView from "@/views/services/ReduccionCostosTiServiceView";
import ArquitecturaTiServiceView from "@/views/services/ArquitecturaTiServiceView";
import TransformacionDigitalServiceView from "@/views/services/TransformacionDigitalServiceView";
import DireccionTiServiceView from "@/views/services/DireccionTiServiceView";
import IaCorporativaServiceView from "@/views/services/IaCorporativaServiceView";
import IntegracionPlataformasServiceView from "@/views/services/IntegracionPlataformasServiceView";
import AutomatizacionProcesosServiceView from "@/views/services/AutomatizacionProcesosServiceView";
import DashboardsKpiServiceView from "@/views/services/DashboardsKpiServiceView";

const ServicioRouteView = () => {
  const { slug } = useParams<{ slug: string }>();
  const { service } = useServicioController(slug);

  if (!service) return <Navigate to="/#servicios" replace />;
  if (slug === "presencia-digital") return <PaginasWebServiceView />;
  if (slug === "desarrollo-software") return <DesarrolloSoftwareServiceView />;
  if (slug === "ciberseguridad") return <CiberseguridadServiceView />;
  if (slug === "vigilancia-innovacion") return <VigilanciaInnovacionServiceView />;
  if (slug === "optimizacion-costos-ti") return <ReduccionCostosTiServiceView />;
  if (slug === "arquitectura-ti") return <ArquitecturaTiServiceView />;
  if (slug === "transformacion-digital") return <TransformacionDigitalServiceView />;
  if (slug === "direccion-ti") return <DireccionTiServiceView />;
  if (slug === "ia-corporativa") return <IaCorporativaServiceView />;
  if (slug === "integracion-plataformas") return <IntegracionPlataformasServiceView />;
  if (slug === "automatizacion-procesos") return <AutomatizacionProcesosServiceView />;
  if (slug === "dashboards-kpi") return <DashboardsKpiServiceView />;
  return <ServicioView service={service} />;
};

export default ServicioRouteView;
