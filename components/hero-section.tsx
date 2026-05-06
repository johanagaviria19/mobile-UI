"use client"

import { PhoneMockup } from "./phone-mockup"
import { useApp } from "./app-provider"
import { motion } from "framer-motion"

const copy = {
  badge: { en: "Interactive Guide", es: "Guia Interactiva" },
  title1: { en: "Mobile UI Design:", es: "Diseno de UI Movil:" },
  title2: { en: "Improving User Experience", es: "Mejorando la Experiencia de Usuario" },
  subtitle: {
    en: "Learn how good interface design makes apps intuitive and efficient. Explore real examples, best practices, and an interactive playground.",
    es: "Aprende como el buen diseno de interfaz hace las apps intuitivas y eficientes. Explora ejemplos reales, buenas practicas y un playground interactivo.",
  },
  cta1: { en: "Explore Examples", es: "Explorar Ejemplos" },
  cta2: { en: "Try Playground", es: "Probar Playground" },
  // phone mockup text
  greeting: { en: "Good morning", es: "Buenos dias" },
  hub: { en: "Design Hub", es: "Centro de Diseno" },
  principles: { en: "UI Principles", es: "Principios UI" },
  lessons: { en: "6 lessons", es: "6 lecciones" },
  total: { en: "2h total", es: "2h en total" },
  colors: { en: "Colors", es: "Colores" },
  typography: { en: "Typography", es: "Tipografia" },
  spacing: { en: "Spacing", es: "Espaciado" },
  icons: { en: "Icons", es: "Iconos" },
  heroSection: { en: "Hero Section", es: "Seccion Hero" },
  navigation: { en: "Navigation", es: "Navegacion" },
  cards: { en: "Cards", es: "Tarjetas" },
  home: { en: "Home", es: "Inicio" },
  learn: { en: "Learn", es: "Aprender" },
  build: { en: "Build", es: "Construir" },
}

export function HeroSection() {
  const { lang } = useApp()
  const l = (key: keyof typeof copy) => copy[key][lang]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.55 0.22 264 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.55 0.22 264 / 0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.55 0.22 264)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.62 0.19 300)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full flex flex-col lg:flex-row items-center gap-16">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {l("badge")}
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight mb-6">
            {l("title1")}
            <span className="block text-primary mt-1">{l("title2")}</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 text-pretty">
            {l("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#compare"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-2xl shadow-lg hover:opacity-90 transition-all duration-200 hover:shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              {l("cta1")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#playground"
              className="inline-flex items-center justify-center gap-2 border border-border bg-card text-foreground font-semibold px-8 py-3.5 rounded-2xl hover:bg-secondary transition-all duration-200"
            >
              {l("cta2")}
            </a>
          </div>
        </motion.div>

        {/* Phone mockup side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-shrink-0 flex items-center justify-center relative"
        >
          <div
            className="absolute inset-0 rounded-full opacity-20 blur-3xl scale-75"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.62 0.19 300))",
            }}
          />
          <PhoneMockup size="lg" className="relative z-10 hover:rotate-0 transition-transform duration-500">
            <HeroAppScreen lang={lang} copy={copy} />
          </PhoneMockup>
        </motion.div>
      </div>
    </section>
  )
}

function HeroAppScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Status bar */}
      <div className="flex justify-between items-center px-4 pt-6 pb-2 text-[10px] text-gray-500">
        <span>9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-3 h-1.5 border border-gray-400 rounded-sm">
            <div className="w-2 h-full bg-gray-400 rounded-sm" />
          </div>
          <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
        <div>
          <p className="text-[10px] text-gray-400">{l("greeting")}</p>
          <p className="text-sm font-bold text-gray-800">{l("hub")}</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-[9px] font-bold">
          JD
        </div>
      </div>

      {/* Cards */}
      <div className="flex-1 p-3 overflow-hidden space-y-2">
        <div
          className="rounded-xl p-3 text-white text-[9px]"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.62 0.19 300))",
          }}
        >
          <p className="font-semibold mb-0.5">{l("principles")}</p>
          <p className="opacity-80">{l("lessons")} · {l("total")}</p>
          <div className="mt-2 bg-white/20 rounded-full h-1.5">
            <div className="bg-white h-1.5 rounded-full w-3/5" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[
            { key: "colors" as const, val: "12" },
            { key: "typography" as const, val: "8" },
            { key: "spacing" as const, val: "5" },
            { key: "icons" as const, val: "24" },
          ].map(({ key, val }) => (
            <div key={key} className="bg-gray-50 rounded-xl p-2">
              <p className="text-[8px] text-gray-400">{l(key)}</p>
              <p className="text-sm font-bold text-gray-800">{val}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-2 space-y-1.5">
          {(["heroSection", "navigation", "cards"] as const).map((key, i) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    i === 0
                      ? "oklch(0.55 0.22 264)"
                      : i === 1
                      ? "oklch(0.62 0.19 300)"
                      : "oklch(0.65 0.18 200)",
                }}
              >
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-[9px] text-gray-700">{l(key)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-gray-100 flex justify-around py-2 px-3">
        {(["home", "learn", "build"] as const).map((key, i) => (
          <div key={key} className="flex flex-col items-center gap-0.5">
            <div className={`w-4 h-4 rounded ${i === 0 ? "bg-primary" : "bg-gray-200"}`} />
            <p className={`text-[8px] ${i === 0 ? "text-primary font-semibold" : "text-gray-400"}`}>
              {l(key)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
