import { useRef, useEffect, useState, useCallback } from "react";
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
import nicchileLogo from "@/assets/logos/nicchile.png";
import nortonLogo from "@/assets/logos/norton.png";
import authenticatorLogo from "@/assets/logos/authenticator.png";
import linuxLogo from "@/assets/logos/linux.png";
import notebooklmLogo from "@/assets/logos/notebooklm.png";
import canvaLogo from "@/assets/logos/canva.png";
import clipchampLogo from "@/assets/logos/clipchamp.png";
import capcutLogo from "@/assets/logos/capcut.png";
import geminiLogo from "@/assets/logos/gemini.png";
import anciLogo from "@/assets/logos/anci.png";
import githubLogo from "@/assets/logos/github.png";
import gitlabLogo from "@/assets/logos/gitlab.png";
import teamsLogo from "@/assets/logos/teams.png";
import googlemeetLogo from "@/assets/logos/googlemeet.png";
import onedriveLogo from "@/assets/logos/onedrive.png";
import googledriveLogo from "@/assets/logos/googledrive.png";
import mcpLogo from "@/assets/logos/mcp.png";
import windows11Logo from "@/assets/logos/windows11.png";
import vscodeLogo from "@/assets/logos/vscode.png";
import visualstudioLogo from "@/assets/logos/visualstudio.png";
import auroraLogo from "@/assets/logos/aurora.png";
import elevenlabsTextLogo from "@/assets/logos/elevenlabs-text.png";
import hostingerLogo from "@/assets/logos/hostinger.png";
import manychatLogo from "@/assets/logos/manychat.png";
import calendlyLogo from "@/assets/logos/calendly.png";
import hpLogo from "@/assets/logos/hp.png";
import lenovoLogo from "@/assets/logos/lenovo.png";
import brotherLogo from "@/assets/logos/brother.png";
import epsonLogo from "@/assets/logos/epson.png";
import ciscoLogo from "@/assets/logos/cisco.png";
import webLogo from "@/assets/logos/web.png";
import gammaLogo from "@/assets/logos/gamma.png";
import sqlserverLogo from "@/assets/logos/sqlserver.png";
import oracleLogo from "@/assets/logos/oracle.png";
import mysqlLogo from "@/assets/logos/mysql.png";
import jiraLogo from "@/assets/logos/jira.png";
import clickupLogo from "@/assets/logos/clickup.png";
import trelloLogo from "@/assets/logos/trello.png";
import laravelLogo from "@/assets/logos/laravel.png";
import phpLogo from "@/assets/logos/php.png";
import googlelabsLogo from "@/assets/logos/googlelabs.png";

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
  { src: nicchileLogo, alt: "NIC Chile" },
  { src: nortonLogo, alt: "Norton" },
  { src: authenticatorLogo, alt: "Microsoft Authenticator" },
  { src: linuxLogo, alt: "Linux" },
  { src: notebooklmLogo, alt: "NotebookLM" },
  { src: canvaLogo, alt: "Canva" },
  { src: clipchampLogo, alt: "Clipchamp" },
  { src: capcutLogo, alt: "CapCut" },
  { src: geminiLogo, alt: "Gemini" },
  { src: anciLogo, alt: "ANCI" },
  { src: githubLogo, alt: "GitHub" },
  { src: gitlabLogo, alt: "GitLab" },
  { src: teamsLogo, alt: "Microsoft Teams" },
  { src: googlemeetLogo, alt: "Google Meet" },
  { src: onedriveLogo, alt: "OneDrive" },
  { src: googledriveLogo, alt: "Google Drive" },
  { src: mcpLogo, alt: "Model Context Protocol" },
  { src: windows11Logo, alt: "Windows 11 Pro" },
  { src: vscodeLogo, alt: "VS Code" },
  { src: visualstudioLogo, alt: "Visual Studio" },
  { src: auroraLogo, alt: "Aurora" },
  { src: elevenlabsTextLogo, alt: "ElevenLabs" },
  { src: hostingerLogo, alt: "Hostinger" },
  { src: manychatLogo, alt: "ManyChat" },
  { src: calendlyLogo, alt: "Calendly" },
  { src: hpLogo, alt: "HP" },
  { src: lenovoLogo, alt: "Lenovo" },
  { src: brotherLogo, alt: "Brother" },
  { src: epsonLogo, alt: "Epson" },
  { src: ciscoLogo, alt: "Cisco" },
  { src: webLogo, alt: "Web" },
  { src: gammaLogo, alt: "Gamma" },
  { src: sqlserverLogo, alt: "SQL Server" },
  { src: oracleLogo, alt: "Oracle" },
  { src: mysqlLogo, alt: "MySQL" },
  { src: jiraLogo, alt: "Jira" },
  { src: clickupLogo, alt: "ClickUp" },
  { src: trelloLogo, alt: "Trello" },
  { src: laravelLogo, alt: "Laravel" },
  { src: phpLogo, alt: "PHP" },
  { src: googlelabsLogo, alt: "Google Labs" },
];

const ITEM_WIDTH = 160; // w-32 (128px) + mx-4 (32px)
const SPEED = 0.5; // px per frame

const TechLogosCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const animRef = useRef<number>(0);
  const isDragging = useRef(false);
  const dragStart = useRef(0);
  const dragOffset = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalWidth = logos.length * ITEM_WIDTH;

  const animate = useCallback(() => {
    if (!isDragging.current && !isPaused) {
      offsetRef.current -= SPEED;
      if (Math.abs(offsetRef.current) >= totalWidth) {
        offsetRef.current += totalWidth;
      }
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
    animRef.current = requestAnimationFrame(animate);
  }, [isPaused, totalWidth]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStart.current = e.clientX;
    dragOffset.current = offsetRef.current;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const diff = e.clientX - dragStart.current;
    offsetRef.current = dragOffset.current + diff;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    // Normalize offset
    while (offsetRef.current > 0) offsetRef.current -= totalWidth;
    while (Math.abs(offsetRef.current) >= totalWidth) offsetRef.current += totalWidth;
  };

  return (
    <section className="py-12 overflow-hidden" style={{ background: "hsl(210, 20%, 96%)" }}>
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(215, 15%, 45%)" }}>
          Tecnologías que implementamos
        </p>
      </div>
      <div
        className="relative touch-pan-y select-none cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(210, 20%, 96%), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(210, 20%, 96%), transparent)" }} />

        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ width: "max-content" }}
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 flex items-center justify-center h-16 w-32 opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechLogosCarousel;
