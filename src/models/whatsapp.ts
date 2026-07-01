export const WHATSAPP_PHONE = "56928362758";

export const buildWhatsAppLink = (message: string): string =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
