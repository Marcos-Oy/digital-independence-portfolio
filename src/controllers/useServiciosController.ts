import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { AREAS, type ServiceArea, type ServiceModality } from "@/models/services";
import { filterAndSortServices } from "@/models/serviceSearch";

export const useServiciosController = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeModality, setActiveModality] = useState<ServiceModality | null>(null);
  const [activeArea, setActiveArea] = useState<ServiceArea | null>(
    () => (searchParams.get("area") as ServiceArea | null) ?? null
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Servicios | Independencia Digital";
  }, []);

  const clearArea = () => {
    setActiveArea(null);
    setSearchParams({}, { replace: true });
  };

  const clearFilters = () => {
    setQuery("");
    setActiveModality(null);
    clearArea();
  };

  const { filtered, isSearching, query: q } = filterAndSortServices({
    query,
    modality: activeModality,
    area: activeArea,
  });

  const visibleAreas = AREAS.filter((area) => filtered.some((s) => s.area === area.id));
  const activeAreaData = activeArea ? AREAS.find((a) => a.id === activeArea) : null;
  const isFiltering = q.length > 0 || activeModality !== null || activeArea !== null;

  return {
    query,
    setQuery,
    inputRef,
    activeModality,
    setActiveModality,
    activeArea,
    activeAreaData,
    clearArea,
    clearFilters,
    filtered,
    visibleAreas,
    isSearching,
    isFiltering,
  };
};
