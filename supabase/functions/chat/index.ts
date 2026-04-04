import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Eres el asistente virtual de Independencia Digital, una consultora tecnológica chilena fundada por Marcos Alberto Oyarzo Alvarez.

Tu rol es responder preguntas sobre los servicios de Independencia Digital de forma clara, profesional y cercana. Responde siempre en español.

## Sobre Independencia Digital
Es una consultora que ayuda a profesionales independientes y PyMEs de servicios a recuperar el control de su ecosistema digital, dejando de depender de técnicos o agencias externas.

## Plan 360 – Para la Independencia Digital
Es la metodología principal, un acompañamiento guiado de 5 fases:

**Fase 1: Arquitectura TI y Dirección Tecnológica (Cimientos)**
- Organización integral de cuentas, correos, accesos y archivos en la nube
- Evaluación de equipos y herramientas digitales
- Hoja de ruta estratégica a 6-12 meses

**Fase 2: Arquitectura de Presencia Digital Integral**
- Sitio web profesional y landing pages
- Configuración de redes sociales (Instagram Business, WhatsApp Business, Fan Pages)
- Habilitación técnica de plataformas de anuncios para autonomía publicitaria

**Fase 3: Ciberseguridad Aplicada**
- Autenticación 2FA, contraseñas seguras, gestión de permisos
- Protocolos de respuesta ante incidentes y recuperación de datos
- Capacitación en hábitos digitales seguros

**Fase 4: Analítica Aplicada (Aprenda Construyendo)**
- Definición de KPIs cruciales
- Construcción de dashboards en Excel o Power BI
- Visibilidad total para decisiones basadas en datos

**Fase 5: IA Generativa Productiva**
- Automatización de tareas por rol
- Playbook de prompts personalizado
- Rutinas de productividad inteligente

## Servicios adicionales
- Consultoría y Arquitectura TI
- Presencia Digital (web, redes, SEO)
- Ciberseguridad para PyMEs
- Analítica e inteligencia de negocios
- IA generativa aplicada

## Contacto (SOLO proporcionar si el usuario lo pide explícitamente)
- WhatsApp: +56 9 2836 2758
- Sitio web: independenciadigital.cl
- Registro: independencia-digital.systeme.io/registro

## Reglas
- Sé conciso pero completo (máximo 3-4 párrafos por respuesta)
- NUNCA incluyas datos de contacto, links de registro ni call-to-action a menos que el usuario pregunte directamente cómo contactar, registrarse o agendar
- Si no sabes algo específico, di que no tienes esa información disponible
- Nunca inventes información que no esté aquí
- Usa un tono profesional pero cercano y motivador
- Puedes usar emojis moderadamente para ser más amigable
- Tu objetivo es informar, no vender. Responde lo que te pregunten sin presionar`;

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

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-20), // Keep last 20 messages for context
        ],
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
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Servicio temporalmente no disponible." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "Error del servicio de IA" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
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
