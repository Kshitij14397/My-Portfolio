// ============================================================
// 📝 EDIT THIS FILE to personalize your portfolio
// All your content lives here — update and you're good to go!
// ============================================================

export const personalInfo = {
  name: "Kshitij Pandey",
  title: "Software Engineer",
  tagline:
    "Results-driven software engineer with 3+ years of experience developing scalable and efficient solutions across the tech stack. Known for a detail-oriented approach and a commitment to creating seamless user experiences.",
  email: "kshitij14397@gmail.com",
  resumeUrl: "../../public/Kshitij_Pandey_FullStack_Resume.pdf", // link to your resume PDF
  social: {
    github: "https://github.com/Kshitij14397",
    linkedin: "https://www.linkedin.com/in/kshitij14397/",
  },
};

export const aboutMe = {
  paragraphs: [
    "I'm a Software Engineer with 3+ years of experience building performant, production-grade web applications across fintech and food-tech domains. I've worked at Angel One and Rebel Foods, shipping features used by millions of users daily.",
    "I work across the stack — from Solid.js and React on the frontend to Node.js, Express, and Redis on the backend. I'm passionate about web performance, clean architecture, and leveraging AI-assisted development to ship faster.",
  ],
  techStack: [
    "JavaScript",
    "React.js",
    "Solid.js",
    "Node.js",
    "Tailwind",
    "Redux",
    "MongoDB",
    "Redis",
  ],
};

export const experiences = [
  {
    company: "Angel One",
    role: "Software Engineer-1",
    duration: "March 2024 – Present",
    description:
      "Building and optimising the Angel One web trading platform used by millions of retail investors.",
    contributions: [
      "Revamped the Angel One Web Platform (spark-web & spark-login) using the New Design System and in-house solid-component-library, improving code reusability, accessibility, and maintainability — contributing to 60% faster UI performance and order volume increase from 5% to 8%.",
      "Optimised Firebase config through environment-based segregation, reducing payload size from 6.6 KB to 3.8 KB for better efficiency and storage usage.",
      "Refactored Login module in spark-login, cutting bundle size by 18% (89.50 KB → 73.58 KB) and improving Core Web Vitals for Login & Loans pages on both desktop and mobile.",
      "Integrated TNS WebSocket into the Centralized WebSocket system for order updates, lowering resource consumption by cutting active WebSockets from 3 to 2 and Web Workers from 4 to 3.",
      "Implemented Multi-Device Login Notification & Management, enhancing account safety by alerting users of new login activity across different devices.",
    ],
  },
  {
    company: "Rebel Foods (Faasos)",
    role: "Software Engineer-1",
    duration: "July 2022 – March 2024",
    description:
      "Full-stack development on D2C food delivery websites — EatSure, Ovenstory, Behrouz Biryani, and Smoor.",
    contributions: [
      "Worked on EatSure, Ovenstory, Behrouz Biryani and Smoor websites.",
      "Implemented JSON Schema for D2C websites, enhancing search engine visibility and optimizing SEO performance.",
      "Implemented Algolia-based backend feature to dynamically insert and search dynamic food combos data for enhanced user experience.",
      "Responsible for D2C modularity, backward compatibility, multiple channel support and backend development for Smoor website.",
    ],
  },
  {
    company: "Rapid Innovation",
    role: "Engineering Intern",
    duration: "January 2022 – May 2022",
    description:
      "Trained on blockchain technologies and smart contract development in a Web3 focused company.",
    contributions: [
      "Learned and trained on smart contracts like ERC20, ERC721, ERC1155 Tokens.",
      "Learned Ethereum, Uniswap V2 and Compound protocol.",
    ],
  },
];

export const projects = [
  {
    title: "Swiggy Clone App",
    description:
      "A config-driven React app that displays Swiggy restaurants and their menus using Swiggy's live API. Features include top-rated restaurant filtering, search bar, and dynamic routing.",
    techStack: [
      "React.js",
      "Tailwind",
      "HTML",
      "CSS",
      "React Router",
      "Redux.js",
    ],
    githubUrl: "https://github.com/Kshitij14397/DishOrder-Food-App", // update with exact repo URL
    liveUrl: "",
  },
  {
    title: "DevTinder",
    description:
      "A Tinder-like social networking app for IT professionals with feed, interests, and connections. Features JWT auth, daily interest emails via AWS SES, and deployment on AWS EC2 with Nginx & PM2.",
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "MongoDB Atlas",
      "GoDaddy",
      "Amazon Web Services (AWS)",
      "Cloudfare",
      "PM2",
      "Razorpay",
      "Sockets",
    ],
    githubUrl: "https://github.com/Kshitij14397/devTinder-web", // update with exact repo URL
    liveUrl: "",
  },
  {
    title: "NetflixGPT",
    description:
      "Built a Netflix clone with a responsive UI and streaming-like browsing experience. Integrated GPT-3.5 Turbo API to provide AI-driven movie suggestions through an interactive search feature. Implemented Firebase authentication and added basic multi-language support for a wider audience reach.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "HTML",
      "CSS",
      "Redux.js",
      "OpenAI API",
      "React Router",
    ],
    githubUrl: "https://github.com/Kshitij14397/Netflix-GPT", // update with exact repo URL
    liveUrl: "",
  },
  {
    title: "Tours Booking App",
    description:
      "Developing a Server Side Web Application for Tours Booking using Node.js, Express and MongoDB. Used JWT for Authentication, Authorization & Security. Advanced API Features: Pagination, Filtering, Advance Filtering, Sorting, Limiting Fields and Aliasing. Implemented Global Error Handling Middleware using Express.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MailTrap",
      "Postman",
      "MongoDB Atlas",
    ],
    githubUrl: "https://github.com/Kshitij14397/Netflix-GPT", // update with exact repo URL
    liveUrl: "",
  },
  {
    title: "YouTube Clone – Video Streaming Web App",
    description:
      " Developed a YouTube-like platform with real-time video feed integration using the YouTube API. Implemented nested comments and a live chat system supporting anonymous messages for interactive engagement. Added infinite scroll for seamless content browsing and improved user experience.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Redux.js",
      "React Router",
    ],
    githubUrl: "https://github.com/Kshitij14397/Netflix-GPT", // update with exact repo URL
    liveUrl: "",
  },
];

export const skills = {
  Languages: ["JavaScript", "Java"],
  "Libraries & Frameworks": [
    "React.js",
    "Solid.js",
    "Node.js",
    "Express",
    "Redux",
    "Tailwind",
  ],
  Database: ["MySQL", "MongoDB", "Redis"],
  Tools: ["Git", "Grafana", "Firebase", "Datadog", "Algolia"],
  "AI-Assisted Dev": ["GitHub Copilot", "Cursor", "ChatGPT"],
};

export const education = [
  {
    degree: "Master of Computer Applications",
    field: "Computer Applications",
    institution: "National Institute of Technology, Kurukshetra",
    duration: "July 2019 – July 2022",
    grade: "CGPA 9.17",
    highlights: [],
  },
  {
    degree: "Bachelor of Computer Applications",
    field: "Computer Applications",
    institution:
      "Sherwood College of Professional Management, Lucknow University",
    duration: "July 2016 – July 2019",
    grade: "Percentage 72.5%",
    highlights: [],
  },
];
