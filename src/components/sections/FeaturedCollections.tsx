"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Product } from "@/types";

const collections = [
  {
    id: "fridge-magnets",
    title: "Fridge Magnets",
    subtitle: "Name · Cartoon · Monogram · Photo Frame · Couple",
    image: "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?w=600&q=80",
    accent: "#4E9E93",
  },
  {
    id: "home-decor",
    title: "Home Décor",
    subtitle: "Nameplates · Lippan Art · Signboards · Serving Platters",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=90",
    accent: "#E8887E",
  },
  {
    id: "kids-collection",
    title: "Kids Collection",
    subtitle: "Cartoon Name Boards · Magnets · Photo Frames",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
    accent: "#ECC85C",
  },
  {
    id: "personalized-gifts-accessories",
    title: "Personalized Gifts & Accessories",
    subtitle: "Bottles · Mugs · Keychains · Tote Bags · Pouches & more",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80",
    accent: "#4E9E93",
  },
  {
    id: "deskscapes",
    title: "Deskscapes",
    subtitle: "Office & Desk Décor — Table Tops · Pen Stands · Planters",
    image: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=600&q=80",
    accent: "#E8887E",
  },
  {
    id: "festive-collection",
    title: "Festive Collection",
    subtitle: "Resin Art & Puja Décor — Resin Clocks · Saraswati Yantra",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&q=80",
    accent: "#ECC85C",
  },
];

function CollectionCard({
  collection,
  index,
  image,
}: {
  collection: typeof collections[0];
  index: number;
  image: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href="#catalogue"
        onClick={(e) => {
          e.preventDefault();
          window.dispatchEvent(new CustomEvent("filterCategory", { detail: collection.id }));
          document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="group block relative card-craft overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
        aria-label={`View ${collection.title} collection`}
      >
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={image}
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

export default function FeaturedCollections({ products }: { products: Product[] }) {
  return (
    <section id="collections" className="py-24 section-padding max-w-7xl mx-auto">
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {collections.map((collection, index) => {
          const categoryProducts = products.filter((p) => p.category === collection.id);
          const featured = categoryProducts.find((p) => p.isBestseller) ?? categoryProducts[0];
          return (
            <CollectionCard
              key={collection.id}
              collection={collection}
              index={index}
              image={featured?.image || collection.image}
            />
          );
        })}
      </div>
    </section>
  );
}
