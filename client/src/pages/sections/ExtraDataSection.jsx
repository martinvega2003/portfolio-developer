import React from 'react';
import { FaCertificate, FaGraduationCap, FaShieldAlt } from "react-icons/fa";
import { DataCard } from '../../components/DataCard';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';


export const ExtraDataSection = () => {
    const { language } = useLanguage()
    const { theme } = useTheme()

    const certificates = {
      en: [
        {
          title: "Bilingual Worker",
          text: "Fluent in both English and Spanish, enabling effective communication and collaboration in multicultural environments.",
          icon: FaCertificate
        },
        {
          title: "UTC-4 Timezone",
          text: "Available during U.S. business hours, ensuring seamless coordination and productivity across time zones.",
          icon: FaGraduationCap
        },
        {
          title: "Junior Developer",
          text: "Passionate about web development with a focus on continuous learning and growth as a Junior Developer.",
          icon: FaShieldAlt
        }
      ],
      es: [
        {
          title: "Bilingüe",
          text: "Fluido en inglés y español, permitiendo una comunicación y colaboración efectiva en entornos multiculturales.",
          icon: FaCertificate
        },
        {
          title: "Zona Horaria UTC-4",
          text: "Disponible durante el horario laboral UTC-4, asegurando una coordinación y productividad sin interrupciones entre zonas horarias.",
          icon: FaGraduationCap
        },
        {
          title: "Desarrollador Junior",
          text: "Apasionado por el desarrollo web con un enfoque en el aprendizaje continuo y crecimiento como Desarrollador Junior.",
          icon: FaShieldAlt
        }
      ],
    }
    

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"} w-full pt-10 px-3 sm:px-12 flex flex-wrap justify-evenly gap-3 items-center text-white`}>
      {language === "en" ? (
        certificates.en.map(certificate => (
          <DataCard
            title={certificate.title}
            text={certificate.text}
            icon={certificate.icon}
          />
        ))
			) : (
				certificates.es.map(certificate => (
          <DataCard
            title={certificate.title}
            text={certificate.text}
            icon={certificate.icon}
          />
        ))
			)
      }
    </div>
  );
};