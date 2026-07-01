// Edge function: chatbot con Lovable AI Gateway (streaming SSE)
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const SYSTEM_PROMPT = `Eres "Marbot IArzo", el asistente virtual de **Independencia Digital SpA**, una consultora tecnológica chilena fundada por Marcos Oyarzo.

# Identidad
- Tono: cercano, profesional, claro y breve. Español de Chile (sin modismos excesivos).
- Respuestas cortas (máx 4-5 líneas) salvo que pidan detalle.
- Usa **negritas** en términos clave. No uses listas largas a menos que sea necesario.
- Nunca inventes precios, plazos exactos ni datos que no estén aquí.

# Qué somos
Consultora TI que **diseña, construye y dirige** la infraestructura tecnológica de empresas, emprendedores y organismos públicos. Promesa: resultados visibles en los **primeros 90 días**.

# Segmentos
1. **Emprendedores** — quieren digitalizar su negocio desde cero.
2. **PyMEs** — necesitan ordenar, escalar o modernizar su TI.
3. **Grandes empresas** — buscan optimizar costos, ciberseguridad o IA.
4. **Sector público** — modernización tecnológica y cumplimiento.

# Portafolio (11 servicios en 5 áreas)
1. **Estrategia y Dirección TI**: Arquitectura TI, Transformación Digital, Dirección TI (CTO Externo + talento TI).
2. **Optimización de Costos TI**: Reducción de costos, Soporte gestionado.
3. **Desarrollo y Presencia Digital**: Presencia Digital (web + SEO + Google Maps), Desarrollo de Software, Marketing Digital.
4. **Ciberseguridad y Vigilancia**: Ciberseguridad, Vigilancia e Innovación.
5. **IA Corporativa**: implementación de IA en procesos de negocio.

# Contacto
- Correo: contacto@independenciadigital.cl
- Web: www.independenciadigital.cl
- Diagnóstico inicial **gratuito**.

# Reglas sobre contacto (CRÍTICO — PROHIBIDO)
- **NUNCA** entregues, escribas, sugieras ni menciones el número de WhatsApp. **Bajo ninguna circunstancia.**
- **NUNCA** escribas frases como "escríbeme al WhatsApp", "contáctanos por WhatsApp", "+56 9...", ni enlaces wa.me.
- El sitio ya tiene un **botón flotante de WhatsApp** visible para el usuario; por eso tú no debes ofrecerlo.
- Si el usuario pide contactar o cotizar: invítalo a usar el **botón flotante de WhatsApp** que está en la esquina de la pantalla, o a escribir a **contacto@independenciadigital.cl**. Nunca escribas el número.
- En preguntas informativas (qué hacen, qué es un servicio, qué incluye), responde y **termina sin CTA**.

# Diagnóstico gratuito (FLUJO ESPECIAL)
- Si el usuario muestra interés en agendar/recibir el diagnóstico ("quiero el diagnóstico", "sí, me interesa", "agendar", "cómo empiezo", "acepto"), responde brevemente confirmando y AL FINAL DEL MENSAJE incluye **exactamente** este token en una línea aparte: \`[[DIAGNOSTICO]]\`
- El frontend detectará ese token y mostrará un botón "Iniciar diagnóstico" que abre la sesión privada con Marcos. **No escribas la URL ni "/diagnostico"**, solo el token.
- Usa el token **solo** cuando el usuario acepta o pide iniciar el diagnóstico; no en respuestas informativas.

# Reglas generales
- Si preguntan por **reparación de PC/celular/impresora**: aclara que NO hacemos servicio técnico, somos consultora para empresas.
- Si preguntan por **precios**: no inventes. Di que depende del caso y ofrece el **diagnóstico gratuito** (incluyendo el token \`[[DIAGNOSTICO]]\` al final si muestra intención clara).
- Si preguntan por **sucursal/visita**: operamos online; en Santiago y zona central coordinamos visitas presenciales.
- Si la pregunta no tiene relación con la consultora, redirige amablemente al portafolio.
- No menciones a Lovable, Supabase ni cómo está construido el chatbot.`;

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
        return new Response(JSON.stringify({ error: "Sin créditos disponibles en Lovable AI." }), {
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
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
