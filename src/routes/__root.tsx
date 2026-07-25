import { createRootRoute } from '@tanstack/react-router'

import { RootDocument } from '@/components/layout/root-document'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, socialMeta } from '@/lib/site'
import appCss from '@/index.css?url'

const TITLE = `${SITE_NAME} — TanStack Start starter`
const HOME_URL = `${SITE_URL}/`

// Apply the saved theme before paint to avoid a flash of the wrong colour
// scheme. Keep the 'theme' key in sync with THEME_STORAGE_KEY in
// src/providers/theme/theme-context.ts.
const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: TITLE },
      { name: 'description', content: SITE_DESCRIPTION },
      { name: 'robots', content: 'index, follow' },
      ...socialMeta({ title: TITLE, description: SITE_DESCRIPTION, url: HOME_URL }),
    ],
    // Canonical is page-specific and lives on each leaf route so it isn't
    // duplicated; TanStack dedupes <meta> but not <link>. See routes/index.tsx.
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'stylesheet', href: appCss },
    ],
    scripts: [{ children: themeScript }],
  }),
  component: RootDocument,
})
