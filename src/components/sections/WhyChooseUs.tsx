"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Palette, IndianRupee, Package, Hammer } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const reasons = [
  {
    icon: Heart,
    title: "Handcrafted with care",
    description:
      "Every single piece is made by hand, with genuine care and artistic intention — never mass-produced, never rushed.",
    color: "bg-coral/15 text-coral-dark",
    accent: "#E8B0A8",
  },
  {
    icon: Palette,
    title: "Fully customisable",
    description:
      "Name, color palette, size, style, material — almost every element of your order can be tailored exactly to your vision.",
    color: "bg-teal/15 text-teal-dark",
    accent: "#79C5C8",
  },
  {
    icon: IndianRupee,
    title: "Budget-friendly pricing",
    description:
      "Premium craftsmanship shouldn't break the bank. We offer quality pieces starting from just ₹499, with something for every budget.",
    color: "bg-sage/15 text-sage-dark",
    accent: "#8EA89A",
  },
  {
    icon: Package,
    title: "Bulk orders available",
    description:
      "Wedding favours, corporate gifting, festive hampers — we handle bulk orders with the same attention to quality, at better per-piece pricing.",
    color: "bg-coral/15 text-coral-dark",
    accent: "#E8B0A8",
  },
  {
    icon: Hammer,
    title: "Workshops & DIY kits",
    description:
      "Want to create your own? Join one of our hands-on resin workshops or order a complete DIY kit to craft at home.",
    color: "bg-teal/15 text-teal-dark",
    accent: "#79C5C8",
  },
  {
    icon: WhatsAppIcon,
    title: "Direct designer interaction",
    description:
      "You speak directly with Suhani — no middlemen, no bots. Get personalised design advice and a truly bespoke piece.",
    color: "bg-sage/15 text-sage-dark",
    accent: "#8EA89A",
  },
];

export default function WhyChooseUs() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="about" className="py-24 bg-charcoal overflow-hidden">
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
            <span className="font-body text-xs uppercase tracking-[0.3em] text-teal">Why us</span>
            <div className="h-px w-12 bg-teal" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-ivory tracking-tight">
            The Adore via Décor difference
          </h2>
          <p className="font-body text-base text-ivory/50 mt-4 max-w-xl mx-auto leading-relaxed">
            We're not a factory. We're a small, passionate studio where every order gets full creative attention.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white/5 border border-white/8 card-craft p-8 hover:bg-white/8 transition-all duration-400 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3.5 rounded-2xl mb-5 ${reason.color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold text-ivory mb-3 tracking-tight">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-ivory/55 leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
