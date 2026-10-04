"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: "name-plates",
    title: "Name Plates",
    subtitle: "Make your entrance unforgettable",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    color: "from-teal/20 to-teal/5",
    accent: "#79C5C8",
  },
  {
    id: "resin-art",
    title: "Resin Art",
    subtitle: "Living colour, frozen in time",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80",
    color: "from-coral/20 to-coral/5",
    accent: "#E8B0A8",
  },
  {
    id: "personalized-gifts",
    title: "Personalised Gifts",
    subtitle: "Thoughtfulness, beautifully made",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80",
    color: "from-sage/20 to-sage/5",
    accent: "#8EA89A",
  },
  {
    id: "wedding-gifts",
    title: "Wedding Gifts",
    subtitle: "Celebrate love with artisan craftsmanship",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    color: "from-teal/15 to-coral/10",
    accent: "#79C5C8",
  },
  {
    id: "festive-collection",
    title: "Festive Collection",
    subtitle: "Every festival, elevated",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80",
    color: "from-coral/20 to-teal/10",
    accent: "#E8B0A8",
  },
  {
    id: "diy-kits",
    title: "DIY Kits",
    subtitle: "Create your own masterpiece",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&q=80",
    color: "from-sage/20 to-teal/10",
    accent: "#8EA89A",
  },
];

function CollectionCard({ collection, index }: { collection: typeof collections[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href="#catalogue"
        className="group block relative rounded-3xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
        aria-label={`View ${collection.title} collection`}
      >
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={collection.image}
            alt={collection.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />

        {/* Text */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="font-display text-xl font-semibold text-ivory mb-1">{collection.title}</p>
          <p className="font-body text-xs text-ivory/70 mb-3">{collection.subtitle}</p>
          <div className="flex items-center gap-2 text-ivory/80 group-hover:text-white transition-colors">
            <span className="font-body text-xs uppercase tracking-[0.15em]">Explore</span>
            <motion.div
              className="w-4 h-4"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={14} />
            </motion.div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function FeaturedCollections() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="collections" className="py-24 section-padding max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-teal" />
          <span className="font-body text-xs uppercase tracking-[0.3em] text-teal">What we create</span>
          <div className="h-px w-12 bg-teal" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-light text-charcoal tracking-tight">
          Our Collections
        </h2>
        <p className="font-body text-base text-charcoal/55 mt-4 max-w-xl mx-auto leading-relaxed">
          Every category, endlessly customisable. From first impressions to cherished keepsakes — crafted for the moments that matter.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {collections.map((collection, index) => (
          <CollectionCard key={collection.id} collection={collection} index={index} />
        ))}
      </div>
    </section>
  );
}
