import {
  FileText,
  Gauge,
  MoonStar,
  Palette,
  Route,
  Server,
  type LucideIcon,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

const FEATURES: Feature[] = [
  {
    icon: Server,
    title: 'Server rendered',
    description: 'TanStack Start renders on the server, so readers get real HTML on first paint.',
    tags: ['SSR', 'streaming'],
  },
  {
    icon: Route,
    title: 'Type-safe routing',
    description: 'File-based routes with params and loader data checked end to end by TypeScript.',
    tags: ['router', 'typescript'],
  },
  {
    icon: Palette,
    title: 'Tailwind + shadcn',
    description: 'OKLCH design tokens and headless Base UI primitives you fully control.',
    tags: ['tailwind', 'base-ui'],
  },
  {
    icon: FileText,
    title: 'MDX content',
    description: 'Author posts in Markdown, drop in React components, discovered at build time.',
    tags: ['mdx', 'content'],
  },
  {
    icon: MoonStar,
    title: 'Dark mode',
    description: 'A pre-paint theme script and system-aware toggle, with no flash of the wrong theme.',
    tags: ['theming'],
  },
  {
    icon: Gauge,
    title: 'Static prerendering',
    description: 'Every page is crawled from the homepage and written to static HTML for fast, SEO-friendly loads.',
    tags: ['SSG', 'SEO'],
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto w-full max-w-5xl scroll-mt-16 px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight">
          Everything you need to start
        </h2>
        <p className="mt-2 text-muted-foreground">
          A batteries-included foundation, wired up and ready to extend.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <Card
            key={feature.title}
            className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:ring-foreground/10"
          >
            <CardHeader>
              <span className="mb-2 flex size-10 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                <feature.icon className="size-5" />
              </span>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {feature.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
