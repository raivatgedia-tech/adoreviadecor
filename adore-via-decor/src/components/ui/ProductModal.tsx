"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Clock, Package, Wrench } from "lucide-react";
import { Product } from "@/types";
import { getProductWhatsAppURL } from "@/lib/whatsapp";
import { useEffect } from "react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="pointer-events-auto w-full max-w-4xl bg-ivory rounded-4xl shadow-hover overflow-hidden max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label={product.name}
            >
              {/* Close button */}
              <button
                className="absolute top-5 right-5 z-10 w-9 h-9 bg-charcoal/10 hover:bg-charcoal/20 rounded-full flex items-center justify-center transition-colors"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="aspect-square md:aspect-auto md:min-h-[500px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {product.isBestseller && (
                        <span className="bg-teal/15 text-teal-dark font-body text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full">
                          Bestseller
                        </span>
                      )}
                      {product.isNew && (
                        <span className="bg-coral/20 text-coral-dark font-body text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full">
                          New
                        </span>
                      )}
                      {product.isCustomizable && (
                        <span className="bg-sage/15 text-sage-dark font-body text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full">
                          Customisable
                        </span>
                      )}
                    </div>

                    <h2 className="font-display text-3xl font-semibold text-charcoal mb-1 leading-tight">
                      {product.name}
                    </h2>
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-sage mb-4">
                      {product.category.replace(/-/g, " ")}
                    </p>

                    <p className="font-body text-sm text-charcoal/65 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Materials */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2.5">
                        <Package size={13} className="text-teal" />
                        <span className="font-body text-xs uppercase tracking-[0.2em] text-charcoal/60">Materials</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.materials.map((m) => (
                          <span key={m} className="bg-teal/10 text-charcoal/70 font-body text-xs px-3 py-1 rounded-full">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Customization options */}
                    {product.customizationOptions && product.customizationOptions.length > 0 && (
                      <div className="mb-5">
                        <div className="flex items-center gap-2 mb-2.5">
                          <Wrench size={13} className="text-coral" />
                          <span className="font-body text-xs uppercase tracking-[0.2em] text-charcoal/60">Customisation options</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {product.customizationOptions.map((opt) => (
                            <span key={opt} className="bg-coral/10 text-charcoal/70 font-body text-xs px-3 py-1 rounded-full">
                              {opt}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Delivery */}
                    <div className="flex items-center gap-2 bg-sage/10 rounded-2xl px-4 py-3">
                      <Clock size={14} className="text-sage-dark shrink-0" />
                      <div>
                        <span className="font-body text-[10px] uppercase tracking-[0.15em] text-sage-dark">Delivery timeline</span>
                        <p className="font-body text-sm text-charcoal/70">{product.deliveryTimeline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="mt-8 pt-6 border-t border-charcoal/8">
                    <div className="flex items-end justify-between mb-5">
                      <div>
                        <p className="font-body text-xs text-charcoal/40 uppercase tracking-[0.1em]">Starting from</p>
                        <p className="font-display text-4xl font-semibold text-charcoal">
                          ₹{product.startingPrice.toLocaleString("en-IN")}
                        </p>
                        <p className="font-body text-xs text-charcoal/40 mt-0.5">Final price based on customisation</p>
                      </div>
                    </div>
                    <a
                      href={getProductWhatsAppURL(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp w-full justify-center"
                    >
                      <MessageCircle size={16} />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
