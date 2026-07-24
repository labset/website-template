const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

/** Format an ISO date string (YYYY-MM-DD) as e.g. "Jul 24, 2026". */
export function formatDate(iso: string): string {
  // Parse as UTC so the day doesn't shift across timezones.
  return dateFormatter.format(new Date(`${iso}T00:00:00Z`))
}
