"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, X, Loader2 } from "lucide-react"
import { PulseButton } from "./pulse-button"




interface FormData {
  name: string
  email: string
  message: string
}

export function ContactForm({ onClose }: { onClose?: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([])
  const formRef = useRef<HTMLFormElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
    // Play subtle key sound
    const audio = new Audio("/key.mp3")
    audio.volume = 0.1
    audio.play().catch(() => {})
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const createParticles = (x: number, y: number) => {
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
    }))
    setParticles((prev) => [...prev, ...newParticles])

    // Remove particles after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)))
    }, 1000)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (Math.random() > 0.7) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      createParticles(x, y)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Play voice prompt
    if (!audioRef.current) {
      audioRef.current = new Audio("/contact-protocol.mp3")
      audioRef.current.volume = 0.5
    }
    audioRef.current.play().catch(() => {})

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after showing success message
    setTimeout(() => {
      if (onClose) {
        onClose()
      } else {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", message: "" })
      }
    }, 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative w-full max-w-md mx-auto border border-cyan-500/30 rounded-md bg-black/80 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
    >
      {/* Close button if in modal mode */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-cyan-400 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      )}

      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text mb-2">
          ESTABLISH CONNECTION
        </h2>
        <p className="text-gray-400 text-sm">Secure transmission channel initialized</p>
      </div>

      {/* Form */}
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Name field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs text-gray-400 flex items-center gap-2">
                <span className="text-cyan-400">&gt;</span> IDENTIFIER
              </label>
              <div
                className={`relative border ${
                  focusedField === "name" ? "border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]" : "border-gray-700"
                } rounded-md transition-all duration-300`}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  required
                  className="w-full bg-black/50 text-gray-300 px-4 py-2 rounded-md focus:outline-none"
                  placeholder="Enter your identifier"
                />
                {focusedField === "name" && (
                  <div className="absolute inset-0 border border-cyan-400/50 rounded-md pointer-events-none"></div>
                )}
              </div>
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs text-gray-400 flex items-center gap-2">
                <span className="text-cyan-400">&gt;</span> TRANSMISSION VECTOR
              </label>
              <div
                className={`relative border ${
                  focusedField === "email" ? "border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]" : "border-gray-700"
                } rounded-md transition-all duration-300`}
              >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  required
                  className="w-full bg-black/50 text-gray-300 px-4 py-2 rounded-md focus:outline-none"
                  placeholder="Enter your transmission vector"
                />
                {focusedField === "email" && (
                  <div className="absolute inset-0 border border-cyan-400/50 rounded-md pointer-events-none"></div>
                )}
              </div>
            </div>

            {/* Message field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs text-gray-400 flex items-center gap-2">
                <span className="text-cyan-400">&gt;</span> DATA PAYLOAD
              </label>
              <div
                className={`relative border ${
                  focusedField === "message"
                    ? "border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                    : "border-gray-700"
                } rounded-md transition-all duration-300`}
              >
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  required
                  rows={4}
                  className="w-full bg-black/50 text-gray-300 px-4 py-2 rounded-md focus:outline-none resize-none"
                  placeholder="Enter your data payload"
                ></textarea>
                {focusedField === "message" && (
                  <div className="absolute inset-0 border border-cyan-400/50 rounded-md pointer-events-none"></div>
                )}
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <PulseButton
                type="submit"
                className="w-full relative overflow-hidden group"
                disabled={isSubmitting}
                onMouseMove={handleMouseMove}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    TRANSMITTING...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    TRANSMIT DATA
                  </span>
                )}

                {/* Particles */}
                {particles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full pointer-events-none"
                    style={{ left: particle.x, top: particle.y }}
                    initial={{ opacity: 0.8, scale: 1 }}
                    animate={{
                      opacity: 0,
                      scale: 0,
                      x: Math.random() * 40 - 20,
                      y: Math.random() * 40 - 20,
                    }}
                    transition={{ duration: 1 }}
                  />
                ))}
              </PulseButton>
            </div>

            {/* Security notice */}
            <div className="text-xs text-gray-600 text-center mt-4">
              <div className="flex items-center justify-center gap-2">
                <div className="h-1 w-1 rounded-full bg-cyan-500 animate-pulse"></div>
                <span>QUANTUM ENCRYPTED TRANSMISSION</span>
                <div className="h-1 w-1 rounded-full bg-cyan-500 animate-pulse"></div>
              </div>
            </div>
          </motion.form>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full border-2 border-cyan-500 flex items-center justify-center">
              <Send className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-cyan-400">TRANSMISSION COMPLETE</h3>
            <p className="text-gray-400 text-sm">Your data has been securely transmitted.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
