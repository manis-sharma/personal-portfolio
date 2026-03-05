import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="border-t border-border py-12 px-6 md:px-12 lg:px-20"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-6">
          <motion.a
            href="https://github.com/manis-sharma"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="text-gray-400 hover:text-accent transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/manish-sharma-np/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="text-gray-400 hover:text-accent transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ y: -2 }}
            className="text-gray-400 hover:text-accent transition-colors"
          >
            <Download className="w-6 h-6" />
          </motion.a>
        </div>

        <p className="text-gray-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Manish Dada. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
