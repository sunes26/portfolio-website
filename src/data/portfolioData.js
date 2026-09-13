const portfolioData = {
    profile: {
      name: '전해성',
      title: '풀스택 개발자 · AI 에이전트 엔지니어',
      image: '/images/profile.png', // 실제 사용 시 이미지 경로로 대체
      bio: '아이디어를 기획부터 배포까지 혼자 완성하는 풀스택 개발자입니다. LLM 파이프라인, 자동화 SaaS, 모바일 앱까지 다양한 형태의 AI 프로덕트를 직접 설계하고 만들어왔습니다. PRmate, Spanlens, StarCut처럼 실제 사용자가 있는 서비스를 운영하면서, 사람들이 제가 만든 도구로 시간을 아끼는 모습을 볼 때 가장 큰 보람을 느낍니다. 지금도 새로운 AI 기술을 실제 제품에 빠르게 녹여내는 방법을 계속 연구하고 있습니다.',
      contact: {
        email: 'haeseong050321@email.com',
        github: 'https://github.com/sunes26',
        linkedin: 'https://www.linkedin.com/in/%ED%95%B4%EC%84%B1-%EC%A0%84-57536935a/',
        portfolio: 'https://haeseong.netlify.app/'
      }
    },
    skills: [
      { name: 'TypeScript', level: 85 },
      { name: 'React / Next.js', level: 85 },
      { name: 'AI 에이전트 · LLM 연동 (Claude API, OpenAI)', level: 80 },
      { name: 'Tailwind CSS / UI 구현', level: 80 },
      { name: 'Node.js & API 설계', level: 70 },
      { name: 'React Native / Expo (모바일)', level: 70 },
      { name: 'Database & Infra (Supabase, Firebase, Docker)', level: 65 },
      { name: 'Python', level: 65 }
    ],
    certifications: [
      {
        name: 'ITQ 한글엑셀 A등급',
        issuer: '한국생산성본부(KPC)',
        date: '2021년 12월',
        image: '/images/certifications/cert1.png',
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
        live: 'https://haeseong.netlify.app/',
        downloadUrl: 'https://chromewebstore.google.com/detail/coursemos-downloader/imoikgjofchpnchcaenglpnkcbhkjcge'
      },
      {
        title: '포트폴리오 웹사이트',
        description: '현재 보고 계신 이 포트폴리오 웹사이트입니다. React와 Tailwind CSS를 사용하여 개발했습니다.',
        image: '/images/projects/project2.png',
        technologies: ['React', 'Tailwind CSS',],
        github: 'https://github.com/username/portfolio',
        live: 'https://haeseong.netlify.app/',
       

      },
      {
        title: 'css스캔 확장프로그램',
        description: '자바스크립트를 이용한 확장프로그램 프로젝트 입니다.웹상의 css를 스캔하여 복사 할수 있는 기능을 구현했습니다.',
        image: '/images/projects/project3.png',
        technologies: ['Javascript','Html', 'Tailwind CSS', ],
        github: 'https://github.com/sunes26/css-scanner-extension',
        live: 'https://haeseong.netlify.app/',
        downloadUrl: 'https://chromewebstore.google.com/detail/css-scanner/ombmmcndgiobcinagkgkpfomodfklidp?authuser=0&hl'
      },
      {
        title: 'api 테스트 확장프로그램',
        description: '자바스크립트와 리엑트를 이용한 확장프로그램 프로젝트 입니다. get, post, put, delete 등의 요청을 테스트 할 수 있는 기능을 구현했습니다.',
        image: '/images/projects/project4.png',
        technologies: ['Javascript','React', 'Tailwind CSS', ],
        github: 'https://github.com/sunes26/ApiTest-Pro',
        live: 'https://haeseong.netlify.app/',
        downloadUrl: 'https://chromewebstore.google.com/detail/apitest-pro/fpaamgnalnefmlbmfgpfjaobbicjegjd?authuser=0&hl'
      },
      {
        title: '카카오톡 채팅 분석 웹사이트',
        description: 'Next.js와 TypeScript를 이용한 AI 기반 관계 분석 웹 애플리케이션입니다. OpenAI GPT를 활용하여 카카오톡 대화를 분석하고 호감도, 관계 역학, 심리 프로필 등을 측정하는 기능을 구현했습니다.',
        image: '/images/projects/project5.png',
        technologies: ['Typescript','Nextjs', 'Tailwind CSS', ],
        github: 'https://github.com/sunes26/mind_scanner',
        live: 'https://www.mindscanner.site'
      },
      {
    title: '나비 (Nabi) - 마음을 나누는 힐링 커뮤니티',
    description: 'React와 TypeScript를 이용한 익명 힐링 커뮤니티 웹 애플리케이션입니다. Firebase Firestore를 활용하여 고민과 걱정을 포스트잇에 적어 하늘로 날려보내고, 좋아요와 댓글을 통해 서로에게 위로를 전할 수 있습니다. 무한 스크롤, 검색 기능, 관리자 대시보드 등의 기능을 구현했습니다.',
    image: '/images/projects/project6.png',
    technologies: ['TypeScript', 'React', 'Vite', 'Firebase', 'Framer Motion'],
    github: 'https://github.com/sunes26/postit-nabi',
    live: 'https://postit-nabi.web.app'
  },
  {
    title: '독백일기 - AI 음성 자동 일기 & 감정 성장 앱',
    description: 'React Native와 TypeScript를 이용한 안드로이드 앱입니다. "3분 말하면 AI가 당신의 하루를 기록한다"는 컨셉으로, OpenAI Whisper로 음성을 텍스트로 변환하고 GPT-4o가 일기를 자동 생성합니다. 감정 캘린더, 주간 AI 리포트, 감정 인사이트 등의 기능을 구현했으며 Google Play Store에 출시했습니다.',
    image: '/images/projects/project7.png',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'OpenAI', 'RevenueCat'],
    github: 'https://github.com/sunes26/dokbaekdiary',
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.oceancode.dokbaekdiary'
  },
  {
    title: 'ImageKit - 이미지 편집 앱',
    description: 'React Native(Expo)와 TypeScript를 이용한 안드로이드 이미지 편집 앱입니다. 이미지 크롭·회전·뒤집기·필터 적용, 포맷 변환(JPG/PNG/WEBP), 이미지 압축, EXIF 메타데이터 제거, AI 업스케일(Real-ESRGAN), 배경 제거, PDF 변환 등 다양한 이미지 처리 기능을 구현했습니다. Zustand를 활용한 상태관리와 다크/라이트 테마를 지원합니다.',
    image: '/images/projects/project8.png',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Zustand', 'React Navigation'],
    github: 'https://github.com/sunes26/imagekit',
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.oceancode.imagekitapp'
  },
  {
    title: 'PRmate - 한국어 AI 코드 리뷰 GitHub Action',
    description: 'Next.js와 TypeScript를 이용한 한국어 특화 AI 코드 리뷰 SaaS입니다. GitHub PR이 열리면 자동으로 한국어로 코드 리뷰 코멘트를 게시하며, 우아한테크코스·네이버 Hackday·토스 Frontend Fundamentals 등 공식 컨벤션 프리셋을 내장했습니다. Claude API Prompt Caching으로 토큰 비용 50~90% 절감, API 키·비밀번호 자동 마스킹 기능을 구현했습니다. 현재는 GitHub Actions 기반으로 동작하며, 추후 설치형 GitHub App으로 전환하여 더 넓은 사용자층에게 제공할 계획입니다.',
    image: '/images/projects/project9.png',
    technologies: ['Next.js', 'TypeScript', 'Claude API', 'GitHub Actions', 'Vercel'],
    github: 'https://github.com/sunes26/prmate',
    live: 'https://prmate.me',
  },
  {
    title: 'Spanlens - LLM 옵저버빌리티 플랫폼',
    description: 'Next.js와 TypeScript를 이용한 오픈소스 LLM 옵저버빌리티 SaaS입니다. OpenAI·Anthropic·Gemini 등 11개 프로바이더의 모든 호출을 비용·토큰·레이턴시·에이전트 트레이스와 함께 로깅하며, 번들 MCP 서버를 통해 Cursor·Claude Desktop에서 바로 조회할 수 있습니다. Docker 한 줄로 셀프호스팅이 가능합니다.',
    image: '/images/projects/project10.png',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'ClickHouse', 'Docker'],
    github: 'https://github.com/spanlens/Spanlens',
    live: 'https://www.spanlens.io/'
  },
  {
    title: '영어회화 학습 앱',
    description: 'React와 TypeScript, Vite PWA를 이용한 영어회화 학습 앱입니다. 문장 단위 섀도잉 플레이어, 발음 녹음·STT 피드백, AI 대화 파트너 등을 통해 귀뚫기부터 실전 대화까지 3단계 성장형 학습 루틴을 구현했습니다.',
    image: '/images/projects/project11.png',
    technologies: ['React', 'TypeScript', 'Vite', 'Zustand', 'PWA'],
    github: 'https://github.com/sunes26/study-english'
  },
  {
    title: 'Quick Call - 전화번호 단축 다이얼 앱',
    description: 'Flutter를 이용한 Android 전용 단축 다이얼 앱입니다. 홈 화면 위젯으로 앱 실행 없이 즉시 전화를 걸 수 있고, 그룹별 관리, 30색 커스터마이징, 드래그 앤 드롭 정렬 등의 기능을 구현했으며 Google Play Store에 출시했습니다.',
    image: '/images/projects/project12.png',
    technologies: ['Flutter', 'Dart', 'Provider', 'SQLite'],
    downloadUrl: 'https://play.google.com/store/apps/details?id=com.oceancode.quick_call'
  },
  {
    title: '지하철 러쉬 (Subway Rush)',
    description: '버스에서 내린 뒤 180초 안에 지하철에 탑승해야 하는 시간제한 어드벤처 퍼즐 게임입니다. Blender 3D 파이프라인으로 플레이어·NPC 캐릭터와 맵을 직접 제작했으며, 속도가 아닌 정보 부족으로 플레이어를 막는 설계를 통해 첫 실패조차 엔딩으로 처리되도록 기획했습니다.',
    image: '/images/projects/project13.png',
    technologies: ['Blender', '3D Pipeline', 'Game Design'],
    github: 'https://github.com/sunes26/subway-rush',
    live: 'https://sunes26.github.io/subway-rush/game/dist/index.html'
  },
  {
    title: 'StarCut - 유튜브 쇼츠 자동 생성 앱',
    description: 'Next.js와 TypeScript를 이용한 유튜브 쇼츠 자동 생성 앱입니다. 유튜브 롱폼 영상의 다운로드, 음성 인식, 하이라이트 구간 선정, 합성 렌더까지 하나의 파이프라인으로 처리하며, 주소 하나만 입력하면 중간 확인 없이 후보 구간 전체를 쇼츠로 만들어줍니다.',
    image: '/images/projects/project14.png',
    technologies: ['Next.js', 'TypeScript', 'Drizzle', 'ffmpeg', 'Claude API'],
    live: 'https://www.starcut.co.kr/'
  },

]
  };
  
  export default portfolioData;
