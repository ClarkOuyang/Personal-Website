import type { Profile } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR PERSONAL INFORMATION HERE
// Photo: drop a square image at public/photo.jpg and set photo: '/photo.jpg'.
// Text fields accept either a plain string (same in both languages) or
// { en, zh } for separate translations.
// ─────────────────────────────────────────────────────────────────────────────
export const profile: Profile = {
  name: 'Yipeng Ouyang',
  firstName: 'Yipeng',
  title: {
    en: 'Undergraduate Researcher · B.S. Candidate in New Energy Science and Engineering',
    zh: '本科生研究员 · 新能源科学与工程专业学士候选人',
  },
  affiliation: {
    en: 'Nanjing University — Group of Prof. Zhigang Zou',
    zh: '南京大学 — 邹志刚教授课题组',
  },
  location: 'Shenzhen, Guangdong, China',
  // Contact (shown under the portrait).
  email: '231880021@smail.nju.edu.cn',
  phone: '+86 13927434134',
  // Put your photo at public/photo.jpg (square, ~400×400 looks best).
  photo: '/photo.svg',
  bio: [
    {
      en: 'I am Yipeng Ouyang, an undergraduate student in New Energy Science and Engineering at Nanjing University, working in the group of Prof. Zhigang Zou under the supervision of Prof. Zhaosheng Li and Prof. Jianyong Feng. My research focuses on non-precious-metal electrocatalysis for hydrogen production, in particular proton exchange membrane water electrolysis (PEMWE).',
      zh: '我是欧阳奕鹏，南京大学新能源科学与工程专业本科生，在邹志刚教授课题组，师从李召声教授与冯建勇教授。我的研究聚焦于非贵金属电催化制氢，尤其是质子交换膜水电解（PEMWE）。',
    },
    {
      en: 'I engineer cobalt-based composite catalysts that overcome the intrinsic instability of non-precious metals in acidic oxygen evolution reaction (OER) environments. Using advanced characterization (TEM, SEM, XRD, XPS, XAS, DEMS, in-situ FTIR) together with electrochemical techniques (RRDE, catalyst-coated-membrane fabrication), I aim to build durable, low-cost electrolyzers for green hydrogen. I am also exploring scalable perovskite–Si photoelectrocatalysis for water splitting during my summer research at Yale University.',
      zh: '我设计钴基复合催化剂，以克服非贵金属在酸性析氧反应（OER）环境中的本征不稳定性。结合先进表征（TEM、SEM、XRD、XPS、XAS、DEMS、原位 FTIR）与电化学技术（RRDE、催化层膜制备），致力于构建耐用、低成本的绿色制氢电解槽。在耶鲁大学的暑期研究中，我也在探索可放大的钙钛矿—硅光电催化水分解。',
    },
  ],
  researchInterests: [
    { en: 'Electrocatalysis', zh: '电催化' },
    { en: 'Photoelectrocatalysis', zh: '光电催化' },
    { en: 'PEM Water Electrolysis', zh: 'PEM 水电解' },
    { en: 'Hydrogen Production', zh: '制氢' },
    { en: 'Energy Materials', zh: '能源材料' },
    { en: 'Automation', zh: '自动化' },
  ],
  socials: [
    { type: 'email', href: 'mailto:231880021@smail.nju.edu.cn', label: 'Email' },
    { type: 'cv', href: '/cv.pdf', label: 'Curriculum Vitae' },
  ],
}
