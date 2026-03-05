'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const highlights = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '12+' },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          About Me
        </h2>
        <div className="h-1 w-20 bg-accent rounded mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-xl overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-amber-500/20" />
              <div className="w-full h-full bg-card flex items-center justify-center">
                <span className="text-7xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          {/* Bio content */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              I'm Manish, a passionate developer specializing in building intelligent automation solutions and scalable applications. I combine problem-solving skills with technical expertise to transform ideas into production-ready systems that deliver real business value.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-blue-500/30 bg-blue-900/20 rounded-lg p-4 text-center"
                >
                  <p className="text-2xl font-bold text-accent">{item.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Key technologies */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Python', 'Next.js', 'TypeScript', 'Node.js', 'Firebase'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-blue-900/30 border border-blue-500/40 rounded-full text-xs font-semibold text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a href="#" className="inline-block">
              <Button
                variant="outline"
                className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10 font-semibold h-11 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
