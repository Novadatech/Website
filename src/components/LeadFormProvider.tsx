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

  const openForm = useCallback(() => setIsOpen(true), []);
  const closeForm = useCallback(() => setIsOpen(false), []);

  // Intercept all CTA clicks (links with href="/book-call")
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href="/book-call"]');
      if (target) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        openForm();
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [openForm]);

  return (
    <LeadFormContext.Provider value={{ openForm }}>
      {children}
      <LeadFormModal isOpen={isOpen} onClose={closeForm} />
    </LeadFormContext.Provider>
  );
}
