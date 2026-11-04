import ScrollReveal from "@/views/shared/ScrollReveal";
import { Bot, Plug, Code2, MessageCircle, Megaphone, Route, GraduationCap } from "lucide-react";
import { BOOKING_TRIGGER_CLASS } from "@/lib/booking";

export const AI_SOLUTIONS = [
  { icon: Route, tag: "Punto de partida", title: "Auditoría de flujos y hoja de ruta de IA", pain: "“No sé por dónde empezar con la IA.”", text: "Revisamos captación, atención, venta, operación, cobro y administración, y entregamos una hoja de ruta priorizada que puedes ejecutar con nosotros o con quien quieras." },
  { icon: Bot, tag: "IA para el equipo", title: "Asistentes de IA conectados a tus herramientas", pain: "“Mi equipo pierde horas en tareas repetitivas y de mucho texto.”", text: "Claude, Gemini o GPT conectados a tu correo, documentos y sistemas como cerebro central que redacta, resume, clasifica y automatiza lo repetitivo." },
  { icon: Plug, tag: "Integraciones", title: "Integración de agentes con CRM, ERP y planillas", pain: "“Copiamos datos a mano de una herramienta a otra.”", text: "Conectamos agentes y automatizaciones a tu CRM, ERP, agenda, pasarelas de pago y planillas para que la información fluya sola." },
  { icon: Code2, tag: "A medida", title: "Plataformas y cotizadores a medida con IA", pain: "“Ninguna herramienta resuelve mi proceso.”", text: "Software propio cuando las alternativas existentes no sirven: cotizadores, catálogos inteligentes, paneles de administración y monitoreo en tiempo real." },
  { icon: MessageCircle, tag: "WhatsApp + IA", title: "Agentes de WhatsApp con IA", pain: "“Se nos escapan ventas por responder tarde.”", text: "Un agente que responde 24/7, califica leads, agenda, envía links de pago y hace seguimiento, con monitoreo de cada conversación." },
  { icon: Megaphone, tag: "Captación", title: "Campañas Meta Ads de clic a WhatsApp", pain: "“Tengo un buen producto, pero no llegan clientes.”", text: "Campañas que llevan leads directo al agente de WhatsApp, medidas por origen para saber qué anuncio vende." },
  { icon: GraduationCap, tag: "Autonomía", title: "Capacitación y traspaso al equipo", pain: "“No quiero depender de un proveedor.”", text: "Cada solución incluye capacitación: tu equipo hace un cambio real antes del cierre y todos los accesos quedan a nombre de tu empresa." },
];

const AiSolutionsSection = () => (
  <section id="soluciones-ia" className="py-16 md:py-24 bg-muted scroll-mt-20">
    <div className="container mx-auto px-4 max-w-6xl">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-heading font-bold uppercase tracking-[0.18em] text-secondary bg-secondary/10 border border-secondary/25 px-4 py-1.5 rounded-full">
            Soluciones de IA aplicada
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mt-5 mb-5 leading-tight">
            De procesos manuales a sistemas con IA que tu equipo domina
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Primero entendemos tu negocio, después implementamos: auditoría, implementación con capacitación y acompañamiento en tus primeros 90 días.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {AI_SOLUTIONS.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 60}>
            <article className="h-full rounded-2xl border border-border bg-card p-6 hover:border-secondary/50 hover:shadow-brand transition-all">
              <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-[10px] font-heading font-bold uppercase tracking-wide text-secondary">{s.tag}</span>
              <h3 className="font-heading font-bold text-base text-foreground mt-1 mb-2 leading-snug">{s.title}</h3>
              <p className="text-xs italic text-primary mb-2">{s.pain}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className={`${BOOKING_TRIGGER_CLASS} inline-flex items-center gap-2 font-heading font-bold text-sm px-7 py-3.5 rounded-full gradient-brand text-primary-foreground shadow-brand hover:opacity-90 transition-all`}>
          Quiero automatizar con IA
        </button>
      </div>
    </div>
  </section>
);

export default AiSolutionsSection;
