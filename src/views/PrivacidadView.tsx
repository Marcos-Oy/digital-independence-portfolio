import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SiteNavbarView from "@/views/SiteNavbarView";
import SiteFooterView from "@/views/SiteFooterView";
import PageMeta from "@/views/shared/PageMeta";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-heading font-bold text-lg text-foreground mb-3">{title}</h2>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </div>
);

const PrivacidadView = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Política de Privacidad y Términos de Uso | Independencia Digital"
        description="Cómo Independencia Digital SpA recopila, usa y protege tus datos personales cuando visitas el sitio o completas un formulario de contacto."
        path="/privacidad"
      />

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
              <strong>Independencia Digital SpA</strong>, RUT <strong>78.430.447-7</strong>, consultora
              tecnológica con domicilio en Santiago, Región Metropolitana, Chile. Para efectos de esta
              política, somos el "responsable del tratamiento" de los datos personales que recopilamos a
              través de este sitio.
            </p>
            <p>
              Ante cualquier duda sobre esta política, el tratamiento de tus datos o para ejercer tus
              derechos, puedes escribirnos a{" "}
              <a href="mailto:contacto@independenciadigital.cl" className="text-primary hover:underline">
                contacto@independenciadigital.cl
              </a>
              . Esta misma casilla concentra hoy las funciones de contacto para materias de privacidad de
              la empresa.
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
              Si avanzas y te conviertes en <strong>cliente</strong>, recopilamos además los datos
              necesarios para prestar y administrar el servicio contratado: datos de identificación
              (personales o de la persona jurídica que representas, como razón social y RUT), datos de
              contacto, y los antecedentes propios del proyecto en el que trabajamos contigo. Más detalle en
              la sección 4.
            </p>
            <p>
              No recopilamos datos sensibles (salud, origen étnico, afiliación política o sindical, etc.) ni
              solicitamos esa información en ningún formulario de este sitio.
            </p>
          </Section>

          <Section title="3. Para qué usamos tus datos y con qué base legal">
            <p>Usamos los datos que nos entregas para:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Contactarte, coordinar tu diagnóstico gratuito y responder tus preguntas — en base a tu{" "}
                <strong>consentimiento</strong>, que otorgas voluntariamente al completar el formulario.
              </li>
              <li>
                Elaborar y enviarte propuestas comerciales cuando corresponda — en base a tu{" "}
                <strong>consentimiento</strong> y a las <strong>medidas precontractuales</strong> que
                solicitas al pedir una propuesta.
              </li>
              <li>
                Si eres cliente, administrar y dar seguimiento a tu proyecto a través de nuestro sistema
                interno de gestión (ERP) — en base a la <strong>ejecución del contrato de servicios</strong>{" "}
                que suscribimos contigo.
              </li>
            </ul>
            <p>
              Entregar tus datos es siempre <strong>voluntario</strong>. Si no completas el formulario de
              contacto no podremos comunicarnos contigo ni avanzar en tu diagnóstico, pero eso no tiene
              ninguna otra consecuencia para ti. No tomamos decisiones automatizadas ni elaboramos perfiles
              a partir de tus datos: toda evaluación de tu caso la hace una persona de nuestro equipo.
            </p>
            <p>
              No vendemos, arrendamos ni compartimos tus datos personales con terceros para fines
              publicitarios ajenos a Independencia Digital.
            </p>
          </Section>

          <Section title="4. Formularios y proveedor externo de CRM">
            <p>
              El formulario de contacto de este sitio es gestionado a través de un{" "}
              <strong>proveedor externo de CRM</strong>, una plataforma de gestión comercial que utilizamos
              como encargado de tratamiento. Cuando completas el formulario, tus datos se almacenan en los
              servidores de ese proveedor para que podamos gestionar el contacto contigo.
            </p>
            <p>
              Nuestro proveedor externo de CRM cuenta con infraestructura fuera de Chile, por lo que el
              tratamiento de tus datos puede implicar una transferencia internacional. Cuenta con sus
              propias políticas de seguridad y privacidad, que puedes solicitarnos si lo necesitas. Solo
              utilizamos esta herramienta para la gestión de contactos comerciales generados desde nuestros
              formularios, no para fines distintos.
            </p>
          </Section>

          <Section title="5. Clientes: datos gestionados en nuestro sistema propio (ERP)">
            <p>
              Si contratas alguno de nuestros servicios, tus datos —personales o de la empresa u
              organización que representas— pasan a administrarse en nuestro <strong>ERP propio</strong>,
              un sistema interno de gestión que usamos exclusivamente para planificar, ejecutar y dar
              seguimiento a tu proyecto (por ejemplo: datos de contacto, información de facturación,
              hitos y comunicaciones del proyecto). A diferencia del formulario de contacto inicial, esta
              información no se procesa en nuestro proveedor externo de CRM: queda en un sistema propio, con acceso restringido a
              las personas de Independencia Digital que trabajan directamente en tu proyecto.
            </p>
          </Section>

          <Section title="6. Uso de cookies">
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
              nuestro proveedor externo de CRM, para recordar si cerraste su ventana emergente y no volver
              a mostrarla de inmediato. No se utiliza con fines de seguimiento publicitario.
            </p>
          </Section>

          <Section title="7. Cuánto tiempo conservamos tus datos">
            <p>
              Conservamos tus datos de contacto solo mientras exista una relación comercial activa o
              potencial contigo, o hasta que solicites su eliminación. Si no hay interacción durante un
              periodo prolongado, tus datos son eliminados de nuestros registros internos.
            </p>
          </Section>

          <Section title="8. Tus derechos (ARCOP) y cómo ejercerlos">
            <div id="derechos" className="scroll-mt-24" />
            <p>
              Actualmente estos derechos están reconocidos por la Ley N° 19.628 sobre Protección de la Vida
              Privada, y desde el <strong>1 de diciembre de 2026</strong> pasan a estar regulados de forma
              más completa por la nueva <strong>Ley N° 21.719 de Protección de Datos Personales</strong>,
              que crea la Agencia de Protección de Datos Personales y moderniza el marco chileno en esta
              materia. Ya estamos alineando nuestras prácticas con esta nueva ley.
            </p>
            <p>Sobre tus datos personales, en cualquier momento puedes solicitarnos:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Acceso:</strong> te enviamos todos los datos que tenemos sobre ti (o tu empresa).</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o desactualizados.</li>
              <li><strong>Cancelación:</strong> eliminar todos tus datos de nuestros registros, tanto de nuestro proveedor externo de CRM como de nuestro ERP interno.</li>
              <li><strong>Oposición:</strong> oponerte a que usemos tus datos para un fin determinado.</li>
              <li><strong>Portabilidad:</strong> solicitar una copia de tus datos en un formato manejable para trasladarlos a otro proveedor.</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos —incluida la solicitud de una copia completa de tus
              datos— escríbenos a{" "}
              <a href="mailto:contacto@independenciadigital.cl" className="text-primary hover:underline">
                contacto@independenciadigital.cl
              </a>{" "}
              indicando tu nombre (o razón social) y el derecho que deseas ejercer. No cobramos nada por
              atender esta solicitud. Nos comprometemos a responder dentro de un plazo máximo de{" "}
              <strong>20 días hábiles</strong> desde su recepción, sin perjuicio de los plazos que
              establezca la normativa vigente en cada momento.
            </p>
            <p>
              Si consideras que no hemos dado respuesta adecuada a tu solicitud, tienes derecho a reclamar
              directamente ante la <strong>Agencia de Protección de Datos Personales</strong> (una vez que
              entre en funciones) o ante los tribunales de justicia competentes.
            </p>
          </Section>

          <Section title="9. Seguridad de la información">
            <p>
              Aplicamos medidas técnicas y organizativas razonables para proteger tus datos personales
              contra accesos no autorizados, pérdida o uso indebido. Sin embargo, ningún sistema de
              transmisión o almacenamiento de datos es 100% seguro, por lo que no podemos garantizar
              seguridad absoluta.
            </p>
          </Section>

          <Section title="10. Cambios a esta política">
            <p>
              Podemos actualizar esta política para reflejar cambios normativos (como la entrada en vigencia
              de la Ley 21.719) o cambios en cómo operamos. Publicaremos cualquier actualización en esta
              misma página con su fecha de vigencia.
            </p>
          </Section>

          <Section title="11. Contacto">
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
