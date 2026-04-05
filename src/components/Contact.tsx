"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";

/* ──────────────────────────────────────────────
   Animation variants
   ────────────────────────────────────────────── */
const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

/* ──────────────────────────────────────────────
   Contact cards data
   ────────────────────────────────────────────── */
const contactCards = [
  {
    title: "Email Me",
    description: "hello@yaseenmohmand.com",
    href: "mailto:hello@yaseenmohmand.com",
    icon: EnvelopeIcon,
    label: "Send an email",
  },
  {
    title: "Connect",
    description: "LinkedIn & Twitter",
    href: "https://linkedin.com/in/yaseenmohmand",
    icon: LinkIcon,
    label: "Connect on social media",
  },
];

/* ──────────────────────────────────────────────
   Contact component
   ────────────────────────────────────────────── */
export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* ── Heading ── */}
        <motion.h2
          variants={fadeUpVariants}
          className="text-4xl font-bold tracking-tight sm:text-5xl"
        >
          <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            Let&apos;s Build Something Together
          </span>
        </motion.h2>

        {/* ── Subtitle ── */}
        <motion.p
          variants={fadeUpVariants}
          className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto"
        >
          Have a project in mind? I&apos;d love to hear about it.
        </motion.p>

        {/* ── CTA Button ── */}
        <motion.div variants={fadeUpVariants} className="mt-10">
          <a
            href="mailto:hello@yaseenmohmand.com"
            className="
              inline-block px-10 py-4 rounded-full text-base font-semibold
              text-white
              bg-gradient-to-r from-violet-600 to-indigo-600
              shadow-lg shadow-violet-600/25
              transition-all duration-300
              hover:shadow-xl hover:shadow-violet-600/35 hover:scale-[1.03]
              active:scale-[0.98]
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
            "
          >
            Get in Touch
          </a>
        </motion.div>

        {/* ── Contact Cards ── */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={card.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={card.label}
              className="
                group bg-white/5 border border-white/10 rounded-2xl p-8
                text-left transition-all duration-300
                hover:border-white/20 hover:bg-white/[0.07]
              "
            >
              <card.icon className="h-8 w-8 text-violet-400 mb-4" />
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-1 text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
                {card.description}
              </p>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
