import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { FaCopy } from "react-icons/fa";
import heroImg from "../../images/hero-image-v2.png";
import trees from "../../images/black-trees.png";
import clouds from "../../images/clouds.png";

const HeroSection = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const myEmail = "martinvega2003.02@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.div
      className={`w-full h-fit py-40 md:pb-96 overflow-hidden relative ${
        theme === "dark"
          ? "bg-gradient-to-b from-secondary to-primary"
          : "bg-gradient-to-r from-blue-400 to-blue-300"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
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
        <div className="w-full flex flex-col md:flex-row justify-start items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-9 md:mb-0">
            {/* Email Section */}
            <motion.div 
              className="flex items-center gap-2 justify-center md:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-sm md:text-md text-gray-100 font-semibold">
                {myEmail}
              </span>
              <button
                onClick={handleCopy}
                className="text-gray-100 hover:text-accent transition-colors"
                title="Copy Email"
              >
                <FaCopy />
              </button>
            </motion.div>
            {copied && (
              <span className="text-xs text-green-400 mt-1 block">
                Copied!
              </span>
            )}

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-extrabold font-heading leading-tight mt-4 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {language === "en" ? (
                <>
                  Bring{" "}
                  <span
                    className={
                      theme === "dark"
                        ? "text-blue-400"
                        : "text-blue-800"
                    }
                  >
                    Your Ideas
                  </span>{" "}
                  To Life
                </>
              ) : (
                <>
                  Haz{" "}
                  <span
                    className={
                      theme === "dark"
                        ? "text-blue-400"
                        : "text-blue-800"
                    }
                  >
                    Tus Ideas
                  </span>{" "}
                  Realidad
                </>
              )}
            </motion.h1>

            <motion.p
              className={`mt-4 text-md lg:text-xl ${
                theme === "dark" ? "text-white" : "text-gray-50"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {language === "en"
                ? "I build React apps with modern technologies like Tailwind CSS and PostgreSQL, delivering on time."
                : "Creo aplicaciones React con tecnologías modernas como Tailwind CSS y PostgreSQL, entregando a tiempo."}
            </motion.p>

            <motion.div 
              className="relative z-20 w-full flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center md:justify-start items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Link 
                to="form/"
                className={`mt-8 w-64 py-3 text-sm md:text-md text-center font-semibold border-2 shadow-lg hover:scale-110 transition duration-200 ${
                  theme === "dark"
                    ? "text-primary bg-white hover:bg-transparent hover:text-white border-white"
                    : "text-accent bg-white hover:bg-transparent hover:text-white border-white"
                }`}
              >
                {language === "en" ? "Work Together" : "Trabajemos"}
              </Link>
              <a 
                key={language}
                href="#projects"
                className={`sm:mt-8 w-64 py-3 text-sm md:text-md text-center font-semibold border-2 shadow-lg hover:scale-110 transition duration-200 ${
                  theme === "dark"
                    ? "text-white bg-transparent hover:bg-white hover:text-primary border-white"
                    : "text-white bg-transparent hover:bg-white hover:text-accent border-white"
                }`}
              >
                {language === "en" ? "See My Work" : "Ver Mi Trabajo"}
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={heroImg} alt="Laptops Images" />
          </motion.div>
        </div>
        {theme === "dark" && (
          <img
            className="absolute z-10 -bottom-40 md:-bottom-96 left-0 right-0 min-w-full h-auto"
            src={trees}
            alt=""
          />
        )}
        {theme === "light" && (
          <img
            className="absolute z-10 -bottom-40 md:-bottom-96 left-0 right-0 min-w-full h-auto"
            src={clouds}
            alt=""
          />
        )}
      </div>
    </motion.div>
  );
};

export default HeroSection;
