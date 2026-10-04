import Link from "next/link";
import { Phone, Instagram, MessageCircle, Heart } from "lucide-react";
import { getGeneralWhatsAppURL } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="section-padding max-w-7xl mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p className="font-display text-3xl font-semibold text-ivory">Adore via Décor</p>
              <p className="font-body text-xs uppercase tracking-[0.25em] text-teal-light mt-1">by Suhani</p>
            </div>
            <p className="font-body text-sm text-ivory/60 leading-relaxed max-w-xs mt-4">
              Handcrafted with love in Mumbai. Every piece is made-to-order, fully customisable, and created with the intention of bringing beauty and meaning into your everyday spaces.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={getGeneralWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full text-xs font-medium hover:bg-[#1ebe5d] transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={13} />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/adore.viadecor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-coral text-white rounded-full text-xs font-medium hover:opacity-90 transition-opacity"
                aria-label="Follow on Instagram"
              >
                <Instagram size={13} />
                Instagram
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-teal mb-5">Collections</p>
            <ul className="space-y-3">
              {[
                "Name Plates",
                "Resin Art",
                "Personalised Gifts",
                "Wedding Gifting",
                "Festive Collection",
                "DIY Kits",
                "Corporate Gifting",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#catalogue"
                    className="font-body text-sm text-ivory/60 hover:text-teal transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-teal mb-5">Get in Touch</p>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+917977726749"
                  className="flex items-center gap-3 font-body text-sm text-ivory/60 hover:text-teal transition-colors"
                >
                  <Phone size={14} className="text-teal shrink-0" />
                  +91 79777 26749
                </a>
              </li>
              <li>
                <a
                  href={getGeneralWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-sm text-ivory/60 hover:text-teal transition-colors"
                >
                  <MessageCircle size={14} className="text-teal shrink-0" />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/adore.viadecor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-sm text-ivory/60 hover:text-teal transition-colors"
                >
                  <Instagram size={14} className="text-teal shrink-0" />
                  @adore.viadecor
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <p className="font-body text-xs text-ivory/40 leading-relaxed">
                Based in Mumbai, India.
                <br />
                Shipping pan-India.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-ivory/30">
            © {currentYear} Adore via Décor by Suhani. All rights reserved.
          </p>
          <p className="font-body text-xs text-ivory/30 flex items-center gap-1.5">
            Made with <Heart size={10} className="text-coral fill-coral" /> in Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
