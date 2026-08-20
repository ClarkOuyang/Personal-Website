import { useState } from 'react'
import { featuredProjects } from '../data/featuredProjects'
import type { FeaturedProject } from '../types'
import { useLang, resolveText } from '../i18n/LanguageContext'
import { getString } from '../i18n/strings'
import { withBase } from '../lib/url'
import { ChevronDown } from 'lucide-react'

export default function Gallery() {
  const { lang } = useLang()
  const sorted = [...featuredProjects].sort((a, b) => (a.sortKey < b.sortKey ? 1 : -1))

  return (
    <section id="gallery" className="container-page scroll-mt-20 py-16 sm:py-20">
      <h2 className="section-heading">{getString('heading.gallery', lang)}</h2>

      <div className="mx-auto flex max-w-2xl flex-col gap-5">
        {sorted.map((p) => (
          <ProjectCard key={p.id} project={p} lang={lang} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project: p, lang }: { project: FeaturedProject; lang: 'en' | 'zh' }) {
  const [open, setOpen] = useState(false)
  const hasDetail = !!p.detail

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900/40">
      <div className="flex items-center gap-4">
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
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold text-brand-900 dark:text-white">
            {resolveText(p.title, lang)}
          </h3>
          <p className="mt-0.5 text-xs font-medium text-olive-600 dark:text-olive-400">
            {p.period}
          </p>
          {hasDetail && (
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-300"
            >
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
              {open ? getString('detail.hide', lang) : getString('detail.show', lang)}
            </button>
          )}
        </div>
      </div>

      {hasDetail && open && p.detail && (
        <div className="mt-3 border-t border-slate-100 pt-3 dark:border-slate-800">
          {p.detail.status && (
            <span className="mb-2 inline-block rounded-full border border-olive-200 bg-olive-50 px-2.5 py-0.5 text-[11px] font-semibold text-olive-700 dark:border-olive-700 dark:bg-olive-800/40 dark:text-olive-200">
              {resolveText(p.detail.status, lang)}
            </span>
          )}
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {resolveText(p.detail.description, lang)}
          </p>
          {p.detail.keywords && p.detail.keywords.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.detail.keywords.map((k, i) => (
                <span
                  key={i}
                  className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-800/40 dark:text-brand-100"
                >
                  {resolveText(k, lang)}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
