import { useEffect, useState } from "react";

export const useGeneralLandingController = () => {
  const [leadOpen, setLeadOpen] = useState(false);

  useEffect(() => {
    document.title = "Independencia Digital | Diagnóstico gratuito";
  }, []);

  return { leadOpen, setLeadOpen };
};
