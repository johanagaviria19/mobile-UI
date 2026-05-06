"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// ── Types ──────────────────────────────────────────────────────────────────
export type Lang = "en" | "es"
export type Theme = "light" | "dark"

interface AppContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  theme: Theme
  toggleTheme: () => void
}

// ── Context ────────────────────────────────────────────────────────────────
const AppContext = createContext<AppContextValue>({
  lang: "en",
  setLang: () => {},
  theme: "light",
  toggleTheme: () => {},
})

export function useApp() {
  return useContext(AppContext)
}

// ── Provider ───────────────────────────────────────────────────────────────
export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")
  const [theme, setTheme] = useState<Theme>("light")

  // Persist theme preference
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null
    if (saved) setTheme(saved)
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark")
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"))

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

// ── Translation helper ─────────────────────────────────────────────────────
export type Translations = Record<string, Record<Lang, string>>

export function t(translations: Translations, key: string, lang: Lang): string {
  return translations[key]?.[lang] ?? key
}
