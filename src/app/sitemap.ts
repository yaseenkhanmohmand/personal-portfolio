import type { MetadataRoute } from "next";
import { SITE_URL, LAST_UPDATED } from "@/lib/site";
import { products } from "@/data/products";

/**
 * sitemap.xml — single-page portfolio, so one canonical entry: the homepage.
 * In-page anchors (#about, #projects, …) are not distinct URLs and are
 * intentionally excluded.
 *
 * The `images` field emits an Image Sitemap so Google Images can discover the
 * project screenshots and the OG card even though the default (index) view of
 * the page does not render <img> tags. `lastModified` is pinned to a content
 * constant so it does not churn on every deploy. Served at /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(LAST_UPDATED),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${SITE_URL}/opengraph-image`,
        ...products.map((p) => `${SITE_URL}/screenshots/${p.slug}.png`),
      ],
    },
  ];
}
