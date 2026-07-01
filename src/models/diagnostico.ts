import type { ChatMessage } from "./chatMessage";

export type { ChatMessage };

const SUPA_URL =
  import.meta.env.VITE_SUPABASE_URL || "https://rixyvhofpietdsomjbwj.supabase.co";
const CHAT_URL = `${SUPA_URL}/functions/v1/diagnostico`;

export const LOADING_STEPS = [
  "Estableciendo conexión segura…",
  "Autenticando sesión privada…",
  "Cargando perfil de Marcos Oyarzo…",
  "Sincronizando módulo de diagnóstico TI…",
  "Listo. Iniciando conversación…",
];

export const GREETING =
  "¡Hola! Soy **Marcos Oyarzo**, fundador de Independencia Digital. Bienvenido a tu sesión de diagnóstico gratuita. Cuéntame, ¿en qué etapa está tu negocio y qué te tiene preocupado o frenado a nivel tecnológico?";

// Tiempo que "tarda" Marcos en escribir, simulando una persona real en chat.
// Velocidad ~40 WPM (≈200 caracteres/min ≈ 30ms por carácter) + pausa inicial
// de lectura/pensamiento. Capado entre 1.2s y 9s para no aburrir.
export const typingDuration = (text: string) => {
  const base = 900; // leer la pregunta y pensar
  const perChar = 32; // ~38 WPM
  const jitter = Math.random() * 500;
  return Math.min(9000, Math.max(1200, base + text.length * perChar + jitter));
};

export const fetchDiagnosticoReply = async (history: ChatMessage[]): Promise<string> => {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: history }),
  });

  if (!resp.ok || !resp.body) throw new Error(`HTTP ${resp.status}`);

  // Acumulamos la respuesta completa primero (sin mostrarla) para luego
  // tipearla con efecto humano.
  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let assistantText = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let nl: number;
    while ((nl = buffer.indexOf("\n")) !== -1) {
      let line = buffer.slice(0, nl);
      buffer = buffer.slice(nl + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (!line || line.startsWith(":")) continue;
      if (!line.startsWith("data: ")) continue;
      const jsonStr = line.slice(6).trim();
      if (jsonStr === "[DONE]") break;
      try {
        const parsed = JSON.parse(jsonStr);
        const delta = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (delta) assistantText += delta;
      } catch { /* skip */ }
    }
  }

  return assistantText;
};
