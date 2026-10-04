"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, MessageCircle, CheckCircle, Hammer, Package } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Choose a product",
    description: "Browse our catalogue and pick the piece that speaks to you — or describe your dream piece and we'll design it from scratch.",
    color: "bg-teal/15",
    iconColor: "text-teal-dark",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Discuss your design",
    description: "Reach out on WhatsApp. Suhani personally discusses your vision, customisation preferences, colors, size, and any special touches.",
    color: "bg-coral/15",
    iconColor: "text-coral-dark",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Approve your mockup",
    description: "For custom orders, we create a digital design preview for you to review. We only proceed when you're fully satisfied.",
    color: "bg-sage/15",
    iconColor: "text-sage-dark",
  },
  {
    icon: Hammer,
    number: "04",
    title: "Crafting in progress",
    description: "Your piece enters our studio. Every step is done by hand, with full care and artistic attention. We'll keep you updated.",
    color: "bg-teal/15",
    iconColor: "text-teal-dark",
  },
  {
    icon: Package,
    number: "05",
    title: "Delivered to your door",
    description: "Your order is packed with love in premium packaging and dispatched. We ship pan-India, safely and securely.",
    color: "bg-coral/15",
    iconColor: "text-coral-dark",
  },
];

export default function CustomisationProcess() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 bg-gradient-to-b from-ivory to-offwhite overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-teal" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-teal">How it works</span>
            <div className="h-px w-12 bg-teal" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal tracking-tight">
            Your custom piece, step by step
          </h2>
          <p className="font-body text-base text-charcoal/55 mt-4 max-w-xl mx-auto leading-relaxed">
            From idea to doorstep — a seamless, personal experience with full transparency at every stage.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-px bg-gradient-to-r from-teal/20 via-coral/30 to-teal/20" aria-hidden />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-soft relative z-10`}>
                      <Icon size={22} className={step.iconColor} />
                    </div>
                    <span className="absolute -bottom-2 -right-2 font-display text-3xl font-bold text-charcoal/6 select-none pointer-events-none">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-charcoal mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-charcoal/55 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
