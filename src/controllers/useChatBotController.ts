import { useState, useRef, useEffect } from "react";
import {
  type ChatMessage,
  SUGGESTED_QUESTIONS,
  pickRandom,
  streamChatResponse,
  unlockChatAudio,
  playChatPopSound,
} from "@/models/chatbot";

export const useChatBotController = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
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
      const keyboard = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
      if (keyboard > 80) {
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
        setOpen(true); playChatPopSound();
      }, 10000);
    };

    const gestureUnlock = () => { unlockChatAudio(); };
    window.addEventListener("pointerdown", gestureUnlock, { once: true });
    window.addEventListener("keydown", gestureUnlock, { once: true });
    window.addEventListener("touchstart", gestureUnlock, { once: true, passive: true });

    try { if (sessionStorage.getItem("welcome_modal_seen")) startTimer(); } catch { }

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
    applyKb,
    clearKb,
    cancelClearKb,
  };
};
