import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'en' | 'zh'

const STORAGE_KEY = 'academic-site-lang'

type LangContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  toggleLang: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'zh') return stored
  // Default to the browser language when available.
  const nav = window.navigator.language?.toLowerCase() ?? ''
  return nav.startsWith('zh') ? 'zh' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en'
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const toggleLang = useCallback(
    () => setLangState((l) => (l === 'en' ? 'zh' : 'en')),
    [],
  )

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}

/**
 * Resolve a value that may be a plain string or a { en, zh } object.
 * Returns the string for the active language (falls back to `en`).
 */
export function resolveText(
  value: string | { en: string; zh: string } | undefined,
  lang: Lang,
): string {
  if (value == null) return ''
  if (typeof value === 'string') return value
  return value[lang] ?? value.en
}
