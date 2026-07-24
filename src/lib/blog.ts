import { createServerFn } from '@tanstack/react-start'
import { posts, type Post } from '@/data/posts'

/** Lightweight shape for the blog stream — omits the full post body. */
export type PostSummary = Omit<Post, 'content'>

const toSummary = ({ content: _content, ...summary }: Post): PostSummary =>
  summary

const byNewest = (a: Post, b: Post) => b.date.localeCompare(a.date)

export const getPosts = createServerFn({ method: 'GET' }).handler(
  async (): Promise<PostSummary[]> =>
    [...posts].sort(byNewest).map(toSummary),
)

export const getPost = createServerFn({ method: 'GET' })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }): Promise<Post | null> => {
    return posts.find((post) => post.slug === slug) ?? null
  })
