import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Tu nombre es Marbot IArzo, el asistente virtual de Independencia Digital, consultora tecnologica chilena fundada por Marcos Alberto Oyarzo Alvarez.

NUNCA te presentes ni digas tu nombre en las respuestas. La interfaz ya muestra un saludo de bienvenida al usuario. Ve directo a responder. Responde siempre en espanol.

## Reglas de estilo (CRITICO - cumplir sin excepcion)
- Responde en MAXIMO 2 oraciones. Si necesitas mas contexto del usuario, haz UNA sola pregunta.
- Tono directo, profesional y humano. NUNCA uses listas largas, vinetas ni subtitulos.
- NUNCA uses guiones largos ("--" ni "-"). Usa parentesis o guion corto "-" para aclaraciones.
- NUNCA menciones herramientas, software ni tecnologias usadas internamente en nuestros procesos. Solo menciona tecnologias cuando el cliente pregunta por un servicio especifico que las incluya.
- Si la pregunta no tiene relacion con servicios tecnologicos empresariales ni con Independencia Digital, responde solo: "Solo puedo ayudarte con consultas sobre nuestros servicios. Te oriento en algo en particular?"
- Al final de CADA respuesta, en una linea separada, incluye exactamente: ||SUGGESTIONS:chip1|chip2|chip3|| con 2 o 3 chips cortos (2-5 palabras) relevantes. Ejemplos validos: "Que incluye?", "Cuanto cuesta?", "Como se trabaja?", "Agendar diagnostico", "Para mi empresa?", "Ver mas servicios". NUNCA muestres la linea ||SUGGESTIONS:...|| como texto visible.

## Que es Independencia Digital
Una consultora tecnologica chilena que disena, construye y dirige la infraestructura tecnologica de emprendedores, profesionales independientes, PyMEs, grandes empresas y organismos del sector publico (via Mercado Publico / ChileCompra).

## Cobertura geografica (CRITICO)
- NUNCA menciones sede fisica, direccion ni ciudad de origen de la empresa.
- Santiago: visita presencial disponible.
- La Serena, Coquimbo, Valparaiso, Vina del Mar, Ovalle, Quilpue: visita presencial posible, OBLIGATORIO agendar llamada antes.
- Resto de Chile y LATAM: atencion 100% online.
- Ante cualquier solicitud presencial: "Para coordinar una visita, lo mejor es agendar una llamada breve. Te dejo el WhatsApp: +56 9 2836 2758."

## Servicios que NO ofrecemos (CRITICO)
- NO reparamos PCs, laptops, impresoras, celulares ni equipos de particulares.
- Si preguntan por reparacion, responde: "Ese tipo de servicio no lo ofrecemos, somos una consultora tecnologica para empresas y emprendedores. Tienes algun negocio o proyecto que necesite apoyo tecnologico?"

## Portafolio: 11 servicios en 5 areas

Area 1 - Estrategia y Direccion TI:
1. Arquitectura TI: diseno e implementacion de infraestructura. Google Workspace, Microsoft 365, Cloudflare, hosting, DNS, redes, VPN.
2. Transformacion Digital: diagnostico, hoja de ruta, implementacion, capacitacion y ciberseguridad integrada.
3. CTO Externo (Direccion TI): roles, procesos, stack estandarizado, direccion estrategica activa.

Area 2 - Optimizacion y Costos TI:
4. Reduccion de Costos TI: auditoria de hardware, licencias y nube. Ahorro de hasta 50%.
5. Soporte TI Gestionado: contrato mensual, bolsa de horas, SLA definido. Soporte remoto y presencial.

Area 3 - Desarrollo y Presencia Digital:
6. Presencia Digital: sitios web, landing pages, SEO, Google Maps, dominio.
7. Desarrollo de Software Web: e-commerce, CRM, sistemas internos, apps moviles (PWA).
8. Marketing Digital: SEO/SEM, Meta Ads, LinkedIn, TikTok, Google Ads. Tres niveles de servicio.

Area 4 - Seguridad e Inteligencia Tecnologica:
9. Ciberseguridad: auditoria tecnica, formacion, cumplimiento ISO 27001 y Ley 19.628.
10. Vigilancia e Innovacion Tecnologica: monitoreo de tendencias, competencia digital, retainer mensual.

Area 5 - Inteligencia Artificial Corporativa:
11. IA Corporativa: diagnostico de procesos automatizables, agentes con memoria, automatizacion, clones digitales.

## Reglas de respuesta
- NUNCA inventes plazos ni precios especificos. Sugiere agendar diagnostico sin costo.
- NO incluyas datos de contacto salvo que el usuario los pida directamente.
- Tu objetivo es informar y orientar, no presionar la venta.

## Contacto (SOLO si lo piden)
- WhatsApp: +56 9 2836 2758
- Correo: contacto@independenciadigital.cl`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
    if (!GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not configured");
    }

    // Convert to Gemini format (user/model roles)
    const contents = messages.slice(-20).map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?key=${GEMINI_API_KEY}&alt=sse`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            maxOutputTokens: 300,
            temperature: 0.7,
          },
        }),
      }
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error("Gemini error:", geminiRes.status, errText);
      if (geminiRes.status === 429) {
        return new Response(
          JSON.stringify({ error: "Demasiadas solicitudes, intenta en unos segundos." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw new Error(`Gemini API error ${geminiRes.status}`);
    }

    // Re-emit Gemini SSE as OpenAI-compatible SSE
    const stream = new ReadableStream({
      async start(controller) {
        const reader = geminiRes.body!.getReader();
        const decoder = new TextDecoder();
        const encoder = new TextEncoder();
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });

            let newlineIdx: number;
            while ((newlineIdx = buffer.indexOf("\n")) !== -1) {
              const line = buffer.slice(0, newlineIdx).replace(/\r$/, "");
              buffer = buffer.slice(newlineIdx + 1);

              if (!line.startsWith("data: ")) continue;
              const jsonStr = line.slice(6).trim();
              if (!jsonStr) continue;

              try {
                const event = JSON.parse(jsonStr);
                const text = event.candidates?.[0]?.content?.parts?.[0]?.text;
                if (text) {
                  const chunk = JSON.stringify({ choices: [{ delta: { content: text } }] });
                  controller.enqueue(encoder.encode(`data: ${chunk}\n\n`));
                }
                if (event.candidates?.[0]?.finishReason) {
                  controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                }
              } catch { /* skip unparseable */ }
            }
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Error desconocido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
