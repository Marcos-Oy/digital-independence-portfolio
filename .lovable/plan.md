
# Reestructuración del sitio — Independencia Digital SpA

El sitio actual está armado alrededor de una **mentoría con Plan 360 de 5 fases** dirigida a PyMEs. El nuevo modelo es una **consultora TI** que ofrece **7 servicios agrupados en 5 áreas**, dirigida a **4 segmentos** (Emprendedores, PyMEs, Grandes Empresas, Sector Público), con una promesa de **90 días**.

Esto obliga a rehacer la arquitectura del sitio, no solo cambiar copy.

## Nueva arquitectura de información

```text
/ (Home)
├── Hero: nueva promesa 90 días
├── Quiénes somos (consultora TI)
├── Segmentos a los que servimos (4)
├── Áreas de servicio (5) → cada una linkea a su página
├── Reseñas (carrusel automático ya implementado)
├── Logos tecnológicos
└── CTA contacto / agendar diagnóstico

/segmentos/emprendedores
/segmentos/pymes
/segmentos/empresas
/segmentos/sector-publico

/servicios/arquitectura-ti
/servicios/transformacion-digital
/servicios/direccion-ti          (CTO externo + talento TI)
/servicios/optimizacion-costos   (Reducción costos + soporte gestionado)
/servicios/presencia-digital     (web + SEO + Google Maps)
/servicios/desarrollo-software
/servicios/marketing-digital
/servicios/ciberseguridad
/servicios/vigilancia-innovacion
/servicios/ia-corporativa

/fundador  (se mantiene, actualizado al nuevo posicionamiento)
/contacto  (formulario de diagnóstico / cotización)
```

## Cambios concretos

**Home (`HomePage.tsx`)**
- Hero nuevo: titular sobre "diseñamos, construimos y dirigimos tu infraestructura tecnológica" + subtítulo de 90 días.
- Sustituir `PlanSection` (Plan 360 / 5 fases) por nueva **sección "5 áreas de servicio"** con tarjetas que linkean a cada servicio.
- Nueva sección **"4 segmentos"** (Emprendedores / PyMEs / Grandes Empresas / Sector Público) con descripción corta y ticket.
- `AboutSection` reescrito: "consultora TI chilena" en vez de mentor.
- `ServicesSection` actual ("Asesorías" + "Agencia Digital") se reemplaza por la grilla completa de 7 servicios.
- Mantener: `ReviewsSection`, `SafeTechLogosCarousel`, `WhatsAppButton`, `ChatBot`.

**Navbar**
- Menú: Inicio · Servicios (dropdown con los 7) · Segmentos (dropdown con los 4) · Fundador · Contacto.
- Mobile: acordeón equivalente.

**Páginas de servicio**
- Crear componente reutilizable `ServicePageLayout` (similar a `PhasePageLayout` actual) que reciba: título, área, descripción larga, promesa con factor tiempo, cliente correcto, segmentos a los que aplica, bullets de qué incluye, CTA.
- 10 páginas nuevas con los contenidos del documento.
- Eliminar las 5 páginas de fases (`ArquitecturaTI`, `PresenciaDigital`, `Ciberseguridad`, `AnaliticaAplicada`, `InteligenciaArtificial`) — algunas se reciclan como servicios pero con contenido nuevo.

**Páginas de segmento**
- 4 páginas que listan los servicios recomendados para ese segmento + lenguaje específico (cercano para persona natural, corporativo para jurídica).

**Fundador**
- Mantener la página pero actualizar bio para reflejar "Director de Tecnología Externo / consultor" en vez de mentor.

**Limpieza**
- Eliminar referencias a "Plan 360", "5 fases", "mentoría", "Quiero Mi Independencia Digital" (botón Systeme.io).
- CTA principal pasa a ser **"Agendar diagnóstico"** / **"Cotizar servicio"** apuntando a WhatsApp o formulario.
- Actualizar SEO: title, meta description, JSON-LD (Organization en vez de Person+Service mentoría), sitemap.
- Actualizar chatbot system prompt en `supabase/functions/chat/index.ts` con el nuevo portafolio.
- Actualizar memorias del proyecto (`mem://features/plan-360` → reemplazar por `mem://features/portfolio-servicios`).

## Detalles técnicos

- Stack actual sin cambios (React + Vite + Tailwind + shadcn).
- Routing: añadir 10 rutas de servicio + 4 de segmento en `App.tsx`.
- Datos: archivo `src/data/services.ts` y `src/data/segments.ts` como fuente única de verdad (usados por home, navbar, páginas individuales y chatbot edge function vía import compartido del lado cliente; el edge function recibirá el prompt embebido).
- Diseño: mantener tokens actuales (gradiente azul/teal, Montserrat + Open Sans, dark/light).
- Mobile-first; el carrusel de reseñas y el problema de sonido del chatbot ya están resueltos en cambios previos.

## Lo que NO toco en esta reestructuración

- Backend / tablas Supabase (reseñas y formulario existentes siguen igual).
- Configuración de Cloudflare / dominio.
- Verificación de Google Search Console.

## Confirmaciones que necesito antes de implementar

1. **CTA principal**: ¿Botón "Agendar diagnóstico" abre WhatsApp (+56 …) o quieres un formulario en `/contacto`?
2. **Página por servicio**: ¿Hago las 10 páginas individuales ahora, o partimos con la home renovada + una sola página genérica `/servicios` que liste todo, y dejamos las páginas individuales para una segunda iteración?
3. **Páginas de fase actuales** (`/arquitecturati`, `/presenciadigital`, etc.): ¿las redirijo a las nuevas de servicio o las elimino sin redirect?
