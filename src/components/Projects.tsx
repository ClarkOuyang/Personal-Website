import { projects } from '../data/projects'
import type { ProjectLinkType } from '../types'
import { Code2, FileText, Globe, type LucideIcon } from 'lucide-react'

const PROJECT_ICONS: Record<ProjectLinkType, LucideIcon> = {
  paper: FileText,
  code: Code2,
  demo: Globe,
}

const PROJECT_LABELS: Record<ProjectLinkType, string> = {
  paper: 'Paper',
  code: 'Code',
  demo: 'Demo',
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-y border-slate-100 bg-slate-50/60 py-16 sm:py-20 dark:border-slate-800 dark:bg-white/[0.02]"
    >
      <div className="container-page">
        <p className="section-subheading">What I work on</p>
        <h2 className="section-heading">Research &amp; Projects</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-brand-600"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-brand-900 dark:text-white">
                  {p.title}
                </h3>
                {p.status && (
                  <span className="shrink-0 rounded-full border border-olive-200 bg-olive-50 px-2.5 py-0.5 text-[11px] font-semibold text-olive-700 dark:border-olive-700 dark:bg-olive-800/40 dark:text-olive-200">
                    {p.status}
                  </span>
                )}
              </div>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-800/40 dark:text-brand-100"
                  >
                    {k}
                  </span>
                ))}
              </div>

              {p.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.links.map((l) => {
                    const Icon = PROJECT_ICONS[l.type]
                    return (
                      <a
                        key={l.type + l.href}
                        href={l.href}
                        target={l.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="link-btn"
                      >
                        <Icon className="h-4 w-4" />
                        {l.label ?? PROJECT_LABELS[l.type]}
                      </a>
                    )
                  })}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
