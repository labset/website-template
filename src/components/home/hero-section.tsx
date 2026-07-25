import { ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

import { SITE_DESCRIPTION } from '@/lib/site'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-32">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Build fast, ship faster.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted-foreground text-balance">
          {SITE_DESCRIPTION}
        </p>

        <div className="mt-10">
          <Button size="lg" render={<Link to="/blog" />}>
            Read the blog
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  )
}
