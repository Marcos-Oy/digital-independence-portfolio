import { X, Send, User, Stethoscope, ArrowRight } from "lucide-react";
import { useChatBotController } from "@/controllers/useChatBotController";
import SimpleMarkdown from "@/views/shared/SimpleMarkdown";

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

const ChatBotView = () => {
  const {
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
  } = useChatBotController();

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
                    <a
                      href="https://independencia-digital.systeme.io/registro"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleToggle()}
                      className="group inline-flex items-center gap-2 gradient-brand text-primary-foreground text-sm font-semibold rounded-full pl-3 pr-4 py-2 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
                    >
                      <Stethoscope className="w-4 h-4" />
                      <span>Iniciar diagnóstico</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
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

export default ChatBotView;
