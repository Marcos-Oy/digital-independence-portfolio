import microsoftLogo from "@/assets/logos/microsoft.png";
import googleLogo from "@/assets/logos/google.png";
import excelLogo from "@/assets/logos/excel.png";
import powerbiLogo from "@/assets/logos/powerbi.png";
import accessLogo from "@/assets/logos/access.png";
import systemeLogo from "@/assets/logos/systeme.png";
import wordpressLogo from "@/assets/logos/wordpress.png";
import cloudflareLogo from "@/assets/logos/cloudflare.png";
import outlookLogo from "@/assets/logos/outlook.png";
import gmailLogo from "@/assets/logos/gmail.png";
import n8nLogo from "@/assets/logos/n8n.png";
import claudeLogo from "@/assets/logos/claude.png";
import elevenlabsLogo from "@/assets/logos/elevenlabs.png";
import slackLogo from "@/assets/logos/slack.png";
import lovableLogo from "@/assets/logos/lovable.png";
import chatgptLogo from "@/assets/logos/chatgpt.png";
import heygenLogo from "@/assets/logos/heygen.png";

const logos = [
  { src: microsoftLogo, alt: "Microsoft" },
  { src: googleLogo, alt: "Google" },
  { src: excelLogo, alt: "Excel" },
  { src: powerbiLogo, alt: "Power BI" },
  { src: accessLogo, alt: "Access" },
  { src: systemeLogo, alt: "Systeme" },
  { src: wordpressLogo, alt: "WordPress" },
  { src: cloudflareLogo, alt: "Cloudflare" },
  { src: outlookLogo, alt: "Outlook" },
  { src: gmailLogo, alt: "Gmail" },
  { src: n8nLogo, alt: "n8n" },
  { src: claudeLogo, alt: "Claude" },
  { src: elevenlabsLogo, alt: "ElevenLabs" },
  { src: slackLogo, alt: "Slack" },
  { src: lovableLogo, alt: "Lovable" },
  { src: chatgptLogo, alt: "ChatGPT" },
  { src: heygenLogo, alt: "HeyGen" },
];

const TechLogosCarousel = () => {
  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground">
          Tecnologías que implementamos
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-16 w-32 opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechLogosCarousel;
