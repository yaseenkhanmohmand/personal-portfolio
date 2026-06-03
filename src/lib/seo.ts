/**
 * ────────────────────────────────────────────────────────────────────────────
 * seo.ts — JSON-LD structured data (schema.org @graph).
 * ────────────────────────────────────────────────────────────────────────────
 * Builds one connected @graph so search engines and AI assistants can model
 * the site as an entity:
 *
 *   Person       — who Yaseen is (the central entity, with sameAs + knowsAbout)
 *   WebSite      — the site itself, published by the Person
 *   ProfilePage  — this homepage, about/mainEntity → the Person
 *   ItemList     — the portfolio of shipped products as CreativeWorks
 *
 * Nodes are cross-referenced by @id so crawlers resolve them into a single
 * knowledge graph rather than four disconnected blobs. This is the highest-
 * leverage signal for rich results and AI citation.
 */

import {
  SITE_URL,
  SITE_NAME,
  DESCRIPTION,
  OG_DESCRIPTION,
  PERSON,
  LAST_UPDATED,
} from "./site";
import { products } from "@/data/products";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PROFILE_ID = `${SITE_URL}/#profilepage`;
const LIST_ID = `${SITE_URL}/#selected-work`;

/** schema.org @type per portfolio category. */
function workType(category: string): string {
  switch (category) {
    case "saas":
    case "tool":
      return "WebApplication";
    case "client":
      return "WebSite";
    default:
      return "CreativeWork";
  }
}

/** schema.org applicationCategory for WebApplication items (null = not an app). */
function appCategory(category: string): string | null {
  if (category === "saas") return "BusinessApplication";
  if (category === "tool") return "DeveloperApplication";
  return null;
}

export function buildJsonLd() {
  const person = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON.name,
    alternateName: PERSON.alternateName,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    url: SITE_URL,
    // Resolved against metadataBase at request time → absolute URL.
    image: `${SITE_URL}/opengraph-image`,
    jobTitle: PERSON.jobTitle,
    hasOccupation: PERSON.jobTitle.map((name) => ({
      "@type": "Occupation",
      name,
    })),
    description: PERSON.description,
    knowsAbout: PERSON.knowsAbout,
    knowsLanguage: [...PERSON.knowsLanguage],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: PERSON.alumniOf,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: PERSON.location.locality,
      addressRegion: PERSON.location.region,
      addressCountry: PERSON.location.country,
    },
    sameAs: PERSON.sameAs,
  };

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: DESCRIPTION,
    inLanguage: "en-US",
    publisher: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": PROFILE_ID,
    url: SITE_URL,
    name: `${SITE_NAME} — AI Consultant & Software Engineer`,
    description: OG_DESCRIPTION,
    inLanguage: "en-US",
    // Google explicitly recommends these for ProfilePage.
    dateCreated: LAST_UPDATED,
    dateModified: LAST_UPDATED,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    mainEntity: { "@id": PERSON_ID },
  };

  const itemList = {
    "@type": "ItemList",
    "@id": LIST_ID,
    name: "Selected Work",
    description: `A selection of ${products.length} products designed and built by ${SITE_NAME}.`,
    numberOfItems: products.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: products.map((p, i) => {
      const category = appCategory(p.category);
      return {
        "@type": "ListItem",
        position: i + 1,
        url: p.url,
        name: p.name,
        item: {
          "@type": workType(p.category),
          "@id": p.url,
          name: p.name,
          url: p.url,
          description: p.description,
          image: `${SITE_URL}/screenshots/${p.slug}.png`,
          ...(category
            ? { applicationCategory: category, operatingSystem: "Web browser" }
            : {}),
          ...(p.tech ? { keywords: p.tech.join(", ") } : {}),
          creator: { "@id": PERSON_ID },
          author: { "@id": PERSON_ID },
        },
      };
    }),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage, itemList],
  };
}
