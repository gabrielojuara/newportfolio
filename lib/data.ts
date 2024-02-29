import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import caparentwheels from "@/public/caparentwheels.png";
import capamoinhopotfolio from "@/public/capamoinhopotfolio.png";
import capaappprevisãotempo from "@/public/capaapprevisãotempo.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const experiencesData = [
  // {
  //   title: "Front-End Developer",
  //   location: "Brazil",
  //   description:
  //   date: "",
  // },
  // {
  //   title: "Front-End Developer",
  //   location: "Brazil",
  //   description:
 
  //   date: "",
  // },
  {
    title: "Front-End Developer",
    location: "Brazil",
    description:
      "I'm now a front-end developer working as a freelancer. My stack includes React, Next.js, TypeScript, JavaScript and Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement
    (FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Rentwheels",
    description:
      "Car rental website featuring advanced filtering, search and information. Integrated with CarsAPI ensuring accurate data.",
    tags: ["React", "Next.js", "API's", "Tailwind Css",],
    imageUrl: caparentwheels,
  },
  {
    title: "Mechanical portfolio",
    description:
      "Personal client portfolio combining mechanical 3D design and web development. Featuring a carousel integrated with public APIs to highlight a diverse range of projects.",
    tags: ["HTML", "CSS", "JavaScript", "API's"],
    imageUrl: capamoinhopotfolio,
  },
  {
    title: "Weather forecast",
    description:
      "A web app utilizing AccuWeather's public API to provide real-time weather updates and forecasts for locations worldwide.",
    tags: ["HTML", "CSS", "JavaScript", "API's"],
    imageUrl: capaappprevisãotempo,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "API's",
  "TailwindCss",
  "Framer Motion",
] as const;
