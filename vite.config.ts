import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackStart({
      // Prerender the whole site to static HTML, crawling links from the
      // homepage to discover every reachable page.
      prerender: { enabled: true, crawlLinks: true },
      // Emit the /404 route as dist/client/404.html; static hosts serve it
      // (with a 404 status) for unmatched URLs. crawlLinks never reaches /404
      // since nothing links to it, so it is listed explicitly.
      pages: [{ path: '/404', prerender: { enabled: true, outputPath: '/404.html' } }],
    }),
    tailwindcss(),
    // MDX must run before react's plugin so the JSX it emits gets transformed.
    { enforce: 'pre', ...mdx() },
    // react's plugin must come after start's plugin; include mdx so posts go
    // through Fast Refresh and the automatic JSX runtime.
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
