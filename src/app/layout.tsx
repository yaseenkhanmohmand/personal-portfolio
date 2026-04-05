import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yaseen Mohmand | CEO & CTO Portfolio",
  description:
    "Portfolio of Yaseen Mohmand — CEO & CTO showcasing tech products, leadership, and engineering vision.",
  openGraph: {
    title: "Yaseen Mohmand | CEO & CTO Portfolio",
    description:
      "Portfolio of Yaseen Mohmand — CEO & CTO showcasing tech products, leadership, and engineering vision.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaseen Mohmand | CEO & CTO Portfolio",
    description:
      "Portfolio of Yaseen Mohmand — CEO & CTO showcasing tech products, leadership, and engineering vision.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-[#0a0a0a] text-white min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
