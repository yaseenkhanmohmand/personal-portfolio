"use client";

import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   Animation variants
   ────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.9 },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: 1.15 },
  },
};

/* ──────────────────────────────────────────────
   Heading lines — stagger-animated individually
   ────────────────────────────────────────────── */
const headingLines = ["Building the Future,", "One Product at a Time"];

/* ──────────────────────────────────────────────
   Decorative blob data
   ────────────────────────────────────────────── */
const blobs = [
  {
    size: "w-72 h-72",
    position: "-top-24 -left-24",
    gradient: "from-violet-600/20 to-indigo-600/10",
    animationDelay: "0s",
    animationDuration: "7s",
  },
  {
    size: "w-56 h-56",
    position: "-bottom-20 -right-20",
    gradient: "from-indigo-500/15 to-blue-600/10",
    animationDelay: "2s",
    animationDuration: "9s",
  },
  {
    size: "w-40 h-40",
    position: "top-1/3 right-[10%]",
    gradient: "from-purple-500/15 to-violet-400/5",
    animationDelay: "4s",
    animationDuration: "8s",
  },
];

/* ──────────────────────────────────────────────
   Hero component
   ────────────────────────────────────────────── */
export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139,92,246,0.14) 0%, transparent 70%),
          radial-gradient(ellipse 60% 50% at 20% 80%, rgba(99,102,241,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 80% 20%, rgba(59,130,246,0.06) 0%, transparent 50%),
          #0a0a0a
        `,
      }}
    >
      {/* ── Decorative floating blobs ── */}
      {blobs.map((blob, i) => (
        <div
          key={i}
          aria-hidden
          className={`
            absolute ${blob.size} ${blob.position} rounded-full
            bg-gradient-to-br ${blob.gradient} blur-3xl opacity-70
            animate-float pointer-events-none
          `}
          style={{
            animationDelay: blob.animationDelay,
            animationDuration: blob.animationDuration,
          }}
        />
      ))}

      {/* ── Subtle grid / noise overlay for depth ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Main content ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          {headingLines.map((line, i) => (
            <motion.span
              key={i}
              variants={fadeUpVariants}
              className="block"
            >
              {i === 1 ? (
                <span className="gradient-text">{line}</span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto"
        >
          CEO &amp; CTO&nbsp;&nbsp;|&nbsp;&nbsp;30+ Products Built&nbsp;&nbsp;|&nbsp;&nbsp;Turning Ideas into Reality
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="
              relative px-8 py-3.5 rounded-full text-sm font-semibold
              text-white cursor-pointer
              bg-gradient-to-r from-violet-600 to-indigo-600
              shadow-lg shadow-violet-600/25
              transition-all duration-300
              hover:shadow-xl hover:shadow-violet-600/35 hover:scale-[1.03]
              active:scale-[0.98]
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
            "
          >
            View My Work
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="
              px-8 py-3.5 rounded-full text-sm font-semibold
              text-white/90 cursor-pointer
              border border-white/20 bg-white/[0.04]
              backdrop-blur-sm
              transition-all duration-300
              hover:border-white/40 hover:bg-white/[0.08] hover:scale-[1.03]
              active:scale-[0.98]
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
            "
          >
            Get in Touch
          </button>
        </motion.div>
      </motion.div>

      {/* ── Bottom gradient fade to background ── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-[#0a0a0a] to-transparent"
      />
    </section>
  );
}
