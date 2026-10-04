import Link from "next/link";
import { Instagram, MessageCircle, Pin, Facebook } from "lucide-react";
import { getGeneralWhatsAppURL } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory/80">
      <div className="section-padding max-w-7xl mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-2xl font-semibold text-ivory">
              Adore <span className="text-coral">via</span> Décor
            </p>
            <p className="font-body text-xs uppercase tracking-[0.25em] text-ivory/40 mt-1">by Suhani</p>
            <p className="font-body text-sm text-ivory/55 leading-relaxed mt-4">
              A one-stop shop for personalised gifting, unique home décor &amp; memorable art experiences — handcrafted with love by Suhani.
            </p>
            <div className="flex gap-2.5 mt-6">
              <a
                href="https://instagram.com/adore.viadecor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={13} />
              </a>
              <a
                href={getGeneralWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={13} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center transition-colors"
                aria-label="Pinterest"
              >
                <Pin size={13} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={13} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="font-display text-sm font-semibold text-ivory mb-4">Explore</p>
            <ul className="space-y-3">
              {[
                { label: "Shop All", href: "#catalogue" },
                { label: "Our Art Forms", href: "#catalogue" },
                { label: "Our Story", href: "#about" },
                { label: "Workshops & DIY", href: "#workshops" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="font-body text-sm text-ivory/55 hover:text-teal-light transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-display text-sm font-semibold text-ivory mb-4">Services</p>
            <ul className="space-y-3">
              {[
                "Bulk & Corporate Orders",
                "Live Workshops",
                "Online Classes",
                "Custom Gifting",
              ].map((item) => (
                <li key={item}>
                  <Link href="#workshops" className="font-body text-sm text-ivory/55 hover:text-teal-light transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display text-sm font-semibold text-ivory mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="tel:+917977726749" className="font-body text-sm text-ivory/55 hover:text-teal-light transition-colors">
                  79777 26749
                </a>
              </li>
              <li>
                <a
                  href={getGeneralWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-ivory/55 hover:text-teal-light transition-colors"
                >
                  DM on Instagram / WhatsApp
                </a>
              </li>
              <li>
                <span className="font-body text-sm text-ivory/55">Facebook | Pinterest</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-ivory/40">
            © {currentYear} Adore via Décor by Suhani. All rights reserved.
          </p>
          <p className="font-body text-xs text-ivory/40">
            #HandcraftedWithLove #SupportSmallBusiness #ArtWithSoul
          </p>
        </div>
      </div>
    </footer>
  );
}
