# Botones de llamada a la acción: la luz que recorre el borde

Efecto visual de los botones de acción: una luz que da vueltas por el borde del
botón, acelera al pasar el mouse y lanza un destello con ondas al hacer clic.
Está portado del efecto que usa jlbsystems.cl.

## Archivos

| Archivo | Para qué |
| --- | --- |
| `src/lib/ctaEstrella.ts` | Todo el efecto: geometría, dibujo y montaje. |
| `src/views/shared/CtaEstrellaEffect.tsx` | Componente vacío que lo monta. |
| `src/App.tsx` | `AppLayout` renderiza `<CtaEstrellaEffect />` una sola vez. |

## Cómo se usa

El efecto se monta solo en los botones que llevan alguna de estas dos clases:

1. `js-agendar-diagnostico` (constante `BOOKING_TRIGGER_CLASS` en
   `src/lib/booking.ts`): la usan los botones que abren el formulario de
   diagnóstico. **No hay que hacer nada**, ya reciben la luz.
2. `cta-estrella`: para cualquier otro botón de acción (Ver servicios, Volver a
   servicios, Enviar reseña, la burbuja de WhatsApp, la del chatbot, el botón
   del modal de bienvenida...).

```tsx
<button className="cta-estrella inline-flex ...">Acción</button>
```

El montaje global los encuentra tanto si ya existían al cargar como si aparecen
después (cambio de página, modal abierto), gracias a un `MutationObserver`.

## Qué hace por dentro

- Mete un `<canvas>` dentro del botón, más grande que él (desborda 48 px por
  cada lado) y con `z-index: -1`, para que la luz se vea por fuera sin tapar el
  texto.
- Calcula el perímetro del botón como rectángulo redondeado (4 rectas + 4
  cuartos de círculo) y un punto lo recorre: `construirCamino()` y
  `puntoEnCamino()`.
- En reposo avanza lento siempre; con `mouseenter` da una vuelta rápida
  (`DURACION_VUELTA`); con `click` guarda el punto del borde más cercano al
  cursor (`puntoMasCercano`) y lanza destello + dos ondas.
- Se pausa con `IntersectionObserver` cuando el botón no está a la vista.

## Modo claro y modo oscuro

Se pinta distinto según la clase `.dark` de `<html>`
(`useThemeController`):

- **Oscuro:** la luz se SUMA al fondo (`globalCompositeOperation = "lighter"`),
  así que brilla de verdad. Ahí van también los rayos del destello.
- **Claro:** sumar luz sobre blanco no se ve, así que se pintan colores
  saturados de la marca (verde azulado `#2bab82` y azul real `#003399`) con
  `source-over`: aura ancha, sombra azulada y borde iluminado.

Si se cambia la paleta de la marca, los colores están en `colorDe()` y en los
`rgba([0, 51, 153], ...)` de la rama clara.

## Reglas para no romperlo

- **No poner `overflow: hidden`** a un botón con la luz: recorta el halo. El
  efecto ya fuerza `overflow: visible !important`, pero mejor no añadir la
  clase.
- **No superponer otro brillo** (tipo `btn-shimmer`) en el mismo botón: choca
  con la luz y vuelve a recortarla.
- El botón **debe estar posicionado**. Si es `static`, el efecto le pone
  `position: relative` solo; si ya es `fixed`/`absolute` se respeta. Sin esto el
  lienzo tomaría un contenedor más grande y la luz saldría desviada y recortada.
- **Movimiento reducido:** si el sistema pide `prefers-reduced-motion: reduce`,
  la luz se queda fija en su sitio (no da vueltas). El destello del clic sí
  aparece.
- Los degradados de las ondas **terminan en transparente**: si se cambian y
  terminan en un color opaco, las esquinas del recuadro pintado se ven como un
  cuadro feo detrás del botón.

## Cómo comprobarlo

Con Playwright (el navegador de prueba viene con `prefers-reduced-motion:
reduce`, así que hay que pedir `reduced_motion="no-preference"` o la luz no se
mueve):

1. Entrar a la home, cerrar el modal de bienvenida
   (`[aria-label="Cerrar"]`).
2. Medir que cada `<canvas>` mida lo mismo que su botón + 96 px y esté desplazado
   48 px (si no, la luz sale desviada).
3. Sacar dos recortes del mismo botón separados 600 ms: deben diferir en miles de
   píxeles (la luz se movió).
4. Pasar el mouse: la luz da una vuelta rápida.
5. Hacer clic cerca de un borde: debe aparecer un destello y un anillo que crece
   desde ese punto del borde, nunca desde el centro del botón.
