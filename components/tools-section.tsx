"use client"

import { useApp } from "./app-provider"

const copy = {
  section: { en: "Section 05", es: "Seccion 05" },
  title: { en: "Tools of the Trade", es: "Herramientas del Oficio" },
  subtitle: {
    en: "The right tools can accelerate your UI design workflow from concept to production.",
    es: "Las herramientas correctas pueden acelerar tu flujo de trabajo de diseno UI desde el concepto hasta la produccion.",
  },
  figmaDesc: {
    en: "The industry-standard collaborative design tool for prototyping, wireframing, and creating design systems.",
    es: "La herramienta de diseno colaborativo estandar de la industria para prototipado, wireframes y sistemas de diseno.",
  },
  figmaTag1: { en: "Prototyping", es: "Prototipado" },
  figmaTag2: { en: "Collaboration", es: "Colaboracion" },
  figmaTag3: { en: "Free tier", es: "Plan gratuito" },
  xdDesc: {
    en: "Adobe's vector-based UI/UX design tool with powerful prototyping and handoff capabilities.",
    es: "La herramienta de diseno UI/UX vectorial de Adobe con potentes capacidades de prototipado y transferencia.",
  },
  xdTag1: { en: "Vectors", es: "Vectores" },
  xdTag2: { en: "Handoff", es: "Transferencia" },
  xdTag3: { en: "CC Integration", es: "Integracion CC" },
  tailwindDesc: {
    en: "A utility-first CSS framework that lets you build beautiful, responsive UIs directly in your markup.",
    es: "Un framework CSS de utilidades primero que te permite construir UIs hermosas y responsivas directamente en tu marcado.",
  },
  tailwindTag1: { en: "Utility-first", es: "Utilidades primero" },
  tailwindTag2: { en: "Responsive", es: "Responsivo" },
  tailwindTag3: { en: "Open source", es: "Codigo abierto" },
  reactDesc: {
    en: "The most popular JavaScript library for building interactive, component-driven user interfaces.",
    es: "La biblioteca JavaScript mas popular para construir interfaces de usuario interactivas basadas en componentes.",
  },
  reactTag1: { en: "Components", es: "Componentes" },
  reactTag2: { en: "SPA", es: "SPA" },
  reactTag3: { en: "Hooks", es: "Hooks" },
}

export function ToolsSection() {
  const { lang } = useApp()
  const l = (key: keyof typeof copy) => copy[key][lang]

  const tools = [
    {
      name: "Figma",
      desc: l("figmaDesc"),
      color: "from-pink-500 to-orange-400",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
          <rect x="8" y="2" width="8" height="8" rx="4" fill="#F24E1E" />
          <rect x="2" y="10" width="8" height="8" rx="4" fill="#FF7262" />
          <rect x="14" y="10" width="8" height="8" rx="4" fill="#1ABCFE" />
          <rect x="2" y="2" width="8" height="8" rx="4" fill="#A259FF" />
          <rect x="2" y="18" width="8" height="8" rx="4" fill="#0ACF83" />
        </svg>
      ),
      tags: [l("figmaTag1"), l("figmaTag2"), l("figmaTag3")],
    },
    {
      name: "Adobe XD",
      desc: l("xdDesc"),
      color: "from-purple-600 to-pink-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
          <rect width="24" height="24" rx="4" fill="#470137" />
          <path d="M7 15.5L5 19H3.5L6.5 12.5L3.5 6H5L7 9.5L9 6H10.5L7.5 12.5L10.5 19H9L7 15.5Z" fill="#FF61F6" />
          <path d="M14 6h2.5c2.5 0 4 1.5 4 3.5 0 2-1.5 3.5-4 3.5H15.5V19H14V6zm1.5 5.5H16c1.5 0 2.5-.75 2.5-2s-1-2-2.5-2h-.5v4z" fill="#FF61F6" />
        </svg>
      ),
      tags: [l("xdTag1"), l("xdTag2"), l("xdTag3")],
    },
    {
      name: "Tailwind CSS",
      desc: l("tailwindDesc"),
      color: "from-teal-400 to-cyan-500",
      icon: (
        <svg viewBox="0 0 54 33" className="w-8 h-8" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
            fill="#38BDF8"
          />
        </svg>
      ),
      tags: [l("tailwindTag1"), l("tailwindTag2"), l("tailwindTag3")],
    },
    {
      name: "React",
      desc: l("reactDesc"),
      color: "from-sky-400 to-blue-600",
      icon: (
        <svg viewBox="-11.5 -10.23 23 20.46" className="w-8 h-8">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <ellipse rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" />
          <ellipse rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120)" />
        </svg>
      ),
      tags: [l("reactTag1"), l("reactTag2"), l("reactTag3")],
    },
  ]

  return (
    <section id="tools" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">{l("section")}</span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            {l("title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
            {l("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group"
            >
              <div
                className={`h-28 bg-gradient-to-br ${tool.color} flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  {tool.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">{tool.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tool.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
