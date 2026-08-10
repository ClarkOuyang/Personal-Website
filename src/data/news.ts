import type { NewsItem } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR NEWS / ANNOUNCEMENTS HERE
// Newest first; the component also sorts by `iso`/`date` as a fallback.
// ─────────────────────────────────────────────────────────────────────────────
export const news: NewsItem[] = [
  {
    date: 'Jul 2026',
    iso: '2026-07-01',
    title: 'Summer research intern at Yale University',
    description:
      'Joined the Hu / Shu Lab (with Kaidou Zhu Lab) to work on scalable perovskite–Si photoelectrocatalysis for water splitting and designed PEC / SECM cells via 3D printing.',
    tag: 'Experience',
  },
  {
    date: 'Late 2026',
    iso: '2026-11-01',
    title: 'Manuscript in preparation on non-precious-metal PEMWE',
    description:
      'Our work on a cobalt-based composite catalyst (CSO) for durable acidic OER is being prepared for submission (joint first author).',
    tag: 'Publication',
  },
  {
    date: 'Feb 2025',
    iso: '2025-02-01',
    title: 'Started undergraduate research on PEMWE electrocatalysis',
    description:
      'Joined the group of Prof. Zhigang Zou (Nanjing University), supervised by Prof. Zhaosheng Li and Prof. Jianyong Feng.',
    tag: 'Research',
  },
  {
    date: 'Aug 2025',
    iso: '2025-08-01',
    title: 'R&D internship at Sunwoda Energy Technology',
    description:
      'Conducted electrochemical performance and safety evaluation of lithium-ion batteries and assisted CNAS certification documentation.',
    tag: 'Experience',
  },
  {
    date: 'Sep 2023',
    iso: '2023-09-01',
    title: 'Began studies at Nanjing University',
    description: 'Major: New Energy Science and Engineering.',
    tag: 'Education',
  },
]
