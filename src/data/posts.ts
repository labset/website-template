export type Post = {
  slug: string
  title: string
  excerpt: string
  /** ISO date, e.g. "2026-07-20" */
  date: string
  readingMinutes: number
  tags: string[]
  content: string[]
}

export const posts: Post[] = [
  {
    slug: 'hello-tanstack-start',
    title: 'Hello, TanStack Start',
    excerpt:
      'Why we rebuilt the website template on TanStack Start — server-side rendering, type-safe routing, and server functions out of the box.',
    date: '2026-07-24',
    readingMinutes: 4,
    tags: ['tanstack', 'react'],
    content: [
      'TanStack Start pairs the file-based, fully type-safe routing of TanStack Router with a Vite-powered full-stack runtime. That means server-side rendering, streaming, and server functions without leaving your React app.',
      'This template ships a minimal setup: a document shell in the root route, a home page, and a small blog stream backed by server functions — a solid starting point you can grow into.',
      'Everything is typed end to end. Route params, loader data, and server function inputs all flow through TypeScript, so refactors stay honest.',
    ],
  },
  {
    slug: 'file-based-routing',
    title: 'File-based routing, explained',
    excerpt:
      'Each file under src/routes becomes a route. Here is how the root route, index route, and dynamic segments fit together.',
    date: '2026-07-18',
    readingMinutes: 6,
    tags: ['routing', 'tanstack'],
    content: [
      'The __root.tsx route owns the HTML document and renders an Outlet for its children. Every other file under src/routes maps to a URL by its name.',
      'Dynamic segments use a $ prefix: blog.$slug.tsx matches /blog/anything. The matched value is available as a typed route param.',
      'The route tree is generated for you into routeTree.gen.ts whenever you run the dev server or a build, so you never hand-maintain it.',
    ],
  },
  {
    slug: 'server-functions',
    title: 'Loading data with server functions',
    excerpt:
      'Server functions run only on the server, yet you call them like any async function. This blog stream is powered by one.',
    date: '2026-07-11',
    readingMinutes: 5,
    tags: ['data', 'ssr'],
    content: [
      'createServerFn defines a function that always executes on the server. You can read from a database, hit an API, or — as we do here — return static content.',
      'Route loaders call these functions before a route renders, so the data is ready during SSR and hydration. No loading spinners on first paint.',
      'Because the boundary is explicit, secrets and heavy dependencies stay on the server and never ship to the browser.',
    ],
  },
]
