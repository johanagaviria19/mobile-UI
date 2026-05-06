"use client"

import { useState } from "react"
import { PhoneMockup } from "./phone-mockup"
import { useApp } from "./app-provider"
import { motion, AnimatePresence } from "framer-motion"

const copy = {
  section: { en: "Section 06", es: "Seccion 06" },
  title: { en: "Interactive UI Playground", es: "Playground Interactivo de UI" },
  subtitle: {
    en: "Tweak colors, spacing, and font size in real-time to see how each decision impacts the overall feel.",
    es: "Ajusta colores, espaciado y tamano de fuente en tiempo real para ver como cada decision impacta la apariencia general.",
  },
  primaryColor: { en: "Primary Color", es: "Color Principal" },
  selected: { en: "Selected:", es: "Seleccionado:" },
  spacingDensity: { en: "Spacing Density", es: "Densidad de Espaciado" },
  fontSize: { en: "Font Size", es: "Tamano de Fuente" },
  currentConfig: { en: "Current Config", es: "Configuracion Actual" },
  configColor: { en: "Color", es: "Color" },
  configSpacing: { en: "Spacing", es: "Espaciado" },
  configFont: { en: "Font", es: "Fuente" },
  configFontWeight: { en: "Weight", es: "Peso" },
  configSimplicity: { en: "Simplicity", es: "Simplicidad" },
  configFeedback: { en: "Touch Feedback", es: "Feedback Tactil" },
  configAccessibility: { en: "Contrast Check", es: "Contraste (Accesibilidad)" },
  configNavigation: { en: "Navigation Pattern", es: "Patron de Navegacion" },
  configSpeed: { en: "App Speed", es: "Velocidad de App" },
  configHierarchy: { en: "Visual Hierarchy", es: "Jerarquia Visual" },
  configTesting: { en: "Usage Heatmap", es: "Mapa de Calor" },
  // Simplicity options
  simplicityFull: { en: "Full UI", es: "UI Completa" },
  simplicityEssential: { en: "Essential Only", es: "Solo Esencial" },
  // Hierarchy options
  hierarchyGood: { en: "Clear", es: "Clara" },
  hierarchyBad: { en: "Poor", es: "Pobre" },
  // Testing options
  testingOff: { en: "Hidden", es: "Oculto" },
  testingOn: { en: "Visible", es: "Visible" },
  // Feedback options
  feedbackNone: { en: "None", es: "Ninguno" },
  feedbackHaptic: { en: "Haptic/Visual", es: "Haptico/Visual" },
  // Navigation options
  navBottom: { en: "Bottom Bar", es: "Barra Inferior" },
  navTop: { en: "Top Menu", es: "Menu Superior" },
  // Speed options
  speedFast: { en: "Instant", es: "Instantaneo" },
  speedSlow: { en: "Loading (Slow)", es: "Carga (Lenta)" },
  // Color names
  colorBlue: { en: "Blue", es: "Azul" },
  colorPurple: { en: "Purple", es: "Morado" },
  colorTeal: { en: "Teal", es: "Verde azulado" },
  colorOrange: { en: "Orange", es: "Naranja" },
  colorRose: { en: "Rose", es: "Rosa" },
  colorIndigo: { en: "Indigo", es: "Indigo" },
  colorEmerald: { en: "Emerald", es: "Esmeralda" },
  colorAmber: { en: "Amber", es: "Ambar" },
  // Spacing labels
  spacingCompact: { en: "Compact", es: "Compacto" },
  spacingTight: { en: "Tight", es: "Ajustado" },
  spacingMedium: { en: "Medium", es: "Medio" },
  spacingRelaxed: { en: "Relaxed", es: "Relajado" },
  spacingSpacious: { en: "Spacious", es: "Espacioso" },
  // Font labels
  fontSans: { en: "Sans Serif", es: "Sans Serif" },
  fontSerif: { en: "Serif", es: "Serif" },
  fontMono: { en: "Monospace", es: "Monospace" },
  // Weight labels
  weightRegular: { en: "Regular", es: "Regular" },
  weightMedium: { en: "Medium", es: "Medio" },
  weightBold: { en: "Bold", es: "Negrita" },
  // Phone screen
  dashboard: { en: "Dashboard", es: "Panel" },
  myApp: { en: "My App", es: "Mi App" },
  activeProject: { en: "Active project", es: "Proyecto activo" },
  sprint: { en: "UI Design Sprint", es: "Sprint de Diseno UI" },
  complete: { en: "60% complete", es: "60% completado" },
  tasks: { en: "Tasks", es: "Tareas" },
  done: { en: "Done", es: "Hechas" },
  team: { en: "Team", es: "Equipo" },
  days: { en: "Days", es: "Dias" },
  task1: { en: "Review mockups", es: "Revisar mockups" },
  task2: { en: "Update colors", es: "Actualizar colores" },
  task3: { en: "Test on device", es: "Probar en dispositivo" },
  continueCta: { en: "Continue", es: "Continuar" },
  homeNav: { en: "Home", es: "Inicio" },
  tasksNav: { en: "Tasks", es: "Tareas" },
  meNav: { en: "Me", es: "Yo" },
}

export function PlaygroundSection() {
  const [colorIdx, setColorIdx] = useState(0)
  const [spacingIdx, setSpacingIdx] = useState(2)
  const [fontFamilyIdx, setFontFamilyIdx] = useState(0)
  const [fontScale, setFontScale] = useState(1)
  const [fontWeightIdx, setFontWeightIdx] = useState(1)
  const [isEssential, setIsEssential] = useState(false)
  const [hasFeedback, setHasFeedback] = useState(true)
  const [isBottomNav, setIsBottomNav] = useState(true)
  const [isSlow, setIsSlow] = useState(false)
  const [showAccessibility, setShowAccessibility] = useState(false)
  const [isHierarchyBad, setIsHierarchyBad] = useState(false)
  const [showHeatmap, setShowHeatmap] = useState(false)
  const { lang } = useApp()
  const l = (key: keyof typeof copy) => copy[key][lang]

  const colorOptions = [
    { labelKey: "colorBlue" as const, value: "oklch(0.55 0.22 264)" },
    { labelKey: "colorIndigo" as const, value: "oklch(0.5 0.2 280)" },
    { labelKey: "colorPurple" as const, value: "oklch(0.55 0.22 300)" },
    { labelKey: "colorRose" as const, value: "oklch(0.58 0.22 15)" },
    { labelKey: "colorOrange" as const, value: "oklch(0.65 0.2 50)" },
    { labelKey: "colorAmber" as const, value: "oklch(0.7 0.15 70)" },
    { labelKey: "colorEmerald" as const, value: "oklch(0.6 0.2 150)" },
    { labelKey: "colorTeal" as const, value: "oklch(0.55 0.18 195)" },
  ]

  const spacingOptions = [
    { labelKey: "spacingCompact" as const, px: 3, gap: 4, rounding: "rounded-md" },
    { labelKey: "spacingTight" as const, px: 5, gap: 8, rounding: "rounded-lg" },
    { labelKey: "spacingMedium" as const, px: 8, gap: 12, rounding: "rounded-xl" },
    { labelKey: "spacingRelaxed" as const, px: 12, gap: 16, rounding: "rounded-2xl" },
    { labelKey: "spacingSpacious" as const, px: 16, gap: 24, rounding: "rounded-3xl" },
  ]

  const fontFamilyOptions = [
    { labelKey: "fontSans" as const, class: "font-sans" },
    { labelKey: "fontSerif" as const, class: "font-serif" },
    { labelKey: "fontMono" as const, class: "font-mono" },
  ]

  const fontWeightOptions = [
    { labelKey: "weightRegular" as const, class: "font-normal" },
    { labelKey: "weightMedium" as const, class: "font-medium" },
    { labelKey: "weightBold" as const, class: "font-bold" },
  ]

  const color = colorOptions[colorIdx]
  const spacing = spacingOptions[spacingIdx]
  const fontFamily = fontFamilyOptions[fontFamilyIdx]
  const fontWeight = fontWeightOptions[fontWeightIdx]

  // Scale calculations
  const titleBaseSize = 14 * fontScale
  const bodyBaseSize = 9 * fontScale
  const btnBaseSize = 9 * fontScale

  return (
    <section id="playground" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">{l("section")}</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            {l("title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
            {l("subtitle")}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-md space-y-10"
          >
            {/* Color picker */}
            <div className="bg-card p-6 rounded-3xl border border-border shadow-sm">
              <label className="block text-sm font-bold text-foreground mb-4">{l("primaryColor")}</label>
              <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-4 gap-3">
                {colorOptions.map((c, i) => (
                  <button
                    key={c.labelKey}
                    onClick={() => setColorIdx(i)}
                    title={l(c.labelKey)}
                    aria-label={l(c.labelKey)}
                    className={`aspect-square rounded-xl transition-all duration-300 border-2 ${
                      colorIdx === i ? "scale-110 border-foreground shadow-lg" : "border-transparent hover:scale-105 opacity-80 hover:opacity-100"
                    }`}
                    style={{ background: c.value }}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                {l("selected")} <span className="font-semibold text-foreground">{l(color.labelKey)}</span>
              </p>
            </div>

            {/* Spacing */}
            <div className="bg-card p-6 rounded-3xl border border-border shadow-sm">
              <label className="block text-sm font-bold text-foreground mb-4">{l("spacingDensity")}</label>
              <div className="space-y-4">
                <input
                  type="range"
                  min={0}
                  max={spacingOptions.length - 1}
                  step={1}
                  value={spacingIdx}
                  onChange={(e) => setSpacingIdx(Number(e.target.value))}
                  className="w-full accent-primary h-2 rounded-full cursor-pointer"
                />
                <div className="flex justify-between">
                  {spacingOptions.map((s, i) => (
                    <button
                      key={s.labelKey}
                      onClick={() => setSpacingIdx(i)}
                      className={`text-[10px] font-bold transition-colors ${
                        spacingIdx === i ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {l(s.labelKey)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-card p-6 rounded-3xl border border-border shadow-sm space-y-8">
              {/* Font Family */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-4">{l("configFont")}</label>
                <div className="flex gap-2">
                  {fontFamilyOptions.map((f, i) => (
                    <button
                      key={f.labelKey}
                      onClick={() => setFontFamilyIdx(i)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                        fontFamilyIdx === i
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-secondary text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {l(f.labelKey)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Weight */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-4">{l("configFontWeight")}</label>
                <div className="flex gap-2">
                  {fontWeightOptions.map((w, i) => (
                    <button
                      key={w.labelKey}
                      onClick={() => setFontWeightIdx(i)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                        fontWeightIdx === i
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-secondary text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {l(w.labelKey)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Scale */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-4">{l("fontSize")}</label>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground">A</span>
                  <input
                    type="range"
                    min={0.8}
                    max={1.4}
                    step={0.1}
                    value={fontScale}
                    onChange={(e) => setFontScale(Number(e.target.value))}
                    className="flex-1 accent-primary h-2 rounded-full cursor-pointer"
                  />
                  <span className="text-lg font-bold text-foreground">A</span>
                </div>
              </div>
            </div>

            {/* Config summary */}
            <div className="bg-primary/5 rounded-3xl border border-primary/10 p-6 space-y-4">
              <p className="text-xs font-bold text-primary uppercase tracking-widest">{l("currentConfig")}</p>
              
              {/* Row 1: Visuals */}
              <div className="grid grid-cols-2 gap-4 border-b border-primary/5 pb-4">
                {[
                  [l("configColor"), l(color.labelKey)],
                  [l("configSpacing"), l(spacing.labelKey)],
                  [l("configFont"), l(fontFamily.labelKey)],
                  [l("configFontWeight"), l(fontWeight.labelKey)],
                ].map(([key, val]) => (
                  <div key={key}>
                    <p className="text-[10px] text-muted-foreground uppercase">{key}</p>
                    <p className="text-sm font-bold text-foreground">{val}</p>
                  </div>
                ))}
              </div>

              {/* Row 2: Principles Switches */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-primary uppercase tracking-wider">Mobile Principles</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Simplicity */}
                  <div className="flex items-center justify-between bg-card p-3 rounded-2xl border border-border">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase">{l("configSimplicity")}</p>
                      <p className="text-xs font-bold">{isEssential ? l("simplicityEssential") : l("simplicityFull")}</p>
                    </div>
                    <button 
                      onClick={() => setIsEssential(!isEssential)}
                      className={`w-10 h-5 rounded-full transition-colors relative ${isEssential ? "bg-primary" : "bg-muted"}`}
                    >
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isEssential ? "left-6" : "left-1"}`} />
                    </button>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between bg-card p-3 rounded-2xl border border-border">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase">{l("configNavigation")}</p>
                      <p className="text-xs font-bold">{isBottomNav ? l("navBottom") : l("navTop")}</p>
                    </div>
                    <button 
                      onClick={() => setIsBottomNav(!isBottomNav)}
                      className={`w-10 h-5 rounded-full transition-colors relative ${isBottomNav ? "bg-primary" : "bg-muted"}`}
                    >
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isBottomNav ? "left-6" : "left-1"}`} />
                    </button>
                  </div>

                  {/* Speed */}
                  <div className="flex items-center justify-between bg-card p-3 rounded-2xl border border-border">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase">{l("configSpeed")}</p>
                      <p className="text-xs font-bold">{isSlow ? l("speedSlow") : l("speedFast")}</p>
                    </div>
                    <button 
                      onClick={() => setIsSlow(!isSlow)}
                      className={`w-10 h-5 rounded-full transition-colors relative ${isSlow ? "bg-primary" : "bg-muted"}`}
                    >
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isSlow ? "left-6" : "left-1"}`} />
                    </button>
                  </div>

                  {/* Feedback */}
                  <div className="flex items-center justify-between bg-card p-3 rounded-2xl border border-border">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase">{l("configFeedback")}</p>
                      <p className="text-xs font-bold">{hasFeedback ? l("feedbackHaptic") : l("feedbackNone")}</p>
                    </div>
                    <button 
                      onClick={() => setHasFeedback(!hasFeedback)}
                      className={`w-10 h-5 rounded-full transition-colors relative ${hasFeedback ? "bg-primary" : "bg-muted"}`}
                    >
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${hasFeedback ? "left-6" : "left-1"}`} />
                    </button>
                  </div>

                  {/* Visual Hierarchy */}
                  <div className="flex items-center justify-between bg-card p-3 rounded-2xl border border-border">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase">{l("configHierarchy")}</p>
                      <p className="text-xs font-bold">{isHierarchyBad ? l("hierarchyBad") : l("hierarchyGood")}</p>
                    </div>
                    <button 
                      onClick={() => setIsHierarchyBad(!isHierarchyBad)}
                      className={`w-10 h-5 rounded-full transition-colors relative ${isHierarchyBad ? "bg-red-400" : "bg-primary"}`}
                    >
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isHierarchyBad ? "left-6" : "left-1"}`} />
                    </button>
                  </div>

                  {/* Testing Heatmap */}
                  <div className="flex items-center justify-between bg-card p-3 rounded-2xl border border-border">
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase">{l("configTesting")}</p>
                      <p className="text-xs font-bold">{showHeatmap ? l("testingOn") : l("testingOff")}</p>
                    </div>
                    <button 
                      onClick={() => setShowHeatmap(!showHeatmap)}
                      className={`w-10 h-5 rounded-full transition-colors relative ${showHeatmap ? "bg-orange-400" : "bg-muted"}`}
                    >
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${showHeatmap ? "left-6" : "left-1"}`} />
                    </button>
                  </div>

                  {/* Accessibility */}
                  <div className="flex items-center justify-between bg-card p-3 rounded-2xl border border-border col-span-full">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase">{l("configAccessibility")}</p>
                        <p className="text-xs font-bold">Contrast Checker</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setShowAccessibility(!showAccessibility)}
                      className={`w-10 h-5 rounded-full transition-colors relative ${showAccessibility ? "bg-primary" : "bg-muted"}`}
                    >
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${showAccessibility ? "left-6" : "left-1"}`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Live phone preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 lg:sticky lg:top-24"
          >
            <PhoneMockup size="lg">
              <LivePreviewScreen
                primaryColor={color.value}
                pad={spacing.px}
                gap={spacing.gap}
                rnd={spacing.rounding}
                fontFamilyClass={fontFamily.class}
                fontWeightClass={fontWeight.class}
                titleSize={titleBaseSize}
                bodySize={bodyBaseSize}
                btnSize={btnBaseSize}
                isEssential={isEssential}
                hasFeedback={hasFeedback}
                isBottomNav={isBottomNav}
                isSlow={isSlow}
                showAccessibility={showAccessibility}
                isHierarchyBad={isHierarchyBad}
                showHeatmap={showHeatmap}
                lang={lang}
                copy={copy}
              />
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface LivePreviewProps {
  primaryColor: string
  pad: number
  gap: number
  rnd: string
  fontFamilyClass: string
  fontWeightClass: string
  titleSize: number
  bodySize: number
  btnSize: number
  isEssential: boolean
  hasFeedback: boolean
  isBottomNav: boolean
  isSlow: boolean
  showAccessibility: boolean
  isHierarchyBad: boolean
  showHeatmap: boolean
  lang: "en" | "es"
  copy: typeof copy
}

function LivePreviewScreen({
  primaryColor,
  pad,
  gap,
  rnd,
  fontFamilyClass,
  fontWeightClass,
  titleSize,
  bodySize,
  btnSize,
  isEssential,
  hasFeedback,
  isBottomNav,
  isSlow,
  showAccessibility,
  isHierarchyBad,
  showHeatmap,
  lang,
  copy,
}: LivePreviewProps) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  const p = `${pad / 4}rem`
  const g = `${gap / 4}rem`

  const statCards = [
    { labelKey: "tasks" as const, val: "12" },
    { labelKey: "done" as const, val: "7" },
    ...(isEssential ? [] : [
      { labelKey: "team" as const, val: "4" },
      { labelKey: "days" as const, val: "3" },
    ])
  ]

  const todoItems = isEssential ? ["task1"] : ["task1", "task2", "task3"]
  const navItems = ["homeNav", "tasksNav", "meNav"] as const

  const textStyle = {
    fontFamily: fontFamilyClass === "font-serif" ? "serif" : fontFamilyClass === "font-mono" ? "monospace" : "sans-serif",
  }

  // Accessibility colors
  const accessibilityBg = showAccessibility ? "#f3f4f6" : "white"

  // Hierarchy calculations
  const finalTitleSize = isHierarchyBad ? bodySize : titleSize
  const finalTitleColor = isHierarchyBad ? "#9ca3af" : "#111827"

  return (
    <div
      className={`h-full relative bg-white flex flex-col overflow-hidden transition-all duration-300 ${fontFamilyClass}`}
      style={{ ...textStyle, background: accessibilityBg }}
    >
      {/* Heatmap Overlay */}
      {showHeatmap && (
        <div className="absolute inset-0 z-40 pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-red-500 rounded-full blur-2xl" />
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-orange-400 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
        </div>
      )}

      {/* Top Nav (Simulated if isBottomNav is false) */}
      {!isBottomNav && (
        <div className="bg-gray-800 text-white p-2 flex justify-around text-[7px] uppercase font-bold tracking-widest">
          {navItems.map(key => <span key={key}>{l(key)}</span>)}
        </div>
      )}

      {/* Speed / Loading state */}
      {isSlow && (
        <div className="absolute inset-0 z-50 bg-white/80 flex items-center justify-center backdrop-blur-sm">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-[10px] font-bold text-primary">Optimizing UI...</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div style={{ padding: p, paddingTop: "1.5rem", paddingBottom: p }}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 transition-all" style={{ fontSize: `${bodySize * 0.8}px` }}>{l("dashboard")}</p>
            <p className={`font-bold transition-all ${fontWeightClass}`} style={{ fontSize: `${finalTitleSize}px`, color: finalTitleColor }}>{l("myApp")}</p>
          </div>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
            style={{ background: isHierarchyBad ? "#e5e7eb" : primaryColor, fontSize: "10px" }}
          >
            JD
          </div>
        </div>
      </div>

      {/* Accessibility Contrast Demo */}
      {showAccessibility && (
        <div className="mx-4 mb-4 p-2 bg-red-50 border border-red-100 rounded-lg text-[7px] text-red-400">
          ⚠️ Low contrast detected on background
        </div>
      )}

      {/* Hero card */}
      <div style={{ marginLeft: p, marginRight: p, marginBottom: g }}>
        <motion.div 
          whileHover={hasFeedback ? { scale: 1.02 } : {}}
          whileTap={hasFeedback ? { scale: 0.98 } : {}}
          className={`${rnd} text-white transition-all duration-300 shadow-lg`} 
          style={{ padding: p, background: isHierarchyBad ? "#f3f4f6" : primaryColor, color: isHierarchyBad ? "#9ca3af" : "white" }}
        >
          <p className="opacity-80 mb-0.5 transition-all" style={{ fontSize: `${bodySize}px` }}>{l("activeProject")}</p>
          <p className={`font-bold transition-all ${fontWeightClass}`} style={{ fontSize: `${finalTitleSize}px` }}>{l("sprint")}</p>
          <div className="mt-3 bg-white/20 rounded-full h-1.5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              className="bg-white h-full"
            />
          </div>
          <p className="opacity-70 mt-1 transition-all" style={{ fontSize: `${bodySize * 0.9}px` }}>{l("complete")}</p>
        </motion.div>
      </div>

      {/* Stat cards */}
      <div style={{ marginLeft: p, marginRight: p, marginBottom: g }}>
        <div className="grid grid-cols-2" style={{ gap: `${gap / 8}rem` }}>
          {statCards.map(({ labelKey, val }) => (
            <div key={labelKey} className={`bg-gray-50 ${rnd} transition-all`} style={{ padding: `${pad / 8}rem` }}>
              <p className="text-gray-400 transition-all" style={{ fontSize: `${bodySize * 0.9}px` }}>{l(labelKey)}</p>
              <p className={`font-bold text-gray-900 transition-all ${fontWeightClass}`} style={{ fontSize: `${finalTitleSize * 0.9}px` }}>{val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Task list */}
      <div style={{ marginLeft: p, marginRight: p, marginBottom: g }} className="space-y-2">
        {todoItems.map((key, i) => (
          <motion.div
            key={key}
            whileHover={hasFeedback ? { x: 4 } : {}}
            className={`flex items-center gap-2 bg-gray-50 ${rnd} transition-all`}
            style={{ padding: `${pad / 8}rem` }}
          >
            <div
              className="w-4 h-4 rounded-md flex-shrink-0"
              style={{ background: isHierarchyBad ? "#e5e7eb" : primaryColor, opacity: i === 0 ? 1 : 0.2 }}
            />
            <p className="text-gray-700 transition-all flex-1" style={{ fontSize: `${bodySize}px` }}>{l(key)}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex-1" />

      {/* CTA */}
      <div style={{ margin: p }}>
        <motion.button
          whileHover={hasFeedback ? { scale: 1.02 } : {}}
          whileTap={hasFeedback ? { scale: 0.98 } : {}}
          className={`w-full text-white font-bold ${rnd} transition-all duration-300 shadow-lg`}
          style={{ background: isHierarchyBad ? "#f3f4f6" : primaryColor, color: isHierarchyBad ? "#9ca3af" : "white", padding: `${pad / 8}rem`, fontSize: `${btnSize}px` }}
        >
          {l("continueCta")}
        </motion.button>
      </div>

      {/* Bottom nav */}
      {isBottomNav && (
        <div className="border-t border-gray-100 flex justify-around py-3">
          {navItems.map((key, i) => (
            <motion.div
              key={key}
              whileHover={hasFeedback ? { y: -2 } : {}}
              className="flex flex-col items-center gap-1"
            >
              <div className="w-5 h-5 rounded-lg" style={{ background: i === 0 ? (isHierarchyBad ? "#e5e7eb" : primaryColor) : "#f3f4f6" }} />
              <p
                className="transition-all"
                style={{
                  fontSize: `${bodySize * 0.8}px`,
                  color: i === 0 ? (isHierarchyBad ? "#9ca3af" : primaryColor) : "#9ca3af",
                  fontWeight: i === 0 ? "bold" : "normal",
                }}
              >
                {l(key)}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
