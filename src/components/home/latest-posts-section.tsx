import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { posts } from '@/content/posts'
import { PostCard } from '@/components/blog/post-card'

// The blog stream on the landing page: the few most recent posts, with a link
// through to the full index.
export function LatestPostsSection() {
  const latest = posts.slice(0, 4)

  return (
    <section id="latest" className="mx-auto w-full max-w-5xl scroll-mt-16 px-6 py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            Latest posts
          </h2>
          <p className="mt-2 text-muted-foreground">
            Notes and updates, freshest first.
          </p>
        </div>
        <Link
          to="/blog"
          className="hidden items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground sm:inline-flex"
        >
          All posts
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {latest.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
