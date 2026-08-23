# Service Page Design System

## Patrón obligatorio para páginas individuales de servicios

Template de referencia: `src/views/services/PaginasWebServiceView.tsx`,
`src/views/services/DesarrolloSoftwareServiceView.tsx`,
`src/views/services/CiberseguridadServiceView.tsx` y
`src/views/services/VigilanciaInnovacionServiceView.tsx` (servicios de
retainer/continuo: ciclo mensual, mockup de informe, mapas radiales de
dimensiones y competencia). Toda página nueva de servicio debe reutilizar
este sistema visual (el usuario lo aprobó).

## Estructura de secciones (17)
Hero (breadcrumb + partículas + imagen blob) → Dolor (imaginería) → Problema →
Solución (blob + 4 bullets) → Qué podemos desarrollar (grid 2x2 numerado) →
Alternativas antes de programar → Proceso (gradient-brand, círculos
translúcidos con línea punteada) → Tecnología → Diferencia → Resultado (blob
invertido + MiniLineChart) → Qué esperar (4 checks) → Para quién (4 cards) →
Recomendación (bg-secondary) → FAQ (accordion, card rounded-3xl) → CTA
gradient-brand → Aclaración final (centrado).

## Elementos visuales clave
- Imágenes estilo fundador: `BlobImage` (shapes 1-6 en `BackgroundBlobs.tsx`)
  + `StripeAccent` + `RingLoop` + `AccentBlob`, dentro de `ScrollReveal`
  con `parallax`.
- Cards flotantes sobre blobs: `bg-card/95 backdrop-blur border shadow-xl rounded-2xl`.
- Secciones alternan `bg-background` / `bg-secondary` (full-bleed con wrapper
  `-mx-5 lg:-mx-10 px-5 lg:px-10`).
- Proceso y CTA usan `gradient-brand` con `brand-foreground` y pattern grid
  `background-grid-light`; NUNCA navy ni blanco puro (corregido por usuario).
- Hero lleva `ParticleNetworkBackground` + blobs ambientales del home, pero
  SIN la imagen bannerHero (exclusiva del home).
- Tipografía: pill + h1/h2 font-heading extrabold, párrafos text-muted-foreground.
- CTAs: Button `gradient-brand` → `https://independencia-digital.systeme.io/registro`
  (Agendar diagnóstico). WhatsApp SOLO para contacto general.

## SEO por ruta
`react-helmet-async@^2.0.5` (v2 obligatoria, v3 rompe React 18 con warnings de
refs). `HelmetProvider` en `src/main.tsx`. Cada vista define `<Helmet>` con
title/description/canonical/og:*. NO reponer `<link rel="canonical">` en
index.html (lo maneja Helmet por ruta). Dominio canonical:
`https://www.independenciadigital.cl`.

## Imágenes
Generar 5 fotorealistas por servicio con imagegen: hero, problema, solución,
resultado, cta → `src/assets/`. Dark navy #0A0F1E con acentos azul/teal.

## Diagramas radiales/orbitales (obligatorio)

Para cualquier diagrama de nodos alrededor de un círculo central usar SIEMPRE el componente compartido:

```tsx
import RadialOrbitDiagram from "@/views/shared/RadialOrbitDiagram";

<RadialOrbitDiagram
  nodes={[{ icon: Users, label: "Personas", desc: "Opcional" }, ...]}
  centerIcon={ShieldCheck}   // opcional
  centerTitle="Gestión del riesgo"
  className="mx-auto w-full max-w-[560px]"
/>
```

- Usa la misma técnica que `AnimatedProcessCircle` ("Cómo trabajamos"): anillos en SVG con viewBox 0-100 y nodos posicionados con trigonometría en porcentajes → alineación perfecta a cualquier tamaño.
- Efectos incluidos: anillo que se dibuja al entrar en viewport, franja punteada rotando, núcleo con pulso luminoso, nodos con entrada de resorte escalonada y escala al hover.
- PROHIBIDO posicionar nodos con `rotate(deg) translateY(px)`: se desalinean (el usuario lo rechazó).
- Gotcha: framer-motion sobrescribe el `transform` de Tailwind. El centrado (-50%) se pasa como `x`/`y` de motion, nunca con clases `-translate-x-1/2` junto a `initial`/`animate`.
- Referencia de uso: `CiberseguridadServiceView.tsx` (diagramas "Gestión del riesgo" y "Seguridad sostenible").
