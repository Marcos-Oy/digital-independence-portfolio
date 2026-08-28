import { useState, useRef, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
  type ChatMessage,
  SUGGESTED_QUESTIONS,
  getSuggestedQuestionsForPath,
  pickRandom,
  streamChatResponse,
  unlockChatAudio,
  playChatPopSound,
} from "@/models/chatbot";

export const useChatBotController = () => {
  const { pathname } = useLocation();
  const isLandingFunnel = /^\/landing\/.+/.test(pathname);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Preguntas del saludo inicial: específicas del servicio si estamos en su
  // página o landing, genéricas en el resto del sitio. Se recalculan al
  // navegar (no solo al montar) para que reflejen la página actual.
  const suggestions = useMemo(() => getSuggestedQuestionsForPath(pathname), [pathname]);
  const [chips, setChips] = useState<string[]>([]);
  const [kbStyle, setKbStyle] = useState<React.CSSProperties>({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const autoOpenedRef = useRef(false);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  // Cuando el chat se cierra, siempre limpiamos el estilo
  useEffect(() => { if (!open) setKbStyle({}); }, [open]);

  // Reposiciona el chat cuando aparece el teclado virtual, por polling en vez
  // de eventos (resize/blur/focus): en navegadores embebidos (Instagram,
  // TikTok, etc.) esos eventos no siempre disparan, así que en vez de
  // reaccionar a ellos medimos el estado real cada 200ms. Así el ajuste
  // siempre refleja la realidad (enfocado + teclado abierto sí, si no no) y
  // nunca se puede quedar pegado en un estado viejo.
  useEffect(() => {
    if (!open) return;
    if (typeof window === "undefined") return;

    const update = () => {
      if (window.innerWidth >= 768) { setKbStyle((prev) => (Object.keys(prev).length ? {} : prev)); return; }

      const vv = window.visualViewport;
      const focused = document.activeElement === inputRef.current;
      const keyboard = vv ? Math.max(0, window.innerHeight - vv.height - vv.offsetTop) : 0;

      if (focused && vv && keyboard > 80) {
        const bottom = `${keyboard + 16}px`;
        const maxHeight = `${vv.height - 24}px`;
        setKbStyle((prev) => (prev.bottom === bottom && prev.maxHeight === maxHeight ? prev : { bottom, maxHeight }));
      } else {
        setKbStyle((prev) => (Object.keys(prev).length ? {} : prev));
      }
    };

    update();
    const interval = window.setInterval(update, 200);
    return () => window.clearInterval(interval);
  }, [open]);

  useEffect(() => {
    if (autoOpenedRef.current) return;
    try { if (sessionStorage.getItem("chatbot_auto_opened")) return; } catch { }

    let timerId: number | null = null;
    const startTimer = () => {
      if (timerId !== null || autoOpenedRef.current) return;
      timerId = window.setTimeout(() => {
        autoOpenedRef.current = true;
        try { sessionStorage.setItem("chatbot_auto_opened", "1"); } catch { }
        setOpen(true); playChatPopSound();
      }, 10000);
    };

    const gestureUnlock = () => { unlockChatAudio(); };
    window.addEventListener("pointerdown", gestureUnlock, { once: true });
    window.addEventListener("keydown", gestureUnlock, { once: true });
    window.addEventListener("touchstart", gestureUnlock, { once: true, passive: true });

    // Las landing pages no muestran el modal de bienvenida, así que ahí no
    // hay nada que esperar: el timer arranca directo al llegar.
    if (isLandingFunnel) {
      startTimer();
    } else {
      try { if (sessionStorage.getItem("welcome_modal_seen")) startTimer(); } catch { }
    }

    const onClosed = () => { unlockChatAudio(); startTimer(); };
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
    unlockChatAudio();
    setOpen((prev) => { playChatPopSound(); return !prev; });
  };

  const sendMessage = async (overrideText?: string) => {
    const trimmed = (overrideText ?? input).trim();
    if (!trimmed || isLoading) return;

    setChips([]);
    const userMsg: ChatMessage = { role: "user", content: trimmed };
    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setInput("");
    setIsLoading(true);

    // Mensaje vacío del asistente que se va llenando progresivamente
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      await streamChatResponse(nextHistory, (fullTextSoFar) => {
        setMessages((prev) => {
          const copy = [...prev];
          const last = copy[copy.length - 1];
          if (last?.role === "assistant") {
            copy[copy.length - 1] = { ...last, content: fullTextSoFar };
          }
          return copy;
        });
      });
      setChips(pickRandom(SUGGESTED_QUESTIONS, 3));
    } catch (err) {
      console.error("Chat IA falló:", err);
      const text =
        "Disculpa, tuve un problema para responder ahora mismo. Por favor escríbenos a **contacto@independenciadigital.cl** o usa el botón de contacto del sitio.";
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

  return {
    open,
    messages,
    input,
    setInput,
    isLoading,
    suggestions,
    chips,
    kbStyle,
    scrollRef,
    inputRef,
    handleToggle,
    sendMessage,
  };
};
