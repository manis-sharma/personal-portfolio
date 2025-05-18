"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Shield, Code, Zap } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DataNavBar2082() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "PROJECTS", icon: <Code className="h-4 w-4" />, href: "/#projects" },
    { name: "SKILLS", icon: <Shield className="h-4 w-4" />, href: "/#skills" },
    { name: "CONTACT", icon: <Zap className="h-4 w-4" />, href: "/#contact" },
  ]

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Handle smooth scroll for hash links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle hash links on the homepage
    if (pathname !== "/" || !href.startsWith("#")) return

    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)

    if (element) {
      // Play teleport sound
      const audio = new Audio("/teleport.mp3")
      audio.volume = 0.2
      audio.play().catch(() => {})

      // Smooth scroll with a slight delay for the sound
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 200)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="relative">
        {/* HUD frame */}
        <div className="absolute inset-0 border-b border-cyan-500/20 bg-black/50 backdrop-blur-md"></div>

        {/* Nav content */}
        <div className="relative mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-8 w-8"
            >
              <div className="absolute inset-0 bg-cyan-500/20 rounded-sm rotate-45"></div>
              <div className="absolute inset-1 border border-cyan-500/70 rounded-sm rotate-45 flex items-center justify-center">
                <span className="text-cyan-500 font-bold text-xs rotate-[315deg]">2082</span>
              </div>
            </motion.div>
            <div className="text-lg font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
              GHOST_PROTOCOL
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {item.icon}
                  <span className="text-sm tracking-wider">{item.name}</span>
                </motion.div>
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-cyan-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-cyan-500/20 bg-black/90 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors py-2"
                  >
                    {item.icon}
                    <span className="text-sm tracking-wider">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
