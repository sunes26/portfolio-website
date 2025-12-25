import React from 'react';
import portfolioData from '../data/portfolioData';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills = () => {
  const animRef = useScrollAnimation();

  return (
    <section id="skills" className="py-20" aria-labelledby="skills-heading">
      <div className="container mx-auto px-4">
        <h2 id="skills-heading" className="text-3xl font-bold text-center mb-12">기술스택</h2>
        <div ref={animRef} className="max-w-3xl mx-auto scroll-animate">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;