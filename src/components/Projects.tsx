"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import type { Category } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductIndexRow from "./ProductIndexRow";
import FloatingPreview from "./FloatingPreview";
import Reveal from "./Reveal";

type View = "index" | "grid";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [view, setView] = useState<View>("index");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  // Live counts per category (computed once).
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: products.length };
    for (const p of products) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const hoveredProduct =
    products.find((p) => p.slug === hoveredSlug) ?? null;

  return (
    <section id="projects" className="py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            <span className="text-amber">
              {String(products.length).padStart(3, "0")}
            </span>{" "}
            — Selected Work
          </p>
          <h2 className="font-display mt-4 max-w-[18ch] text-balance text-4xl tracking-[-0.01em] text-ink sm:text-5xl">
            A body of work, indexed.
          </h2>
        </Reveal>

        {/* Controls: filter tabs + view toggle */}
        <div className="mt-12 flex flex-col gap-4 border-b border-line sm:flex-row sm:items-end sm:justify-between">
          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {categories.map(({ label, value }) => {
              const active = activeCategory === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setActiveCategory(value)}
                  className={`relative pt-3 pb-4 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
                    active ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {label}{" "}
                  <span className={active ? "text-amber" : "text-faint"}>
                    ({counts[value] ?? 0})
                  </span>
                  {active && (
                    <motion.span
                      layoutId="filter-underline"
                      className="absolute -bottom-px left-0 h-0.5 w-full bg-amber"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em]">
            <button
              type="button"
              onClick={() => setView("index")}
              className={`pt-3 pb-4 transition-colors ${
                view === "index" ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              Index
            </button>
            <span className="text-line">/</span>
            <button
              type="button"
              onClick={() => setView("grid")}
              className={`pt-3 pb-4 transition-colors ${
                view === "grid" ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              Grid
            </button>
          </div>
        </div>

        {/* Results — crossfade on view / filter change */}
        <motion.div
          key={`${view}-${activeCategory}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {view === "index" ? (
            <ul className="mt-2">
              {filtered.map((product, i) => (
                <ProductIndexRow
                  key={product.slug}
                  product={product}
                  index={i + 1}
                  onHover={setHoveredSlug}
                />
              ))}
            </ul>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Cursor-following preview (index view, desktop only) */}
      <FloatingPreview product={view === "index" ? hoveredProduct : null} />
    </section>
  );
}
