import { Link } from "react-router-dom";
import { useCookieNoticeController } from "@/controllers/useCookieNoticeController";

interface CookieNoticeViewProps {
  waitForWelcomeModal?: boolean;
}

const CookieNoticeView = ({ waitForWelcomeModal = true }: CookieNoticeViewProps) => {
  const { visible, dismiss } = useCookieNoticeController(waitForWelcomeModal);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[110] p-4 animate-fade-in-up">
      <div className="mx-auto max-w-2xl bg-card border border-border rounded-2xl shadow-card-hover px-5 py-4 flex flex-col sm:flex-row items-center gap-3">
        <p className="text-xs text-muted-foreground leading-relaxed flex-1 text-center sm:text-left">
          Este sitio no usa cookies propias de seguimiento. Solo guardamos tus preferencias (como el tema
          claro/oscuro) en tu navegador. Los datos que envías por nuestro formulario de contacto se
          gestionan a través de un proveedor externo de CRM.{" "}
          <Link to="/privacidad" className="text-primary font-semibold hover:underline">
            Ver política de privacidad
          </Link>
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 gradient-brand text-primary-foreground font-heading font-semibold text-xs px-4 py-2 rounded-full shadow-brand hover:opacity-90 active:scale-[0.97] transition-all duration-200"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default CookieNoticeView;
