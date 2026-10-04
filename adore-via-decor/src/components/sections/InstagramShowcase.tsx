"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";

const instagramImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
  "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
  "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80",
  "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&q=80",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
];

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
            As seen on Instagram
          </h2>
          <p className="font-body text-base text-charcoal/55 mt-3 max-w-sm mx-auto">
            Behind the scenes, new drops, and happy customers.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {instagramImages.map((img, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/adore.viadecor"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              aria-label={`View post ${i + 1} on Instagram`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                aria-hidden
              />
              <div className="absolute inset-0 bg-teal/0 group-hover:bg-teal/30 transition-colors duration-400 flex items-center justify-center">
                <Instagram
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
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
