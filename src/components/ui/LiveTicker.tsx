"use client";

import { Sparkles } from "lucide-react";
import { Product } from "@/types";
import { productCategories } from "@/data/products";

export default function LiveTicker({ products }: { products: Product[] }) {
  const recent = products.slice(0, 8);
  if (recent.length === 0) return null;

  const categoryLabel = (id: string) =>
    productCategories.find((c) => c.id === id)?.label || id;

  const items = [...recent, ...recent]; // duplicated for a seamless loop

  return (
    <div className="w-full max-w-lg">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={14} className="text-coral" />
        <span className="font-body text-xs uppercase tracking-[0.25em] text-coral font-semibold">
          New in the Collection
        </span>
      </div>
      <div className="relative overflow-hidden rounded-3xl bg-offwhite/70 border border-charcoal/5 shadow-soft py-3">
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-offwhite/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-offwhite/90 to-transparent z-10 pointer-events-none" />
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {items.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className="flex items-center gap-3 px-5 shrink-0 border-r border-charcoal/10 last:border-none"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-9 h-9 rounded-full object-cover shrink-0"
                loading="lazy"
              />
              <div className="whitespace-nowrap">
                <p className="font-body text-sm font-semibold text-charcoal leading-tight">{p.name}</p>
                <p className="font-body text-[11px] text-charcoal/45 leading-tight">
                  {categoryLabel(p.category)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
