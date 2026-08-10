import type { Profile } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR PERSONAL INFORMATION HERE
// Photo: drop a square image at public/photo.jpg and set photo: '/photo.jpg'.
// Socials: replace the placeholder scholar/github/linkedin URLs with your own.
// ─────────────────────────────────────────────────────────────────────────────
export const profile: Profile = {
  name: 'Yipeng Ouyang',
  firstName: 'Yipeng',
  title: 'Undergraduate Researcher · B.S. Candidate in New Energy Science and Engineering',
  affiliation: 'Nanjing University — Group of Prof. Zhigang Zou',
  location: 'Shenzhen, Guangdong, China',
  // Put your photo at public/photo.jpg (square, ~400×400 looks best).
  photo: '/photo.svg',
  bio: [
    'I am Yipeng Ouyang, an undergraduate student in New Energy Science and Engineering at Nanjing University, working in the group of Prof. Zhigang Zou under the supervision of Prof. Zhaosheng Li and Prof. Jianyong Feng. My research focuses on non-precious-metal electrocatalysis for hydrogen production, in particular proton exchange membrane water electrolysis (PEMWE).',
    'I engineer cobalt-based composite catalysts that overcome the intrinsic instability of non-precious metals in acidic oxygen evolution reaction (OER) environments. Using advanced characterization (TEM, SEM, XRD, XPS, XAS, DEMS, in-situ FTIR) together with electrochemical techniques (RRDE, catalyst-coated-membrane fabrication), I aim to build durable, low-cost electrolyzers for green hydrogen. I am also exploring scalable perovskite–Si photoelectrocatalysis for water splitting during my summer research at Yale University.',
  ],
  researchInterests: [
    'Electrocatalysis',
    'Photoelectrocatalysis',
    'PEM Water Electrolysis',
    'Hydrogen Production',
    'Energy Materials',
    'Automation',
  ],
  socials: [
    { type: 'email', href: 'mailto:231880021@smail.nju.edu.cn', label: 'Email' },
    { type: 'cv', href: '/cv.pdf', label: 'Curriculum Vitae' },
    // TODO: replace these placeholders with your real profile URLs.
    { type: 'scholar', href: 'https://scholar.google.com/', label: 'Google Scholar' },
    { type: 'github', href: 'https://github.com/', label: 'GitHub' },
    { type: 'linkedin', href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  ],
}
