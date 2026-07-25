import { createRouter } from '@tanstack/react-router'

import { NotFound } from '@/components/not-found'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: 'intent',
    scrollRestoration: true,
    // Site-wide fallback for any unmatched route (the blog $slug route
    // overrides this with its own notFoundComponent).
    defaultNotFoundComponent: NotFound,
  })
}
