import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE, OG_ALT } from "@/lib/og-image";

/**
 * Twitter / X card image (summary_large_image). Reuses the exact Open Graph
 * renderer so the two stay in lockstep. Served at /twitter-image.
 */
export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage();
}
