"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useTransform,
  animate,
  motion,
} from "framer-motion";
import { stats } from "@/data/products";

/* ── Individual animated counter ── */
function AnimatedStat({
  label,
  value,
  delay,
}: {
  label: string;
  value: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  // Keep a ref so we can read the latest rounded value synchronously
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionVal, value, {
      duration: 1.6,
      delay,
      ease: "easeOut",
    });

    // Subscribe to changes and update the DOM directly for performance
    const unsubscribe = rounded.on("change", (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${v}+`;
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, motionVal, rounded, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex flex-col items-center gap-1 py-6"
    >
      <span
        ref={displayRef}
        className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
      >
        0+
      </span>
      <span className="text-sm text-neutral-400">{label}</span>
    </motion.div>
  );
}

/* ── Stats banner ── */
export default function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-gradient-to-r from-black via-neutral-950 to-black">
      {/* Subtle top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-2 px-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <AnimatedStat
            key={stat.label}
            label={stat.label}
            value={stat.value}
            delay={i * 0.15}
          />
        ))}
      </div>

      {/* Subtle bottom highlight */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
