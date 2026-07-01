import { useContext } from "react";
import { LeadFormContext } from "@/controllers/leadFormContext";

export const useLeadForm = () => {
  const ctx = useContext(LeadFormContext);
  if (!ctx) throw new Error("useLeadForm debe usarse dentro de <LeadFormProvider>");
  return ctx;
};
