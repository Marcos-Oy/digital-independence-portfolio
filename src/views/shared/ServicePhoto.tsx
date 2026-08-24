import { AccentBlob, BlobImage, RingLoop, StripeAccent } from "@/views/shared/BackgroundBlobs";

interface ServicePhotoProps {
  src: string;
  alt: string;
  /** Silueta orgánica de la mancha (1 a 6, ver BackgroundBlobs). */
  shape?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

/** Composición fotográfica estilo fundador: foto recortada en mancha orgánica
 * con acentos de marca (rayas diagonales, anillo abierto y gota). Es el
 * reemplazo estándar de los antiguos mockups CSS en las páginas de servicio
 * (problema / resultado / CTA). El hero y la solución usan BlobImage directo
 * porque ya traen su propia composición con tarjeta flotante. */
const ServicePhoto = ({ src, alt, shape = 2, className = "" }: ServicePhotoProps) => (
  <div className={`relative pt-6 pr-4 pb-6 pl-4 ${className}`}>
    <StripeAccent className="absolute -top-1 right-0 w-24 h-14 rounded-xl opacity-90" />
    <BlobImage src={src} shape={shape} alt={alt} className="w-full aspect-[4/3] shadow-card-hover" />
    <RingLoop color="secondary" className="absolute -bottom-2 -left-2 w-24 h-24" />
    <AccentBlob shape={6} color="secondary" className="absolute bottom-4 right-4 w-7 h-5 opacity-80" />
  </div>
);

export default ServicePhoto;
