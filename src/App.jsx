import { useState, useEffect } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import FeaturedProject from '@/components/FeaturedProject';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
      <Analytics />
    </main>
  );
}
