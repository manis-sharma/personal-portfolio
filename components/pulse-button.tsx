"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PulseButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "danger"
  onClick?: () => void
  className?: string
}

export function PulseButton({ children, variant = "primary", onClick, className }: PulseButtonProps) {
  const [isPulsing, setIsPulsing] = useState(false)

  const handleClick = () => {
    setIsPulsing(true)
    // Play beep sound
    const audio = new Audio("/beep.mp3")
    audio.volume = 0.2
    audio.play().catch(() => {})

    // Reset pulse after animation completes
    setTimeout(() => setIsPulsing(false), 1000)

    // Call onClick handler if provided
    if (onClick) onClick()
  }

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
      case "secondary":
        return "border-pink-500 text-pink-400 hover:bg-pink-500/10"
      case "danger":
        return "border-red-500 text-red-400 hover:bg-red-500/10"
      default:
        return "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
    }
  }

  const getGlowColor = () => {
    switch (variant) {
      case "primary":
        return "rgba(6, 182, 212, 0.7)"
      case "secondary":
        return "rgba(236, 72, 153, 0.7)"
      case "danger":
        return "rgba(239, 68, 68, 0.7)"
      default:
        return "rgba(6, 182, 212, 0.7)"
    }
  }

  return (
    <div className="relative">
      {/* Pulse effect */}
      {isPulsing && (
        <motion.div
          initial={{ opacity: 0.7, scale: 1 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "absolute inset-0 rounded-md",
            variant === "primary" && "bg-cyan-500/30",
            variant === "secondary" && "bg-pink-500/30",
            variant === "danger" && "bg-red-500/30",
          )}
        />
      )}

      {/* Button */}
      <button
        onClick={handleClick}
        className={cn(
          "relative px-4 py-2 border rounded-md text-sm font-bold tracking-wider transition-colors duration-300",
          "hover:shadow-[0_0_10px_rgba(0,0,0,0.5)]",
          "active:translate-y-0.5",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black",
          getVariantStyles(),
          variant === "primary" && "focus:ring-cyan-500/50",
          variant === "secondary" && "focus:ring-pink-500/50",
          variant === "danger" && "focus:ring-red-500/50",
          className,
        )}
        style={{
          boxShadow: isPulsing ? `0 0 15px ${getGlowColor()}` : undefined,
        }}
      >
        {children}
      </button>
    </div>
  )
}
