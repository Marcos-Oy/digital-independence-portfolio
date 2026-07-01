import DOMPurify from "dompurify";

// Coincide exactamente con los nodos que permite el editor (StarterKit reducido
// en RichTextEditor.tsx). Sin atributos permitidos: elimina cualquier vector
// vía href/onclick/style aunque el editor cambie de esquema a futuro.
const ALLOWED_TAGS = ["p", "strong", "em", "ul", "ol", "li", "br"];

export const sanitizeRichText = (html: string): string =>
  DOMPurify.sanitize(html, { ALLOWED_TAGS, ALLOWED_ATTR: [] });

export const stripHtml = (html: string): string => html.replace(/<[^>]*>/g, "").trim();
