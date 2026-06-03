"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";

/* ── Category display map ── */
const categoryLabel: Record<string, string> = {
  saas: "SaaS",
  client: "Client",
  tool: "Tool",
  creative: "Creative",
};

/* ── Warm low-saturation duotone fallbacks (screenshot-less cards) ── */
const fallbackGradients: Record<string, string> = {
  saas: "from-[#e9dfcb] to-[#d6c6a8]",
  client: "from-[#e4ddce] to-[#cdc4b0]",
  tool: "from-[#e2e0d1] to-[#cccbb8]",
  creative: "from-[#ecdfce] to-[#d8c6b1]",
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const screenshotSrc = `/screenshots/${product.slug}.png`;
  const fallback = fallbackGradients[product.category] || "from-sand to-line";
  const label = categoryLabel[product.category] ?? product.category;

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {/* Screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line bg-surface">
        {!imgError ? (
          <Image
            src={screenshotSrc}
            alt={`Screenshot of ${product.name} — ${label} project by Yaseen Khan Mohmand`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br px-4 ${fallback}`}
          >
            <span className="text-center font-display text-xl leading-tight text-ink/70">
              {product.name}
            </span>
          </div>
        )}

        {product.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-paper/85 px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted backdrop-blur-sm">
            ★ Featured
          </span>
        )}
      </div>

      {/* Meta */}
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-lg text-ink">{product.name}</h3>
        <span className="font-mono text-xs text-faint transition-colors group-hover:text-amber">
          ↗
        </span>
      </div>
      <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
    </a>
  );
}
