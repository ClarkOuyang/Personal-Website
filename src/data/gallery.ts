import type { Bilingual } from '../types'

export interface GalleryFigure {
  src: string
  title: Bilingual
  caption: Bilingual
}

// Figure files live in /public/gallery and were extracted (downscaled) from the
// CSO project data deck. Add / reorder entries to extend the gallery.
export const gallery: GalleryFigure[] = [
  {
    src: '/gallery/fig-overview.jpeg',
    title: { en: 'Cobalt-based composite (CSO) catalyst', zh: '钴基复合（CSO）催化剂' },
    caption: {
      en: 'Core material for non-precious-metal acidic OER in PEMWE.',
      zh: '用于 PEMWE 非贵金属酸性 OER 的核心材料。',
    },
  },
  {
    src: '/gallery/fig-32.jpeg',
    title: { en: 'OER activity benchmark', zh: 'OER 活性对比' },
    caption: {
      en: 'Overpotential (η @ 10 mA cm⁻²) and stability vs. state-of-the-art OER catalysts.',
      zh: '过电位（η @ 10 mA cm⁻²）及稳定性与前沿 OER 催化剂对比。',
    },
  },
  {
    src: '/gallery/fig-36.jpeg',
    title: { en: 'PEMWE device performance', zh: 'PEMWE 器件性能' },
    caption: {
      en: 'Cell voltage vs. current density and durability benchmark across reported PEMWE anodes (This Work: 1.70 V @ 0.1 A cm⁻², 800 h).',
      zh: '槽电压—电流密度曲线及耐久性对比（本工作：1.70 V @ 0.1 A cm⁻²，800 h）。',
    },
  },
  {
    src: '/gallery/fig-43.jpeg',
    title: { en: 'PEMWE cell schematic', zh: 'PEMWE 电解池示意图' },
    caption: {
      en: 'Membrane-electrode-assembly: Pt/C | PEM (Nafion 212) | CSO anode with Ti-plate current collector.',
      zh: '膜电极组件：Pt/C | PEM（Nafion 212）| CSO 阳极与钛板集流体。',
    },
  },
  {
    src: '/gallery/fig-tema.jpeg',
    title: { en: 'HR-TEM — CSO', zh: '高分辨 TEM — CSO' },
    caption: {
      en: 'High-resolution TEM of the as-prepared CSO composite showing lattice fringes.',
      zh: '所制备 CSO 复合材料的HR-TEM，可见晶格条纹。',
    },
  },
  {
    src: '/gallery/fig-temb.jpeg',
    title: { en: 'HR-TEM — CSO (detail)', zh: '高分辨 TEM — CSO（细节）' },
    caption: {
      en: 'Lattice-resolved view of Co₃O₄ / cobalt oxide phases.',
      zh: 'Co₃O₄ / 钴氧化物的晶格分辨图像。',
    },
  },
  {
    src: '/gallery/fig-temor.jpeg',
    title: { en: 'HR-TEM — CSO after OER', zh: '高分辨 TEM — OER 后 CSO' },
    caption: {
      en: 'Post-stability-test morphology, confirming structural integrity after 800 h operation.',
      zh: '稳定性测试后的形貌，证实 800 h 运行后结构稳定。',
    },
  },
  {
    src: '/gallery/fig-edx-1.jpeg',
    title: { en: 'EDX elemental mapping — CSO', zh: 'EDX 元素分布 — CSO' },
    caption: {
      en: 'Distribution of Co, O, Sb, Sn and F across the composite.',
      zh: 'Co、O、Sb、Sn、F 在复合材料中的分布。',
    },
  },
  {
    src: '/gallery/fig-edx-2.jpeg',
    title: { en: 'EDX elemental mapping — CSO after OER', zh: 'EDX 元素分布 — OER 后 CSO' },
    caption: {
      en: 'Elemental distribution after the stability test.',
      zh: '稳定性测试后的元素分布。',
    },
  },
  {
    src: '/gallery/fig-exafs.jpeg',
    title: { en: 'EXAFS fitting', zh: 'EXAFS 拟合' },
    caption: {
      en: 'Co and Sb K-edge EXAFS fitting resolving Co–O, Co–Co and Sb–O coordination environments.',
      zh: 'Co 与 Sb K 边 EXAFS 拟合，解析 Co–O、Co–Co 与 Sb–O 配位环境。',
    },
  },
  {
    src: '/gallery/fig-eis.jpeg',
    title: { en: 'Electrochemical impedance (EIS)', zh: '电化学阻抗（EIS）' },
    caption: {
      en: 'Equivalent-circuit fitting of the electrolyzer impedance.',
      zh: '电解槽阻抗的等效电路拟合。',
    },
  },
  {
    src: '/gallery/fig-42.jpeg',
    title: { en: 'Reaction mechanism — AEM / LOM', zh: '反应机理 — AEM / LOM' },
    caption: {
      en: 'Adsorbate evolution (AEM) and lattice oxygen (LOM) pathways for acidic OER.',
      zh: '酸性 OER 的吸附质演化（AEM）与晶格氧（LOM）路径。',
    },
  },
]
