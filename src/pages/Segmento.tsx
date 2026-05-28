import { useParams, Navigate } from "react-router-dom";
import { getSegmentBySlug } from "@/data/segments";
import SegmentPageLayout from "@/components/SegmentPageLayout";
import { useEffect } from "react";

const Segmento = () => {
  const { slug } = useParams<{ slug: string }>();
  const segment = slug ? getSegmentBySlug(slug) : undefined;

  useEffect(() => {
    if (segment) {
      document.title = `${segment.title} | Independencia Digital`;
    }
  }, [segment]);

  if (!segment) return <Navigate to="/" replace />;
  return <SegmentPageLayout segment={segment} />;
};

export default Segmento;
