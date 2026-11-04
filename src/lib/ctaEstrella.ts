/**
 * Efecto "estrella": una luz que recorre el borde de los botones de llamada a
 * la acción (portado del efecto usado en jlbsystems.cl).
 *
 * Cómo funciona:
 *  - Se inserta un <canvas> dentro del botón, más grande que el botón (desborda
 *    MARGIN px por cada lado) y con z-index -1, para que la luz se vea por
 *    fuera del borde sin tapar el texto.
 *  - Se calcula el perímetro del botón como un rectángulo redondeado
 *    (4 rectas + 4 cuartos de círculo) y un punto recorre ese perímetro.
 *  - En reposo la luz avanza lento y siempre; al pasar el mouse da una vuelta
 *    rápida; al hacer clic emite un destello y dos ondas que salen del punto
 *    del borde más cercano al cursor.
 *  - Se pinta distinto según el tema de la página: en modo oscuro la luz se
 *    SUMA al fondo (brilla sobre fondo negro); en modo claro se pinta con
 *    colores saturados, porque sumar luz sobre fondo blanco no se ve.
 *
 * Cómo se usa (ver docs/BOTONES.md):
 *  - Cualquier botón con la clase `js-agendar-diagnostico` (los que abren el
 *    formulario de diagnóstico) ya recibe el efecto automáticamente.
 *  - Cualquier otro botón de acción debe llevar la clase `cta-estrella`.
 *  - El montaje global vive en src/views/shared/CtaEstrellaEffect.tsx.
 */

export type EstrellaStyle = {
  /** Color base de la luz. */
  color: [number, number, number];
  /** Multiplicador de intensidad y grosor. */
  fuerza: number;
};

export const CTA_ESTRELLA_SELECTOR = ".cta-estrella, .js-agendar-diagnostico";

const MARGIN = 48;
const ANCHO_BASE = 2.2;
const LARGO_COLA = 0.42;
const DURACION_VUELTA = 600;
const DURACION_DESTELLO = 700;
const DURACION_ONDA = 900;
const RADIO_HALO = 36;
const RADIO_NUCLEO = 14;

const rgba = (c: [number, number, number], a: number) =>
  `rgba(${c[0]},${c[1]},${c[2]},${a})`;

/** Marca de agua que evita montar el efecto dos veces sobre el mismo botón. */
const MARCA = "__ctaEstrella";
const MOVIMIENTO_REDUCIDO = "(prefers-reduced-motion: reduce)";

/** Botones con el efecto montado y su forma de soltar los recursos. */
const REGISTRO = new Map<HTMLElement, () => void>();

/** true si la página está en modo oscuro (clase .dark en <html>). */
const modoOscuro = () => document.documentElement.classList.contains("dark");

/** Color de la luz: verde azulado de la marca, con un poco de azul real. */
const colorDe = (boton: HTMLElement): [number, number, number] => {
  const cs = getComputedStyle(boton);
  const fondo =
    cs.backgroundImage.includes("gradient") ||
    cs.backgroundColor === "rgba(0, 0, 0, 0)" ||
    cs.backgroundColor === "transparent";
  // Los botones de la marca (degradado / azul / verde azulado) usan el verde
  // azulado; los neutros de borde usan el azul real.
  if (fondo) return [43, 171, 130];
  return [0, 51, 153];
};

const detectarEstilo = (boton: HTMLElement): EstrellaStyle => ({
  color: colorDe(boton),
  fuerza: 1,
});

/* ---------------------------------------------------------------------------
 * Geometría: el perímetro de un rectángulo redondeado como un "camino" de
 * tramos rectos y cuartos de círculo, para poder recorrerlo con un punto.
 * ------------------------------------------------------------------------ */
type Tramo =
  | { tipo: "recta"; x0: number; y0: number; dx: number; dy: number; largo: number }
  | { tipo: "arco"; cx: number; cy: number; r: number; a0: number; a1: number; largo: number };

type Camino = { tramos: Tramo[]; total: number };

const construirCamino = (w: number, h: number, r: number): Camino => {
  const rr = Math.max(0, Math.min(r, w / 2, h / 2));
  const recta = (x0: number, y0: number, x1: number, y1: number): Tramo => ({
    tipo: "recta",
    x0, y0,
    dx: x1 - x0,
    dy: y1 - y0,
    largo: Math.hypot(x1 - x0, y1 - y0),
  });
  const arco = (cx: number, cy: number, a0: number, a1: number): Tramo => ({
    tipo: "arco",
    cx, cy, r: rr, a0, a1,
    largo: (Math.PI / 2) * rr,
  });

  const tramos: Tramo[] = [
    recta(rr, 0, w - rr, 0),
    arco(w - rr, rr, -Math.PI / 2, 0),
    recta(w, rr, w, h - rr),
    arco(w - rr, h - rr, 0, Math.PI / 2),
    recta(w - rr, h, rr, h),
    arco(rr, h - rr, Math.PI / 2, Math.PI),
    recta(0, h - rr, 0, rr),
    arco(rr, rr, Math.PI, Math.PI * 1.5),
  ];
  const total = tramos.reduce((s, t) => s + t.largo, 0);
  return { tramos, total };
};

/** Punto y dirección del camino a una distancia dada (en vueltas de 0 a 1). */
const puntoEnCamino = (camino: Camino, fase: number) => {
  if (!camino.total) return { x: 0, y: 0, ang: 0 };
  let d = ((fase % 1) + 1) % 1 * camino.total;
  for (const t of camino.tramos) {
    if (d > t.largo) { d -= t.largo; continue; }
    if (t.tipo === "recta") {
      const u = t.largo ? d / t.largo : 0;
      return { x: t.x0 + t.dx * u, y: t.y0 + t.dy * u, ang: Math.atan2(t.dy, t.dx) };
    }
    const u = t.largo ? d / t.largo : 0;
    const a = t.a0 + (t.a1 - t.a0) * u;
    const r = t.r || 0.0001;
    return {
      x: t.cx + Math.cos(a) * r,
      y: t.cy + Math.sin(a) * r,
      ang: a + Math.PI / 2,
    };
  }
  return { x: 0, y: 0, ang: 0 };
};

/* ---------------------------------------------------------------------------
 * Dibujado
 * ------------------------------------------------------------------------ */
const trazarCola = (
  ctx: CanvasRenderingContext2D,
  camino: Camino,
  fase: number,
  ancho: number,
) => {
  const inicio = fase - LARGO_COLA;
  const pasos = 28;
  ctx.beginPath();
  for (let i = 0; i <= pasos; i++) {
    const p = puntoEnCamino(camino, inicio + (LARGO_COLA * i) / pasos);
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  }
  ctx.lineWidth = ancho;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
};

const halo = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radio: number,
  c: [number, number, number],
  alpha: number,
) => {
  const g = ctx.createRadialGradient(x, y, 0, x, y, radio);
  g.addColorStop(0, rgba(c, alpha));
  g.addColorStop(0.4, rgba(c, alpha * 0.35));
  g.addColorStop(1, rgba(c, 0));
  ctx.fillStyle = g;
  ctx.fillRect(x - radio, y - radio, radio * 2, radio * 2);
};

const dibujar = (
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  r: number,
  estado: {
    fase: number;
    motion: number;
    lap: number;
    flash: { t: number; x: number; y: number } | null;
    ondas: { t: number; x: number; y: number }[];
    style: EstrellaStyle;
  },
  tiempo: number,
) => {
  ctx.clearRect(0, 0, w, h);
  if (w <= 0 || h <= 0) return;

  const { color: c, fuerza } = estado.style;
  // El lienzo desborda MARGIN px por cada lado, así que el contorno del botón
  // queda desplazado: se dibuja dentro de ese recuadro, no en el borde del lienzo.
  const bw = w - MARGIN * 2;
  const bh = h - MARGIN * 2;
  if (bw <= 0 || bh <= 0) return;
  const camino = construirCamino(bw, bh, r);
  if (!camino.total) return;

  const oscuro = modoOscuro();
  const p = puntoEnCamino(camino, estado.fase);

  ctx.save();
  ctx.translate(MARGIN, MARGIN);

  if (oscuro) {
    /* Modo oscuro: la luz se SUMA al fondo, así que brilla de verdad. */
    ctx.globalCompositeOperation = "lighter";

    // Halo del frente que recorre el borde.
    halo(ctx, p.x, p.y, RADIO_HALO, c, 0.55 * fuerza);

    // La cola: dos pasadas, una ancha y suave, otra fina y brillante.
    const grad = ctx.createLinearGradient(p.x - 40, p.y - 40, p.x + 40, p.y + 40);
    grad.addColorStop(0, rgba(c, 0));
    grad.addColorStop(1, rgba(c, 0.85));
    ctx.strokeStyle = grad;
    trazarCola(ctx, camino, estado.fase, ANCHO_BASE * 5 * fuerza);
    ctx.strokeStyle = rgba(c, 0.9);
    trazarCola(ctx, camino, estado.fase, ANCHO_BASE * fuerza);

    // Núcleo del frente.
    halo(ctx, p.x, p.y, RADIO_NUCLEO, [255, 255, 255], 0.9 * fuerza);
  } else {
    /* Modo claro: sumar luz sobre blanco no se ve, así que se pinta con
       colores saturados de la marca (azul real y verde azulado). */
    ctx.globalCompositeOperation = "source-over";

    // Aura ancha: sobre fondo claro es lo que hace visible la luz por fuera.
    ctx.strokeStyle = rgba(c, 0.22);
    trazarCola(ctx, camino, estado.fase, ANCHO_BASE * 7);

    // Sombra azulada que da profundidad al borde iluminado.
    ctx.strokeStyle = rgba([0, 51, 153], 0.2);
    trazarCola(ctx, camino, estado.fase, ANCHO_BASE * 3.6);

    // El borde iluminado en sí.
    const grad = ctx.createLinearGradient(p.x - 40, p.y - 40, p.x + 40, p.y + 40);
    grad.addColorStop(0, rgba(c, 0));
    grad.addColorStop(1, rgba(c, 1));
    ctx.strokeStyle = grad;
    trazarCola(ctx, camino, estado.fase, ANCHO_BASE * 2.2);

    // Frente de la luz: un punto saturado con su centro más claro.
    halo(ctx, p.x, p.y, 22, c, 0.75);
    ctx.fillStyle = rgba([255, 255, 255], 0.95);
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2.6, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();

  // Destello y ondas del clic. Se dibujan ya fuera del recuadro del botón, con
  // coordenadas propias del lienzo (el punto del clic llega en ese sistema).
  if (estado.flash) {
    const u = Math.min(1, (tiempo - estado.flash.t) / DURACION_DESTELLO);
    const a = Math.pow(1 - u, 2);
    ctx.globalCompositeOperation = oscuro ? "lighter" : "source-over";
    halo(ctx, estado.flash.x, estado.flash.y, RADIO_HALO * (1 + u * 0.6), c,
         (oscuro ? 0.9 : 0.5) * a * fuerza);
    halo(ctx, estado.flash.x, estado.flash.y, RADIO_NUCLEO * (1 - u * 0.4), [255, 255, 255],
         (oscuro ? 0.9 : 0.55) * a);
    if (oscuro) {
      // Rayos del destello: solo en oscuro, donde no ensucian el fondo claro.
      ctx.save();
      ctx.translate(estado.flash.x, estado.flash.y);
      ctx.strokeStyle = rgba(c, 0.4 * a);
      ctx.lineWidth = 1.4;
      const largo = 28 * (1 - u * 0.5);
      for (const ang of [0, Math.PI / 2, Math.PI, Math.PI * 1.5]) {
        ctx.beginPath();
        ctx.moveTo(Math.cos(ang) * 3, Math.sin(ang) * 3);
        ctx.lineTo(Math.cos(ang) * largo, Math.sin(ang) * largo);
        ctx.stroke();
      }
      ctx.restore();
    }
  }

  for (const o of estado.ondas) {
    const u = Math.min(1, (tiempo - o.t) / DURACION_ONDA);
    const radio = 10 + u * 48;
    const a = Math.pow(1 - u, 1.6) * (oscuro ? 0.55 : 0.4);
    // El degradado vuelve a transparente en el borde exterior: si terminara en
    // un color opaco, las esquinas del recuadro pintado se verían como un cuadro.
    const g = ctx.createRadialGradient(o.x, o.y, Math.max(0, radio - 7), o.x, o.y, radio);
    g.addColorStop(0, rgba(c, 0));
    g.addColorStop(0.75, rgba(c, a));
    g.addColorStop(1, rgba(c, 0));
    ctx.globalCompositeOperation = oscuro ? "lighter" : "source-over";
    ctx.fillStyle = g;
    ctx.fillRect(o.x - radio, o.y - radio, radio * 2, radio * 2);
  }

  ctx.globalCompositeOperation = "source-over";
};

/* ---------------------------------------------------------------------------
 * Montaje
 * ------------------------------------------------------------------------ */
const adjuntar = (boton: HTMLElement) => {
  if ((boton as never as Record<string, unknown>)[MARCA]) return;
  (boton as never as Record<string, unknown>)[MARCA] = true;

  // La luz desborda el borde, así que el botón no debe recortarla.
  if (getComputedStyle(boton).overflow !== "visible") {
    boton.style.setProperty("overflow", "visible", "important");
  }
  // El lienzo se posiciona respecto al botón: si el botón no está posicionado,
  // el lienzo tomaría un contenedor más grande y la luz saldría desviada.
  if (getComputedStyle(boton).position === "static") {
    boton.style.position = "relative";
  }

  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  canvas.style.cssText = `position:absolute;left:0;top:0;width:calc(100% + ${MARGIN * 2}px);height:calc(100% + ${MARGIN * 2}px);transform:translate(-${MARGIN}px,-${MARGIN}px);z-index:-1;pointer-events:none;display:block`;
  boton.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const estado = {
    fase: Math.random(),
    motion: 0,
    lap: -1,
    flash: null as { t: number; x: number; y: number } | null,
    ondas: [] as { t: number; x: number; y: number }[],
    style: detectarEstilo(boton),
    w: 0,
    h: 0,
    r: 0,
    visible: false,
    raf: 0,
  };

  const redibujar = () => {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = boton.offsetWidth + MARGIN * 2;
    const h = boton.offsetHeight + MARGIN * 2;
    if (w <= 0 || h <= 0) return;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    estado.w = w;
    estado.h = h;
    estado.r = parseFloat(getComputedStyle(boton).borderRadius) || 0;
    estado.style = detectarEstilo(boton);
    if (estado.visible) arrancar();
  };

  const reducir = () => window.matchMedia(MOVIMIENTO_REDUCIDO).matches;

  const arrancar = () => {
    if (estado.raf) return;
    let ultimo = performance.now();
    const paso = (t: number) => {
      const dt = Math.min(50, t - ultimo);
      ultimo = t;

      if (estado.lap >= 0) {
        // Vuelta rápida pedida al pasar el mouse.
        const u = (t - estado.lap) / DURACION_VUELTA;
        if (u >= 1) {
          estado.lap = -1;
          estado.motion = 0;
        } else {
          estado.motion = 1000 / 18;
        }
      } else {
        estado.motion = 0;
      }

      const creep = estado.w / 4;
      const velocidad = estado.motion + (reducir() ? 0 : creep);
      estado.fase = (estado.fase + (velocidad * dt) / 1000 / Math.max(1, estado.w)) % 1;

      if (estado.flash && t - estado.flash.t > DURACION_DESTELLO) estado.flash = null;
      estado.ondas = estado.ondas.filter((o) => t - o.t <= DURACION_ONDA);

      dibujar(ctx, estado.w, estado.h, estado.r, estado, t);

      const hayMovimiento =
        estado.motion > 0.05 || estado.flash != null || estado.ondas.length > 0 ||
        (!reducir() && estado.visible);
      if (hayMovimiento) estado.raf = requestAnimationFrame(paso);
      else estado.raf = 0;
    };
    estado.raf = requestAnimationFrame(paso);
  };

  const detener = () => {
    if (estado.raf) cancelAnimationFrame(estado.raf);
    estado.raf = 0;
  };

  const alEntrar = () => {
    estado.lap = performance.now();
    arrancar();
  };

  const alClic = (e: MouseEvent) => {
    const rect = boton.getBoundingClientRect();
    const x = e.clientX - rect.left + MARGIN;
    const y = e.clientY - rect.top + MARGIN;
    const t = performance.now();
    estado.flash = { t, x, y };
    estado.ondas.push({ t, x, y });
    if (estado.ondas.length > 3) estado.ondas.shift();
    arrancar();
  };

  const ro = new ResizeObserver(() => redibujar());
  ro.observe(boton);

  const io = new IntersectionObserver(([entrada]) => {
    estado.visible = !!entrada && entrada.isIntersecting;
    if (estado.visible) arrancar();
    else detener();
  });
  io.observe(boton);

  boton.addEventListener("mouseenter", alEntrar);
  boton.addEventListener("click", alClic);

  const limpiar = () => {
    detener();
    ro.disconnect();
    io.disconnect();
    boton.removeEventListener("mouseenter", alEntrar);
    boton.removeEventListener("click", alClic);
    canvas.remove();
    delete (boton as never as Record<string, unknown>)[MARCA];
  };
  // Si el botón sale del DOM (por ejemplo al cambiar de página), se sueltan
  // los observadores y el lienzo para no dejar trabajo colgado.
  REGISTRO.set(boton, limpiar);

  redibujar();
  if (estado.visible) arrancar();
};

/**
 * Monta la luz en todos los botones de acción que haya ahora y en los que
 * aparezcan después (modales, cambio de página, etc.).
 */
export const montarCtaEstrella = () => {
  const escanear = () => {
    document.querySelectorAll<HTMLElement>(CTA_ESTRELLA_SELECTOR).forEach(adjuntar);
  };
  escanear();

  // Botón que desaparece del DOM (cambio de página, modal cerrado), se limpia.
  const barrido = window.setInterval(() => {
    for (const [boton, limpiar] of REGISTRO) {
      if (!boton.isConnected || !document.contains(boton)) {
        limpiar();
        REGISTRO.delete(boton);
      }
    }
  }, 4000);

  const observador = new MutationObserver((cambios) => {
    let hayNovedad = false;
    for (const c of cambios) {
      if (c.addedNodes.length) { hayNovedad = true; break; }
      if (c.type === "attributes" && c.target instanceof HTMLElement &&
          c.target.classList.contains("cta-estrella")) { hayNovedad = true; break; }
    }
    if (hayNovedad) escanear();
  });
  observador.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => {
    observador.disconnect();
    window.clearInterval(barrido);
    for (const [, limpiar] of REGISTRO) limpiar();
    REGISTRO.clear();
  };
};
