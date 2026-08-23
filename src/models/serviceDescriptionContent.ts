// Contenido propio de la página de descripción de cada servicio
// (/servicios/:slug), escrito específicamente para esa página y su
// estructura de 8 secciones. No se reutiliza en las tarjetas, el buscador
// ni en las landing pages de conversión — ese contenido vive en services.ts
// y en las vistas de landing por separado.

export interface ServiceDescriptionContent {
  // 1. Información sobre el servicio
  info: string[];
  // 2. Cobertura
  coverage: string[];
  // 3. Hook
  hook: string;
  // 4. Dolor
  pain: string[];
  // 5. Problema
  problem: string;
  // 6. Solución
  solution: { title: string; desc: string }[];
  // 7. Satisfacción
  satisfaction: string;
  // 8. Llamada a la acción
  ctaQuestion: string;
}

export const SERVICE_DESCRIPTIONS: Record<string, ServiceDescriptionContent> = {
  "arquitectura-ti": {
    info: [
      "Cada negocio corre sobre una base de correo, dominio, hosting y accesos que alguien configuró en algún momento, y que casi nunca queda documentada. Diseñamos esa base desde cero o la ordenamos si ya existe: qué plataforma de correo usas, dónde vive tu dominio, cómo está protegido tu tráfico y quién puede tocar qué.",
      "El resultado no es una lista de herramientas instaladas, es un ecosistema con dueño: sabes exactamente qué tienes, quién lo controla y cómo recuperarlo si algo falla.",
    ],
    coverage: [
      "Correo corporativo en Google Workspace o Microsoft 365, con permisos definidos por rol",
      "Dominio y DNS protegidos con Cloudflare: CDN, SSL, firewall y mitigación DDoS",
      "Hosting dimensionado a tu operación real, no al paquete que te ofrecieron por defecto",
      "Base de datos y modelado SQL cuando tu negocio lo requiere",
      "Manual de acceso: quién tiene qué credencial y cómo se recupera",
    ],
    hook: "Tu tecnología no debería depender de que una sola persona recuerde las contraseñas.",
    pain: [
      "Nadie en tu equipo puede decir con certeza cuántas cuentas, dominios o accesos tiene la empresa.",
      "El correo lo configuró un contratista que ya no trabaja contigo, y nadie más entiende cómo tocarlo.",
      "Cada vez que algo falla (correo, hosting, DNS) hay que buscar a la persona que \"sabe de esto\".",
    ],
    problem:
      "El problema no es la tecnología en sí, es que se fue acumulando sin dueño: cada herramienta la instaló alguien distinto, en un momento distinto, sin un criterio que las conectara. Eso funciona hasta que deja de funcionar, y ahí el costo de arreglarlo en caliente siempre es mayor que el de haberlo ordenado antes.",
    solution: [
      { title: "Auditoría completa", desc: "Revisamos cuentas, dominios, accesos y quién controla cada uno antes de tocar nada." },
      { title: "Configuración con criterio", desc: "Workspace o 365, Cloudflare y hosting elegidos según tu operación real, no un paquete estándar." },
      { title: "Documentación que queda", desc: "Entregamos un mapa claro de tu ecosistema, no conocimiento que se va con quien lo hizo." },
    ],
    satisfaction:
      "Terminas con una infraestructura que cualquier persona de tu equipo, o cualquier proveedor futuro, puede entender en minutos, no en semanas. Accesos claros, tráfico protegido y una base sobre la que se puede construir sin sorpresas.",
    ctaQuestion: "¿Quieres ver en qué estado real está tu infraestructura?",
  },

  "transformacion-digital": {
    info: [
      "Cuando una empresa dice que quiere \"digitalizarse\", casi siempre se refiere a algo mucho más específico: dejar de depender de planillas sueltas, papel y coordinación manual para tareas que ya deberían fluir solas. Empezamos por entender qué procesos concretos te están frenando, no por venderte un software.",
      "No hacemos un cambio de golpe. Diseñamos una hoja de ruta por etapas, para que tu equipo adopte cada herramienta nueva con tiempo de aprenderla, y con la ciberseguridad incorporada desde el primer paso.",
    ],
    coverage: [
      "Diagnóstico del estado tecnológico actual, proceso por proceso",
      "Hoja de ruta de modernización dividida en etapas realistas",
      "Selección e implementación de las herramientas que corresponden a cada etapa",
      "Capacitación del equipo que va a usar cada herramienta nueva",
      "Ciberseguridad incorporada al diseño, no como parche posterior",
    ],
    hook: "Modernizar no es cambiar todo de golpe: es saber qué digitalizar primero.",
    pain: [
      "Sigues coordinando por WhatsApp y planillas lo que debería fluir en un sistema.",
      "Ya intentaste digitalizar algo antes, pero quedó a medio camino porque nadie lo lideró hasta el final.",
      "Tu equipo desconfía de las herramientas nuevas porque nunca hubo un plan claro de transición.",
    ],
    problem:
      "La modernización fallida casi nunca es un problema de la herramienta elegida, es la ausencia de una hoja de ruta. Sin etapas claras, cada intento de digitalizar termina siendo un proyecto aislado que nadie sostiene en el tiempo, y la empresa vuelve a los mismos hábitos manuales apenas baja la presión inicial.",
    solution: [
      { title: "Diagnóstico honesto", desc: "Evaluamos qué procesos realmente dependen de papel o coordinación manual, sin asumir nada." },
      { title: "Etapas, no un big bang", desc: "Cada fase se implementa y se estabiliza antes de avanzar a la siguiente." },
      { title: "Ciberseguridad desde el diseño", desc: "Cada herramienta nueva se incorpora ya protegida, no se parcha después." },
    ],
    satisfaction:
      "Tu equipo termina operando con herramientas que realmente usa, no con software instalado y olvidado. Los procesos que antes dependían de una persona quedan documentados y sostenibles en el tiempo.",
    ctaQuestion: "¿Listo para transformar tu operación por etapas, sin caos?",
  },

  "direccion-ti": {
    info: [
      "Muchas PyMEs y empresas en crecimiento llegan a un punto donde las decisiones tecnológicas ya no pueden quedar en manos de \"quien más sabe de computadores\" en la oficina. Necesitan dirección real, pero contratar un CTO a tiempo completo todavía no es viable.",
      "Actuamos como tu Director de Tecnología externo: definimos roles, procesos y stack tecnológico, y tomamos decisiones estratégicas contigo de forma continua, incluyendo apoyo si necesitas contratar a tu primer equipo TI interno.",
    ],
    coverage: [
      "Definición de roles y responsabilidades del área TI",
      "Procesos internos y políticas tecnológicas documentadas",
      "Selección de un stack tecnológico estandarizado",
      "Dirección estratégica activa y continua, no consultoría puntual",
      "Apoyo en la contratación y onboarding técnico de tu equipo TI",
    ],
    hook: "Un Director de Tecnología, sin el sueldo de tiempo completo.",
    pain: [
      "Las decisiones tecnológicas las toma quien tiene más tiempo libre, no quien tiene más criterio.",
      "Cada área (sistemas, seguridad, datos) avanza por su cuenta, sin nadie que las conecte.",
      "Sabes que necesitas dirección tecnológica, pero un CTO full-time no es realista para tu presupuesto hoy.",
    ],
    problem:
      "Sin una dirección tecnológica clara, cada decisión se toma de forma reactiva: se compra lo que se necesita en el momento, se contrata a quien está disponible, se apaga el incendio que grita más fuerte. El costo de esto no se ve de inmediato, se acumula en decisiones desconectadas que después hay que deshacer.",
    solution: [
      { title: "Dirección estratégica real", desc: "Tomamos decisiones tecnológicas contigo de forma continua, no en una reunión aislada." },
      { title: "Estructura desde cero", desc: "Roles, procesos y stack definidos con criterio, no improvisados." },
      { title: "Apoyo en talento TI", desc: "Te ayudamos a definir el perfil, evaluar candidatos y hacer el onboarding técnico." },
    ],
    satisfaction:
      "Tu empresa deja de tomar decisiones tecnológicas reactivas y empieza a moverse con una dirección clara, con la ventaja de costo de un servicio externo y el compromiso de una dirección activa.",
    ctaQuestion: "¿Necesitas dirección tecnológica sin contratar un CTO todavía?",
  },

  "optimizacion-costos-ti": {
    info: [
      "El gasto en tecnología rara vez se revisa con lupa: se van sumando licencias, contratos de hardware y servicios en la nube sin que nadie pregunte si siguen siendo necesarios o si hay una opción más eficiente.",
      "Auditamos tu hardware, tus licencias de software y tu infraestructura en la nube para mostrarte, con números concretos, dónde estás pagando de más y qué hacer al respecto.",
    ],
    coverage: [
      "Auditoría de hardware con cotización de alternativas",
      "Ensamblado de equipos a medida (ahorro real de 30% a 50% frente a equipo de fábrica)",
      "Auditoría de licencias: qué pagas y realmente usas",
      "Evaluación de infraestructura en la nube según uso real",
      "Plan de ahorro priorizado, con cifras concretas",
    ],
    hook: "Ahorrar entre 30% y 50% en tecnología, sin perder rendimiento.",
    pain: [
      "Pagas licencias de software que ni siquiera recuerdas para qué sirven.",
      "Estás por comprar equipos nuevos sin comparar si hay una opción igual de buena y más barata.",
      "Nadie ha revisado tu infraestructura en la nube para confirmar si el plan que pagas corresponde a lo que realmente usas.",
    ],
    problem:
      "El gasto tecnológico ineficiente casi nunca es una sola decisión mala, es la acumulación de pequeñas decisiones tomadas sin comparar alternativas. Cada licencia, cada contrato de hardware, cada plan cloud se sumó en su momento sin revisar si seguía teniendo sentido, y ese acumulado termina siendo un porcentaje importante del gasto operativo.",
    solution: [
      { title: "Auditoría con números", desc: "Medimos exactamente qué estás gastando y en qué, sin suposiciones." },
      { title: "Alternativas reales", desc: "Cotizamos y, si aplica, ensamblamos equipos a medida con el mismo rendimiento a menor costo." },
      { title: "Plan priorizado", desc: "Entregamos las acciones ordenadas por impacto en el ahorro, no una lista genérica." },
    ],
    satisfaction:
      "Sales con un plan concreto de cuánto puedes ahorrar y en qué, sin sacrificar el rendimiento ni la seguridad que tu operación necesita.",
    ctaQuestion: "¿Quieres saber cuánto estás pagando de más?",
  },

  "presencia-digital": {
    info: [
      "Un sitio web no sirve de mucho si nadie lo encuentra en Google, o si transmite menos seriedad de la que tu negocio realmente tiene. Construimos tu presencia digital pensando en esos dos problemas al mismo tiempo: que exista y que funcione.",
      "Eso incluye el sitio, el SEO técnico desde el primer día, tu Perfil de Negocio en Google Maps y un dominio propio con correo corporativo, no solo una página bonita sin nada detrás.",
    ],
    coverage: [
      "Sitio web corporativo, landing page o portafolio, según tu necesidad",
      "SEO técnico: Search Console, velocidad de carga, estructura y metaetiquetas",
      "Perfil de Negocio en Google y Maps configurado",
      "Dominio propio y correo corporativo",
      "Hosting sobre Cloudflare y Hostinger",
    ],
    hook: "Que te encuentren en Google, no que existas en internet.",
    pain: [
      "Buscas tu propio negocio en Google y no aparece, o aparece mal.",
      "Tu sitio web, si tienes uno, no transmite la seriedad que tu negocio realmente tiene.",
      "No tienes correo con tu propio dominio, y eso te resta credibilidad frente a clientes o licitaciones.",
    ],
    problem:
      "Tener un sitio web y tener presencia digital no es lo mismo. Un sitio sin SEO técnico, sin Perfil de Negocio configurado y sin dominio propio es, en la práctica, invisible: está online, pero no genera el efecto que debería tener sobre la confianza y las conversiones.",
    solution: [
      { title: "SEO desde el día uno", desc: "No es un servicio aparte que se cobra después: va incluido en la construcción del sitio." },
      { title: "Identidad propia", desc: "Dominio y correo corporativo que refuerzan la seriedad de tu marca frente a clientes." },
      { title: "Diseñado para convertir", desc: "El sitio se piensa para generar contactos reales, no solo para \"estar\" en internet." },
    ],
    satisfaction:
      "Terminas con presencia digital completamente operativa: te encuentran en Google, tu Perfil de Negocio está activo, y tu dominio y correo transmiten la seriedad real de tu negocio.",
    ctaQuestion: "¿Listo para que te encuentren cuando te buscan?",
  },

  "desarrollo-software": {
    info: [
      "Hay un momento en que las planillas de Excel dejan de alcanzar: se rompen con el volumen, nadie entiende todas las versiones, y cada proceso nuevo significa una planilla más. Ahí es cuando construir un sistema propio deja de ser un lujo.",
      "Desarrollamos e-commerce, CRMs, gestores de eventos o el sistema interno que tu operación necesite, con base de datos, panel de administración y versión móvil, listo para producción desde el primer día.",
    ],
    coverage: [
      "Análisis y diseño funcional del proceso real que hoy manejas",
      "Desarrollo full-stack (base de datos, backend y frontend)",
      "Panel de administración para que tu equipo lo use sin depender de un programador",
      "Versión móvil instalable (PWA)",
      "Despliegue en producción, no un prototipo",
    ],
    hook: "Cuando Excel ya no alcanza, se construye un sistema propio.",
    pain: [
      "Gestionas clientes, ventas o inventario en planillas que se rompen cuando el negocio crece.",
      "Cada proceso nuevo significa otra planilla más, y ya nadie las entiende todas.",
      "Dependes de herramientas genéricas que no calzan del todo con tu operación real.",
    ],
    problem:
      "Cuando un negocio crece sobre planillas, el problema no es visible al principio, funciona, aunque lento. Aparece cuando el volumen de datos, personas y procesos supera lo que una hoja de cálculo puede sostener sin errores, y ahí el costo de seguir postergando el sistema propio empieza a superar el costo de construirlo.",
    solution: [
      { title: "A la medida de tu proceso", desc: "No adaptamos tu negocio a un software genérico: construimos según cómo realmente operas." },
      { title: "Listo para producción", desc: "Entregamos el sistema funcionando, no una demo que nunca se termina de usar." },
      { title: "Panel para tu equipo", desc: "Pensado para que lo use quien no programa, sin depender de nosotros para cada cambio menor." },
    ],
    satisfaction:
      "Terminas con un sistema propio funcionando en producción, con base de datos, panel de administración y versión móvil, construido para tu proceso real, no para uno genérico.",
    ctaQuestion: "¿Tu negocio ya superó lo que Excel puede sostener?",
  },

  "ciberseguridad": {
    info: [
      "La ciberseguridad real combina dos frentes que casi siempre se atienden por separado: los controles técnicos (firewalls, backups, accesos) y la formación de las personas, que es por donde entra la mayoría de los ataques.",
      "Partimos con una auditoría técnica de tus controles actuales y formamos a tu equipo contra phishing e ingeniería social. Si tu negocio lo requiere, sumamos cumplimiento normativo, ciberseguridad industrial OT/ICS y módulos diferenciales de protección infantil y de género.",
    ],
    coverage: [
      "Auditoría técnica de controles de seguridad existentes",
      "Formación de equipo contra phishing e ingeniería social",
      "Cumplimiento ISO 27001 y Ley 19.628",
      "Ciberseguridad industrial OT/ICS para entornos productivos",
      "Módulos diferenciales: seguridad infantil y seguridad de género",
    ],
    hook: "La mayoría de los ataques entran por las personas, no por la tecnología.",
    pain: [
      "Cualquiera de tu equipo podría caer en un correo de phishing bien armado, y hoy nadie está entrenado para detectarlo.",
      "No sabes con certeza si cumples con la Ley 19.628 o estándares como ISO 27001.",
      "Tienes controles técnicos instalados, pero cero formación humana frente a ingeniería social.",
    ],
    problem:
      "Instalar antivirus y firewall da una sensación de seguridad que casi nunca corresponde a la realidad: la mayoría de los incidentes no rompen la tecnología, engañan a una persona. Sin formación real del equipo, cualquier control técnico tiene una puerta abierta que nadie está vigilando.",
    solution: [
      { title: "Formamos personas", desc: "No solo instalamos software: entrenamos a tu equipo para detectar el engaño antes de que ocurra." },
      { title: "Cumplimiento real", desc: "ISO 27001 y Ley 19.628 trabajados como marco real, no como checklist genérica." },
      { title: "Módulos poco comunes", desc: "Seguridad infantil y de género, disponibles cuando tu contexto lo requiere." },
    ],
    satisfaction:
      "Terminas con una postura de seguridad real: controles técnicos activos, un equipo formado para detectar ataques de ingeniería social, y un plan documentado que se puede auditar.",
    ctaQuestion: "¿Sabes si tu equipo caería en un ataque de phishing hoy?",
  },

  "vigilancia-innovacion": {
    info: [
      "Enterarse de una tendencia relevante cuando la competencia ya la implementó no es información, es historia. La vigilancia tecnológica sirve para tomar decisiones antes de que la ventaja de ser el primero desaparezca.",
      "Monitoreamos de forma continua las tendencias de tu sector, los movimientos digitales de tu competencia y los cambios regulatorios que te pueden afectar. Es un servicio de retainer con entrega mensual: recibes un informe estructurado, no una alerta suelta.",
    ],
    coverage: [
      "Informe mensual de tendencias del sector",
      "Monitoreo de movimientos digitales de la competencia",
      "Alertas de seguridad y cambios regulatorios",
      "Identificación de tecnologías emergentes aplicables a tu negocio",
      "Recomendaciones de implementación priorizadas por impacto",
    ],
    hook: "Decide con información estructurada, no con la opinión de alguien del equipo.",
    pain: [
      "Te enteras de que existía una herramienta o tendencia relevante cuando ya perdiste la ventaja de ser el primero.",
      "Las decisiones tecnológicas se toman con la opinión de quien está disponible, no con inteligencia real.",
      "No tienes un radar que te avise de cambios regulatorios o riesgos emergentes en tu sector.",
    ],
    problem:
      "La falta de vigilancia tecnológica no se nota mes a mes, se nota cuando la competencia ya capturó una ventaja que a ti te tomó meses detectar. El costo real no es no saber, es enterarse tarde de algo que sí importaba.",
    solution: [
      { title: "Entrega mensual estructurada", desc: "Un informe con criterio, no una alerta aislada cuando ya es tarde." },
      { title: "Criterio de costo real", desc: "Identificamos tecnologías emergentes evaluando si de verdad te conviene adoptarlas." },
      { title: "Alertas regulatorias", desc: "Te avisamos de riesgos normativos y de seguridad antes de que se conviertan en un problema." },
    ],
    satisfaction:
      "Cada decisión tecnológica se apoya en información estructurada y actualizada mes a mes, no en la intuición de quien tuvo tiempo de investigar.",
    ctaQuestion: "¿Quieres decidir con inteligencia tecnológica real?",
  },

  "ia-corporativa": {
    info: [
      "La mayoría de las empresas ya probaron ChatGPT genérico, pero eso no es lo mismo que tener IA conectada de verdad a su negocio: a sus documentos, sus procesos y su forma de operar.",
      "Diagnosticamos qué procesos son realmente automatizables, implementamos agentes con memoria y acceso a tus documentos, y automatizamos flujos con herramientas como N8N y ManyChat, sumando clones digitales cuando aplica.",
    ],
    coverage: [
      "Diagnóstico de procesos automatizables",
      "Agentes de IA con memoria y acceso a documentos del negocio (RAG)",
      "Biblioteca corporativa de prompts reutilizable por el equipo",
      "Automatización no-code con N8N y ManyChat",
      "Clones digitales con HeyGen y ElevenLabs para ventas, soporte o contenido",
    ],
    hook: "Un chatbot genérico no es lo mismo que IA conectada a tu negocio.",
    pain: [
      "Tu equipo responde manualmente preguntas repetitivas que un agente de IA podría resolver solo.",
      "Sabes que la IA podría ahorrarte horas de trabajo, pero no sabes por dónde empezar.",
      "Has probado herramientas de IA sueltas, pero nada conectado realmente a tus procesos.",
    ],
    problem:
      "El error más común no es no usar IA, es usarla de forma desconectada: probar una herramienta aislada sin que hable con los documentos, procesos o sistemas reales del negocio. Así la IA se queda en experimento y nunca se convierte en ahorro de tiempo medible.",
    solution: [
      { title: "Conectada a tu negocio", desc: "Los agentes acceden a tus documentos reales, no responden en el vacío como un chatbot genérico." },
      { title: "Biblioteca reutilizable", desc: "Prompts corporativos que todo tu equipo puede usar, no conocimiento que se queda en una persona." },
      { title: "Priorizado por impacto", desc: "Automatizamos primero lo que más tiempo te ahorra, no lo que está de moda." },
    ],
    satisfaction:
      "Terminas con procesos clave automatizados por agentes de IA conectados a tu negocio real, una biblioteca de prompts para todo el equipo, y clones digitales operativos si tu caso lo requiere.",
    ctaQuestion: "¿Por dónde empezarías a automatizar con IA en tu negocio?",
  },

  "integracion-plataformas": {
    info: [
      "Cuando una empresa ya invirtió en varias plataformas (CRM, ERP, e-commerce, contabilidad) pero ninguna se habla con la otra, el problema no es falta de herramientas, es falta de conexión entre ellas.",
      "Conectamos tus sistemas existentes vía APIs y middleware, y en paralelo consolidamos tus datos dispersos en una base única y confiable. El resultado: tus plataformas conversan entre sí y tus datos dejan de vivir en versiones distintas por área.",
    ],
    coverage: [
      "Mapeo de plataformas existentes y sus flujos de datos",
      "Integraciones vía API REST, webhooks y middleware (N8N, Zapier, Make)",
      "Auditoría de fuentes de datos dispersas",
      "Consolidación en una base de datos única mediante procesos ETL",
      "Documentación técnica y monitoreo de las integraciones",
    ],
    hook: "Que tus sistemas se hablen, y tus datos vivan en un solo lugar.",
    pain: [
      "Cargas los mismos datos a mano en dos o tres sistemas distintos porque no se comunican entre sí.",
      "Cada área tiene \"su\" versión de los datos, y nadie confía del todo en los reportes.",
      "Ya invertiste en varias plataformas, pero cada una funciona como una isla separada.",
    ],
    problem:
      "Cuando cada plataforma opera de forma aislada, la empresa termina pagando dos veces por el mismo dato: una vez para cargarlo, otra para corregirlo cuando alguna versión no coincide. Ese trabajo invisible de reconciliar información es exactamente lo que una integración bien hecha elimina.",
    solution: [
      { title: "Protegemos tu inversión", desc: "No reescribimos tus sistemas actuales, los conectamos y consolidamos." },
      { title: "Una sola fuente de verdad", desc: "Terminas con datos consolidados, no versiones distintas del mismo número por área." },
      { title: "Automatizado y documentado", desc: "Los procesos de carga quedan automáticos, no dependen de que alguien copie y pegue cada semana." },
    ],
    satisfaction:
      "Tus plataformas quedan conectadas operando como un solo ecosistema, con datos consolidados en una base limpia y consultable, sin trabajo manual de copiado.",
    ctaQuestion: "¿Cuántas veces a la semana cargas el mismo dato dos veces?",
  },

  "automatizacion-procesos": {
    info: [
      "Cada empresa tiene procesos que ya están definidos, pero se ejecutan a mano: la misma tarea repetida decenas de veces, con el riesgo de error humano que eso implica.",
      "Levantamos tus procesos críticos, identificamos los cuellos de botella y automatizamos el flujo completo con N8N, ManyChat, Power Automate o scripts a medida, con notificaciones, reportes y trazabilidad de cada ejecución.",
    ],
    coverage: [
      "Levantamiento y mapeo de procesos críticos",
      "Rediseño del flujo antes de automatizar (no se automatiza el desorden)",
      "Implementación con N8N, Power Automate o herramientas a medida",
      "Notificaciones, reportes y alertas automáticas",
      "Documentación y capacitación del equipo que opera el flujo",
    ],
    hook: "No automatizamos el desorden, primero lo rediseñamos.",
    pain: [
      "Tu equipo repite manualmente la misma tarea decenas de veces por semana.",
      "Los errores humanos en procesos repetitivos ya te han costado dinero o reclamos.",
      "Nadie tiene tiempo de rediseñar el proceso, así que sigue funcionando \"como siempre\".",
    ],
    problem:
      "Automatizar un proceso mal diseñado solo hace que el error se repita más rápido. El verdadero ahorro de tiempo y reducción de errores viene de rediseñar el flujo antes de automatizarlo, no de instalar una herramienta sobre un proceso que nadie revisó.",
    solution: [
      { title: "Medimos el resultado", desc: "No \"automatizamos y listo\": medimos la reducción real de tiempos y errores." },
      { title: "Queda documentado", desc: "Cada flujo automatizado se explica, para que tu equipo entienda cómo funciona." },
      { title: "Tu equipo puede ajustarlo", desc: "Capacitamos para que no dependas solo de nosotros para modificar una automatización." },
    ],
    satisfaction:
      "Terminas con procesos clave automatizados, reducción medible de tiempos y errores, y trazabilidad completa de cada ejecución.",
    ctaQuestion: "¿Qué tarea repite tu equipo todas las semanas sin necesidad?",
  },

  "dashboards-kpi": {
    info: [
      "Tomar decisiones con el reporte de la semana pasada, armado a mano por cada área en un formato distinto, no es tener visibilidad: es reconstruir el panorama cada vez que lo necesitas.",
      "Definimos contigo los indicadores que realmente importan para tu negocio, conectamos tus fuentes de datos reales y construimos dashboards interactivos en Power BI, Looker Studio o Metabase, con capacitación para que tu equipo lo use a diario.",
    ],
    coverage: [
      "Definición de KPIs por área, según tu negocio",
      "Conexión a fuentes de datos reales (bases de datos, planillas, APIs, SaaS)",
      "Dashboards interactivos en Power BI, Looker Studio o Metabase",
      "Alertas y reportes automáticos",
      "Capacitación al equipo ejecutivo para uso diario",
    ],
    hook: "Decisiones con datos de hoy, no con el reporte de la semana pasada.",
    pain: [
      "Tomas decisiones importantes con datos que ya tienen días de atraso.",
      "Cada área te entrega sus números en un formato distinto, y armar el panorama completo te toma horas.",
      "No tienes forma de ver, en un solo lugar, cómo va realmente tu negocio.",
    ],
    problem:
      "Sin un tablero centralizado, cada reporte ejecutivo es en realidad un proyecto de reconstrucción manual: pedir números a cada área, cuadrarlos, formatearlos. Ese tiempo no se invierte en decidir, se pierde en juntar la información para poder decidir.",
    solution: [
      { title: "KPIs elegidos contigo", desc: "No es una plantilla genérica, son los indicadores que de verdad importan a tu negocio." },
      { title: "Datos en tiempo real", desc: "Conectado a tus fuentes reales, con actualización automática, no copiado a mano." },
      { title: "Capacitación incluida", desc: "Tu equipo ejecutivo aprende a usar el tablero a diario, no a mirarlo una vez al mes." },
    ],
    satisfaction:
      "Terminas con un tablero ejecutivo en tiempo real, con los KPIs clave de tu negocio accesibles desde cualquier dispositivo, sin reconstruir reportes a mano.",
    ctaQuestion: "¿Cuánto tiempo pierde tu equipo armando reportes cada semana?",
  },
};
