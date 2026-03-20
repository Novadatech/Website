"use client";

import { createContext, useContext } from "react";

const LeadFormContext = createContext<{ openForm: () => void }>({
  openForm: () => {},
});

export function useLeadForm() {
  return useContext(LeadFormContext);
}

export default function LeadFormProvider({ children }: { children: React.ReactNode }) {
  return (
    <LeadFormContext.Provider value={{ openForm: () => {} }}>
      {children}
    </LeadFormContext.Provider>
  );
}
