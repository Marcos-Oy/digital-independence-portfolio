import { Send, LogOut, ShieldCheck } from "lucide-react";
import marcosImg from "@/assets/marcos.jpg";
import { LOADING_STEPS } from "@/models/diagnostico";
import { useDiagnosticoController } from "@/controllers/useDiagnosticoController";
import SimpleMarkdown from "@/views/shared/SimpleMarkdown";

const DiagnosticoView = () => {
  const {
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
  } = useDiagnosticoController();

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
    <div
      className="fixed inset-x-0 top-0 flex flex-col bg-background overflow-hidden overscroll-contain"
      style={{
        height: viewportFrame.height ? `${viewportFrame.height}px` : "100dvh",
        top: viewportFrame.top ? `${viewportFrame.top}px` : 0,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-card shrink-0 shadow-sm">
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
          <p className="text-xs text-green-500 font-medium">
            {isTyping ? "escribiendo…" : "En línea · CTO Externo — Independencia Digital"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowExitConfirm(true)}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium border border-border rounded-full px-3 py-1 hover:bg-muted hover:text-foreground transition-colors"
          aria-label="Salir del diagnóstico"
        >
          <LogOut className="w-3.5 h-3.5" />
          Salir
        </button>
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

        {isTyping && (
          <div className="flex items-end gap-2 justify-start animate-fade-in">
            <img src={marcosImg} alt="Marcos" className="w-7 h-7 rounded-full object-cover object-top shrink-0" />
            <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:300ms]" />
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
            onFocus={scrollInputIntoView}
            onBlur={handleInputBlur}
            placeholder="Escribe tu mensaje..."
            disabled={isLoading || isTyping}
            className="flex-1 min-w-0 bg-muted text-foreground text-base sm:text-sm rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading || isTyping}
            className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity shrink-0"
          >
            <Send className="w-4 h-4 text-primary-foreground" />
          </button>
        </form>
      </div>

      {/* Modal de confirmación */}
      {showExitConfirm && !closingSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-background/70 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm bg-card border border-border rounded-2xl shadow-2xl p-6 animate-scale-in">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <LogOut className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-base text-foreground leading-tight">
                  ¿Cerrar la sesión?
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Si sales ahora perderás el avance de este diagnóstico con Marcos.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 text-sm font-medium rounded-full border border-border px-4 py-2 hover:bg-muted transition-colors"
              >
                Seguir aquí
              </button>
              <button
                onClick={confirmExit}
                className="flex-1 text-sm font-semibold rounded-full gradient-brand text-primary-foreground px-4 py-2 hover:opacity-90 transition-opacity"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Efecto de cierre de sesión */}
      {closingSession && (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-background overflow-hidden animate-fade-in">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-accent/30 blur-3xl animate-pulse [animation-delay:400ms]" />
          </div>
          <div className="relative z-10 flex flex-col items-center text-center animate-scale-in">
            <div className="relative mb-5">
              <span className="absolute inset-0 -m-3 rounded-full border-2 border-primary/40 animate-ping" />
              <div className="relative w-20 h-20 rounded-full gradient-brand flex items-center justify-center shadow-xl">
                <ShieldCheck className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            <h2 className="font-heading font-bold text-lg text-foreground mb-1">
              Cerrando sesión segura…
            </h2>
            <p className="text-sm text-muted-foreground mb-4">
              Guardando tu conversación con <strong>Marcos</strong>
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosticoView;
