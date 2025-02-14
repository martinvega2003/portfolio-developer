import { FaClock, FaChartLine, FaLaptopCode } from "react-icons/fa";
import image from "../../images/hero-image-v2.png";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const MyServiceSection = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  
  // Star positions and animation settings
  const stars = Array.from({ length: 25 });
  const starAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const content = {
    en: {
      title: "Why You Need My Skills",
      description:
        "Your team deserves a developer who can efficiently solve complex problems, enhance productivity, and adapt to dynamic project needs. Here’s how I can contribute:",
      points: [
        {
          icon: <FaChartLine className="text-accent w-10 h-10 shrink-0" />,
          text: (
            <>
              <strong>Boost Team Productivity: </strong> 
              By writing clean, maintainable code, I help accelerate development cycles and reduce technical debt.
            </>
          ),
        },
        {
          icon: <FaClock className="text-accent w-10 h-10 shrink-0" />,
          text: (
            <>
              <strong>Efficient Problem Solver: </strong> 
              I quickly identify and resolve issues, minimizing downtime and keeping projects on track.
            </>
          ),
        },
        {
          icon: <FaLaptopCode className="text-accent w-10 h-10 shrink-0" />,
          text: (
            <>
              <strong>Technical Expertise: </strong> 
              With proficiency in React, Django, and PostgreSQL, I bring robust solutions to complex challenges.
            </>
          ),
        },
      ],
    },
    es: {
      title: "Por Qué Necesitas Mis Habilidades",
      description:
        "Tu equipo merece un desarrollador que pueda resolver problemas complejos de manera eficiente, mejorar la productividad y adaptarse a las necesidades dinámicas de los proyectos. Así es como puedo contribuir:",
      points: [
        {
          icon: <FaChartLine className="text-accent w-10 h-10 shrink-0" />,
          text: (
            <>
              <strong>Aumenta la Productividad del Equipo: </strong> 
              Al escribir código limpio y mantenible, ayudo a acelerar los ciclos de desarrollo y reducir la deuda técnica.
            </>
          ),
        },
        {
          icon: <FaClock className="text-accent w-10 h-10 shrink-0" />,
          text: (
            <>
              <strong>Resolución Eficiente de Problemas: </strong> 
              Identifico y resuelvo problemas rápidamente, minimizando tiempos de inactividad y manteniendo los proyectos en marcha.
            </>
          ),
        },
        {
          icon: <FaLaptopCode className="text-accent w-10 h-10 shrink-0" />,
          text: (
            <>
              <strong>Experiencia Técnica: </strong> 
              Con experiencia en React, Django y PostgreSQL, ofrezco soluciones sólidas a desafíos complejos.
            </>
          ),
        },
      ],
    },
  };

  const { title, description, points } = content[language];

  return (
    <section className="bg-primary flex flex-col md:flex-row-reverse items-center gap-8 px-4 sm:px-6 py-12 sm:py-24 text-white">
      {/* Starry Background */}
      {stars.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-[2px] h-[2px] rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
          animate={starAnimation}
        />
      ))}
      {/* Left Side - Text */}
      <div className="md:w-1/2">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-base sm:text-lg mb-6 text-gray-400">
          {description}
        </p>
        <div className="space-y-6 flex flex-col">
          {points.map((point, index) => (
            <div className="flex items-start gap-4" key={index}>
              {point.icon}
              <p className="text-sm sm:text-base">{point.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2">
        <img
          src={image}
          alt="Professional Skills"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default MyServiceSection;
