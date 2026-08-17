import { profile } from '../data/profile'
import { Mail, Phone, ExternalLink } from 'lucide-react'
import { useLang, resolveText } from '../i18n/LanguageContext'

export default function Hero() {
  const { lang } = useLang()
  return (
    <section id="about" className="container-page scroll-mt-20 pt-28 sm:pt-32">
      <div className="grid items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
        {/* Photo */}
        <div className="mx-auto flex flex-col items-center gap-4 lg:mx-0 lg:items-start">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand-500 to-olive-500 opacity-20 blur" />
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              onError={(e) => {
                const el = e.currentTarget
                if (el.src.endsWith('/photo.svg')) return
                el.src = '/photo.svg'
              }}
              className="relative h-40 w-40 rounded-2xl border border-slate-200 object-cover shadow-soft sm:h-48 sm:w-48 lg:h-56 lg:w-56 dark:border-slate-700"
            />
          </div>
          <div className="w-full space-y-1 text-sm text-slate-600 dark:text-slate-300">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-center gap-1.5 hover:text-brand-700 dark:hover:text-brand-200 lg:justify-start"
            >
              <Mail className="h-4 w-4 text-olive-600 dark:text-olive-400" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center justify-center gap-1.5 hover:text-brand-700 dark:hover:text-brand-200 lg:justify-start"
            >
              <Phone className="h-4 w-4 text-olive-600 dark:text-olive-400" />
              {profile.phone}
            </a>
          </div>
        </div>

        {/* Text */}
        <div className="min-w-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl dark:text-white">
            {profile.name}
          </h1>

          {/* Affiliation blocks */}
          <div className="mt-5 space-y-5">
            {profile.affiliations.map((a, i) => (
              <div key={i} className="border-l-2 border-brand-200 pl-4 dark:border-brand-700">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-base font-bold text-brand-900 dark:text-white">
                    {resolveText(a.school, lang)}
                  </span>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {resolveText(a.role, lang)}
                  </span>
                  <span className="text-sm font-medium tabular-nums text-olive-600 dark:text-olive-400">
                    {a.period}
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                  {resolveText(a.supervisor, lang)}
                  {a.supervisorLinks?.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 inline-flex items-center gap-0.5 font-medium text-brand-600 hover:underline dark:text-brand-300"
                    >
                      {l.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </p>

                {a.major && (
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {resolveText(a.major, lang)}
                  </p>
                )}

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {resolveText(a.direction, lang)}
                </p>
              </div>
            ))}
          </div>

          {/* Research interest pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.researchInterests.map((r, i) => (
              <span key={i} className="pill">
                {resolveText(r, lang)}
              </span>
            ))}
          </div>

          {/* Bio */}
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.bio.map((para, i) => (
              <p key={i}>{resolveText(para, lang)}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
