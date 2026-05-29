# Backend del proyecto — Lovable Cloud (para Claude Code)

> Documento para que **Claude Code** (u otra IA / dev) entienda cómo está
> montado el backend de este proyecto y pueda crear nuevas features
> (chatbots, endpoints, datos) sin romper nada ni pedir credenciales al usuario.

---

## ⚡ Regla #1 — Dónde viven las instrucciones de un chatbot

**Las instrucciones de cada chatbot (personalidad, tono, info de la empresa,
reglas de comportamiento, CTAs) viven SIEMPRE en una sola constante
`SYSTEM_PROMPT` dentro de su edge function**, nunca en el frontend, nunca
en la base de datos, nunca en un archivo de config aparte.

Ejemplo del chatbot público actual (Marbot IArzo):
```
supabase/functions/chat/index.ts  →  const SYSTEM_PROMPT = `...`
```

**Cómo cambiar el comportamiento del bot** (por ejemplo: "que no repita el
WhatsApp en cada respuesta", "que sume un servicio nuevo", "que cambie el
tono"):

1. Abrir el `index.ts` de la edge function correspondiente.
2. Editar el texto del `SYSTEM_PROMPT` directamente.
3. Redesplegar la función.

**Caso real ya documentado**: el usuario pidió que el bot dejara de cerrar
todas las respuestas con `"Si prefieres una atención directa, escríbenos al
WhatsApp..."`. La solución NO fue tocar el frontend ni filtrar la respuesta
— fue agregar reglas explícitas al `SYSTEM_PROMPT`:

```
# Reglas sobre el CTA de WhatsApp (IMPORTANTE)
- NO cierres cada respuesta invitando al WhatsApp. No lo repitas en cada mensaje.
- Menciona el WhatsApp solo cuando aplique de verdad:
  - El usuario pide hablar con alguien, contactarse, agendar.
  - El usuario pregunta por precios, plazos o cotizaciones.
  - El usuario muestra intención clara de avanzar.
- En preguntas informativas, responde y termina sin CTA.
- Si ya ofreciste el WhatsApp antes en la conversación, no lo repitas.
```

Si el usuario reporta que el bot "sigue diciendo X" o "no quiere decir Y",
**siempre** la solución es editar el `SYSTEM_PROMPT`, no parchear código.

Si después de endurecer las reglas el modelo sigue ignorándolas, recién ahí
considerar cambiar de modelo (ej. de `google/gemini-3-flash-preview` a
`openai/gpt-5-mini`, que sigue instrucciones de forma más estricta).

---

## ⚡ Regla #2 — Checklist algorítmica para crear un chatbot nuevo (no te saltes ningún paso)

> **Error real ya cometido**: se creó la edge function `diagnostico` con su propio
> `SYSTEM_PROMPT`, pero el frontend (`src/pages/Diagnostico.tsx`) seguía
> apuntando a `/functions/v1/chat`. Resultado: la página nueva mostraba al
> bot viejo. **Causa raíz**: faltó el paso 4 (cambiar la URL en el frontend).
> Para que esto no vuelva a pasar, sigue **literalmente** estos pasos en orden:

### Pasos (no saltarse ninguno)

```
PASO 1 — Elegir un nombre único para el bot
   • Ejemplo: "diagnostico", "clientes-chat", "soporte"
   • Debe ser kebab-case, sin espacios, sin acentos.
   • Este nombre se va a repetir en 3 lugares (recuérdalo).

PASO 2 — Crear la edge function
   • Crear archivo: supabase/functions/<NOMBRE>/index.ts
   • Copiar el esqueleto de §4.1 de este documento.
   • Editar SOLO la constante SYSTEM_PROMPT (la personalidad del bot).
   • NO tocar nada más del esqueleto.

PASO 3 — Crear el componente o página del frontend
   • Si es una página completa: src/pages/<Nombre>.tsx
   • Si es un widget flotante: src/components/<Nombre>.tsx
   • Copiar la lógica de fetch + parser SSE de src/components/ChatBot.tsx
     o de src/pages/Diagnostico.tsx (ambos sirven de referencia).

PASO 4 — ⚠️ CONECTAR EL FRONTEND CON LA EDGE FUNCTION ⚠️
   • Dentro del componente/página del PASO 3, ubicar la línea:
        const CHAT_URL = `${SUPA_URL}/functions/v1/XXX`;
   • Reemplazar XXX por el NOMBRE EXACTO del PASO 1.
   • Si no haces esto, el frontend va a hablar con el bot equivocado.
   • Este es EL paso que más se olvida. Verifícalo dos veces.

PASO 5 — Montar la página/componente en el router o en App.tsx
   • Si es página: agregar <Route path="/<ruta>" element={<Nombre />} />
     en src/App.tsx.
   • Si es widget global: agregar <Nombre /> dentro de <BrowserRouter>
     en src/App.tsx.

PASO 6 — Verificar end-to-end (obligatorio)
   • Abrir la ruta en el preview.
   • Mandar un mensaje cualquiera al bot.
   • Confirmar que la respuesta refleja el SYSTEM_PROMPT NUEVO
     (no el del bot viejo).
   • Si responde con la personalidad equivocada → volver al PASO 4.
   • Si da error de red → revisar logs con
     supabase--edge_function_logs { function_name: "<NOMBRE>" }.

PASO 7 — (Opcional) Persistencia
   • Solo si el bot necesita guardar datos: crear tabla con migración,
     GRANTs y RLS según §5.
   • Solo si es para staff/admin: implementar auth + user_roles (§5.3).
```

### Verificación rápida — "¿Conecté bien?"

Buscar en el frontend del bot la línea con `/functions/v1/`. El nombre
después de esa barra **TIENE QUE COINCIDIR EXACTAMENTE** con el nombre
de la carpeta dentro de `supabase/functions/`.

```bash
# Pista mental:
supabase/functions/<NOMBRE>/index.ts   ←→   /functions/v1/<NOMBRE>
                  ^^^^^^^^                                ^^^^^^^^
                  ESTOS DOS NOMBRES SON LA MISMA PALABRA
```

Si no coinciden, el bot **nunca** va a usar tu SYSTEM_PROMPT nuevo.

---



## 1. ¿Qué backend usa este proyecto?


Este proyecto **NO** está conectado a una cuenta personal de Supabase del
usuario (Marcos / `@github`). Usa **Lovable Cloud**, que es el backend
integrado de Lovable.

- Por debajo, Lovable Cloud usa la infraestructura de **Supabase**
  (Postgres + Auth + Edge Functions + Storage), pero el proyecto y la
  facturación viven dentro del workspace de Lovable del usuario.
- El usuario **no** tiene que crear cuenta en supabase.com, ni conectar GitHub,
  ni administrar nada en el dashboard de Supabase.
- Toda la administración (DB, edge functions, secrets) se hace desde
  Lovable (panel **Connectors → Lovable Cloud**) o desde el agente de Lovable.

### Datos del proyecto (referencia)
- **Supabase project ref**: `rixyvhofpietdsomjbwj`
- **URL**: `https://rixyvhofpietdsomjbwj.supabase.co`
- **Anon / publishable key** (segura para frontend, expuesta vía RLS):
  ver `src/integrations/supabase/client.ts` o `.env` (variable
  `VITE_SUPABASE_PUBLISHABLE_KEY`).
- **Dominio público**: `https://www.independenciadigital.cl` (Cloudflare Pages).

### Hablando con el usuario
- Nunca lo llames "Supabase" frente al usuario final. Usa **"backend"**,
  **"base de datos"**, **"Lovable Cloud"**.
- Nunca le pidas API keys de Supabase — no las necesita.
- Si pregunta por "su cuenta de Supabase", explícale que esto es
  Lovable Cloud, gestionado dentro de Lovable.

---

## 2. Archivos que NUNCA se editan a mano

Estos los autogenera Lovable; si los tocas, rompes la build:

- `src/integrations/supabase/client.ts` — cliente Supabase
- `src/integrations/supabase/types.ts` — tipos generados desde el schema
- `.env` — variables `VITE_SUPABASE_*` (no está en GitHub; lo regenera Lovable)
- `supabase/config.toml` — solo contiene `project_id`. Solo añade bloques
  `[functions.<name>]` si una función necesita config no-default.

---

## 3. Secretos disponibles en edge functions

Estos están **siempre** disponibles vía `Deno.env.get(...)` dentro de
cualquier edge function. No hay que pedirlos al usuario:

| Secreto | Para qué sirve |
|---|---|
| `LOVABLE_API_KEY` | **Auth contra el AI Gateway de Lovable** (chat, embeddings, imágenes). Gestionado por Lovable, nunca expirado por el usuario. |
| `SUPABASE_URL` | URL del proyecto |
| `SUPABASE_ANON_KEY` | Anon key (para crear cliente Supabase con RLS aplicado) |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role (bypass RLS) — usar con cuidado |
| `SUPABASE_PUBLISHABLE_KEY` | Equivalente moderno de la anon key |
| `GOOGLE_SEARCH_CONSOLE_API_KEY` | (connector) — no relevante para chatbots |

Si necesitas un secreto nuevo (p. ej. un API key de terceros), debes
pedírselo al usuario explícitamente y agregarlo con la herramienta de
secrets de Lovable.

---

## 4. Cómo crear un **chatbot nuevo** (receta)

Ejemplo: el usuario pide un segundo chatbot **"para gestionar clientes"**,
en una vista específica (por ejemplo `/admin/clientes`), con su propio
system prompt y comportamiento.

### Patrón general
```
Frontend (React component)
       │  POST /functions/v1/<nombre>
       ▼
Edge Function en supabase/functions/<nombre>/index.ts
       │  fetch a Lovable AI Gateway con LOVABLE_API_KEY
       ▼
https://ai.gateway.lovable.dev/v1/chat/completions
(streaming SSE → tokens en vivo)
```

### Pasos

#### 4.1. Crear la edge function

Crear `supabase/functions/<nombre>/index.ts` siguiendo este esqueleto.
**No copies código antiguo de `chat/index.ts` sin revisar** — usa este
patrón como base canónica.

```typescript
// supabase/functions/clientes-chat/index.ts
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const SYSTEM_PROMPT = `Eres el asistente de gestión de clientes de
Independencia Digital. Tu rol es ... [definir aquí el comportamiento
específico de este bot].`;

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
        model: "google/gemini-3-flash-preview",       // default rápido y barato
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Demasiadas consultas, intenta en un momento." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Sin créditos disponibles en Lovable AI." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Reenviar el stream tal cual al cliente
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("clientes-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
```

**Reglas clave de la edge function:**
- Importar CORS desde `npm:@supabase/supabase-js@2/cors`. **No** declares
  `corsHeaders` localmente (es duplicate identifier).
- Incluir `corsHeaders` en **todas** las respuestas, incluidas las de error.
- El `SYSTEM_PROMPT` vive **siempre** en el backend, nunca en el cliente.
- Usar `stream: true` y reenviar `response.body` directamente.
- Manejar 429 (rate limit) y 402 (sin créditos) explícitamente.

#### 4.2. ¿Hace falta tocar `supabase/config.toml`?

**Casi nunca.** Las edge functions de Lovable se despliegan con
`verify_jwt = false` por defecto. Solo agrega un bloque
`[functions.<nombre>]` si necesitas cambiar config específica (raro).

#### 4.3. Despliegue

Lovable auto-despliega las edge functions. Si quieres forzar despliegue
inmediato desde el agente: usar la herramienta de deploy de edge functions
con `function_names: ["<nombre>"]`.

#### 4.4. Frontend: componente del chat

Crear el componente en `src/components/<NombreChat>.tsx` siguiendo
el patrón de `src/components/ChatBot.tsx`. Lo crítico:

```typescript
// 1. URL del endpoint con fallback HARDCODEADO
//    (necesario porque Cloudflare Pages no tiene el .env al build)
const SUPA_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://rixyvhofpietdsomjbwj.supabase.co";

const AUTH =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOi..."; // anon key — pública, no es secreto

const CHAT_URL = `${SUPA_URL}/functions/v1/clientes-chat`;

// 2. POST con streaming SSE
const resp = await fetch(CHAT_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${AUTH}`,
  },
  body: JSON.stringify({ messages: nextHistory }),
});

// 3. Leer body como ReadableStream + TextDecoder
//    Parsear línea por línea las líneas que empiezan con "data: "
//    JSON.parse cada chunk, extraer choices[0].delta.content
//    Actualizar el último mensaje "assistant" progresivamente
//    Manejar "[DONE]" y errores parciales de JSON re-buffereando la línea
```

Ver `src/components/ChatBot.tsx` (`sendMessage`) como **referencia
completa** del parser SSE — copiarlo y adaptar URL + UI.

**Reglas clave del frontend:**
- ❌ **Nunca** llamar al AI Gateway directamente desde el cliente.
- ❌ **Nunca** poner el `SYSTEM_PROMPT` en el cliente.
- ❌ **Nunca** hardcodear texto de respuesta del bot (solo UI/fallbacks de error).
- ✅ Mandar **toda** la historia de mensajes en cada request (el modelo no
  tiene memoria entre llamadas).
- ✅ Renderizar el contenido con markdown (negritas, listas) — el modelo
  formatea con `**...**`. Ver `SimpleMarkdown` en `ChatBot.tsx`.
- ✅ Mostrar toast / mensaje claro en errores 429 y 402.

#### 4.5. Montar el componente en la vista

Para un chat global (como Marbot IArzo): se monta en `src/App.tsx`.
Para un chat específico de una vista (ej. `/admin/clientes`): importarlo
solo dentro de esa page.

```tsx
// src/pages/AdminClientes.tsx
import ClientesChat from "@/components/ClientesChat";

export default function AdminClientes() {
  return (
    <div>
      {/* ...vista de clientes... */}
      <ClientesChat />
    </div>
  );
}
```

---

## 5. Cómo crear **tablas nuevas** (si el bot necesita persistencia)

Si el nuevo chatbot debe guardar conversaciones, clientes, etc., usa la
herramienta de migración de Supabase de Lovable. Reglas:

1. Toda `CREATE TABLE public.<x>` debe ir acompañada en la **misma migración** de:
   ```sql
   -- Solo si los anon (no logueados) pueden leerlas:
   -- GRANT SELECT ON public.<x> TO anon;
   GRANT SELECT, INSERT, UPDATE, DELETE ON public.<x> TO authenticated;
   GRANT ALL ON public.<x> TO service_role;

   ALTER TABLE public.<x> ENABLE ROW LEVEL SECURITY;
   CREATE POLICY "..." ON public.<x> FOR SELECT USING (...);
   ```
2. **Sin GRANTs → PostgREST devuelve 403** aunque las policies estén bien.
3. **Roles de usuario** (admin/staff/etc): tabla separada `user_roles` con
   security-definer function `has_role(uid, role)`. **Nunca** guardar roles
   en `profiles`. Ver instrucciones del agente para el patrón completo.
4. **Authentication**: si el chatbot es solo para admin/staff, hay que
   implementar login (Supabase Auth) primero. No uses anonymous sign-ups.

---

## 6. Modelos disponibles en el AI Gateway

Default actual: `google/gemini-3-flash-preview` (rápido, barato, multimodal).

Otras opciones útiles vía el mismo `LOVABLE_API_KEY`:

| Modelo | Cuándo usar |
|---|---|
| `google/gemini-3-flash-preview` | Default, chat conversacional |
| `google/gemini-3.5-flash` | Tareas un poco más exigentes |
| `google/gemini-2.5-pro` | Reasoning fuerte, contexto largo, multimodal |
| `openai/gpt-5-mini` | Alternativa OpenAI balanceada |
| `openai/gpt-5` | Reasoning top, más caro y lento |
| `google/gemini-2.5-flash-image` | Generación de imágenes (otro endpoint `/v1/images/generations`) |

Solo cambias el campo `model` en el body de la edge function.

---

## 7. Debug / troubleshooting

| Síntoma | Causa probable | Fix |
|---|---|---|
| "No está funcionando el chat" en producción | Cloudflare Pages no tiene `VITE_*` env vars en build | Asegurar fallbacks hardcodeados en el componente (URL + anon key) |
| 401 / 403 desde edge function | Falta `Authorization: Bearer <anon>` en el fetch del cliente | Agregar header |
| 429 | Rate limit del workspace | Esperar / mostrar toast / pedir al usuario subir a plan pago |
| 402 | Sin créditos en Lovable AI | El usuario debe ir a Settings → Workspace → Usage y agregar créditos |
| `LOVABLE_API_KEY is not configured` en logs | Secreto borrado | Recrearlo con la herramienta de Lovable |
| Bot responde "Disculpa, tuve un problema..." | El frontend hizo throw en el fetch — revisar Network tab y logs de la edge function |
| Modelo no existe (error 400 del gateway) | Nombre de modelo inválido o deprecado | Usar uno de la tabla §6 |

Herramientas de debug útiles (desde el agente de Lovable):
- **Logs de edge function**: `supabase--edge_function_logs { function_name: "<nombre>" }`
- **Curl directo a la edge function**: `supabase--curl_edge_functions`
- **Logs analíticos**: `supabase--analytics_query` con tabla `function_edge_logs`
- **Network tab del navegador**: confirmar que el fetch sale a la URL correcta

---

## 8. Resumen ultra-corto para Claude Code

> Necesito un chatbot nuevo en `/ruta-x`:
>
> 1. Crear `supabase/functions/<nombre>/index.ts` copiando el patrón de §4.1
>    y ajustando `SYSTEM_PROMPT`.
> 2. Crear `src/components/<NombreChat>.tsx` copiando la lógica de
>    `sendMessage` + parser SSE de `src/components/ChatBot.tsx`,
>    cambiando `CHAT_URL` a `/functions/v1/<nombre>`.
> 3. Montar el componente en la página correspondiente.
> 4. Si necesita persistencia → tabla nueva con GRANTs + RLS (§5).
> 5. Si necesita ser solo-admin → implementar auth + tabla `user_roles` antes.
> 6. **Nunca** pedirle al usuario API keys de Supabase ni de Gemini/OpenAI:
>    todo va por `LOVABLE_API_KEY` que ya existe.

---

## 9. Archivos relacionados

```
docs/
  CHATBOT.md           ← doc específica del Marbot IArzo actual
  BACKEND.md           ← este archivo (overview backend + cómo crear más bots)
supabase/
  config.toml          ← solo project_id, no tocar más
  functions/
    chat/index.ts      ← Marbot IArzo (chatbot público del sitio)
    <nuevo>/index.ts   ← futuros bots van acá
src/
  components/
    ChatBot.tsx        ← Marbot IArzo (UI + SSE parser de referencia)
  integrations/supabase/
    client.ts          ← auto-generado, no tocar
    types.ts           ← auto-generado, no tocar
```
