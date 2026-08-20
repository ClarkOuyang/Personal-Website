import type { FeaturedProject } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR FEATURED PROJECT PHOTOS HERE
// One representative photo per project. Sorted newest-first by `sortKey`
// (ISO-ish "YYYY-MM"). Drop the photo at public/projects/<file> and update
// `photo` once you have it — a placeholder is shown until then.
// ─────────────────────────────────────────────────────────────────────────────
export const featuredProjects: FeaturedProject[] = [
  {
    id: 'proj-ald',
    title: { en: 'ALD Coating & Semiconductor Processing', zh: 'ALD 镀膜与半导体加工' },
    period: 'Yale, 2026',
    sortKey: '2026-09',
    photo: '', // TODO: add /public/projects/ald.jpg
  },
  {
    id: 'proj-secm',
    title: { en: 'SECM Cell 3D Printing Design', zh: 'SECM 电解池 3D 打印设计' },
    period: 'Yale, 2026',
    sortKey: '2026-08',
    photo: '', // TODO: add /public/projects/secm.jpg
  },
  {
    id: 'proj-pec',
    title: {
      en: 'Scalable Perovskite-Based Photoelectrocatalytic (PEC) Water Splitting',
      zh: '可放大钙钛矿基光电催化（PEC）水分解',
    },
    period: 'Yale, 2026',
    sortKey: '2026-07',
    photo: '', // TODO: add /public/projects/pec.jpg
  },
  {
    id: 'proj-pemwe',
    title: {
      en: 'Sb-Doped Co₃O₄ for Proton Exchange Membrane Water Electrolysis (PEMWE)',
      zh: 'Sb 掺杂 Co₃O₄ 质子交换膜水电解（PEMWE）',
    },
    period: 'Nanjing University, 2025',
    sortKey: '2025-02',
    photo: '', // TODO: add /public/projects/pemwe.jpg
  },
]
