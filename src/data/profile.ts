import type { Profile } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR PERSONAL INFORMATION HERE
// ─────────────────────────────────────────────────────────────────────────────
export const profile: Profile = {
  name: 'Jane A. Doe',
  firstName: 'Jane',
  title: 'PhD Candidate in Computer Science',
  affiliation: 'Department of Computer Science, Example University',
  location: 'Boston, MA, USA',
  // Put your photo at public/photo.jpg (square, ~400×400 looks best).
  photo: '/photo.jpg',
  bio: [
    'I am a PhD candidate in Computer Science at Example University, advised by Prof. Alan Turing. My research lies at the intersection of machine learning and human-computer interaction, with a focus on building interpretable models that people can trust and use effectively.',
    'Before my PhD, I received my M.S. in Electrical Engineering from Example Institute of Technology and spent two years as a research engineer at a startup working on large-scale recommendation systems. I am broadly interested in robust representation learning, interactive ML, and the societal impact of intelligent systems.',
  ],
  researchInterests: [
    'Machine Learning',
    'Interpretability',
    'Human-Computer Interaction',
    'Representation Learning',
    'Trustworthy AI',
  ],
  socials: [
    { type: 'scholar', href: 'https://scholar.google.com/citations?user=XXXXXXX', label: 'Google Scholar' },
    { type: 'github', href: 'https://github.com/janedoe', label: 'GitHub' },
    { type: 'linkedin', href: 'https://www.linkedin.com/in/janedoe', label: 'LinkedIn' },
    { type: 'email', href: 'mailto:jane.doe@example.edu', label: 'Email' },
    { type: 'cv', href: '/cv.pdf', label: 'Curriculum Vitae' },
  ],
}
