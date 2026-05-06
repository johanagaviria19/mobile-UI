"use client"

import { PhoneMockup } from "./phone-mockup"
import { useApp } from "./app-provider"
import { motion } from "framer-motion"

const copy = {
  section: { en: "Section 02", es: "Seccion 02" },
  title: { en: "Advantages for Users", es: "Ventajas para los Usuarios" },
  subtitle: {
    en: "Great UI design creates measurable benefits that keep users engaged and coming back.",
    es: "Un gran diseno de UI genera beneficios medibles que mantienen a los usuarios comprometidos y volviendo.",
  },
  adv1Title: { en: "Easy to Use", es: "Facil de Usar" },
  adv1Desc: {
    en: "Intuitive interfaces reduce cognitive load and let users focus on their goals, not the interface.",
    es: "Las interfaces intuitivas reducen la carga cognitiva y permiten a los usuarios centrarse en sus objetivos.",
  },
  adv2Title: { en: "Faster Navigation", es: "Navegacion mas Rapida" },
  adv2Desc: {
    en: "Clear visual hierarchy and well-placed elements help users find what they need in fewer taps.",
    es: "La jerarquia visual clara y los elementos bien ubicados ayudan a los usuarios a encontrar lo que necesitan en menos toques.",
  },
  adv3Title: { en: "Accessibility", es: "Accesibilidad" },
  adv3Desc: {
    en: "Thoughtful design ensures everyone, including users with disabilities, can use your app effectively.",
    es: "El diseno cuidadoso asegura que todos, incluidas personas con discapacidades, puedan usar la app eficazmente.",
  },
  adv4Title: { en: "Less Frustration", es: "Menos Frustracion" },
  adv4Desc: {
    en: "Well-designed feedback, error messages, and flows prevent user errors and reduce frustration.",
    es: "Los mensajes de error, retroalimentacion y flujos bien disenados previenen errores y reducen la frustracion.",
  },
  loginLabel: { en: "Simple 2-step login", es: "Inicio de sesion en 2 pasos" },
  step1: { en: "Step 1: Enter Email", es: "Paso 1: Ingresa tu Email" },
  step1Sub: { en: "We'll send a secure link to your inbox", es: "Enviaremos un enlace seguro a tu correo" },
  emailLabel: { en: "Email address", es: "Correo electronico" },
  emailVal: { en: "user@example.com", es: "usuario@ejemplo.com" },
  sendBtn: { en: "Send Login Link", es: "Enviar Enlace" },
  or: { en: "or", es: "o" },
  google: { en: "Continue with Google", es: "Continuar con Google" },
  apple: { en: "Continue with Apple", es: "Continuar con Apple" },
}

export function AdvantagesSection() {
  const { lang } = useApp()
  const l = (key: keyof typeof copy) => copy[key][lang]

  const advantages = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: l("adv1Title"),
      desc: l("adv1Desc"),
      color: "oklch(0.55 0.22 264)",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: l("adv2Title"),
      desc: l("adv2Desc"),
      color: "oklch(0.62 0.19 300)",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: l("adv3Title"),
      desc: l("adv3Desc"),
      color: "oklch(0.65 0.18 200)",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: l("adv4Title"),
      desc: l("adv4Desc"),
      color: "oklch(0.72 0.15 150)",
    },
  ]

  return (
    <section id="advantages" className="py-24 bg-secondary/30">
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

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Cards grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {advantages.map((adv, idx) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200"
                  style={{ background: adv.color }}
                >
                  {adv.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">{adv.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Login flow mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 flex flex-col items-center gap-3"
          >
            <p className="text-sm font-semibold text-muted-foreground mb-2">{l("loginLabel")}</p>
            <PhoneMockup size="lg">
              <LoginFlowScreen lang={lang} copy={copy} />
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LoginFlowScreen({ lang, copy }: { lang: "en" | "es"; copy: typeof copy }) {
  const l = (key: keyof typeof copy) => copy[key][lang]

  return (
    <div className="h-full bg-white flex flex-col overflow-hidden">
      {/* Top decoration */}
      <div
        className="h-28 flex items-center justify-center"
        style={{ background: "linear-gradient(160deg, oklch(0.55 0.22 264) 0%, oklch(0.62 0.19 300) 100%)" }}
      >
        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>

      <div className="flex-1 px-5 pt-6 flex flex-col">
        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-6 justify-center">
          <div
            className="w-6 h-6 rounded-full text-white text-[9px] font-bold flex items-center justify-center"
            style={{ background: "oklch(0.55 0.22 264)" }}
          >
            1
          </div>
          <div className="flex-1 h-0.5 bg-primary rounded-full max-w-[30px]" />
          <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-400 text-[9px] font-bold flex items-center justify-center">
            2
          </div>
        </div>

        <p className="text-xs font-bold text-gray-800 mb-1">{l("step1")}</p>
        <p className="text-[9px] text-gray-400 mb-4">{l("step1Sub")}</p>

        {/* Email input */}
        <div className="border-2 border-primary rounded-xl px-3 py-2 mb-3">
          <p className="text-[8px] text-gray-400 mb-0.5">{l("emailLabel")}</p>
          <p className="text-[10px] text-gray-800">{l("emailVal")}</p>
        </div>

        {/* CTA */}
        <button
          className="w-full py-2.5 rounded-2xl text-white text-[10px] font-bold mt-1"
          style={{ background: "oklch(0.55 0.22 264)" }}
        >
          {l("sendBtn")}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 h-px bg-gray-100" />
          <p className="text-[8px] text-gray-400">{l("or")}</p>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Social login */}
        <button className="w-full py-2 rounded-xl border border-gray-200 text-[9px] text-gray-600 flex items-center justify-center gap-2 mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          {l("google")}
        </button>
        <button className="w-full py-2 rounded-xl border border-gray-200 text-[9px] text-gray-600 flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-gray-900 rounded-full" />
          {l("apple")}
        </button>
      </div>
    </div>
  )
}
