import React, { useState } from 'react';
import portfolioData from '../data/portfolioData';
import useScrollToSection from '../hooks/useScrollToSection';

const Header = () => {
  const scrollToSection = useScrollToSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (section, e) => {
    scrollToSection(section, e);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">{portfolioData.profile.name}</h1>

        {/* 햄버거 메뉴 버튼 (모바일) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴 토글"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* 데스크톱 메뉴 */}
        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#profile" onClick={(e) => scrollToSection('profile', e)} className="hover:text-blue-300 transition cursor-pointer" aria-label="소개 섹션으로 이동">소개</a></li>
            <li><a href="#github-stats" onClick={(e) => scrollToSection('github-stats', e)} className="hover:text-blue-300 transition cursor-pointer" aria-label="GitHub 활동 섹션으로 이동">GitHub</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection('skills', e)} className="hover:text-blue-300 transition cursor-pointer" aria-label="기술스택 섹션으로 이동">기술스택</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection('projects', e)} className="hover:text-blue-300 transition cursor-pointer" aria-label="프로젝트 섹션으로 이동">프로젝트</a></li>
          </ul>
        </nav>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <nav aria-label="모바일 메뉴" className="md:hidden bg-gray-700 px-4 py-2">
          <ul className="space-y-2">
            <li><a href="#profile" onClick={(e) => handleMenuClick('profile', e)} className="block py-2 hover:text-blue-300 transition cursor-pointer" aria-label="소개 섹션으로 이동">소개</a></li>
            <li><a href="#github-stats" onClick={(e) => handleMenuClick('github-stats', e)} className="block py-2 hover:text-blue-300 transition cursor-pointer" aria-label="GitHub 활동 섹션으로 이동">GitHub</a></li>
            <li><a href="#skills" onClick={(e) => handleMenuClick('skills', e)} className="block py-2 hover:text-blue-300 transition cursor-pointer" aria-label="기술스택 섹션으로 이동">기술스택</a></li>
            <li><a href="#projects" onClick={(e) => handleMenuClick('projects', e)} className="block py-2 hover:text-blue-300 transition cursor-pointer" aria-label="프로젝트 섹션으로 이동">프로젝트</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
