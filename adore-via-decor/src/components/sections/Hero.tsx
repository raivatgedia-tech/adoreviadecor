"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Sparkles, ArrowDown } from "lucide-react";
import { getGeneralWhatsAppURL } from "@/lib/whatsapp";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
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
      {/* Decorative bg shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-teal/8 blur-3xl"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-coral/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, -8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[280px] h-[280px] rounded-full bg-sage/8 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />
      </div>

      <div className="section-padding max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity }}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-teal" />
              <span className="font-body text-xs uppercase tracking-[0.3em] text-teal font-medium">
                Handcrafted with love
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-charcoal leading-[1.1] tracking-tight mb-6"
            >
              Where art
              <br />
              <em className="italic text-teal not-italic font-semibold">meets</em> every
              <br />
              cherished moment.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-body text-base sm:text-lg text-charcoal/60 leading-relaxed max-w-md mb-10"
            >
              Premium resin art, personalised name plates, wedding gifts & festive décor — each piece crafted to order, just for you.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#catalogue"
                className="btn-primary shadow-soft"
              >
                <Sparkles size={15} />
                Browse Collection
              </a>
              <a
                href={getGeneralWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp shadow-soft"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 mt-14"
            >
              {[
                { num: "500+", label: "Happy customers" },
                { num: "100%", label: "Customisable" },
                { num: "4.9★", label: "Average rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-semibold text-charcoal">{stat.num}</p>
                  <p className="font-body text-xs text-charcoal/50 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image collage */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ y }}
          >
            <div className="relative w-full aspect-[4/5]">
              {/* Main image */}
              <motion.div
                className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-hover"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=90"
                  alt="Handcrafted resin art pieces"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
              </motion.div>

              {/* Floating accent card */}
              <motion.div
                className="absolute -left-10 top-1/4 bg-ivory rounded-2xl shadow-card p-4 w-44"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-sage mb-1">Featured</p>
                <p className="font-display text-sm font-semibold text-charcoal">Floral Resin<br />Name Plate</p>
                <p className="font-body text-xs text-teal mt-1.5">From ₹799</p>
              </motion.div>

              {/* Badge */}
              <motion.div
                className="absolute -right-6 bottom-1/4 bg-teal rounded-2xl shadow-card p-4 text-white"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <p className="font-body text-[10px] uppercase tracking-[0.15em] text-teal-light mb-0.5">Made in</p>
                <p className="font-display text-sm font-bold">Mumbai 🇮🇳</p>
                <p className="font-body text-[10px] text-teal-light mt-0.5">Ships pan-India</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ opacity }}
      >
        <span className="font-body text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
