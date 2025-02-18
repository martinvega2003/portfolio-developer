import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Form = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert(language === "en" ? "Message sent!" : "¡Mensaje enviado!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert(language === "en" ? "Please fill all fields." : "Por favor, completa todos los campos.");
    }
  };

  const content = {
    en: {
      title: "Get In Touch",
      description: "Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.",
    },
    es: {
      title: "Ponte en contacto",
      description: "¿Tienes una pregunta o quieres trabajar juntos? Completa el formulario a continuación y te responderé lo antes posible.",
    }
  };

  const { title, description } = content[language];

  return (
    <div className={`${theme === "dark" ? "bg-primary/90" : "bg-white/80"} relative py-36 md:py-44 px-3 sm:px-12 md:px-20 w-full h-full flex flex-col items-center justify-center`}>
      <div className="absolute z-10 inset-0 opacity-40">
        {Array.from({ length: 25 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-[2px] h-[2px] rounded-full bg-white"
            style={{ top: `${Math.random() * 100}vh`, left: `${Math.random() * 100}vw` }}
            animate={{ y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          />
        ))}
      </div>
      <motion.div className="mb-4">
        <p className={`w-full text-sm italic font-extralight pb-[2px] pl-2 mb-4 ${theme === "dark" ? "text-gray-200" : "text-accent"} border-b-2 border-accent`}>{language === 'en' ? "Send Your Message" : "Envia Tu Mensaje"}</p>
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${theme === "dark" ? "text-white" : "text-primary"} mb-4`}>{title}</h1>
        <p className={`text-md leading-relaxed ${theme === "dark" ? "text-gray-200" : "text-secondary"}`}>{description}</p>
        <form onSubmit={handleSubmit} className="relative z-10 w-full mt-4">
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder={language === "en" ? "Your Name" : "Tu Nombre"} 
            className={`w-full bg-transparent p-2 mb-3 rounded-lg border-2 transition-all duration-300
              ${theme === "dark" ? "text-white border-gray-300 focus:border-purple-500 focus:shadow-[0_0_8px_2px] focus:shadow-accent" : "border-primary focus:border-accent focus:shadow-[0_0_8px_2px] focus:shadow-accent"} 
              placeholder:text-gray-400 outline-none`} 
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Email" 
            className={`w-full bg-transparent p-2 mb-3 rounded-lg border-2 transition-all duration-300
              ${theme === "dark" ? "text-white border-gray-300 focus:border-purple-500 focus:shadow-[0_0_8px_2px] focus:shadow-accent" : "border-primary focus:border-accent focus:shadow-[0_0_8px_2px] focus:shadow-accent"} 
              placeholder:text-gray-400 outline-none`} 
          />
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder={language === "en" ? "Your Message" : "Tu Mensaje"} 
            className={`w-full h-28 sm:h-36 md:h-52 bg-transparent p-2 mb-3 rounded-lg border-2 transition-all duration-300
              ${theme === "dark" ? "text-white border-gray-300 focus:border-purple-500 focus:shadow-[0_0_8px_2px] focus:shadow-accent" : "border-primary focus:border-accent focus:shadow-[0_0_8px_2px] focus:shadow-accent"} 
              placeholder:text-gray-400 outline-none`}
          ></textarea>
        </form>
        <div className="relative z-20 w-full p-2 flex items-center justify-between gap-3">
          <button 
            className={`w-fit sm:w-1/3 ${theme === "dark" ? "bg-white text-black hover:text-white border-2 border-white" : "bg-black text-white hover:text-black border-2 border-black"} hover:bg-transparent p-2 rounded-lg transition duration-300`}
          >
            <Link to="/" className="w-full h-full">{language === "en" ? "Go Back" : "Volver Atras"}</Link>
          </button>
          <button 
            className="w-fit sm:w-1/3 bg-accent hover:bg-transparent text-white hover:text-accent p-2 border-2 border-accent rounded-lg transition duration-300"
          >
            {language === "en" ? "Send Message" : "Enviar Mensaje"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Form;


