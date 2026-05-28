import { useEffect, useRef, useState, FormEvent } from "react";
import { Star, Send, Quote, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Review = {
  id: string;
  name: string;
  city: string;
  service: string;
  rating: number;
  comment: string;
  created_at: string;
};

const SERVICES = [
  "Arquitectura TI",
  "Transformación Digital",
  "Dirección de TI (CTO Externo)",
  "Reducción de Costos TI",
  "Soporte TI Gestionado",
  "Presencia Digital",
  "Desarrollo de Software Web",
  "Dirección de Marketing Digital",
  "Ciberseguridad",
  "Vigilancia e Innovación Tecnológica",
  "Inteligencia Artificial Corporativa",
  "Consultoría puntual",
];

const StarRow = ({
  value,
  onChange,
  size = "w-6 h-6",
  interactive = false,
}: {
  value: number;
  onChange?: (n: number) => void;
  size?: string;
  interactive?: boolean;
}) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((n) => (
      <button
        key={n}
        type="button"
        disabled={!interactive}
        onClick={() => onChange?.(n)}
        className={`${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"} transition-transform`}
        aria-label={`${n} estrella${n > 1 ? "s" : ""}`}
      >
        <Star
          className={`${size} ${
            n <= value ? "fill-primary text-primary" : "text-muted-foreground/40"
          }`}
        />
      </button>
    ))}
  </div>
);

const ReviewCard = ({ r }: { r: Review }) => (
  <div className="h-full bg-card border border-border rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-brand transition-shadow">
    <Quote className="w-8 h-8 text-primary/30 mb-3" />
    <p className="text-sm md:text-base text-foreground/90 leading-relaxed mb-4 flex-1">
      "{r.comment}"
    </p>
    <StarRow value={r.rating} size="w-4 h-4" />
    <div className="mt-3 pt-3 border-t border-border">
      <p className="font-heading font-semibold text-foreground text-sm">{r.name}</p>
      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
        <MapPin className="w-3 h-3" /> {r.city} · {r.service}
      </p>
    </div>
  </div>
);

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const loadReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(30);
    if (!error && data) setReviews(data as Review[]);
    setLoading(false);
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (!name.trim() || !city.trim() || !service.trim() || !comment.trim()) {
      toast({ title: "Faltan campos", description: "Todos los campos son obligatorios.", variant: "destructive" });
      return;
    }
    if (comment.trim().length < 10) {
      toast({ title: "Comentario muy corto", description: "Escribe al menos 10 caracteres.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-review", {
        body: { name, city, service, rating, comment },
      });
      if (error) {
        let msg = "No fue posible enviar tu reseña.";
        const ctx = (error as { context?: Response }).context;
        try {
          const body = ctx ? await ctx.json() : null;
          if (body?.error) msg = body.error;
        } catch { /* noop */ }
        toast({ title: "Reseña no publicada", description: msg, variant: "destructive" });
        return;
      }
      if (data?.ok) {
        toast({ title: "¡Gracias por tu reseña!", description: "Ya está publicada en el sitio." });
        setName(""); setCity(""); setService(SERVICES[0]); setRating(5); setComment("");
        loadReviews();
      } else {
        toast({ title: "Reseña no publicada", description: data?.error ?? "Intenta de nuevo.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "No fue posible enviar tu reseña.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="resenas" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            Testimonios
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-3 leading-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Experiencias reales de personas y empresas que ya trabajan con Independencia Digital.
          </p>
        </div>

        {/* Carrusel */}
        <div className="mb-16">
          {loading ? (
            <p className="text-center text-muted-foreground">Cargando reseñas…</p>
          ) : reviews.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Aún no hay reseñas publicadas. ¡Sé el primero en dejar la tuya!
            </p>
          ) : (
            <Carousel
              opts={{ align: "start", loop: reviews.length > 2, dragFree: true }}
              plugins={[
                Autoplay({
                  delay: 3500,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="max-w-5xl mx-auto"
            >
              <CarouselContent>
                {reviews.map((r) => (
                  <CarouselItem key={r.id} className="md:basis-1/2 lg:basis-1/3">
                    <ReviewCard r={r} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          )}
        </div>

        {/* Formulario */}
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="text-center mb-6">
            <h3 className="font-heading font-bold text-2xl text-foreground">Deja tu reseña</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Tu opinión ayuda a otras personas a confiar en nosotros.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Nombre *</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={80}
                  placeholder="Tu nombre"
                  className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Ciudad *</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  maxLength={80}
                  placeholder="Santiago, Punta Arenas…"
                  className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Servicio *</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              >
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Tu calificación *</label>
              <StarRow value={rating} onChange={setRating} interactive />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5">Comentario *</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                minLength={10}
                maxLength={800}
                rows={5}
                placeholder="Cuéntanos tu experiencia…"
                className="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Sin insultos, sin código ni SQL. Validamos el contenido con IA antes de publicar.
              </p>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full gradient-brand text-primary-foreground font-heading font-semibold text-base py-3 rounded-lg shadow-brand hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {submitting ? "Publicando…" : "Publicar reseña"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
