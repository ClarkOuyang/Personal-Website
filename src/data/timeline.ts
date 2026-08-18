import type { TimelineItem } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR EDUCATION & EXPERIENCE HERE
// ─────────────────────────────────────────────────────────────────────────────
export const education: TimelineItem[] = [
  {
    id: 'edu-nju',
    role: { en: 'B.S. in New Energy Science and Engineering', zh: '新能源科学与工程 学士' },
    organization: { en: 'Nanjing University', zh: '南京大学' },
    location: 'Nanjing / Shenzhen, China',
    start: 'Sep 2023',
    end: 'Present',
    description: {
      en: 'Major courses: Materials Science, Optics, Thermology, Electrochemistry, Catalysis, Physical Chemistry.',
      zh: '主要课程：材料科学、光学、热力学、电化学、催化、物理化学。',
    },
  },
  {
    id: 'edu-yale',
    role: { en: 'Summer Research Visiting Student', zh: '暑期科研访问学生' },
    organization: { en: 'Yale University', zh: '耶鲁大学' },
    location: 'New Haven, CT, USA',
    start: 'Jul 2026',
    end: 'Present',
    description: {
      en: 'Photoelectrocatalysis for water splitting in the Shu Hu Lab at Yale University.',
      zh: '耶鲁大学 Shu Hu 课题组的太阳能水分解光电催化研究。',
    },
  },
]

export const experience: TimelineItem[] = [
  {
    id: 'exp-pemwe',
    role: { en: 'Undergraduate Researcher', zh: '本科研究员' },
    organization: {
      en: 'Nanjing University — Group of Prof. Zhigang Zou',
      zh: '南京大学 — 邹志刚教授课题组',
    },
    location: 'Shenzhen, China',
    start: 'Feb 2025',
    end: 'Present',
    bullets: [
      {
        en: 'Designed a cobalt-based composite (CSO) catalyst for acidic OER in PEMWE; >800 h stability at 100 mA cm⁻², 1.70 V cell voltage.',
        zh: '设计用于 PEMWE 酸性 OER 的钴基复合（CSO）催化剂；100 mA cm⁻² 下 >800 h 稳定，槽电压 1.70 V。',
      },
      {
        en: 'Characterized materials with TEM/SEM/XRD/XPS/XAS/DEMS/in-situ FTIR and quantified surface pH with RRDE.',
        zh: '利用 TEM/SEM/XRD/XPS/XAS/DEMS/原位 FTIR 表征材料，并以 RRDE 量化表面 pH。',
      },
      {
        en: 'Built catalyst-coated membranes (CCM) via sol–gel synthesis and ink formulation for device integration.',
        zh: '通过溶胶—凝胶合成与浆料配制构建催化层膜（CCM）用于器件集成。',
      },
      {
        en: 'Manuscript in preparation for submission (joint first author, expected late 2026).',
        zh: '论文在准备投稿中（共同一作，预计 2026 年底）。',
      },
    ],
  },
  {
    id: 'exp-yale',
    role: { en: 'Summer Research Intern (Photoelectrocatalysis)', zh: '暑期科研实习生（光电催化）' },
    organization: { en: 'Yale University', zh: '耶鲁大学' },
    location: 'New Haven, CT, USA',
    start: 'Jul 2026',
    end: 'Present',
    bullets: [
      {
        en: 'Designed perovskite–Si PEC and SECM cells with a 3D printer for water splitting.',
        zh: '通过 3D 打印设计钙钛矿—硅 PEC 与 SECM 电解池用于水分解。',
      },
      {
        en: 'Fabricated Pt-coated AEMWE anodes by sputtering; handled Si-wafer pretreatment, edge-sealing and packaging.',
        zh: '以溅射法制备 Pt 修饰 AEMWE 阳极；负责硅片预处理、封边与封装。',
      },
    ],
  },
  {
    id: 'exp-sunwoda',
    role: { en: 'R&D Department Intern', zh: '研发部实习生' },
    organization: { en: 'Sunwoda Energy Technology Co., Ltd.', zh: '欣旺达能源科技股份有限公司' },
    location: 'Shenzhen, China',
    start: 'Jul 2025',
    end: 'Aug 2025',
    bullets: [
      {
        en: 'Evaluated electrochemical performance and safety of Li-ion batteries (overcharge protection, charge–discharge cycling).',
        zh: '评估锂离子电池电化学性能与安全性（过充保护、充放电循环）。',
      },
      {
        en: 'Assisted in preparing technical documentation for CNAS certification.',
        zh: '协助准备 CNAS 认证技术文档。',
      },
    ],
  },
]
