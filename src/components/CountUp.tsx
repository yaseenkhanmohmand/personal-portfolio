"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface CountUpProps {
  value: number;
  /** Optional suffix rendered after the number, e.g. "+" */
  suffix?: string;
  duration?: number;
}

// useLayoutEffect on the client, useEffect on the server (silences the SSR warning).
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Counts from 0 up to `value` once, the first time it scrolls into view.
 *
 * The number is seeded with its FINAL value so it ships in the server-rendered
 * HTML (crawlers and no-JS visitors see "30+", "12", … — not "0"). On the
 * client it drops to 0 before first paint (no visible flash, no hydration
 * mismatch) and then counts up. Reduced-motion users keep the final value.
 */
export default function CountUp({ value, suffix = "", duration = 1.4 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  // Before the first client paint, reset to 0 so the count-up has a starting
  // point. Skipped under reduced motion, which keeps the final value visible.
  useIsomorphicLayoutEffect(() => {
    if (!reduce) setDisplay(0);
  }, [reduce]);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className="tnum">
      {display}
      {suffix}
    </span>
  );
}
