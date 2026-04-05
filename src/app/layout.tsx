import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
        className={`${inter.variable} bg-[#fafafa] text-[#1a1a1a] min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
