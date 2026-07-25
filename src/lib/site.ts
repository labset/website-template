// Shared site-wide constants used for canonical URLs and social cards.
// SITE_URL comes from the VITE_SITE_URL env var (set it to your deployed
// origin); on Vercel it defaults to the project's production domain — see
// vite.config.ts. Falls back to https://example.com when unset. Any trailing
// slash is stripped so paths build cleanly as `${SITE_URL}/blog/...`.
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? 'https://example.com'
).replace(/\/+$/, '')
export const SITE_NAME = 'website-template'
export const SITE_DESCRIPTION =
  'A minimal starter built with TanStack Start, React, Tailwind, and shadcn — server-rendered, type-safe, and ready to grow.'

type SocialMetaOptions = {
  title: string
  description: string
  url: string
  image?: string
  type?: 'website' | 'article'
}

// The Open Graph + Twitter card tags shared by every route's `head()`. Callers
// still own the page <title>, meta description, canonical link, and any
// page-specific tags (robots, article:published_time). Pass `image` once you
// have social cards to point at.
export function socialMeta({
  title,
  description,
  url,
  image,
  type = 'website',
}: SocialMetaOptions) {
  return [
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    ...(image
      ? [
          { property: 'og:image', content: image },
          { name: 'twitter:image', content: image },
        ]
      : []),
  ]
}
