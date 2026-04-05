export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold tracking-tight text-[#1a1a1a] sm:text-5xl md:text-6xl">
          Have a project in mind?
          <br />
          Let&apos;s talk.
        </h2>

        {/* Links */}
        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/yaseenkm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-[#888] underline underline-offset-4 decoration-[#e5e5e5] transition-colors hover:text-[#1a1a1a] hover:decoration-[#1a1a1a]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
