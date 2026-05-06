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
  // Color names
  colorBlue: { en: "Blue", es: "Azul" },
  colorPurple: { en: "Purple", es: "Morado" },
  colorTeal: { en: "Teal", es: "Verde azulado" },
  colorOrange: { en: "Orange", es: "Naranja" },
  colorRose: { en: "Rose", es: "Rosa" },
  // Spacing labels
  spacingCompact: { en: "Compact", es: "Compacto" },
  spacingMedium: { en: "Medium", es: "Medio" },
  spacingSpacious: { en: "Spacious", es: "Espacioso" },
  // Font labels
  fontSmall: { en: "Small", es: "Pequena" },
  fontMedium: { en: "Medium", es: "Mediana" },
  fontLarge: { en: "Large", es: "Grande" },
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
  const [spacingIdx, setSpacingIdx] = useState(1)
  const [fontIdx, setFontIdx] = useState(1)
  const { lang } = useApp()
  const l = (key: keyof typeof copy) => copy[key][lang]

  const colorOptions = [
    { labelKey: "colorBlue" as const, value: "oklch(0.55 0.22 264)" },
    { labelKey: "colorPurple" as const, value: "oklch(0.55 0.22 300)" },
    { labelKey: "colorTeal" as const, value: "oklch(0.55 0.18 195)" },
    { labelKey: "colorOrange" as const, value: "oklch(0.65 0.2 50)" },
    { labelKey: "colorRose" as const, value: "oklch(0.58 0.22 15)" },
  ]

  const spacingOptions = [
    { labelKey: "spacingCompact" as const, px: 4, gap: 6, rounding: "rounded-lg" },
    { labelKey: "spacingMedium" as const, px: 8, gap: 10, rounding: "rounded-xl" },
    { labelKey: "spacingSpacious" as const, px: 12, gap: 16, rounding: "rounded-2xl" },
  ]

  const fontSizeOptions = [
    { labelKey: "fontSmall" as const, title: "text-xs", body: "text-[8px]", btn: "text-[8px]" },
    { labelKey: "fontMedium" as const, title: "text-sm", body: "text-[9px]", btn: "text-[9px]" },
    { labelKey: "fontLarge" as const, title: "text-base", body: "text-[10px]", btn: "text-[10px]" },
  ]

  const color = colorOptions[colorIdx]
  const spacing = spacingOptions[spacingIdx]
  const font = fontSizeOptions[fontIdx]
  const pad = spacing.px
  const gap = spacing.gap
  const rnd = spacing.rounding

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

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-md space-y-8"
          >
            {/* Color picker */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">{l("primaryColor")}</label>
              <div className="flex gap-3 flex-wrap">
                {colorOptions.map((c, i) => (
                  <button
                    key={c.labelKey}
                    onClick={() => setColorIdx(i)}
                    title={l(c.labelKey)}
                    aria-label={l(c.labelKey)}
                    className={`w-10 h-10 rounded-2xl transition-all duration-200 border-2 ${
                      colorIdx === i ? "scale-110 border-foreground shadow-lg" : "border-transparent hover:scale-105"
                    }`}
                    style={{ background: c.value }}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {l("selected")} <span className="font-semibold text-foreground">{l(color.labelKey)}</span>
              </p>
            </div>

            {/* Spacing */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">{l("spacingDensity")}</label>
              <div className="flex gap-2">
                {spacingOptions.map((s, i) => (
                  <button
                    key={s.labelKey}
                    onClick={() => setSpacingIdx(i)}
                    className={`flex-1 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                      spacingIdx === i
                        ? "text-primary-foreground shadow-lg shadow-primary/20"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground"
                    }`}
                    style={spacingIdx === i ? { background: color.value } : {}}
                  >
                    {l(s.labelKey)}
                  </button>
                ))}
              </div>
            </div>

            {/* Font size */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">{l("fontSize")}</label>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">A</span>
                <input
                  type="range"
                  min={0}
                  max={2}
                  step={1}
                  value={fontIdx}
                  onChange={(e) => setFontIdx(Number(e.target.value))}
                  className="flex-1 accent-primary h-1.5 rounded-full"
                />
                <span className="text-base font-bold text-foreground">A</span>
              </div>
              <div className="flex justify-between mt-1.5">
                {fontSizeOptions.map((f, i) => (
                  <p key={f.labelKey} className={`text-xs ${fontIdx === i ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                    {l(f.labelKey)}
                  </p>
                ))}
              </div>
            </div>

            {/* Config summary */}
            <div className="bg-card rounded-2xl border border-border p-4 space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{l("currentConfig")}</p>
              {[
                [l("configColor"), l(color.labelKey)],
                [l("configSpacing"), l(spacing.labelKey)],
                [l("configFont"), l(font.labelKey)],
              ].map(([key, val]) => (
                <div key={key} className="flex justify-between">
                  <p className="text-sm text-muted-foreground">{key}</p>
                  <p className="text-sm font-semibold text-foreground">{val}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Live phone preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <PhoneMockup size="lg">
              <LivePreviewScreen
                primaryColor={color.value}
                pad={pad}
                gap={gap}
                rnd={rnd}
                titleClass={font.title}
                bodyClass={font.body}
                btnClass={font.btn}
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
  titleClass: string
  bodyClass: string
  btnClass: string
  lang: "en" | "es"
  copy: typeof copy
}

function LivePreviewScreen({ primaryColor, pad, gap, rnd, titleClass, bodyClass, btnClass, lang, copy }: LivePreviewProps) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  const p = `${pad / 4}rem`
  const g = `${gap / 4}rem`

  const statCards = [
    { labelKey: "tasks" as const, val: "12" },
    { labelKey: "done" as const, val: "7" },
    { labelKey: "team" as const, val: "4" },
    { labelKey: "days" as const, val: "3" },
  ]

  const todoItems = ["task1", "task2", "task3"] as const
  const navItems = ["homeNav", "tasksNav", "meNav"] as const

  return (
    <div className="h-full bg-white flex flex-col overflow-hidden transition-all duration-300">
      {/* Header */}
      <div style={{ padding: p, paddingTop: "1.5rem", paddingBottom: p }}>
        <div className="flex items-center justify-between">
          <div>
            <p className={`${bodyClass} text-gray-400 transition-all`}>{l("dashboard")}</p>
            <p className={`${titleClass} font-bold text-gray-900 transition-all`}>{l("myApp")}</p>
          </div>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[9px] font-bold"
            style={{ background: primaryColor }}
          >
            JD
          </div>
        </div>
      </div>

      {/* Hero card */}
      <div style={{ marginLeft: p, marginRight: p, marginBottom: g }}>
        <div className={`${rnd} text-white transition-all duration-300`} style={{ padding: p, background: primaryColor }}>
          <p className={`${bodyClass} opacity-80 mb-0.5 transition-all`}>{l("activeProject")}</p>
          <p className={`${titleClass} font-bold transition-all`}>{l("sprint")}</p>
          <div className="mt-2 bg-white/20 rounded-full h-1">
            <div className="bg-white h-1 rounded-full w-3/5" />
          </div>
          <p className={`${bodyClass} opacity-70 mt-0.5 transition-all`}>{l("complete")}</p>
        </div>
      </div>

      {/* Stat cards */}
      <div style={{ marginLeft: p, marginRight: p, marginBottom: g }}>
        <div className="grid grid-cols-2" style={{ gap: `${gap / 8}rem` }}>
          {statCards.map(({ labelKey, val }) => (
            <div key={labelKey} className={`bg-gray-50 ${rnd} transition-all`} style={{ padding: `${pad / 8}rem` }}>
              <p className={`${bodyClass} text-gray-400 transition-all`}>{l(labelKey)}</p>
              <p className={`${titleClass} font-bold text-gray-900 transition-all`}>{val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Task list */}
      <div style={{ marginLeft: p, marginRight: p, marginBottom: g }} className="space-y-1.5">
        {todoItems.map((key, i) => (
          <motion.div
            key={key}
            whileHover={{ x: 4 }}
            className={`flex items-center gap-2 bg-gray-50 ${rnd} transition-all`}
            style={{ padding: `${pad / 8}rem` }}
          >
            <div
              className="w-3.5 h-3.5 rounded flex-shrink-0"
              style={{ background: primaryColor, opacity: i === 0 ? 1 : 0.4 }}
            />
            <p className={`${bodyClass} text-gray-700 transition-all flex-1`}>{l(key)}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex-1" />

      {/* CTA */}
      <div style={{ margin: p }}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full text-white font-semibold ${rnd} ${btnClass} transition-all duration-300`}
          style={{ background: primaryColor, padding: `${pad / 8}rem` }}
        >
          {l("continueCta")}
        </motion.button>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-gray-100 flex justify-around py-2">
        {navItems.map((key, i) => (
          <motion.div
            key={key}
            whileHover={{ y: -2 }}
            className="flex flex-col items-center gap-0.5"
          >
            <div className="w-4 h-4 rounded" style={{ background: i === 0 ? primaryColor : "#e5e7eb" }} />
            <p
              className={`text-[7px] transition-all ${i === 0 ? "font-semibold" : "text-gray-400"}`}
              style={i === 0 ? { color: primaryColor } : {}}
            >
              {l(key)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
