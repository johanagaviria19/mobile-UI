"use client"

import { useState } from "react"
import { PhoneMockup } from "./phone-mockup"
import { useApp } from "./app-provider"
import { motion, AnimatePresence } from "framer-motion"

const copy = {
  section: { en: "Section 03", es: "Seccion 03" },
  title: { en: "Best Practices", es: "Buenas Practicas" },
  subtitle: {
    en: "Ten foundational pillars that elevate any mobile UI from functional to exceptional.",
    es: "Diez pilares fundamentales que elevan cualquier UI movil de funcional a excepcional.",
  },
  seeExample: { en: "See live example in the mockup", es: "Ver ejemplo en el mockup" },

  // Tab labels
  simplicityLabel: { en: "Simplicity", es: "Simplicidad" },
  navigationLabel: { en: "Navigation", es: "Navegacion" },
  touchLabel: { en: "Touch-friendly", es: "Tactil" },
  speedLabel: { en: "Speed", es: "Velocidad" },
  consistencyLabel: { en: "Consistency", es: "Consistencia" },
  hierarchyLabel: { en: "Hierarchy", es: "Jerarquia" },
  accessibilityLabel: { en: "Accessibility", es: "Accesibilidad" },
  feedbackLabel: { en: "Feedback", es: "Feedback" },
  responsiveLabel: { en: "Responsive", es: "Adaptable" },
  testingLabel: { en: "Testing", es: "Pruebas" },

  // Tab titles & descs
  simplicityTitle: { en: "Simplicity Above All", es: "Simplicidad ante todo" },
  simplicityDesc: {
    en: "Avoid cluttered screens. Every element should have a clear purpose. Less is more.",
    es: "Evita pantallas saturadas. Cada elemento debe tener un proposito claro. Menos es mas.",
  },
  navigationTitle: { en: "Clear Navigation", es: "Navegacion clara" },
  navigationDesc: {
    en: "Users should always know where they are, where to go, and how to get back.",
    es: "El usuario debe saber siempre: donde esta, a donde puede ir y como volver.",
  },
  touchTitle: { en: "Touch-friendly Design", es: "Diseno tactil" },
  touchDesc: {
    en: "Everything is tactile. Use large buttons (min 44px) and enough spacing between items.",
    es: "Recuerda que no hay mouse, todo es tactil. Botones grandes (minimo ~44px) y espacio entre elementos.",
  },
  speedTitle: { en: "Performance & Speed", es: "Rendimiento y velocidad" },
  speedDesc: {
    en: "A slow app is a lost user. Optimize images and use smart loading states.",
    es: "Una app lenta es un usuario perdido. Optimiza imagenes y usa carga progresiva inteligente.",
  },
  spacingTitle: { en: "Mastering Spacing", es: "Tipos de espaciado" },
  spacingDesc: {
    en: "Understand the difference between Gap (between), Margin (external), and Padding (internal).",
    es: "Entiende la diferencia entre Gap (entre elementos), Margin (externo) y Padding (interno).",
  },
  spacingGap: { en: "1. Gap (Layout spacing)", es: "🧩 1. Gap (el más usado)" },
  spacingGapDesc: { 
    en: "The standard for grids and flex. Space between elements.", 
    es: "Es el nombre más correcto para grid o flex. Espacio entre los elementos." 
  },
  spacingMargin: { en: "2. Margin (External space)", es: "📦 2. Margin (espacio externo)" },
  spacingMarginDesc: { 
    en: "Space outside the element's border.", 
    es: "Separación manual: m = margin (afuera del elemento)." 
  },
  spacingPadding: { en: "3. Padding (Internal space)", es: "📐 3. Padding (espacio interno)" },
  spacingPaddingDesc: { 
    en: "Space inside the element, around content.", 
    es: "No es entre recuadros: p = espacio dentro del recuadro." 
  },
  consistencyTitle: { en: "Visual Consistency", es: "Consistencia visual" },
  consistencyDesc: {
    en: "Keep a uniform style: coherent colors, consistent typography, and same logic for buttons.",
    es: "Manten un estilo uniforme: colores coherentes, tipografia consistente y misma logica en botones.",
  },
  hierarchyTitle: { en: "Visual Hierarchy", es: "Jerarquia visual" },
  hierarchyDesc: {
    en: "Guide the user's eye: use size, color, and contrast to indicate importance.",
    es: "Guia la mirada del usuario: usa tamano, color y contraste para indicar importancia.",
  },
  accessibilityTitle: { en: "Accessibility", es: "Accesibilidad" },
  accessibilityDesc: {
    en: "Design for everyone: good contrast, readable text, and screen reader support.",
    es: "Disena para todos: buen contraste, texto legible y soporte para lectores de pantalla.",
  },
  feedbackTitle: { en: "Immediate Feedback", es: "Feedback inmediato" },
  feedbackDesc: {
    en: "Users should know what's happening: confirmed actions, animations, and loaders.",
    es: "El usuario debe saber que esta pasando: animaciones al tocar y mensajes de confirmacion.",
  },
  responsiveTitle: { en: "Responsive Design", es: "Diseno adaptable" },
  responsiveDesc: {
    en: "Your app must look great on different screen sizes and orientations.",
    es: "Tu app debe verse bien en diferentes tamanos de pantalla y orientaciones.",
  },
  testingTitle: { en: "User Testing", es: "Pruebas con usuarios" },
  testingDesc: {
    en: "Never design 'by eye'. Test with real users, observe confusion, and iterate.",
    es: "Nunca disenies solo 'a ojo'. Testea con usuarios reales, observa donde se confunden e itera.",
  },

  // Spacing Detail keys
  gapLabel: { en: "1. Gap (Between items)", es: "🧩 1. Gap (el mas usado)" },
  gapInfo: { en: "Space between grid/flex elements.", es: "Espacio entre los elementos (recuadros)." },
  marginLabel: { en: "2. Margin (External)", es: "📦 2. Margin (espacio externo)" },
  marginInfo: { en: "Space outside the element.", es: "m = margin (afuera del elemento)." },
  paddingLabel: { en: "3. Padding (Internal)", es: "📐 3. Padding (espacio interno)" },
  paddingInfo: { en: "Space inside the element.", es: "p = espacio dentro del recuadro." },

  // Mockup internal texts
  essential: { en: "Only Essential", es: "Solo lo esencial" },
  lessButtons: { en: "Fewer buttons = Less confusion", es: "Menos botones = Menos confusion" },
  thumbZone: { en: "Thumb Zone", es: "Zona del pulgar" },
  easyReach: { en: "Easy to reach", es: "Facil de alcanzar" },
  loading: { en: "Loading content...", es: "Cargando contenido..." },
  confirmed: { en: "Message sent!", es: "Mensaje enviado!" },
  testing: { en: "User A clicked here", es: "Usuario A hizo clic aqui" },
  
  // Reusing some old keys for consistency or creating new ones as needed
  colorsTitle: { en: "Colors & Contrast", es: "Colores y Contraste" },
  typographyTitle: { en: "Typography", es: "Tipografia" },
  spacingTitle: { en: "Spacing", es: "Espaciado" },
  navigationLabel: { en: "Navigation", es: "Navegacion" },
  iconsLabel: { en: "Icons", es: "Iconos" },
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
  navHome: { en: "Home", es: "Inicio" },
  navExplore: { en: "Explore", es: "Explorar" },
  navProfile: { en: "Profile", es: "Perfil" },
  navMore: { en: "More", es: "Mas" },
  navSearch: { en: "Search", es: "Buscar" },
  navSaved: { en: "Saved", es: "Guardado" },
}

export function BestPracticesSection() {
  const [active, setActive] = useState("simplicity")
  const { lang } = useApp()
  const l = (key: keyof typeof copy) => copy[key][lang]

  const practices = [
    {
      id: "simplicity",
      label: l("simplicityLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 17v-10l8 4" />
        </svg>
      ),
      title: l("simplicityTitle"),
      desc: l("simplicityDesc"),
      screen: <SimplicityScreen lang={lang} copy={copy} />,
    },
    {
      id: "navigation",
      label: l("navigationLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.487V6.512a2 2 0 011.171-1.815l5.447-2.724a2 2 0 011.764 0l5.447 2.724A2 2 0 0118 6.512v8.975a2 2 0 01-1.171 1.815l-5.447 2.724a2 2 0 01-1.764 0z" />
        </svg>
      ),
      title: l("navigationTitle"),
      desc: l("navigationDesc"),
      screen: <NavigationScreen lang={lang} copy={copy} />,
    },
    {
      id: "touch",
      label: l("touchLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: l("touchTitle"),
      desc: l("touchDesc"),
      screen: <TouchScreen lang={lang} copy={copy} />,
    },
    {
      id: "speed",
      label: l("speedLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: l("speedTitle"),
      desc: l("speedDesc"),
      screen: <SpeedScreen lang={lang} copy={copy} />,
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
      id: "consistency",
      label: l("consistencyLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: l("consistencyTitle"),
      desc: l("consistencyDesc"),
      screen: <ConsistencyScreen lang={lang} copy={copy} />,
    },
    {
      id: "hierarchy",
      label: l("hierarchyLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
      ),
      title: l("hierarchyTitle"),
      desc: l("hierarchyDesc"),
      screen: <HierarchyScreen lang={lang} copy={copy} />,
    },
    {
      id: "accessibility",
      label: l("accessibilityLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: l("accessibilityTitle"),
      desc: l("accessibilityDesc"),
      screen: <AccessibilityScreen lang={lang} copy={copy} />,
    },
    {
      id: "feedback",
      label: l("feedbackLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: l("feedbackTitle"),
      desc: l("feedbackDesc"),
      screen: <FeedbackScreen lang={lang} copy={copy} />,
    },
    {
      id: "responsive",
      label: l("responsiveLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: l("responsiveTitle"),
      desc: l("responsiveDesc"),
      screen: <ResponsiveScreen lang={lang} copy={copy} />,
    },
    {
      id: "testing",
      label: l("testingLabel"),
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: l("testingTitle"),
      desc: l("testingDesc"),
      screen: <TestingScreen lang={lang} copy={copy} />,
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

function SimplicityScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-4 flex flex-col gap-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-xs font-bold text-gray-800">{l("essential")}</p>
      </div>
      <div className="space-y-3">
        <div className="h-24 bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-center">
          <p className="text-[10px] text-gray-400">Content Area</p>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-xl text-[10px] font-bold shadow-lg shadow-blue-200">
          Primary Action
        </button>
        <p className="text-[9px] text-center text-gray-400">{l("lessButtons")}</p>
      </div>
    </div>
  )
}

function TouchScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-4 flex flex-col overflow-hidden">
      <p className="text-[10px] font-bold text-gray-800 mb-6">{l("touchTitle")}</p>
      <div className="flex-1 relative">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-50 rounded-full opacity-50 flex items-center justify-center">
          <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
            <p className="text-[10px] font-bold text-blue-600">{l("thumbZone")}</p>
          </div>
        </div>
        <div className="space-y-3 relative z-10">
          <button className="w-full h-12 bg-white border-2 border-gray-100 rounded-2xl flex items-center px-4 gap-3 hover:border-blue-400 transition-colors">
            <div className="w-6 h-6 bg-gray-100 rounded-lg" />
            <p className="text-[10px] font-medium text-gray-600">{l("easyReach")}</p>
          </button>
          <button className="w-full h-12 bg-white border-2 border-gray-100 rounded-2xl flex items-center px-4 gap-3 hover:border-blue-400 transition-colors">
            <div className="w-6 h-6 bg-gray-100 rounded-lg" />
            <p className="text-[10px] font-medium text-gray-600">{l("easyReach")}</p>
          </button>
        </div>
      </div>
    </div>
  )
}

function SpeedScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-4 flex flex-col gap-4 overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="w-20 h-4 bg-gray-100 rounded-full" />
        <div className="w-8 h-8 rounded-full bg-gray-100" />
      </div>
      <div className="space-y-4">
        <div className="h-32 bg-gray-50 rounded-2xl overflow-hidden relative">
          <motion.div
            animate={{ x: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-1/2"
          />
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-100 rounded-full w-3/4" />
          <div className="h-3 bg-gray-100 rounded-full w-1/2" />
        </div>
        <div className="flex items-center gap-3 text-blue-600">
          <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-[9px] font-bold">{l("loading")}</p>
        </div>
      </div>
    </div>
  )
}

function ConsistencyScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-4 flex flex-col gap-6 overflow-hidden">
      <div className="space-y-2">
        <p className="text-[8px] text-gray-400 uppercase font-bold">Buttons</p>
        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-[8px] font-bold">Action</button>
          <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-[8px] font-bold">Action</button>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-[8px] text-gray-400 uppercase font-bold">Inputs</p>
        <div className="h-8 bg-gray-50 border border-gray-200 rounded-lg" />
        <div className="h-8 bg-gray-50 border border-gray-200 rounded-lg" />
      </div>
      <div className="space-y-2">
        <p className="text-[8px] text-gray-400 uppercase font-bold">Cards</p>
        <div className="p-2 bg-white border border-gray-100 rounded-xl shadow-sm">
          <div className="w-1/2 h-2 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  )
}

function HierarchyScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-5 flex flex-col gap-4 overflow-hidden">
      <div>
        <p className="text-2xl font-bold text-gray-900 leading-tight">Important Title</p>
        <p className="text-xs text-gray-500 mt-1">Secondary information or subtitle</p>
      </div>
      <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-100">
        <p className="text-[10px] font-bold">Main Call to Action</p>
        <p className="text-[8px] opacity-80 mt-1">This card stands out immediately</p>
      </div>
      <div className="space-y-2">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gray-200" />
            <div className="h-2 bg-gray-100 rounded-full flex-1" />
          </div>
        ))}
      </div>
    </div>
  )
}

function AccessibilityScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-4 flex flex-col gap-4 overflow-hidden">
      <div className="space-y-2">
        <p className="text-[8px] text-gray-400 font-bold uppercase">Contrast Check</p>
        <div className="flex gap-2">
          <div className="flex-1 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <p className="text-[10px] text-white font-bold">AAA Pass</p>
          </div>
          <div className="flex-1 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center">
            <p className="text-[10px] text-gray-300">Fail</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-[8px] text-gray-400 font-bold uppercase">Text Size</p>
        <p className="text-sm text-gray-800">Minimum readable size: 14px</p>
        <p className="text-[10px] text-gray-400 italic">Avoid very small text (under 12px)</p>
      </div>
      <div className="mt-4 p-3 bg-gray-900 rounded-xl flex items-center gap-3">
        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
        <p className="text-[8px] text-white font-mono">Screen reader active</p>
      </div>
    </div>
  )
}

function FeedbackScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-4 flex flex-col items-center justify-center gap-6 overflow-hidden">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
      <div className="text-center">
        <p className="text-sm font-bold text-gray-800">{l("confirmed")}</p>
        <p className="text-[10px] text-gray-400 mt-1">Feedback gives users confidence</p>
      </div>
      <button className="px-6 py-2 bg-gray-100 rounded-full text-[9px] font-bold text-gray-600">
        Dismiss
      </button>
    </div>
  )
}

function ResponsiveScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white flex flex-col overflow-hidden">
      <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
        <div className="w-12 h-3 bg-gray-200 rounded-full" />
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-blue-600 rounded-sm" />
          <div className="w-3 h-3 bg-gray-200 rounded-sm" />
        </div>
      </div>
      <div className="flex-1 p-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="aspect-square bg-gray-100 rounded-xl" />
          <div className="aspect-square bg-gray-100 rounded-xl" />
          <div className="col-span-2 h-20 bg-gray-100 rounded-xl" />
        </div>
      </div>
      <div className="p-3 bg-gray-900 text-[6px] text-white/50 text-center font-mono">
        viewport: 375x812 (mobile)
      </div>
    </div>
  )
}

function TestingScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-4 flex flex-col gap-4 overflow-hidden relative">
      <div className="flex justify-between items-center">
        <p className="text-[10px] font-bold text-gray-800">Analytics Heatmap</p>
        <div className="w-6 h-6 rounded-full bg-gray-100" />
      </div>
      <div className="flex-1 bg-gray-50 rounded-2xl relative overflow-hidden border border-gray-100">
        <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-red-400 rounded-full blur-xl opacity-40 animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-orange-300 rounded-full blur-xl opacity-30" />
        <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-blue-400 rounded-full blur-2xl opacity-20" />
        
        <div className="absolute top-10 left-10 p-1 bg-white shadow-md rounded text-[7px] border border-gray-100">
          {l("testing")}
        </div>
      </div>
      <p className="text-[8px] text-gray-400 text-center italic">Iteration based on real usage</p>
    </div>
  )
}

function ColorsScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  // Keeping this for backward compatibility if needed, but not in main practices list
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-4 flex flex-col gap-3 overflow-hidden">
      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">{l("colorsTitle")}</p>
      <div className="space-y-1.5">
        <p className="text-[8px] text-gray-400">Primary action</p>
        <button className="w-full py-2.5 rounded-xl text-white text-[10px] font-bold" style={{ background: "oklch(0.55 0.22 264)" }}>
          Get Started
        </button>
      </div>
      <div className="space-y-1.5">
        <p className="text-[8px] text-gray-400">Secondary action</p>
        <button className="w-full py-2.5 rounded-xl text-[10px] font-bold border-2" style={{ borderColor: "oklch(0.55 0.22 264)", color: "oklch(0.55 0.22 264)" }}>
          Learn More
        </button>
      </div>
      <div className="space-y-1.5">
        <p className="text-[8px] text-gray-400">Error / Destructive</p>
        <button className="w-full py-2.5 rounded-xl text-white text-[10px] font-bold bg-red-500">
          Delete Account
        </button>
      </div>
    </div>
  )
}

function TypographyScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  // Keeping this for backward compatibility
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-4 flex flex-col gap-3 overflow-hidden">
      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Type Hierarchy</p>
      <div className="space-y-3">
        <p className="text-xl font-bold text-gray-900 leading-tight">Design Matters</p>
        <p className="text-sm font-bold text-gray-800">Section Title Here</p>
        <p className="text-[11px] font-semibold text-gray-700">Card or item label</p>
        <p className="text-[9px] text-gray-600 leading-relaxed">This is regular body text used for descriptions.</p>
      </div>
    </div>
  )
}

function SpacingScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-4 flex flex-col gap-6 overflow-hidden">
      {/* Gap Demo */}
      <div className="space-y-2">
        <p className="text-[10px] font-bold text-gray-800">{l("spacingGap")}</p>
        <div className="grid grid-cols-2 gap-3 bg-blue-50 p-2 rounded-xl border border-blue-100">
          <div className="h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-[8px] font-bold">1</div>
          <div className="h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-[8px] font-bold">2</div>
        </div>
        <p className="text-[8px] text-gray-400 italic leading-tight">{l("spacingGapDesc")}</p>
        <div className="bg-gray-900 rounded-lg p-2 text-[6px] text-white font-mono leading-tight">
          {`<div class="grid gap-4">...</div>`}
        </div>
      </div>

      {/* Margin Demo */}
      <div className="space-y-2">
        <p className="text-[10px] font-bold text-gray-800">{l("spacingMargin")}</p>
        <div className="bg-orange-50 p-2 rounded-xl border border-orange-100 flex">
          <div className="m-2 h-8 w-1/2 bg-orange-500 rounded-lg flex items-center justify-center text-white text-[8px] font-bold">Caja</div>
        </div>
        <p className="text-[8px] text-gray-400 italic leading-tight">{l("spacingMarginDesc")}</p>
        <div className="bg-gray-900 rounded-lg p-2 text-[6px] text-white font-mono leading-tight">
          {`<div class="m-4">Elemento</div>`}
        </div>
      </div>

      {/* Padding Demo */}
      <div className="space-y-2">
        <p className="text-[10px] font-bold text-gray-800">{l("spacingPadding")}</p>
        <div className="bg-green-50 rounded-xl border border-green-100">
          <div className="p-4 bg-green-500 rounded-lg text-white text-[8px] font-bold text-center">
            Contenido
          </div>
        </div>
        <p className="text-[8px] text-gray-400 italic leading-tight">{l("spacingPaddingDesc")}</p>
        <div className="bg-gray-900 rounded-lg p-2 text-[6px] text-white font-mono leading-tight">
          {`<div class="p-4">Contenido</div>`}
        </div>
      </div>
    </div>
  )
}

function NavigationScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  const bottomItems = [
    { key: "navHome", active: true },
    { key: "navSearch", active: false },
    { key: "navSaved", active: false },
    { key: "navProfile", active: false },
  ] as const

  return (
    <div className="h-full bg-white flex flex-col overflow-hidden">
      <div className="flex-1 p-4">
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-3">Navigation</p>
        <div className="space-y-1.5">
          {[80, 60, 70, 50].map((w, i) => (
            <div key={i} className="h-1.5 bg-gray-100 rounded-full" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
      <div className="border-t border-gray-100 flex justify-around py-2.5 px-3">
        {bottomItems.map(({ key, active }) => (
          <div key={key} className="flex flex-col items-center gap-0.5">
            <div className={`w-5 h-5 rounded-lg ${active ? "bg-primary" : "bg-gray-200"}`} />
            <p className={`text-[7px] ${active ? "text-primary font-semibold" : "text-gray-400"}`}>{l(key)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function IconScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  // Keeping this for backward compatibility (could be used in Hierarchy or Accessibility)
  const l = (key: keyof typeof copy) => copy[key][lang]
  return (
    <div className="h-full bg-white p-4 flex flex-col gap-3 overflow-hidden">
      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Iconography</p>
      <div className="grid grid-cols-1 gap-2">
        <div className="bg-green-50 rounded-xl p-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <p className="text-[8px] text-gray-600">Home</p>
          </div>
        </div>
      </div>
    </div>
  )
}

