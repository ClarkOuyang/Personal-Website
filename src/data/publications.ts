import type { Publication } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR PUBLICATIONS HERE
// Sorted by year (newest first) automatically in the component.
// The author matching profile.name is highlighted automatically.
// Add links (pdf / code / project / slides / doi) once available.
// ─────────────────────────────────────────────────────────────────────────────
export const publications: Publication[] = [
  {
    id: 'cso-pemwe-2026',
    title:
      'Non-Precious-Metal-Based Proton Exchange Membrane Water Electrolysis for Hydrogen Production',
    authors: ['Yipeng Ouyang', 'Zhaosheng Li', 'Jianyong Feng', 'Zhigang Zou'],
    venue: 'In preparation (expected late 2026)',
    year: 2026,
    kind: 'Preprint',
    highlight: true,
    tags: ['PEMWE', 'OER', 'Electrocatalysis', 'Hydrogen'],
    links: [
      // e.g. { type: 'pdf', href: 'https://arxiv.org/pdf/XXXX.XXXXX' },
      // e.g. { type: 'code', href: 'https://github.com/yourname/repo' },
    ],
    bibtex: `@article{ouyang2026nonprecious,
  title   = {Non-Precious-Metal-Based Proton Exchange Membrane Water Electrolysis for Hydrogen Production},
  author  = {Ouyang, Yipeng and Li, Zhaosheng and Feng, Jianyong and Zou, Zhigang},
  journal = {In preparation},
  year    = {2026}
}`,
  },
]
