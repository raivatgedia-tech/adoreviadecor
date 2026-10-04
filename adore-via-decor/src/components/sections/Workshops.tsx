"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Check, MessageCircle } from "lucide-react";
import { workshops } from "@/data/content";
import { getWorkshopWhatsAppURL } from "@/lib/whatsapp";

const typeLabels: Record<string, string> = {
  resin: "Resin Workshop",
  kids: "Kids Workshop",
  seasonal: "Seasonal Workshop",
};

export default function Workshops() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="workshops" className="py-24 bg-charcoal overflow-hidden">
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
            <span className="font-body text-xs uppercase tracking-[0.3em] text-teal">Learn & Create</span>
            <div className="h-px w-12 bg-teal" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-ivory tracking-tight">
            Workshops & Experiences
          </h2>
          <p className="font-body text-base text-ivory/50 mt-4 max-w-xl mx-auto leading-relaxed">
            Create your own masterpiece under Suhani's expert guidance. Workshops for all ages and skill levels. No experience needed — just curiosity.
          </p>
        </motion.div>

        {/* Workshop cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((workshop, i) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/8 transition-all duration-400 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-teal">
                  {typeLabels[workshop.type]}
                </span>
                <h3 className="font-display text-xl font-semibold text-ivory mt-1.5 mb-2">
                  {workshop.title}
                </h3>
                <p className="font-body text-sm text-ivory/55 leading-relaxed mb-4">
                  {workshop.description}
                </p>

                {/* Details */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center gap-1.5 text-ivory/50">
                    <Clock size={13} />
                    <span className="font-body text-xs">{workshop.duration}</span>
                  </div>
                  <div className="h-3 w-px bg-ivory/20" />
                  <div>
                    <span className="font-display text-lg font-semibold text-ivory">₹{workshop.price}</span>
                    <span className="font-body text-xs text-ivory/40 ml-1">per person</span>
                  </div>
                </div>

                {/* Includes */}
                <ul className="space-y-1.5 mb-6">
                  {workshop.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={12} className="text-teal mt-0.5 shrink-0" />
                      <span className="font-body text-xs text-ivory/55">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={getWorkshopWhatsAppURL(workshop.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
                  <MessageCircle size={14} />
                  Book a Workshop
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
