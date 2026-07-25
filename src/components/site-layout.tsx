import type { ReactNode } from 'react'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { cn } from '@/lib/utils'

// The shared page shell: sticky header, flexible main, footer. Pages pass their
// content as children and can extend the <main> classes (e.g. positioning).
export function SiteLayout({
  children,
  mainClassName,
}: {
  children: ReactNode
  mainClassName?: string
}) {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className={cn('flex-1', mainClassName)}>{children}</main>
      <SiteFooter />
    </div>
  )
}
