import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between px-6 md:px-12 lg:px-20 pt-24 md:pt-20 pb-12">
      <div className="w-full md:w-1/2 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight">
            Manish Sharma
          </h1>
          <p className="text-lg md:text-xl text-indigo-200 mb-4 font-medium">
            Full-Stack Developer | Problem Solver
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
            I design and build fast, scalable web applications and intelligent automation solutions using React, Python, and modern cloud technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
        >
          <a href="#projects">
            <Button
              size="lg"
              className="bg-accent hover:bg-amber-600 text-black font-semibold text-base rounded-lg flex items-center justify-center gap-2 h-12 px-8"
            >
              View Projects
              <span className="text-lg">→</span>
            </Button>
          </a>
          <a href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10 rounded-lg font-semibold h-12 px-8"
            >
              Contact Me
            </Button>
          </a>
        
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm text-gray-500 pt-2"
        >
          Available for freelance projects and full-time opportunities
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden lg:flex w-1/2 justify-end"
      >
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-lg blur-3xl" />
          <div className="relative bg-card border border-border rounded-lg p-6 backdrop-blur-sm">
            <div className="bg-gray-800 rounded-lg p-4 mb-4 h-48">
              <div className="text-sm text-accent font-mono">{'>'} Automating tasks....</div>
              <div className="text-sm text-gray-500 font-mono mt-2">Automating tasks.....</div>
              <div className="text-sm text-gray-500 font-mono">Scheduling posts.....</div>
              <div className="w-full h-2 bg-gray-700 rounded mt-4 mb-2" />
              <div className="w-3/4 h-2 bg-gray-700 rounded" />
              <div className="w-1/2 h-2 bg-accent rounded mt-2" />
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
