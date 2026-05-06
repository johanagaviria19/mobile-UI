"use client"

import { useState } from "react"
import { PhoneMockup } from "./phone-mockup"
import { useApp } from "./app-provider"
import { motion } from "framer-motion"

const copy = {
  section: { en: "Section 01", es: "Seccion 01" },
  title: {
    en: "How UI Improves User Experience",
    es: "Como la UI Mejora la Experiencia de Usuario",
  },
  subtitle: {
    en: "The difference between a frustrating app and a delightful one often comes down to thoughtful interface design choices.",
    es: "La diferencia entre una app frustrante y una agradable suele estar en las decisiones de diseno de interfaz.",
  },
  badUI: { en: "Bad UI", es: "UI Mala" },
  goodUI: { en: "Good UI", es: "UI Buena" },
  // Bad UI bullets
  bad1: { en: "Tiny, hard-to-tap buttons", es: "Botones pequenos y dificiles de tocar" },
  bad2: { en: "Poor color contrast", es: "Bajo contraste de color" },
  bad3: { en: "Cluttered layout", es: "Diseno sobrecargado" },
  bad4: { en: "No visual hierarchy", es: "Sin jerarquia visual" },
  // Good UI bullets
  good1: { en: "Large, accessible tap targets", es: "Objetivos de toque grandes y accesibles" },
  good2: { en: "High-contrast colors", es: "Colores de alto contraste" },
  good3: { en: "Clear visual hierarchy", es: "Jerarquia visual clara" },
  good4: { en: "Consistent spacing", es: "Espaciado consistente" },
  // Phone screen text
  dashboard: { en: "Dashboard", es: "Panel" },
  welcome: { en: "Welcome back", es: "Bienvenido de nuevo" },
  course: { en: "Current course", es: "Curso actual" },
  fundamentals: { en: "UI Fundamentals", es: "Fundamentos de UI" },
  progress: { en: "60% complete", es: "60% completado" },
  colors: { en: "Colors & Contrast", es: "Colores y Contraste" },
  typography: { en: "Typography", es: "Tipografia" },
  spacing: { en: "Spacing", es: "Espaciado" },
  continue: { en: "Continue Learning", es: "Seguir Aprendiendo" },
  home: { en: "Home", es: "Inicio" },
  learn: { en: "Learn", es: "Aprender" },
  profile: { en: "Profile", es: "Perfil" },
}

export function ComparisonSection() {
  const [active, setActive] = useState<"bad" | "good">("good")
  const { lang } = useApp()
  const l = (key: keyof typeof copy) => copy[key][lang]

  return (
    <section id="compare" className="py-24 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">{l("section")}</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            {l("title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
            {l("subtitle")}
          </p>
        </div>

        {/* Mobile toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-secondary rounded-2xl p-1 gap-1">
            {(["bad", "good"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  active === tab
                    ? tab === "bad"
                      ? "bg-destructive text-white shadow-md"
                      : "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "bad" ? l("badUI") : l("goodUI")}
              </button>
            ))}
          </div>
        </div>

        {/* Side by side */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Bad UI */}
          <div
            className={`flex flex-col items-center gap-4 transition-all duration-300 ${
              active === "bad" ? "opacity-100 scale-105" : "opacity-40 scale-95"
            } lg:opacity-100 lg:scale-100`}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <span className="font-semibold text-sm text-muted-foreground">{l("badUI")}</span>
            </div>
            <PhoneMockup size="lg">
              <BadUIScreen lang={lang} />
            </PhoneMockup>
            <ul className="space-y-1.5 text-sm text-muted-foreground max-w-[200px]">
              {(["bad1", "bad2", "bad3", "bad4"] as const).map((key) => (
                <li key={key} className="flex items-start gap-2">
                  <span className="text-red-400 mt-0.5 text-xs">&#x2715;</span>
                  {l(key)}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden lg:flex flex-col items-center gap-3 text-muted-foreground">
            <div className="w-px h-20 bg-border" />
            <span className="text-xs font-semibold bg-secondary px-3 py-1 rounded-full">VS</span>
            <div className="w-px h-20 bg-border" />
          </div>

          {/* Good UI */}
          <div
            className={`flex flex-col items-center gap-4 transition-all duration-300 ${
              active === "good" ? "opacity-100 scale-105" : "opacity-40 scale-95"
            } lg:opacity-100 lg:scale-100`}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="font-semibold text-sm text-muted-foreground">{l("goodUI")}</span>
            </div>
            <PhoneMockup size="lg">
              <GoodUIScreen lang={lang} copy={copy} />
            </PhoneMockup>
            <ul className="space-y-1.5 text-sm text-muted-foreground max-w-[200px]">
              {(["good1", "good2", "good3", "good4"] as const).map((key) => (
                <li key={key} className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5 text-xs">&#x2713;</span>
                  {l(key)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function BadUIScreen({ lang }: { lang: "en" | "es" }) {
  const items = lang === "en" ? ["Menu", "Home", "Settings"] : ["Menu", "Inicio", "Config"]
  const gridItems = lang === "en"
    ? Array.from({ length: 8 }, (_, i) => `Item ${i + 1}`)
    : Array.from({ length: 8 }, (_, i) => `Elem ${i + 1}`)
  const offerText =
    lang === "en"
      ? "Click here for special offer that expires today only for premium users who signed up"
      : "Haz clic aqui para oferta especial que vence hoy solo para usuarios premium registrados"
  const btnLabels = lang === "en" ? ["buy", "checkout", "more"] : ["comprar", "pagar", "mas"]
  const ctaText =
    lang === "en"
      ? "CLICK HERE TO CONTINUE TO THE NEXT PAGE AND SEE MORE CONTENT"
      : "HAZ CLIC AQUI PARA CONTINUAR A LA SIGUIENTE PAGINA Y VER MAS CONTENIDO"

  return (
    <div className="h-full bg-gray-100 p-2 overflow-hidden">
      <div className="bg-yellow-400 p-1 flex items-center justify-between mb-1">
        <span className="text-[7px] font-bold text-gray-700">
          {lang === "en" ? "MY SUPER DUPER APP v1.2" : "MI SUPER APP v1.2"}
        </span>
        <div className="flex gap-0.5">
          {items.map((i) => (
            <button key={i} className="text-[5px] bg-gray-300 px-0.5 py-px rounded">{i}</button>
          ))}
        </div>
      </div>
      <div className="space-y-0.5">
        <div className="bg-red-200 p-1 rounded text-[6px] text-gray-600">
          <p className="font-bold text-[8px] text-red-800">{lang === "en" ? "IMPORTANT!!!" : "IMPORTANTE!!!"}</p>
          <p>{offerText}</p>
        </div>
        <div className="grid grid-cols-4 gap-0.5">
          {gridItems.map((item) => (
            <div key={item} className="bg-gray-300 rounded text-center p-0.5 text-[5px]">{item}</div>
          ))}
        </div>
        <div className="flex gap-0.5">
          {btnLabels.map((label) => (
            <button key={label} className="flex-1 bg-blue-700 text-white text-[5px] py-0.5 rounded">{label}</button>
          ))}
        </div>
        <div className="bg-gray-200 p-1 rounded">
          <p className="text-[5px] text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="grid grid-cols-3 gap-0.5">
          {["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"].map((c) => (
            <div key={c} className="h-4 rounded" style={{ background: c }} />
          ))}
        </div>
        <button className="w-full text-[5px] py-0.5 bg-gray-400 text-gray-200 rounded">{ctaText}</button>
      </div>
    </div>
  )
}

function GoodUIScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]

  return (
    <div className="h-full bg-white flex flex-col overflow-hidden">
      {/* Clean header */}
      <div className="px-4 pt-6 pb-3 flex items-center justify-between">
        <div>
          <p className="text-[9px] text-gray-400">{l("dashboard")}</p>
          <p className="text-sm font-bold text-gray-900">{l("welcome")}</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-[9px] font-bold">JD</div>
      </div>

      {/* Hero card */}
      <div
        className="mx-3 rounded-2xl p-3 text-white mb-3"
        style={{ background: "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.62 0.19 300))" }}
      >
        <p className="text-[8px] opacity-80 mb-0.5">{l("course")}</p>
        <p className="text-[11px] font-bold">{l("fundamentals")}</p>
        <div className="mt-1.5 bg-white/20 rounded-full h-1">
          <div className="bg-white h-1 rounded-full w-3/5" />
        </div>
        <p className="text-[7px] opacity-70 mt-0.5">{l("progress")}</p>
      </div>

      {/* Section list */}
      <div className="mx-3 space-y-2">
        {(["colors", "typography", "spacing"] as const).map((key, i) => (
          <div key={key} className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
            <div
              className="w-5 h-5 rounded-lg flex items-center justify-center text-white text-[8px]"
              style={{
                background:
                  i === 0
                    ? "oklch(0.55 0.22 264)"
                    : i === 1
                    ? "oklch(0.62 0.19 300)"
                    : "oklch(0.65 0.18 200)",
              }}
            >
              {i + 1}
            </div>
            <p className="text-[9px] font-medium text-gray-800 flex-1">{l(key)}</p>
            <svg className="w-2.5 h-2.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>

      <div className="flex-1" />

      {/* CTA */}
      <div className="mx-3 mb-3">
        <button
          className="w-full py-2.5 rounded-2xl text-white text-[10px] font-semibold"
          style={{ background: "oklch(0.55 0.22 264)" }}
        >
          {l("continue")}
        </button>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-gray-100 flex justify-around py-2">
        {(["home", "learn", "profile"] as const).map((key, i) => (
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
