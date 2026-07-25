// Type declarations for MDX blog posts. Each post default-exports its rendered
// content component and named-exports a `meta` object describing the entry.
declare module '*.mdx' {
  import type { ComponentType } from 'react'
  import type { PostMeta } from '@/content/posts'

  export const meta: PostMeta
  const MDXContent: ComponentType<{ components?: Record<string, unknown> }>
  export default MDXContent
}
