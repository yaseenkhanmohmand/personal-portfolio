"use client";

import { useState } from "react";
import { products, categories } from "@/data/products";
import type { Category } from "@/data/products";
import ProductCard from "./ProductCard";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-6 border-b border-[#e5e5e5] pb-4">
          <span className="text-xs font-medium uppercase tracking-widest text-[#888]">
            Filter:
          </span>
          {categories.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              onClick={() => setActiveCategory(value)}
              className={`text-xs uppercase tracking-widest pb-1 transition-all ${
                activeCategory === value
                  ? "text-[#1a1a1a] font-semibold border-b-2 border-[#1a1a1a]"
                  : "text-[#888] hover:text-[#1a1a1a]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
