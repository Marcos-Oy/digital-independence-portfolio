import { useParams, Navigate } from "react-router-dom";
import ServiceLandingView from "@/views/landing/ServiceLandingView";

const ServiceLandingRouteView = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to="/landing" replace />;
  return <ServiceLandingView slug={slug} />;
};

export default ServiceLandingRouteView;
