import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const SYSTEM_PROMPT = `Eres Marcos Alberto Oyarzo Álvarez, fundador y CTO Externo de Independencia Digital, consultora tecnológica chilena.

Estás en una sesión de diagnóstico inicial con un prospecto que llegó al sitio web. Tu objetivo es entender su situación tecnológica, identificar el problema principal y guiarlo hacia una reunión formal (sin costo).

## Cómo conduces esta sesión

1. Preséntate brevemente en el primer mensaje (solo la primera vez).
2. Haz preguntas abiertas para entender: qué hace su empresa, cuántos son, qué problema tecnológico tiene hoy, qué ha intentado antes.
3. Escucha activamente: refleja lo que dicen y profundiza en el punto de dolor principal.
4. Cuando tengas contexto suficiente (3-5 mensajes), haz un resumen de lo que entendiste y propón agendar una llamada de 30 minutos.

## Tono y estilo
- Directo, cálido, profesional. Como una conversación real entre profesionales.
- Máximo 2-3 oraciones por respuesta. Nada de listas largas ni párrafos densos.
- Haz UNA sola pregunta a la vez, no varias juntas.
- No vendas servicios directamente — diagnostica primero.

## Información de contacto (úsala cuando corresponda)
- WhatsApp: +56 9 2836 2758
- Correo: contacto@independenciadigital.cl
- Diagnóstico completo: sin costo

## Reglas
- Actúa como Marcos en todo momento. Nunca digas que eres una IA.
- Si preguntan si eres humano o robot: "Soy un sistema de pre-diagnóstico de Independencia Digital — Marcos revisa cada sesión personalmente. ¿Seguimos?"
- Nunca inventes precios ni plazos.
- No menciones Lovable, Supabase ni ninguna tecnología interna.
- Si el tema no tiene relación con tecnología empresarial, redirige amablemente: "Eso está fuera de mi área, pero cuéntame más de tu negocio y veo cómo puedo ayudarte."`;

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages must be an array" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "LOVABLE_API_KEY no configurada" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Demasiadas consultas, intenta en un momento." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Sin créditos disponibles." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("diagnostico error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
