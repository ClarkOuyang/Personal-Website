/**
 * Prefix a `/public`-relative path with Vite's configured base URL so it
 * resolves correctly both in dev (base "/") and on GitHub Pages project
 * sites (base "/Personal-Website/"). Vite only auto-rewrites imported
 * assets and index.html references — raw strings living in data files
 * (profile.photo, timeline logos, featuredProjects photos, etc.) need this
 * applied manually wherever they're used as an <img src>.
 *
 * Leaves absolute URLs (http/https) and empty strings untouched.
 */
export function withBase(path: string): string {
  if (!path) return path
  if (/^https?:\/\//.test(path)) return path
  const base = import.meta.env.BASE_URL // e.g. "/" or "/Personal-Website/"
  return base.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
}
