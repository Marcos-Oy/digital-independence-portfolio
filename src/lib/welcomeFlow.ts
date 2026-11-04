/**
 * Estado del flujo de bienvenida del chatbot.
 *
 * Vive en memoria del módulo, así que se reinicia con cada carga de página
 * (recargar, volver a entrar al sitio, cambiar de idioma). Eso es justo lo que
 * queremos: el mensaje de bienvenida vuelve a aparecer en cada carga, y el
 * chat debe volver a abrirse solo después de cerrarlo.
 *
 * Antes esto se guardaba en sessionStorage, que dura toda la pestaña: la
 * segunda vez que alguien entraba o recargaba, el bienvenida se mostraba
 * otra vez pero el chat ya nunca se abría solo.
 */

let welcomeClosed = false;
let chatAutoOpened = false;
let chatOpenedByUser = false;

/** El visitante cerró el mensaje de bienvenida en esta carga de página. */
export const markWelcomeClosed = () => {
  welcomeClosed = true;
};

export const hasWelcomeClosed = () => welcomeClosed;

/** El visitante abrió el chat a mano: ya no hay que abrirlo solo. */
export const markChatOpenedByUser = () => {
  chatOpenedByUser = true;
};

/**
 * Pide permiso para abrir el chat automáticamente.
 * Devuelve true una sola vez por carga de página, y nunca si el visitante
 * ya abrió el chat por su cuenta.
 */
export const claimChatAutoOpen = () => {
  if (chatAutoOpened || chatOpenedByUser) return false;
  chatAutoOpened = true;
  return true;
};
