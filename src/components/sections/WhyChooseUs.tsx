"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart as HeartIcon, Gem, HeartHandshake, Gift } from "lucide-react";

const reasons = [
  { icon: Sparkles, title: "100% Hand-made", description: "Every piece crafted by hand, never mass-produced" },
  { icon: HeartIcon, title: "Personalised", description: "Made to match your story & celebration" },
  { icon: Gem, title: "Quality Materials", description: "Curated, durable materials in every piece" },
  { icon: HeartHandshake, title: "Personal Care", description: "Close attention from concept to delivery" },
  { icon: Gift, title: "Perfect for Gifting", description: "Thoughtful pieces for every occasion" },
];

export default function WhyChooseUs() {

  return (
    <section className="py-24 bg-deepgreen overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-teal-light">
            Why Adore via Décor
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ivory tracking-tight mt-3">
            Why Our Customers Keep Coming Back
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full border border-ivory/20 flex items-center justify-center mb-4 text-ivory">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-base font-semibold text-ivory mb-1.5">{reason.title}</h3>
                <p className="font-body text-xs text-ivory/55 leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
