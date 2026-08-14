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
    title: {
      en: 'Non-Precious-Metal-Based Proton Exchange Membrane Water Electrolysis for Hydrogen Production',
      zh: '基于非贵金属的质子交换膜水电解制氢',
    },
    authors: ['Yipeng Ouyang', 'Zhaosheng Li', 'Jianyong Feng', 'Zhigang Zou'],
    venue: { en: 'In preparation (expected late 2026)', zh: '在投（预计 2026 年底）' },
    year: 2026,
    kind: { en: 'Preprint', zh: '预印本' },
    highlight: true,
    tags: [
      { en: 'PEMWE', zh: 'PEMWE' },
      { en: 'OER', zh: 'OER' },
      { en: 'Electrocatalysis', zh: '电催化' },
      { en: 'Hydrogen', zh: '制氢' },
    ],
    links: [],
    bibtex: `@article{ouyang2026nonprecious,
  title   = {Non-Precious-Metal-Based Proton Exchange Membrane Water Electrolysis for Hydrogen Production},
  author  = {Ouyang, Yipeng and Li, Zhaosheng and Feng, Jianyong and Zou, Zhigang},
  journal = {In preparation},
  year    = {2026}
}`,
  },
]
