"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const checklist = ["100% Hand-made", "Personalised", "Quality Materials", "Perfect for Gifting & Décor"];

export default function OurStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-24 bg-ivory overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-card p-8 aspect-square flex items-center justify-center">
              <img src="/logo-full.png" alt="Adore via Décor by Suhani" className="w-full h-auto max-w-xs" />
            </div>
            <div className="absolute -bottom-5 left-6 bg-coral text-offwhite rounded-2xl shadow-card px-5 py-3.5">
              <p className="font-body text-xs font-medium opacity-90">Meet the Maker</p>
              <p className="font-display text-xl font-bold -mt-0.5">Suhani</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-coral/15 text-coral font-body text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal tracking-tight mb-3">
              Welcome to Adore-via-Décor by Suhani
            </h2>
            <p className="font-accent italic text-maroon text-lg mb-5">&ldquo;where Art Meets Heart&rdquo;</p>
            <p className="font-body text-charcoal/65 leading-relaxed mb-4">
              At Adore-via-Décor, we say it is handcrafted — but really, it comes from the heart. Every piece is a labour of love, beauty and uniqueness, made for your spaces and celebrations.
            </p>
            <p className="font-body text-charcoal/65 leading-relaxed mb-7">
              What started as a personal passion for art has grown into a one-stop shop for personalised gifting, unique home décor and memorable art experiences — blending Decoupage, Lippan, Resin, Deco Transfer and hand-painted craft into one heartfelt brand.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {checklist.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-teal/30 text-teal-dark font-body text-xs font-semibold"
                >
                  <Sparkles size={11} />
                  {item}
                </span>
              ))}
            </div>
            <a href="#catalogue" className="btn-primary shadow-soft">
              Read Our Full Story
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
