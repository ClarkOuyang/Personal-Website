import { education, experience } from '../data/timeline'
import type { TimelineItem } from '../types'

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l-2 border-slate-200 dark:border-slate-700">
      {items.map((item) => (
        <li key={item.id} className="relative mb-8 pl-6 last:mb-0">
          <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-olive-500 shadow dark:border-[#0d1320]" />
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-base font-semibold text-brand-900 dark:text-white">
              {item.role}
            </h3>
            <span className="shrink-0 text-sm font-medium tabular-nums text-olive-600 dark:text-olive-400">
              {item.start} – {item.end}
            </span>
          </div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            {item.organization}
            {item.location && (
              <span className="text-slate-400"> · {item.location}</span>
            )}
          </p>
          {item.description && (
            <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {item.description}
            </p>
          )}
          {item.bullets && item.bullets.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-500 dark:text-slate-400">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-slate-100 bg-slate-50/60 py-16 sm:py-20 dark:border-slate-800 dark:bg-white/[0.02]"
    >
      <div className="container-page">
        <p className="section-subheading">Background</p>
        <h2 className="section-heading">Education &amp; Experience</h2>

        <div className="mt-8 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-brand-800 dark:text-brand-100">
              Education
            </h3>
            <Timeline items={education} />
          </div>
          <div id="contact">
            <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-brand-800 dark:text-brand-100">
              Experience
            </h3>
            <Timeline items={experience} />
          </div>
        </div>
      </div>
    </section>
  )
}
