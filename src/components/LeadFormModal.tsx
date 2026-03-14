"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  // Load the form embed script
  useEffect(() => {
    if (!document.querySelector('script[src="https://link.novadatech.com/js/form_embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://link.novadatech.com/js/form_embed.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-navy-900 border border-white/[0.08] rounded-2xl shadow-2xl overflow-y-auto max-h-[95vh]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all duration-200"
              aria-label="Close form"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Progress bar */}
            <div className="mx-6 mt-6 mb-4">
              <div className="w-full h-8 rounded-full bg-white/10 overflow-hidden relative">
                <div className="absolute inset-y-0 left-0 w-[70%] rounded-full bg-gradient-to-r from-gold-500 to-gold-400 flex items-center justify-center">
                  <span className="text-xs font-bold text-navy-950 tracking-wide">
                    Progressing...
                  </span>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                10x Your Leads &amp; Revenue{" "}
                <span className="underline decoration-gold-400 decoration-2 underline-offset-4">
                  Within 30 Days
                </span>
                ; Get 100%{" "}
                <span className="gradient-text font-extrabold">
                  Free Growth Strategy Call
                </span>{" "}
                With Our Expert Marketing Specialist...
              </h2>

              {/* Urgency banner */}
              <div className="mt-4 mb-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 text-center">
                <span className="text-sm font-bold text-navy-950 tracking-wide">
                  Spots are Free But LIMITED!
                </span>
              </div>
            </div>

            {/* Form container */}
            <div className="p-6 pt-4">
              <iframe
                src="https://link.novadatech.com/widget/form/2UikgU0iSTsy1ax334cR"
                style={{
                  width: "100%",
                  height: "557px",
                  border: "none",
                  borderRadius: "3px",
                }}
                id="inline-2UikgU0iSTsy1ax334cR"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="01Leads/Booking"
                data-height="557"
                data-layout-iframe-id="inline-2UikgU0iSTsy1ax334cR"
                data-form-id="2UikgU0iSTsy1ax334cR"
                title="01Leads/Booking"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
