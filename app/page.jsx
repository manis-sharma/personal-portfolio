'use client';

import { useState, useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import FeaturedProject from '@/components/FeaturedProject';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Enable smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FeaturedProject />
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="about">
          <About />
        </section>
        <Blog />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}
