"use client";

import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import type { Product } from "@/data/products";

// ── Gradient Map ────────────────────────────────────────────────────────────
// Tailwind dynamic classes are purged at build time, so we map each gradient
// string used in products.ts to an actual CSS linear-gradient value.
const gradientMap: Record<string, string> = {
  "from-violet-600 to-indigo-600":
    "linear-gradient(135deg, #7c3aed, #4f46e5)",
  "from-cyan-500 to-blue-600":
    "linear-gradient(135deg, #06b6d4, #2563eb)",
  "from-emerald-500 to-teal-600":
    "linear-gradient(135deg, #10b981, #0d9488)",
  "from-orange-500 to-red-600":
    "linear-gradient(135deg, #f97316, #dc2626)",
  "from-pink-500 to-rose-600":
    "linear-gradient(135deg, #ec4899, #e11d48)",
  "from-amber-500 to-orange-600":
    "linear-gradient(135deg, #f59e0b, #ea580c)",
  "from-lime-500 to-green-600":
    "linear-gradient(135deg, #84cc16, #16a34a)",
  "from-yellow-500 to-amber-600":
    "linear-gradient(135deg, #eab308, #d97706)",
  "from-stone-600 to-zinc-800":
    "linear-gradient(135deg, #57534e, #27272a)",
  "from-blue-600 to-indigo-800":
    "linear-gradient(135deg, #2563eb, #3730a3)",
  "from-sky-400 to-cyan-600":
    "linear-gradient(135deg, #38bdf8, #0891b2)",
  "from-blue-400 to-sky-600":
    "linear-gradient(135deg, #60a5fa, #0284c7)",
  "from-fuchsia-500 to-purple-700":
    "linear-gradient(135deg, #d946ef, #7e22ce)",
  "from-rose-400 to-pink-600":
    "linear-gradient(135deg, #fb7185, #db2777)",
  "from-amber-600 to-yellow-700":
    "linear-gradient(135deg, #d97706, #a16207)",
  "from-slate-500 to-gray-700":
    "linear-gradient(135deg, #64748b, #374151)",
  "from-teal-500 to-emerald-700":
    "linear-gradient(135deg, #14b8a6, #047857)",
  "from-indigo-500 to-violet-700":
    "linear-gradient(135deg, #6366f1, #6d28d9)",
  "from-gray-600 to-zinc-800":
    "linear-gradient(135deg, #4b5563, #27272a)",
  "from-green-500 to-emerald-700":
    "linear-gradient(135deg, #22c55e, #047857)",
  "from-red-500 to-rose-700":
    "linear-gradient(135deg, #ef4444, #be123c)",
  "from-purple-500 to-indigo-700":
    "linear-gradient(135deg, #a855f7, #4338ca)",
  "from-pink-500 to-fuchsia-700":
    "linear-gradient(135deg, #ec4899, #a21caf)",
  "from-zinc-500 to-neutral-700":
    "linear-gradient(135deg, #71717a, #404040)",
  "from-violet-500 to-purple-800":
    "linear-gradient(135deg, #8b5cf6, #6b21a8)",
  "from-cyan-500 to-blue-800":
    "linear-gradient(135deg, #06b6d4, #1e40af)",
};

// ── Fallback ────────────────────────────────────────────────────────────────
function resolveGradient(gradient: string): string {
  return (
    gradientMap[gradient] ??
    "linear-gradient(135deg, #8b5cf6, #6366f1)"
  );
}

// ── Component ───────────────────────────────────────────────────────────────
interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      }}
      whileHover={{ scale: 1.02 }}
      className="group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/25 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)]"
    >
      {/* ── Gradient hero area ─────────────────────────────────────────── */}
      <div
        className="relative flex items-center justify-center h-48"
        style={{ background: resolveGradient(product.gradient) }}
      >
        <h2 className="text-2xl font-bold text-white text-center px-4 drop-shadow-lg">
          {product.name}
        </h2>

        {product.featured && (
          <span className="absolute top-3 right-3 bg-amber-400/90 text-black text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* ── Card body ──────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>

        <p className="text-sm leading-relaxed text-zinc-400">
          {product.description}
        </p>

        {/* Tech tags */}
        {product.tech && product.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {product.tech.map((t) => (
              <span
                key={t}
                className="bg-white/10 text-xs text-zinc-300 px-2 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Spacer pushes the link to the bottom */}
        <div className="flex-1" />

        {/* Visit link */}
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors mt-2"
        >
          Visit Site
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
