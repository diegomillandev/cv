import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IndraLogo } from "./images/logos";
import { FaSquareXTwitter } from "react-icons/fa6";

export const RESUME_DATA = {
  name: "Diego Millan",
  initials: "DM",
  location: "Bucaramanga, Colombia, South America",
  locationLink: "https://maps.app.goo.gl/skxVDDjqnbxU8hSH8",
  about:
    "Frontend developer specializing in React, dedicated to crafting products with meticulous attention to detail.",
  summary:
    "I am passionate about web programming with experience in markup languages (HTML), cascading style sheets (CSS), and client-side programming (JavaScript), as well as server-side programming languages (PHP) and client-side frameworks (React). Additionally, I have experience in MySQL, Python, and Django at junior levels, allowing me to expand my skills and knowledge in web development. I am a friendly individual with a positive attitude, who highly values teamwork and collaboration with other professionals. Although I lack professional experience in the field, I am always eager to learn and improve my skills to stay updated with the latest trends and technologies in the world of web development.",
  avatarUrl: "https://avatars.githubusercontent.com/u/121193438?v=4",
  contact: {
    email: "diegomillandev@gmail.com",
    tel: "+573183918701",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/diegomillandev",
        icon: FaGithub,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/diegomillandev/",
        icon: FaLinkedin,
      },
      {
        name: "X",
        url: "https://x.com/Diegomillandev",
        icon: FaSquareXTwitter,
      },
    ],
  },
  education: [
    {
      school: "Servicio Nacional de Aprendizaje",
      degree:
        "Technology in Computer Equipment Maintenance, Structured Cabling Design, and Installation",
      start: "2012",
      end: "2014",
    },
  ],
  work: [
    {
      company: "INDRA",
      link: "https://www.indracompany.com/",
      badges: ["Remote"],
      title: "Systems Engineer",
      logo: IndraLogo,
      start: "2021",
      end: "Current",
      description:
        "I am currently working as a systems engineer at INDRA, a multinational company that provides technology solutions and services. I am part of the team responsible for the development and maintenance of the company's internal applications.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "HTML",
    "CSS",
    "PHP",
    "MySQL",
    "Python",
    "Django",
  ],
  projects: [
    {
      title: "2048 Gameclone",
      techStack: ["Side Project", "javascript", "HTML", "CSS"],
      description: " A clone of the 2048 game in vanilla JavaScript.",
      link: {
        label: "2048-gameclone",
        href: "https://2048-gameclone.netlify.app/",
      },
    },
    {
      title: "Clone Nike.com",
      techStack: ["ReactJS", "Javascript", "Vite"],
      description:
        " A clone of the Nike website using ReactJS, Vite, and Tailwind CSS.",
      link: {
        label: "cloneNike.com",
        href: "https://phenomenal-elf-843636.netlify.app/",
      },
    },
  ],
} as const;
