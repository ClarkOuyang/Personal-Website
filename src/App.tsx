import { useTheme } from './hooks/useTheme'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import News from './components/News'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Publications from './components/Publications'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-800 dark:bg-[#0d1320] dark:text-slate-200">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero />
          <News />
          <Projects />
          <Gallery />
          <Publications />
          <Experience />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
