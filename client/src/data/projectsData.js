import imgOne from "../images/project-one-thumbnail.png"
import imgTwo from "../images/project-two-thumbnail.png"
import imgThree from "../images/project-three-thumbnail.png"
import imgFour from "../images/project-four-thumbnail.png"
import { SiReact, SiTailwindcss, SiExpress, SiPostgresql } from "react-icons/si";
import { MdChat, MdSearch, MdBrush, MdCode } from "react-icons/md";

export const projectsData = [
  {
    id: 1,
    number: "I",
    icon: MdChat,
    title: {
      en: "Project I",
      es: "Proyecto I",
    },
    image: imgOne || "https://via.placeholder.com/300",
    description: {
      en: "This project showcases a seamless user experience designed for effective business solutions. It leverages modern technologies to address real-world challenges efficiently.",
      es: "Este proyecto muestra una experiencia de usuario fluida diseñada para soluciones empresariales efectivas. Aprovecha tecnologías modernas para abordar desafíos del mundo real de manera eficiente.",
    },
    linkToCode: "https://github.com/martinvega2003/dentist-site-project-one",
    linkToDeployment: "https://dentist-site-project-one.vercel.app/",
    technologies: [
      { name: "React", color: "cyan-300", icon: SiReact },
      { name: "TailwindCSS", color: "blue-500", icon: SiTailwindcss },
      { name: "Express.js", color: "yellow-300", icon: SiExpress },
      { name: "PostgreSQL", color: "green-400", icon: SiPostgresql },
    ],
  },
  {
    id: 2,
    number: "II",
    icon: MdSearch,
    title: {
      en: "Project II",
      es: "Proyecto II",
    },
    image: imgTwo || "https://via.placeholder.com/300",
    description: {
      en: "A comprehensive project aimed at enhancing online visibility and driving engagement through innovative features tailored to clients' needs.",
      es: "Un proyecto integral destinado a mejorar la visibilidad en línea y aumentar el compromiso a través de funciones innovadoras adaptadas a las necesidades de los clientes.",
    },
    linkToCode: "https://github.com/martinvega2003/dentist-site-project-two",
    linkToDeployment: "https://dentist-site-project-two.vercel.app/",
    technologies: [
      { name: "React", color: "cyan-300", icon: SiReact },
      { name: "TailwindCSS", color: "blue-500", icon: SiTailwindcss },
      { name: "Express.js", color: "yellow-300", icon: SiExpress },
      { name: "PostgreSQL", color: "green-400", icon: SiPostgresql },
    ],
  },
  {
    id: 3,
    number: "III",
    icon: MdBrush,
    title: {
      en: "Project III",
      es: "Proyecto III",
    },
    image: imgThree || "https://via.placeholder.com/300",
    description: {
      en: "An advanced solution for optimizing workflows and improving performance metrics, ensuring scalability and efficiency.",
      es: "Una solución avanzada para optimizar flujos de trabajo y mejorar métricas de rendimiento, garantizando escalabilidad y eficiencia.",
    },
    linkToCode: "https://github.com/martinvega2003/dentist-site-project-three",
    linkToDeployment: "https://dentist-site-project-three.vercel.app/",
    technologies: [
      { name: "React", color: "cyan-300", icon: SiReact },
      { name: "TailwindCSS", color: "blue-500", icon: SiTailwindcss },
      { name: "Express.js", color: "yellow-300", icon: SiExpress },
      { name: "PostgreSQL", color: "green-400", icon: SiPostgresql },
    ],
  },
  {
    id: 4,
    number: "IV",
    icon: MdCode,
    title: {
      en: "Project IV",
      es: "Proyecto IV",
    },
    image: imgFour || "https://via.placeholder.com/300",
    description: {
      en: "An advanced solution for optimizing workflows and improving performance metrics, ensuring scalability and efficiency.",
      es: "Una solución avanzada para optimizar flujos de trabajo y mejorar métricas de rendimiento, garantizando escalabilidad y eficiencia.",
    },
    linkToCode: "https://github.com/martinvega2003/dentist-site-project-four",
    linkToDeployment: "https://dentist-site-project-four.vercel.app/",
    technologies: [
      { name: "React", color: "cyan-300", icon: SiReact },
      { name: "TailwindCSS", color: "blue-500", icon: SiTailwindcss },
      { name: "Express.js", color: "yellow-300", icon: SiExpress },
      { name: "PostgreSQL", color: "green-400", icon: SiPostgresql },
    ],
  },
];
