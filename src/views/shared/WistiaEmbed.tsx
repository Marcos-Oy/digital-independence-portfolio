import { useEffect } from "react";

interface WistiaEmbedProps {
  mediaId: string;
  className?: string;
  autoPlay?: boolean;
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

const WistiaEmbed = ({ mediaId, className = "", autoPlay = false }: WistiaEmbedProps) => {
  useEffect(() => {
    loadScript("https://fast.wistia.com/player.js", "wistia-player-script");
    loadScript(`https://fast.wistia.com/embed/${mediaId}.js`, `wistia-embed-script-${mediaId}`, "module");
  }, [mediaId]);

  return (
    <div className={`rounded-2xl overflow-hidden shadow-card-hover border border-border ${className}`}>
      <wistia-player
        media-id={mediaId}
        aspect="1.7777777777777777"
        autoplay={autoPlay || undefined}
        muted={autoPlay || undefined}
        playsinline={autoPlay || undefined}
      />
    </div>
  );
};

export default WistiaEmbed;
