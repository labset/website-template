import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'

import { SiteLayout } from '@/components/site-layout'
import { Button } from '@/components/ui/button'

// Shared presentation for not-found pages: centred within the site shell, with a
// code eyebrow, heading, message, and a caller-supplied action.
export function NotFoundLayout({
  code = '404',
  title,
  description,
  children,
}: {
  code?: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <SiteLayout mainClassName="flex items-center">
      <div className="mx-auto w-full max-w-2xl px-6 py-24 text-center">
        <p className="font-heading text-sm font-medium text-muted-foreground">{code}</p>
        <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground text-balance">{description}</p>
        <div className="mt-8">{children}</div>
      </div>
    </SiteLayout>
  )
}

// Site-wide fallback for any unmatched route.
export function NotFound() {
  return (
    <NotFoundLayout
      title="Page not found"
      description="The page you are looking for may have moved. Let's get you back on track."
    >
      <Button render={<Link to="/" />}>Back to home</Button>
    </NotFoundLayout>
  )
}
