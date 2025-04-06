import React from 'react';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} {portfolioData.profile.name}. 모든 권리 보유.</p>
        <div className="flex justify-center space-x-6">
          <a href={`mailto:${portfolioData.profile.contact.email}`} className="hover:text-blue-300 transition">이메일</a>
          <a href={portfolioData.profile.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">GitHub</a>
          <a href={portfolioData.profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;