"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";
import { getGeneralWhatsAppURL } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import LiveTicker from "@/components/ui/LiveTicker";
import { Product } from "@/types";

export default function Hero({ products }: { products: Product[] }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
      aria-label="Hero"
    >
      <div className="section-padding max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen pt-56 pb-24">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity }}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-coral/15 text-coral font-body text-xs uppercase tracking-[0.2em] font-semibold">
                Where Art Meets Heart
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-charcoal leading-[1.1] tracking-tight mb-6"
            >
              One-stop shop for all your <span className="text-coral font-semibold">gifting &amp; décor</span> needs
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-body text-base sm:text-lg text-charcoal/60 leading-relaxed max-w-md mb-8"
            >
              At Adore-via-Décor, we say our pieces are handcrafted — but really, they come from the heart. Every piece is a labour of love and beauty, unique to your spaces and celebrations.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14">
              <a href="#catalogue" className="btn-primary shadow-soft">
                <Sparkles size={15} />
                Explore Our Art
              </a>
              <a href="#workshops" className="btn-outline shadow-soft">
                Book a Workshop
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-8">
              {[
                { num: "5+", label: "Art Forms Mastered" },
                { num: "100%", label: "Handmade & Personalised" },
                { num: "1000+", label: "Happy Customers" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-9 bg-charcoal/10" />}
                  <div>
                    <p className="font-display text-2xl font-semibold text-charcoal">{stat.num}</p>
                    <p className="font-body text-xs text-charcoal/50 mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: live ticker of newest products, replacing the static circles */}