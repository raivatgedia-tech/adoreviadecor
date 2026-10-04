"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { products, productCategories } from "@/data/products";
import { Product, ProductCategory } from "@/types";
import ProductCard from "@/components/ui/ProductCard";
import ProductModal from "@/components/ui/ProductModal";

export default function ProductCatalogue() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogue" className="py-24 section-padding max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-teal" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-teal">Our work</span>
          <div className="h-px w-12 bg-teal" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal tracking-tight">
          Product Catalogue
        </h2>
        <p className="font-body text-base text-charcoal/55 mt-4 max-w-xl mx-auto leading-relaxed">
          Browse our full collection. Every piece is made-to-order and can be customised.
          Tap a product to see details, then reach out on WhatsApp to order.
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2.5 justify-center mb-12">
        <button
          onClick={() => setActiveCategory("all")}
          className={`font-body text-xs px-5 py-2.5 rounded-full border transition-all duration-200 ${
            activeCategory === "all"
              ? "bg-teal text-white border-teal shadow-soft"
              : "border-charcoal/15 text-charcoal/60 hover:border-teal/40 hover:text-teal"
          }`}
        >
          All ({products.length})
        </button>
        {productCategories.map((cat) => {
          const count = products.filter((p) => p.category === cat.id).length;
          if (count === 0) return null;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as ProductCategory)}
              className={`font-body text-xs px-5 py-2.5 rounded-full border transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-teal text-white border-teal shadow-soft"
                  : "border-charcoal/15 text-charcoal/60 hover:border-teal/40 hover:text-teal"
              }`}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={setSelectedProduct}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
