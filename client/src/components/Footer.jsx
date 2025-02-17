import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  // Change this value to "es" for Spanish or "en" for English
  const { language } = useLanguage()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="px-4 sm:px-12">
        {/* Final CTA */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            {language === "en"
              ? "Interested in working together?"
              : "¿Interesado en trabajar juntos?"}
          </h2>
          <p className="text-center text-gray-50 mb-6">
            {language === "en"
              ? "Get in touch today to discuss your needs and make it happen."
              : "Ponte en contacto hoy para hablar sobre tus necesidades y hacerlo realidad."}
          </p>
          <Link
            to="/form"
            className="bg-gradient-to-r from-accent to-blue-400 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
          >
            {language === "en" ? "Contact Me" : "Contáctame"}
          </Link>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:justify-evenly gap-6 mb-8">
          <div className="w-full md:w-fit">
            <h3 className="text-xl font-bold mb-4">
              {language === "en" ? "Quick Links" : "Enlaces Rápidos"}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#section1" className="hover:underline">
                  {language === "en" ? "Home" : "Inicio"}
                </a>
              </li>
              <li>
                <a href="#section2" className="hover:underline">
                  {language === "en" ? "Curriculum Vitae" : "Curriculum Vitae"}
                </a>
              </li>
              <li>
                <a href="#section3" className="hover:underline">
                  {language === "en" ? "Projects" : "Proyectos"}
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-fit">
            <h3 className="text-xl font-bold mb-4">
              {language === "en" ? "Social Media" : "Redes Sociales"}
            </h3>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-700"
                >
                  <FaGithub size={24} />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-fit">
            <h3 className="text-xl font-bold mb-4">
              {language === "en" ? "Get In Touch" : "Contacto"}
            </h3>
            <p className="text-gray-200">
              {language === "en" ? "Email" : "Correo"}:{" "}
              <a href="mailto:example@mail.com">martinvega2003.02@gmail.com</a>
            </p>
            <p className="text-gray-200">
              {language === "en" ? "Phone" : "Teléfono"}:{" "}
              <a href="tel:+123456789">+595 986 537671</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-300 pt-6 text-white">
          © {new Date().getFullYear()} Your Portfolio Name.{" "}
          {language === "en"
            ? "All Rights Reserved."
            : "Todos los Derechos Reservados."}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
