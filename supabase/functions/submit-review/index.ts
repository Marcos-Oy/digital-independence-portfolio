import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

type Body = {
  name?: string;
  city?: string;
  service?: string;
  rating?: number;
  comment?: string;
};

const json = (status: number, data: unknown) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

// Quick regex pre-filter for obvious code/SQL injection patterns
const looksLikeCode = (text: string) => {
  const patterns = [
    /<script\b/i,
    /<\/?\w+[^>]*>/i,                       // any HTML tag
    /\b(select|insert|update|delete|drop|alter|truncate|union|create|grant)\b\s+/i,
    /--\s*$/m,
    /;\s*(drop|delete|update|insert|alter|truncate)\b/i,
    /\bor\s+1\s*=\s*1\b/i,
    /\$\{[^}]+\}/,
    /\bfunction\s*\(/i,
    /=>/,
    /\bconsole\.log\b/i,
    /\bimport\s+.+\s+from\b/i,
    /\bnew\s+function\b/i,
  ];
  return patterns.some((p) => p.test(text));
};

const moderateWithAI = async (payload: {
  name: string;
  city: string;
  service: string;
  comment: string;
}) => {
  const system =
    "Eres un moderador de reseñas para un sitio web profesional en español. " +
    "Recibes una reseña con campos: name, city, service, comment. " +
    "Debes responder SIEMPRE en JSON estricto con la forma " +
    '{"safe": boolean, "reason": string, "category": "ofensiva"|"insulto"|"codigo"|"sql"|"spam"|"otro"|"none"}. ' +
    "Marca safe=false si: contiene insultos, lenguaje ofensivo, discriminación, amenazas, " +
    "código de programación de cualquier lenguaje, etiquetas HTML, comandos SQL (SELECT, DROP, INSERT, UPDATE, DELETE, UNION, etc.) " +
    "o intentos de inyección. También marca como no segura si el contenido es spam o promociona otros servicios. " +
    "Si todo es texto natural respetuoso, safe=true y category=none.";

  const user =
    "Reseña a moderar:\n" + JSON.stringify(payload, null, 2);

  const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-2.5-flash",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      response_format: { type: "json_object" },
    }),
  });

  if (!resp.ok) {
    const text = await resp.text().catch(() => "");
    console.error("AI moderation error", resp.status, text);
    if (resp.status === 429) throw new Error("rate_limit");
    if (resp.status === 402) throw new Error("credits");
    throw new Error("ai_error");
  }

  const data = await resp.json();
  const content = data?.choices?.[0]?.message?.content ?? "{}";
  try {
    const parsed = JSON.parse(content);
    return {
      safe: !!parsed.safe,
      reason: String(parsed.reason ?? ""),
      category: String(parsed.category ?? "otro"),
    };
  } catch {
    return { safe: false, reason: "Respuesta de moderación inválida", category: "otro" };
  }
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") return json(405, { error: "Método no permitido" });

  let body: Body;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: "JSON inválido" });
  }

  const name = (body.name ?? "").trim();
  const city = (body.city ?? "").trim();
  const service = (body.service ?? "").trim();
  const comment = (body.comment ?? "").trim();
  const rating = Number(body.rating);

  // Required + length validation
  if (!name || !city || !service || !comment) {
    return json(400, { error: "Todos los campos son obligatorios." });
  }
  if (name.length > 80 || city.length > 80 || service.length > 80) {
    return json(400, { error: "Algunos campos exceden el largo permitido." });
  }
  if (comment.length < 10 || comment.length > 800) {
    return json(400, { error: "El comentario debe tener entre 10 y 800 caracteres." });
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return json(400, { error: "La calificación debe ser un número del 1 al 5." });
  }

  // Pre-filter regex
  const combined = `${name} ${city} ${service} ${comment}`;
  if (looksLikeCode(combined)) {
    return json(400, {
      error: "La reseña contiene contenido no permitido (código o etiquetas).",
    });
  }

  // AI moderation
  try {
    const verdict = await moderateWithAI({ name, city, service, comment });
    if (!verdict.safe) {
      return json(400, {
        error:
          "Tu reseña no pudo publicarse: contiene contenido no permitido (" +
          verdict.category +
          "). Por favor, reescríbela en lenguaje respetuoso y sin código.",
      });
    }
  } catch (e) {
    const msg = (e as Error).message;
    if (msg === "rate_limit") {
      return json(429, { error: "Demasiadas reseñas en este momento. Intenta de nuevo en unos minutos." });
    }
    if (msg === "credits") {
      return json(402, { error: "Servicio de moderación temporalmente no disponible." });
    }
    return json(500, { error: "No fue posible validar la reseña." });
  }

  // Insert with service role
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
  const { data, error } = await supabase
    .from("reviews")
    .insert({ name, city, service, rating, comment })
    .select()
    .single();

  if (error) {
    console.error("DB insert error", error);
    return json(500, { error: "No fue posible guardar la reseña." });
  }

  return json(200, { ok: true, review: data });
});
