"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";
import { getGeneralWhatsAppURL } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
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
      {/* Flat-colour brushstroke washes — echoes the logo's paint-swipe
          backdrop instead of a soft blurred-blob gradient. */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <motion.svg
          viewBox="0 0 500 500"
          className="absolute -top-16 right-[-8%] w-[65%] max-w-[640px] opacity-[0.16]"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M40,150 C120,70 270,55 350,120 C430,185 410,290 320,315 C220,342 40,300 40,150 Z"
            fill="#3E8F8F"
          />
        </motion.svg>
        <motion.svg
          viewBox="0 0 500 500"
          className="absolute bottom-[-10%] left-[-6%] w-[50%] max-w-[520px] opacity-[0.14]"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <path
            d="M300,420 C390,395 470,440 455,515 C440,590 330,605 265,570 C200,535 215,445 300,420 Z"
            fill="#D97D62"
          />
        </motion.svg>
        <motion.svg
          viewBox="0 0 300 300"
          className="absolute top-[38%] left-[6%] w-[20%] max-w-[220px] opacity-[0.16]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          <path
            d="M60,120 C40,70 90,30 150,40 C210,50 230,110 190,150 C150,190 80,170 60,120 Z"
            fill="#A88F63"
          />
        </motion.svg>
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
              <span className="font-body text-xs uppercase tracking-[0.3em] text-sage font-medium">
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
              className="font-body text-base sm:text-lg text-charcoal/60 leading-relaxed max-w-md mb-8"
            >
              Premium resin art, personalised name plates, wedding gifts & festive décor — handcrafted in Mumbai and styled entirely around you.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-signature text-2xl text-coral -rotate-1 mb-8"
            >
              — designed &amp; handcrafted by Suhani
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
                <WhatsAppIcon size={15} />
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

          {/* Right: signature line-art illustration, drawn on load —
              stands in for a stock photo collage and mirrors the brand's
              own one-line logo motif. */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ y }}
          >
            <div className="relative w-full aspect-square max-w-[520px]">
              <svg
                viewBox="0 0 500 560"
                className="w-full h-full"
                fill="none"
                aria-hidden
              >
                {/* the continuous line */}
                <motion.path
                  d="M70,470 C70,390 150,390 160,320 C170,250 100,230 110,170 C120,110 210,90 250,140
                     C290,190 220,235 265,275 C310,315 395,295 415,215 C432,148 380,95 305,90
                     C245,86 195,125 220,168"
                  stroke="#26211C"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1], delay: 0.6 }}
                />
                {/* a second, teal thread crossing it — the "thread" that ties every piece together */}
                <motion.path
                  d="M90,180 C160,110 250,105 300,165 C350,225 300,290 350,330 C400,370 440,330 430,270"
                  stroke="#3E8F8F"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: [0.65, 0, 0.35, 1], delay: 1.5 }}
                />
                {/* accent dots — where a bead of resin or gold leaf catches light */}
                {[
                  { cx: 160, cy: 320, r: 6, fill: "#D97D62", delay: 2.9 },
                  { cx: 265, cy: 275, r: 5, fill: "#A88F63", delay: 3.15 },
                  { cx: 415, cy: 215, r: 7, fill: "#3E8F8F", delay: 3.4 },
                ].map((dot) => (
                  <motion.circle
                    key={`${dot.cx}-${dot.cy}`}
                    cx={dot.cx}
                    cy={dot.cy}
                    r={dot.r}
                    fill={dot.fill}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: dot.delay, ease: [0.34, 1.56, 0.64, 1] }}
                  />
                ))}
              </svg>

              {/* Made in Mumbai mark, anchored bottom-right of the illustration */}
              <motion.div
                className="absolute -right-4 bottom-6 bg-teal card-craft shadow-card px-5 py-3.5 text-offwhite"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.6 }}
              >
                <p className="font-body text-[10px] uppercase tracking-[0.15em] text-teal-light mb-0.5">Made in</p>
                <p className="font-display text-sm font-bold">Mumbai, India</p>
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
