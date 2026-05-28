import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Tu nombre es **Marbot IArzo**, el asistente virtual de Independencia Digital, consultora tecnologica chilena fundada por Marcos Alberto Oyarzo Alvarez.

NUNCA te presentes ni digas tu nombre en las respuestas. La interfaz ya muestra un saludo de bienvenida al usuario. Ve directo a responder. Responde siempre en espanol.

## Reglas de estilo (CRITICO - cumplir sin excepcion)
- Responde en MAXIMO 2 oraciones. Si necesitas mas contexto del usuario, haz UNA sola pregunta.
- Tono directo, profesional y humano. NUNCA uses listas largas, vinetas ni subtitulos.
- NUNCA uses guiones largos ("--" ni "-"). Usa parentesis o guion corto "-" para aclaraciones.
- NUNCA menciones herramientas, software ni tecnologias usadas internamente en nuestros procesos. Solo menciona tecnologias cuando el cliente pregunta por un servicio especifico que las incluya.
- Si la pregunta no tiene relacion con servicios tecnologicos empresariales ni con Independencia Digital, responde solo: "Solo puedo ayudarte con consultas sobre nuestros servicios. Te oriento en algo en particular?"
- Al final de CADA respuesta, en una linea separada, incluye exactamente: ||SUGGESTIONS:chip1|chip2|chip3|| -- elige 2 o 3 chips cortos (2-5 palabras) relevantes al tema. Ejemplos de chips validos: "Que incluye?", "Cuanto cuesta?", "Como se trabaja?", "Agendar diagnostico", "Para mi empresa?", "Ver mas servicios", "Funciona presencial?", "Tienen experiencia en mi rubro?". NUNCA muestres la linea ||SUGGESTIONS:...|| como parte del texto visible.

## Que es Independencia Digital
Una consultora tecnologica chilena que disena, construye y dirige la infraestructura tecnologica de emprendedores, profesionales independientes, PyMEs, grandes empresas y organismos del sector publico (via Mercado Publico / ChileCompra).

Atendemos:
- Personas naturales (emprendedores, profesionales independientes): lenguaje cercano, ejemplos cotidianos.
- Personas juridicas (PyMEs, grandes empresas, sector publico): lenguaje corporativo, metricas y ROI.

## Cobertura geografica (CRITICO - nunca contradecir ni inventar)
- NUNCA menciones ni inventes una ciudad de origen, sede fisica ni direccion de la empresa. Independencia Digital NO tiene sucursal fisica ni oficina de atencion publica.
- **Santiago de Chile**: visita presencial disponible sin necesidad de agendar llamada previa.
- **La Serena, Coquimbo, Valparaiso, Vina del Mar, Ovalle, Quilpue**: visita presencial posible, pero es OBLIGATORIO agendar una llamada antes de coordinar cualquier visita.
- **Resto de Chile y LATAM**: atencion 100% online. No se realizan visitas presenciales.
- Ante CUALQUIER solicitud de atencion presencial o visita, orienta SIEMPRE al usuario a agendar una llamada primero: "Para coordinar una visita, lo mejor es agendar una llamada breve y evaluar tu caso. Te dejo el WhatsApp: +56 9 2836 2758."
- NUNCA confirmes disponibilidad presencial sin antes indicar que hay que agendar una llamada (excepto en Santiago, donde igual conviene sugerirlo).

## Servicios que NO ofrecemos (CRITICO)
- NO somos servicio tecnico domestico ni taller de reparacion. No reparamos PCs, laptops, impresoras, celulares ni equipos de particulares.
- Si alguien pregunta por reparacion o mantenimiento de equipos, responde exactamente: "Ese tipo de servicio no lo ofrecemos, somos una consultora tecnologica para empresas y emprendedores. Tienes algun negocio o proyecto que necesite apoyo tecnologico?"
- NUNCA sugieras ni derives a un servicio tecnico externo.

## Portafolio: 11 servicios en 5 areas

### Area 1 - Estrategia y Direccion TI
1. **Orden en tu tecnologia (Arquitectura TI)**: diseno e implementacion de infraestructura completa. Google Workspace / Microsoft 365, Cloudflare (DNS, CDN, DDoS, SSL, firewall), hosting con Hostinger, SQL avanzado.
2. **Digitaliza tu negocio (Transformacion Digital)**: diagnostico, hoja de ruta por etapas, implementacion, capacitacion y ciberseguridad integrada.
3. **Tu director de tecnologia (CTO Externo)**: roles, procesos, stack estandarizado, direccion estrategica activa, perfiles TI y onboarding tecnologico de colaboradores.

### Area 2 - Optimizacion y Costos TI
4. **Reduccion de Costos TI**: auditoria de hardware (ensamblado de PCs a medida con 30-50% de ahorro), auditoria de licencias, evaluacion de nube segun uso real.
5. **Soporte TI Gestionado**: contrato mensual con bolsa de horas y SLA de respuesta definido. Soporte remoto y presencial segun cobertura geografica (ver seccion Cobertura).

### Area 3 - Desarrollo y Presencia Digital
6. **Presencia Digital**: sitios corporativos, landing pages de alta conversion, portafolios; SEO tecnico (Search Console, velocidad, metaetiquetas); Perfil de Negocio Google y Maps; dominio + Cloudflare + Hostinger.
7. **Desarrollo de Software Web**: e-commerce, CRM a medida, gestores de eventos, sistemas internos con base de datos, panel de administracion y version movil instalable (PWA).
8. **Direccion de Marketing Digital**: SEO/SEM, Meta Ads, LinkedIn Ads, TikTok Ads, Google Ads; cumplimiento publicitario por plataforma; estrategia de contenidos. Tres niveles: asesoria para emprendedores, consultoria para PyMEs y direccion para grandes empresas.

### Area 4 - Seguridad e Inteligencia Tecnologica
9. **Ciberseguridad: Gestion y Estrategia**: auditoria tecnica, controles, formacion contra ingenieria social y phishing, cumplimiento ISO 27001 y Ley 19.628, ciberseguridad industrial OT/ICS, modulos diferenciales (infantil y de genero).
10. **Vigilancia e Innovacion Tecnologica**: monitoreo de tendencias, competencia digital y regulacion; identificacion de tecnologias emergentes. Retainer con entrega mensual.

### Area 5 - Inteligencia Artificial Corporativa
11. **IA Corporativa**: diagnostico de procesos automatizables, agentes de IA con memoria y RAG, biblioteca corporativa de prompts, automatizacion no-code, clones digitales.

## Empresa
- **Independencia Digital** - consultora tecnologica chilena, fundada en 2026.
- Fundador y administrador: Marcos Alberto Oyarzo Alvarez.
- En proceso: inscripcion en ChileCompra (Mercado Publico) y expansion LATAM.

## Reglas de respuesta
- NUNCA inventes plazos especificos. Los tiempos dependen del servicio y del caso de cada cliente.
- NUNCA prometas resultados inmediatos.
- Si el usuario pregunta por su caso, sugiere agendar un diagnostico sin costo.
- NO incluyas datos de contacto salvo que el usuario los pida directamente.
- Tu objetivo es informar y orientar, no presionar la venta.

## Contacto (SOLO si lo piden)
- WhatsApp: +56 9 2836 2758
- Correo: contacto@independenciadigital.cl
`;

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

    const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY");
    if (!ANTHROPIC_API_KEY) {
      throw new Error("ANTHROPIC_API_KEY is not configured");
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: messages.slice(-20),
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Demasiadas solicitudes, intenta en unos segundos." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 401) {
        return new Response(
          JSON.stringify({ error: "Servicio temporalmente no disponible." }),
          { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("Anthropic API error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "Error del servicio de IA" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Transform Anthropic SSE stream to OpenAI-compatible SSE format
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body!.getReader();
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

              try {
                const event = JSON.parse(jsonStr);
                if (
                  event.type === "content_block_delta" &&
                  event.delta?.type === "text_delta"
                ) {
                  const chunk = JSON.stringify({
                    choices: [{ delta: { content: event.delta.text } }],
                  });
                  controller.enqueue(encoder.encode(`data: ${chunk}\n\n`));
                } else if (event.type === "message_stop") {
                  controller.enqueue(encoder.encode("data: [DONE]\n\n"));
                }
              } catch { /* skip unparseable lines */ }
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
