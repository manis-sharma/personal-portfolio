import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  const navItems = [
    { label: 'Home', href: '#', id: 'home' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
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
        <a href="#" className="text-2xl font-bold text-white hover:text-accent transition-colors">
          Manish
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-accent transition-colors font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
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
            <a
              key={item.label}
              href={item.href}
              className="block py-3 px-4 rounded-lg text-gray-300 hover:bg-white/10 hover:text-accent transition-colors font-medium text-sm min-h-11 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
