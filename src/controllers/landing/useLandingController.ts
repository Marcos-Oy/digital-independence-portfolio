import { useEffect, useState } from "react";

export const useLandingController = (pageTitle: string) => {
  const [leadOpen, setLeadOpen] = useState(false);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return { leadOpen, setLeadOpen };
};
