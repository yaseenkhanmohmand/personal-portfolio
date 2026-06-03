/**
 * JsonLd — renders the site's schema.org @graph as a JSON-LD <script>.
 * Server component (no "use client"): the markup ships in the initial HTML so
 * crawlers and AI assistants see it without executing JavaScript.
 *
 * The graph is built in src/lib/seo.ts from src/lib/site.ts + the products
 * data, so this component never needs editing — change the facts at the source.
 */
import { buildJsonLd } from "@/lib/seo";

export default function JsonLd() {
  const data = buildJsonLd();
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; no user input is involved.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
