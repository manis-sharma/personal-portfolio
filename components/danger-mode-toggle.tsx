"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export function DangerModeToggle() {
  const [isActive, setIsActive] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleToggle = () => {
    // Play sound effect
    const audio = new Audio("/switch.mp3")
    audio.volume = 0.3
    audio.play().catch(() => {})

    setIsActive(!isActive)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full mb-2 right-0 bg-black/80 border border-pink-500/30 rounded-md px-3 py-2 text-xs text-pink-300 w-40"
        >
          {isActive ? "Deactivate Danger Mode" : "Activate Danger Mode"}
          <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-black border-r border-b border-pink-500/30"></div>
        </motion.div>
      )}

      {/* Toggle button */}
      <button
        onClick={handleToggle}
        className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors duration-300 ${
          isActive
            ? "border-pink-600 bg-pink-900/20 shadow-[0_0_15px_rgba(219,39,119,0.5)]"
            : "border-gray-700 bg-black/50 hover:border-pink-600/50"
        }`}
      >
        <AlertTriangle className={`h-5 w-5 ${isActive ? "text-pink-500" : "text-gray-500"}`} />

        {/* Pulse effect when active */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 rounded-full border-2 border-pink-500"
          />
        )}
      </button>
    </motion.div>
  )
}
