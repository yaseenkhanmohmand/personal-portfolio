import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      {/* Skip link — first focusable element; visible only on keyboard focus. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-paper"
      >
        Skip to content
      </a>
      {/* Navbar renders a <header> and Footer a <footer>; keeping them as
          siblings of <main> gives the page correct landmark structure. */}
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <Stats />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      {/* Structured data (schema.org @graph) — ships in the initial HTML. */}
      <JsonLd />
    </>
  );
}
