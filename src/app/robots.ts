import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * robots.txt — allow every well-behaved crawler full access (including AI
 * crawlers such as GPTBot, ClaudeBot, PerplexityBot, which fall under "*"),
 * and point them at the sitemap. Served at /robots.txt.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
