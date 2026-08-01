import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutExperience from './components/AboutExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailPage from './components/ProjectDetailPage';
import { projects } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projId = hash.replace('#project-', '');
        const found = projects.find((p) => p.id === projId);
        if (found) setSelectedProject(found);
      } else if (hash === '' || hash === '#hero' || hash === '#projects' || hash === '#about' || hash === '#skills' || hash === '#contact') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (proj) => {
    if (proj) {
      setSelectedProject(proj);
      window.location.hash = `#project-${proj.id}`;
    } else {
      setSelectedProject(null);
      window.location.hash = '#projects';
    }
  };

  if (selectedProject) {
    return (
      <div className="min-h-screen relative selection:bg-[var(--color-accent-crimson)] selection:text-white">
        <Navbar />
        <main>
          <ProjectDetailPage
            project={selectedProject}
            onBack={() => handleSelectProject(null)}
            onSelectProject={(proj) => handleSelectProject(proj)}
          />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative selection:bg-[var(--color-accent-crimson)] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects onSelectProject={(proj) => handleSelectProject(proj)} />
        <AboutExperience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
