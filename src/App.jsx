import React, { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Footer from './components/Footer';
import useScrollToSection from './hooks/useScrollToSection';
import portfolioData from './data/portfolioData';
import SchemaOrg from './SchemaOrg';

const App = () => {
  const scrollToSection = useScrollToSection();
  
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [scrollToSection]);

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>{portfolioData.profile.name} - {portfolioData.profile.title}</title>
          <meta name="description" content={portfolioData.profile.bio.substring(0, 155)} />
          <link rel="canonical" href="https://yourportfolio.com" />
        </Helmet>
        <SchemaOrg />
        <Header />
        <main className="flex-grow">
          <Profile />
          <Skills />
          <Certifications />
          <Projects />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;