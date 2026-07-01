import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { searchAll } from "@/models/search";

export const useSiteNavbarController = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"servicios" | "segmentos" | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const goSection = (id: string) => {
    setOpen(false);
    setOpenMenu(null);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const openSearch = () => {
    setSearchOpen(true);
    setSearchQuery("");
    setTimeout(() => searchInputRef.current?.focus(), 50);
  };

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    setSearchQuery("");
  }, []);

  const handleResultClick = (href: string) => {
    closeSearch();
    if (href.startsWith("/#")) {
      if (location.pathname === "/") {
        const id = href.slice(2);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    } else {
      navigate(href);
    }
  };

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeSearch(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen, closeSearch]);

  const results = searchAll(searchQuery);
  const hasQuery = searchQuery.trim().length >= 2;

  return {
    open,
    setOpen,
    openMenu,
    setOpenMenu,
    searchOpen,
    searchQuery,
    setSearchQuery,
    searchInputRef,
    goSection,
    openSearch,
    closeSearch,
    handleResultClick,
    results,
    hasQuery,
  };
};
