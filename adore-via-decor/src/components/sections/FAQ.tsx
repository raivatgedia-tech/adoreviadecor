"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/content";

function FAQItem({ faq, isOpen, onToggle }: {
  faq: typeof faqs[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-charcoal/8 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg font-medium text-charcoal group-hover:text-teal transition-colors leading-snug">
          {faq.question}
        </span>
        <span className="shrink-0 mt-0.5">
          {isOpen ? (
            <Minus size={16} className="text-teal" />
          ) : (
            <Plus size={16} className="text-charcoal/40 group-hover:text-teal transition-colors" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-charcoal/60 leading-relaxed pb-5 pr-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const categoryLabels: Record<string, string> = {
  customization: "Customisation",
  pricing: "Pricing",
  shipping: "Shipping",
  delivery: "Delivery",
  bulk: "Bulk Orders",
  workshops: "Workshops",
};

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("f-001");
  const [filter, setFilter] = useState<string>("all");
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  const categories = ["all", ...Array.from(new Set(faqs.map((f) => f.category)))];
  const filtered = filter === "all" ? faqs : faqs.filter((f) => f.category === filter);

  return (
    <section className="py-24 section-padding max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-teal" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-teal">Got questions?</span>
          <div className="h-px w-12 bg-teal" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal tracking-tight">
          Frequently Asked Questions
        </h2>
      </motion.div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`font-body text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
              filter === cat
                ? "bg-teal text-white border-teal"
                : "border-charcoal/15 text-charcoal/60 hover:border-teal/40 hover:text-teal"
            }`}
          >
            {cat === "all" ? "All" : categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-offwhite rounded-3xl shadow-soft px-8 py-2"
      >
        {filtered.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
          />
        ))}
      </motion.div>
    </section>
  );
}
