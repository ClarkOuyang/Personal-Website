import { featuredProjects } from '../data/featuredProjects'
import { useLang, resolveText } from '../i18n/LanguageContext'
import { getString } from '../i18n/strings'
import { withBase } from '../lib/url'

export default function Gallery() {
  const { lang } = useLang()
  const sorted = [...featuredProjects].sort((a, b) => (a.sortKey < b.sortKey ? 1 : -1))

  return (
    <section id="gallery" className="container-page scroll-mt-20 py-16 sm:py-20">
      <p className="section-subheading">{getString('section.data', lang)}</p>
      <h2 className="section-heading">{getString('heading.gallery', lang)}</h2>
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {getString('gallery.intro', lang)}
      </p>

      <div className="mx-auto flex max-w-2xl flex-col gap-5">
        {sorted.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900/40"
          >
            <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
              {p.photo ? (
                <img
                  src={withBase(p.photo)}
                  alt={resolveText(p.title, lang)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                  {getString('gallery.photoPending', lang)}
                </span>
              )}
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-brand-900 dark:text-white">
                {resolveText(p.title, lang)}
              </h3>
              <p className="mt-0.5 text-xs font-medium text-olive-600 dark:text-olive-400">
                {p.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
