import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { getPost } from '@/lib/blog'
import { formatDate } from '@/lib/format'

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const post = await getPost({ data: params.slug })
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData }) =>
    loaderData
      ? { meta: [{ title: `${loaderData.title} — website-template` }] }
      : {},
  component: BlogPost,
  notFoundComponent: PostNotFound,
})

function BlogPost() {
  const post = Route.useLoaderData()

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-6 py-16 sm:py-24">
      <BackLink />
      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min read</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {post.title}
        </h1>
      </header>
      <article className="flex flex-col gap-5 text-lg leading-relaxed text-pretty">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </article>
    </main>
  )
}

function PostNotFound() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col items-start gap-6 px-6 py-24">
      <BackLink />
      <h1 className="text-3xl font-semibold tracking-tight">Post not found</h1>
      <p className="text-muted-foreground">
        The post you are looking for does not exist or may have been moved.
      </p>
    </main>
  )
}

function BackLink() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground outline-none hover:text-foreground focus-visible:text-foreground"
    >
      <ArrowLeft className="size-4" />
      Back home
    </Link>
  )
}
