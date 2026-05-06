"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ComparisonSection } from "@/components/comparison-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { BestPracticesSection } from "@/components/best-practices-section"
import { AppExamplesSection } from "@/components/app-examples-section"
import { ToolsSection } from "@/components/tools-section"
import { PlaygroundSection } from "@/components/playground-section"
import { useApp } from "@/components/app-provider"

const footerCopy = {
  tagline: {
    en: "An interactive guide to mobile UI design principles — built with React & Tailwind CSS",
    es: "Una guia interactiva sobre principios de diseno de UI movil — construida con React y Tailwind CSS",
  },
  links: {
    en: ["Compare", "Practices", "Playground"],
    es: ["Comparar", "Practicas", "Playground"],
  },
}

export default function Page() {
  const { lang } = useApp()

  return (
    <main className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <ComparisonSection />
      <AdvantagesSection />
      <BestPracticesSection />
      <AppExamplesSection />
      <ToolsSection />
      <PlaygroundSection />

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-xl flex items-center justify-center text-white text-xs font-bold"
              style={{
                background: "linear-gradient(135deg, oklch(0.55 0.22 264), oklch(0.62 0.19 300))",
              }}
            >
              UI
            </div>
            <span className="font-serif font-bold text-background/90">Mobile UI Design</span>
          </div>
          <p className="text-sm text-background/50 text-center">
            {footerCopy.tagline[lang]}
          </p>
          <div className="flex gap-4 text-sm text-background/50">
            {["#compare", "#practices", "#playground"].map((href, i) => (
              <a key={href} href={href} className="hover:text-background transition-colors">
                {footerCopy.links[lang][i]}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
