import React from "react";
import {
  FaLightbulb,
  FaLaptopCode,
  FaUsers,
  FaDatabase,
  FaChartLine,
  FaBook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

const BenefitsSection = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const content = {
    en: {
      title: "Technical & Bland Skills",
      description:
        "I bring a combination of technical expertise, problem-solving abilities, and a strong work ethic. My goal is to contribute effectively, collaborate with teams, and continuously improve. Here’s what I offer as an employee:",
      skills: [
        {
          title: "Strong Problem-Solving Skills",
          description:
            "I analyze and resolve technical challenges efficiently, improving code quality and optimizing performance.",
          icon: <FaLightbulb size={40} />,
        },
        {
          title: "Adaptability & Continuous Learning",
          description:
            "I quickly learn new technologies and adapt to different projects, always striving for growth and improvement.",
          icon: <FaBook size={40} />,
        },
        {
          title: "Team Collaboration",
          description:
            "I work well in teams, communicate clearly, and contribute to a positive and productive work environment.",
          icon: <FaUsers size={40} />,
        },
        {
          title: "Efficient Code & Best Practices",
          description:
            "I write clean, maintainable, and scalable code, following industry standards to ensure long-term project success.",
          icon: <FaLaptopCode size={40} />,
        },
        {
          title: "Backend & Database Knowledge",
          description:
            "I have solid experience working with Django and PostgreSQL, ensuring smooth and reliable data management.",
          icon: <FaDatabase size={40} />,
        },
        {
          title: "Proactive & Self-Motivated",
          description:
            "I take initiative in solving problems and improving processes without needing constant supervision.",
          icon: <FaChartLine size={40} />,
        },
      ],
    },
    es: {
      title: "Habilidades Tecnicas y Blandas",
      description:
        "Aporto una combinación de conocimientos técnicos, habilidades de resolución de problemas y una gran ética de trabajo. Mi objetivo es contribuir eficazmente, colaborar con equipos y mejorar continuamente. Esto es lo que ofrezco como empleado:",
      skills: [
        {
          title: "Habilidades Fuertes para Resolver Problemas",
          description:
            "Analizo y resuelvo desafíos técnicos de manera eficiente, mejorando la calidad del código y optimizando el rendimiento.",
          icon: <FaLightbulb size={40} />,
        },
        {
          title: "Adaptabilidad y Aprendizaje Continuo",
          description:
            "Aprendo rápidamente nuevas tecnologías y me adapto a diferentes proyectos, siempre buscando crecer y mejorar.",
          icon: <FaBook size={40} />,
        },
        {
          title: "Colaboración en Equipo",
          description:
            "Trabajo bien en equipo, me comunico de manera clara y contribuyo a un ambiente de trabajo positivo y productivo.",
          icon: <FaUsers size={40} />,
        },
        {
          title: "Código Eficiente y Mejores Prácticas",
          description:
            "Escribo código limpio, mantenible y escalable, siguiendo estándares de la industria para garantizar el éxito a largo plazo.",
          icon: <FaLaptopCode size={40} />,
        },
        {
          title: "Experiencia en Backend y Bases de Datos",
          description:
            "Tengo experiencia sólida trabajando con Django y PostgreSQL, asegurando una gestión de datos fluida y confiable.",
          icon: <FaDatabase size={40} />,
        },
        {
          title: "Proactivo y Autodidacta",
          description:
            "Tomo la iniciativa para resolver problemas y mejorar procesos sin necesidad de supervisión constante.",
          icon: <FaChartLine size={40} />,
        },
      ],
    },
  };

  const { title, description, skills } = content[language];

  return (
    <div className={`relative py-24 ${theme === "dark" ? "bg-primary" : "bg-white"} text-gray-800`}>
      <div className="absolute inset-0">
        <div className={`h-1/3 md:h-2/4 w-full ${theme === "dark" ? "bg-transparent" : "relative z-10 bg-white"}`}></div>
        <div className={`h-1/3 md:h-1/4 w-full ${theme === "dark" ? "bg-blue-950" : "bg-blue-200"}`}></div>
        <div className={`h-1/3 md:h-1/4 w-full ${theme === "dark" ? "bg-blue-950" : "bg-blue-300"}`}></div>
        {/* Background Animations */}
        {theme === "light" && (
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="airplane"></div>
            <div className="balloon"></div>
            <div className="clouds"></div>
          </div>
        )}
        {theme === "dark" && (
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="shooting-star"></div>
            <div className="planet"></div>
            <div className="ufo"></div>
          </div>
        )}
      </div>
      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <h2 className={`text-xl sm:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-accent"} mb-6`}>{title}</h2>
        <p className={`text-md sm:text-lg ${theme === "dark" ? "text-gray-200" : "text-gray-600"} mb-12`}>{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white h-full p-6 border shadow-sm transition duration-300 transform cursor-pointer group
              hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-accent"
            >
              <div
                className="mb-4 flex justify-center text-accent 
                group-hover:text-white transition-colors duration-300"
              >
                {skill.icon}
              </div>
              <h3
                className="text-xl font-semibold text-accent mb-4 
                group-hover:text-white transition-colors duration-300"
              >
                {skill.title}
              </h3>
              <p
                className="text-secondary group-hover:text-white 
                transition-colors duration-300"
              >
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;

