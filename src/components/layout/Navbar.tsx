"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { getGeneralWhatsAppURL } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const navLinks = [
  { href: "#collections", label: "Collections" },
  { href: "#catalogue", label: "Catalogue" },
  { href: "#workshops", label: "Workshops" },
  { href: "#about", label: "Our Story" },
  { href: "#contact", label: "Contact" },
];

const tagPills = [
  { label: "Personalised", color: "bg-teal text-offwhite" },
  { label: "Handcrafted With Love", color: "bg-coral text-offwhite" },
  { label: "Aesthetic", color: "bg-gold text-charcoal" },
  { label: "Budget Friendly", color: "bg-coral text-offwhite" },
  { label: "Workshop & DIY", color: "bg-teal text-offwhite" },
  { label: "Bulk & Corporate Orders", color: "bg-gold text-charcoal" },
  { label: "Quirky", color: "bg-teal text-offwhite" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Announcement bar */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-deepgreen text-offwhite overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-8 h-10 flex items-center justify-center sm:justify-between text-[11px] sm:text-xs font-body gap-4">
                <div className="hidden sm:flex items-center gap-6">
                  <span>Every piece is handmade with love, just for you</span>
                  <span className="opacity-40">|</span>
                  <span>Ships across India</span>
                </div>
                <div className="flex items-center gap-4 sm:gap-6">
                  <a href="tel:+917977726749" className="flex items-center gap-1.5 hover:opacity-80">
                    <Phone size={11} /> 79777 26749
                  </a>
                  <a
                    href={getGeneralWhatsAppURL()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1.5 hover:opacity-80"
                  >
                    <MessageSquare size={11} /> DM to order or book a workshop
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tag pill row */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div
              initial={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.03 }}
              className="bg-ivory overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar justify-start sm:justify-center flex-wrap sm:flex-nowrap">
                {tagPills.map((tag) => (
                  <span
                    key={tag.label}
                    className={`shrink-0 whitespace-nowrap px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wide ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main nav row */}
        <div
          className={`transition-all duration-400 ${
            scrolled ? "bg-ivory/95 backdrop-blur-md shadow-soft border-b border-teal/10" : "bg-ivory border-b border-charcoal/5"
          }`}
        >
          <div className="section-padding max-w-7xl mx-auto flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center group shrink-0" aria-label="Adore via Décor home">
              <img
                src="/logo.png"
                alt="Adore via Décor by Suhani"
                className="h-20 md:h-[5.5rem] w-auto -my-4 transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-charcoal/70 hover:text-teal transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={getGeneralWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs px-5 py-2.5"
              >
                <WhatsAppIcon size={14} />
                WhatsApp Us
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-xl hover:bg-teal/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ivory pt-20"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="section-padding flex flex-col gap-1 pt-8" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="block font-display text-3xl font-medium text-charcoal py-3 border-b border-teal/10 hover:text-teal transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <a
                  href={getGeneralWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
                  <WhatsAppIcon size={16} />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
