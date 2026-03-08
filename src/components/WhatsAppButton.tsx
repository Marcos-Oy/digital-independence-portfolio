const WhatsAppButton = () => {
  const phone = "56928362758";
  const message = encodeURIComponent("Hola, quiero más información sobre Independencia Digital");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{ background: "#25D366" }}
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.35 22.616c-.392 1.1-1.942 2.014-3.186 2.28-.852.18-1.964.324-5.708-1.226-4.792-1.984-7.872-6.852-8.112-7.172-.228-.32-1.916-2.552-1.916-4.868 0-2.316 1.212-3.452 1.644-3.924.392-.428 1.04-.624 1.66-.624.2 0 .38.01.54.018.472.02.708.048 1.02.788.392.928 1.344 3.28 1.464 3.52.12.24.24.556.08.876-.148.328-.28.532-.52.816-.24.284-.496.504-.736.768-.24.264-.492.548-.212 1.02.28.472 1.248 2.056 2.68 3.332 1.84 1.64 3.388 2.148 3.868 2.388.48.24.76.2 1.04-.12.28-.32 1.2-1.396 1.52-1.876.32-.48.64-.396 1.08-.236.44.16 2.784 1.312 3.264 1.552.48.24.796.36.916.556.12.2.12 1.12-.272 2.22v.032z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
