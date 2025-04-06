const portfolioData = {
    profile: {
      name: '전해성',
      title: '프론트엔드 개발자',
      image: '/images/profile.png', // 실제 사용 시 이미지 경로로 대체
      bio: '사용자 경험을 중요시하는 프론트엔드 개발자입니다. 웹과 모바일 앱 개발에 3년 이상의 경험이 있으며, 항상 새로운 기술을 배우고 적용하는 것을 즐깁니다.',
      contact: {
        email: 'haeseong050321@email.com',
        github: 'https://github.com/sunes26',
        linkedin: 'https://www.linkedin.com/in/%ED%95%B4%EC%84%B1-%EC%A0%84-57536935a/',
        portfolio: 'https://myportfolio.com'
      }
    },
    skills: [
      { name: 'HTML', level: 80 },
      { name: 'CSS/Tailwind', level: 85 },
      { name: 'JavaScript', level: 70 },
      { name: 'React.js', level: 70 },
      { name: 'Node.js', level: 35 },
      { name: 'Python', level: 73 },
      { name: 'UI/UX Design', level: 50 }
    ],
    certifications: [
      {
        name: 'ITQ 한글엑셀 A등급',
        issuer: '한국생산성본부(KPC)',
        date: '2021년 12월',
        image: '/images/certifications/cert1.png',
        url: 'https://example.com/cert1'
      },
      {
        name: '한국사능력검정시험 1급',
        issuer: '국사편찬위원회',
        date: '2025년 3월',
        image: '/images/certifications/cert2.png',
        url: 'https://example.com/cert1'
      }
    ],
    projects: [
      {
        title: '코스모스(이러닝)동영상 다운로더',
        description: '파이썬을 이용한 확장프로그램 프로젝트입니다. url찾기, mp4 및 mp3 다운로드 등을 구현했습니다.',
        image: '/images/projects/project1.png',
        technologies: ['Javascript','Html', 'Tailwind CSS'],
        github: 'https://github.com/sunes26/coursemos-downloader',
        live: 'https://myproject.com',
        downloadUrl: 'https://chromewebstore.google.com/detail/coursemos-downloader/imoikgjofchpnchcaenglpnkcbhkjcge'
      },
      {
        title: '포트폴리오 웹사이트',
        description: '현재 보고 계신 이 포트폴리오 웹사이트입니다. React와 Tailwind CSS를 사용하여 개발했습니다.',
        image: '/images/projects/project2.png',
        technologies: ['React', 'Tailwind CSS',],
        github: 'https://github.com/username/portfolio',
        live: 'https://myportfolio.com'
      }
    ]
  };
  
  export default portfolioData;