"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* ── Heading ── */}
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            Products I&apos;ve Built
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-500">
          From SaaS platforms to client websites, each project represents a
          unique challenge solved.
        </p>

        {/* ── Filter Bar ── */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              onClick={() => setActiveCategory(value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === value
                  ? "bg-white text-black"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── Products Grid ── */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <ProductCard product={product} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
