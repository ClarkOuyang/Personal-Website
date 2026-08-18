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
  location: 'Nanjing, China',
  // Two affiliation blocks shown directly under the name in the hero.
  // Edit freely — links open in a new tab.
  affiliations: [
    {
      school: { en: 'Nanjing University', zh: '南京大学' },
      role: { en: 'Undergraduate', zh: '本科' },
      period: 'Sep.2023 ~ Jun.2027',
      supervisor: {
        en: 'Supervisor: Zhaosheng Li and Jianyong Feng (Group of Zhigang Zou)',
        zh: '导师：李召声、冯建勇（邹志刚教授课题组）',
      },
      // Links placed right after the supervisor names above.
      supervisorLinks: [
        {
          label: 'Zhaosheng Li · Google Scholar',
          href: 'https://scholar.google.com/citations?user=e5fz9VAAAAAJ&hl=zh-CN',
        },
        {
          label: 'Zhigang Zou · College',
          href: 'https://eng.nju.edu.cn/intl/3d/bb/c34798a474555/page.htm',
        },
      ],
      major: {
        en: 'Major: New Energy Science and Engineering',
        zh: '专业：新能源科学与工程',
      },
      direction: {
        en: 'Research: Electrocatalysis for water splitting and OER mechanism study',
        zh: '研究方向：电解水制氢与 OER 机理研究',
      },
    },
    {
      school: { en: 'Yale University', zh: '耶鲁大学' },
      role: { en: 'Summer Research Intern', zh: '暑期科研实习生' },
      period: 'Jul.2026 ~ Sep.2026',
      supervisor: {
        en: 'Supervisor: Shu Hu',
        zh: '导师：Shu Hu',
      },
      supervisorLinks: [
        {
          label: 'Personal Web',
          href: 'https://engineering.yale.edu/research-and-faculty/faculty-directory/shu-hu',
        },
        {
          label: 'Google Scholar',
          href: 'https://scholar.google.com/citations?user=I2T99bQAAAAJ&hl=en',
        },
      ],
      direction: {
        en: 'Research: Silicon processing, Photoelectrocatalysis and 3D printing design',
        zh: '研究方向：硅加工、光电催化与 3D 打印设计',
      },
    },
  ],
  // Contact (shown under the portrait).
  email: '231880021@smail.nju.edu.cn',
  phone: '+86 13927434134',
  // Put your photo at public/images/avatar.jpg (square, ~400×400 looks best).
  photo: '/images/avatar.jpg',
  bio: [
    {
      en: 'I am Yipeng Ouyang, an undergraduate in New Energy Science and Engineering at Nanjing University, supervised by Prof. Zhaosheng Li and Prof. Jianyong Feng (Group of Prof. Zhigang Zou). I work across two complementary directions that converge on clean-energy conversion: (1) semiconductor optoelectronic materials and devices, and (2) photoelectrocatalysis / electrocatalysis for solar-driven hydrogen production.',
      zh: '我是欧阳奕鹏，南京大学新能源科学与工程专业本科生，师从李召声教授与冯建勇教授（邹志刚教授课题组）。我的研究沿两条相互支撑、共同指向清洁能源转化的主线展开：（1）半导体光电材料与器件；（2）面向太阳能制氢的光电催化 / 电催化。',
    },
    {
      en: 'On the electrocatalysis side, I engineer cobalt-based composite catalysts (CSO) that overcome the intrinsic instability of non-precious metals in acidic oxygen evolution (OER), building durable catalyst-coated membranes for proton exchange membrane water electrolysis (PEMWE) — over 800 h stable operation at 100 mA cm⁻², 1.70 V cell voltage. Characterization spans TEM, SEM, XRD, XPS, XAS, DEMS and in-situ FTIR, with RRDE quantification of surface-pH evolution.',
      zh: '在电催化方向，我设计钴基复合催化剂（CSO），克服非贵金属在酸性析氧反应（OER）中的本征不稳定性，构建用于质子交换膜水电解（PEMWE）的耐久催化层膜——在 100 mA cm⁻² 下稳定运行超过 800 小时，槽电压 1.70 V。表征涵盖 TEM、SEM、XRD、XPS、XAS、DEMS 与原位 FTIR，并以 RRDE 量化表面 pH 演变。',
    },
    {
      en: 'On the semiconductor side, my Yale summer research advances scalable perovskite–Si photoelectrocatalysis (PEC) for water splitting: I designed PEC / scanning electrocatalysis microscopy (SECM) cells via 3D printing and fabricated Pt-coated AEMWE anodes by sputtering. I am equally drawn to semiconductor device physics, heterojunction engineering and materials synthesis as levers for efficient solar-to-fuel conversion.',
      zh: '在半导体方向，我在耶鲁的暑期研究推进可放大的钙钛矿—硅光电催化（PEC）水分解：通过 3D 打印设计 PEC / 扫描电化学显微镜（SECM）电解池，并以溅射法制备 Pt 修饰 AEMWE 阳极。我也同样着迷于半导体器件物理、异质结工程与材料合成，将其视为实现高效太阳能—燃料转换的关键抓手。',
    },
  ],
  researchInterests: [
    { en: 'Semiconductors', zh: '半导体' },
    { en: 'Optoelectronics', zh: '光电' },
    { en: 'Photoelectrocatalysis', zh: '光电催化' },
    { en: 'Electrocatalysis', zh: '电催化' },
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
