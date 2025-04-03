import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaCode,
  FaEnvelope,
} from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Python, C++, SQL, Tailwind, HTML, Javascript, CSS,";

export const PROJECTS = [
  {
    id: 1,
    title: "Apna Ghar - Real Estate",
    description:
      "A full-featured Real-Estate website built with React and Tailwind.",
    imgSrc: project1,
    link: "https://github.com/ZACK0P/Apna-Ghar",
  },
  {
    id: 2,
    title: "Movie Recommendation System",
    description:
      "A system recommending movies based on user preferences and collaboration.",
    imgSrc: project2,
    link: "https://github.com/ZACK0P/Movie_Recommended_System",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    imgSrc: project3,
    link: "https://example.com/portfolio-website",
  },
  {
    id: 4,
    title: "Right Quest",
    description:
      "Right Quest is an interactive mobile game teaching children decision-making skills.",
    imgSrc: project4,
    link: "https://github.com/ZACK0P/Right-Quest",
  },
  {
    id: 5,
    title: "Task Management Tool",
    description: "A task management tool to organize and prioritize work.",
    imgSrc: project5,
    link: "https://example.com/task-management-tool",
  },
  {
    id: 6,
    title: "Temperature Converter",
    description:
      "A temperature converter converts values between Celsius, Fahrenheit, and Kelvin.",
    imgSrc: project6,
    link: "https://github.com/ZACK0P/Temperature_converter-BharatIntern",
  },
  {
    id: 7,
    title: "Netflix",
    description: "A Netflix clone frontend with React, showcasing movies, navigation, and UI.",
    imgSrc: project7,
    link: "https://github.com/ZACK0P/Netflix-BharatIntern",
  },
  {
    id: 8,
    title: "Recipe App",
    description: "An app for browsing and saving various cooking recipes.",
    imgSrc: project8,
    link: "https://example.com/recipe-app",
  },
  {
    id: 9,
    title: "Weather Dashboard",
    description:
      "A weather dashboard providing current weather data and forecasts.",
    imgSrc: project9,
    link: "https://example.com/weather-dashboard",
  },
];

export const ABOUT =
  "I am a passionate Computer Science and Engineering student with a keen interest in software development, AI, and cloud computing. I have built innovative projects like Apna Ghar and a Movie Recommendation System, honing my skills in full-stack development, automation, and problem-solving. I thrive on learning, adapting, and creating impactful solutions.";

export const EXPERIENCES = [
  {
    company: "Bharat Intern",
    role: "Web Developer",
    year: "07/2023 - 09/2023",
    description:
      "During my Web Developer Internship at Bharat Intern, I worked on real-world projects, including developing a Netflix clone frontend, a temperature converter, and a personal portfolio website. I gained hands-on experience in frontend development, responsive design, API integration, and performance optimization using HTML, CSS, JavaScript, and React.js. This experience strengthened my UI/UX skills, problem-solving abilities, and understanding of scalable web applications while following industry best practices.",
  },
  /* {
    company: "Facebook",
    role: "Frontend Developer",
    year: "01/2021 - 11/2023",
    description:
      "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
  }, */
];

export const SOCIAL_MEDIA_LINKS = [
  /* {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
  }, */
  /* {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
  }, */
  {
    href: "https://leetcode.com/u/Zack_0P/",
    icon: <FaCode fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "mailto:parveenkumar.pk1718@gmail.com",
    icon: <FaEnvelope fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/ZACK0P/",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/parveen-kumar-943599231",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on innovative and challenging projects that push the boundaries of software development and engineering. With a strong foundation in full-stack development, AI, and machine learning, I thrive on solving complex problems and building impactful solutions. Let’s combine our skills to create something remarkable—reach out, and let’s innovate together!",
  email: "parveenkumar.pk1718@gmail.com",
  phone: "+(91 - 7696747839)",
};
