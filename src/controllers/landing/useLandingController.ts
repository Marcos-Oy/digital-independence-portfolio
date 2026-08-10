import { useEffect } from "react";

export const useLandingController = (pageTitle: string) => {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
};
