import React, { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Profile from './components/Profile';
import GitHubStats from './components/GitHubStats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
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
          <link rel="canonical" href="https://haeseong.netlify.app" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://haeseong.netlify.app" />
          <meta property="og:title" content={`${portfolioData.profile.name} - ${portfolioData.profile.title}`} />
          <meta property="og:description" content={portfolioData.profile.bio.substring(0, 155)} />
          <meta property="og:image" content="https://haeseong.netlify.app/images/profile.png" />
          <meta property="og:site_name" content={portfolioData.profile.name} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://haeseong.netlify.app" />
          <meta name="twitter:title" content={`${portfolioData.profile.name} - ${portfolioData.profile.title}`} />
          <meta name="twitter:description" content={portfolioData.profile.bio.substring(0, 155)} />
          <meta name="twitter:image" content="https://haeseong.netlify.app/images/profile.png" />
        </Helmet>
        <SchemaOrg />
        <Header />
        <main className="flex-grow">
          <Profile />
          <GitHubStats />
          <Skills />
          <Projects />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </HelmetProvider>
  );
};

export default App;