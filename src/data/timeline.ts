import type { TimelineItem } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR EDUCATION & EXPERIENCE HERE
// ─────────────────────────────────────────────────────────────────────────────
export const education: TimelineItem[] = [
  {
    id: 'edu-phd',
    role: 'PhD in Computer Science',
    organization: 'Example University',
    location: 'Boston, MA, USA',
    start: '2021',
    end: 'Present',
    description: 'Advised by Prof. Alan Turing. GPA 3.9/4.0.',
  },
  {
    id: 'edu-ms',
    role: 'M.S. in Electrical Engineering',
    organization: 'Example Institute of Technology',
    location: 'Zurich, CH',
    start: '2019',
    end: '2021',
    description: 'Thesis on representation learning for vision.',
  },
  {
    id: 'edu-bs',
    role: 'B.S. in Computer Engineering',
    organization: 'Example State University',
    location: 'Berlin, DE',
    start: '2015',
    end: '2019',
    description: 'Graduated with highest honors.',
  },
]

export const experience: TimelineItem[] = [
  {
    id: 'exp-deepmind',
    role: 'Research Intern — Interpretability Team',
    organization: 'DeepMind',
    location: 'Remote',
    start: 'Mar 2025',
    end: 'Jun 2025',
    bullets: [
      'Investigated concept-level explanations for large vision models.',
      'Released an internal tool adopted by two research teams.',
    ],
  },
  {
    id: 'exp-ra',
    role: 'Graduate Research Assistant',
    organization: 'Example University — HCI Lab',
    location: 'Boston, MA, USA',
    start: '2021',
    end: 'Present',
    bullets: [
      'Lead author on 4 papers in top-tier ML venues.',
      'Mentor 2 undergraduate researchers.',
    ],
  },
  {
    id: 'exp-startup',
    role: 'Research Engineer',
    organization: 'Acme AI (Startup)',
    location: 'San Francisco, CA, USA',
    start: '2019',
    end: '2021',
    bullets: [
      'Built large-scale recommendation models serving 10M+ users.',
      'Owned the feature-store pipeline and offline evaluation.',
    ],
  },
]
