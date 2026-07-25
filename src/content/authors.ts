// Blog authors. Add an entry per person; posts reference an author by key
// through their `author` meta field. Optional fields (role, avatar, url) can be
// filled in as we grow the team.
export type Author = {
  name: string
  // Optional short role or title shown alongside the name.
  role?: string
  // Optional avatar path under /public.
  avatar?: string
  // Optional link to a profile or personal site.
  url?: string
}

export const authors = {
  hasnae: {
    name: 'Hasnae',
  },
} satisfies Record<string, Author>

export type AuthorId = keyof typeof authors

export function getAuthor(id: AuthorId): Author {
  const author = authors[id]
  if (!author) {
    throw new Error(`Unknown author "${id}". Add it to content/authors.ts.`)
  }
  return author
}
