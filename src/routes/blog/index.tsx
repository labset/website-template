import { createFileRoute } from '@tanstack/react-router'

import { BlogIndex } from '@/components/blog/blog-index'
import { SITE_URL, socialMeta } from '@/lib/site'

const TITLE = 'Blog · website-template'
const DESCRIPTION = 'Notes, updates, and the thinking behind this template.'
const URL = `${SITE_URL}/blog`

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      ...socialMeta({ title: TITLE, description: DESCRIPTION, url: URL }),
    ],
    links: [{ rel: 'canonical', href: URL }],
  }),
  component: BlogIndex,
})
