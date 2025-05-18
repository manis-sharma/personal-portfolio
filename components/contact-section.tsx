"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
// import { ContactForm } from "./contact-form" // Remove this line
import ContactForm from "@/app/components/contact-form" // Add this line - it uses the functional form
import { SocialMediaBar } from "../components/social-media-bar"
export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-wider text-gray-200">ESTABLISH_CONNECTION</h2>
          <p className="text-gray-500">Secure transmission protocols initialized</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Social and info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info card */}
            <div className="border border-cyan-500/30 rounded-md bg-black/80 backdrop-blur-sm p-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-cyan-400">NETWORK NODES</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center mt-1">
                      <span className="text-cyan-400 text-xs">01</span>
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-bold">LOCATION</h4>
                      <p className="text-gray-500 text-sm">DADAKHUTTI TULSIPUR, WARD 3, Dang District</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center mt-1">
                      <span className="text-cyan-400 text-xs">02</span>
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-bold">UPLINK</h4>
                      <p className="text-gray-500 text-sm">https://www.instagram.com/manish_sharmawiss11/</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-900/30 flex items-center justify-center mt-1">
                      <span className="text-cyan-400 text-xs">03</span>
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-bold">FREQUENCY</h4>
                      <p className="text-gray-500 text-sm">+977 9869879224</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold text-gray-300">NETWORK CONNECTIONS</h3>
              <SocialMediaBar />
            </div>

            {/* Decorative elements */}
            <div className="relative h-20 overflow-hidden">
              <div className="absolute inset-0 flex items-center">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-800/50 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-4 text-xs text-cyan-600 bg-black">GHOST_PROTOCOL v2.8.2</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-cyan-500/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-pink-500/5 blur-3xl"></div>
    </section>
  )
}
