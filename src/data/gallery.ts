export interface GalleryFigure {
  src: string
  title: string
  caption: string
}

// Figure files live in /public/gallery and were extracted (downscaled) from the
// CSO project data deck. Add / reorder entries to extend the gallery.
export const gallery: GalleryFigure[] = [
  {
    src: '/gallery/fig-overview.jpeg',
    title: 'Cobalt-based composite (CSO) catalyst',
    caption: 'Core material for non-precious-metal acidic OER in PEMWE.',
  },
  {
    src: '/gallery/fig-32.jpeg',
    title: 'OER activity benchmark',
    caption: 'Overpotential (η @ 10 mA cm⁻²) and stability vs. state-of-the-art OER catalysts.',
  },
  {
    src: '/gallery/fig-36.jpeg',
    title: 'PEMWE device performance',
    caption: 'Cell voltage vs. current density and durability benchmark across reported PEMWE anodes (This Work: 1.70 V @ 0.1 A cm⁻², 800 h).',
  },
  {
    src: '/gallery/fig-43.jpeg',
    title: 'PEMWE cell schematic',
    caption: 'Membrane-electrode-assembly: Pt/C | PEM (Nafion 212) | CSO anode with Ti-plate current collector.',
  },
  {
    src: '/gallery/fig-tema.jpeg',
    title: 'HR-TEM — CSO',
    caption: 'High-resolution TEM of the as-prepared CSO composite showing lattice fringes.',
  },
  {
    src: '/gallery/fig-temb.jpeg',
    title: 'HR-TEM — CSO (detail)',
    caption: 'Lattice-resolved view of Co₃O₄ / cobalt oxide phases.',
  },
  {
    src: '/gallery/fig-temor.jpeg',
    title: 'HR-TEM — CSO after OER',
    caption: 'Post-stability-test morphology, confirming structural integrity after 800 h operation.',
  },
  {
    src: '/gallery/fig-edx-1.jpeg',
    title: 'EDX elemental mapping — CSO',
    caption: 'Distribution of Co, O, Sb, Sn and F across the composite.',
  },
  {
    src: '/gallery/fig-edx-2.jpeg',
    title: 'EDX elemental mapping — CSO after OER',
    caption: 'Elemental distribution after the stability test.',
  },
  {
    src: '/gallery/fig-exafs.jpeg',
    title: 'EXAFS fitting',
    caption: 'Co and Sb K-edge EXAFS fitting resolving Co–O, Co–Co and Sb–O coordination environments.',
  },
  {
    src: '/gallery/fig-eis.jpeg',
    title: 'Electrochemical impedance (EIS)',
    caption: 'Equivalent-circuit fitting of the electrolyzer impedance.',
  },
  {
    src: '/gallery/fig-42.jpeg',
    title: 'Reaction mechanism — AEM / LOM',
    caption: 'Adsorbate evolution (AEM) and lattice oxygen (LOM) pathways for acidic OER.',
  },
]
