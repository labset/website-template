import { Link, getRouteApi } from '@tanstack/react-router'

import { BlogPost } from '@/components/blog-post'
import { NotFoundLayout } from '@/components/not-found'
import { Button } from '@/components/ui/button'
import { getPost } from '@/content/posts'

const route = getRouteApi('/blog/$slug')

export function BlogPostPage() {
  const { slug } = route.useParams()
  const post = getPost(slug)

  if (!post) return <BlogNotFound />

  return <BlogPost post={post} />
}

export function BlogNotFound() {
  return (
    <NotFoundLayout
      title="I couldn't find that post"
      description="It may have moved. Head back to the blog to find your way."
    >
      <Button render={<Link to="/blog" />}>All posts</Button>
    </NotFoundLayout>
  )
}
