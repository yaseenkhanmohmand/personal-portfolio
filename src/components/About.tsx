import Reveal from "./Reveal";

/* ── Data ── */
const PARAGRAPHS = [
  "I'm a founder and engineer focused on applied AI. With a Master's in Software Engineering (Machine Learning) from Harvard and experience at Facebook, I specialize in AI, data science, and data analytics.",
  "My work spans building agentic AI systems, computer vision pipelines, and analytics dashboards to SaaS platforms and client websites. I've shipped 30+ products and led AI deployments across healthcare, business intelligence, and cloud infrastructure.",
  "Based in the San Francisco Bay Area, I also consult on data reporting, business analytics, database development, and cloud management — helping organizations make smarter decisions with their data.",
] as const;

const TECHNOLOGIES = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Computer Vision",
  "LLMs / NLP",
  "Data Analytics",
  "Pandas / NumPy",
  "PostgreSQL",
  "AWS",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Vercel",
  "Git",
] as const;

export default function About() {
  return (
    <section id="about" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
            <span className="text-amber">02</span> — About
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — narrative */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display max-w-[20ch] text-balance text-3xl leading-[1.1] tracking-[-0.01em] text-ink sm:text-4xl">
                Turning complex data into products people actually use.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-6">
              {PARAGRAPHS.map((text, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p
                    className={
                      i === 0
                        ? "text-lg leading-relaxed text-ink sm:text-xl"
                        : "text-base leading-relaxed text-muted"
                    }
                  >
                    {text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — tech index */}
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Tech Stack{" "}
                <span className="text-faint">
                  ({String(TECHNOLOGIES.length).padStart(3, "0")})
                </span>
              </h3>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-6 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                {[TECHNOLOGIES.slice(0, 8), TECHNOLOGIES.slice(8)].map(
                  (column, ci) => (
                    <ul key={ci}>
                      {column.map((tech, i) => (
                        <li
                          key={tech}
                          className="flex items-baseline gap-3 border-b border-line-soft py-3"
                        >
                          <span className="tnum font-mono text-[0.7rem] text-faint">
                            {String(ci * 8 + i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-sans text-sm text-ink">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
