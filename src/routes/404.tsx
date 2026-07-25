import { createFileRoute } from '@tanstack/react-router'

import { NotFound } from '@/components/not-found'

// Prerendered to dist/client/404.html (see vite.config.ts `pages`) so a static
// host can serve our branded not-found page for any unmatched URL. In-app
// navigation to a missing route uses the router's defaultNotFoundComponent.
export const Route = createFileRoute('/404')({
  head: () => ({
    meta: [
      { title: 'Page not found · website-template' },
      { name: 'robots', content: 'noindex' },
    ],
  }),
  component: NotFound,
})
