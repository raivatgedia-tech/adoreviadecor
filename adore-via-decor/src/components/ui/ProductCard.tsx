"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { Product } from "@/types";
import { getProductWhatsAppURL } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export default function ProductCard({ product, onOpenModal }: ProductCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-offwhite rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-400 hover:-translate-y-1 flex flex-col"
    >
      {/* Image */}
      <div
        className="relative aspect-[4/3] overflow-hidden cursor-pointer"
        onClick={() => onOpenModal(product)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onOpenModal(product)}
        aria-label={`View ${product.name} details`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isBestseller && (
            <span className="bg-teal text-white font-body text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full shadow-soft">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="bg-coral text-white font-body text-[9px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full shadow-soft">
              New
            </span>
          )}
        </div>

        {product.isCustomizable && (
          <div className="absolute top-3 right-3">
            <span className="bg-ivory/90 backdrop-blur-sm text-charcoal font-body text-[9px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-full flex items-center gap-1 shadow-soft">
              <Sparkles size={9} />
              Customisable
            </span>
          </div>
        )}

        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors duration-400 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <span className="bg-ivory text-charcoal font-body text-xs px-4 py-2 rounded-full shadow-card">
              Quick view
            </span>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div
          className="cursor-pointer flex-1"
          onClick={() => onOpenModal(product)}
          role="button"
          tabIndex={-1}
        >
          <p className="font-body text-[10px] uppercase tracking-[0.2em] text-sage mb-1.5">
            {product.category.replace(/-/g, " ")}
          </p>
          <h3 className="font-display text-lg font-semibold text-charcoal mb-2 leading-snug">
            {product.name}
          </h3>
          <p className="font-body text-sm text-charcoal/55 leading-relaxed line-clamp-2 mb-3">
            {product.shortDescription}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-charcoal/6">
          <div>
            <span className="font-body text-[10px] text-charcoal/40 uppercase tracking-[0.1em]">from</span>
            <p className="font-display text-xl font-semibold text-charcoal">
              ₹{product.startingPrice.toLocaleString("en-IN")}
            </p>
          </div>
          <a
            href={getProductWhatsAppURL(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs px-4 py-2.5"
            aria-label={`Order ${product.name} on WhatsApp`}
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle size={13} />
            Order
          </a>
        </div>
      </div>
    </motion.article>
  );
}
