"use client";

import type { Product } from "@/data/products";

const categoryLabel: Record<string, string> = {
  saas: "SaaS",
  client: "Client",
  tool: "Tool",
  creative: "Creative",
};

interface ProductIndexRowProps {
  product: Product;
  index: number;
  onHover: (slug: string | null) => void;
}

/**
 * A single row in the editorial work index:
 * [number] · [name] · [description] · [category] · [↗]
 */
export default function ProductIndexRow({
  product,
  index,
  onHover,
}: ProductIndexRowProps) {
  const label = categoryLabel[product.category] ?? product.category;

  return (
    <li className="border-b border-line-soft last:border-b-0">
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => onHover(product.slug)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(product.slug)}
        onBlur={() => onHover(null)}
        className="group grid grid-cols-[2.25rem_1fr_auto] items-center gap-4 py-6 transition-colors duration-200 hover:bg-surface sm:grid-cols-[3rem_auto_1fr_7rem_2rem] sm:gap-6 sm:rounded-md sm:px-3 sm:py-7"
      >
        {/* Index number */}
        <span className="tnum font-mono text-xs text-muted transition-colors group-hover:text-amber">
          {String(index).padStart(2, "0")}
        </span>

        {/* Name */}
        <span className="font-display text-xl text-ink sm:text-2xl">
          {product.name}
          {product.featured && (
            <span className="ml-1.5 align-super text-[0.5em] text-faint">★</span>
          )}
        </span>

        {/* Description (desktop only) */}
        <span className="hidden min-w-0 truncate font-sans text-sm text-muted sm:block">
          {product.description}
        </span>

        {/* Category (desktop only) */}
        <span className="hidden font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted sm:block">
          {label}
        </span>

        {/* Arrow */}
        <span className="justify-self-end font-mono text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-amber">
          ↗
        </span>
      </a>
    </li>
  );
}
