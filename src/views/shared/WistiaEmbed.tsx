import { useEffect } from "react";

interface WistiaEmbedProps {
  mediaId: string;
  className?: string;
}

const loadScript = (src: string, id: string, type?: string) => {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.id = id;
  if (type) script.type = type;
  document.body.appendChild(script);
};

// Mientras el custom element <wistia-player> todavía no se define (script
// cargando), muestra el swatch del video de fondo con blur en vez de un
// espacio en blanco.
const loadSwatchStyle = (mediaId: string) => {
  const id = `wistia-swatch-style-${mediaId}`;
  if (document.getElementById(id)) return;
  const style = document.createElement("style");
  style.id = id;
  style.textContent = `wistia-player[media-id='${mediaId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`;
  document.head.appendChild(style);
};

const WistiaEmbed = ({ mediaId, className = "" }: WistiaEmbedProps) => {
  useEffect(() => {
    loadScript("https://fast.wistia.com/player.js", "wistia-player-script");
    loadScript(`https://fast.wistia.com/embed/${mediaId}.js`, `wistia-embed-script-${mediaId}`, "module");
    loadSwatchStyle(mediaId);
  }, [mediaId]);

  return (
    <div className={`rounded-2xl overflow-hidden shadow-card-hover border border-border ${className}`}>
      <wistia-player media-id={mediaId} aspect="1.7777777777777777" />
    </div>
  );
};

export default WistiaEmbed;
