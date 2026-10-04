"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { getGeneralWhatsAppURL } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-2xl shadow-card p-4 w-56 mr-2"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center text-charcoal/30 hover:text-charcoal/60"
                  aria-label="Close tooltip"
                >
                  <X size={12} />
                </button>
                <p className="font-body text-xs text-charcoal/50 mb-0.5 uppercase tracking-[0.1em]">Chat with us</p>
                <p className="font-display text-sm font-semibold text-charcoal mb-2">
                  Hi! 👋 Suhani here.
                </p>
                <p className="font-body text-xs text-charcoal/60 leading-relaxed mb-3">
                  Have questions or ready to order? Message me directly!
                </p>
                <a
                  href={getGeneralWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-xs py-2"
                >
                  Start chatting
                </a>
                {/* Arrow */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 shadow-sm" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => setShowTooltip(!showTooltip)}
            className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-hover flex items-center justify-center hover:bg-[#1ebe5d] transition-colors relative"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={24} fill="white" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" aria-hidden />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
