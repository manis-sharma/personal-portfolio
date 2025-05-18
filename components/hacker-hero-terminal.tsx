"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { PulseButton } from "./pulse-button"
import { Terminal, Zap } from "lucide-react"

export default function HackerHeroTerminal() {
  const router = useRouter()
  const [text, setText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const fullText = "ELITE DIGITAL OPERATIVE // NEURAL NETWORK ARCHITECT // QUANTUM ENCRYPTION SPECIALIST"

  useEffect(() => {
    // Simulate terminal loading
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval)
          return 100
        }
        return prev + Math.floor(Math.random() * 5) + 1
      })
    }, 100)

    return () => clearInterval(loadingInterval)
  }, [])

  useEffect(() => {
    if (loadingProgress === 100) {
      setTimeout(() => setIsLoaded(true), 500)
    }
  }, [loadingProgress])

  useEffect(() => {
    if (!isLoaded) return

    // Type out text
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, currentIndex))
      currentIndex++

      if (currentIndex > fullText.length) {
        clearInterval(typingInterval)
      }
    }, 50)

    // Blink cursor
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [isLoaded])

  // Random glitch effect
  useEffect(() => {
    if (!isLoaded) return

    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const glitchedText = text
          .split("")
          .map((char) => (Math.random() > 0.9 ? String.fromCharCode(Math.floor(Math.random() * 26) + 65) : char))
          .join("")

        setText(glitchedText)

        // Reset after a short delay
        setTimeout(() => {
          setText(fullText.substring(0, text.length))
        }, 100)
      }
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [isLoaded, text])

  // Handle Access Data Vault button click
  const handleAccessDataVault = () => {
    // Play sound effect
    const audio = new Audio("/access-vault.mp3")
    audio.volume = 0.3
    audio.play().catch(() => {})

    // Navigate to biodata page
    router.push("/biodata")
  }

  // Handle Establish Connection button click
  const handleEstablishConnection = () => {
    // Play teleport sound
    const audio = new Audio("/teleport.mp3")
    audio.volume = 0.2
    audio.play().catch(() => {})

    // Scroll to contact section
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 200)
    }
  }

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Terminal window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl border border-cyan-500/30 rounded-md bg-black/80 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
      >
        {/* Terminal header */}
        <div className="flex items-center justify-between mb-4 border-b border-cyan-800/50 pb-2">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-cyan-400" />
            <span className="text-cyan-400 font-bold tracking-wider">NEXUS.TERMINAL</span>
          </div>
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-pink-600"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-cyan-400"></div>
          </div>
        </div>

        {/* Terminal content */}
        <div className="space-y-4">
          {!isLoaded ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">[SYSTEM]</span>
                <span className="text-gray-400">Initializing neural interface...</span>
              </div>

              <div className="w-full bg-gray-900/50 rounded-full h-2 mb-6">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500"
                  style={{ width: `${loadingProgress}%` }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
              </div>

              <div className="font-mono text-xs space-y-1 text-gray-500">
                <p>&gt; Establishing secure connection...</p>
                <p>&gt; Bypassing neural firewalls...</p>
                <p>&gt; Scanning for surveillance...</p>
                <p>&gt; Initializing quantum encryption...</p>
                <p>&gt; Loading personality matrix...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
                  GHOST_PROTOCOL
                </h1>
                <div className="h-8 flex items-center">
                  <span className="text-gray-300 text-lg">{text}</span>
                  {cursorVisible && <span className="w-3 h-6 bg-cyan-400 ml-1 animate-pulse"></span>}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <PulseButton onClick={handleAccessDataVault}>
                  <Zap className="mr-2 h-4 w-4" />
                  ACCESS DATA VAULT
                </PulseButton>
                <PulseButton variant="secondary" onClick={handleEstablishConnection}>
                  ESTABLISH CONNECTION
                </PulseButton>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-pink-500/10 blur-3xl"></div>
    </section>
  )
}
