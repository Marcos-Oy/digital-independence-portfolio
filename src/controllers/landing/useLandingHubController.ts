import { useEffect, useState } from "react";
import { LANDINGS, type LandingMeta } from "@/models/landings";

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

export const useLandingHubController = () => {
  const [query, setQuery] = useState("");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Landing Pages | Independencia Digital";
  }, []);

  const q = normalize(query.trim());
  const filtered: LandingMeta[] = q
    ? LANDINGS.filter((l) => normalize(`${l.title} ${l.summary}`).includes(q))
    : LANDINGS;

  const copyLink = async (slug: string) => {
    const url = `${window.location.origin}/landing/${slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedSlug(slug);
      window.setTimeout(() => setCopiedSlug((prev) => (prev === slug ? null : prev)), 2000);
    } catch {
      /* clipboard no disponible en este navegador/contexto */
    }
  };

  return { query, setQuery, filtered, copiedSlug, copyLink };
};
