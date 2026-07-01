import type { ChatMessage } from "./chatMessage";

export type { ChatMessage };

// ── Audio pop ────────────────────────────────────────────────────────────────

const buildPopWavDataUri = (): string => {
  const sampleRate = 44100;
  const duration = 0.22;
  const total = Math.floor(sampleRate * duration);
  const buffer = new ArrayBuffer(44 + total * 2);
  const view = new DataView(buffer);
  const writeStr = (off: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i));
  };
  writeStr(0, "RIFF"); view.setUint32(4, 36 + total * 2, true);
  writeStr(8, "WAVE"); writeStr(12, "fmt ");
  view.setUint32(16, 16, true); view.setUint16(20, 1, true);
  view.setUint16(22, 1, true); view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true); view.setUint16(32, 2, true);
  view.setUint16(34, 16, true); writeStr(36, "data");
  view.setUint32(40, total * 2, true);
  for (let i = 0; i < total; i++) {
    const t = i / sampleRate;
    const freq = 500 + (1100 - 500) * (t / duration);
    const env = Math.exp(-t * 14);
    const sample = env * (0.6 * Math.sin(2 * Math.PI * freq * t) + 0.3 * Math.sin(2 * Math.PI * (freq * 0.5) * t));
    view.setInt16(44 + i * 2, Math.max(-1, Math.min(1, sample)) * 0x7fff, true);
  }
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return "data:audio/wav;base64," + btoa(binary);
};

let popDataUri: string | null = null;
let popAudioPool: HTMLAudioElement[] = [];
let poolIdx = 0;
let primed = false;

const getPopUri = () => { if (!popDataUri) popDataUri = buildPopWavDataUri(); return popDataUri; };

export const unlockChatAudio = () => {
  if (primed) return;
  const uri = getPopUri();
  popAudioPool = Array.from({ length: 3 }, () => {
    const a = new Audio(uri); a.volume = 0.9; a.preload = "auto"; a.muted = true;
    a.play().then(() => { a.pause(); a.currentTime = 0; a.muted = false; }).catch(() => { a.muted = false; });
    return a;
  });
  primed = true;
};

export const playChatPopSound = () => {
  try {
    if (!primed) unlockChatAudio();
    const audio = popAudioPool[poolIdx % popAudioPool.length] ?? new Audio(getPopUri());
    poolIdx++; audio.currentTime = 0; audio.volume = 0.9;
    const p = audio.play();
    if (p && typeof p.catch === "function") p.catch(() => { });
  } catch { /* audio no disponible en este navegador */ }
};

// ── Preguntas sugeridas ───────────────────────────────────────────────────────

export const SUGGESTED_QUESTIONS = [
  "¿Qué es Independencia Digital?",
  "¿Cómo funciona el diagnóstico inicial?",
  "¿En qué áreas de servicio trabajan?",
  "¿Hacen sitios web y software a medida?",
  "¿Qué incluye Arquitectura TI?",
  "¿Trabajan con PyMEs y sector público?",
  "¿Qué es la IA Corporativa?",
  "¿Cómo agendo un diagnóstico gratis?",
];

export const pickRandom = <T,>(arr: T[], n: number): T[] => {
  const copy = [...arr]; const out: T[] = [];
  while (out.length < n && copy.length) out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  return out;
};

// ── API del chat ──────────────────────────────────────────────────────────────

const SUPA_URL =
  import.meta.env.VITE_SUPABASE_URL || "https://rixyvhofpietdsomjbwj.supabase.co";
// Fallback hardcodeado: en Cloudflare Pages el .env no existe y las VITE_*
// quedan undefined. La anon key es publishable (segura en cliente).
const SUPA_ANON_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpeHl2aG9mcGlldGRzb21qYndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNjI3OTEsImV4cCI6MjA5MDgzODc5MX0.4g-ythW7dMO3wlyZPBPwSHvCDmgLqeXpzBbfn1IZJ98";
const CHAT_URL = `${SUPA_URL}/functions/v1/chat`;

export const streamChatResponse = async (
  history: ChatMessage[],
  onDelta: (fullTextSoFar: string) => void,
): Promise<string> => {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${SUPA_ANON_KEY}` },
    body: JSON.stringify({ messages: history }),
  });

  if (!resp.ok || !resp.body) throw new Error(`HTTP ${resp.status}`);

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let assistantText = "";
  let streamDone = false;

  while (!streamDone) {
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
      if (jsonStr === "[DONE]") { streamDone = true; break; }
      try {
        const parsed = JSON.parse(jsonStr);
        const delta = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (delta) {
          assistantText += delta;
          onDelta(assistantText);
        }
      } catch {
        buffer = line + "\n" + buffer;
        break;
      }
    }
  }

  if (!assistantText) throw new Error("Empty response");
  return assistantText;
};
