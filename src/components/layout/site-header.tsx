import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'

import { SITE_NAME } from '@/lib/site'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/layout/theme-toggle'

type NavLink = {
  label: string
  to: string
  // Optional hash for links that target a section on the home page.
  hash?: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'Features', to: '/', hash: 'features' },
  { label: 'Blog', to: '/blog' },
]

const GITHUB_URL = 'https://github.com/labset/website-template'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link
          to="/"
          aria-label={`${SITE_NAME} home`}
          className="font-heading text-lg font-semibold tracking-tight"
        >
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className="text-sm font-medium text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Button
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex"
            render={<a href={GITHUB_URL} target="_blank" rel="noreferrer" />}
          >
            GitHub
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                >
                  <Menu />
                </Button>
              }
            />
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>{SITE_NAME}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-6">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.label}
                    render={
                      <Link
                        to={link.to}
                        hash={link.hash}
                        className="rounded-2xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <SheetClose
                  render={
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    />
                  }
                >
                  GitHub
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
