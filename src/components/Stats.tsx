import { stats } from "@/data/products";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

/* "Products Built" reads as 30+, the rest are exact. */
const suffixFor: Record<string, string> = {
  "Products Built": "+",
};

export default function Stats() {
  return (
    <section className="border-y border-line bg-sand/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-16 sm:grid-cols-4 sm:gap-x-6">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="flex flex-col">
              <span className="font-display text-5xl leading-none text-ink sm:text-6xl">
                <CountUp value={stat.value} suffix={suffixFor[stat.label] ?? ""} />
              </span>
              <span className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                {stat.label}
              </span>
              <span className="mt-1 font-mono text-[0.65rem] text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
