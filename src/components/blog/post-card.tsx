import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { getAuthor } from '@/content/authors'
import { formatPostDate, type Post } from '@/content/posts'

// A single entry in the blog stream / index. Shared between the landing page's
// latest-posts section and the full blog index.
export function PostCard({ post }: { post: Post }) {
  const { meta } = post

  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex flex-col overflow-hidden rounded-4xl border border-border/60 bg-card shadow-sm ring-1 ring-foreground/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md hover:ring-foreground/10"
    >
      <div className="relative h-20 overflow-hidden">
        {meta.cover ? (
          <img
            src={meta.cover}
            alt=""
            className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="size-full bg-gradient-to-br from-muted to-accent transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}

        {meta.tags[0] ? (
          <Badge
            variant="secondary"
            className="absolute top-4 left-4 bg-background/85 text-foreground shadow-sm backdrop-blur-sm"
          >
            {meta.tags[0]}
          </Badge>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">
            {getAuthor(meta.author).name}
          </span>
          <span aria-hidden="true">·</span>
          <time dateTime={meta.date}>{formatPostDate(meta.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{meta.readingTime}</span>
        </div>

        <h3 className="font-heading text-lg font-medium tracking-tight sm:text-xl">
          {meta.title}
        </h3>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {meta.description}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground">
          Read
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}
