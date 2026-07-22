import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutExperience from './components/AboutExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-[var(--color-accent-crimson)] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <AboutExperience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
