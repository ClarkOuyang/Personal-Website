import { profile } from '../data/profile'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0d1320]">
      <div className="container-page flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex flex-col items-center gap-1 text-sm text-slate-600 dark:text-slate-300 sm:items-end">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 hover:text-brand-700 dark:hover:text-brand-200"
          >
            <Mail className="h-4 w-4 text-olive-600 dark:text-olive-400" />
            Email: {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-brand-700 dark:hover:text-brand-200"
          >
            <Phone className="h-4 w-4 text-olive-600 dark:text-olive-400" />
            Phone: {profile.phone}
          </a>
        </div>
      </div>
      <p className="pb-6 text-center text-xs text-slate-400 dark:text-slate-600">
        Built with React &amp; Tailwind CSS.
      </p>
    </footer>
  )
}
