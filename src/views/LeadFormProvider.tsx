import { useState, type ReactNode } from "react";
import { LeadFormContext } from "@/controllers/leadFormContext";
import LeadFormDialogView from "@/views/landing/LeadFormDialogView";

const LeadFormProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("site");

  const openLeadForm = (nextSource: string) => {
    setSource(nextSource);
    setOpen(true);
  };

  return (
    <LeadFormContext.Provider value={{ openLeadForm }}>
      {children}
      <LeadFormDialogView open={open} onOpenChange={setOpen} source={source} />
    </LeadFormContext.Provider>
  );
};

export default LeadFormProvider;
