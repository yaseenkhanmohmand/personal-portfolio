import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json in a parent dir makes Next infer the wrong
  // workspace root; pin it to this project so file tracing stays scoped.
  outputFileTracingRoot: process.cwd(),
  // Drop the "X-Powered-By: Next.js" header — no value, minor fingerprinting.
  poweredByHeader: false,
  // Serve modern, smaller formats from next/image for better Core Web Vitals.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
