'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-12 lg:px-20 py-12"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="prose prose-invert max-w-3xl mx-auto">
          <style>{`
            .prose {
              color: #e8e8f0;
            }
            .prose h1,
            .prose h2,
            .prose h3 {
              color: #ffffff;
              margin-top: 1.5em;
              margin-bottom: 0.5em;
            }
            .prose p {
              line-height: 1.75;
              color: #c0c0d0;
              margin-bottom: 1em;
            }
            .prose code {
              background-color: #0f1b35;
              color: #f59e0b;
              padding: 0.25em 0.5em;
              border-radius: 0.25em;
            }
            .prose pre {
              background-color: #0f1b35;
              border: 1px solid #1e293b;
              border-radius: 0.5em;
              overflow-x: auto;
            }
            .prose pre code {
              background-color: transparent;
              color: #e8e8f0;
              padding: 0;
            }
            .prose a {
              color: #3b82f6;
              text-decoration: underline;
            }
            .prose a:hover {
              color: #60a5fa;
            }
            .prose blockquote {
              border-left-color: #f59e0b;
              color: #c0c0d0;
            }
            .prose ul,
            .prose ol {
              color: #c0c0d0;
            }
            .prose li {
              margin-bottom: 0.5em;
            }
          `}</style>
          {children}
        </article>
      </motion.div>
    </div>
  );
}
