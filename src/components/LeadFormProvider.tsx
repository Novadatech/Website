"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import LeadFormModal from "./LeadFormModal";

const LeadFormContext = createContext<{ openForm: () => void }>({
  openForm: () => {},
});

export function useLeadForm() {
  return useContext(LeadFormContext);
}

export default function LeadFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [autoShown, setAutoShown] = useState(false);

  const openForm = useCallback(() => setIsOpen(true), []);
  const closeForm = useCallback(() => setIsOpen(false), []);

  // Auto-pop on first visit after 3 seconds
  useEffect(() => {
    if (autoShown) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      setAutoShown(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [autoShown]);

  // Intercept all CTA clicks (links with href="/book")
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href="/book"]');
      if (target) {
        e.preventDefault();
        openForm();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [openForm]);

  return (
    <LeadFormContext.Provider value={{ openForm }}>
      {children}
      <LeadFormModal isOpen={isOpen} onClose={closeForm} />
    </LeadFormContext.Provider>
  );
}
