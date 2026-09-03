"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Instagram, MapPin } from "lucide-react";
import { getGeneralWhatsAppURL } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const contacts = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 79777 26749",
    href: "tel:+917977726749",
    color: "bg-sage/15 text-sage-dark",
    description: "Mon–Sat, 10am–7pm",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Chat with Suhani",
    href: getGeneralWhatsAppURL(),
    color: "bg-teal/15 text-teal-dark",
    description: "Fastest response",
    external: true,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@adore.viadecor",
    href: "https://instagram.com/adore.viadecor",
    color: "bg-coral/15 text-coral-dark",
    description: "See latest work & drops",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
    href: "#",
    color: "bg-sage/15 text-sage-dark",
    description: "Ships pan-India",
  },
];

export default function Contact() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="contact" className="py-24 bg-charcoal overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-teal" />
            <span className="font-body text-xs uppercase tracking-[0.3em] text-teal">Get in touch</span>
            <div className="h-px w-12 bg-teal" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-ivory tracking-tight">
            Let's create something beautiful
          </h2>
          <p className="font-body text-base text-ivory/50 mt-4 max-w-lg mx-auto leading-relaxed">
            Have a question, a custom idea, or ready to order? Reach out — Suhani personally responds to every message.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white/5 border border-white/8 card-craft p-7 text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              >
                <div className={`inline-flex p-4 rounded-2xl mb-4 ${c.color}`}>
                  <Icon size={22} />
                </div>
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-ivory/40 mb-1">{c.label}</p>
                <p className="font-display text-lg font-semibold text-ivory mb-1">{c.value}</p>
                <p className="font-body text-xs text-ivory/40">{c.description}</p>
              </motion.a>
            );
          })}
        </div>

        {/* Primary WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <a
            href={getGeneralWhatsAppURL()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp shadow-soft px-10 py-4 text-base"
          >
            <WhatsAppIcon size={18} />
            Start a WhatsApp Conversation
          </a>
          <p className="font-body text-xs text-ivory/30 mt-4">
            We typically respond within 1–2 hours during business hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
