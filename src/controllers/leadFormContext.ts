import { createContext } from "react";

export interface LeadFormContextValue {
  openLeadForm: (source: string) => void;
}

export const LeadFormContext = createContext<LeadFormContextValue | null>(null);
