import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import heroImg from "../../images/hero-image-v1.png";
import trees from "../../images/black-trees.png"
import clouds from "../../images/clouds.png"

const HeroSection = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <motion.div
      className={`w-full h-fit py-40 md:pb-96 transition-all duration-300 overflow-hidden relative ${
        theme === "dark"
          ? "bg-gradient-to-b from-secondary to-primary"
          : "bg-gradient-to-r from-blue-400 to-blue-300"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
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


      <div className="w-full px-3 sm:px-20 relative">
        <motion.div
          className="absolute left-0 right-0 top-0 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-16 h-16 bg-accent rounded-full absolute left-0 sm:-left-8"></div>
          <div className="w-16 h-16 bg-accent rounded-full absolute right-0 sm:-right-8"></div>
          <div className="h-[2px] w-full bg-accent"></div>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row justify-start items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-9 md:mb-0">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-white font-extrabold font-heading leading-tight mt-8 relative transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {language === "en" ? (
                <>
                  Bring <span className={theme === "dark" ? "text-blue-400" : "text-blue-800"}>Your Ideas</span> To Life
                </>
              ) : (
                <>
                  Haz <span className={theme === "dark" ? "text-blue-400" : "text-blue-800"}>Tus Ideas</span> Realidad
                </>
              )}
            </motion.h1>

            <motion.p
              className={`mt-4 text-md lg:text-xl transition-all duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-50"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {language === "en"
                ? "I build React apps with modern technologies like Tailwind CSS and PostgreSQL, delivering on time."
                : "Creo aplicaciones React con tecnologías modernas como Tailwind CSS y PostgreSQL, entregando a tiempo."}
            </motion.p>

            <div className="relative z-20 w-full flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center md:justify-start items-center">
              <button
                className={`mt-8 w-64 py-3 text-sm md:text-md font-semibold border-2 shadow-lg hover:scale-110 transition duration-200 ${
                  theme === "dark"
                    ? "text-primary bg-white hover:bg-transparent hover:text-white border-white"
                    : "text-accent bg-white hover:bg-transparent hover:text-white border-white"
                }`}
              >
                <Link to="form/">
                  {language === "en" ? "Work Together" : "Trabajemos"}
                </Link>
              </button>
              <button
                className={`sm:mt-8 w-64 py-3 text-sm md:text-md font-semibold border-2 shadow-lg hover:scale-110 transition duration-200 ${
                  theme === "dark"
                    ? "text-white bg-transparent hover:bg-white hover:text-primary border-white"
                    : "text-white bg-transparent hover:bg-white hover:text-accent border-white"
                }`}
              >
                <a href="#examples">
                  {language === "en" ? "See My Work" : "Ver Mi Trabajo"}
                </a>
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={heroImg} alt="Laptops Images" />
          </div>
        </div>
        {theme === "dark" && (
          <img className="absolute z-10 -bottom-40 md:-bottom-96 left-0 right-0 min-w-full h-auto" src={trees} alt="" />
        )}
        {theme === "light" && (
          <img className="absolute z-10 -bottom-40 md:-bottom-96 left-0 right-0 min-w-full h-auto" src={clouds} alt="" />
        )}
      </div>
    </motion.div>
  );
};

export default HeroSection;
