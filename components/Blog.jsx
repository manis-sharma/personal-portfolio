'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'Optimizing React Performance',
    description: 'Learn strategies to make your React apps faster with memoization, lazy loading, and code splitting.',
    date: '2024-01-15',
    category: 'Frontend',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  },
  {
    title: 'Intro to Docker for Devs',
    description: 'Your comprehensive guide to Docker fundamentals and containerization best practices.',
    date: '2024-01-10',
    category: 'DevOps',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
  },
  {
    title: 'AI for Beginners',
    description: 'Demystify artificial intelligence and machine learning concepts for developers.',
    date: '2024-01-05',
    category: 'AI/ML',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1677442d019cecf4d4534720f4538f795?w=500&h=300&fit=crop',
  },
];

export default function Blog() {
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
          Blog
        </h2>
        <div className="h-1 w-20 bg-accent rounded mb-8" />
        <p className="text-gray-300 text-base mb-12 max-w-2xl leading-relaxed">
          Insights on web development, automation, and building scalable systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4">
                  <span className="px-2.5 py-1 bg-blue-900/30 border border-blue-500/40 rounded-full text-xs font-semibold text-blue-300">
                    {post.category}
                  </span>
                  <span className="px-2.5 py-1 bg-gray-700/30 border border-gray-600/40 rounded-full text-xs font-medium text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                  {post.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <span className="text-xs text-gray-500 font-medium">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                  <Button
                    className="bg-accent hover:bg-amber-600 text-black font-semibold text-xs h-9 px-4"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
