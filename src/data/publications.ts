import type { Publication } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR PUBLICATIONS HERE
// Sorted by year (newest first) automatically in the component.
// The author matching profile.name is highlighted automatically.
// ─────────────────────────────────────────────────────────────────────────────
export const publications: Publication[] = [
  {
    id: 'p2025-nips',
    title:
      'Calibrated Explanations for Black-Box Models via Counterfactual Concept Probing',
    authors: ['Jane A. Doe', 'Roberto Marino', 'Alan Turing'],
    venue: 'Advances in Neural Information Processing Systems (NeurIPS)',
    year: 2025,
    kind: 'Conference',
    highlight: true,
    tags: ['Interpretability', 'Explainable AI'],
    links: [
      { type: 'pdf', href: 'https://arxiv.org/pdf/2501.00001' },
      { type: 'code', href: 'https://github.com/janedoe/ccp' },
      { type: 'project', href: 'https://janedoe.github.io/ccp' },
    ],
    bibtex: `@inproceedings{doe2025calibrated,
  title     = {Calibrated Explanations for Black-Box Models via Counterfactual Concept Probing},
  author    = {Doe, Jane A. and Marino, Roberto and Turing, Alan},
  booktitle = {Advances in Neural Information Processing Systems (NeurIPS)},
  year      = {2025}
}`,
  },
  {
    id: 'p2024-icml',
    title: 'Robust Representation Learning under Noisy Human Supervision',
    authors: ['Jane A. Doe', 'Alan Turing', 'Grace Hopper'],
    venue: 'International Conference on Machine Learning (ICML)',
    year: 2024,
    kind: 'Conference',
    tags: ['Representation Learning', 'Robust ML'],
    links: [
      { type: 'pdf', href: 'https://arxiv.org/pdf/2401.00002' },
      { type: 'code', href: 'https://github.com/janedoe/rlnhs' },
    ],
    bibtex: `@inproceedings{doe2024robust,
  title     = {Robust Representation Learning under Noisy Human Supervision},
  author    = {Doe, Jane A. and Turing, Alan and Hopper, Grace},
  booktitle = {International Conference on Machine Learning (ICML)},
  year      = {2024}
}`,
  },
  {
    id: 'p2023-tmlr',
    title:
      'Interactive Model Debugging: A Human-in-the-Loop Framework for Feature Attribution',
    authors: ['Roberto Marino', 'Jane A. Doe', 'Alan Turing'],
    venue: 'Transactions on Machine Learning Research (TMLR)',
    year: 2023,
    kind: 'Journal',
    tags: ['Human-in-the-Loop', 'Interpretability'],
    links: [
      { type: 'pdf', href: 'https://arxiv.org/pdf/2301.00003' },
      { type: 'slides', href: 'https://slides.example.com/imd' },
    ],
    bibtex: `@article{marino2023interactive,
  title   = {Interactive Model Debugging: A Human-in-the-Loop Framework for Feature Attribution},
  author  = {Marino, Roberto and Doe, Jane A. and Turing, Alan},
  journal = {Transactions on Machine Learning Research (TMLR)},
  year    = {2023}
}`,
  },
  {
    id: 'p2022-corl',
    title: 'Learning Dexterous Manipulation from Sparse Demonstrations',
    authors: ['Jane A. Doe', 'Kathleen Booth'],
    venue: 'Conference on Robot Learning (CoRL)',
    year: 2022,
    kind: 'Conference',
    tags: ['Robotics', 'Imitation Learning'],
    links: [
      { type: 'pdf', href: 'https://arxiv.org/pdf/2201.00004' },
      { type: 'project', href: 'https://janedoe.github.io/dexman' },
    ],
    bibtex: `@inproceedings{doe2022learning,
  title     = {Learning Dexterous Manipulation from Sparse Demonstrations},
  author    = {Doe, Jane A. and Booth, Kathleen},
  booktitle = {Conference on Robot Learning (CoRL)},
  year      = {2022}
}`,
  },
]
