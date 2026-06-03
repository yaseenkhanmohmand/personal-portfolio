import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/site";

/**
 * Apple touch icon (180×180) — branded amber tile with a paper "Y" monogram.
 * iOS rounds the corners itself, so this is full-bleed. Served at /apple-icon.
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: BRAND.amber,
        }}
      >
        {/* Stroke-drawn "Y" — font-independent, crisp at any size. */}
        <svg width="110" height="110" viewBox="0 0 32 32" fill="none">
          <path
            d="M9 9 L16 16.5 L23 9 M16 16.5 L16 24"
            stroke={BRAND.paper}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
