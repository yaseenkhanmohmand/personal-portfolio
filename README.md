This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## SEO

This portfolio is built for best-in-class SEO. **All SEO facts live in one place:
[`src/lib/site.ts`](src/lib/site.ts)** — title, description, keywords, the Person
identity (roles, location, social profiles, topics), and brand colours. Edit the
constants there and the change propagates to every surface below.

| Surface | File | Notes |
| --- | --- | --- |
| Page metadata, OG/Twitter tags, viewport | `src/app/layout.tsx` | Reads `site.ts` |
| JSON-LD `@graph` (Person · WebSite · ProfilePage · ItemList) | `src/lib/seo.ts` → `src/components/JsonLd.tsx` | Cross-linked by `@id` |
| Social share image (1200×630) | `src/lib/og-image.tsx` → `app/opengraph-image.tsx` + `app/twitter-image.tsx` | Brand fonts, graceful fallback |
| Favicon / app icons | `app/icon.svg`, `app/apple-icon.tsx`, `app/favicon.ico`, `public/icon-*.png` | Branded "Y" monogram |
| robots / sitemap / manifest | `app/robots.ts`, `app/sitemap.ts` (incl. image sitemap), `app/manifest.ts` | |

### Canonical URL

The canonical origin resolves automatically (see `resolveSiteUrl()` in `site.ts`):

1. **`NEXT_PUBLIC_SITE_URL`** — set this to your custom domain (e.g. `https://example.com`) to override everything.
2. **`VERCEL_PROJECT_PRODUCTION_URL`** — provided automatically by Vercel; resolves to the production domain (prefers a custom domain when attached). No action needed on Vercel.
3. `http://localhost:3000` — local-dev fallback.

So in production on Vercel the canonical/OG/sitemap URLs are correct with zero config; set `NEXT_PUBLIC_SITE_URL` only if you want to pin a specific domain.

When homepage content changes, bump `LAST_UPDATED` in `site.ts` (feeds `<lastmod>` and JSON-LD `dateModified`).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
