// Skills Section Logo's
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import cssLogo from './assets/tech_logo/css.png';
import expressjsLogo from './assets/tech_logo/express.png';
import figmaLogo from './assets/tech_logo/figma.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import htmlLogo from './assets/tech_logo/html.png';
import javaLogo from './assets/tech_logo/java.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import mcLogo from './assets/tech_logo/mc.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import postmanLogo from './assets/tech_logo/postman.png';
import pythonLogo from './assets/tech_logo/python.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Experience Section Logo's
import calibers_infotech_logo from './assets/company_logo/calibers_infotech_logo.png';
import coding_seekho from './assets/company_logo/coding_seekho.png';

// Education Section Logo's
import gokhle from './assets/education_logo/gokhle.png';
import kvn from './assets/education_logo/kvn.png';
import kvns from './assets/education_logo/kvns.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';
import mygpt from './assets/work_logo/chatbot.png';
import collegeforum from './assets/work_logo/clgf.png';
import krushiscan from './assets/work_logo/krushiscan.png';
import digitalmenucard from './assets/work_logo/menucard.jpg';
import weatherapp from './assets/work_logo/weather.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
  id: 2,
  img: coding_seekho,
  role: "Software Development Intern",
  company: "Humming Byte Technologies Pvt. Ltd.",
  date: "April 2024 - September 2024",
  desc: "Worked on two innovative projects: Digital Menu Card, a web-based solution enabling customers to scan QR codes to view menus and place orders; and an Attendance Management System for tracking employee in/out times using QR codes. Specialized in backend development and enhanced PostgreSQL skills.",
  skills: [
    "React JS",
    "Node JS",
    "Express JS",
    
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Java",
    "Spring Boot",
    "C/C++",
    
    "Git",
    "GitHub",

    "Postman",

    "PostgreSQL",
    "Backend Development",
    "API Integration",
    "QR Code Scanning",
  ],
},
{
  id: 3,
  img: calibers_infotech_logo,
  role: "Software Development Intern",
  company: "Caliber InfoTech",
  date: "May 2023 - June 2023",
  desc: "Contributed to coding and problem-solving in a dynamic software development environment. Focused on user interface design, coding, and practical application of theoretical knowledge.",
  skills: [
    "UI Design",
    "Php",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
    "Postman",
    "Backend Development",
    "API Integration",
    "Coding",
    "Problem Solving",
  ],
}
  ];
  
  export const education = [
    {
      id: 0,
      img:  gokhle,
      school: "R. H. Sapat College of Engineering, Nashik",
      date: "Sept 2024 - May 2027",
      grade: "CGPA: 8.5 (Direct Second Year) | Continuing with consistent academic performance",
      desc: "Pursuing Bachelor of Engineering (BE) in Computer Engineering at R. H. Sapat College of Engineering, Nashik. Engaged in academic excellence and actively exploring new technologies. Focused on full-stack development and backend technologies.",
      degree: "Bachelor of Engineering - BE, Computer Engineering",
    },
    {
      id: 1,
      img:  kvn,
      school: "Loknete Gopinathji Munde Institute of Engineering & Research Center",
      date: "Jun 2021 - Aug 2024",
      grade: "Top",
      desc: "Completed Computer Engineering at Loknete Gopinathji Munde Institute of Engineering & Research Center with a focus on practical application and technology exploration. Achieved 2nd place in a C coding competition, showcasing proficiency in problem-solving and development skills.",
      degree: "Bachelor of Engineering - BE, Computer Engineering",
    },
    {
      id: 2,
      img:  kvns,
      school: "Madhyamik Vidya Mandir, Canda Corner, Nashik",
      date: "2021",
      grade: "80%",
      desc: "Completed 10th SSC from Madhyamik Vidya Mandir, Nashik, with a strong foundation in Science and Mathematics. The education provided a strong base in analytical thinking and problem-solving.",
      degree: "10th SSC",
    },
  ];
  
  
  export const projects = [
    // {
    //   id: 0,
    //   title: "GitHub Profile Detective",
    //   description:
    //     "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    //   image: githubdetLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    //   github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    //   webapp: "https://githubprofiledetective.netlify.app/",
    // },
    
    // {
    //   id: 2,
    //   title: "Movie Recommendation App",
    //   description:
    //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    //   image: movierecLogo,
    //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
    //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    {
      id: 3,
      title: "KrushiScan - Plant Disease Detection App",
      description:
        "An AI-powered web application that detects plant diseases through image uploads and provides personalized fertilizer recommendations. It supports real-time diagnosis, region-based tracking, and step-by-step treatment suggestions to enhance crop health and yield.",
      image:krushiscan, // replace with your actual image import
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "API Integration",
        "Styled Components",
        
        "PostgreSQL",
        
        "OpenRouter API"
      ],
      github: "https://github.com/MrCoder420/Plant-Desease-Detection",
      webapp: "https://https://krushiscan.netlify.app", // replace with actual deployed URL
    },
    {
      id: 4,
      title: "College Forum - Online Discussion Platform",
      description:
        "A web-based discussion platform built for students, teachers, and alumni to share educational ideas and social updates. Users can post threads, interact via comments and reactions, and experience safe discussions through automated abusive content filtering by admins.",
      image: collegeforum, // replace with actual image import
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Content Moderation"],
      github: "https://github.com/MrCoder420/College_forum.git", // replace with actual GitHub URL
      // webapp: "https://your-deployed-app-url.com", // replace with live project link
    },
    {
      id: 5,
      title: "WeatherWizard - Real-Time Weather App",
      description:
        "A sleek and responsive web application for checking real-time weather conditions. Built with HTML, CSS, JavaScript, and Bootstrap, it features API integration to fetch live weather data and offers a clean, intuitive user interface for a smooth user experience.",
      image: weatherapp, // replace with actual image import
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "API Integration",
        "UI Design",
        "Full-Stack Development"
      ],
      github: "https://github.com/MrCoder420/Weather-App.git", // replace with actual GitHub link
      // webapp: "https://your-deployed-app-url.com", // replace with live demo URL
    },
    {
      id: 6,
      title: "Digital Menu Card",
      description:
        "A web-based application that provides an interactive digital menu with product ordering functionality and an admin panel for menu management. Built with HTML, CSS, JavaScript, PHP, and MySQL, the system allows customers to browse the menu and place orders. The admin panel enables easy management of the menu and orders.",
      image: digitalmenucard, // replace with actual image import
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "API Integration",
        "Admin Panel",
        "Full-Stack Development"
      ],
      github: "https://github.com/MrCoder420/Digital-Menu-Card",
      // webapp: "https://your-deployed-app-url.com", // replace with live demo URL if available
    },
    {
      id: 7,
      title: "MY GPT - AI Chatbot",
      description:
        "A responsive and elegant chatbot interface built with vanilla HTML, CSS, and JavaScript, utilizing the OpenRouter API for real-time AI-powered conversations. Originally migrated from a React version to a fully static implementation for simplicity and offline portability. Features a clean UI, animated typing, and seamless user-bot interaction.",
      image: mygpt, // replace with actual image import
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "API Integration",
        "OpenRouter",
        "UI Design",
        "Chatbot",
        "Static Web App"
      ],
      github: "https://github.com/MrCoder420/chatbot.git",
      // webapp: "https://your-deployed-app-url.com", // add your live demo URL here if available
    }
    
    
    
    
    
    
    
  
  ];  