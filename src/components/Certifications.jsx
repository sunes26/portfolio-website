import React from 'react';
import portfolioData from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">자격증</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 mr-4 rounded overflow-hidden bg-gray-200">
                    <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{cert.name}</h3>
                    <p className="text-gray-600">{cert.issuer}</p>
                  </div>
                </div>
                <a className="text-gray-500 mb-4" href="#certification">{cert.date}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
