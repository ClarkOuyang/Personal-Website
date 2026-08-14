import type { Project } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR RESEARCH PROJECTS / THEMES HERE
// ─────────────────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'proj-pemwe',
    title: 'Non-Precious-Metal PEM Water Electrolysis',
    description:
      'Engineered a cobalt-based composite catalyst (CSO) integrating transition-metal oxides to overcome the intrinsic instability of non-precious metals in acidic OER. Fabricated high-performance catalyst-coated membranes (CCM) via optimized sol–gel synthesis and ink formulation for PEMWE integration, achieving stable operation for over 800 hours at 100 mA cm⁻² with a 1.70 V cell voltage. Characterized the OER mechanism and material structure with TEM, SEM, XRD, XPS, XAS, DEMS and in-situ FTIR, studied surface-pH evolution using a rotating ring-disk electrode (RRDE), and resolved Co–O / Co–Co / Sb–O coordination environments by EXAFS fitting.',
    keywords: ['PEMWE', 'OER', 'Cobalt catalyst', 'Hydrogen', 'XAS / EXAFS', 'In-situ FTIR', 'RRDE', 'Mechanism'],
    status: 'Manuscript in preparation (joint first author)',
    links: [
      // e.g. { type: 'paper', href: 'https://arxiv.org/abs/XXXX' },
      // e.g. { type: 'demo', href: '/gallery' },
    ],
  },
  {
    id: 'proj-perovskite',
    title: 'Scalable Perovskite–Si Photoelectrocatalysis',
    description:
      'Summer research at Yale University on photoelectrocatalytic water splitting in alkaline water. Designed perovskite–Si PEC and scanning electrocatalysis microscopy (SECM) cells with a 3D printer, and fabricated Pt-coated AEMWE anodes by sputtering.',
    keywords: ['Photoelectrocatalysis', 'Perovskite–Si', 'PEC', 'AEMWE'],
    status: 'Yale summer research (2026)',
    links: [],
  },
]
