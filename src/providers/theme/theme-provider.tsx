import { useEffect, useSyncExternalStore, type ReactNode } from 'react'

import { THEME_STORAGE_KEY, ThemeContext, type ResolvedTheme, type Theme } from './theme-context'

// External store: theme lives in localStorage + the OS colour-scheme media
// query. useSyncExternalStore reads it SSR-safely (getServerSnapshot) with no
// hydration mismatch and no setState-in-effect.
const listeners = new Set<() => void>()

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange)
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  media.addEventListener('change', onStoreChange)
  window.addEventListener('storage', onStoreChange)
  return () => {
    listeners.delete(onStoreChange)
    media.removeEventListener('change', onStoreChange)
    window.removeEventListener('storage', onStoreChange)
  }
}

function prefersDark() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function readStoredTheme(): Theme {
  if (typeof localStorage === 'undefined') return 'system'
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system'
  } catch {
    return 'system'
  }
}

function resolveTheme(theme: Theme): ResolvedTheme {
  if (theme === 'system') return prefersDark() ? 'dark' : 'light'
  return theme
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, readStoredTheme, () => 'system' as Theme)
  const resolvedTheme = useSyncExternalStore(
    subscribe,
    () => resolveTheme(readStoredTheme()),
    () => 'light' as ResolvedTheme,
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark')
  }, [resolvedTheme])

  const setTheme = (next: Theme) => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // Ignore storage failures (private mode, disabled storage).
    }
    listeners.forEach((listener) => listener())
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
