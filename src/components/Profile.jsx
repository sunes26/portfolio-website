import React from 'react';
import portfolioData from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Profile = () => {
  const animRef = useScrollAnimation();

  return (
    <section id="profile" className="py-20 bg-gray-100" aria-labelledby="profile-heading">
      <div className="container mx-auto px-4">
        <h2 id="profile-heading" className="text-3xl font-bold text-center mb-12">내 소개</h2>
        <div ref={animRef} className="flex flex-col md:flex-row items-center justify-center scroll-animate">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <figure className="w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-white shadow-lg">
              <img src={portfolioData.profile.image} alt={`${portfolioData.profile.name}의 프로필 사진`} className="w-full h-full object-cover" loading="lazy" />
            </figure>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-bold mb-2">{portfolioData.profile.name}</h3>
            <p className="text-xl text-gray-600 mb-4">{portfolioData.profile.title}</p>
            <p className="text-gray-700 mb-6">{portfolioData.profile.bio}</p>
            <div className="flex space-x-4">
              <a href={`mailto:${portfolioData.profile.contact.email}`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition" aria-label="이메일 보내기">
                이메일
              </a>
              <a href={portfolioData.profile.contact.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition" aria-label="GitHub 프로필 방문하기">
                GitHub
              </a>
              <a href={portfolioData.profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition" aria-label="LinkedIn 프로필 방문하기">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;