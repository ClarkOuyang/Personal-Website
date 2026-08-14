import { profile } from '../data/profile'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="about"
      className="container-page scroll-mt-20 pt-28 sm:pt-32"
    >
      <div className="grid items-start gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
        {/* Photo */}
        <div className="mx-auto flex flex-col items-center gap-4 lg:mx-0 lg:items-start">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand-500 to-olive-500 opacity-20 blur" />
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              onError={(e) => {
                // Fall back to the bundled placeholder if no real photo is present.
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
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-olive-600 dark:text-olive-400">
            {profile.title}
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-1 flex items-center gap-1.5 text-base text-slate-500 dark:text-slate-400">
            <MapPin className="h-4 w-4" />
            {profile.affiliation}
          </p>

          {/* Research interest pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.researchInterests.map((r) => (
              <span key={r} className="pill">
                {r}
              </span>
            ))}
          </div>

          {/* Bio */}
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
