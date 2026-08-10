import type { NewsItem } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR NEWS / ANNOUNCEMENTS HERE
// Newest first; the component also sorts by `iso`/`date` as a fallback.
// ─────────────────────────────────────────────────────────────────────────────
export const news: NewsItem[] = [
  {
    date: 'Aug 2025',
    iso: '2025-08-01',
    title: 'Paper accepted to NeurIPS 2025',
    description:
      'Our work on calibrated counterfactual explanations was accepted as a spotlight presentation.',
    tag: 'Publication',
  },
  {
    date: 'Jun 2025',
    iso: '2025-06-15',
    title: 'Invited talk at the Trustworthy ML Workshop',
    description: 'Presented our recent results on interpretable representations.',
    tag: 'Talk',
  },
  {
    date: 'Mar 2025',
    iso: '2025-03-10',
    title: 'Research internship at DeepMind',
    description:
      'Joined the Interpretability team for a 3-month research internship.',
    tag: 'Experience',
    link: { href: 'https://deepmind.google', label: 'DeepMind' },
  },
  {
    date: 'Dec 2024',
    iso: '2024-12-01',
    title: 'Paper accepted to ICML 2024',
    description: 'Robust representation learning under noisy supervision.',
    tag: 'Publication',
  },
  {
    date: 'Sep 2024',
    iso: '2024-09-01',
    title: 'Awarded University Graduate Research Fellowship',
    tag: 'Award',
  },
]
