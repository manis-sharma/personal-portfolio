"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Terminal, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ErrorGlitchFooter() {
  const [timestamp, setTimestamp] = useState("--.--.-- --:--:--")
  const [glitchText, setGlitchText] = useState(false)
  const [quote, setQuote] = useState("")

  // Update timestamp every second
  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date()
      const formatted = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`
      setTimestamp(formatted)
    }

    updateTimestamp()
    const interval = setInterval(updateTimestamp, 1000)

    return () => clearInterval(interval)
  }, [])

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchText(true)
        setTimeout(() => setGlitchText(false), 200)
      }
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  // Set initial quote on mount
  useEffect(() => {
    const quotes = [
      "In a world of locked doors, the hacker is the master key.",
      "The code is the truth, but the interface is the experience.",
      "Digital reality is just another form of consciousness.",
      "Behind every firewall is someone who built it.",
      "The best encryption is the one no one knows exists.",
    ]
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  return (
    <footer className="border-t border-cyan-900/30 bg-black/80 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Terminal section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-400">
              <Terminal className="h-4 w-4" />
              <span className="text-sm font-bold tracking-wider">TERMINAL_ACCESS</span>
            </div>

            <div className="font-mono text-xs space-y-1 text-gray-500">
              <p className={glitchText ? "text-red-500" : ""}>
                &gt; {glitchText ? "ERR0R_C0NNECTI0N_L0ST" : "Connection established. Encryption active."}
              </p>
              <p>&gt; System: GHOST_PROTOCOL v2.8.2 [QUANTUM_SECURED]</p>
              <p>&gt; Status: {glitchText ? "COMPROMISED" : "OPERATIONAL"}</p>
              <p>
                &gt; Timestamp: <span className="text-cyan-400">{timestamp}</span>
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-pink-400 mt-2"
              >
                "{quote}"
              </motion.p>
            </div>
          </div>

          {/* Links section */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-bold text-gray-400 mb-3">NETWORK_NODES</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
                      PROJECTS
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
                      EXPERIMENTS
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
                      DATA_LOGS
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-400 mb-3">SECURE_CHANNELS</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
                      CONTACT
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
                      SECURITY
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
                      PRIVACY_PROTOCOL
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social links */}
            <div>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} GHOST_PROTOCOL // ALL_RIGHTS_SECURED
          </p>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <p className="text-xs text-gray-600">QUANTUM_ENCRYPTED_CONNECTION</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
