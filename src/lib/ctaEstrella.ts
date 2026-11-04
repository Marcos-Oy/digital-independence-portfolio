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
  /** true = se pinta normal (para botones claros sobre fondo claro).
   *  false = se pinta sumando luz ("lighter", para botones oscuros). */
  claro: boolean;
  /** Multiplicador de intensidad y grosor. */
  fuerza: number;
};

const TAU = Math.PI * 2;
const WHITE: [number, number, number] = [255, 255, 255];
/** Píxeles de canvas extra alrededor del botón para que la luz desborde. */
const MARGIN = 48;

/** Selector de todos los elementos que deben llevar la luz. */
export const CTA_ESTRELLA_SELECTOR = ".cta-estrella, .js-agendar-diagnostico";

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const wrap = (v: number, m: number) => ((v % m) + m) % m;
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(2 - 2 * t, 3) / 2);
const mix = (
  a: [number, number, number],
  b: [number, number, number],
  t: number,
): [number, number, number] => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];
const rgba = (c: [number, number, number], a: number) =>
  `rgba(${Math.round(c[0])}, ${Math.round(c[1])}, ${Math.round(c[2])}, ${clamp(a, 0, 1).toFixed(3)})`;

/* ── Geometría del perímetro ─────────────────────────────────────────────── */

type Segmento = {
  length: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  /** null = recta; si no, ángulo inicial del arco. */
  angle: number | null;
};

type Camino = { r: number; segments: Segmento[]; total: number };

type Punto = { x: number; y: number; nx: number; ny: number };

/** Construye el perímetro de un rectángulo redondeado de w x h con radio r. */
const construirCamino = (width: number, height: number, radius: number): Camino => {
  const w = Math.max(1, width - 1);
  const h = Math.max(1, height - 1);
  const r = Math.max(0, Math.min(radius - 0.5, w / 2, h / 2));
  const arco = (Math.PI * r) / 2;
  const rectaH = Math.max(0, w - 2 * r);
  const rectaV = Math.max(0, h - 2 * r);

  const segments: Segmento[] = [
    { length: rectaH, x: r, y: 0, dx: 1, dy: 0, angle: null },
    { length: arco, x: w - r, y: r, dx: 0, dy: 0, angle: -Math.PI / 2 },
    { length: rectaV, x: w, y: r, dx: 0, dy: 1, angle: null },
    { length: arco, x: w - r, y: h - r, dx: 0, dy: 0, angle: 0 },
    { length: rectaH, x: w - r, y: h, dx: -1, dy: 0, angle: null },
    { length: arco, x: r, y: h - r, dx: 0, dy: 0, angle: Math.PI / 2 },
    { length: rectaV, x: 0, y: h - r, dx: 0, dy: -1, angle: null },
    { length: arco, x: r, y: r, dx: 0, dy: 0, angle: Math.PI },
  ];

  return {
    r,
    segments,
    total: Math.max(1, segments.reduce((acc, s) => acc + s.length, 0)),
  };
};

/** Puesto sobre el perímetro a la distancia `dist` (se enrolla). */
const puntoEnCamino = (camino: Camino, dist: number, out: Punto): Punto => {
  let d = wrap(dist, camino.total);
  for (const s of camino.segments) {
    if (s.length > 0 && d <= s.length) {
      if (s.angle === null) {
        out.x = s.x + s.dx * d;
        out.y = s.y + s.dy * d;
        out.nx = s.dy;
        out.ny = -s.dx;
      } else {
        const a = s.angle + d / camino.r;
        out.nx = Math.cos(a);
        out.ny = Math.sin(a);
        out.x = s.x + out.nx * camino.r;
        out.y = s.y + out.ny * camino.r;
      }
      return out;
    }
    d -= s.length;
  }
  return out;
};

/** Distancia a lo largo del perímetro del punto más cercano a (x, y). */
const origenMasCercano = (camino: Camino, x: number, y: number): number => {
  const px = x - 0.5;
  const py = y - 0.5;
  let mejorDist = Infinity;
  let mejorAt = 0;
  let acumulado = 0;

  camino.segments.forEach((s) => {
    if (s.length > 0) {
      let t = 0;
      let sx = 0;
      let sy = 0;
      if (s.angle === null) {
        t = clamp((px - s.x) * s.dx + (py - s.y) * s.dy, 0, s.length);
        sx = s.x + s.dx * t;
        sy = s.y + s.dy * t;
      } else {
        let a = wrap(Math.atan2(py - s.y, px - s.x) - s.angle, TAU);
        if (a > Math.PI / 2) a = a > 1.25 * Math.PI ? 0 : Math.PI / 2;
        t = a * camino.r;
        sx = s.x + Math.cos(s.angle + a) * camino.r;
        sy = s.y + Math.sin(s.angle + a) * camino.r;
      }
      const d2 = (px - sx) ** 2 + (py - sy) ** 2;
      if (d2 < mejorDist) {
        mejorDist = d2;
        mejorAt = acumulado + t;
      }
    }
    acumulado += s.length;
  });

  return mejorAt;
};

/* ── Color del botón: la luz se elige según su propio fondo ──────────────── */

const parsearColor = (color: string): { r: number; g: number; b: number; a: number } => {
  const m = color.match(/rgba?\(([^)]+)\)/);
  if (!m) return { r: 0, g: 0, b: 0, a: 0 };
  const partes = m[1].split(/[\s,\/]+/).map((n) => parseFloat(n));
  return {
    r: partes[0] || 0,
    g: partes[1] || 0,
    b: partes[2] || 0,
    a: partes.length > 3 ? partes[3] : 1,
  };
};

const luminancia = (c: [number, number, number]) =>
  (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255;

/** Luz verde-agua clara: se ve sobre los botones oscuros de la marca. */
const LUZ_MARCA: [number, number, number] = [86, 226, 187];
/** Azul profundo: se ve sobre fondos claros. */
const LUZ_CLARA: [number, number, number] = [0, 84, 168];

/**
 * Elige el estilo de luz según el propio botón:
 *  - Botón con fondo oscuro (los de gradiente de marca, o el verde de
 *    WhatsApp) → luz clara sumada, que se ve como un brillo.
 *  - Botón claro o con fondo transparente en modo claro → luz oscura.
 *  - Botón con fondo transparente en modo oscuro → luz clara.
 */
const resolverEstilo = (el: HTMLElement): EstrellaStyle => {
  const cs = getComputedStyle(el);
  const modoOscuro = document.documentElement.classList.contains("dark");
  const tieneGradiente = cs.backgroundImage !== "none" && cs.backgroundImage !== "initial";
  const fondo = parsearColor(cs.backgroundColor);
  const fondoOscuro = tieneGradiente
    ? true
    : fondo.a > 0.05
      ? luminancia([fondo.r, fondo.g, fondo.b]) < 0.5
      : modoOscuro;

  if (fondoOscuro) return { color: LUZ_MARCA, claro: false, fuerza: tieneGradiente ? 1.7 : 1.15 };
  return { color: LUZ_CLARA, claro: true, fuerza: 1 };
};

/* ── Adjuntar el efecto a un botón ───────────────────────────────────────── */

const adjuntar = (el: HTMLElement): (() => void) => {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  canvas.style.cssText = `position:absolute;top:${-MARGIN}px;left:${-MARGIN}px;z-index:-1;width:calc(100% + ${MARGIN * 2}px);height:calc(100% + ${MARGIN * 2}px);pointer-events:none;`;

  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const estilosOriginales = {
    position: el.style.position,
    isolation: el.style.isolation,
    overflow: el.style.overflow,
  };
  if (getComputedStyle(el).position === "static") {
    el.style.setProperty("position", "relative", "important");
  }
  el.style.setProperty("isolation", "isolate", "important");
  // La luz desborda el botón: si el botón recorta, hay que dejar de recortar.
  if (getComputedStyle(el).overflow !== "visible") {
    el.style.setProperty("overflow", "visible", "important");
  }
  el.appendChild(canvas);

  const movimientoReducido = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

  const cursor: Punto = { x: 0, y: 0, nx: 0, ny: -1 };
  const estado = {
    width: 0,
    height: 0,
    dpr: 1,
    radius: 0,
    phase: 0,
    velocity: 0,
    motion: 0,
    lap: -1,
    time: 0,
    flash: 0,
    visible: false,
  };
  const ondas: { origin: number; age: number }[] = [];
  let raf = 0;
  let ultimo = performance.now();
  let vivo = true;

  const caminoPropio = () => construirCamino(estado.width, estado.height, estado.radius);

  const redibujar = () => {
    estado.width = el.offsetWidth;
    estado.height = el.offsetHeight;
    estado.dpr = Math.min(window.devicePixelRatio || 1, 2);
    estado.radius = parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0;
    canvas.width = Math.max(1, Math.round((estado.width + MARGIN * 2) * estado.dpr));
    canvas.height = Math.max(1, Math.round((estado.height + MARGIN * 2) * estado.dpr));
    arrancar();
  };

  const linea = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    grosor: number,
    color: string,
  ) => {
    ctx.lineWidth = grosor;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  /** Cola de luz que va desvaneciéndose a lo largo del perímetro. */
  const dibujarCola = (
    estilo: EstrellaStyle,
    camino: Camino,
    desde: number,
    largo: number,
    direccion: number,
    alfa: number,
    puntaRedonda = true,
  ) => {
    if (largo < 0.5 || alfa <= 0) return;
    const pasos = clamp(Math.ceil(largo / 2), 2, 90);
    puntoEnCamino(camino, desde, cursor);
    let px = cursor.x;
    let py = cursor.y;

    for (let i = 1; i <= pasos; i++) {
      puntoEnCamino(camino, desde - direccion * largo * (i / pasos), cursor);
      const caida = 1 - (i - 0.5) / pasos;
      const a = caida * caida * alfa;
      let color = estilo.color;
      // En modo "luz sumada" la cola se aclara hacia blanco.
      if (!estilo.claro) color = mix(color, WHITE, Math.pow(caida, 6) * 0.65);
      ctx.lineCap = puntaRedonda && i === 1 ? "round" : "butt";
      const f = estilo.fuerza;
      linea(px, py, cursor.x, cursor.y, 5.6 * f, rgba(color, a * (estilo.claro ? 0.1 : 0.2) * 0.6 * f));
      linea(px, py, cursor.x, cursor.y, f, rgba(color, a));
      px = cursor.x;
      py = cursor.y;
    }
  };

  /** Halo redondo de luz. */
  const dibujarHalo = (estilo: EstrellaStyle, x: number, y: number, alfa: number) => {
    if (alfa <= 0) return;
    const radio = 36 * (estilo.claro ? 0.6 : 1);
    const g = ctx.createRadialGradient(x, y, 0, x, y, radio);
    const pico = (estilo.claro ? 0.08 : 0.4) * 0.6 * alfa * estilo.fuerza;
    g.addColorStop(0, rgba(estilo.color, pico));
    g.addColorStop(0.2, rgba(estilo.color, 0.4 * pico));
    g.addColorStop(0.5, rgba(estilo.color, 0.1 * pico));
    g.addColorStop(1, rgba(estilo.color, 0));
    ctx.fillStyle = g;
    ctx.fillRect(x - radio, y - radio, 2 * radio, 2 * radio);
  };

  const pintar = (estilo: EstrellaStyle, camino: Camino) => {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (estado.width < 2 || estado.height < 2) return;

    const desplazamiento = (MARGIN + 0.5) * estado.dpr;
    ctx.setTransform(estado.dpr, 0, 0, estado.dpr, desplazamiento, desplazamiento);
    ctx.globalCompositeOperation = estilo.claro ? "source-over" : "lighter";
    ctx.lineCap = "butt";

    const total = camino.total;
    const velocidad = Math.abs(estado.motion);
    const direccion = estado.motion >= 0 ? 1 : -1;
    const largoCola = Math.min(1.2 * velocidad, 0.6 * total);
    const realce = 1 + 0.6 * estado.flash;
    const anillo = estado.flash * (estilo.claro ? 0.18 : 0.32);

    // Destello: un anillo completo sobre el borde del botón.
    if (anillo > 0.005) {
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = rgba(estilo.color, anillo);
      ctx.beginPath();
      const w = Math.max(1, estado.width - 1);
      const h = Math.max(1, estado.height - 1);
      if (typeof ctx.roundRect === "function") {
        ctx.roundRect(0, 0, w, h, Math.max(0, camino.r));
      } else {
        ctx.rect(0, 0, w, h);
      }
      ctx.stroke();
    }

    // La cabeza se aclara cuando la luz frena (fin de la vuelta del hover).
    const cabeza =
      clamp(1 - velocidad / Math.max(1, (total / 4) * 0.6), 0, 1) * Math.min(1, realce);
    const fase = estado.phase;

    dibujarCola(estilo, camino, fase, largoCola, direccion, Math.min(1, realce));
    if (cabeza > 0.01) {
      const extra = 20.4 * cabeza;
      dibujarCola(estilo, camino, fase, extra, 1, cabeza, false);
      dibujarCola(estilo, camino, fase, extra, -1, cabeza, false);
    }

    // Ondas que salen del punto del clic hacia los dos lados del borde.
    ondas.forEach((onda) => {
      const alfa = Math.pow(1 - onda.age / 0.65, 2);
      const Expansion = (total / 2) * (1 - Math.pow(1 - Math.min(1, onda.age / 0.5), 2));
      const largo = Math.min(Expansion, 0.16 * total);
      [1, -1].forEach((d) => {
        const puesto = onda.origin + d * Expansion;
        dibujarCola(estilo, camino, puesto, largo, d, alfa);
        puntoEnCamino(camino, puesto, cursor);
        dibujarHalo(estilo, cursor.x, cursor.y, 0.8 * alfa);
      });
    });

    puntoEnCamino(camino, estado.phase, cursor);
    dibujarHalo(estilo, cursor.x, cursor.y, Math.min(1.3, realce));
  };

  const cuadro = (ahora: number) => {
    raf = 0;
    if (!vivo) return;

    const estilo = resolverEstilo(el);
    const dt = Math.min(0.05, Math.max(0.001, (ahora - ultimo) / 1000));
    ultimo = ahora;
    estado.time += dt;

    const camino = caminoPropio();
    const total = camino.total;
    const arranque = movimientoReducido ? 0 : total / 4;

    estado.flash *= Math.exp(-dt / 0.22);
    estado.velocity += (arranque - estado.velocity) * (1 - Math.exp(-dt / 0.45));

    let salto = 0;
    if (estado.lap >= 0) {
      const antes = easeInOutCubic(Math.min(1, estado.lap / 0.9));
      estado.lap += dt;
      salto = (easeInOutCubic(Math.min(1, estado.lap / 0.9)) - antes) * total;
      if (estado.lap >= 0.9) estado.lap = -1;
    }

    estado.motion = estado.velocity + salto / dt;
    estado.phase = wrap(estado.phase + estado.velocity * dt + salto, total);

    for (let i = ondas.length - 1; i >= 0; i--) {
      ondas[i].age += dt;
      if (ondas[i].age >= 0.65) ondas.splice(i, 1);
    }

    pintar(estilo, camino);

    const hayDestello = estado.flash > 0.01 || ondas.length > 0;
    const hayMovimiento = Math.abs(estado.motion) > 0.05 || arranque !== 0 || estado.lap >= 0;
    if (estado.visible && (hayDestello || hayMovimiento)) raf = requestAnimationFrame(cuadro);
  };

  const arrancar = () => {
    if (!raf && vivo && estado.visible) {
      ultimo = performance.now();
      raf = requestAnimationFrame(cuadro);
    }
  };

  const nuevaOnda = (origen: number) => {
    ondas.push({ origin: origen, age: 0 });
    if (ondas.length > 4) ondas.shift();
    estado.flash = 1;
    arrancar();
  };

  const alEntrar = () => {
    if (estado.lap < 0 && !movimientoReducido) estado.lap = 0;
    arrancar();
  };

  const alPulsar = (e: PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    const caja = el.getBoundingClientRect();
    const sx = caja.width ? estado.width / caja.width : 1;
    const sy = caja.height ? estado.height / caja.height : 1;
    const x = (e.clientX - caja.left) * sx;
    const y = (e.clientY - caja.top) * sy;
    nuevaOnda(origenMasCercano(caminoPropio(), x, y));
  };

  // Clic desde el teclado (Enter/Espacio): destello en la posición actual.
  const alClic = (e: MouseEvent) => {
    if (e.detail === 0) nuevaOnda(estado.phase);
  };

  const alEnfocar = () => {
    if (el.matches(":focus-visible") && estado.lap < 0 && !movimientoReducido) estado.lap = 0;
    arrancar();
  };

  const observadorTamano = new ResizeObserver(redibujar);
  observadorTamano.observe(el);

  const observadorVista = new IntersectionObserver((entradas) => {
    estado.visible = entradas.some((e) => e.isIntersecting);
    arrancar();
  });
  observadorVista.observe(el);

  el.addEventListener("pointerenter", alEntrar);
  el.addEventListener("pointerdown", alPulsar);
  el.addEventListener("click", alClic);
  el.addEventListener("focus", alEnfocar);
  redibujar();

  return () => {
    vivo = false;
    cancelAnimationFrame(raf);
    observadorTamano.disconnect();
    observadorVista.disconnect();
    el.removeEventListener("pointerenter", alEntrar);
    el.removeEventListener("pointerdown", alPulsar);
    el.removeEventListener("click", alClic);
    el.removeEventListener("focus", alEnfocar);
    canvas.remove();
    el.style.position = estilosOriginales.position;
    el.style.isolation = estilosOriginales.isolation;
    el.style.overflow = estilosOriginales.overflow;
  };
};

/* ── Montaje global ──────────────────────────────────────────────────────── */

/**
 * Busca todos los botones de acción y les pone la luz. Se vuelve a ejecutar
 * cuando aparece contenido nuevo (modales, cambio de página, etc.).
 * Devuelve la función para detenerlo.
 */
export const montarCtaEstrella = (): (() => void) => {
  const activos = new Map<HTMLElement, () => void>();

  const escanear = () => {
    for (const [el, limpiar] of activos) {
      if (!el.isConnected) {
        limpiar();
        activos.delete(el);
      }
    }
    document.querySelectorAll<HTMLElement>(CTA_ESTRELLA_SELECTOR).forEach((el) => {
      if (!activos.has(el)) activos.set(el, adjuntar(el));
    });
  };

  escanear();

  let pendiente = 0;
  const observador = new MutationObserver(() => {
    if (pendiente) return;
    pendiente = requestAnimationFrame(() => {
      pendiente = 0;
      escanear();
    });
  });
  observador.observe(document.body, { childList: true, subtree: true });

  return () => {
    observador.disconnect();
    if (pendiente) cancelAnimationFrame(pendiente);
    activos.forEach((limpiar) => limpiar());
    activos.clear();
  };
};
