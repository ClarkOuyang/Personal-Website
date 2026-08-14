import type { Lang } from './LanguageContext'

// All static UI chrome (labels that are NOT your personal data) lives here,
// keyed by language. Most values are strings; a few are functions for pluralization.
export type StringValue = string | ((n: number) => string)

const en: Record<string, StringValue> = {
  'nav.about': 'About',
  'nav.news': 'News',
  'nav.projects': 'Projects',
  'nav.gallery': 'Gallery',
  'nav.publications': 'Publications',
  'nav.experience': 'Experience',
  'nav.contact': 'Contact',
  'nav.toggleTheme.light': 'Light mode',
  'nav.toggleTheme.dark': 'Dark mode',
  'nav.toggleLang': 'Switch language',

  'section.recent': 'Recent',
  'section.what': 'What I work on',
  'section.selected': 'Selected works',
  'section.background': 'Background',
  'section.data': 'Research data',

  'heading.news': 'News & Announcements',
  'heading.projects': 'Research & Projects',
  'heading.gallery': 'Figure Gallery',
  'heading.publications': 'Publications',
  'heading.experience': 'Education & Experience',
  'heading.education': 'Education',
  'heading.experienceTitle': 'Experience',

  'gallery.intro':
    'Selected characterization and performance figures from the non-precious-metal PEMWE project (TEM, EDX, EXAFS, EIS, electrochemical benchmarking and device design). Click any figure to enlarge.',
  'gallery.click': 'Click any figure to enlarge.',

  'pub.yearPapers': (n: number) => `${n} ${n === 1 ? 'paper' : 'papers'}`,

  'link.pdf': 'PDF',
  'link.code': 'Code',
  'link.project': 'Project',
  'link.slides': 'Slides',
  'link.doi': 'DOI',
  'link.paper': 'Paper',
  'link.demo': 'Demo',
  'link.bibtex': 'BibTeX',
  'link.copy': 'Copy',
  'link.copied': 'Copied',

  'footer.rights': 'All rights reserved.',
  'footer.built': 'Built with React & Tailwind CSS.',

  'contact.email': 'Email',
  'contact.phone': 'Phone',
}

const zh: Record<string, StringValue> = {
  'nav.about': '关于',
  'nav.news': '动态',
  'nav.projects': '项目',
  'nav.gallery': '图集',
  'nav.publications': '论文',
  'nav.experience': '经历',
  'nav.contact': '联系',
  'nav.toggleTheme.light': '浅色模式',
  'nav.toggleTheme.dark': '深色模式',
  'nav.toggleLang': '切换语言',

  'section.recent': '近期',
  'section.what': '研究方向',
  'section.selected': '精选作品',
  'section.background': '背景',
  'section.data': '研究数据',

  'heading.news': '新闻与动态',
  'heading.projects': '研究与项目',
  'heading.gallery': '数据图集',
  'heading.publications': '发表论文',
  'heading.experience': '教育与经历',
  'heading.education': '教育背景',
  'heading.experienceTitle': '科研与实习',

  'gallery.intro':
    '非贵金属 PEMWE 项目的部分表征与性能图（TEM、EDX、EXAFS、EIS、电化学对比与器件设计）。点击任意图可放大查看。',
  'gallery.click': '点击任意图可放大查看。',

  'pub.yearPapers': (n: number) => `${n} 篇论文`,

  'link.pdf': 'PDF',
  'link.code': '代码',
  'link.project': '项目',
  'link.slides': '幻灯片',
  'link.doi': 'DOI',
  'link.paper': '论文',
  'link.demo': '演示',
  'link.bibtex': 'BibTeX',
  'link.copy': '复制',
  'link.copied': '已复制',

  'footer.rights': '保留所有权利。',
  'footer.built': '使用 React 与 Tailwind CSS 构建。',
}

export function getString(key: string, lang: Lang): string {
  const raw = (lang === 'zh' ? zh : en)[key] ?? en[key] ?? key
  return typeof raw === 'function' ? raw(2) : raw
}
