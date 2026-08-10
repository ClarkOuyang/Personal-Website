import { profile } from '../data/profile'
import { SocialLinks } from './SocialIcons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0d1320]">
      <div className="container-page flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {profile.name}. All rights reserved.
        </p>
        <SocialLinks socials={profile.socials} iconClassName="h-[18px] w-[18px]" />
      </div>
      <p className="pb-6 text-center text-xs text-slate-400 dark:text-slate-600">
        Built with React &amp; Tailwind CSS.
      </p>
    </footer>
  )
}
