import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

import { SiteLayout } from '@/components/layout/site-layout'
import { Badge } from '@/components/ui/badge'
import { mdxComponents } from '@/components/mdx/mdx-components'
import { getAuthor } from '@/content/authors'
import { formatPostDate, type Post } from '@/content/posts'

export function BlogPost({ post }: { post: Post }) {
  const { Content, meta } = post
  const author = getAuthor(meta.author)

  return (
    <SiteLayout>
      <article className="mx-auto w-full max-w-2xl px-6 py-24">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          All posts
        </Link>

        <header className="mt-8">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {meta.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              {author.name}
              {author.role ? `, ${author.role}` : ''}
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={meta.date}>{formatPostDate(meta.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{meta.readingTime}</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-1.5">
            {meta.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="mt-12 flex flex-col gap-5 text-lg">
          <Content components={mdxComponents} />
        </div>
      </article>
    </SiteLayout>
  )
}
