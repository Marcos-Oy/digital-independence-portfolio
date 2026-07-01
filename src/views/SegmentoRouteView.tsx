import { useParams, Navigate } from "react-router-dom";
import { useSegmentoController } from "@/controllers/useSegmentoController";
import SegmentoView from "@/views/SegmentoView";

const SegmentoRouteView = () => {
  const { slug } = useParams<{ slug: string }>();
  const { segment } = useSegmentoController(slug);

  if (!segment) return <Navigate to="/" replace />;
  return <SegmentoView segment={segment} />;
};

export default SegmentoRouteView;
