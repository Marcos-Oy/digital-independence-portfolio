import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  type ChatMessage,
  LOADING_STEPS,
  GREETING,
  typingDuration,
  fetchDiagnosticoReply,
} from "@/models/diagnostico";

export const useDiagnosticoController = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [booting, setBooting] = useState(true);
  const [bootStep, setBootStep] = useState(0);
  const [bootProgress, setBootProgress] = useState(0);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [closingSession, setClosingSession] = useState(false);
  const [viewportFrame, setViewportFrame] = useState({ height: 0, top: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const greetedRef = useRef(false);
  const exitingRef = useRef(false);
  const inputFocusedRef = useRef(false);

  // Ajustar la sesión al teclado virtual en móviles. Instagram/Facebook WebView
  // a veces no informa bien el teclado, por eso pre-reducimos el alto al enfocar.
  useEffect(() => {
    const isTouchMobile = () =>
      window.matchMedia("(max-width: 768px) and (pointer: coarse)").matches;

    const update = () => {
      const vv = window.visualViewport;
      const innerHeight = window.innerHeight;
      const rawHeight = vv?.height ?? innerHeight;
      const top = vv?.offsetTop ?? 0;
      const keyboardGap = innerHeight - rawHeight - top;
      const keyboardDetected = keyboardGap > 80 || rawHeight < innerHeight - 80;
      const fallbackKeyboard = Math.min(360, Math.max(260, innerHeight * 0.42));
      const visibleHeight =
        inputFocusedRef.current && isTouchMobile() && !keyboardDetected
          ? innerHeight - fallbackKeyboard
          : Math.min(rawHeight, innerHeight);

      setViewportFrame({
        height: Math.max(320, Math.round(visibleHeight)),
        top: Math.max(0, Math.round(top)),
      });
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    window.visualViewport?.addEventListener("resize", update);
    window.visualViewport?.addEventListener("scroll", update);
    const focusedPoll = window.setInterval(() => {
      if (inputFocusedRef.current) update();
    }, 120);

    return () => {
      window.clearInterval(focusedPoll);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      window.visualViewport?.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("scroll", update);
    };
  }, []);

  const scrollInputIntoView = () => {
    inputFocusedRef.current = true;
    // Varios intentos: Instagram abre el teclado tarde y sin eventos fiables.
    [0, 180, 380, 750, 1200].forEach((delay) => window.setTimeout(() => {
      inputRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
      if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, delay));
  };

  const handleInputBlur = () => {
    inputFocusedRef.current = false;
    window.setTimeout(() => {
      const vv = window.visualViewport;
      setViewportFrame({
        height: Math.round(Math.min(vv?.height ?? window.innerHeight, window.innerHeight)),
        top: Math.max(0, Math.round(vv?.offsetTop ?? 0)),
      });
    }, 120);
  };

  // Interceptar el botón "atrás" del navegador para pedir confirmación.
  useEffect(() => {
    if (booting) return;
    window.history.pushState({ diag: true }, "");
    const onPop = () => {
      if (exitingRef.current) return;
      window.history.pushState({ diag: true }, "");
      setShowExitConfirm(true);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [booting]);

  const confirmExit = () => {
    setShowExitConfirm(false);
    setClosingSession(true);
    exitingRef.current = true;
    setTimeout(() => navigate("/"), 1800);
  };

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
  }, [messages, isTyping]);

  // Simula a una persona escribiendo: muestra "escribiendo…" un tiempo
  // proporcional al largo del mensaje y luego lo publica completo de una vez.
  const typeAssistantMessage = useCallback(async (fullText: string) => {
    setIsTyping(true);
    await new Promise((r) => setTimeout(r, typingDuration(fullText)));
    setIsTyping(false);
    setMessages((prev) => [...prev, { role: "assistant", content: fullText }]);
  }, []);

  // Saludo inicial del clon de Marcos al terminar el boot
  useEffect(() => {
    if (booting || greetedRef.current) return;
    greetedRef.current = true;
    typeAssistantMessage(GREETING);
  }, [booting, typeAssistantMessage]);

  const sendMessage = async (text?: string) => {
    const trimmed = (text ?? input).trim();
    if (!trimmed || isLoading || isTyping) return;

    const userMsg: ChatMessage = { role: "user", content: trimmed };
    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setInput("");
    setIsLoading(true);
    setIsTyping(true);

    try {
      const assistantText = await fetchDiagnosticoReply(nextHistory);
      setIsLoading(false);
      setIsTyping(false);
      if (assistantText) {
        await typeAssistantMessage(assistantText);
      }
    } catch {
      setIsLoading(false);
      setIsTyping(false);
      await typeAssistantMessage(
        "Disculpa, tuve un problema para conectar. Vuelve a escribirme en un momento o usa el botón de WhatsApp del sitio."
      );
    }
  };

  return {
    messages,
    input,
    setInput,
    isLoading,
    isTyping,
    booting,
    bootStep,
    bootProgress,
    showExitConfirm,
    setShowExitConfirm,
    closingSession,
    viewportFrame,
    scrollRef,
    inputRef,
    scrollInputIntoView,
    handleInputBlur,
    confirmExit,
    sendMessage,
  };
};
