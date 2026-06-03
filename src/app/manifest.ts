import type { MetadataRoute } from "next";
import { DESCRIPTION, BRAND } from "@/lib/site";

/**
 * Web app manifest — provides install metadata, name, and theme colour.
 * The scalable SVG icon (app/icon.svg) covers every size via sizes:"any".
 * Served at /manifest.webmanifest.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yaseen Khan Mohmand — AI Consultant & Engineer",
    short_name: "Yaseen K. Mohmand",
    description: DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: BRAND.paper,
    theme_color: BRAND.paper,
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/icon-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
