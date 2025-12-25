import React, { useState } from 'react';
import portfolioData from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const GitHubStats = () => {
  const animRef = useScrollAnimation();
  const [imageError, setImageError] = useState(false);

  // GitHub username 추출 (URL에서)
  const githubUsername = portfolioData.profile.contact.github.split('/').pop();

  return (
    <section id="github-stats" className="py-20 bg-gray-100" aria-labelledby="github-stats-heading">
      <div className="container mx-auto px-4">
        <h2 id="github-stats-heading" className="text-3xl font-bold text-center mb-12">GitHub 활동</h2>

        <div ref={animRef} className="max-w-4xl mx-auto scroll-animate">
          {/* GitHub 기여 그래프 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-center">1년간 기여 활동</h3>
            <div className="flex items-center justify-center min-h-[150px]">
              {imageError ? (
                <div className="text-center text-gray-500">
                  <p className="mb-2">기여 그래프를 불러올 수 없습니다</p>
                  <a href={`${portfolioData.profile.contact.github}?tab=overview`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    GitHub에서 기여 활동 보기
                  </a>
                </div>
              ) : (
                <img
                  src={`https://ghchart.rshah.org/${githubUsername}`}
                  alt="GitHub Contribution Graph"
                  className="w-full max-w-3xl"
                  loading="lazy"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </div>

          {/* GitHub 프로필 링크 */}
          <div className="mt-8 text-center">
            <a
              href={portfolioData.profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg transition"
              aria-label="GitHub 프로필 방문하기"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.83-.26.83-.57 0-.28 0-1.03-.02-2.03-3.33.72-4.03-1.6-4.03-1.6-.54-1.38-1.33-1.74-1.33-1.74-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48 1 .1-.8.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23.96-.26 1.98-.4 3-.4 1.02 0 2.04.14 3 .4 2.28-1.55 3.28-1.23 3.28-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.9 1.24 3.22 0 4.6-2.8 5.63-5.48 5.92.42.36.8 1.1.8 2.2 0 1.58-.01 2.86-.01 3.25 0 .32.22.68.84.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12" />
              </svg>
              GitHub 프로필 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
