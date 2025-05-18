"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      toast.error("Please fill in all fields")
      return
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formState.email)) {
      toast.error("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not set")
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "modernportfolioreact@gmail.com",
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        publicKey
      )
      
      setFormState({ name: "", email: "", message: "" })
      toast.success("Message sent successfully!")
    } catch (error) {
      console.error("Error sending email:", error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-xl p-6"
    >
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-300">
            Name
          </label>
          <div className="relative group">
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="bg-neutral-900/50 border-neutral-700 text-neutral-200 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300"
            />
            <motion.div
              className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-300">
            Email
          </label>
          <div className="relative group">
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="bg-neutral-900/50 border-neutral-700 text-neutral-200 focus:border-purple-500 focus:ring-purple-500/20 transition-all duration-300"
            />
            <motion.div
              className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-300">
            Message
          </label>
          <div className="relative group">
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              className="bg-neutral-900/50 border-neutral-700 text-neutral-200 focus:border-purple-500 focus:ring-purple-500/20 min-h-[120px] transition-all duration-300"
            />
            <motion.div
              className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            />
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-none relative overflow-hidden group"
            disabled={isSubmitting}
          >
            <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/50 to-purple-600/0 group-hover:via-purple-500/70 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
          </Button>
        </motion.div>
      </form>
    </motion.div>
  )
}
