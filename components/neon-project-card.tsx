"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NeonProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  restricted?: boolean
}

export function NeonProjectCard({ title, description, image, tags, link, restricted = false }: NeonProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative rounded-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Card content */}
      <div className="relative z-10 border border-gray-800 hover:border-cyan-500/50 bg-black/80 rounded-md overflow-hidden transition-colors duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

          {/* Tags */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-1 rounded-sm bg-black/70 border border-cyan-500/30 text-cyan-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Restricted badge */}
          {restricted && (
            <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] px-2 py-1 rounded-sm bg-pink-900/70 border border-pink-500/50 text-pink-300">
              <Lock className="h-3 w-3" />
              <span>RESTRICTED</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Title with typewriter effect */}
          <div className="h-7 overflow-hidden">
            <motion.h3
              className="text-lg font-bold text-gray-200 group-hover:text-cyan-400 transition-colors"
              animate={isHovered ? { y: [0, -30, 0] } : {}}
              transition={{ duration: 0.3, times: [0, 0.5, 1] }}
            >
              {title}
            </motion.h3>
          </div>

          <p className="text-sm text-gray-400 line-clamp-2">{description}</p>

          {/* Link */}
          <Link
            href={link}
            className="inline-flex items-center text-xs text-cyan-400 hover:text-pink-400 transition-colors"
          >
            <span>VIEW PROJECT DATA</span>
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        {/* Data pulse effect */}
        {isHovered && (
          <>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1px] bg-cyan-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.7 }}
            />
            <motion.div
              className="absolute top-0 left-0 bottom-0 w-[1px] bg-cyan-500"
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div
              className="absolute top-0 left-0 right-0 h-[1px] bg-pink-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-[1px] bg-pink-500"
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </>
        )}
      </div>
    </motion.div>
  )
}
