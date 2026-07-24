import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { getPosts, type PostSummary } from '@/lib/blog'
import { formatDate } from '@/lib/format'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  loader: () => getPosts(),
  component: Home,
})

function Home() {
  const posts = Route.useLoaderData()

  return (
    <main className="mx-auto flex min-h-svh w-full max-w-3xl flex-col gap-16 px-6 py-16 sm:py-24">
      <Hero />
      <BlogStream posts={posts} />
    </main>
  )
}

function Hero() {
  return (
    <section className="flex flex-col items-start gap-6">
      <span className="rounded-4xl border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
        website-template
      </span>
      <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Build fast, ship faster.
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground text-pretty">
        A minimal starter built with TanStack Start, React, Tailwind, and
        shadcn — server-rendered, type-safe, and ready to grow.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button size="lg" render={<a href="#blog" />}>
          Read the blog
          <ArrowRight />
        </Button>
        <Button
          size="lg"
          variant="outline"
          render={
            <a href="https://tanstack.com/start" target="_blank" rel="noreferrer" />
          }
        >
          TanStack Start
        </Button>
      </div>
    </section>
  )
}

function BlogStream({ posts }: { posts: PostSummary[] }) {
  return (
    <section id="blog" className="flex flex-col gap-8 scroll-mt-16">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Latest posts</h2>
        <span className="text-sm text-muted-foreground">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'}
        </span>
      </div>
      <ul className="flex flex-col divide-y divide-border">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  )
}

function PostCard({ post }: { post: PostSummary }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex flex-col gap-2 py-6 outline-none"
    >
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingMinutes} min read</span>
      </div>
      <h3 className="text-lg font-medium tracking-tight group-hover:underline group-focus-visible:underline">
        {post.title}
      </h3>
      <p className="text-muted-foreground text-pretty">{post.excerpt}</p>
      <div className="mt-1 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-4xl bg-muted px-2 py-0.5 text-xs text-muted-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
