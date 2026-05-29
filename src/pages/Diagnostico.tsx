import { useState, useRef, useEffect } from "react";
import { Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import marcosImg from "@/assets/marcos.jpg";

const SUPA_URL =
  import.meta.env.VITE_SUPABASE_URL || "https://rixyvhofpietdsomjbwj.supabase.co";
const CHAT_URL = `${SUPA_URL}/functions/v1/diagnostico`;

type Message = { role: "user" | "assistant"; content: string };

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

const LOADING_STEPS = [
  "Estableciendo conexión segura…",
  "Autenticando sesión privada…",
  "Cargando perfil de Marcos Oyarzo…",
  "Sincronizando módulo de diagnóstico TI…",
  "Listo. Iniciando conversación…",
];

export default function Diagnostico() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [booting, setBooting] = useState(true);
  const [bootStep, setBootStep] = useState(0);
  const [bootProgress, setBootProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!booting) return;
    const stepMs = 650;
    const stepTimer = setInterval(() => {
      setBootStep((s) => {
        if (s >= LOADING_STEPS.length - 1) {
          clearInterval(stepTimer);
          return s;
        }
        return s + 1;
      });
    }, stepMs);
    const progressTimer = setInterval(() => {
      setBootProgress((p) => Math.min(100, p + 2));
    }, 70);
    const done = setTimeout(() => setBooting(false), stepMs * LOADING_STEPS.length + 200);
    return () => {
      clearInterval(stepTimer);
      clearInterval(progressTimer);
      clearTimeout(done);
    };
  }, [booting]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const trimmed = (text ?? input).trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: "user", content: trimmed };
    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setInput("");
    setIsLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextHistory }),
      });

      if (!resp.ok || !resp.body) throw new Error(`HTTP ${resp.status}`);

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

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
          } catch { /* skip */ }
        }
      }
    } catch {
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: "Tuve un problema al conectar. Escríbeme directamente al WhatsApp: +56 9 2836 2758.",
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (booting) {
    return (
      <div className="flex flex-col items-center justify-center h-[100dvh] bg-background px-6 overflow-hidden relative">
        {/* Fondo animado */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/30 blur-3xl animate-pulse [animation-delay:600ms]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full animate-fade-in">
          {/* Avatar con anillos */}
          <div className="relative mb-6">
            <span className="absolute inset-0 -m-3 rounded-full border-2 border-primary/40 animate-ping" />
            <span className="absolute inset-0 -m-1 rounded-full border border-primary/60 animate-pulse" />
            <img
              src={marcosImg}
              alt="Marcos Oyarzo"
              className="relative w-24 h-24 rounded-full object-cover object-top shadow-xl ring-4 ring-background"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
          </div>

          <h2 className="font-heading font-bold text-xl text-foreground mb-1">
            Cargando sesión privada
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Preparando tu diagnóstico con <strong>Marcos Oyarzo</strong>
          </p>

          {/* Barra de progreso */}
          <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden mb-4">
            <div
              className="h-full gradient-brand transition-[width] duration-200 ease-out"
              style={{ width: `${bootProgress}%` }}
            />
          </div>

          {/* Paso actual */}
          <div className="h-6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0ms]" />
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:150ms]" />
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:300ms]" />
            <span
              key={bootStep}
              className="text-xs text-muted-foreground font-medium ml-2 animate-fade-in"
            >
              {LOADING_STEPS[bootStep]}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[100dvh] bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-card shrink-0 shadow-sm">
        <Link to="/" className="text-muted-foreground hover:text-foreground mr-1">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="relative">
          <img
            src={marcosImg}
            alt="Marcos Oyarzo"
            className="w-10 h-10 rounded-full object-cover object-top"
          />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-card" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-heading font-semibold text-sm text-foreground leading-tight">Marcos Oyarzo</p>
          <p className="text-xs text-green-500 font-medium">En línea · CTO Externo — Independencia Digital</p>
        </div>
        <a
          href="https://wa.me/56928362758"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary font-medium border border-primary/30 rounded-full px-3 py-1 hover:bg-primary/10 transition-colors"
        >
          WhatsApp
        </a>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "assistant" && (
              <img
                src={marcosImg}
                alt="Marcos"
                className="w-7 h-7 rounded-full object-cover object-top shrink-0 mb-0.5"
              />
            )}
            <div
              className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-sm"
                  : "bg-card border border-border text-foreground rounded-bl-sm"
              }`}
            >
              {msg.role === "assistant" ? (
                msg.content ? <SimpleMarkdown text={msg.content} /> : (
                  <div className="flex gap-1 py-1">
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                )
              ) : msg.content}
            </div>
          </div>
        ))}

        {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
          <div className="flex items-end gap-2 justify-start">
            <img src={marcosImg} alt="Marcos" className="w-7 h-7 rounded-full object-cover object-top shrink-0" />
            <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
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
      <div className="shrink-0 border-t border-border bg-card px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <form
          onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
          className="flex items-center gap-2"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            disabled={isLoading}
            className="flex-1 bg-muted text-foreground text-sm rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity shrink-0"
          >
            <Send className="w-4 h-4 text-primary-foreground" />
          </button>
        </form>
      </div>
    </div>
  );
}
