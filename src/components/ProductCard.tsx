"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

/* ── Category display map ── */
const categoryLabel: Record<string, string> = {
  saas: "SAAS",
  client: "CLIENT",
  tool: "TOOLS",
  creative: "CREATIVE",
};

/* ── Fallback gradient colors for missing screenshots ── */
const fallbackGradients: Record<string, string> = {
  saas: "from-violet-100 to-indigo-100",
  client: "from-stone-100 to-zinc-200",
  tool: "from-emerald-100 to-teal-100",
  creative: "from-purple-100 to-pink-100",
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const screenshotSrc = `/screenshots/${product.slug}.png`;
  const fallback = fallbackGradients[product.category] || "from-gray-100 to-gray-200";

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {/* Screenshot image */}
      <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-[#f0f0f0]">
        {!imgError ? (
          <img
            src={screenshotSrc}
            alt={`Screenshot of ${product.name}`}
            className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${fallback} flex flex-col items-center justify-center px-4`}
          >
            <span className="text-lg font-semibold text-[#666] text-center leading-tight">
              {product.name}
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-widest text-[#aaa]">
              {categoryLabel[product.category] || product.category.toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Project name */}
      <h3 className="mt-3 text-lg font-semibold text-[#1a1a1a]">
        {product.name}
      </h3>

      {/* Category tag */}
      <p className="mt-1 text-xs uppercase tracking-widest text-[#888]">
        # {categoryLabel[product.category] || product.category.toUpperCase()}
      </p>
    </a>
  );
}
