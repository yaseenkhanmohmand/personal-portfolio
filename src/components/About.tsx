"use client";

import { motion } from "framer-motion";

/* ── Data ── */
const PARAGRAPHS = [
  "I'm a tech founder and builder who thrives at the intersection of design and engineering. As CEO and CTO, I've launched over 30 digital products — from SaaS platforms to client websites — each solving a real-world problem.",
  "My approach is simple: ship fast, iterate often, and never compromise on quality. I believe the best products come from deeply understanding both the technology and the people who use it.",
  "When I'm not coding, I'm exploring new technologies, mentoring aspiring developers, and looking for the next big problem to solve.",
] as const;

const TECHNOLOGIES = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Three.js",
  "Vercel",
  "PostgreSQL",
  "AI/ML",
  "Figma",
  "Git",
] as const;

/* ── Animation variants ── */
const containerLeft = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const containerRight = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

/* ── Component ── */
export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left column — text */}
        <motion.div
          variants={containerLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={fadeInLeft}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            About Me
          </motion.h2>

          <div className="mt-8 space-y-5">
            {PARAGRAPHS.map((text, i) => (
              <motion.p
                key={i}
                variants={fadeInLeft}
                className="text-lg leading-relaxed text-zinc-300 sm:text-zinc-400"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Right column — tech stack */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="text-2xl font-semibold tracking-tight text-white"
          >
            Tech Stack
          </motion.h3>

          <motion.div
            variants={containerRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid grid-cols-3 gap-3"
          >
            {TECHNOLOGIES.map((tech) => (
              <motion.div
                key={tech}
                variants={fadeInRight}
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.25)" }}
                transition={{ duration: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center text-sm font-medium text-zinc-300 transition-colors hover:border-white/20"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
