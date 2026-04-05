export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-40 pb-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-[#888] mb-6">
          Ex Facebook &middot; Harvard &middot; San Francisco Bay Area
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-[#1a1a1a]">
          Helping boring businesses become AI first.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#888] max-w-2xl">
          CEO &amp; CTO with 30+ products shipped. AI, Data Science &amp; Data Analytics. Masters in Software Engineering (Machine Learning).
        </p>
        <div className="mt-8 flex items-center gap-6">
          <a
            href="#projects"
            className="text-sm font-medium text-[#1a1a1a] underline underline-offset-4 decoration-[#ccc] hover:decoration-[#1a1a1a] transition-colors"
          >
            View my work
          </a>
          <a
            href="https://www.linkedin.com/in/yaseenkm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#888] hover:text-[#1a1a1a] transition-colors"
          >
            LinkedIn &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
