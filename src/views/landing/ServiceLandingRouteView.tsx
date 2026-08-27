import { useParams, Navigate } from "react-router-dom";
import ServiceLandingView from "@/views/landing/ServiceLandingView";
import PaginasWebLandingView from "@/views/landing/services/PaginasWebLandingView";
import DesarrolloSoftwareLandingView from "@/views/landing/services/DesarrolloSoftwareLandingView";
import CiberseguridadLandingView from "@/views/landing/services/CiberseguridadLandingView";
import VigilanciaInnovacionLandingView from "@/views/landing/services/VigilanciaInnovacionLandingView";
import ReduccionCostosTiLandingView from "@/views/landing/services/ReduccionCostosTiLandingView";
import ArquitecturaTiLandingView from "@/views/landing/services/ArquitecturaTiLandingView";
import TransformacionDigitalLandingView from "@/views/landing/services/TransformacionDigitalLandingView";
import DireccionTiLandingView from "@/views/landing/services/DireccionTiLandingView";
import IaCorporativaLandingView from "@/views/landing/services/IaCorporativaLandingView";
import IntegracionPlataformasLandingView from "@/views/landing/services/IntegracionPlataformasLandingView";
import AutomatizacionProcesosLandingView from "@/views/landing/services/AutomatizacionProcesosLandingView";
import DashboardsKpiLandingView from "@/views/landing/services/DashboardsKpiLandingView";

const ServiceLandingRouteView = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/landing" replace />;
  // Landings rediseñadas por servicio (Hook -> Dolor -> Problema -> Solución
  // -> Satisfacción -> CTA). Las 12 ya están migradas; ServiceLandingView
  // genérico queda como resguardo ante un slug fuera de catálogo.
  if (slug === "presencia-digital") return <PaginasWebLandingView />;
  if (slug === "desarrollo-software") return <DesarrolloSoftwareLandingView />;
  if (slug === "ciberseguridad") return <CiberseguridadLandingView />;
  if (slug === "vigilancia-innovacion") return <VigilanciaInnovacionLandingView />;
  if (slug === "optimizacion-costos-ti") return <ReduccionCostosTiLandingView />;
  if (slug === "arquitectura-ti") return <ArquitecturaTiLandingView />;
  if (slug === "transformacion-digital") return <TransformacionDigitalLandingView />;
  if (slug === "direccion-ti") return <DireccionTiLandingView />;
  if (slug === "ia-corporativa") return <IaCorporativaLandingView />;
  if (slug === "integracion-plataformas") return <IntegracionPlataformasLandingView />;
  if (slug === "automatizacion-procesos") return <AutomatizacionProcesosLandingView />;
  if (slug === "dashboards-kpi") return <DashboardsKpiLandingView />;
  return <ServiceLandingView slug={slug} />;
};

export default ServiceLandingRouteView;
