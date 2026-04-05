/* ── Data ── */
const PARAGRAPHS = [
  "I'm a tech founder helping boring businesses become AI first. With a Masters in Software Engineering (Machine Learning) from Harvard and experience at Facebook, I specialize in AI, data science, and data analytics — turning complex data into products people actually use.",
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

/* ── Component ── */
export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left column — text */}
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-5xl">
            About Me
          </h2>

          <div className="mt-8 space-y-5">
            {PARAGRAPHS.map((text, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-[#666]"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Right column — tech stack */}
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-[#1a1a1a]">
            Tech Stack
          </h3>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech}
                className="border border-[#e5e5e5] rounded-xl p-4 text-center text-sm font-medium text-[#666] transition-colors hover:border-[#ccc] hover:text-[#1a1a1a]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
