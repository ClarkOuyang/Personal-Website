import { useEffect, useState } from 'react'
import { gallery } from '../data/gallery'
import { X } from 'lucide-react'

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section
      id="gallery"
      className="container-page scroll-mt-20 py-16 sm:py-20"
    >
      <p className="section-subheading">Research data</p>
      <h2 className="section-heading">Figure Gallery</h2>
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        Selected characterization and performance figures from the
        non-precious-metal PEMWE project (TEM, EDX, EXAFS, EIS, electrochemical
        benchmarking and device design). Click any figure to enlarge.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((fig, i) => (
          <button
            key={fig.src}
            type="button"
            onClick={() => setActive(i)}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-brand-600"
          >
            <div className="aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                src={fig.src}
                alt={fig.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold text-brand-900 dark:text-white">
                {fig.title}
              </h3>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {fig.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            onClick={() => setActive(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <figure
            className="max-h-[90vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[active].src}
              alt={gallery[active].title}
              className="mx-auto max-h-[78vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-slate-200">
              <span className="font-semibold">{gallery[active].title}.</span>{' '}
              {gallery[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
