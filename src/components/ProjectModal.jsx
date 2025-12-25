import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
            onClick={onClose}
            aria-label="모달 닫기"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className="h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="p-6">
          <h3 id="modal-title" className="text-2xl font-bold mb-4">{project.title}</h3>
          <p className="text-gray-700 mb-6">{project.description}</p>
          
          <h4 className="text-lg font-semibold mb-2">사용 기술</h4>
          <div className="flex flex-wrap mb-6">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="bg-gray-200 text-gray-700 px-3 py-1 rounded mr-2 mb-2">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap space-x-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.83-.26.83-.57 0-.28 0-1.03-.02-2.03-3.33.72-4.03-1.6-4.03-1.6-.54-1.38-1.33-1.74-1.33-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.8.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23.96-.26 1.98-.4 3-.4 1.02 0 2.04.14 3 .4 2.28-1.55 3.28-1.23 3.28-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.9 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.42.36.8 1.1.8 2.2 0 1.58-.01 2.86-.01 3.25 0 .32.22.68.84.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              GitHub 저장소
            </a>
            
            {/* 확장프로그램 설치하기 버튼 */}
            {project.downloadUrl && (
              <a
                href={project.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                이동하기
              </a>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;