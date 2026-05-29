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
  s.toLowerCase()
   .replace(/[aáàä]/g, "a").replace(/[eéèë]/g, "e")
   .replace(/[iíìï]/g, "i").replace(/[oóòö]/g, "o")
   .replace(/[uúùü]/g, "u").replace(/[nñ]/g, "n")
   .replace(/[^a-z0-9 ]/g, " ");

type BotEntry = { keys: string[]; texts: string[]; chips: string[] };

const DB: BotEntry[] = [
  {
    keys: ["hola", "buenas", "buenos dias", "buenas tardes", "buenas noches", "hey", "hi", "saludos", "buen dia"],
    texts: [
      "¡Hola! ¿En qué te puedo ayudar? Puedo orientarte sobre nuestros servicios, contarte quiénes somos o ayudarte a agendar un diagnóstico sin costo.",
      "¡Hola! Soy el asistente de Independencia Digital. ¿Tienes alguna consulta sobre tecnología para tu empresa o negocio?",
      "¡Buenas! ¿Qué necesitas saber? Estoy aquí para orientarte sobre lo que hacemos.",
    ],
    chips: ["¿Qué servicios ofrecen?", "¿Quién es Marcos?", "Agendar diagnóstico"],
  },
  {
    keys: ["marcos", "marcos oyarzo", "fundador", "dueno", "creador", "ceo", "quien fundó", "detras", "quien esta"],
    texts: [
      "Marcos Alberto Oyarzo Alvarez es el fundador y CEO de Independencia Digital. Es Ingeniero en Informática con especialización en Ciberseguridad, Transformación Digital e IA. Trabaja directamente con cada cliente.",
      "Marcos Oyarzo es el fundador — Ingeniero en Informática, especialista en ciberseguridad y transformación digital. No hay intermediarios: él trabaja personalmente con cada cliente. Puedes ver más en su perfil.",
    ],
    chips: ["¿Qué servicios ofrecen?", "Agendar diagnóstico", "¿Cómo los contacto?"],
  },
  {
    keys: ["reparar", "arreglar", "pc", "computador", "laptop", "impresora", "pantalla", "teclado", "formatear", "tecnico", "tecnica"],
    texts: [
      "Ese tipo de servicio no está dentro de lo que hacemos — somos una consultora TI para empresas, no servicio técnico de equipos. ¿Tienes un negocio o proyecto donde podamos ayudarte?",
      "No hacemos reparación de equipos, eso escapa de nuestro foco. Trabajamos con empresas y emprendedores en tecnología organizacional. ¿En qué ámbito puedo orientarte?",
    ],
    chips: ["¿Qué servicios ofrecen?", "¿Para quién trabajan?", "Agendar diagnóstico"],
  },
  {
    keys: ["presencial", "visita", "oficina", "sucursal", "domicilio", "donde estan", "direccion", "santiago", "serena", "valparaiso", "vina", "coquimbo", "quilpue", "ovalle"],
    texts: [
      "Somos principalmente online, sin oficina física. En Santiago sí podemos coordinar visitas presenciales. En ciudades como La Serena, Valparaíso o Viña del Mar también es posible — solo hay que agendar una llamada previa para coordinar.",
      "Operamos a distancia en todo Chile y LATAM. Para visitas presenciales, Santiago está disponible directamente; en otras ciudades del país lo coordinamos con una llamada previa. ¿Estás en alguna de esas zonas?",
    ],
    chips: ["¿Cómo los contacto?", "Agendar diagnóstico", "¿Qué servicios ofrecen?"],
  },
  {
    keys: ["que es", "quienes son", "independencia digital", "consultora", "presentacion", "a que se dedican", "dedican"],
    texts: [
      "Somos una consultora tecnológica chilena. Diseñamos, construimos y dirigimos la infraestructura tecnológica de empresas, emprendedores y organismos públicos — desde la estrategia hasta la implementación.",
      "Independencia Digital es una consultora TI chilena fundada por Marcos Oyarzo. Acompañamos a empresas y emprendedores a ordenar, modernizar y hacer crecer su tecnología. ¿Qué está buscando para su negocio?",
      "Somos el área de TI externa que muchas empresas no pueden tener internamente. Desde diseñar tu infraestructura hasta dirigir tu estrategia digital, todo bajo un mismo paraguas.",
    ],
    chips: ["¿Qué servicios ofrecen?", "¿Para quién trabajan?", "Agendar diagnóstico"],
  },
  {
    keys: ["servicios", "areas", "que hacen", "portafolio", "ofrecen", "trabajan", "ayudan"],
    texts: [
      "Trabajamos en 5 áreas con 11 servicios: Estrategia y Dirección TI, Optimización de Costos TI, Desarrollo y Presencia Digital, Ciberseguridad, e Inteligencia Artificial Corporativa. ¿Cuál te interesa más?",
      "Tenemos 11 servicios agrupados en 5 áreas — desde armar tu infraestructura tecnológica desde cero hasta implementar IA en tus procesos. ¿Por dónde te gustaría empezar?",
    ],
    chips: ["Presencia Digital", "IA Corporativa", "Ciberseguridad"],
  },
  {
    keys: ["precio", "costo", "cuanto", "tarifa", "valor", "cobran", "presupuesto", "cotizacion", "cobras", "vale"],
    texts: [
      "Los valores dependen del servicio y de lo que necesita cada cliente — no trabajamos con tarifas fijas porque cada caso es distinto. Lo mejor es una conversación de 20 minutos para entender tu situación y darte un número real.",
      "Honestamente, depende mucho del alcance. Tenemos opciones para distintos tamaños de empresa y presupuesto. Si agendas un diagnóstico sin costo, te damos una propuesta concreta. ¿Te sirve eso?",
      "No publicamos tarifas porque personalizamos cada propuesta. Lo que sí te puedo decir es que trabajamos con emprendedores, PyMEs y grandes empresas — hay opciones para diferentes presupuestos.",
    ],
    chips: ["Agendar diagnóstico", "¿Cómo los contacto?", "¿Qué servicios ofrecen?"],
  },
  {
    keys: ["contacto", "whatsapp", "telefono", "correo", "email", "comunicar", "hablar", "llamar", "escribir", "mensaje"],
    texts: [
      "Puedes escribirnos por WhatsApp al +56 9 2836 2758 o al correo contacto@independenciadigital.cl. El WhatsApp suele ser más directo.",
      "La forma más rápida es el WhatsApp: +56 9 2836 2758. También respondemos correos en contacto@independenciadigital.cl. ¿En qué podemos ayudarte?",
    ],
    chips: ["Agendar diagnóstico", "¿Qué servicios ofrecen?", "¿Cuánto cuesta?"],
  },
  {
    keys: ["diagnostico", "consulta", "agendar", "reunion", "gratis", "gratuito", "sin costo", "cita", "llamada"],
    texts: [
      "El diagnóstico inicial es sin costo — es una conversación para entender tu situación y proponerte un camino claro. Puedes agendarlo escribiendo al WhatsApp: +56 9 2836 2758.",
      "Sí, hacemos un diagnóstico gratuito donde revisamos tu situación tecnológica actual y te planteamos por dónde partir. Sin compromiso. Escríbenos al +56 9 2836 2758.",
      "La primera reunión no tiene costo. La usamos para entenderte bien y ver si podemos ayudarte de verdad, antes de hablar de cualquier propuesta. ¿Quieres coordinar una?",
    ],
    chips: ["¿Cómo los contacto?", "¿Qué servicios ofrecen?", "¿Cuánto cuesta?"],
  },
  {
    keys: ["arquitectura", "infraestructura", "google workspace", "microsoft 365", "office", "cloudflare", "servidor", "correo corporativo", "dominio", "dns", "hosting", "nube", "cloud"],
    texts: [
      "La Arquitectura TI incluye todo lo que es la base tecnológica de tu empresa: correo corporativo, dominio, hosting, redes, DNS y seguridad. Lo diseñamos e implementamos según tu tamaño y necesidades.",
      "Con Arquitectura TI ordenamos y construimos tu infraestructura digital: Google Workspace o Microsoft 365, dominios, hosting, VPN, Cloudflare. El objetivo es que todo funcione de forma profesional y segura.",
    ],
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "Ver más servicios"],
  },
  {
    keys: ["transformacion digital", "digitalizar", "digitalizacion", "modernizar", "procesos digitales", "dejar papel", "sin papel"],
    texts: [
      "La Transformación Digital parte con un diagnóstico de cómo trabajas hoy, luego construimos una hoja de ruta por etapas — sin tirarte todo encima de golpe. Incluye implementación, capacitación y ciberseguridad.",
      "Digitalizarse no es comprar software, es cambiar cómo opera el negocio. Hacemos ese proceso contigo: diagnóstico, plan, implementación y acompañamiento. ¿En qué etapa está tu empresa hoy?",
    ],
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "Ver más servicios"],
  },
  {
    keys: ["cto", "director de tecnologia", "gerente ti", "jefe ti", "lider tecnologico", "responsable tecnologia"],
    texts: [
      "El CTO Externo es como tener un Director de Tecnología en tu empresa, pero a tiempo parcial y sin el costo de un cargo de planta. Define la estrategia, gestiona proveedores y lidera el área TI.",
      "Si necesitas dirección tecnológica pero no puedes contratar un CTO full-time, eso es exactamente lo que hacemos — rol estratégico, parte del equipo, sin la nómina de un ejecutivo.",
    ],
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "Ver más servicios"],
  },
  {
    keys: ["reduccion de costos", "reducir costos", "bajar costos", "ahorrar", "ahorro", "estoy pagando mucho", "gasto tecnologia"],
    texts: [
      "Hacemos una auditoría de tu gasto en tecnología — hardware, licencias y nube — y detectamos dónde estás pagando de más. En promedio los clientes ahorran hasta un 50% de su gasto TI actual.",
      "Muchas empresas pagan por herramientas que no usan o tienen contratos mal negociados. Auditamos todo eso y te presentamos un plan concreto de ahorro. ¿Tienes idea de cuánto gastas mensualmente en tecnología?",
    ],
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "Ver más servicios"],
  },
  {
    keys: ["soporte", "help desk", "asistencia tecnica", "mantenimiento", "ticket", "incidencia", "problema tecnico", "falla"],
    texts: [
      "El Soporte TI Gestionado es un contrato mensual con bolsa de horas y tiempos de respuesta definidos. Atendemos de forma remota y presencial según dónde estés. Ideal si necesitas TI confiable sin armar un equipo propio.",
      "Ofrecemos soporte técnico continuo con SLA claro — sabes en cuánto tiempo te respondemos. Remoto o presencial. Más predecible y barato que contratar alguien interno.",
    ],
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "¿Funciona presencial?"],
  },
  {
    keys: ["sitio web", "pagina web", "landing", "seo", "google maps", "presencia digital", "aparecer en google", "posicionamiento"],
    texts: [
      "El servicio de Presencia Digital incluye diseño y desarrollo de tu sitio web, posicionamiento SEO para aparecer en Google, perfil de Google Maps y configuración segura de tu dominio.",
      "Con Presencia Digital construimos tu vitrina online completa: sitio web profesional, SEO para que te encuentren en Google, y Google Maps bien configurado. ¿Tienes sitio web actualmente?",
    ],
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "¿Hacen tiendas online?"],
  },
  {
    keys: ["desarrollo", "aplicacion", "app", "sistema", "software", "ecommerce", "tienda online", "crm", "base de datos", "pwa", "plataforma", "sistema a medida"],
    texts: [
      "Desarrollamos software web a medida: e-commerce, CRM, sistemas de gestión interna, aplicaciones instalables en móvil (PWA). Si tienes un proceso que necesita un sistema propio, conversemos.",
      "Si lo que necesitas no existe o lo que hay en el mercado no se ajusta a tu negocio, lo construimos. E-commerce, CRM, portales, aplicaciones móviles. ¿Qué tipo de sistema tienes en mente?",
    ],
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "Ver más servicios"],
  },
  {
    keys: ["marketing", "redes sociales", "publicidad", "ads", "google ads", "meta ads", "facebook", "instagram", "tiktok", "linkedin", "sem", "campana", "contenido"],
    texts: [
      "La Dirección de Marketing Digital abarca SEO/SEM, campañas en Meta, Google, LinkedIn y TikTok, y estrategia de contenidos. Trabajamos con tres niveles de servicio según el tamaño y presupuesto de tu empresa.",
      "Hacemos marketing digital de verdad — no solo publicar en redes. Estrategia, campañas pagadas (Meta, Google, LinkedIn), SEO y contenido. Tres niveles según tu etapa. ¿Qué estás buscando potenciar?",
    ],
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "Ver más servicios"],
  },
  {
    keys: ["ciberseguridad", "seguridad", "hackeo", "hacker", "hackearon", "phishing", "virus", "malware", "iso 27001", "ley 19628", "datos personales", "proteger", "vulnerabilidad"],
    texts: [
      "Nuestro servicio de Ciberseguridad incluye auditoría técnica de vulnerabilidades, formación del equipo contra phishing y ataques, y cumplimiento normativo (ISO 27001 y Ley 19.628 de datos personales).",
      "Si te preocupa la seguridad de tu empresa, partimos con una auditoría técnica para saber dónde estás expuesto. Luego trabajamos en los frentes más críticos: técnico, humano y normativo. ¿Ha tenido algún incidente o es preventivo?",
    ],
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "Ver más servicios"],
  },
  {
    keys: ["inteligencia artificial", "ia corporativa", "automatizacion", "automatizar", "agente", "chatbot empresarial", "clon digital", "procesos con ia", "ia en mi empresa"],
    texts: [
      "La IA Corporativa parte por identificar qué procesos de tu empresa son automatizables con IA — sin presionar tecnología donde no hace sentido. Luego implementamos agentes, automatizaciones y flujos que realmente ahorran tiempo.",
      "Implementamos IA donde genera valor real: automatización de procesos, agentes con memoria, análisis de datos. Primero el diagnóstico, después la solución. ¿Tienes algún proceso específico en mente?",
    ],
    chips: ["¿Cuánto cuesta?", "Agendar diagnóstico", "Ver más servicios"],
  },
  {
    keys: ["municipio", "municipalidad", "gobierno", "publico", "mercado publico", "chilecompra", "licitacion", "sector publico"],
    texts: [
      "Sí trabajamos con el sector público a través de Mercado Público (ChileCompra). Si eres un organismo del Estado buscando modernización tecnológica, podemos conversar.",
      "Atendemos organismos del sector público vía licitaciones en Mercado Público. Si estás en una entidad pública con necesidades tecnológicas, contáctanos y vemos cómo podemos participar.",
    ],
    chips: ["¿Cómo los contacto?", "Agendar diagnóstico", "¿Qué servicios ofrecen?"],
  },
  {
    keys: ["pyme", "pequena empresa", "mediana empresa", "microempresa", "empresa chica"],
    texts: [
      "Las PyMEs son uno de nuestros focos principales. Tenemos servicios y modelos de trabajo adaptados a distintos presupuestos — el objetivo es que accedan a tecnología de nivel enterprise sin pagarlo.",
      "Trabajamos mucho con PyMEs. Sabemos que los recursos son acotados, por eso priorizamos lo que tiene impacto real antes de agregar complejidad. ¿En qué etapa está tu empresa?",
    ],
    chips: ["¿Qué servicios ofrecen?", "¿Cuánto cuesta?", "Agendar diagnóstico"],
  },
  {
    keys: ["emprendedor", "freelance", "independiente", "profesional independiente", "negocio propio", "startup", "recien parto", "empezando"],
    texts: [
      "Con gusto trabajamos con emprendedores. Tenemos servicios de entrada como Presencia Digital y Arquitectura TI, pensados para quienes están partiendo o formalizando su negocio sin gastar de más.",
      "Los emprendedores también merecen tecnología bien hecha. Tenemos servicios de entrada accesibles para que tu negocio arranque con buen pie digital. ¿Qué necesitas primero?",
    ],
    chips: ["¿Qué servicios ofrecen?", "¿Cuánto cuesta?", "Agendar diagnóstico"],
  },
  {
    keys: ["plazo", "tiempo", "cuanto demora", "demora", "cuando", "rapido", "urgente"],
    texts: [
      "Los plazos dependen del servicio y el alcance, no podría darte un número genérico sin conocer tu caso. En el diagnóstico inicial definimos tiempos reales. Lo que sí puedo decirte es que trabajamos con fechas comprometidas.",
      "Varía mucho según qué necesites. Hay servicios que se activan en días y proyectos que toman semanas. En la primera conversación aclaramos eso con tiempos concretos.",
    ],
    chips: ["Agendar diagnóstico", "¿Cuánto cuesta?", "¿Cómo los contacto?"],
  },
];

const FALLBACK: BotEntry = {
  keys: [],
  texts: [
    "No tengo información específica sobre eso, pero con gusto te oriento. ¿Tienes algún desafío tecnológico en tu empresa o negocio que quieras resolver?",
    "Eso escapa un poco de lo que manejo, pero puedo conectarte con alguien del equipo que te responda directamente. ¿Te sirve agendar una llamada rápida?",
    "No estoy seguro de poder ayudarte con eso desde aquí. Si me cuentas un poco más sobre tu negocio, veo cómo orientarte mejor.",
  ],
  chips: ["Agendar diagnóstico", "¿Qué servicios ofrecen?", "¿Cómo los contacto?"],
};

const getBotResponse = (query: string): { text: string; chips: string[] } => {
  const q = normalize(query);
  let best = { score: 0, idx: -1 };
  DB.forEach((entry, i) => {
    const score = entry.keys.filter((k) => q.includes(normalize(k))).length;
    if (score > best.score) best = { score, idx: i };
  });
  const entry = best.idx >= 0 ? DB[best.idx] : FALLBACK;
  const texts = entry.texts;
  return { text: texts[Math.floor(Math.random() * texts.length)], chips: entry.chips };
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

    const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
    const AUTH = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

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
      setChips([]);
    } catch (err) {
      console.error("Chat IA falló, usando fallback local:", err);
      // Fallback a respuestas locales si la IA falla
      const { text, chips: newChips } = getBotResponse(trimmed);
      setMessages((prev) => {
        const copy = [...prev];
        // Si insertamos un assistant vacío, lo reemplazamos
        if (copy[copy.length - 1]?.role === "assistant" && !copy[copy.length - 1].content) {
          copy[copy.length - 1] = { role: "assistant", content: text };
        } else {
          copy.push({ role: "assistant", content: text });
        }
        return copy;
      });
      setChips(newChips);
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
