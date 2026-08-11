import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SiteNavbarView from "@/views/SiteNavbarView";
import SiteFooterView from "@/views/SiteFooterView";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-heading font-bold text-lg text-foreground mb-3">{title}</h2>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </div>
);

const PrivacidadView = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbarView />

      <section className="gradient-hero pt-28 pb-14 md:pt-36 md:pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4 leading-tight tracking-tight">
            Política de Privacidad y Términos de Uso
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Cómo Independencia Digital SpA recopila, usa y protege tus datos personales cuando visitas
            este sitio o completas alguno de nuestros formularios de contacto.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            Última actualización: agosto de 2026.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Section title="1. Quiénes somos">
            <p>
              Este sitio (<strong>independenciadigital.cl</strong>) es operado por{" "}
              <strong>Independencia Digital SpA</strong>, consultora tecnológica chilena. Para efectos de
              esta política, somos el "responsable del tratamiento" de los datos personales que recopilamos
              a través de este sitio.
            </p>
            <p>
              Ante cualquier duda sobre esta política o el tratamiento de tus datos, puedes escribirnos a{" "}
              <a href="mailto:contacto@independenciadigital.cl" className="text-primary hover:underline">
                contacto@independenciadigital.cl
              </a>
              .
            </p>
          </Section>

          <Section title="2. Qué datos recopilamos">
            <p>
              Solo recopilamos datos personales cuando tú decides entregarlos voluntariamente, por ejemplo
              al completar el formulario de "Agendar diagnóstico" en este sitio. Los campos que solicitamos
              son:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Teléfono de contacto</li>
              <li>Un mensaje opcional describiendo tu consulta o necesidad</li>
            </ul>
            <p>
              No recopilamos datos sensibles (salud, origen étnico, afiliación política o sindical, etc.) ni
              solicitamos esa información en ningún formulario de este sitio.
            </p>
          </Section>

          <Section title="3. Para qué usamos tus datos">
            <p>Usamos los datos que nos entregas exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Contactarte y coordinar tu diagnóstico o consulta gratuita.</li>
              <li>Responder tus preguntas sobre nuestros servicios.</li>
              <li>Elaborar y enviarte propuestas comerciales cuando corresponda.</li>
            </ul>
            <p>
              No vendemos, arrendamos ni compartimos tus datos personales con terceros para fines
              publicitarios ajenos a Independencia Digital.
            </p>
          </Section>

          <Section title="4. Formularios y proveedor externo (Systeme.io)">
            <p>
              El formulario de contacto de este sitio es gestionado a través de{" "}
              <strong>Systeme.io</strong>, una plataforma externa de gestión comercial (CRM) que utilizamos
              como encargado de tratamiento. Cuando completas el formulario, tus datos se almacenan en los
              servidores de Systeme.io para que podamos gestionar el contacto contigo.
            </p>
            <p>
              Systeme.io es un proveedor con infraestructura fuera de Chile, por lo que el tratamiento de
              tus datos puede implicar una transferencia internacional. Systeme.io cuenta con sus propias
              políticas de seguridad y privacidad, disponibles en{" "}
              <a
                href="https://systeme.io/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                systeme.io/privacy-policy
              </a>
              . Solo utilizamos esta herramienta para la gestión de contactos comerciales generados desde
              nuestros formularios, no para fines distintos.
            </p>
          </Section>

          <Section title="5. Uso de cookies">
            <p>
              Este sitio <strong>no utiliza cookies propias de seguimiento o publicidad</strong>. Para
              recordar tus preferencias mientras navegas (por ejemplo, el tema claro u oscuro, o si ya viste
              el mensaje de bienvenida) usamos almacenamiento local del navegador (
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">localStorage</code> /{" "}
              <code className="text-xs bg-muted px-1.5 py-0.5 rounded">sessionStorage</code>), que no se
              envía a ningún servidor y permanece únicamente en tu dispositivo.
            </p>
            <p>
              La única cookie presente en el sitio es técnica y la genera el widget de formulario de
              Systeme.io, para recordar si cerraste su ventana emergente y no volver a mostrarla de
              inmediato. No se utiliza con fines de seguimiento publicitario.
            </p>
          </Section>

          <Section title="6. Cuánto tiempo conservamos tus datos">
            <p>
              Conservamos tus datos de contacto solo mientras exista una relación comercial activa o
              potencial contigo, o hasta que solicites su eliminación. Si no hay interacción durante un
              periodo prolongado, tus datos son eliminados de nuestros registros internos.
            </p>
          </Section>

          <Section title="7. Tus derechos (ARCO+)">
            <p>
              Actualmente estos derechos están reconocidos por la Ley N° 19.628 sobre Protección de la Vida
              Privada, y desde el <strong>1 de diciembre de 2026</strong> pasan a estar regulados de forma
              más completa por la nueva <strong>Ley N° 21.719 de Protección de Datos Personales</strong>,
              que crea la Agencia de Protección de Datos Personales y moderniza el marco chileno en esta
              materia. Ya estamos alineando nuestras prácticas con esta nueva ley.
            </p>
            <p>Sobre tus datos personales, en cualquier momento puedes solicitarnos:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Acceso:</strong> saber qué datos tuyos tenemos.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o desactualizados.</li>
              <li><strong>Cancelación:</strong> eliminar tus datos de nuestros registros.</li>
              <li><strong>Oposición:</strong> oponerte a que usemos tus datos para un fin determinado.</li>
              <li><strong>Portabilidad:</strong> solicitar una copia de tus datos en un formato manejable.</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, escríbenos a{" "}
              <a href="mailto:contacto@independenciadigital.cl" className="text-primary hover:underline">
                contacto@independenciadigital.cl
              </a>{" "}
              indicando tu nombre y el derecho que deseas ejercer. Responderemos dentro de un plazo
              razonable.
            </p>
          </Section>

          <Section title="8. Seguridad de la información">
            <p>
              Aplicamos medidas técnicas y organizativas razonables para proteger tus datos personales
              contra accesos no autorizados, pérdida o uso indebido. Sin embargo, ningún sistema de
              transmisión o almacenamiento de datos es 100% seguro, por lo que no podemos garantizar
              seguridad absoluta.
            </p>
          </Section>

          <Section title="9. Cambios a esta política">
            <p>
              Podemos actualizar esta política para reflejar cambios normativos (como la entrada en vigencia
              de la Ley 21.719) o cambios en cómo operamos. Publicaremos cualquier actualización en esta
              misma página con su fecha de vigencia.
            </p>
          </Section>

          <Section title="10. Contacto">
            <p>
              Si tienes preguntas sobre esta política o el tratamiento de tus datos personales, escríbenos a{" "}
              <a href="mailto:contacto@independenciadigital.cl" className="text-primary hover:underline">
                contacto@independenciadigital.cl
              </a>
              .
            </p>
          </Section>
        </div>
      </section>

      <SiteFooterView />
    </div>
  );
};

export default PrivacidadView;
