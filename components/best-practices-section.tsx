"use client"

import { useState } from "react"
import { PhoneMockup } from "./phone-mockup"
import { useApp } from "./app-provider"
import { motion, AnimatePresence } from "framer-motion"

const copy = {
  section: { en: "Section 03", es: "Seccion 03" },
  title: { en: "Best Practices", es: "Buenas Practicas" },
  subtitle: {
    en: "Five foundational pillars that elevate any mobile UI from functional to exceptional.",
    es: "Cinco pilares fundamentales que elevan cualquier UI movil de funcional a excepcional.",
  },
  seeExample: { en: "See live example in the mockup", es: "Ver ejemplo en el mockup" },

  // Tab labels
  colorsLabel: { en: "Colors", es: "Colores" },
  typographyLabel: { en: "Typography", es: "Tipografia" },
  spacingLabel: { en: "Spacing", es: "Espaciado" },
  navigationLabel: { en: "Navigation", es: "Navegacion" },
  iconsLabel: { en: "Icons", es: "Iconos" },

  // Tab titles & descs
  colorsTitle: { en: "Colors & Contrast", es: "Colores y Contraste" },
  colorsDesc: {
    en: "Use a limited palette with sufficient contrast ratios (4.5:1 minimum) for accessibility and clarity.",
    es: "Usa una paleta limitada con relaciones de contraste suficientes (minimo 4.5:1) para accesibilidad y claridad.",
  },
  typographyTitle: { en: "Typography", es: "Tipografia" },
  typographyDesc: {
    en: "Establish clear text hierarchy with 2-3 font sizes. Use readable sizes (minimum 14px) and comfortable line height.",
    es: "Establece una jerarquia de texto clara con 2-3 tamanos de fuente. Usa tamanos legibles (minimo 14px) y altura de linea comoda.",
  },
  spacingTitle: { en: "Spacing", es: "Espaciado" },
  spacingDesc: {
    en: "Generous whitespace reduces visual noise and makes content breathe. Consistent spacing creates rhythm.",
    es: "El espacio en blanco generoso reduce el ruido visual y hace que el contenido respire. El espaciado consistente crea ritmo.",
  },
  navigationTitle: { en: "Navigation", es: "Navegacion" },
  navigationDesc: {
    en: "Bottom navigation is thumb-friendly and ideal for primary sections. Keep it to 3-5 items.",
    es: "La navegacion inferior es comoda para el pulgar e ideal para secciones principales. Mantenla en 3-5 elementos.",
  },
  iconsTitle: { en: "Iconography", es: "Iconografia" },
  iconsDesc: {
    en: "Use universally recognizable icons with labels. Avoid ambiguous metaphors that confuse users.",
    es: "Usa iconos universalmente reconocibles con etiquetas. Evita metaforas ambiguas que confundan a los usuarios.",
  },

  // Colors screen
  primaryAction: { en: "Primary action", es: "Accion principal" },
  getStarted: { en: "Get Started - high contrast", es: "Comenzar - alto contraste" },
  secondaryAction: { en: "Secondary action", es: "Accion secundaria" },
  learnMore: { en: "Learn More", es: "Aprender Mas" },
  errorAction: { en: "Error / Destructive", es: "Error / Destructivo" },
  deleteAccount: { en: "Delete Account", es: "Eliminar Cuenta" },
  contrastCheck: { en: "Contrast check", es: "Verificacion de contraste" },
  poorContrast: { en: "Poor contrast", es: "Bajo contraste" },
  goodContrast: { en: "Good contrast", es: "Buen contraste" },

  // Typography screen
  typeHierarchy: { en: "Type Hierarchy", es: "Jerarquia de Texto" },
  h1Display: { en: "H1 - Display", es: "H1 - Titulo principal" },
  h1Text: { en: "Design Matters", es: "El Diseno Importa" },
  h2Heading: { en: "H2 - Heading", es: "H2 - Encabezado" },
  h2Text: { en: "Section Title Here", es: "Titulo de Seccion Aqui" },
  h3Sub: { en: "H3 - Subheading", es: "H3 - Subtitulo" },
  h3Text: { en: "Card or item label", es: "Etiqueta de tarjeta o item" },
  bodyRegular: { en: "Body - Regular", es: "Cuerpo - Regular" },
  bodyText: {
    en: "This is regular body text used for descriptions and general content that users read through.",
    es: "Este es el texto de cuerpo regular usado para descripciones y contenido general que los usuarios leen.",
  },
  captionSmall: { en: "Caption - Small", es: "Leyenda - Pequena" },
  captionText: { en: "Last updated · 2 min read", es: "Ultima actualizacion · 2 min de lectura" },

  // Spacing screen
  spacingDemo: { en: "Spacing Demo", es: "Demo de Espaciado" },
  cramped: { en: "Cramped - hard to read", es: "Apretado - dificil de leer" },
  wellSpaced: { en: "Well-spaced - easy to read", es: "Bien espaciado - facil de leer" },
  itemA: { en: "Item A", es: "Elemento A" },
  itemB: { en: "Item B", es: "Elemento B" },
  itemC: { en: "Item C", es: "Elemento C" },

  // Navigation screen
  navPatterns: { en: "Navigation Patterns", es: "Patrones de Navegacion" },
  topMenu: { en: "Top menu bar (harder to reach)", es: "Barra superior (mas dificil de alcanzar)" },
  thumbStretch: { en: "Thumb must stretch to reach top items", es: "El pulgar debe estirarse para llegar a los items superiores" },
  bottomNav: { en: "Bottom navigation (thumb-friendly)", es: "Navegacion inferior (comoda para el pulgar)" },
  navHome: { en: "Home", es: "Inicio" },
  navExplore: { en: "Explore", es: "Explorar" },
  navProfile: { en: "Profile", es: "Perfil" },
  navMore: { en: "More", es: "Mas" },
  navSearch: { en: "Search", es: "Buscar" },
  navSaved: { en: "Saved", es: "Guardado" },

  // Icons screen
  iconClarity: { en: "Icon Clarity", es: "Claridad de Iconos" },
  clearIcons: { en: "Clear icons", es: "Iconos claros" },
  confusingIcons: { en: "Confusing icons", es: "Iconos confusos" },
  iconHome: { en: "Home", es: "Inicio" },
  iconSearch: { en: "Search", es: "Buscar" },
  iconFav: { en: "Favorites", es: "Favoritos" },
  iconNote: {
    en: "Always pair icons with labels for clarity.",
    es: "Siempre acompana los iconos con etiquetas para mayor claridad.",
  },
}

export function BestPracticesSection() {
  const [active, setActive] = useState("colors")
  const { lang } = useApp()
  const l = (key: keyof typeof copy) => copy[key][lang]

  const practices = [
    {
      id: "colors",
      label: l("colorsLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: l("colorsTitle"),
      desc: l("colorsDesc"),
      screen: <ColorsScreen lang={lang} copy={copy} />,
    },
    {
      id: "typography",
      label: l("typographyLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      ),
      title: l("typographyTitle"),
      desc: l("typographyDesc"),
      screen: <TypographyScreen lang={lang} copy={copy} />,
    },
    {
      id: "spacing",
      label: l("spacingLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      ),
      title: l("spacingTitle"),
      desc: l("spacingDesc"),
      screen: <SpacingScreen lang={lang} copy={copy} />,
    },
    {
      id: "navigation",
      label: l("navigationLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      title: l("navigationTitle"),
      desc: l("navigationDesc"),
      screen: <NavigationScreen lang={lang} copy={copy} />,
    },
    {
      id: "icons",
      label: l("iconsLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
        </svg>
      ),
      title: l("iconsTitle"),
      desc: l("iconsDesc"),
      screen: <IconScreen lang={lang} copy={copy} />,
    },
  ]

  const current = practices.find((p) => p.id === active)!

  return (
    <section id="practices" className="py-24 bg-background">
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

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Tab nav */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-row lg:flex-col gap-2 flex-wrap lg:flex-nowrap w-full lg:w-auto"
          >
            {practices.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 text-left ${
                  active === p.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <span>{p.icon}</span>
                <span className="hidden sm:block">{p.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Content panel */}
          <div className="flex-1 flex flex-col sm:flex-row gap-10 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex-1"
              >
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{current.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{current.desc}</p>
                <div className="h-px bg-border mb-6" />
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {current.icon}
                  </div>
                  <p>{l("seeExample")}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <PhoneMockup size="lg">
                    {current.screen}
                  </PhoneMockup>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---- Sub screens ---- */

function ColorsScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-4 flex flex-col gap-3 overflow-hidden">
      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">{l("colorsTitle")}</p>
      <div className="space-y-1.5">
        <p className="text-[8px] text-gray-400">{l("primaryAction")}</p>
        <button className="w-full py-2.5 rounded-xl text-white text-[10px] font-bold" style={{ background: "oklch(0.55 0.22 264)" }}>
          {l("getStarted")}
        </button>
      </div>
      <div className="space-y-1.5">
        <p className="text-[8px] text-gray-400">{l("secondaryAction")}</p>
        <button className="w-full py-2.5 rounded-xl text-[10px] font-bold border-2" style={{ borderColor: "oklch(0.55 0.22 264)", color: "oklch(0.55 0.22 264)" }}>
          {l("learnMore")}
        </button>
      </div>
      <div className="space-y-1.5">
        <p className="text-[8px] text-gray-400">{l("errorAction")}</p>
        <button className="w-full py-2.5 rounded-xl text-white text-[10px] font-bold bg-red-500">
          {l("deleteAccount")}
        </button>
      </div>
      <div className="mt-1">
        <p className="text-[8px] text-gray-400 mb-1.5">{l("contrastCheck")}</p>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center justify-center">
            <p className="text-[8px] text-gray-200">{l("poorContrast")}</p>
          </div>
          <div className="rounded-lg p-2 flex items-center justify-center" style={{ background: "oklch(0.55 0.22 264)" }}>
            <p className="text-[8px] text-white font-bold">{l("goodContrast")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function TypographyScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-4 flex flex-col gap-3 overflow-hidden">
      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">{l("typeHierarchy")}</p>
      <div className="space-y-3">
        <div>
          <p className="text-[7px] text-gray-400 mb-0.5">{l("h1Display")}</p>
          <p className="text-xl font-bold text-gray-900 leading-tight">{l("h1Text")}</p>
        </div>
        <div>
          <p className="text-[7px] text-gray-400 mb-0.5">{l("h2Heading")}</p>
          <p className="text-sm font-bold text-gray-800">{l("h2Text")}</p>
        </div>
        <div>
          <p className="text-[7px] text-gray-400 mb-0.5">{l("h3Sub")}</p>
          <p className="text-[11px] font-semibold text-gray-700">{l("h3Text")}</p>
        </div>
        <div>
          <p className="text-[7px] text-gray-400 mb-0.5">{l("bodyRegular")}</p>
          <p className="text-[9px] text-gray-600 leading-relaxed">{l("bodyText")}</p>
        </div>
        <div>
          <p className="text-[7px] text-gray-400 mb-0.5">{l("captionSmall")}</p>
          <p className="text-[7px] text-gray-400">{l("captionText")}</p>
        </div>
      </div>
    </div>
  )
}

function SpacingScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  const items = [l("itemA"), l("itemB"), l("itemC")]
  return (
    <div className="h-full bg-white flex flex-col gap-2 p-2 overflow-hidden">
      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider px-2 pt-1">{l("spacingDemo")}</p>
      <div>
        <p className="text-[8px] text-red-400 mb-1 px-2">{l("cramped")}</p>
        <div className="bg-red-50 border border-red-100 rounded-xl p-1.5 mx-1">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-1 py-px border-b border-red-100 last:border-0">
              <div className="w-3 h-3 bg-red-200 rounded" />
              <p className="text-[8px] text-gray-600">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[8px] text-green-500 mb-1 px-2">{l("wellSpaced")}</p>
        <div className="bg-green-50 border border-green-100 rounded-xl p-2 mx-1">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2.5 py-1.5 border-b border-green-100 last:border-0">
              <div className="w-5 h-5 rounded-lg flex items-center justify-center" style={{ background: "oklch(0.55 0.22 264)" }}>
                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[9px] font-medium text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function NavigationScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  const topItems = [l("navHome"), l("navExplore"), l("navProfile"), l("navMore")]
  const bottomItems = [
    { key: "navHome", active: true },
    { key: "navSearch", active: false },
    { key: "navSaved", active: false },
    { key: "navProfile", active: false },
  ] as const

  return (
    <div className="h-full bg-white flex flex-col overflow-hidden">
      <div className="flex-1 p-4">
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-3">{l("navPatterns")}</p>
        <p className="text-[8px] text-orange-500 mb-1.5">{l("topMenu")}</p>
        <div className="bg-gray-800 rounded-xl flex justify-around py-2 mb-4">
          {topItems.map((item) => (
            <p key={item} className="text-[7px] text-gray-300">{item}</p>
          ))}
        </div>
        <div className="flex items-center gap-1.5 mb-4">
          <div className="w-3 h-3 bg-orange-400 rounded-full flex-shrink-0" />
          <p className="text-[8px] text-gray-500">{l("thumbStretch")}</p>
        </div>
        <div className="space-y-1.5">
          {[80, 60, 70].map((w, i) => (
            <div key={i} className="h-1.5 bg-gray-100 rounded-full" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-[8px] text-green-500 text-center mb-1">{l("bottomNav")}</p>
        <div className="border-t border-gray-100 flex justify-around py-2.5 px-3">
          {bottomItems.map(({ key, active }) => (
            <div key={key} className="flex flex-col items-center gap-0.5">
              <div className={`w-5 h-5 rounded-lg ${active ? "bg-primary" : "bg-gray-200"}`} />
              <p className={`text-[7px] ${active ? "text-primary font-semibold" : "text-gray-400"}`}>{l(key)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function IconScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]

  const icons = [
    {
      clear: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      confusing: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
      labelKey: "iconHome" as const,
    },
    {
      clear: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      confusing: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      labelKey: "iconSearch" as const,
    },
    {
      clear: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      confusing: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      labelKey: "iconFav" as const,
    },
  ]

  return (
    <div className="h-full bg-white p-4 flex flex-col gap-3 overflow-hidden">
      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">{l("iconClarity")}</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-green-50 rounded-xl p-2.5">
          <p className="text-[8px] text-green-600 font-semibold mb-2">{l("clearIcons")}</p>
          <div className="space-y-2">
            {icons.map(({ clear, labelKey }) => (
              <div key={labelKey} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-700">{clear}</div>
                <p className="text-[8px] text-gray-600">{l(labelKey)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-red-50 rounded-xl p-2.5">
          <p className="text-[8px] text-red-500 font-semibold mb-2">{l("confusingIcons")}</p>
          <div className="space-y-2">
            {icons.map(({ confusing, labelKey }) => (
              <div key={labelKey} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500">{confusing}</div>
                <p className="text-[8px] text-gray-400">???</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[8px] text-gray-400 mt-auto">{l("iconNote")}</p>
    </div>
  )
}
