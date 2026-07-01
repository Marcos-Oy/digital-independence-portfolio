import * as z from "zod";
import { sanitizeRichText, stripHtml } from "@/models/sanitize";

export const leadSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre completo").max(100, "Nombre demasiado largo"),
  email: z.string().trim().email("Ingresa un correo válido").max(254, "Correo demasiado largo"),
  telefono: z
    .string()
    .trim()
    .min(8, "Ingresa un número de contacto válido")
    .max(30, "Número demasiado largo"),
  // El HTML se sanitiza también en RichTextEditor al escribir; se vuelve a
  // sanitizar aquí como última barrera antes de tratar el valor como válido.
  mensaje: z
    .string()
    .refine((val) => stripHtml(val).length >= 10, "Cuéntanos un poco más de tu caso")
    .refine((val) => stripHtml(val).length <= 2000, "Tu mensaje es demasiado largo (máx. 2.000 caracteres)")
    .transform((val) => sanitizeRichText(val)),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
