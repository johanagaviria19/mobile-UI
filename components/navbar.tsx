"use client"

import { useState, useEffect } from "react"
import { useApp } from "./app-provider"

const navLinks = {
  en: [
    { label: "Comparison", href: "#compare" },
    { label: "Advantages", href: "#advantages" },
    { label: "Best Practices", href: "#practices" },
    { label: "App Examples", href: "#examples" },
    { label: "Tools", href: "#tools" },
  ],
  es: [
    { label: "Comparacion", href: "#compare" },
    { label: "Ventajas", href: "#advantages" },
    { label: "Buenas Practicas", href: "#practices" },
    { label: "Ejemplos", href: "#examples" },
    { label: "Herramientas", href: "#tools" },
  ],
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, theme, toggleTheme } = useApp()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = navLinks[lang]
  const ctaLabel = lang === "en" ? "Try Playground" : "Probar Playground"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-105 transition-transform"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.62 0.19 300))",
            }}
          >
            UI
          </div>
          <span className="font-serif font-bold text-foreground hidden sm:block">
            Mobile UI Design
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Language toggle */}
          <div className="flex items-center bg-secondary rounded-xl p-0.5 border border-border">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 ${
                lang === "en"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 ${
                lang === "es"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Cambiar a Espanol"
            >
              ES
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            className="w-9 h-9 rounded-xl flex items-center justify-center bg-secondary border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
          >
            {theme === "light" ? (
              /* Moon icon */
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              /* Sun icon */
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            )}
          </button>

        </div>
      </div>
    </header>
  )
}
