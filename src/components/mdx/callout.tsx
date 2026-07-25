import type { ReactNode } from 'react'
import { Info } from 'lucide-react'

// A highlighted aside for blog posts. Import it directly inside an .mdx file, or
// use it via the `Callout` key in mdx-components.
export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 flex gap-4 rounded-3xl border border-border bg-muted/50 p-5">
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
        <Info className="size-4" />
      </span>
      <div className="text-sm text-foreground [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}
