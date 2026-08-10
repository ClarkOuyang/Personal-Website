import type { TimelineItem } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR EDUCATION & EXPERIENCE HERE
// ─────────────────────────────────────────────────────────────────────────────
export const education: TimelineItem[] = [
  {
    id: 'edu-nju',
    role: 'B.S. in New Energy Science and Engineering',
    organization: 'Nanjing University',
    location: 'Nanjing / Shenzhen, China',
    start: 'Sep 2023',
    end: 'Present',
    description:
      'Major courses: Materials Science, Optics, Thermology, Electrochemistry, Catalysis, Physical Chemistry.',
  },
  {
    id: 'edu-yale',
    role: 'Summer Research Visiting Student',
    organization: 'Yale University',
    location: 'New Haven, CT, USA',
    start: 'Jul 2026',
    end: 'Present',
    description: 'Photoelectrocatalysis for water splitting (Hu / Shu Lab, with Kaidou Zhu Lab).',
  },
]

export const experience: TimelineItem[] = [
  {
    id: 'exp-pemwe',
    role: 'Undergraduate Researcher',
    organization: 'Nanjing University — Group of Prof. Zhigang Zou',
    location: 'Shenzhen, China',
    start: 'Feb 2025',
    end: 'Present',
    bullets: [
      'Designed a cobalt-based composite (CSO) catalyst for acidic OER in PEMWE; >800 h stability at 100 mA cm⁻², 1.70 V cell voltage.',
      'Characterized materials with TEM/SEM/XRD/XPS/XAS/DEMS/in-situ FTIR and quantified surface pH with RRDE.',
      'Built catalyst-coated membranes (CCM) via sol–gel synthesis and ink formulation for device integration.',
      'Manuscript in preparation for submission (joint first author, expected late 2026).',
    ],
  },
  {
    id: 'exp-yale',
    role: 'Summer Research Intern (Photoelectrocatalysis)',
    organization: 'Yale University',
    location: 'New Haven, CT, USA',
    start: 'Jul 2026',
    end: 'Present',
    bullets: [
      'Designed perovskite–Si PEC and SECM cells with a 3D printer for water splitting.',
      'Fabricated Pt-coated AEMWE anodes by sputtering; handled Si-wafer pretreatment, edge-sealing and packaging.',
    ],
  },
  {
    id: 'exp-sunwoda',
    role: 'R&D Department Intern',
    organization: 'Sunwoda Energy Technology Co., Ltd.',
    location: 'Shenzhen, China',
    start: 'Jul 2025',
    end: 'Aug 2025',
    bullets: [
      'Evaluated electrochemical performance and safety of Li-ion batteries (overcharge protection, charge–discharge cycling).',
      'Assisted in preparing technical documentation for CNAS certification.',
    ],
  },
]
