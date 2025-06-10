const portfolioData = {
    profile: {
      name: '전해성',
      title: '프론트엔드 개발자',
      image: '/images/profile.png', // 실제 사용 시 이미지 경로로 대체
      bio: '실용적이고 사람들에게 도움이 되는 서비스를 만드는 걸 좋아해서,  대학생들을 위한 프로그램 등 일상 속에서 유용한 도구들을 개발해왔습니다.  실제 사용자들이 내 서비스를 사용하면서 편리함을 느끼는 모습을 볼 때 큰 보람을 느낍니다. 지금도 새로운 기술을 배우고 있으며 앞으로도 사람들에게 긍정적인 영향을 주는 개발자가 되고자 합니다.',
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
      },
      {
        title: 'css스캔 확장프로그램',
        description: '자바스크립트를 이용한 확장프로그램 프로젝트 입니다.웹상의 css를 스캔하여 복사 할수 있는 기능을 구현했습니다.',
        image: '/images/projects/project3.png',
        technologies: ['Javascript','Html', 'Tailwind CSS', ],
        github: 'https://github.com/sunes26/css-scanner-extension',
        live: 'https://myportfolio.com'
      },
      {
        title: 'api 테스트 확장프로그램',
        description: '자바스크립트와 리엑트트를 이용한 확장프로그램 프로젝트 입니다. get, post, put, delete 등의 요청을 테스트 할 수 있는 기능을 구현했습니다.',
        image: '/images/projects/project4.png',
        technologies: ['Javascript','React', 'Tailwind CSS', ],
        github: 'https://github.com/sunes26/ApiTest-Pro',
        live: 'https://myportfolio.com'
      },
    ]
  };
  
  export default portfolioData;
