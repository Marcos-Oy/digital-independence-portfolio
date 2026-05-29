import { useState, useRef, useEffect } from "react";
import { X, Send, User, Stethoscope, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const RobotIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="8" width="18" height="12" rx="3" />
    <circle cx="9" cy="14" r="2" />
    <circle cx="15" cy="14" r="2" />
    <path d="M9 18h6" />
    <line x1="12" y1="2" x2="12" y2="8" />
    <circle cx="12" cy="2" r="1" />
  </svg>
);

type Message = { role: "user" | "assistant"; content: string };

// ── Audio pop ─────────────────────────────────────────────────────────────────

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

const unlockAudio = () => {
  if (primed) return;
  const uri = getPopUri();
  popAudioPool = Array.from({ length: 3 }, () => {
    const a = new Audio(uri); a.volume = 0.9; a.preload = "auto"; a.muted = true;
    a.play().then(() => { a.pause(); a.currentTime = 0; a.muted = false; }).catch(() => { a.muted = false; });
    return a;
  });
  primed = true;
};

const playPopSound = () => {
  try {
    if (!primed) unlockAudio();
    const audio = popAudioPool[poolIdx % popAudioPool.length] ?? new Audio(getPopUri());
    poolIdx++; audio.currentTime = 0; audio.volume = 0.9;
    const p = audio.play();
    if (p && typeof p.catch === "function") p.catch(() => { });
  } catch { }
};

// ── SimpleMarkdown ────────────────────────────────────────────────────────────

const SimpleMarkdown = ({ text }: { text: string }) => {
  const lines = text.split("\n");
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        if (!line.trim()) return <br key={i} />;
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="m-0 leading-relaxed">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="font-semibold">{part.slice(2, -2)}</strong>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </p>
        );
      })}
    </div>
  );
};

// ── Suggested questions ───────────────────────────────────────────────────────

const SUGGESTED_QUESTIONS = [
  "¿Qué es Independencia Digital?",
  "¿Cómo funciona el diagnóstico inicial?",
  "¿En qué áreas de servicio trabajan?",
  "¿Hacen sitios web y software a medida?",
  "¿Qué incluye Arquitectura TI?",
  "¿Trabajan con PyMEs y sector público?",
  "¿Qué es la IA Corporativa?",
  "¿Cómo agendo un diagnóstico gratis?",
];

const pickRandom = <T,>(arr: T[], n: number): T[] => {
  const copy = [...arr]; const out: T[] = [];
  while (out.length < n && copy.length) out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  return out;
};

// ── Component ─────────────────────────────────────────────────────────────────

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions] = useState<string[]>(() => pickRandom(SUGGESTED_QUESTIONS, 3));
  const [chips, setChips] = useState<string[]>([]);
  const [kbStyle, setKbStyle] = useState<React.CSSProperties>({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const autoOpenedRef = useRef(false);
  const blurTimer = useRef<number | null>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  // Cuando el chat se cierra, siempre limpiamos el estilo
  useEffect(() => { if (!open) setKbStyle({}); }, [open]);

  // Detecta el teclado virtual con visualViewport y reposiciona el chat
  useEffect(() => {
    if (!open) return;
    if (typeof window === "undefined") return;
    const vv = window.visualViewport;
    if (!vv) return;

    const update = () => {
      if (window.innerWidth >= 768) { setKbStyle({}); return; }
      // Diferencia entre alto de layout y alto visible = alto del teclado
      const keyboard = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
      if (keyboard > 80) {
        // Empujamos el chat hacia arriba justo lo que ocupa el teclado
        setKbStyle({
          bottom: `${keyboard + 16}px`,
          maxHeight: `${vv.height - 24}px`,
        });
      } else {
        setKbStyle({});
      }
    };

    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
    };
  }, [open]);

  const applyKb = () => {
    if (window.innerWidth >= 768) return;

    // Detección de navegadores in-app (Instagram, Facebook, TikTok, LinkedIn)
    const ua = navigator.userAgent || "";
    const isInApp = /Instagram|FBAN|FBAV|FB_IAB|FBIOS|Messenger|Line|MicroMessenger|TikTok|LinkedInApp/i.test(ua);

    // Fallback: si visualViewport no reacciona en 500ms, asumimos teclado abierto
    // y empujamos el chat con un estimado (~42% del alto). Necesario para
    // Instagram in-app browser, donde visualViewport no dispara resize.
    setTimeout(() => {
      const vv = window.visualViewport;
      const kbDetected = vv && (window.innerHeight - vv.height - vv.offsetTop) > 80;
      if (!kbDetected) {
        const h0 = window.innerHeight;
        const est = Math.round(h0 * (isInApp ? 0.45 : 0.4));
        setKbStyle({
          bottom: `${est + 16}px`,
          maxHeight: `${h0 - est - 32}px`,
        });
      }
      inputRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }, 500);
  };

  const clearKb = () => {
    if (blurTimer.current) clearTimeout(blurTimer.current);
    blurTimer.current = window.setTimeout(() => setKbStyle({}), 200);
  };

  const cancelClearKb = () => {
    if (blurTimer.current) { clearTimeout(blurTimer.current); blurTimer.current = null; }
  };

  useEffect(() => {
    if (autoOpenedRef.current) return;
    try { if (sessionStorage.getItem("chatbot_auto_opened")) return; } catch { }

    let timerId: number | null = null;
    const startTimer = () => {
      if (timerId !== null || autoOpenedRef.current) return;
      timerId = window.setTimeout(() => {
        autoOpenedRef.current = true;
        try { sessionStorage.setItem("chatbot_auto_opened", "1"); } catch { }
        setOpen(true); playPopSound();
      }, 10000);
    };

    const gestureUnlock = () => { unlockAudio(); };
    window.addEventListener("pointerdown", gestureUnlock, { once: true });
    window.addEventListener("keydown", gestureUnlock, { once: true });
    window.addEventListener("touchstart", gestureUnlock, { once: true, passive: true });

    try { if (sessionStorage.getItem("welcome_modal_seen")) startTimer(); } catch { }

    const onClosed = () => { unlockAudio(); startTimer(); };
    window.addEventListener("welcome-modal-closed", onClosed);

    return () => {
      window.removeEventListener("welcome-modal-closed", onClosed);
      window.removeEventListener("pointerdown", gestureUnlock);
      window.removeEventListener("keydown", gestureUnlock);
      window.removeEventListener("touchstart", gestureUnlock);
      if (timerId !== null) window.clearTimeout(timerId);
    };
  }, []);

  const handleToggle = () => {
    unlockAudio();
    setOpen((prev) => { playPopSound(); return !prev; });
  };

  const sendMessage = async (overrideText?: string) => {
    const trimmed = (overrideText ?? input).trim();
    if (!trimmed || isLoading) return;

    setChips([]);
    const userMsg: Message = { role: "user", content: trimmed };
    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setInput("");
    setIsLoading(true);

    // Fallbacks hardcodeados: en Cloudflare Pages el .env no existe y las
    // VITE_* quedan undefined. La anon key es publishable (segura en cliente).
    const SUPA_URL =
      import.meta.env.VITE_SUPABASE_URL ||
      "https://rixyvhofpietdsomjbwj.supabase.co";
    const AUTH =
      import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpeHl2aG9mcGlldGRzb21qYndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNjI3OTEsImV4cCI6MjA5MDgzODc5MX0.4g-ythW7dMO3wlyZPBPwSHvCDmgLqeXpzBbfn1IZJ98";
    const CHAT_URL = `${SUPA_URL}/functions/v1/chat`;

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AUTH}`,
        },
        body: JSON.stringify({ messages: nextHistory }),
      });

      if (!resp.ok || !resp.body) {
        throw new Error(`HTTP ${resp.status}`);
      }

      // Insert empty assistant message to fill progressively
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

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
              setMessages((prev) => {
                const copy = [...prev];
                const last = copy[copy.length - 1];
                if (last?.role === "assistant") {
                  copy[copy.length - 1] = { ...last, content: assistantText };
                }
                return copy;
              });
            }
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }

      if (!assistantText) throw new Error("Empty response");
      setChips(pickRandom(SUGGESTED_QUESTIONS, 3));
    } catch (err) {
      console.error("Chat IA falló:", err);
      const text =
        "Disculpa, tuve un problema para responder ahora mismo. Por favor escríbenos directo por **WhatsApp: +56 9 2836 2758** y te ayudamos al tiro.";
      setMessages((prev) => {
        const copy = [...prev];
        if (copy[copy.length - 1]?.role === "assistant" && !copy[copy.length - 1].content) {
          copy[copy.length - 1] = { role: "assistant", content: text };
        } else {
          copy.push({ role: "assistant", content: text });
        }
        return copy;
      });
      setChips([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform gradient-brand"
        aria-label="Abrir chat"
      >
        {open ? <X className="w-6 h-6 text-primary-foreground" /> : <RobotIcon className="w-7 h-7 text-primary-foreground" />}
      </button>

      {/* Chat window */}
      {open && (
        <div style={kbStyle} className="fixed z-50 flex flex-col overflow-hidden animate-fade-in bg-card border border-border shadow-xl rounded-2xl bottom-24 left-4 right-4 max-h-[70vh] md:left-auto md:right-6 md:w-[360px] md:h-[500px] md:max-h-[calc(100vh-8rem)]">
          {/* Header */}
          <div className="gradient-brand px-4 py-3 flex items-center gap-3 shrink-0">
            <RobotIcon className="w-6 h-6 text-primary-foreground" />
            <div className="flex-1">
              <p className="text-sm font-heading font-semibold text-primary-foreground">Marbot IArzo</p>
              <p className="text-xs text-primary-foreground/80">Independencia Digital</p>
            </div>
            <button
              onClick={handleToggle}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-primary-foreground transition-colors duration-150"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="py-6 space-y-4">
                <div className="text-center space-y-2">
                  <RobotIcon className="w-10 h-10 text-muted-foreground/50 mx-auto" />
                  <p className="text-sm text-muted-foreground">
                    ¡Hola! 👋 Soy <strong>Marbot IArzo</strong>, el asistente de Independencia Digital.
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    Pregúntame sobre nuestros servicios, áreas de consultoría o cómo podemos ayudar a tu negocio.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground/80 px-1">Preguntas frecuentes:</p>
                  {suggestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      disabled={isLoading}
                      className="w-full text-left text-xs bg-muted hover:bg-primary/10 hover:text-primary text-foreground rounded-xl px-3 py-2 transition-colors border border-border"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => {
              const hasDiagCta = msg.role === "assistant" && /\[\[DIAGNOSTICO\]\]/i.test(msg.content);
              const cleanContent = hasDiagCta
                ? msg.content.replace(/\[\[DIAGNOSTICO\]\]/gi, "").trim()
                : msg.content;
              return (
              <div key={i}>
                <div className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full gradient-brand flex items-center justify-center flex-shrink-0 mt-1">
                      <RobotIcon className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.role === "assistant" ? <SimpleMarkdown text={cleanContent} /> : msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
                {hasDiagCta && (
                  <div className="mt-2 ml-9 animate-fade-in">
                    <Link
                      to="/diagnostico"
                      onClick={() => setOpen(false)}
                      className="group inline-flex items-center gap-2 gradient-brand text-primary-foreground text-sm font-semibold rounded-full pl-3 pr-4 py-2 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
                    >
                      <Stethoscope className="w-4 h-4" />
                      <span>Iniciar diagnóstico</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                )}
                {msg.role === "assistant" && i === messages.length - 1 && chips.length > 0 && !isLoading && (
                  <div className="flex flex-wrap gap-1.5 mt-2 ml-9">
                    {chips.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => sendMessage(chip)}
                        className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1.5 hover:bg-primary/20 active:scale-[0.97] transition-all duration-150"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              );
            })}

            {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex gap-2 items-start">
                <div className="w-7 h-7 rounded-full gradient-brand flex items-center justify-center flex-shrink-0">
                  <RobotIcon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 shrink-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta..."
                className="flex-1 bg-muted text-foreground text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60"
                onFocus={() => { cancelClearKb(); applyKb(); }}
                onBlur={clearKb}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center disabled:opacity-50 hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4 text-primary-foreground" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
