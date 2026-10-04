"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";

// Solid-colour placeholder tiles, per the approved design — swap for real
// Instagram photos once Suhani has a content library to pull from.
const tileColors = ["#4E9E93", "#E8887E", "#ECC85C", "#8B3A3A", "#1D4C3A", "#E8887E"];

export default function InstagramShowcase() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 bg-offwhite overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
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
            <span className="font-body text-xs uppercase tracking-[0.3em] text-teal">Follow along</span>
            <div className="h-px w-12 bg-teal" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal tracking-tight">
            Follow Our Creative Journey
          </h2>
          <p className="font-body text-base text-charcoal/55 mt-3 max-w-sm mx-auto">
            @adoreviadecor
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 mb-10">
          {tileColors.map((color, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/adore.viadecor"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              style={{ backgroundColor: color }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              aria-label="Visit our Instagram"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-charcoal/10">
                <Instagram size={24} className="text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <a
            href="https://instagram.com/adore.viadecor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-purple-500 via-pink-500 to-coral text-white font-body font-medium text-sm rounded-full shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            <Instagram size={16} />
            Follow @adore.viadecor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
