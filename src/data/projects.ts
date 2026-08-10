import type { Project } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR RESEARCH PROJECTS / THEMES HERE
// ─────────────────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'proj-interpretable',
    title: 'Interpretable Representation Learning',
    description:
      'Developing methods that learn disentangled, human-understandable concepts from high-dimensional data, with provable robustness guarantees under distribution shift.',
    keywords: ['Explainable AI', 'Concept Bottleneck', 'Robustness'],
    status: 'Ongoing',
    links: [
      { type: 'paper', href: 'https://arxiv.org/abs/2501.00001' },
      { type: 'code', href: 'https://github.com/janedoe/ccp' },
    ],
  },
  {
    id: 'proj-hitl',
    title: 'Human-in-the-Loop Model Debugging',
    description:
      'A collaborative framework where humans and models iteratively refine feature attributions, reducing annotation effort while improving model reliability.',
    keywords: ['Human-Computer Interaction', 'Active Learning'],
    status: 'Ongoing',
    links: [
      { type: 'paper', href: 'https://arxiv.org/abs/2301.00003' },
      { type: 'demo', href: 'https://janedoe.github.io/imd-demo' },
    ],
  },
  {
    id: 'proj-robust-supervision',
    title: 'Learning from Noisy Human Supervision',
    description:
      'Algorithms that remain accurate when training labels are imperfect, leveraging weak supervision and confidence calibration.',
    keywords: ['Weak Supervision', 'Calibration', 'Semi-supervised'],
    status: 'Published (ICML 2024)',
    links: [
      { type: 'paper', href: 'https://arxiv.org/abs/2401.00002' },
      { type: 'code', href: 'https://github.com/janedoe/rlnhs' },
    ],
  },
]
