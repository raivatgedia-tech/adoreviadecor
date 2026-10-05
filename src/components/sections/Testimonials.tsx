"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/content";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < rating ? "text-gold fill-gold" : "text-charcoal/20"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  // Show 3 at a time on desktop
  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-ivory to-offwhite overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-teal" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-teal">Kind Words</span>
            <div className="h-px w-12 bg-teal" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal tracking-tight">
            Loved by Our Customers
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {visible.map((t, i) => (
              <motion.div
                key={`${t.id}-${current}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-peach card-craft p-8 shadow-soft relative"
              >
                <Quote size={24} className="text-coral/40 mb-4 fill-coral/10" />
                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-6 italic">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal text-offwhite flex items-center justify-center font-display font-semibold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-charcoal">{t.name}</p>
                    <p className="font-body text-xs text-charcoal/45">{t.location}</p>
                    <StarRating rating={t.rating} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: 1 card */}
          <div className="md:hidden">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-peach card-craft p-8 shadow-soft"
            >
              <Quote size={24} className="text-coral/40 mb-4 fill-coral/10" />
              <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-6 italic">
                &ldquo;{testimonials[current].review}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-teal text-offwhite flex items-center justify-center font-display font-semibold text-sm shrink-0">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-charcoal">{testimonials[current].name}</p>
                  <p className="font-body text-xs text-charcoal/45">{testimonials[current].location}</p>
                  <StarRating rating={testimonials[current].rating} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center hover:bg-teal/10 hover:border-teal/40 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-teal"
                      : "w-2 h-2 bg-charcoal/15 hover:bg-teal/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-charcoal/15 flex items-center justify-center hover:bg-teal/10 hover:border-teal/40 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
