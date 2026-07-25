import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'
import { Callout } from '@/components/mdx/callout'

// Tailwind styling for the HTML that MDX compiles to, plus custom components
// posts can use directly (e.g. <Callout>). Passed to a post's content component
// via its `components` prop, so posts stay plain Markdown by default.
export const mdxComponents = {
  Callout,
  h2: ({ className, ...props }: ComponentProps<'h2'>) => (
    <h2
      className={cn('mt-10 mb-4 font-heading text-2xl font-semibold tracking-tight', className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentProps<'h3'>) => (
    <h3
      className={cn('mt-8 mb-3 font-heading text-xl font-semibold tracking-tight', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentProps<'p'>) => (
    <p className={cn('leading-relaxed text-pretty', className)} {...props} />
  ),
  ul: ({ className, ...props }: ComponentProps<'ul'>) => (
    <ul className={cn('flex list-disc flex-col gap-2 pl-6', className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentProps<'ol'>) => (
    <ol className={cn('flex list-decimal flex-col gap-2 pl-6', className)} {...props} />
  ),
  a: ({ className, ...props }: ComponentProps<'a'>) => (
    <a
      className={cn(
        'font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground',
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentProps<'code'>) => (
    <code
      className={cn('rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em]', className)}
      {...props}
    />
  ),
  strong: ({ className, ...props }: ComponentProps<'strong'>) => (
    <strong className={cn('font-semibold text-foreground', className)} {...props} />
  ),
}
