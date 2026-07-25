import { SiteLayout } from '@/components/layout/site-layout'
import { PostCard } from '@/components/blog/post-card'
import { posts } from '@/content/posts'

export function BlogIndex() {
  return (
    <SiteLayout>
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Notes, updates, and the thinking behind this template.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </SiteLayout>
  )
}
