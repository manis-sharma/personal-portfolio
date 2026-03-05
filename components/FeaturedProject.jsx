'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function FeaturedProject() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-blue-900/10 to-transparent">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Featured Project
        </h2>
        <div className="h-1 w-20 bg-accent rounded mb-12" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <div>
            <div className="inline-block px-3 py-1.5 bg-amber-900/30 border border-amber-500/40 rounded-full text-xs font-semibold text-amber-300 mb-6">
              Enterprise Solution
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Online Exam System
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              An enterprise-grade examination platform built to serve educational institutions and certification bodies. The system handles 500+ concurrent users with industry-leading security, real-time proctoring, and comprehensive analytics.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="border border-blue-500/30 bg-blue-900/20 rounded-lg p-4">
                <p className="text-2xl font-bold text-accent">500+</p>
                <p className="text-xs text-gray-400 mt-1">Concurrent Users</p>
              </div>
              <div className="border border-blue-500/30 bg-blue-900/20 rounded-lg p-4">
                <p className="text-2xl font-bold text-blue-400">99.9%</p>
                <p className="text-xs text-gray-400 mt-1">Uptime SLA</p>
              </div>
              <div className="border border-blue-500/30 bg-blue-900/20 rounded-lg p-4">
                <p className="text-2xl font-bold text-blue-400">Real-time</p>
                <p className="text-xs text-gray-400 mt-1">Proctoring</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1.5 bg-blue-900/30 border border-blue-500/40 rounded-full text-xs font-semibold text-blue-300">
                React
              </span>
              <span className="px-3 py-1.5 bg-blue-900/30 border border-blue-500/40 rounded-full text-xs font-semibold text-blue-300">
                Node.js
              </span>
              <span className="px-3 py-1.5 bg-blue-900/30 border border-blue-500/40 rounded-full text-xs font-semibold text-blue-300">
                Firebase
              </span>
              <span className="px-3 py-1.5 bg-blue-900/30 border border-blue-500/40 rounded-full text-xs font-semibold text-blue-300">
                WebRTC
              </span>
            </div>

            <div className="flex gap-3">
              <Button className="bg-accent hover:bg-amber-600 text-black font-semibold flex items-center justify-center gap-2 h-11">
                Live Demo
                <span>→</span>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10 font-semibold h-11"
              >
                View on GitHub
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=600&h=400&fit=crop"
                alt="Secure Online Exam System"
                className="relative rounded-xl border border-blue-500/30 shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
