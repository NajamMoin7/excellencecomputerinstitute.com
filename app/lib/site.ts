export const site = {
  name: "Excellence Computer Institute",
  slogan: "Learn Skills. Build Your Future.",
  url: "https://excellencecomputerinstitute.com",
  address: "B-53 Aleemabad, Malir, Karachi",
  phone: "0339-0023579",
  phoneHref: "tel:+923390023579",
  whatsapp: "https://wa.me/923390023579",
  email: "info@excellencecomputerinstitute.com",
  logo: "/logo.png",
  favicon: "/logo.png",
  feeNote:
    "For course fee details, please visit our campus or enquire on the given number.",
  keywords: [
    "Excellence Computer Institute",
    "Computer Institute in Malir",
    "Computer Courses in Karachi",
    "MS Office Course in Malir",
    "Web Development Course in Karachi",
    "English Language Course in Malir",
    "WordPress Course in Karachi",
    "Front End Development Course Karachi",
    "Backend Developer Training",
    "MERN Stack Course Karachi",
    "Laravel Course Karachi",
    "React JS Course Karachi",
    "Computer Training Institute Karachi",
    "Computer Institute in Malir Karachi",
    "Excellence Computer Institute Courses",
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Contact Us", href: "/contact" },
];

export const englishCourseLinks = [
  {
    label: "Excellence English",
    href: "/courses/english-language/excellence-english",
  },
  {
    label: "Pre Foundation",
    href: "/courses/english-language/pre-foundation",
  },
  {
    label: "Foundation",
    href: "/courses/english-language/foundation",
  },
  {
    label: "Intermediate Course",
    href: "/courses/english-language/intermediate-course",
  },
  {
    label: "Advance Intermediate Course",
    href: "/courses/english-language/advance-intermediate-course",
  },
  {
    label: "Elementary",
    href: "/courses/english-language/elementary",
  },
];

export const webDevelopmentCourseLinks = [
  {
    label: "Front End Development",
    href: "/courses/web-development/front-end-development",
  },
  {
    label: "Back End Development",
    href: "/courses/web-development/back-end-development",
  },
  {
    label: "MERN Stack Development",
    href: "/courses/web-development/mern-stack-development",
  },
  {
    label: "WordPress Development",
    href: "/courses/web-development/wordpress-development",
  },
];

export const courseNavLinks = [
  {
    label: "English Language",
    href: "/courses/english-language",
    children: englishCourseLinks,
  },
  { label: "MS Office", href: "/courses/ms-office" },
  {
    label: "Web Development",
    href: "/courses/web-development",
    children: webDevelopmentCourseLinks,
  },
];

export const classSchedule = {
  conduct: "Classes will be conducted 2 hours a day, 3 days a week.",
  batches: [
    { label: "Batch 1", days: "Monday, Wednesday, Friday" },
    { label: "Batch 2", days: "Tuesday, Thursday, Saturday" },
  ],
  timingSlots: ["3:00 PM to 5:00 PM", "5:00 PM to 7:00 PM", "7:00 PM to 9:00 PM"],
  note: "Students can select their preferred days and timing slot according to availability.",
};

export const stats = [
  "Practical Training",
  "Career Guidance",
  "Beginner Friendly",
  "Project-Based Learning",
];

export const courseCategories = [
  {
    title: "English Language Courses",
    description:
      "Improve spoken English, grammar, vocabulary, confidence, pronunciation, and communication skills in a supportive classroom environment.",
    courses: [
      {
        title: "Excellence English",
        duration: "3 Months",
        focus: "Spoken English, grammar, vocabulary, confidence building",
      },
      {
        title: "Pre Foundation",
        duration: "1 Month",
        focus: "Basic English, sentence structure, daily conversation",
      },
      {
        title: "Foundation",
        duration: "2 Months",
        focus: "Grammar, reading, writing, speaking practice",
      },
      {
        title: "Intermediate Course",
        duration: "3 Months",
        focus: "Fluency, conversation skills, vocabulary, presentation skills",
      },
      {
        title: "Advance Intermediate Course",
        duration: "3 Months",
        focus:
          "Advanced speaking, professional communication, interview preparation",
      },
      {
        title: "Elementary",
        duration: "2 Months",
        focus: "Basic language skills, pronunciation, writing and speaking confidence",
      },
    ],
  },
  {
    title: "MS Office Courses",
    description:
      "Learn essential office tools required for study, jobs, business, and professional work with practical assignments.",
    courses: [
      {
        title: "MS Word",
        duration: "1 Month",
        focus: "Document formatting, letters, reports, tables, professional documents",
      },
      {
        title: "MS Excel",
        duration: "2 Months",
        focus: "Formulas, functions, charts, data entry, reports, basic analysis",
      },
      {
        title: "MS PowerPoint",
        duration: "1 Month",
        focus:
          "Presentations, slide design, animations, academic and business presentations",
      },
      {
        title: "MS Office with AI",
        duration: "2 Months",
        focus:
          "Word, Excel, PowerPoint with AI tools, productivity, smart documentation, AI-assisted office work",
      },
    ],
  },
  {
    title: "Web Development Courses",
    description:
      "Choose a focused web development path: frontend for website interfaces, backend for dynamic systems, or MERN stack for complete web applications.",
    courses: [
      {
        title: "Front End Development",
        duration: "4 Months",
        modules: [
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "Tailwind CSS",
          "React JS",
        ],
      },
      {
        title: "Back End Development",
        duration: "5 Months",
        modules: [
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "Tailwind CSS",
          "MySQL",
          "PHP",
          "Laravel",
        ],
      },
      {
        title: "MERN Stack Development",
        duration: "6 Months",
        modules: [
          "MongoDB",
          "Express JS",
          "React JS",
          "Node JS",
        ],
      },
      {
        title: "WordPress Development",
        duration: "3 Months",
        modules: [
          "WordPress",
          "Elementor",
          "Themes",
          "Plugins",
        ],
      },
    ],
  },
];

export const careerSupport = [
  "Portfolio guidance",
  "Job profile preparation",
  "Freelancing basics",
  "Real-world projects",
  "Interview preparation",
  "Practical assignments",
];

export type CoursePage = {
  slug: string;
  title: string;
  navLabel: string;
  duration: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  overview: string;
  learn: string[];
  modules: string[];
  whoCanJoin: string[];
  benefits: string[];
  technologies?: string[];
  subCourses?: Array<{
    title: string;
    href: string;
    duration: string;
    description: string;
    topics: string[];
  }>;
  practicalActivities?: string[];
  studentOutcomes?: string[];
  roadmap?: string[];
  project?: {
    title: string;
    text: string;
    highlights?: string[];
  };
  jobProfile?: {
    title: string;
    description: string;
    careerPath: string;
    expectedSkills: string[];
    industryRole: string;
    portfolioRequirement: string;
  };
};

export const coursePages: CoursePage[] = [
  {
    slug: "english-language",
    title: "English Language Course",
    navLabel: "English Language",
    duration: "1 to 3 Months",
    seoTitle: "English Language Course in Malir",
    seoDescription:
      "Join the English Language Course in Malir at Excellence Computer Institute to improve spoken English, grammar, vocabulary, pronunciation, confidence, and communication skills.",
    keywords: [
      "English Language Course in Malir",
      "Spoken English Course Karachi",
      "English Language Course in Karachi",
      "Computer Institute in Malir Karachi",
    ],
    overview:
      "This course helps students improve spoken English, grammar, vocabulary, pronunciation, reading, writing, presentation confidence, and daily communication through guided practice.",
    learn: [
      "Speak confidently in daily conversations",
      "Improve grammar, sentence structure, and vocabulary",
      "Practice pronunciation and fluency",
      "Prepare for interviews and presentations",
      "Build reading, writing, listening, and speaking confidence",
    ],
    modules: [
      "Basic English",
      "Sentence structure",
      "Grammar practice",
      "Vocabulary building",
      "Daily conversation",
      "Pronunciation",
      "Presentation skills",
      "Interview preparation",
    ],
    whoCanJoin: [
      "Students",
      "Beginners",
      "Job seekers",
      "Professionals",
      "Freelancers",
      "Anyone who wants better communication skills",
    ],
    benefits: [
      "Better confidence in spoken English",
      "Improved academic and workplace communication",
      "Stronger interview and presentation skills",
      "Helpful foundation for jobs, freelancing, and professional growth",
    ],
    subCourses: [
      {
        title: "Excellence English",
        href: "/courses/english-language/excellence-english",
        duration: "3 Months",
        description:
          "A complete English communication program covering speaking, grammar, vocabulary, pronunciation, presentation and interview confidence.",
        topics: ["Spoken English", "Grammar", "Vocabulary", "Interview"],
      },
      {
        title: "Pre Foundation",
        href: "/courses/english-language/pre-foundation",
        duration: "1 Month",
        description:
          "A beginner-level course for students who need help with alphabets, basic words, simple sentences and early speaking practice.",
        topics: ["Alphabet", "Basic Words", "Sentences", "Listening"],
      },
      {
        title: "Foundation",
        href: "/courses/english-language/foundation",
        duration: "2 Months",
        description:
          "Build grammar basics, sentence structure, vocabulary, reading, writing and daily conversation confidence.",
        topics: ["Parts of Speech", "Tenses", "Writing", "Speaking"],
      },
      {
        title: "Intermediate Course",
        href: "/courses/english-language/intermediate-course",
        duration: "3 Months",
        description:
          "Improve fluency through detailed tenses, voice, narration, conversation, paragraph writing and presentations.",
        topics: ["Tenses", "Voice", "Conversation", "Presentation"],
      },
      {
        title: "Advance Intermediate Course",
        href: "/courses/english-language/advance-intermediate-course",
        duration: "3 Months",
        description:
          "Professional English training for interviews, workplace communication, debate, email writing and public speaking.",
        topics: ["Advanced Grammar", "Debate", "Email Writing", "Public Speaking"],
      },
      {
        title: "Elementary",
        href: "/courses/english-language/elementary",
        duration: "2 Months",
        description:
          "Basic reading, writing, speaking, pronunciation, sentence making and daily English practice for school students and learners.",
        topics: ["Reading", "Writing", "Speaking", "Pronunciation"],
      },
    ],
  },
  {
    slug: "english-language/excellence-english",
    title: "Excellence English",
    navLabel: "Excellence English",
    duration: "3 Months",
    seoTitle: "Excellence English Course in Malir Karachi",
    seoDescription:
      "Join Excellence English at Excellence Computer Institute in Malir to improve spoken English, grammar, vocabulary, pronunciation, presentation skills and interview confidence.",
    keywords: [
      "English Language Course in Malir",
      "Spoken English Course Karachi",
      "Interview English Course Karachi",
      "Excellence Computer Institute English Course",
    ],
    overview:
      "Excellence English is a complete communication improvement course for students, job seekers, beginners and professionals who want stronger spoken English, grammar, vocabulary, confidence and presentation skills.",
    learn: [
      "Speak English with better confidence",
      "Improve grammar and sentence structure",
      "Build useful vocabulary for daily life",
      "Practice pronunciation and conversation",
      "Prepare for interviews and presentations",
    ],
    modules: [
      "Spoken English",
      "Grammar improvement",
      "Vocabulary building",
      "Pronunciation practice",
      "Daily conversation",
      "Confidence building",
      "Presentation skills",
      "Interview preparation",
      "Public speaking basics",
    ],
    whoCanJoin: [
      "Students",
      "Job seekers",
      "Beginners",
      "Professionals",
      "Learners who want complete English communication improvement",
    ],
    practicalActivities: [
      "Daily conversation drills",
      "Presentation practice",
      "Interview role play",
      "Pronunciation correction",
      "Public speaking activities",
    ],
    studentOutcomes: [
      "Improved spoken English confidence",
      "Better grammar and vocabulary use",
      "Stronger presentation and interview communication",
      "More confidence in daily and professional conversations",
    ],
    benefits: [
      "Complete English communication improvement",
      "Better confidence for study, jobs and interviews",
      "Practical speaking and presentation practice",
      "Helpful foundation for academic and professional growth",
    ],
  },
  {
    slug: "english-language/pre-foundation",
    title: "Pre Foundation English Course",
    navLabel: "Pre Foundation",
    duration: "1 Month",
    seoTitle: "Pre Foundation English Course in Malir",
    seoDescription:
      "Start English from the basics with Pre Foundation at Excellence Computer Institute in Malir. Learn alphabets, basic words, simple sentences and daily vocabulary.",
    keywords: [
      "English Grammar Course Malir",
      "English Speaking Course for Students",
      "English Language Course in Malir",
      "Excellence Computer Institute English Course",
    ],
    overview:
      "Pre Foundation is designed for absolute beginners and students with weak English basics. The course starts gently from alphabets, basic words, simple sentences and listening practice.",
    learn: [
      "Revise English alphabets and sounds",
      "Understand basic words and daily vocabulary",
      "Make simple English sentences",
      "Start speaking with guided practice",
      "Improve basic listening and reading confidence",
    ],
    modules: [
      "English alphabet revision",
      "Basic words",
      "Simple sentences",
      "Daily use vocabulary",
      "Basic grammar",
      "Introduction to speaking",
      "Listening practice",
      "Reading practice",
    ],
    whoCanJoin: [
      "Absolute beginners",
      "Students with weak English basics",
      "School students",
      "Learners starting English from the beginning",
    ],
    practicalActivities: [
      "Alphabet and sound practice",
      "Word reading activities",
      "Simple sentence making",
      "Basic listening exercises",
      "Daily vocabulary practice",
    ],
    studentOutcomes: [
      "Clearer English basics",
      "Ability to read and understand simple words",
      "Confidence to make simple sentences",
      "Readiness for the Foundation level",
    ],
    benefits: [
      "Strong start for weak English learners",
      "Better basic reading and listening",
      "Simple sentence confidence",
      "Helpful preparation for higher English levels",
    ],
  },
  {
    slug: "english-language/foundation",
    title: "Foundation English Course",
    navLabel: "Foundation",
    duration: "2 Months",
    seoTitle: "Foundation English Grammar Course in Malir",
    seoDescription:
      "Build English grammar and speaking confidence with the Foundation English Course in Malir at Excellence Computer Institute.",
    keywords: [
      "English Grammar Course Malir",
      "English Language Course in Malir",
      "Spoken English Course Karachi",
      "English Speaking Course for Students",
    ],
    overview:
      "Foundation is for students who understand basic English but need stronger grammar, sentence structure, vocabulary and speaking confidence.",
    learn: [
      "Understand parts of speech",
      "Use basic tenses correctly",
      "Build better sentence structure",
      "Improve reading and writing skills",
      "Practice daily English conversation",
    ],
    modules: [
      "Parts of speech",
      "Tenses basics",
      "Sentence structure",
      "Reading improvement",
      "Writing practice",
      "Speaking practice",
      "Vocabulary development",
      "Daily conversation",
    ],
    whoCanJoin: [
      "Students with basic English understanding",
      "Learners who need grammar confidence",
      "School and college students",
      "Beginners moving beyond basics",
    ],
    practicalActivities: [
      "Grammar exercises",
      "Sentence correction",
      "Reading aloud",
      "Short writing tasks",
      "Daily conversation practice",
    ],
    studentOutcomes: [
      "Better grammar foundation",
      "Improved sentence making",
      "Stronger reading and writing confidence",
      "Better daily conversation ability",
    ],
    benefits: [
      "Grammar and speaking confidence",
      "Better academic English support",
      "Practical daily communication practice",
      "Preparation for intermediate English learning",
    ],
  },
  {
    slug: "english-language/intermediate-course",
    title: "Intermediate English Course",
    navLabel: "Intermediate Course",
    duration: "3 Months",
    seoTitle: "Intermediate Spoken English Course Karachi",
    seoDescription:
      "Improve fluency, grammar, conversation, writing and presentation skills with the Intermediate English Course at Excellence Computer Institute.",
    keywords: [
      "Spoken English Course Karachi",
      "English Grammar Course Malir",
      "English Speaking Course for Students",
      "English Language Course in Malir",
    ],
    overview:
      "Intermediate Course helps students improve fluency, confidence and communication through detailed grammar, conversation practice, paragraph writing and presentation skills.",
    learn: [
      "Use tenses with better accuracy",
      "Understand active and passive voice",
      "Practice direct and indirect speech",
      "Improve paragraph writing",
      "Build fluency through speaking activities",
    ],
    modules: [
      "Tenses in detail",
      "Active and passive voice",
      "Direct and indirect speech",
      "Conversation practice",
      "Paragraph writing",
      "Listening and speaking activities",
      "Vocabulary expansion",
      "Presentation skills",
    ],
    whoCanJoin: [
      "Students who want fluency",
      "Learners building communication confidence",
      "College students",
      "Job seekers improving spoken English",
    ],
    practicalActivities: [
      "Conversation circles",
      "Paragraph writing tasks",
      "Listening and response practice",
      "Presentation practice",
      "Vocabulary usage activities",
    ],
    studentOutcomes: [
      "Improved fluency and confidence",
      "Better grammar control",
      "Stronger writing and presentation skills",
      "More natural conversation ability",
    ],
    benefits: [
      "Better speaking confidence",
      "Improved grammar accuracy",
      "Useful writing and presentation practice",
      "Preparation for advanced communication needs",
    ],
  },
  {
    slug: "english-language/advance-intermediate-course",
    title: "Advance Intermediate English Course",
    navLabel: "Advance Intermediate Course",
    duration: "3 Months",
    seoTitle: "Advance Intermediate English Course Karachi",
    seoDescription:
      "Prepare for study, jobs, interviews and workplace communication with advanced grammar, debate, email writing and public speaking practice.",
    keywords: [
      "Interview English Course Karachi",
      "Spoken English Course Karachi",
      "English Grammar Course Malir",
      "Excellence Computer Institute English Course",
    ],
    overview:
      "Advance Intermediate Course is designed for students, job seekers and professionals preparing for study, jobs, interviews or workplace communication.",
    learn: [
      "Communicate professionally",
      "Use advanced grammar in real situations",
      "Participate in group discussions and debates",
      "Write better emails",
      "Build presentation and public speaking confidence",
    ],
    modules: [
      "Advanced grammar",
      "Professional communication",
      "Group discussion",
      "Debate practice",
      "Interview preparation",
      "Email writing",
      "Personality development",
      "Presentation confidence",
      "Public speaking",
      "Real-life conversation practice",
    ],
    whoCanJoin: [
      "Students preparing for higher study",
      "Job seekers",
      "Professionals",
      "Learners preparing for interviews",
      "Students who want advanced communication confidence",
    ],
    practicalActivities: [
      "Group discussions",
      "Debate sessions",
      "Interview practice",
      "Email writing tasks",
      "Public speaking exercises",
    ],
    studentOutcomes: [
      "Professional communication confidence",
      "Better interview readiness",
      "Improved presentation and debate skills",
      "Stronger workplace English ability",
    ],
    benefits: [
      "Study, job and interview communication support",
      "Professional speaking and writing practice",
      "Confidence for workplace conversations",
      "Personality and presentation development",
    ],
  },
  {
    slug: "english-language/elementary",
    title: "Elementary English Course",
    navLabel: "Elementary",
    duration: "2 Months",
    seoTitle: "Elementary English Course for Students in Malir",
    seoDescription:
      "Improve basic reading, writing, speaking, pronunciation and vocabulary with the Elementary English Course at Excellence Computer Institute.",
    keywords: [
      "English Speaking Course for Students",
      "English Language Course in Malir",
      "English Grammar Course Malir",
      "Excellence Computer Institute English Course",
    ],
    overview:
      "Elementary is for school students and learners who need basic English improvement in reading, writing, speaking, pronunciation, vocabulary and daily practice.",
    learn: [
      "Read basic English with confidence",
      "Write simple sentences",
      "Practice basic speaking",
      "Improve pronunciation",
      "Build daily vocabulary",
    ],
    modules: [
      "Basic reading",
      "Basic writing",
      "Basic speaking",
      "Pronunciation",
      "Sentence making",
      "Vocabulary building",
      "Listening activities",
      "Daily English practice",
    ],
    whoCanJoin: [
      "School students",
      "Basic English learners",
      "Learners who need reading and writing support",
      "Students needing daily English practice",
    ],
    practicalActivities: [
      "Reading practice",
      "Simple writing activities",
      "Pronunciation drills",
      "Sentence making exercises",
      "Daily English speaking practice",
    ],
    studentOutcomes: [
      "Better basic reading and writing",
      "Improved pronunciation",
      "More confidence in simple speaking",
      "Stronger vocabulary for daily use",
    ],
    benefits: [
      "Basic English improvement for students",
      "Better reading and writing confidence",
      "Practical daily English practice",
      "Foundation for higher English courses",
    ],
  },
  {
    slug: "ms-office",
    title: "MS Office Course",
    navLabel: "MS Office",
    duration: "1 to 2 Months",
    seoTitle: "MS Office Course in Malir",
    seoDescription:
      "Learn MS Word, MS Excel, MS PowerPoint and AI-assisted office productivity at Excellence Computer Institute in Malir, Karachi.",
    keywords: [
      "MS Office Course in Malir",
      "MS Excel Course in Karachi",
      "Computer Courses in Karachi",
      "Excellence Computer Institute Courses",
    ],
    overview:
      "The MS Office course teaches practical office tools required for study, jobs, business documentation, reports, presentations, data entry, and productivity.",
    learn: [
      "Create professional documents in MS Word",
      "Use Excel formulas, charts, reports, and basic analysis",
      "Design academic and business presentations",
      "Use AI tools for smart documentation and office productivity",
      "Handle practical office assignments with confidence",
    ],
    modules: [
      "MS Word formatting",
      "Letters and reports",
      "Tables and professional documents",
      "MS Excel formulas",
      "Functions and charts",
      "Data entry and reports",
      "MS PowerPoint slide design",
      "MS Office with AI tools",
    ],
    whoCanJoin: [
      "Students",
      "Office job seekers",
      "Business owners",
      "Teachers",
      "Professionals",
      "Beginners learning computer office work",
    ],
    benefits: [
      "Practical office software confidence",
      "Better job and internship readiness",
      "Improved academic and business documentation",
      "Useful skills for office, school, business, and freelance support work",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development Courses",
    navLabel: "Web Development",
    duration: "3 to 6 Months",
    seoTitle: "Web Development Course in Karachi",
    seoDescription:
      "Explore Web Development courses in Karachi at Excellence Computer Institute including Front End Development, Back End Development, MERN Stack Development and WordPress Development.",
    keywords: [
      "Web Development Course in Karachi",
      "Front End Development Course Karachi",
      "MERN Stack Course Karachi",
      "WordPress Course in Karachi",
      "Laravel Course Karachi",
    ],
    overview:
      "Choose a focused web development path according to your career goal. Learn frontend interfaces, backend systems, MERN stack applications, or WordPress website development with practical project-based training.",
    learn: [
      "Choose a clear frontend, backend, MERN stack, or WordPress path",
      "Build modern websites and web applications",
      "Practice with real tools, projects, and portfolio guidance",
      "Prepare for freelancing, internships, and junior developer roles",
      "Understand practical workflows used in professional web development",
    ],
    modules: [
      "Front End Development",
      "Back End Development",
      "MERN Stack Development",
      "WordPress Development",
      "Portfolio Projects",
      "Job Profile Preparation",
    ],
    whoCanJoin: [
      "Students",
      "Beginners interested in coding",
      "Freelancers",
      "Job seekers",
      "Career changers",
      "Professionals building technical skills",
    ],
    benefits: [
      "Clear web development learning paths",
      "Portfolio-ready project direction",
      "Frontend, backend, MERN stack and WordPress options",
      "Helpful foundation for jobs, freelancing and independent projects",
    ],
    subCourses: [
      {
        title: "Front End Development",
        href: "/courses/web-development/front-end-development",
        duration: "4 Months",
        description:
          "Learn HTML, CSS, JavaScript, Bootstrap, Tailwind CSS and React JS to build modern responsive interfaces.",
        topics: ["HTML", "CSS", "JavaScript", "React JS"],
      },
      {
        title: "Back End Development",
        href: "/courses/web-development/back-end-development",
        duration: "5 Months",
        description:
          "Learn MySQL, PHP and Laravel to build dynamic applications, admin dashboards and database-driven systems.",
        topics: ["MySQL", "PHP", "Laravel", "REST APIs"],
      },
      {
        title: "MERN Stack Development",
        href: "/courses/web-development/mern-stack-development",
        duration: "6 Months",
        description:
          "Learn MongoDB, Express JS, React JS and Node JS to build complete full stack web applications.",
        topics: ["MongoDB", "Express JS", "React JS", "Node JS"],
      },
      {
        title: "WordPress Development",
        href: "/courses/web-development/wordpress-development",
        duration: "3 Months",
        description:
          "Learn WordPress, Elementor, theme customization, plugin customization and business website creation.",
        topics: ["WordPress", "Elementor", "Themes", "Plugins"],
      },
    ],
  },
  {
    slug: "web-development/front-end-development",
    title: "Front End Development",
    navLabel: "Front End Development",
    duration: "4 Months",
    seoTitle: "Front End Development Course Karachi",
    seoDescription:
      "Learn Front End Development in Karachi with HTML, CSS, JavaScript, Bootstrap, Tailwind CSS and React JS. Build responsive websites and portfolio-ready interfaces.",
    keywords: [
      "Front End Development Course Karachi",
      "React JS Course Karachi",
      "HTML CSS JavaScript Course",
      "Frontend Developer Training",
    ],
    overview:
      "This course prepares students to build clean, responsive and modern website interfaces using HTML, CSS, JavaScript, Bootstrap, Tailwind CSS and React JS.",
    learn: [
      "Responsive Website Development",
      "React JS Applications",
      "UI Development",
      "Modern Web Interfaces",
      "Portfolio Projects",
    ],
    modules: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "React JS",
    ],
    whoCanJoin: [
      "Beginners interested in website design",
      "Students",
      "Freelancers",
      "Job seekers",
      "Anyone who wants to build modern user interfaces",
    ],
    benefits: [
      "Build responsive websites",
      "Create interactive user interfaces",
      "Understand modern frontend workflow",
      "Build React JS components",
      "Create portfolio-ready projects",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React JS"],
    roadmap: ["Foundation", "Intermediate", "Project", "Job Profile"],
    project: {
      title: "E-Project",
      text: "Students will build a complete responsive frontend project using modern web development technologies.",
      highlights: ["Responsive UI", "React Components", "Portfolio Presentation"],
    },
    jobProfile: {
      title: "Front End Developer",
      description:
        "Prepare students for Front End Developer roles with portfolio guidance, project presentation, CV building and interview preparation.",
      careerPath: "Front End Developer",
      expectedSkills: ["Responsive websites", "React JS interfaces", "Modern UI development"],
      industryRole: "Build user-facing websites, dashboards and web interfaces.",
      portfolioRequirement: "A polished responsive frontend project with source files and presentation notes.",
    },
  },
  {
    slug: "web-development/back-end-development",
    title: "Back End Development",
    navLabel: "Back End Development",
    duration: "5 Months",
    seoTitle: "Back End Development Course Karachi",
    seoDescription:
      "Learn Back End Development in Karachi with HTML, CSS, JavaScript, MySQL, PHP and Laravel. Build database-driven applications, dashboards and APIs.",
    keywords: [
      "PHP Course Karachi",
      "Laravel Course Karachi",
      "Backend Developer Training",
      "MySQL Course Karachi",
    ],
    overview:
      "This course focuses on server-side development and database-driven web applications. Students learn frontend fundamentals, MySQL, PHP, Laravel, admin panels, CRUD systems and REST APIs.",
    learn: [
      "Dynamic Website Development",
      "Laravel Applications",
      "Admin Panels",
      "Database Management",
      "REST APIs",
    ],
    modules: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "MySQL",
      "PHP",
      "Laravel",
    ],
    whoCanJoin: [
      "Students with basic web knowledge",
      "Frontend learners moving into backend",
      "Freelancers",
      "Job seekers",
      "Anyone interested in server-side development",
    ],
    benefits: [
      "Build dynamic websites",
      "Create database-connected applications",
      "Develop admin dashboards",
      "Work with Laravel MVC structure",
      "Understand backend security basics",
      "Build portfolio-ready backend projects",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "MySQL", "PHP", "Laravel"],
    roadmap: ["Foundation", "Intermediate", "Project", "Job Profile"],
    project: {
      title: "E-Project",
      text: "Students will develop complete database-driven web applications and admin dashboards.",
      highlights: ["Laravel App", "Admin Dashboard", "Database Workflow"],
    },
    jobProfile: {
      title: "Back End Developer",
      description:
        "Prepare students for professional Back End Developer roles with practical Laravel and database projects.",
      careerPath: "Back End Developer",
      expectedSkills: ["Laravel applications", "MySQL database design", "REST API development"],
      industryRole: "Build secure server-side systems, dashboards and application logic.",
      portfolioRequirement: "A complete database-driven Laravel project with admin features.",
    },
  },
  {
    slug: "web-development/mern-stack-development",
    title: "MERN Stack Development",
    navLabel: "MERN Stack Development",
    duration: "6 Months",
    seoTitle: "MERN Stack Course Karachi",
    seoDescription:
      "Learn MERN Stack Development in Karachi with MongoDB, Express JS, React JS and Node JS. Build complete real-world full stack web applications.",
    keywords: [
      "MERN Stack Course Karachi",
      "Node JS Course Karachi",
      "React JS Course Karachi",
      "MongoDB Training Karachi",
    ],
    overview:
      "Learn modern full stack application development using the MERN Stack and build complete real-world web applications.",
    learn: [
      "Full Stack Web Applications",
      "REST APIs",
      "React Frontend Development",
      "Node Backend Development",
      "MongoDB Database Design",
    ],
    modules: [
      "HTML & CSS Fundamentals",
      "JavaScript Advanced",
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "Full Stack Project",
    ],
    whoCanJoin: [
      "Students with basic frontend knowledge",
      "Frontend or backend learners",
      "Freelancers",
      "Job seekers",
      "Students aiming for complete web application development",
    ],
    benefits: [
      "Build complete web applications",
      "Work with frontend and backend together",
      "Create REST APIs",
      "Connect React with backend",
      "Use MongoDB database",
      "Build full-stack portfolio projects",
    ],
    technologies: ["MongoDB", "Express JS", "React JS", "Node JS"],
    project: {
      title: "Final MERN Project",
      text: "Students will build a complete full stack application using MongoDB, Express JS, React JS and Node JS.",
      highlights: ["Final MERN Project", "Portfolio Development", "Freelancing Guidance", "Job Preparation"],
    },
    jobProfile: {
      title: "MERN Stack Developer",
      description:
        "Prepare students for MERN Stack Developer roles with full stack project work, portfolio development, freelancing guidance and job preparation.",
      careerPath: "MERN Stack Developer",
      expectedSkills: ["React frontend development", "Node and Express APIs", "MongoDB database design"],
      industryRole: "Develop complete full stack applications from frontend interfaces to backend APIs.",
      portfolioRequirement: "A complete MERN stack project with authentication, APIs and database integration.",
    },
  },
  {
    slug: "web-development/wordpress-development",
    title: "WordPress Development Course",
    navLabel: "WordPress Development",
    duration: "3 Months",
    seoTitle: "WordPress Course in Karachi",
    seoDescription:
      "Join the WordPress Course in Karachi at Excellence Computer Institute and learn Elementor, theme customization, plugin customization and business website development.",
    keywords: [
      "WordPress Course in Karachi",
      "WordPress Development Course Karachi",
      "Computer Courses in Karachi",
      "Excellence Computer Institute Courses",
    ],
    overview:
      "This WordPress course teaches learners how to create modern websites with WordPress, Elementor, theme customization, plugin customization, and practical portfolio projects.",
    learn: [
      "Build business and portfolio websites with WordPress",
      "Use Elementor for modern page design",
      "Customize themes and plugins",
      "Understand hosting-ready website structure",
      "Create a portfolio project for clients or freelance work",
    ],
    modules: [
      "WordPress basics",
      "Elementor",
      "Custom theme development",
      "Plugin customization",
      "Website design",
      "Business website development",
      "Portfolio project",
      "Freelancing basics",
    ],
    whoCanJoin: [
      "Students",
      "Beginners",
      "Freelancers",
      "Small business owners",
      "Design learners",
      "Anyone interested in website building",
    ],
    benefits: [
      "Ability to build client-ready WordPress websites",
      "Practical portfolio project",
      "Helpful foundation for freelancing and business website work",
      "No-code and customization confidence for real-world websites",
    ],
  },
];
