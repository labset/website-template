import type { ComponentType } from 'react'

import { authors, type AuthorId } from '@/content/authors'

export type PostMeta = {
  title: string
  description: string
  // Author key, resolved against the registry in content/authors.ts.
  author: AuthorId
  // ISO date, YYYY-MM-DD. Used for sorting and display.
  date: string
  readingTime: string
  tags: string[]
  // Optional cover image (a path under public/). When absent, the listing draws
  // a generated gradient instead.
  cover?: string
}

// The compiled MDX body. It accepts an optional `components` map so posts can be
// rendered with our styled elements (see components/mdx/mdx-components.tsx).
export type PostContent = ComponentType<{ components?: Record<string, unknown> }>

export type Post = {
  slug: string
  meta: PostMeta
  Content: PostContent
}

// Every .mdx file under posts/ is a published entry, grouped into year/month
// folders. Slug is the filename, so the folders never touch the URL.
const modules = import.meta.glob<{ meta: PostMeta; default: PostContent }>(
  './posts/**/*.mdx',
  { eager: true },
)

// .mdx meta literals are not type-checked by tsc, so validate them here. This
// runs at import (build/prerender) and fails loudly on a malformed post rather
// than crashing later when a component dereferences the missing field.
function toPost(path: string, mod: { meta: PostMeta; default: PostContent }): Post {
  const slug = path.split('/').pop()!.replace(/\.mdx$/, '')
  const meta = mod.meta

  if (!meta) throw new Error(`Blog post "${slug}" is missing its \`meta\` export.`)
  for (const field of ['title', 'description', 'author', 'date', 'readingTime'] as const) {
    if (!meta[field]) throw new Error(`Blog post "${slug}" is missing \`meta.${field}\`.`)
  }
  if (!Array.isArray(meta.tags)) throw new Error(`Blog post "${slug}" is missing \`meta.tags\`.`)
  if (!authors[meta.author]) {
    throw new Error(
      `Blog post "${slug}" has unknown author "${meta.author}". Add it to content/authors.ts.`,
    )
  }

  return { slug, meta, Content: mod.default }
}

export const posts: Post[] = Object.entries(modules)
  .map(([path, mod]) => toPost(path, mod))
  // Newest first.
  .sort((a, b) => b.meta.date.localeCompare(a.meta.date))

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function formatPostDate(date: string): string {
  // Parse as UTC so the displayed day never shifts with the viewer's timezone.
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
