"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const lineVariant: Variants = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.85, ease: EASE } },
};

const fadeVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** A single headline line, masked so it wipes up from below. */
function Line({ children }: { children: React.ReactNode }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span variants={lineVariant} className="block">
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] items-center pt-32 pb-24"
    >
      {/* Marginalia + watermark (desktop only) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mx-auto hidden max-w-6xl lg:block"
      >
        <span className="absolute right-6 top-1/2 origin-bottom-right -rotate-90 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-faint">
          Portfolio / 2026
        </span>
        <span className="absolute right-[5.5rem] top-24 select-none font-display text-[11rem] leading-none text-line-soft">
          01
        </span>
      </div>

      <motion.div
        className="mx-auto w-full max-w-6xl px-6"
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
      >
        {/* Eyebrow */}
        <motion.p
          variants={reduce ? undefined : fadeVariant}
          className="font-mono text-xs uppercase tracking-[0.25em] text-muted"
        >
          Ex Facebook <span className="text-amber">—</span> Harvard{" "}
          <span className="text-amber">—</span> SF Bay Area
        </motion.p>

        {/* Headline */}
        <h1 className="font-display mt-8 max-w-[12ch] text-[clamp(3rem,8vw,7rem)] font-normal leading-[1.02] tracking-[-0.02em] text-ink sm:max-w-[16ch] sm:leading-[0.98]">
          <Line>Helping boring</Line>
          <Line>businesses become</Line>
          <Line>
            <span className="text-amber">AI</span> first.
          </Line>
        </h1>

        {/* Subline */}
        <motion.p
          variants={reduce ? undefined : fadeVariant}
          className="mt-8 max-w-[46ch] text-base leading-relaxed text-muted sm:text-lg"
        >
          AI consultant and software engineer — CEO &amp; CTO with 30+ products
          shipped across AI, data science, and data analytics. Master&apos;s in
          Software Engineering (Machine Learning).
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={reduce ? undefined : fadeVariant}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative font-mono text-xs uppercase tracking-widest text-ink"
          >
            View work
            <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-amber transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>
          <a
            href="https://www.linkedin.com/in/yaseenkm/"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
          >
            LinkedIn{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom hairline + scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 border-t border-line py-5">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-faint">
            Scroll
          </span>
          <span className="h-px w-10 bg-line" />
        </div>
      </div>
    </section>
  );
}
