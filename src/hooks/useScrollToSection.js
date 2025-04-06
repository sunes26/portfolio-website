import { useCallback } from 'react';

const useScrollToSection = () => {
  return useCallback((sectionId, e) => {
    if (e) e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);
};

export default useScrollToSection;