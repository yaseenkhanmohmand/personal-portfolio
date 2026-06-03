import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-paper/60">
            <span className="text-amber">04</span> — Contact
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display mt-8 max-w-[16ch] text-balance text-4xl leading-[1.02] tracking-[-0.01em] text-paper sm:text-6xl">
            Have a project in mind? Let&apos;s{" "}
            <span className="text-amber">talk</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
            <a
              href="https://www.linkedin.com/in/yaseenkm/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 self-start rounded-full bg-paper px-7 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-amber hover:text-paper"
            >
              Connect on LinkedIn
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-paper/60">
              San Francisco Bay Area · Available for select work
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
