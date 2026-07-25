import { Link } from '@tanstack/react-router'

import { SITE_NAME } from '@/lib/site'
import { Separator } from '@/components/ui/separator'

type FooterLink = {
  label: string
  // Set `to` for in-app links (routed via TanStack), or `href` for external
  // ones. Omit both for destinations that don't exist yet; they render disabled.
  to?: string
  hash?: string
  href?: string
}

const FOOTER_SECTIONS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Features', to: '/', hash: 'features' },
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    title: 'Built with',
    links: [
      { label: 'TanStack Start', href: 'https://tanstack.com/start' },
      { label: 'React', href: 'https://react.dev' },
      { label: 'Tailwind CSS', href: 'https://tailwindcss.com' },
    ],
  },
  {
    title: 'More',
    links: [{ label: 'GitHub', href: 'https://github.com/labset' }],
  },
]

function FooterItem({ link }: { link: FooterLink }) {
  const className =
    'text-sm text-muted-foreground transition-colors hover:text-foreground'

  if (link.to) {
    return (
      <Link to={link.to} hash={link.hash} className={className}>
        {link.label}
      </Link>
    )
  }
  if (link.href) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={className}>
        {link.label}
      </a>
    )
  }
  return (
    <span
      aria-disabled="true"
      className="cursor-not-allowed text-sm text-muted-foreground/50"
    >
      {link.label}
    </span>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Link
              to="/"
              className="font-heading text-lg font-semibold tracking-tight"
            >
              {SITE_NAME}
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A minimal starter, built on TanStack Start and shared as a template.
            </p>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-medium">{section.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <FooterItem link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Built with TanStack Start.</p>
        </div>
      </div>
    </footer>
  )
}
