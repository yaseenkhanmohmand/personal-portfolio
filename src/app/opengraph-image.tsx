import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE, OG_ALT } from "@/lib/og-image";

/**
 * Open Graph image (1200×630) for link previews on Facebook, LinkedIn, Slack,
 * iMessage, etc. Next auto-injects og:image / og:image:* tags. The render lives
 * in src/lib/og-image.tsx so the Twitter card can reuse it verbatim.
 */
export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage();
}
