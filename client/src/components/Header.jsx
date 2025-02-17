import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { FaGlobe } from "react-icons/fa";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme(); // Get theme and toggleTheme from context

  const [isExamplesOpen, setIsExamplesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed left-1/2 -translate-x-1/2 top-5 w-[95%] ${theme === "dark" ? "bg-primary" : "bg-white"} shadow-2xl rounded-xl z-50 transition duration-300`}>
      <nav className="relative container mx-auto flex items-center justify-between py-4 px-6">
        <div className='w-fit flex flex-nowrap items-center'>
          {/* Theme Switcher */}
          <button 
            onClick={toggleTheme} 
            className={`bg-transparent w-fit text-2xl ${theme === "dark" ? "text-yellow-300" : "text-accent"} flex flex-nowrap items-center gap-1 py-1 px-2 ml-2 mr-1 border ${theme === "dark" ? "border-yellow-300" : "border-accent"} rounded-lg hover:scale-110 transition duration-300`}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <button 
            onClick={toggleLanguage} 
            className={`bg-transparent w-fit text-xl ${theme === "dark" ? "text-white" : "text-primary"} hover:text-accent flex flex-nowrap items-center gap-1 py-[2px] px-2 ml-2 mr-1 border ${theme === "dark" ? "border-white" : "border-primary"} hover:border-accent rounded-lg transition duration-300`}
          >
            {language === "en" ? "Español" : "English"}
            <FaGlobe className="text-xl" />
          </button>
        </div>  
        <div className={`absolute ${theme === "dark" ? "bg-primary" : "bg-white"} w-full left-0 sm:w-fit sm:bg-gradient-to-r sm:from-transparent sm:to-transparent sm:relative ${isMenuOpen ? "translate-y-32 sm:translate-y-0" : "-translate-y-full sm:translate-y-0"} rounded-xl sm:top-0 py-6 sm:py-0 flex flex-col sm:flex-row justify-start items-center gap-3 sm:gap-0 sm:space-x-6 transition-all duration-300`}>
          <a
            href="/"
            className={`relative group text-lg transition-all transform hover:scale-105 ${theme === "dark" ? "text-white" : "text-primary"} hover:text-accent`}
          >
            {language === "en" ? "Home" : "Inicio"}
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a
            href="#about"
            className={`relative group text-lg transition-all transform hover:scale-105 ${theme === "dark" ? "text-white" : "text-primary"} hover:text-accent`}
          >
            {language === "en" ? "About" : "Sobre mi"}
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a
            href='#projects'
            className={`relative group cursor-pointer text-lg ${theme === "dark" ? "text-white" : "text-primary"} hover:text-accent`}
            onMouseEnter={() => setIsExamplesOpen(true)}
            onMouseLeave={() => setIsExamplesOpen(false)}
          >
            {language === "en" ? "Projects" : "Proyectos"}
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            {isExamplesOpen && (
              <div className={`absolute w-[160px] top-full left-0 ${theme === "dark" ? "bg-primary text-white" : "bg-white text-primary"} text-primary shadow-lg py-2`}>
                {projectsData.map(project => (
                  <a
                    key={project.title}
                    href={project.linkToDeployment}
                    className="block px-4 py-2 hover:bg-accent hover:text-white"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {language === "en" ? project.title.en : project.title.es}
                  </a>
                ))}
              </div>
            )}
          </a>
          <Link
            to="/form"
            className={`px-4 py-2 rounded-full ${theme === "dark" ? "bg-white hover:bg-transparent text-primary hover:text-white border-2 border-white" : "bg-primary hover:bg-transparent text-white hover:text-primary border-2 border-primary"} font-bold transition-all`}
          >
            {language === "en" ? "Contact Me" : "Contactame"}
          </Link>
        </div>       
        {!isMenuOpen ? (
          <div className={`sm:hidden w-fit h-fit ${theme === "dark" ? "text-white" : "text-primary"} cursor-pointer`} onClick={() => setIsMenuOpen(true)}>
            <FaBars size={30} /> 
          </div>
        ) : (
          <div className={`sm:hidden w-fit h-fit ${theme === "dark" ? "text-white" : "text-primary"} cursor-pointer`} onClick={() => setIsMenuOpen(false)}>
            <FaTimes size={30} />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;


