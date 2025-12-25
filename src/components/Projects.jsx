import React, { useState } from 'react';
import portfolioData from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const animRef = useScrollAnimation();

  const openModal = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <section id="projects" className="py-20" aria-labelledby="projects-heading">
      <div className="container mx-auto px-4">
        <h2 id="projects-heading" className="text-3xl font-bold text-center mb-12">프로젝트</h2>
        <div ref={animRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate">
          {portfolioData.projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:-translate-y-2 hover:shadow-lg"
              onClick={() => openModal(project)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs mr-2 mb-2">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-black font-medium inline-flex items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.83-.26.83-.57 0-.28 0-1.03-.02-2.03-3.33.72-4.03-1.6-4.03-1.6-.54-1.38-1.33-1.74-1.33-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.8.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23.96-.26 1.98-.4 3-.4 1.02 0 2.04.14 3 .4 2.28-1.55 3.28-1.23 3.28-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.9 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.42.36.8 1.1.8 2.2 0 1.58-.01 2.86-.01 3.25 0 .32.22.68.84.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12" />
                      </svg>
                      GitHub
                    </a>
                    
                    {/* 확장프로그램 설치하기 버튼 */}
                    {project.downloadUrl && (
                      <a
                        href={project.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md ml-2 text-sm inline-flex items-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        설치하기
                      </a>
                    )}

                    {/* 웹사이트 이동하기 버튼 */}
                    {!project.downloadUrl && project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md ml-2 text-sm inline-flex items-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        이동하기
                      </a>
                    )}
                  </div>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
      <ProjectModal project={activeProject} onClose={closeModal} />
    </section>
  );
};

export default Projects;