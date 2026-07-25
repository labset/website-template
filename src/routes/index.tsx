import { createFileRoute } from '@tanstack/react-router'

import { LandingPage } from '@/components/home/landing-page'
import { SITE_URL } from '@/lib/site'

export const Route = createFileRoute('/')({
  head: () => ({
    links: [{ rel: 'canonical', href: `${SITE_URL}/` }],
  }),
  component: LandingPage,
})
