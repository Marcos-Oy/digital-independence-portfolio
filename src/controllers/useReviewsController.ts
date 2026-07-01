import { useEffect, useState, type FormEvent } from "react";
import { toast } from "@/hooks/use-toast";
import { type Review, REVIEW_SERVICE_OPTIONS, loadReviews, submitReview } from "@/models/reviews";

export const useReviewsController = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState(REVIEW_SERVICE_OPTIONS[0]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const refreshReviews = async () => {
    const data = await loadReviews();
    setReviews(data);
    setLoading(false);
  };

  useEffect(() => {
    refreshReviews();
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
      const result = await submitReview({ name, city, service, rating, comment });
      if (result.ok) {
        toast({ title: "¡Gracias por tu reseña!", description: "Ya está publicada en el sitio." });
        setName(""); setCity(""); setService(REVIEW_SERVICE_OPTIONS[0]); setRating(5); setComment("");
        refreshReviews();
      } else {
        toast({ title: "Reseña no publicada", description: result.message, variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "No fue posible enviar tu reseña.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return {
    reviews,
    loading,
    submitting,
    name,
    setName,
    city,
    setCity,
    service,
    setService,
    rating,
    setRating,
    comment,
    setComment,
    handleSubmit,
  };
};
