import { HeadContent, Outlet, Scripts } from '@tanstack/react-router'

import { ThemeProvider } from '@/providers/theme'

export function RootDocument() {
  return (
    // suppressHydrationWarning: the inline theme script sets the `dark` class on
    // <html> before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-svh antialiased">
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
