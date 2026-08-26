import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://www.independenciadigital.cl";
const OG_IMAGE = `${SITE_URL}/og-image-logo-v2.png`;

interface PageMetaProps {
  /** Title completo de la pestaña (incluye la marca). */
  title: string;
  description: string;
  /** Ruta relativa de la página, p. ej. "/fundador". */
  path?: string;
  /** og:type; "website" por defecto. */
  type?: "website" | "article" | "profile";
  /** Páginas internas o de funnel que no deben indexarse. */
  noindex?: boolean;
  /** JSON-LD opcional adicional para la ruta. */
  jsonLd?: Record<string, unknown>;
}

/**
 * Meta tags por ruta (title, description, canonical, Open Graph, Twitter).
 * El canonical lo define cada página: NO se repone en index.html.
 */
const PageMeta = ({
  title,
  description,
  path,
  type = "website",
  noindex = false,
  jsonLd,
}: PageMetaProps) => {
  const url = path ? `${SITE_URL}${path}` : undefined;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="es_CL" />
      <meta property="og:site_name" content="Independencia Digital" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default PageMeta;
