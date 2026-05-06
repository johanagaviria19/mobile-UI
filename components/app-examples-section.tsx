"use client"

import { PhoneMockup } from "./phone-mockup"
import { useApp } from "./app-provider"
import { motion } from "framer-motion"

const copy = {
  section: { en: "Section 04", es: "Seccion 04" },
  title: { en: "Real App Examples", es: "Ejemplos de Apps Reales" },
  subtitle: {
    en: "Inspired by patterns used in popular apps - focused on what makes each design great.",
    es: "Inspirado en patrones usados en apps populares - enfocado en lo que hace a cada diseno excelente.",
  },
  socialTitle: { en: "Social Feed", es: "Feed Social" },
  socialDesc: {
    en: "Clean grid layout, consistent card sizing, intuitive icon-only top nav.",
    es: "Diseno de cuadricula limpio, tamano de tarjeta consistente, navegacion superior solo con iconos.",
  },
  messagingTitle: { en: "Messaging App", es: "App de Mensajeria" },
  messagingDesc: {
    en: "Simple list layout, clear avatar hierarchy, floating action button.",
    es: "Diseno de lista simple, jerarquia de avatar clara, boton de accion flotante.",
  },
  musicTitle: { en: "Music Player", es: "Reproductor de Musica" },
  musicDesc: {
    en: "Dark UI with strong typographic hierarchy, high-contrast controls.",
    es: "UI oscura con fuerte jerarquia tipografica, controles de alto contraste.",
  },
  // Social screen
  photostream: { en: "Photostream", es: "Fotostream" },
  you: { en: "You", es: "Tu" },
  post: { en: "Great UI = great UX. Always consider your users.", es: "Gran UI = gran UX. Siempre considera a tus usuarios." },
  // Messaging screen
  messages: { en: "Messages", es: "Mensajes" },
  searchMessages: { en: "Search messages", es: "Buscar mensajes" },
  msgTeam: { en: "Design Team", es: "Equipo de Diseno" },
  msgTeamText: { en: "Let's review the mockups!", es: "Revisemos los mockups!" },
  msgAlex: { en: "Alex K.", es: "Alex K." },
  msgAlexText: { en: "Did you see the new UI kit?", es: "Viste el nuevo kit de UI?" },
  msgJordan: { en: "Jordan", es: "Jordan" },
  msgJordanText: { en: "Thanks for the feedback!", es: "Gracias por el feedback!" },
  msgSarah: { en: "Sarah", es: "Sarah" },
  msgSarahText: { en: "Looking great! Ship it", es: "Se ve genial! Lancenlo" },
  chatTab: { en: "Chat", es: "Chat" },
  statusTab: { en: "Status", es: "Estado" },
  callsTab: { en: "Calls", es: "Llamadas" },
  // Music screen
  nowPlaying: { en: "Now Playing", es: "Reproduciendo Ahora" },
  trackName: { en: "Midnight Chill", es: "Relax de Medianoche" },
  artist: { en: "Lo-fi Collective", es: "Colectivo Lo-fi" },
  musicHome: { en: "Home", es: "Inicio" },
  musicSearch: { en: "Search", es: "Buscar" },
  musicLib: { en: "Library", es: "Biblioteca" },
}

export function AppExamplesSection() {
  const { lang } = useApp()
  const l = (key: keyof typeof copy) => copy[key][lang]

  return (
    <section id="examples" className="py-24 bg-secondary/30">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {/* Social Feed */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <PhoneMockup size="lg">
              <SocialFeedScreen lang={lang} copy={copy} />
            </PhoneMockup>
            <div className="text-center max-w-[200px]">
              <p className="font-serif font-bold text-foreground mb-1">{l("socialTitle")}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{l("socialDesc")}</p>
            </div>
          </motion.div>

          {/* Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <PhoneMockup size="lg">
              <MessagingScreen lang={lang} copy={copy} />
            </PhoneMockup>
            <div className="text-center max-w-[200px]">
              <p className="font-serif font-bold text-foreground mb-1">{l("messagingTitle")}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{l("messagingDesc")}</p>
            </div>
          </motion.div>

          {/* Music Player */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <PhoneMockup size="lg">
              <MusicPlayerScreen lang={lang} copy={copy} />
            </PhoneMockup>
            <div className="text-center max-w-[200px]">
              <p className="font-serif font-bold text-foreground mb-1">{l("musicTitle")}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{l("musicDesc")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ---- Screen components ---- */

function SocialFeedScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  const stories = [
    { name: l("you"), gradient: true },
    { name: "Alex" },
    { name: "Sam" },
    { name: "Jo" },
  ]

  return (
    <div className="h-full bg-white flex flex-col overflow-hidden">
      <div className="flex justify-between items-center px-3 py-2 border-b border-gray-100">
        <p className="text-sm font-bold text-gray-900">{l("photostream")}</p>
        <div className="flex gap-2 text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </div>

      {/* Stories */}
      <div className="flex gap-2 px-3 py-2 border-b border-gray-100 overflow-hidden">
        {stories.map(({ name, gradient }) => (
          <div key={name} className="flex flex-col items-center gap-0.5 flex-shrink-0">
            <div
              className={`w-9 h-9 rounded-full border-2 ${gradient ? "border-gray-300 bg-gray-100" : "border-transparent"}`}
              style={
                !gradient
                  ? { background: "linear-gradient(135deg, #f59e0b, #ef4444, oklch(0.62 0.19 300))", padding: "2px" }
                  : {}
              }
            >
              <div className="w-full h-full rounded-full bg-gray-200" />
            </div>
            <p className="text-[7px] text-gray-500">{name}</p>
          </div>
        ))}
      </div>

      {/* Post */}
      <div className="flex-1 overflow-hidden">
        <div className="px-3 py-2">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-5 h-5 rounded-full bg-gray-200" />
            <p className="text-[9px] font-bold text-gray-900">designer_pro</p>
          </div>
          <div className="w-full h-28 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl mb-1.5" />
          <div className="flex gap-2 mb-1">
            <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <p className="text-[8px] text-gray-800">
            <span className="font-bold">designer_pro</span> {l("post")}
          </p>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-gray-100 flex justify-around py-2 px-4">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className={`w-4 h-4 rounded ${i === 0 ? "bg-gray-900" : "bg-gray-200"}`} />
        ))}
      </div>
    </div>
  )
}

function MessagingScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]

  const chats = [
    { nameKey: "msgTeam" as const, msgKey: "msgTeamText" as const, time: "9:41", unread: 3, color: "from-blue-400 to-blue-600" },
    { nameKey: "msgAlex" as const, msgKey: "msgAlexText" as const, time: "9:15", unread: 1, color: "from-purple-400 to-purple-600" },
    { nameKey: "msgJordan" as const, msgKey: "msgJordanText" as const, time: lang === "en" ? "Tue" : "Mar", unread: 0, color: "from-green-400 to-green-600" },
    { nameKey: "msgSarah" as const, msgKey: "msgSarahText" as const, time: lang === "en" ? "Mon" : "Lun", unread: 0, color: "from-orange-400 to-red-500" },
  ]
  const tabs = [l("chatTab"), l("statusTab"), l("callsTab")]

  return (
    <div className="h-full bg-white flex flex-col overflow-hidden">
      <div className="px-3 pt-1 pb-2">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-bold text-gray-900">{l("messages")}</p>
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl px-3 py-1.5 flex items-center gap-2">
          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p className="text-[8px] text-gray-400">{l("searchMessages")}</p>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-3 space-y-0.5">
        {chats.map((chat) => (
          <div key={chat.nameKey} className="flex items-center gap-2.5 py-2 border-b border-gray-50 last:border-0">
            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${chat.color} flex-shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-bold text-gray-900">{l(chat.nameKey)}</p>
                <p className="text-[7px] text-gray-400">{chat.time}</p>
              </div>
              <p className="text-[8px] text-gray-500 truncate">{l(chat.msgKey)}</p>
            </div>
            {chat.unread > 0 && (
              <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <p className="text-[7px] text-white font-bold">{chat.unread}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FAB */}
      <div className="relative">
        <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full shadow-lg flex items-center justify-center" style={{ background: "oklch(0.55 0.22 264)" }}>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>
      </div>

      <div className="border-t border-gray-100 flex justify-around py-2">
        {tabs.map((item, i) => (
          <div key={item} className="flex flex-col items-center gap-0.5">
            <div className={`w-4 h-4 rounded ${i === 0 ? "bg-primary" : "bg-gray-200"}`} />
            <p className={`text-[7px] ${i === 0 ? "text-primary font-semibold" : "text-gray-400"}`}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MusicPlayerScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]
  const navItems = [l("musicHome"), l("musicSearch"), l("musicLib")]

  return (
    <div className="h-full flex flex-col overflow-hidden bg-black text-white">
      <div className="px-4 pt-1 pb-2 flex items-center justify-between">
        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">{l("nowPlaying")}</p>
        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </div>

      {/* Album art */}
      <div className="mx-4 mb-2">
        <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 flex items-center justify-center shadow-2xl">
          <svg className="w-12 h-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>
      </div>

      {/* Track info */}
      <div className="px-4 mb-2 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-white leading-tight">{l("trackName")}</p>
          <p className="text-[9px] text-gray-400">{l("artist")}</p>
        </div>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>

      {/* Progress */}
      <div className="px-4 mb-2">
        <div className="h-1 bg-gray-700 rounded-full">
          <div className="h-1 rounded-full w-2/5" style={{ background: "oklch(0.65 0.18 160)" }} />
        </div>
        <div className="flex justify-between mt-1">
          <p className="text-[7px] text-gray-500">1:24</p>
          <p className="text-[7px] text-gray-500">3:42</p>
        </div>
      </div>

      {/* Controls */}
      <div className="px-4 flex items-center justify-between mb-2">
        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
        </svg>
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4l12 8-12 8V4z" style={{ transform: "scaleX(-1) translateX(-100%)" }} />
          <path d="M18 4v16" strokeWidth="2" />
        </svg>
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "oklch(0.65 0.18 160)" }}>
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
        </svg>
        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 17H7l4-4V8l2 2v3l4 4z" />
        </svg>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-gray-800 flex justify-around py-2">
        {navItems.map((item, i) => (
          <div key={item} className="flex flex-col items-center gap-0.5">
            <div className="w-4 h-4 rounded" style={{ background: i === 0 ? "oklch(0.65 0.18 160)" : "#374151" }} />
            <p className="text-[7px]" style={{ color: i === 0 ? "oklch(0.65 0.18 160)" : "#6b7280" }}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
