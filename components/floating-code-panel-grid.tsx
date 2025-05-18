"use client"

import { useState } from "react"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { NeonProjectCard } from "./neon-project-card"

export default function FloatingCodePanelGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "NEURAL INTERFACE v3.2",
      description: "Advanced brain-computer interface with quantum encryption and neural feedback loops.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["NEURAL", "QUANTUM", "INTERFACE"],
      link: "#",
      restricted: false,
    },
    {
      title: "GHOST PROTOCOL",
      description: "Untraceable digital identity system with multi-layered encryption and proxy routing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["SECURITY", "ENCRYPTION", "IDENTITY"],
      link: "#",
      restricted: true,
    },
    {
      title: "NEXUS ARCHITECTURE",
      description: "Distributed computing framework for AI-enhanced data processing and analysis.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["AI", "DISTRIBUTED", "FRAMEWORK"],
      link: "#",
      restricted: false,
    },
    {
      title: "CIPHER MATRIX",
      description: "Quantum-resistant encryption algorithm with self-evolving security protocols.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["ENCRYPTION", "QUANTUM", "SECURITY"],
      link: "#",
      restricted: true,
    },
    {
      title: "VOID SCANNER",
      description: "Deep web mapping tool with autonomous crawling and data visualization capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["MAPPING", "DATA", "VISUALIZATION"],
      link: "#",
      restricted: false,
    },
    {
      title: "ECHO SYSTEM",
      description: "Decentralized communication network with zero-knowledge proof verification.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["COMMUNICATION", "DECENTRALIZED", "SECURE"],
      link: "#",
      restricted: false,
    },
  ]

  // Section titles with glitch effect
  const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => {
    const [mainTitle, setMainTitle] = useState(title)

    useEffect(() => {
      const glitchInterval = setInterval(() => {
        if (Math.random() > 0.8) {
          // Create glitched version
          const glitchedText = title
            .split("")
            .map((char) => (Math.random() > 0.7 ? String.fromCharCode(Math.floor(Math.random() * 26) + 65) : char))
            .join("")

          setMainTitle(glitchedText)

          // Reset after a short delay
          setTimeout(() => {
            setMainTitle(title)
          }, 100)
        }
      }, 3000)

      return () => clearInterval(glitchInterval)
    }, [title])

    return (
      <div className="text-center space-y-2 mb-12">
        <h2 className="text-3xl font-bold tracking-wider text-gray-200">{mainTitle}</h2>
        <p className="text-gray-500">{subtitle}</p>
      </div>
    )
  }

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="PROJECTS_DATABASE" subtitle="Classified operations and experimental protocols" />

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NeonProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 text-sm text-gray-500">END_OF_DATA_STREAM</span>
          </div>
        </div>
      </div>
    </section>
  )
}
