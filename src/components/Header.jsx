import React from 'react';
import portfolioData from '../data/portfolioData';
import useScrollToSection from '../hooks/useScrollToSection';

const Header = () => {
  const scrollToSection = useScrollToSection();

  return (
    <header className="bg-gray-800 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">{portfolioData.profile.name}</h1>
        <nav aria-label="주요 메뉴">
          <ul className="flex space-x-6">
            <li><a href="#profile" onClick={(e) => scrollToSection('profile', e)} className="hover:text-blue-300 transition cursor-pointer" aria-label="소개 섹션으로 이동">소개</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection('skills', e)} className="hover:text-blue-300 transition cursor-pointer" aria-label="기술스택 섹션으로 이동">기술스택</a></li>
            <li><a href="#certifications" onClick={(e) => scrollToSection('certifications', e)} className="hover:text-blue-300 transition cursor-pointer" aria-label="자격증 섹션으로 이동">자격증</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection('projects', e)} className="hover:text-blue-300 transition cursor-pointer" aria-label="프로젝트 섹션으로 이동">프로젝트</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;