"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, X } from "lucide-react"
import { ContactForm } from "./contact-form"

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const toggleForm = () => {
    // Play sound effect
    const audio = new Audio("/switch.mp3")
    audio.volume = 0.3
    audio.play().catch(() => {})

    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        className={`fixed bottom-4 right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors duration-300 ${
          isOpen
            ? "border-pink-600 bg-pink-900/20 shadow-[0_0_15px_rgba(219,39,119,0.5)]"
            : "border-cyan-700 bg-black/50 hover:border-cyan-600"
        }`}
        onClick={toggleForm}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="h-5 w-5 text-pink-500" />
        ) : (
          <Mail className={`h-5 w-5 ${isHovered ? "text-cyan-400" : "text-cyan-600"}`} />
        )}

        {/* Pulse effect */}
        {isHovered && !isOpen && (
          <motion.div
            initial={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 rounded-full border-2 border-cyan-500"
          />
        )}
      </motion.button>

      {/* Contact form modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) toggleForm()
            }}
          >
            <ContactForm onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
