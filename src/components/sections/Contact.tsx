"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { getGeneralWhatsAppURL } from "@/lib/whatsapp";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-ivory">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-1 bg-deepgreen rounded-3xl p-8 flex flex-col justify-center"
          >
            <span className="inline-block w-fit px-3.5 py-1.5 rounded-full bg-coral/20 text-coral font-body text-xs font-semibold uppercase tracking-wide mb-4">
              Get in Touch
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-offwhite mb-3 leading-tight">
              Let&apos;s Create Your Art Vision
            </h3>
            <p className="font-body text-sm text-offwhite/70 leading-relaxed mb-6">
              DM to order, collaborate, or book a workshop. Your one-stop shop for personalised gifting, unique home décor &amp; memorable art experiences.
            </p>
            <a
              href="tel:+917977726749"
              className="inline-flex items-center gap-2 w-fit px-5 py-3 bg-deepgreen-light/20 hover:bg-offwhite/10 border border-offwhite/15 text-offwhite font-body text-sm font-semibold rounded-full transition-colors"
            >
              <Phone size={14} />
              79777 26749
            </a>
          </motion.div>

          {/* Follow us QR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-peach rounded-3xl p-8 flex flex-col items-center text-center justify-center"
          >
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-deepgreen mb-5">
              Follow Us
            </p>
            <div className="bg-white rounded-2xl p-3 shadow-soft mb-4">
              <img src="/qr-instagram.png" alt="Scan to follow on Instagram" className="w-32 h-32" />
            </div>
            <p className="font-body text-xs text-charcoal/50">Scan to follow @adoreviadecor</p>
          </motion.div>

          {/* WhatsApp QR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-peach rounded-3xl p-8 flex flex-col items-center text-center justify-center"
          >
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-deepgreen mb-5">
              WhatsApp Us
            </p>
            <div className="bg-white rounded-2xl p-3 shadow-soft mb-4">
              <img src="/qr-whatsapp.png" alt="Scan to chat on WhatsApp" className="w-32 h-32" />
            </div>
            <p className="font-body text-xs text-charcoal/50">Scan to chat &amp; place an order</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
