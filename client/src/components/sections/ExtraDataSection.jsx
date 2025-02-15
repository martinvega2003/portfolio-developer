import React from 'react';
import { FaCertificate, FaGraduationCap, FaShieldAlt } from "react-icons/fa";
import { DataCard } from '../DataCard';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';


export const ExtraDataSection = () => {
    const { language } = useLanguage()
    const { theme } = useTheme()

  const certificates = {
    en: [
      {
        title: "ADA Certified Excellence",
        text: "Recognized for meeting the highest standards in dental care and ethics.",
        icon: FaCertificate
      },
      {
        title: "CERP Accredited Provider",
        text: "Certified for advanced training and ongoing professional development.",
        icon: FaGraduationCap
      },
      {
      	title: "ISO 9001 Certified Facility",
        text: "Accredited for maintaining exceptional quality management systems.",
        icon: FaShieldAlt
      }
    ],
    es: [
      {
        title: "Desarrollo Responsive FreeCodeCamp",
        text: "Titulo por completar el Curso de Desarrollo Web Responsivo proveido por FreeCodeCamp.",
        icon: FaCertificate
      },
      {
        title: "React FreeCodeCamp",
        text: "Certifficado por haber completado el Curso de React proveido por FreeCodeCamp.",
        icon: FaGraduationCap
      },
      {
        title: "Python For Everybody Coursera",
        text: "Titulo por haber completado el curso Python For Everybody de la Universidad de Michigan.",
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