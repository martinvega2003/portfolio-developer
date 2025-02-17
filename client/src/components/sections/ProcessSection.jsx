import React from "react";
import { motion } from "framer-motion";
import { projectsData as projects } from "../../data/projectsData";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProcessSection = () => {
  const { language } = useLanguage();
  const { theme } = useTheme(); // Get the theme from custom hook

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-gradient-to-r from-blue-400 to-blue-300 text-white"} pt-48 pb-24 relative`}>
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
      
      <div className="px-6 relative z-10">
        <h2 className="text-4xl font-semibold text-center">
          {language === "en" ? "See Some Of My Projects" : "Mira Algunos De Mis Proyectos"}
        </h2>

        {/* Timeline & Cards */}
        <div className="mt-12 relative">
          <div className="flex flex-col items-center">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex w-full h-fit items-start mb-6 overflow-y-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.01 }}
              >
                {/* Circle and Line */}
                <div className="flex flex-col items-center">
                  {project.number ? (
                    <div className={`h-10 sm:h-20 w-10 sm:w-20 text-md sm:text-3xl 
                      ${theme === "dark" ? "bg-accent text-white border border-accent" : "bg-white text-accent border border-accent"}
                      font-bold flex items-center justify-center rounded-full shadow-md mb-6`}>
                      {project.number}
                    </div>
                  ) : (
                    <div className="w-10 sm:w-20 h-10 sm:h-20"></div>
                  )}
                  {index < projects.length - 1 && (
                    <div className={`h-[500px] w-1 
                      ${theme === "dark" ? "bg-gradient-to-b from-gray-500 to-gray-800" : "bg-gradient-to-b from-white to-accent"}`}>
                    </div>
                  )}
                </div>

                {/* Card */}
                <div className={`ml-2 sm:ml-8 flex-grow flex text-gray-100
                  ${index % 2 === 0 ? "flex-col md:flex-row bg-primary" : "flex-col-reverse md:flex-row-reverse bg-secondary"} 
                  items-start sm:p-6 rounded-lg overflow-hidden cursor-pointer`}
                >
                  <div className="flex flex-col w-full md:w-1/2 p-3 sm:p-2 md:px-4">
                    <div className="flex justify-start items-center mb-2">
                      <div className="mr-4 text-2xl sm:text-5xl">{<project.icon />}</div>
                      <h3 className="text-sm sm:text-2xl font-extrabold">
                        {language === "en" ? project.title.en : project.title.es}
                      </h3>
                    </div>
                    <p 
                      dangerouslySetInnerHTML={language === "en" ? { __html: project.description.en } : { __html: project.description.es }} 
                      className={`text-[11px] sm:text-lg mt-2 ${theme === "dark" ? "text-gray-400" : "text-gray-300"}`} 
                    />
                    <div className="flex flex-wrap items-center mt-2 space-x-4">
                      {project.technologies.map((tech, index) => (
                        <div 
                          key={index} 
                          className={`flex items-center space-x-2 text-[11px] sm:text-lg text-${tech.color} hover:scale-110 transition duration-300`}
                        >
                          <span className="text-xl">{<tech.icon />}</span>
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <a 
                        href={project.linkToDeployment} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-white hover:text-accent transition cursor-pointer"
                      >
                        {language === "en" ? "View Live" : "Ver en Vivo"}
                        <AiOutlineArrowRight className="ml-1" /> 
                      </a>
                      <a 
                        href={project.linkToCode} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-white hover:text-orange-500 transition cursor-pointer"
                      >
                        {language === "en" ? "View Code" : "Ver Código"}
                        <AiOutlineArrowRight className="ml-1" /> 
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 h-full flex justify-center items-center mt-1 sm:p-2">
                    <img src={project.image} alt="" className="w-full h-auto sm:rounded-lg" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;

