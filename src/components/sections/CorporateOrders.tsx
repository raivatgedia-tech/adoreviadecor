"use client";

import { motion } from "framer-motion";
import { Users, Gift, Star, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Users,
    title: "Employee Appreciation",
    description: "Personalised desk décor, name plates, and keepsakes for your team. Make every employee feel seen.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    icon: Gift,
    title: "Client & Partner Gifts",
    description: "Premium branded resin art and custom gifting solutions that leave a lasting impression on clients.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
  },
  {
    icon: Star,
    title: "Wedding Hampers",
    description: "Bespoke wedding welcome kits, bridal hampers, and guest favours crafted to your exact theme.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80",
  },
  {
    icon: Building2,
    title: "Corporate Branding",
    description: "Add your logo, brand colors, and messaging to our resin pieces for a truly unique branded gift.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
  },
];

export default function CorporateOrders() {

  return (
    <section id="corporate" className="py-24 section-padding max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-teal" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-teal">For businesses</span>
          <div className="h-px w-12 bg-teal" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal tracking-tight">
          Bulk & Corporate Gifting
        </h2>
        <p className="font-body text-base text-charcoal/55 mt-4 max-w-xl mx-auto leading-relaxed">
          We've handled orders from 10 to 500+ pieces — each with the same quality and care as a single custom order. Let's talk about what you need.
        </p>
      </motion.div>

      {/* Use cases grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
        {useCases.map((uc, i) => {
          const Icon = uc.icon;
          return (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex gap-5 bg-offwhite card-craft p-6 shadow-soft hover:shadow-card transition-all duration-400 hover:-translate-y-0.5"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-2xl overflow-hidden">
                  <img src={uc.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon size={14} className="text-teal" />
                  <h3 className="font-display text-lg font-semibold text-charcoal">{uc.title}</h3>
                </div>
                <p className="font-body text-sm text-charcoal/55 leading-relaxed">{uc.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
