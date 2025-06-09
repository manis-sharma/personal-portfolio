"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, User, BookOpen, Award, Building, Download } from "lucide-react"
import { PulseButton } from "@/components/pulse-button"

export default function BiodataPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Play vault opening sound
    const audio = new Audio("/vault-open.mp3")
    audio.volume = 0.4
    audio.play().catch(() => {})

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Sections data
  const sections = [
    {
      id: "personal",
      title: "PERSONAL INFO",
      icon: <User className="h-5 w-5" />,
      content: [
        { label: "NAME", value: "MANISH SHARMA" },
        { label: "CODENAME", value: "GHOST_PROTOCOL" },
        { label: "LOCATION", value: "Tulsipur, Dang" },
        { label: "STATUS", value: "ACTIVE" },
        { label: "CLEARANCE", value: "LEVEL 5" },
      ],
    },
    {
      id: "background",
      title: "BACKGROUND",
      icon: <Building className="h-5 w-5" />,
      content: [
        {
          label: "CURRENT ROLE",
          value: "JUNIOR NEURAL ARCHITECT",
          details: "Designing advanced digital interfaces and quantum-secured applications",
        },
        {
          label: "PREVIOUS DEPLOYMENT",
          value: "CIPHER SYSTEMS",
          details: "Led development of encrypted communication protocols",
        },
        {
          label: "SPECIALIZATION",
          value: "FRONTEND SYSTEMS",
          details: "Expert in React, Next.js, and advanced UI/UX architecture",
        },
      ],
    },
    {
      id: "education",
      title: "EDUCATION",
      icon: <BookOpen className="h-5 w-5" />,
      content: [
        {
          label: "NEURAL PROGRAMMING",
          value: "QUANTUM UNIVERSITY",
          details: "Advanced degree in Computational Systems",
        },
        {
          label: "DIGITAL ARCHITECTURE",
          value: "CYBER INSTITUTE",
          details: "Specialized in interface design and user experience",
        },
        {
          label: "CERTIFICATIONS",
          value: "MULTIPLE",
          details: "Including Advanced React, Next.js Mastery, and Quantum Encryption",
        },
      ],
    },
    {
      id: "achievements",
      title: "ACHIEVEMENTS",
      icon: <Award className="h-5 w-5" />,
      content: [
        {
          label: "NEXUS PROJECT",
          value: "LEAD ARCHITECT",
          details: "Developed revolutionary interface system with 98% efficiency rating",
        },
        {
          label: "GHOST PROTOCOL",
          value: "CREATOR",
          details: "Designed secure communication system used by top corporations",
        },
        {
          label: "HACKATHON CHAMPION",
          value: "3X WINNER",
          details: "Multiple victories in international coding competitions",
        },
      ],
    },
  ]

  // Glitch animation for section headers
  const GlitchText = ({ text }: { text: string }) => {
    const [glitchedText, setGlitchedText] = useState(text)

    useEffect(() => {
      const glitchInterval = setInterval(() => {
        if (Math.random() > 0.9) {
          const glitched = text
            .split("")
            .map((char) => (Math.random() > 0.7 ? String.fromCharCode(Math.floor(Math.random() * 26) + 65) : char))
            .join("")
          setGlitchedText(glitched)

          // Reset after a short delay
          setTimeout(() => {
            setGlitchedText(text)
          }, 100)
        }
      }, 2000)

      return () => clearInterval(glitchInterval)
    }, [text])

    return <span>{glitchedText}</span>
  }

  return (
    <main className="min-h-screen bg-black text-cyan-500 font-mono relative overflow-hidden pt-20">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 z-0"></div>
      <div className="fixed inset-0 pointer-events-none z-0 bg-scan-lines opacity-10"></div>

      {/* Glitch lines */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-cyan-500/30 left-0 right-0"
            style={{ top: `${Math.random() * 100}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0],
              left: ["0%", `${Math.random() * 30}%`, "0%"],
              right: ["0%", `${Math.random() * 30}%`, "0%"],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: Math.random() * 5 + 3,
            }}
          />
        ))}
      </div>

      {/* Vault door animation */}
      <motion.div
        className="fixed inset-0 z-30 bg-black flex items-center justify-center pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <motion.div
          className="w-full max-w-md aspect-square border-4 border-cyan-500 relative flex items-center justify-center"
          initial={{ rotate: 0 }}
          animate={{ rotate: 90, scale: 0.8, opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="absolute inset-2 border border-cyan-500/50"></div>
          <motion.div
            className="text-2xl font-bold text-cyan-400"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            ACCESSING VAULT
          </motion.div>

          {/* Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 0.8 + Math.random() * 0.5,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/">
            <PulseButton variant="secondary" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              RETURN TO MAINFRAME
            </PulseButton>
          </Link>
        </div>

        {/* Header with image */}
        <motion.div
          className="mb-12 flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full opacity-70 blur-sm"></div>
            <div className="relative rounded-full overflow-hidden border-2 border-cyan-500 w-32 h-32">
              <Image
                src="/placeholder.jpg?height=128&width=128"
                alt="Profile"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text mb-2">
              MANISH SHARMA
            </h1>
            <p className="text-gray-400 mb-4">NEURAL ARCHITECT // QUANTUM DEVELOPER // DIGITAL PHANTOM</p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="text-xs px-2 py-1 rounded-sm bg-cyan-900/30 border border-cyan-500/30 text-cyan-400">
                CLEARANCE LEVEL 5
              </span>
              <span className="text-xs px-2 py-1 rounded-sm bg-pink-900/30 border border-pink-500/30 text-pink-400">
                ACTIVE OPERATIVE
              </span>
              <span className="text-xs px-2 py-1 rounded-sm bg-purple-900/30 border border-purple-500/30 text-purple-400">
                GHOST PROTOCOL
              </span>
            </div>
          </div>

          <div className="ml-auto hidden md:block">
            <PulseButton className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              DOWNLOAD FULL DOCUMENT 
            </PulseButton>
          </div>
        </motion.div>

        {/* Biodata sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="border border-cyan-500/30 rounded-md bg-black/80 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(6,182,212,0.2)] relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Section header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-cyan-400">
                  <GlitchText text={section.title} />
                </h2>
              </div>

              {/* Section content */}
              <div className="space-y-4">
                {section.content.map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-cyan-500"></div>
                      <span className="text-xs text-gray-400">{item.label}</span>
                    </div>
                    <div className="text-gray-200 font-bold">{item.value}</div>
                    {"details" in item && <div className="text-sm text-gray-500 mt-1">{item.details}</div>}
                  </motion.div>
                ))}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border border-cyan-500/0 rounded-md group-hover:border-cyan-500/50 transition-colors duration-300 pointer-events-none"></div>

              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-cyan-500 to-transparent"></div>
                <div className="absolute top-0 right-0 h-16 w-[1px] bg-gradient-to-b from-cyan-500 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-8 h-8 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent"></div>
                <div className="absolute bottom-0 left-0 h-16 w-[1px] bg-gradient-to-t from-cyan-500 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile download button */}
        <div className="mt-8 md:hidden">
          <PulseButton className="w-full flex items-center justify-center gap-2">
            <Download className="h-4 w-4" />
            DOWNLOAD FULL DOSSIER
          </PulseButton>
        </div>
      </div>
    </main>
  )
}
