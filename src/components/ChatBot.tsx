import { useState, useRef, useEffect } from "react";
import { X, Send, User } from "lucide-react";

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

// ── Respuestas del bot ────────────────────────────────────────────────────────

const normalize = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9\s]/g, " ");

type BotEntry = { keys: string[]; text: string; chips: string[] };

const DB: BotEntry[] = [
  {
    keys: ["reparar", "arreglar", "pc", "computador", "laptop", "impresora", "celular", "pantalla", "teclado", "formatear", "virus", "tecnico"],
    text: "Ese tipo de servicio no lo ofrecemos, somos una consultora tecnológica para empresas y emprendedores. ¿Tienes algún negocio o proyecto que necesite apoyo tecnológico?",
    chips: ["¿Qué servicios ofrecen?", "¿Para quién trabajan?", "Agendar diagnóstico"],
  },
  {
    keys: ["presencial", "visita", "oficina", "sucursal", "domicilio", "ciudad", "donde estan", "direccion", "santiago", "serena", "valparaiso", "vina", "coquimbo", "quilpue", "ovalle"],
    text: "Operamos principalmente online sin sucursal física. En Santiago coordinamos visitas presenciales, y en ciudades como La Serena, Valparaíso o Viña del Mar también es posible agendando una llamada previa.",
    chips: ["¿Cómo los contacto?", "Agendar diagnóstico", "¿Qué servicios ofrecen?"],
  },
  {
    keys: ["que es", "quienes son", "independencia digital", "consultora", "presentacion"],
    text: "Somos una consultora tecnológica chilena que diseña, construye y dirige la infraestructura tecnológica de empresas, emprendedores y organismos públicos.",
    chips: ["¿Qué servicios ofrecen?", "¿Para quién trabajan?", "Agendar diagnóstico"],
  },
  {
    keys: ["servicios", "areas", "que hacen", "portafolio", "ofrecen", "trabajan"],
    text: "Trabajamos en 5 áreas: Estrategia y Dirección TI, Optimización de Costos TI, Desarrollo y Presencia Digital, Ciberseguridad, e Inteligencia Artificial Corporativa, con 11 servicios en total.",
    chips: ["Presencia Digital", "IA Corporativa", "Ciberseguridad"],
  },
  {
    keys: ["precio", "costo", "cuanto", "tarifa", "valor", "cobran", "presupuesto", "cotizacion"],
    text: "Los precios varían según el servicio y las necesidades de cada cliente. Lo mejor es agendar un diagnóstico gratuito para darte un presupuesto personalizado.",
    chips: ["Agendar diagnóstico", "¿Cómo los contacto?", "¿Qué servicios ofrecen?"],
  },
  {
    keys: ["contacto", "whatsapp", "telefono", "correo", "email", "comunicar", "hablar", "llamar"],
    text: "Puedes contactarnos por WhatsApp al +56 9 2836 2758 o por correo a contacto@independenciadigital.cl.",
    chips: ["Agendar diagnóstico", "¿Qué servicios ofrecen?", "¿Cuánto cuesta?"],
  },
  {
    keys: ["diagnostico", "consulta", "agendar", "reunion", "gratis", "gratuito", "sin costo", "cita"],
    text: "Ofrecemos un diagnóstico inicial sin costo para entender tu caso y proponerte una hoja de ruta. Escríbenos al WhatsApp: +56 9 2836 2758.",
    chips: ["¿Cómo los contacto?", "¿Qué servicios ofrecen?", "¿Cuánto cuesta?"],
  },
  {
    keys: ["arquitectura", "infraestructura", "google workspace", "microsoft 365", "cloudflare", "hostinger", "servidor", "correo corporativo", "dominio"],
    text: "El servicio de Arquitectura TI incluye el diseño e implementación de toda tu infraestructura: correo corporativo, dominio, seguridad DNS y hosting.",
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "¿Qué más ofrecen?"],
  },
  {
    keys: ["transformacion digital", "digitalizar", "digitalizacion", "modernizar", "procesos digitales"],
    text: "La Transformación Digital incluye diagnóstico, hoja de ruta por etapas, implementación, capacitación y ciberseguridad integrada, adaptada al ritmo de tu empresa.",
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "¿Qué más ofrecen?"],
  },
  {
    keys: ["cto", "director de tecnologia", "gerente ti", "jefe ti"],
    text: "El CTO Externo te da un director de tecnología part-time que define la estrategia, gestiona proveedores y lidera tu equipo TI sin el costo de un cargo de planta.",
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "¿Qué más ofrecen?"],
  },
  {
    keys: ["reduccion de costos", "reducir costos", "ahorrar", "ahorro", "licencias", "nube", "cloud"],
    text: "Auditamos tu gasto en tecnología (hardware, licencias y nube) e identificamos dónde puedes ahorrar, llegando a reducir hasta un 50% del gasto actual.",
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "¿Qué más ofrecen?"],
  },
  {
    keys: ["soporte", "help desk", "asistencia tecnica", "mantenimiento", "ticket", "incidencia"],
    text: "El Soporte TI Gestionado es un contrato mensual con bolsa de horas y SLA de respuesta definido, con atención remota o presencial según tu ubicación.",
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "¿Funciona presencial?"],
  },
  {
    keys: ["sitio web", "pagina web", "web", "landing", "seo", "google maps", "presencia digital"],
    text: "El servicio de Presencia Digital incluye diseño y desarrollo de tu sitio web, optimización SEO, perfil en Google Maps y configuración de dominio con seguridad.",
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "¿Hacen tiendas online?"],
  },
  {
    keys: ["desarrollo", "aplicacion", "app", "sistema", "software", "ecommerce", "tienda online", "crm", "base de datos", "pwa"],
    text: "Desarrollamos software web a medida: e-commerce, CRM, sistemas internos, gestores de eventos y aplicaciones instalables en móvil (PWA).",
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "¿Qué más ofrecen?"],
  },
  {
    keys: ["marketing", "redes sociales", "publicidad", "ads", "google ads", "meta ads", "facebook", "instagram", "tiktok", "linkedin", "sem", "campana"],
    text: "La Dirección de Marketing Digital abarca SEO/SEM, campañas en Meta, Google, LinkedIn y TikTok, y estrategia de contenidos. Trabajamos con tres niveles según el tamaño de tu empresa.",
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "¿Qué más ofrecen?"],
  },
  {
    keys: ["ciberseguridad", "seguridad", "hackeo", "hacker", "phishing", "iso 27001", "ley 19628", "datos personales"],
    text: "Nuestro servicio de Ciberseguridad incluye auditoría técnica, formación contra phishing, cumplimiento ISO 27001 y Ley 19.628, con módulos para distintos sectores.",
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "¿Qué más ofrecen?"],
  },
  {
    keys: ["inteligencia artificial", "ia corporativa", "automatizacion", "agente", "n8n", "manychat", "clon digital", "bot"],
    text: "La IA Corporativa incluye diagnóstico de procesos automatizables, agentes con memoria, biblioteca de prompts y automatización de flujos para que tu equipo trabaje más eficientemente.",
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "¿Qué más ofrecen?"],
  },
  {
    keys: ["municipio", "municipalidad", "gobierno", "publico", "mercado publico", "chilecompra", "licitacion"],
    text: "Sí trabajamos con el sector público vía Mercado Público (ChileCompra). Estamos en proceso de inscripción para participar en licitaciones.",
    chips: ["¿Cómo los contacto?", "Agendar diagnóstico", "¿Qué servicios ofrecen?"],
  },
  {
    keys: ["pyme", "pequena empresa", "mediana empresa", "microempresa"],
    text: "Trabajamos especialmente con PyMEs, con servicios adaptados a distintos presupuestos y tamaños, enfocados en resultados concretos y sin tecnicismos.",
    chips: ["¿Qué servicios ofrecen?", "¿Cuánto cuesta?", "Agendar diagnóstico"],
  },
  {
    keys: ["emprendedor", "freelance", "independiente", "profesional independiente", "negocio propio", "startup"],
    text: "Trabajamos con emprendedores. Tenemos servicios de entrada como Presencia Digital y Arquitectura TI pensados para quienes están comenzando o formalizando su negocio.",
    chips: ["¿Qué servicios ofrecen?", "¿Cuánto cuesta?", "Agendar diagnóstico"],
  },
];

const FALLBACK: BotEntry = {
  keys: [],
  text: "No tengo información específica sobre eso. Te recomiendo agendar un diagnóstico gratuito para conversar directamente con nuestro equipo.",
  chips: ["Agendar diagnóstico", "¿Qué servicios ofrecen?", "¿Cómo los contacto?"],
};

const getBotResponse = (query: string): BotEntry => {
  const q = normalize(query);
  let best = { score: 0, idx: -1 };
  DB.forEach((entry, i) => {
    const score = entry.keys.filter((k) => q.includes(normalize(k))).length;
    if (score > best.score) best = { score, idx: i };
  });
  return best.idx >= 0 ? DB[best.idx] : FALLBACK;
};

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

  // Botón Back de Android / popstate como señal de cierre de teclado
  useEffect(() => {
    if (Object.keys(kbStyle).length === 0) return;
    history.pushState({ chatKb: true }, "");
    const onPop = () => setKbStyle({});
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [kbStyle]);

  const applyKb = () => {
    if (window.innerWidth >= 768) return;
    const h0 = window.innerHeight;
    setTimeout(() => {
      const est = Math.round(h0 * 0.42);
      setKbStyle({ transform: `translateY(-${est}px)`, maxHeight: `${h0 - est - 96}px` });
    }, 350);
  };

  const clearKb = () => {
    if (blurTimer.current) clearTimeout(blurTimer.current);
    blurTimer.current = window.setTimeout(() => setKbStyle({}), 280);
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
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setIsLoading(true);

    await new Promise((r) => setTimeout(r, 400 + Math.random() * 350));

    const { text, chips: newChips } = getBotResponse(trimmed);
    setMessages((prev) => [...prev, { role: "assistant", content: text }]);
    setChips(newChips);
    setIsLoading(false);
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

            {messages.map((msg, i) => (
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
                    {msg.role === "assistant" ? <SimpleMarkdown text={msg.content} /> : msg.content}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
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
            ))}

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
