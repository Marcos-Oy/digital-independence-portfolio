import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadFormValues } from "@/models/lead";

export type LeadFormStatus = "idle" | "submitting" | "success";

interface UseLeadFormControllerArgs {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const useLeadFormController = ({ open, onOpenChange }: UseLeadFormControllerArgs) => {
  const [status, setStatus] = useState<LeadFormStatus>("idle");

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { nombre: "", email: "", telefono: "", mensaje: "" },
  });

  const onSubmit = () => {
    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
    }, 700);
  };

  const handleOpenChange = (next: boolean) => {
    onOpenChange(next);
    if (!next) {
      window.setTimeout(() => {
        setStatus("idle");
        form.reset();
      }, 250);
    }
  };

  return { open, status, form, onSubmit, handleOpenChange };
};
