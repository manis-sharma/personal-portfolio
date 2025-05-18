"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, FileJson, FileIcon as FileHtml, FileCode, Braces, Wind, GitBranch, Github } from "lucide-react"

interface Skill {
  name: string
  icon: React.ReactNode
  color: string
  level: number
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills: Skill[] = [
    {
      name: "React",
      icon: <Code2 className="h-10 w-10" />,
      color: "#61DAFB",
      level: 95,
    },
    {
      name: "JavaScript",
      icon: <FileJson className="h-10 w-10" />,
      color: "#F7DF1E",
      level: 90,
    },
    {
      name: "HTML",
      icon: <FileHtml className="h-10 w-10" />,
      color: "#E34F26",
      level: 98,
    },
    {
      name: "CSS",
      icon: <FileCode className="h-10 w-10" />,
      color: "#1572B6",
      level: 92,
    },
    {
      name: "Python",
      icon: <Braces className="h-10 w-10" />,
      color: "#3776AB",
      level: 85,
    },
    {
      name: "Tailwind",
      icon: <Wind className="h-10 w-10" />,
      color: "#06B6D4",
      level: 94,
    },
    {
      name: "Git",
      icon: <GitBranch className="h-10 w-10" />,
      color: "#F05032",
      level: 88,
    },
    {
      name: "GitHub",
      icon: <Github className="h-10 w-10" />,
      color: "#181717",
      level: 89,
    },
  ]

  // Glitch text effect
  const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => {
    const [mainTitle, setMainTitle] = useState(title)

    useState(() => {
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
    })

    return (
      <div className="text-center space-y-2 mb-12">
        <h2 className="text-3xl font-bold tracking-wider text-gray-200">{mainTitle}</h2>
        <p className="text-gray-500">{subtitle}</p>
      </div>
    )
  }

  return (
    <section id="skills" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="SKILL_MATRIX" subtitle="Neural capabilities and technical proficiencies" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                className="border border-gray-800 hover:border-cyan-500/50 bg-black/80 rounded-md overflow-hidden transition-colors duration-300 p-6 h-full flex flex-col items-center justify-center relative"
                whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0], transition: { duration: 0.3 } }}
              >
                {/* Icon */}
                <motion.div
                  className="relative mb-4 w-16 h-16 flex items-center justify-center text-gray-300"
                  style={{ color: skill.color }}
                  animate={
                    hoveredSkill === skill.name
                      ? {
                          rotateY: [0, 360],
                          transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        }
                      : {}
                  }
                >
                  {skill.icon}

                  {/* Orbit effect */}
                  {hoveredSkill === skill.name && (
                    <>
                      <motion.div
                        className="absolute w-full h-full rounded-full border border-gray-700 opacity-0"
                        animate={{ opacity: [0, 0.5, 0], scale: [1, 1.2, 1.5] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <motion.div
                        className="absolute w-1 h-1 rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%) rotate(0deg) translateX(30px)",
                        }}
                        animate={{ transform: "translate(-50%, -50%) rotate(360deg) translateX(30px)" }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    </>
                  )}
                </motion.div>

                {/* Name */}
                <h3 className="text-gray-300 font-bold text-center mb-2">{skill.name}</h3>

                {/* Progress bar */}
                <div className="w-full bg-gray-900 h-1 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>

                {/* Level */}
                <div className="text-xs text-gray-500 mt-2">LEVEL {skill.level}</div>

                {/* Glow effect */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    className="absolute inset-0 rounded-md opacity-0"
                    animate={{ opacity: 0.2 }}
                    exit={{ opacity: 0 }}
                    style={{ boxShadow: `0 0 15px ${skill.color}` }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
