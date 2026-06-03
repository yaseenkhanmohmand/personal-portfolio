/**
 * ────────────────────────────────────────────────────────────────────────────
 * site.ts — Single source of truth for SEO identity.
 * ────────────────────────────────────────────────────────────────────────────
 * Everything SEO-related (metadata, JSON-LD, OG image, sitemap, robots,
 * manifest) reads its canonical URL, author identity, social profiles, and
 * keyword/topic taxonomy from here. Change a fact once, it propagates
 * everywhere. Built for a future AI agent: edit the constants, not the call
 * sites.
 *
 * Canonical origin resolves in priority order:
 *   1. NEXT_PUBLIC_SITE_URL            — explicit override. Set this to your
 *                                        custom domain (e.g. https://example.com)
 *                                        once one is attached.
 *   2. VERCEL_PROJECT_PRODUCTION_URL   — auto-provided by Vercel at build time.
 *                                        Resolves to the production domain and
 *                                        prefers a custom domain when attached.
 *   3. http://localhost:3000           — local-dev fallback.
 *
 * On Vercel, (2) is always present in production, so the canonical URL is
 * always correct without any manual configuration.
 */

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel.replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}

/** Absolute origin with no trailing slash, e.g. "https://example.com". */
export const SITE_URL = resolveSiteUrl();

/** Brand / site name (also the Person's name). */
export const SITE_NAME = "Yaseen Khan Mohmand";

/** Homepage <title>. Kept ~60 chars for full SERP display. */
export const DEFAULT_TITLE =
  "Yaseen Khan Mohmand — AI Consultant & Software Engineer";

/** Title template for any future sub-routes ("%s" = page title). */
export const TITLE_TEMPLATE = "%s · Yaseen Khan Mohmand";

/** Meta description. Kept ~155 chars so Google shows it un-truncated. */
export const DESCRIPTION =
  "Yaseen Khan Mohmand — AI consultant & engineer (CEO & CTO) in the SF Bay Area. Ex-Facebook & Harvard, 30+ products shipped across AI, data science & analytics.";

/** Richer description for Open Graph / social cards. Kept ~160 chars so it
 *  isn't truncated on Facebook, LinkedIn, or X. */
export const OG_DESCRIPTION =
  "AI consultant, software engineer & founder helping businesses become AI-first. Ex-Facebook & Harvard. 30+ products shipped across AI, data science & analytics.";

/** Last meaningful content update — feeds sitemap <lastmod> and JSON-LD
 *  dateModified. Bump when the homepage content changes (not on every deploy). */
export const LAST_UPDATED = "2026-06-03";

/**
 * Person identity — the spine of the JSON-LD Person schema and the source of
 * authorship / E-E-A-T signals. Email is deliberately omitted from public
 * structured data (the site routes contact through LinkedIn) to avoid
 * publishing a scrapeable address.
 */
export const PERSON = {
  name: SITE_NAME,
  alternateName: "Yaseen Mohmand",
  givenName: "Yaseen",
  familyName: "Khan Mohmand",
  /** schema.org jobTitle accepts multiple values. */
  jobTitle: ["CEO", "CTO", "AI Consultant", "Software Engineer"],
  /** Longer bio (authentic, drawn from the visible About copy). */
  description:
    "Yaseen Khan Mohmand is a founder and engineer focused on applied AI. With a Master's in Software Engineering (Machine Learning) from Harvard and experience at Facebook, he specializes in AI, data science, and data analytics — building agentic AI systems, computer vision pipelines, analytics dashboards, SaaS platforms, and client websites. Based in the San Francisco Bay Area, he has shipped 30+ products and consults on data reporting, business analytics, database development, and cloud management.",
  alumniOf: "Harvard University",
  location: {
    locality: "San Francisco Bay Area",
    region: "California",
    country: "US",
  },
  knowsLanguage: ["English"],
  twitterHandle: "@yaseenmohmand",
  /** Verified profiles — strong entity-disambiguation signal for search/AI. */
  sameAs: [
    "https://www.linkedin.com/in/yaseenkm/",
    "https://github.com/yaseenmohmand",
    "https://twitter.com/yaseenmohmand",
  ],
  /** Topical authority (schema knowsAbout). */
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Data Analytics",
    "Computer Vision",
    "Large Language Models",
    "Natural Language Processing",
    "Agentic AI",
    "Business Intelligence",
    "Cloud Computing",
    "Software Engineering",
    "SaaS",
    "Next.js",
    "React",
    "Python",
  ],
} as const;

/**
 * Keyword set for the metadata `keywords` field. Minor direct ranking value,
 * but harmless and useful for completeness / internal documentation of intent.
 */
export const KEYWORDS = [
  "Yaseen Khan Mohmand",
  "AI consultant",
  "AI engineer",
  "machine learning engineer",
  "data scientist",
  "data analytics consultant",
  "software engineer",
  "fractional CTO",
  "AI consulting San Francisco",
  "San Francisco Bay Area",
  "computer vision",
  "LLM developer",
  "agentic AI",
  "Next.js developer",
  "SaaS developer",
  "ex-Facebook engineer",
  "Harvard",
] as const;

/** Brand colours mirrored from globals.css — used by OG image, icons, manifest. */
export const BRAND = {
  paper: "#f4f1ea",
  sand: "#efe7da",
  ink: "#16140f",
  muted: "#6b6457",
  line: "#d9d3c6",
  amber: "#c8521b",
} as const;
