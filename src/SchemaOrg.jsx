import React from 'react';
import { Helmet } from 'react-helmet-async';
import portfolioData from './data/portfolioData';

const SchemaOrg = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": portfolioData.profile.name,
    "url": "https://yourportfolio.com",
    "image": `https://yourportfolio.com${portfolioData.profile.image}`,
    "description": portfolioData.profile.bio,
    "jobTitle": portfolioData.profile.title,
    "sameAs": [
      portfolioData.profile.contact.github,
      portfolioData.profile.contact.linkedin,
      portfolioData.profile.contact.portfolio
    ],
    "knowsAbout": portfolioData.skills.map(skill => skill.name),
    "email": portfolioData.profile.contact.email
  };

  // 프로젝트 스키마
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": portfolioData.projects.map((project, index) => ({
      "@type": "SoftwareSourceCode",
      "position": index + 1,
      "name": project.title,
      "description": project.description,
      "codeRepository": project.github,
      "programmingLanguage": project.technologies,
      "url": project.live || project.github
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(projectsSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaOrg;