"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Mail, Github, Linkedin, Twitter } from "lucide-react"

interface SocialLink {
  name: string
  icon: React.ReactNode
  url: string
  color: string
}

export function SocialMediaBar({ vertical = false }: { vertical?: boolean }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://www.facebook.com/profile.php?id=100086450979626",
      color: "#4267B2",
    },
    {
      name: "Gmail",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:manish.234th@gmail.com",
      color: "#EA4335",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/manis-sharma",
      color: "#6e5494",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/manish-sharma-434196364/",
      color: "#0077B5",
    },
    {
      name: "X (Twitter)",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/Manish_kharel1",
      color: "#1DA1F2",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex ${vertical ? "flex-col space-y-5" : "flex-row space-x-5 justify-center"} items-center`}
    >
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.name}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          whileHover={{ scale: 1.15 }}
        >
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-black to-neutral-900 border border-gray-800 text-gray-300 hover:text-white transition-colors duration-300 shadow-lg"
            aria-label={link.name}
          >
            {link.icon}
          </Link>

          {/* Glow ring */}
          {hoveredIndex === index && (
            <motion.div
              className="absolute inset-0 rounded-full z-0 blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                boxShadow: `0 0 25px ${link.color}`,
              }}
            />
          )}

          {/* Pulsing orbit ring */}
          {hoveredIndex === index && (
            <motion.div
              className="absolute inset-0 rounded-full border z-0 border-white/30"
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [1, 1.8, 2.5],
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          {/* Animated orbit dots */}
          {hoveredIndex === index && (
            <>
              <motion.div
                className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400 z-0"
                initial={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(0deg) translateX(20px)",
                }}
                animate={{
                  transform: "translate(-50%, -50%) rotate(360deg) translateX(20px)",
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-1.5 h-1.5 rounded-full bg-pink-500 z-0"
                initial={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(180deg) translateX(20px)",
                }}
                animate={{
                  transform: "translate(-50%, -50%) rotate(540deg) translateX(20px)",
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
            </>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
