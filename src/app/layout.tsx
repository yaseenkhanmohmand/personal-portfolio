import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Yaseen Khan Mohmand | CEO & CTO",
  description:
    "Helping boring businesses become AI first. Ex Facebook, Harvard. 30+ products shipped — from SaaS platforms to client websites.",
  openGraph: {
    title: "Yaseen Khan Mohmand | CEO & CTO",
    description:
      "Helping boring businesses become AI first. Ex Facebook, Harvard. 30+ products shipped.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaseen Khan Mohmand | CEO & CTO",
    description:
      "Helping boring businesses become AI first. Ex Facebook, Harvard. 30+ products shipped.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${fraunces.variable} ${plexMono.variable} font-sans bg-paper text-ink min-h-screen antialiased`}
      >
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
