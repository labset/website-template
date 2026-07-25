import { createFileRoute, notFound } from '@tanstack/react-router'

import { BlogNotFound, BlogPostPage } from '@/components/blog-post-page'
import { getPost } from '@/content/posts'
import { SITE_URL, socialMeta } from '@/lib/site'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    if (!getPost(params.slug)) throw notFound()
  },
  head: ({ params }) => {
    const post = getPost(params.slug)
    // notFound path: keep the missing post out of search indexes.
    if (!post) {
      return {
        meta: [
          { title: 'Post not found · website-template' },
          { name: 'robots', content: 'noindex' },
        ],
      }
    }

    const title = `${post.meta.title} · website-template`
    const url = `${SITE_URL}/blog/${post.slug}`

    return {
      meta: [
        { title },
        { name: 'description', content: post.meta.description },
        ...socialMeta({ title, description: post.meta.description, url, type: 'article' }),
        { property: 'article:published_time', content: post.meta.date },
      ],
      links: [{ rel: 'canonical', href: url }],
    }
  },
  component: BlogPostPage,
  notFoundComponent: BlogNotFound,
})
