import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebOutlined from '@mui/icons-material/WebOutlined';
import GroupIcon from '@mui/icons-material/Group';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import CodeIcon from '@mui/icons-material/Code';

const resumeData = {
  name: "Ayan Anarbay",
  title: "Frontend Developer",
  birthday: "05 May 2005",
  email: "anarbajaan1@gmail",
  phone: "+7 747 543 06 74",

  socials: {
    Telegram: {
      link: "https://t.me/Ayanananana",
      text: "MyTelegram",
      nickname: "@Ayanananana",
      icon: <TelegramIcon />
    },
    Github: {
      link: "https://github.com/anarbaiayan",
      text: "MyGitHub",
      icon: <GitHubIcon />
    },
    Instagram: {
      link: "https://www.instagram.com/ayan_anarbay/",
      text: "MyInstagram",
      nickname: "ayan_anarbay",
      icon: <InstagramIcon />
    }
  },

  about: "I’m a 19-year-old student at Astana IT University with a strong passion for technology and design. My primary focus is frontend development, especially using React, where I enjoy creating clean, responsive, and user-friendly interfaces. \n\nAlong the way, I’ve also explored backend development with Node.js, which gave me a deeper understanding of full-stack workflows and how frontend and backend communicate efficiently. \n\nI’m constantly learning and improving, staying up-to-date with modern tools and best practices. Whether it’s building sleek UI components, optimizing performance, or collaborating on a team project, I enjoy turning ideas into real, working products.",

  experiences: [
    {
      title: "Not Found",
      date: "2005 - 2025",
      description: "I have not worked anywhere yet, but I am ready to work and learn.",
    },
    {
      title: "Not Found",
      date: "2005 - 2025",
      description: "I have not worked anywhere yet, but I am ready to work and learn.",
    },
    {
      title: "Not Found",
      date: "2005 - 2025",
      description: "I have not worked anywhere yet, but I am ready to work and learn.",
    }
  ],
  education: [
    {
      title: "Astana IT University",
      date: "2023 - Present",
      description: "Currently studying at Astana IT University, focusing on software engineering and frontend development.",
    },
    {
      title: "High School Diploma",
      date: "2012 - 2023",
      description: "Graduated from high school with a focus on mathematics and computer science.",
    },
    {
      title: "Step Academy",
      date: "2020 - 2021",
      description: "Completed various online courses in web development, including HTML, CSS, JavaScript.",
    }
  ],
  services: [
    {
      title: "Frontend",
      description: "Creating responsive and user-friendly web applications using React and JavaScript.",
      icon: <WebOutlined />
    },
    {
      title: "Teamwork",
      description: "Working effectively in teams, utilizing version control systems like Git for collaborative projects.",
      icon: <GroupIcon />
    },
    {
      title: "Problem Solving",
      description: "Applying analytical skills to solve complex problems and optimize code performance.",
      icon: <SyncProblemIcon />
    },
    {
      title: "Backend",
      description: "Basic knowledge of backend using Node.js, understanding server-client interactions.",
      icon: <CodeIcon />
    },
  ],
  skills:[
    {
      title: "Frontend",
      description: ["JavaScript", "React", "TypeScript", "Material UI", "Bootstrap"],
    },
    {
      title: "Backend",
      description: ["Node.js", "Express.js", "RESTful APIs"],
    },
    {
      title: "Database",
      description: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Source Control",
      description: ["Git", "GitHub"],
    } 
  ]
};

export default resumeData;
