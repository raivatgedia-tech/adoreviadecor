"use client";

import { motion } from "framer-motion";
import { getBulkOrderWhatsAppURL } from "@/lib/whatsapp";

export default function WorkshopBulkBanner() {

  return (
    <section className="section-padding max-w-7xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-gradient-coral rounded-3xl px-8 sm:px-12 py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-8 overflow-hidden"
      >
        <div className="relative z-10 text-center sm:text-left">
          <h3 className="font-display text-3xl sm:text-4xl font-semibold text-offwhite mb-3">
            Workshops, DIY &amp; Bulk Orders
          </h3>
          <p className="font-body text-sm text-offwhite/90 max-w-lg leading-relaxed">
            We host live workshops or DIY activities at birthdays, kitty parties, corporate events, family get-togethers &amp; weddings — and take on bulk &amp; corporate orders too!
          </p>
        </div>
        <a
          href={getBulkOrderWhatsAppURL()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 shrink-0 inline-flex items-center justify-center px-10 py-5 bg-offwhite text-coral-dark font-body font-bold text-sm rounded-2xl shadow-hover hover:-translate-y-0.5 transition-all duration-300"
        >
          Enquire Now
        </a>
      </motion.div>
    </section>
  );
}
