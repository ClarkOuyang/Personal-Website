// ---------------------------------------------------------------------------
// Shared TypeScript interfaces for the academic website data layer.
// The data lives in src/data/*.ts as plain, JSON-like objects so it is easy to
// edit. Swap these for your own real content — the components stay unchanged.
//
// A field typed as `Bilingual` accepts either a plain string (shown in every
// language) or an { en, zh } object for per-language text. Resolve with
// resolveText() from src/i18n/LanguageContext.
// ---------------------------------------------------------------------------

export type Bilingual = string | { en: string; zh: string }

export type SocialType =
  | 'scholar'
  | 'github'
  | 'linkedin'
  | 'email'
  | 'cv'
  | 'twitter'
  | 'orcid'
  | 'website'

export interface SocialLink {
  type: SocialType
  href: string
  label: string
}

export interface Profile {
  name: string
  /** Short first name used for the hero greeting. */
  firstName: string
  title: Bilingual
  affiliation: Bilingual
  location: string
  /** Contact details shown in the footer. */
  email: string
  phone: string
  /** Path under /public or an absolute URL. Use a square image for best results. */
  photo: string
  /** Each entry is rendered as a separate paragraph. */
  bio: Bilingual[]
  /** Research direction pills shown under the hero. */
  researchInterests: Bilingual[]
  socials: SocialLink[]
}

export type PubLinkType = 'pdf' | 'code' | 'project' | 'slides' | 'doi'

export interface PublicationLink {
  type: PubLinkType
  href: string
  label?: string
}

export interface Publication {
  id: string
  title: Bilingual
  /** Author names. The name matching Profile.name is auto-highlighted. */
  authors: string[]
  /** Venue / journal / conference name. */
  venue: Bilingual
  year: number
  /** e.g. "Conference", "Journal", "Preprint". */
  kind: Bilingual
  tags: Bilingual[]
  /** Mark as a highlighted / selected paper (adds a small badge). */
  highlight?: boolean
  links: PublicationLink[]
  /** BibTeX citation text shown when the button is expanded. */
  bibtex: string
}

export interface NewsItem {
  id: string
  /** Display date, e.g. "Aug 2025" or "2025". Sorted newest-first. */
  date: string
  /** ISO date used for sorting (optional). */
  iso?: string
  title: Bilingual
  description?: Bilingual
  tag?: Bilingual
  link?: { href: string; label: string }
}

export type ProjectLinkType = 'paper' | 'code' | 'demo'

export interface Project {
  id: string
  title: Bilingual
  description: Bilingual
  keywords: Bilingual[]
  status?: Bilingual
  links: { type: ProjectLinkType; href: string; label?: string }[]
}

export interface TimelineItem {
  id: string
  /** Job title or degree. */
  role: Bilingual
  /** Company / lab / university. */
  organization: Bilingual
  location?: string
  start: string
  end: string
  description?: Bilingual
  bullets?: Bilingual[]
}
