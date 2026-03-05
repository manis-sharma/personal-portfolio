'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  const navItems = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Blog', href: '/blog', id: 'blog' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Simple scroll detection - you can enhance this with Intersection Observer
      setActive('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="px-6 md:px-12 lg:px-20 py-5 flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white hover:text-accent transition-colors">
          Manish
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-accent transition-colors font-medium text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - 44px minimum touch target */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white h-11 w-11 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 py-4 border-t border-border space-y-2"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block py-3 px-4 rounded-lg text-gray-300 hover:bg-white/10 hover:text-accent transition-colors font-medium text-sm min-h-11 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
