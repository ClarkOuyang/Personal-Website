import type { TimelineItem } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR EDUCATION HERE
// `detail` is collapsed by default in the UI — put major/research bullets there.
// `logo` is optional: path under /public/logos/<file>. Until you add real logo
// files, the UI falls back to a colored initial badge.
// ─────────────────────────────────────────────────────────────────────────────
export const education: TimelineItem[] = [
  {
    id: 'edu-yale',
    role: { en: 'Yale University', zh: '耶鲁大学' },
    organization: { en: 'Summer Research Visiting Student', zh: '暑期科研访问学生' },
    location: 'New Haven, CT, USA',
    start: 'Jul 2026',
    end: 'Present',
    logo: '', // TODO: add /public/logos/yale.png
    detail: {
      bullets: [
        {
          en: 'ALD coating for surface passivation and protection.',
          zh: 'ALD 镀膜用于表面钝化与保护。',
        },
        {
          en: 'Designed and 3D-printed an SECM reactor cell.',
          zh: '设计并 3D 打印 SECM 反应电解池。',
        },
        {
          en: 'Built a scalable perovskite-based photoelectrocatalytic (PEC) water-splitting device.',
          zh: '搭建可放大的钙钛矿基光电催化（PEC）水分解器件。',
        },
      ],
    },
  },
  {
    id: 'edu-nju',
    role: { en: 'Nanjing University', zh: '南京大学' },
    organization: { en: 'B.S. in New Energy Science and Engineering', zh: '新能源科学与工程 学士' },
    location: 'Nanjing, China',
    start: 'Sep 2023',
    end: 'Present',
    logo: '', // TODO: add /public/logos/nju.png
    detail: {
      major: {
        en: 'Major courses: Materials Science, Optics, Thermology, Electrochemistry, Catalysis, Physical Chemistry.',
        zh: '主要课程：材料科学、光学、热力学、电化学、催化、物理化学。',
      },
      bullets: [
        {
          en: 'Designed a Sb-doped Co₃O₄ composite catalyst for acidic OER in PEMWE; >800 h stability at 100 mA cm⁻², 1.70 V cell voltage.',
          zh: '设计用于 PEMWE 酸性 OER 的 Sb 掺杂 Co₃O₄ 复合催化剂；100 mA cm⁻² 下 >800 h 稳定，槽电压 1.70 V。',
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
  },
  {
    id: 'edu-tbds',
    role: { en: "Taiwan Businessmen's Dongguan School", zh: '东莞台商子弟学校' },
    organization: { en: 'High School', zh: '中学' },
    location: 'Dongguan, China',
    start: '',
    end: 'Jun 2023',
    logo: '', // TODO: add /public/logos/tbds.png
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR INTERNSHIP HERE — collapsed by default, same as Education.
// ─────────────────────────────────────────────────────────────────────────────
export const experience: TimelineItem[] = [
  {
    id: 'exp-sunwoda',
    role: { en: 'Sunwoda Energy Technology Co., Ltd.', zh: '欣旺达能源科技股份有限公司' },
    organization: { en: 'R&D Department Intern', zh: '研发部实习生' },
    location: 'Shenzhen, China',
    start: 'Jul 2025',
    end: 'Aug 2025',
    logo: '', // TODO: add /public/logos/sunwoda.png
    detail: {
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
  },
]
