'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Social Media Manager',
    description: 'Automated social media posting platform that saves hours per week by scheduling and managing posts across multiple platforms seamlessly.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    techStack: ['Python', 'Automation', 'API Integration'],
    impact: '40+ hours/week saved per user',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Personal PC Assistant',
    description: 'Intelligent voice and text-based PC control assistant that executes commands, manages files, and provides real-time system information.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    techStack: ['Python', 'AI/ML', 'Desktop App'],
    impact: '95% command recognition accuracy',
    demoUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Other Projects
        </h2>
        <div className="h-1 w-20 bg-accent rounded mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group flex flex-col h-full bg-card border border-border rounded-xl p-5 hover:border-accent/50 transition-colors"
            >
              <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 flex-grow text-base leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-900/40 border border-blue-500/30 rounded-full text-xs text-blue-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mb-6 p-4 bg-gradient-to-r from-amber-500/10 to-blue-500/10 border border-amber-500/20 rounded-lg">
                <p className="text-sm font-semibold text-amber-300">
                  Impact: {project.impact}
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-accent hover:bg-amber-600 text-black font-semibold flex items-center justify-center gap-2 h-10"
                >
                  Live Demo
                  <span>→</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10 font-semibold h-10 flex items-center justify-center"
                >
                  GitHub
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
