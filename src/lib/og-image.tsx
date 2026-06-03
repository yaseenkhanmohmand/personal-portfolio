/**
 * ────────────────────────────────────────────────────────────────────────────
 * og-image.tsx — Shared Open Graph / Twitter card renderer.
 * ────────────────────────────────────────────────────────────────────────────
 * One renderer, used by both app/opengraph-image.tsx and app/twitter-image.tsx
 * so the social card stays DRY and identical across platforms.
 *
 * Design mirrors the site's "Editorial Index" system: warm paper, ink text,
 * one molten-amber accent, a hairline frame. Brand fonts (Fraunces display +
 * Inter) are fetched from Google Fonts at build time; if the network is
 * unavailable the build still succeeds and satori falls back to its bundled
 * font (never a broken build).
 */

import { ImageResponse } from "next/og";
import { BRAND, SITE_NAME } from "./site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";
export const OG_ALT =
  "Yaseen Khan Mohmand — AI consultant and software engineer. Helping boring businesses become AI first.";

/**
 * Fetch a single static-weight Google font as a TTF ArrayBuffer.
 * The legacy User-Agent makes Google serve truetype (satori cannot parse
 * woff2). Any failure resolves to null so the caller degrades gracefully.
 */
async function loadGoogleFont(
  family: string,
  weight: number
): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      family
    )}:wght@${weight}&display=swap`;
    const css = await fetch(cssUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36",
      },
    }).then((r) => (r.ok ? r.text() : ""));

    const src = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
    if (!src) return null;

    const res = await fetch(src);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export async function renderOgImage(): Promise<ImageResponse> {
  const [fraunces, inter, interMedium] = await Promise.all([
    loadGoogleFont("Fraunces", 500),
    loadGoogleFont("Inter", 400),
    loadGoogleFont("Inter", 500),
  ]);

  const fonts = [
    fraunces && { name: "Fraunces", data: fraunces, weight: 500 as const, style: "normal" as const },
    inter && { name: "Inter", data: inter, weight: 400 as const, style: "normal" as const },
    interMedium && { name: "Inter", data: interMedium, weight: 500 as const, style: "normal" as const },
  ].filter(Boolean) as {
    name: string;
    data: ArrayBuffer;
    weight: 400 | 500;
    style: "normal";
  }[];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: BRAND.paper,
          padding: 40,
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: `1px solid ${BRAND.line}`,
            padding: "60px 68px",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: BRAND.muted,
              fontWeight: 500,
            }}
          >
            EX FACEBOOK&nbsp;&nbsp;—&nbsp;&nbsp;HARVARD&nbsp;&nbsp;—&nbsp;&nbsp;SF BAY AREA
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Fraunces, serif",
              fontSize: 82,
              lineHeight: 1.0,
              letterSpacing: -2,
              color: BRAND.ink,
            }}
          >
            <div style={{ display: "flex" }}>Helping boring businesses</div>
            <div style={{ display: "flex" }}>
              <span>become&nbsp;</span>
              <span style={{ color: BRAND.amber }}>AI</span>
              <span>&nbsp;first.</span>
            </div>
          </div>

          {/* Footer: hairline + identity row */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: 1,
                background: BRAND.line,
                marginBottom: 26,
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: 34,
                    color: BRAND.ink,
                  }}
                >
                  {SITE_NAME}
                </span>
                <span style={{ fontSize: 22, color: BRAND.muted, marginTop: 6 }}>
                  AI Consultant &amp; Software Engineer
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 20,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: BRAND.amber,
                  fontWeight: 500,
                }}
              >
                30+ products shipped
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: fonts.length ? fonts : undefined }
  );
}
