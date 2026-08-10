import {
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  FileText,
  Twitter,
  type LucideIcon,
} from 'lucide-react'
import type { SocialType } from '../types'

// A small custom ORCID "iD" glyph (the official green circle with text).
function OrcidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} aria-hidden="true">
      <circle cx="128" cy="128" r="128" fill="#A6CE39" />
      <path
        fill="#FFFFFF"
        d="M86.2 87.4v82h17.6v-30.3c3.5 5.6 8.8 9.7 18.8 9.7 17.5 0 28.8-13 28.8-35.4 0-20.7-11.6-34.4-29-34.4-9.9 0-16.3 4.3-19.4 9.5V87.4H86.2zm17.5 48c0-9.6 5.3-14.8 13-14.8 7.6 0 12.5 5.2 12.5 14.8 0 9.6-4.9 14.9-12.5 14.9-7.7 0-13-5.3-13-14.9zm48.8-1.2c0-6.4 3-9.1 8.2-9.1 3.5 0 6.7 1.3 9.2 3.8v-9.9c-2.9-1.5-6-2.2-10-2.2-9.2 0-14.2 5.7-14.2 15.4 0 9.9 5 15.4 14.6 15.4 4.3 0 7.6-1 10.3-2.4v-9.7c-2.7 2.2-5.9 3.5-9.1 3.5-4.9 0-8-3-8-5.8z"
      />
    </svg>
  )
}

const ICONS: Record<SocialType, LucideIcon | ((p: { className?: string }) => JSX.Element)> = {
  scholar: GraduationCap,
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  cv: FileText,
  twitter: Twitter,
  orcid: OrcidIcon,
  website: Globe,
}

export function SocialIcon({
  type,
  className,
}: {
  type: SocialType
  className?: string
}) {
  const Icon = ICONS[type]
  return <Icon className={className} />
}

/** Renders a set of social links as accessible icon buttons. */
export function SocialLinks({
  socials,
  className = '',
  iconClassName = 'h-5 w-5',
}: {
  socials: { type: SocialType; href: string; label: string }[]
  className?: string
  iconClassName?: string
}) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {socials.map((s) => (
        <a
          key={s.type + s.href}
          href={s.href}
          target={s.href.startsWith('http') ? '_blank' : undefined}
          rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={s.label}
          title={s.label}
          className="rounded-md p-2 text-slate-500 transition-colors hover:bg-brand-50 hover:text-brand-700 dark:text-slate-400 dark:hover:bg-brand-800/50 dark:hover:text-white"
        >
          <SocialIcon type={s.type} className={iconClassName} />
        </a>
      ))}
    </div>
  )
}
