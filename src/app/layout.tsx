import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_TITLE,
  TITLE_TEMPLATE,
  DESCRIPTION,
  OG_DESCRIPTION,
  KEYWORDS,
  PERSON,
  BRAND,
} from "@/lib/site";

/* Display — the "expensive" editorial serif (variable, optical sizing) */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

/* Body / UI — clean, neutral, already proven in this project */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* Mono — the engineering undertone: eyebrows, indices, tags */
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  // Resolves every relative metadata URL (canonical, OG image, …) to absolute.
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: TITLE_TEMPLATE },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [...KEYWORDS],
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: OG_DESCRIPTION,
    // og:image is injected automatically by app/opengraph-image.tsx.
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: OG_DESCRIPTION,
    site: PERSON.twitterHandle,
    creator: PERSON.twitterHandle,
    // twitter:image is injected automatically by app/twitter-image.tsx.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
  appleWebApp: {
    capable: true,
    title: "Yaseen K. Mohmand",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: BRAND.paper,
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} ${plexMono.variable} font-sans bg-paper text-ink min-h-screen antialiased`}
      >
        {/* Progressive enhancement: flag that JS is available BEFORE first
            paint. Without JS the .js class is never added, so the CSS safety
            net in globals.css forces all scroll-reveal content visible —
            crawlers and no-JS visitors see the full page, JS users keep the
            editorial reveal animations. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {/* Editorial grid spine — faint vertical rules framing the content column */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 flex justify-center"
        >
          <div className="h-full w-full max-w-6xl border-x border-line-soft" />
        </div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
