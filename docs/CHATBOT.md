# Chatbot "Marbot IArzo" — Documentación técnica

Documentación para que cualquier agente (Lovable, Claude Code, humano) pueda
retomar o modificar el chatbot sin romperlo.

---

## 1. Arquitectura

```
Cliente (React)                Edge Function (Deno)          Lovable AI Gateway
src/components/ChatBot.tsx  →  supabase/functions/chat   →   ai.gateway.lovable.dev
       (fetch SSE)              (proxy + system prompt)       (Google Gemini)
```

- **Frontend**: `src/components/ChatBot.tsx`
- **Backend (edge function)**: `supabase/functions/chat/index.ts`
- **Proveedor IA**: Lovable AI Gateway (OpenAI-compatible).
- **Modelo actual**: `google/gemini-3-flash-preview`.
- **Streaming**: SSE línea por línea.

El chatbot se monta globalmente en `src/App.tsx` (`<ChatBot />`) y aparece en
todas las páginas. Tiene auto-apertura a los 10s después de que el
`WelcomeModal` se cierra (evento `welcome-modal-closed`).

---

## 2. Variables de entorno

### Locales (`.env`, auto-generadas, NO editar)
```
VITE_SUPABASE_URL=https://rixyvhofpietdsomjbwj.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOi... (anon key, pública)
VITE_SUPABASE_PROJECT_ID=rixyvhofpietdsomjbwj
```

### En la edge function (Supabase Secrets, ya configurado)
- `LOVABLE_API_KEY` — gestionado por Lovable Cloud, da acceso al AI Gateway.
  **Nunca pedirlo al usuario, nunca rotarlo manualmente** (usar
  `lovable_api_key--rotate_lovable_api_key` si fuera necesario).

### ⚠️ Cloudflare Pages — el problema que rompió el chatbot

`.env` **está en `.gitignore`**, por lo tanto **NO se sube al repo**. Cloudflare
Pages clona desde GitHub, así que durante el build las `VITE_*` quedan
`undefined` y `import.meta.env.VITE_SUPABASE_URL` cae al placeholder definido
en `src/integrations/supabase/client.ts` (`https://placeholder.supabase.co`).

**Resultado**: el chat hace fetch contra `placeholder.supabase.co` → falla
siempre → caía al fallback local.

### Solución aplicada (en `src/components/ChatBot.tsx`)

Hardcodear la URL y la anon key como fallbacks dentro del componente.
**Son públicas y seguras** (la anon key es publishable y va protegida por RLS).

```ts
const SUPA_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://rixyvhofpietdsomjbwj.supabase.co";
const AUTH =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOi..."; // anon key — pública
const CHAT_URL = `${SUPA_URL}/functions/v1/chat`;
```

### Alternativa recomendada (más limpia)

En el panel de Cloudflare Pages → Settings → Environment Variables, agregar
para **Production** y **Preview**:

- `VITE_SUPABASE_URL` = `https://rixyvhofpietdsomjbwj.supabase.co`
- `VITE_SUPABASE_PUBLISHABLE_KEY` = (anon key actual)
- `VITE_SUPABASE_PROJECT_ID` = `rixyvhofpietdsomjbwj`

Una vez hecho eso, se pueden eliminar los fallbacks hardcodeados.

---

## 3. Edge function (`supabase/functions/chat/index.ts`)

Responsabilidades:
1. Recibe `{ messages: [{ role, content }, ...] }` por POST.
2. Antepone el `SYSTEM_PROMPT` (identidad, segmentos, portafolio, reglas).
3. Llama a `https://ai.gateway.lovable.dev/v1/chat/completions` con
   `stream: true` usando `LOVABLE_API_KEY`.
4. Devuelve `response.body` tal cual como `text/event-stream`.

Errores manejados:
- `429` → "Demasiadas consultas, intenta en un momento."
- `402` → "Sin créditos disponibles en Lovable AI." (cargar créditos en
  Settings → Workspace → Usage).
- `500` → "AI gateway error" + log al server.

CORS viene de `npm:@supabase/supabase-js@2/cors`. **No declarar `corsHeaders`
local** (duplicate identifier).

### Cómo modificar el system prompt

Editar la constante `SYSTEM_PROMPT` al inicio de `supabase/functions/chat/index.ts`.
**Nunca poner el prompt en el cliente.** Después:

```
supabase--deploy_edge_functions { function_names: ["chat"] }
```

### Cómo cambiar de modelo

Cambiar el campo `model` en el body. Modelos chat disponibles vía Lovable AI Gateway:
- `google/gemini-3-flash-preview` ← actual, rápido y barato
- `google/gemini-2.5-flash`, `google/gemini-2.5-pro`
- `google/gemini-3.5-flash`, `google/gemini-3.1-pro-preview`
- `openai/gpt-5`, `openai/gpt-5-mini`, `openai/gpt-5-nano`
- `openai/gpt-5.4`, `openai/gpt-5.5`

### Testear el edge function

Desde Lovable:
```
supabase--curl_edge_functions
  method: POST
  path: /chat
  body: {"messages":[{"role":"user","content":"hola"}]}
```

Debe devolver `200` con SSE `data: {...}` chunks y un `data: [DONE]` final.

---

## 4. Frontend (`src/components/ChatBot.tsx`)

### Flujo de `sendMessage(text)`

1. Inserta el mensaje user al historial.
2. POST a `${SUPA_URL}/functions/v1/chat` con `Authorization: Bearer <anon>`.
3. Lee `resp.body` con `ReadableStream` + `TextDecoder`.
4. Parsea SSE línea por línea (`data: {...}`). Para cada `delta.content`
   acumula en `assistantText` y reemplaza el contenido del último mensaje
   assistant (no agrega uno nuevo por token).
5. Si el stream falla → muestra un mensaje fijo dirigiendo al WhatsApp.

### Bloques importantes

- **Audio "pop"** (líneas ~17-74): WAV generado in-memory, pool de 3 instancias
  para que suene en cada apertura/notificación. Requiere gesture-unlock previo.
- **SimpleMarkdown** (~78-99): renderiza `**bold**` y saltos de línea. No usa
  `react-markdown` para mantener bundle ligero.
- **Auto-apertura** (~207-238): a los 10s después de cerrar el `WelcomeModal`
  (o de cargar si ya se vio). Se marca en `sessionStorage` para no repetirse.
- **Teclado virtual mobile** (~143-196): usa `visualViewport` para empujar el
  chat sobre el teclado. Fallback al 45% del alto para navegadores in-app
  (Instagram, Facebook, TikTok) donde `visualViewport` no dispara `resize`.

### Reglas de oro al editar

- ❌ **No mover el system prompt al cliente.** Va en la edge function.
- ❌ **No llamar al AI Gateway directo desde el cliente.** Siempre por la edge.
- ❌ **No hardcodear texto largo de respuestas** (lo da la IA).
- ✅ **Sí editar UI, animaciones, sugerencias, colores, tipografía.**
- ✅ Las `SUGGESTED_QUESTIONS` (líneas ~103-112) son chips iniciales — editables.

---

## 5. Despliegue

### Lovable (preview + `lovable.app`)
Auto: cada cambio se publica. Las edge functions se redeployan solas.

### Cloudflare Pages (`www.independenciadigital.cl`)
1. Build command: `bun install --frozen-lockfile && bun run build`
2. Output: `dist`
3. **Asegurarse de tener las `VITE_*` en Environment Variables**
   (o confiar en los fallbacks hardcodeados del paso 2).
4. Las edge functions **NO viven en Cloudflare**, viven en Supabase
   (`https://rixyvhofpietdsomjbwj.supabase.co/functions/v1/chat`). Cloudflare
   solo sirve los estáticos del frontend.

---

## 6. Checklist de troubleshooting

| Síntoma | Causa probable | Cómo verificar |
|---|---|---|
| Chat siempre muestra "Disculpa, tuve un problema…" | Edge function 5xx o URL incorrecta | `supabase--curl_edge_functions` |
| "Sin créditos disponibles" | 402 en Lovable AI | Settings → Workspace → Usage |
| "Demasiadas consultas" | 429 rate limit | Esperar 1-2 min |
| Funciona en preview pero no en Cloudflare | Falta env vars en CF Pages | Network tab: ¿la URL apunta a `placeholder.supabase.co`? |
| `LOVABLE_API_KEY is not configured` | Secreto borrado | `lovable_api_key--create` |
| Modelo no encontrado / 400 | Modelo deprecado | Cambiar a uno de la lista en sección 3 |

---

## 7. Archivos clave (mapa rápido)

```
src/components/ChatBot.tsx          ← UI, streaming, teclado mobile, auto-open
src/components/WelcomeModal.tsx     ← Modal de bienvenida (dispara auto-open)
src/App.tsx                         ← Monta <ChatBot /> global
src/integrations/supabase/client.ts ← Cliente Supabase (NO EDITAR)
supabase/functions/chat/index.ts    ← Edge function + SYSTEM_PROMPT
supabase/config.toml                ← project_id (NO EDITAR project-level)
.env                                ← Auto-generado (NO EDITAR, NO subir a git)
docs/CHATBOT.md                     ← Este documento
```
