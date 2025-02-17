import { FaDatabase, FaServer, FaLaptopCode } from "react-icons/fa";
import image from "../../images/hero-image-v1.png";
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
      title: "How I Can Help You",
      description:
        "Your projects deserve seamless user experiences, efficient back-end systems, and reliable database solutions. Here are my skills in these fields:",
      points: [
        {
          icon: <FaLaptopCode className="text-accent w-10 h-10 shrink-0" />,
          text: (
            <>
              <strong>Frontend With ReactJs & TailwindCSS: </strong> 
              You will get responsive and visually appealing interfaces that enhance user engagement.
            </>
          ),
        },
        {
          icon: <FaServer className="text-accent w-10 h-10 shrink-0" />,
          text: (
            <>
              <strong>Backend With ExpressJS: </strong> 
              You will get scalable and secure APIs, guaranteeing smooth server-client communication and data flow.
            </>
          ),
        },
        {
          icon: <FaDatabase className="text-accent w-10 h-10 shrink-0" />,
          text: (
            <>
              <strong>Databases With PostgreSQL & Oracle: </strong> 
              You’ll benefit from optimized SQL & PLSQL scripts, guaranteeing fast and reliable data management.
            </>
          ),
        },
      ],
    },
    es: {
      title: "Cómo Puedo Ayudarte",
      description:
        "Tus proyectos merecen experiencias de usuario fluidas, sistemas backend eficientes y soluciones de base de datos confiables. Así es como mis habilidades pueden beneficiarte:",
      points: [
        {
          icon: <FaLaptopCode className="text-accent w-10 h-10 shrink-0" />,
          text: (
            <>
              <strong>Frontend con React y TailwindCSS: </strong> 
              Obtendrás interfaces responsivas y visualmente atractivas que mejoran la interacción del usuario.
            </>
          ),
        },
        {
          icon: <FaServer className="text-accent w-10 h-10 shrink-0" />,
          text: (
            <>
              <strong>Backend Con ExpressJS: </strong> 
              Tus aplicaciones contarán con APIs escalables y seguras, garantizando una comunicación cliente-servidor fluida y segura.
            </>
          ),
        },
        {
          icon: <FaDatabase className="text-accent w-10 h-10 shrink-0" />,
          text: (
            <>
              <strong>Bases de Datos Con PostgreSQL y Oracle: </strong> 
              Te beneficiarás de consultas SQL y PLSQL optimizadas, asegurando una gestión de datos rápida y confiable.
            </>
          ),
        },
      ],
    },
  };
  

  const { title, description, points } = content[language];

  return (
    <section className="relative z-20 bg-primary flex flex-col md:flex-row-reverse items-center gap-8 px-4 sm:px-6 py-12 sm:py-24 text-white">
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
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-base lg:text-lg mb-6 text-gray-400">
          {description}
        </p>
        <div className="space-y-6 flex flex-col">
          {points.map((point, index) => (
            <div className="flex items-start gap-4" key={index}>
              {point.icon}
              <p className="text-sm lg:text-base">{point.text}</p>
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
