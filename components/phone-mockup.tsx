"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface PhoneMockupProps {
  children: ReactNode
  className?: string
  screenClassName?: string
  size?: "sm" | "md" | "lg"
}

const sizeMap = {
  sm: { outer: "w-36 h-64", notchW: "w-12", notchH: "h-3", notchTop: "top-2", safeTop: "pt-6", safeBottom: "pb-4" },
  md: { outer: "w-48 h-[22rem]", notchW: "w-16", notchH: "h-3", notchTop: "top-3", safeTop: "pt-7", safeBottom: "pb-5" },
  lg: { outer: "w-56 h-[28rem]", notchW: "w-16", notchH: "h-3.5", notchTop: "top-3", safeTop: "pt-8", safeBottom: "pb-5" },
}

export function PhoneMockup({ children, className, screenClassName, size = "md" }: PhoneMockupProps) {
  const s = sizeMap[size]
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-[2.5rem] bg-gray-900 shadow-2xl border-4 border-gray-800",
        s.outer,
        className
      )}
    >
      {/* Dynamic island / notch — sits on top of screen */}
      <div className={cn("absolute left-1/2 -translate-x-1/2 bg-gray-900 rounded-full z-20", s.notchW, s.notchH, s.notchTop)} />

      {/* Screen — fills interior with small rounding inset */}
      <div
        className={cn(
          "absolute inset-[3px] overflow-hidden rounded-[2rem] bg-white flex flex-col",
          screenClassName
        )}
      >
        {/* Top safe area spacer */}
        <div className={cn("flex-shrink-0", s.safeTop)} />
        {/* Scrollable content area */}
        <div className="flex-1 overflow-hidden min-h-0">
          {children}
        </div>
        {/* Bottom safe area spacer */}
        <div className={cn("flex-shrink-0", s.safeBottom)} />
      </div>

      {/* Home indicator — outside screen, on the bezel */}
      <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-600 rounded-full z-20" />
    </div>
  )
}
