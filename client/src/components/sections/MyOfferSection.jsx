import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import cvImgLightModeEn from "../../images/Professional Web Developer Resume no-bg.png"
import cvImgLightModeEs from "../../images/Professional Web Developer Resume no-bg es.png"
import cvImgDarkModeEn from "../../images/Professional Web Developer Resume no-bg white-text.png"
import cvImgDarkModeEs from "../../images/Professional Web Developer Resume no-bg white-text es.png"

const MyOfferSection = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const leftTextVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const bulletPointVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: index * 0.2 },
    }),
  };

  const content = {
    en: {
      title: "Not Just A Website, But Peace Of Mind Too",
      description:
        "95% of websites without maintenance lose their traffic within six months. Most business owners invest in getting a website built but don’t realize that without regular updates, security checks, and SEO improvements, their site becomes invisible to potential customers. Get a custom-built website 100% free when you subscribe to my affordable website maintenance & SEO plan. I’ll design and develop your site from scratch— you only pay if you love it. If you’re not satisfied, you keep the code at no cost. My service ensures your website runs smoothly, stays secure, and attracts clients, so you never have to worry about technical issues or SEO again.",
      benefits: [
        { title: "Custom Website Design", text: "I design websites tailored to your business needs, ensuring they look professional and perform well." },
        { title: "SEO Optimized", text: "I implement best SEO practices to ensure your website ranks well in search results." },
        { title: "Secure & Maintained", text: "Your website is constantly updated, secure, and maintained to avoid any potential issues." },
        { title: "Affordable Pricing", text: "I offer affordable plans for website maintenance and SEO that won't break the bank." },
        { title: "Fast Delivery", text: "I work quickly to deliver high-quality websites, meeting deadlines and your expectations." },
        { title: "Customer Support", text: "I provide ongoing support to ensure your website keeps running smoothly after launch." },
      ],
    },
    es: {
      title: "No solo un sitio web, sino también tranquilidad",
      description:
        "El 95% de los sitios web sin mantenimiento pierden su tráfico en seis meses. La mayoría de los propietarios de negocios invierten en construir un sitio web, pero no se dan cuenta de que sin actualizaciones regulares, comprobaciones de seguridad y mejoras de SEO, su sitio se vuelve invisible para los posibles clientes. Obtén un sitio web personalizado 100% gratis cuando te suscribas a mi plan de mantenimiento y SEO asequible. Diseñaré y desarrollaré tu sitio desde cero: solo pagas si te encanta. Si no estás satisfecho, te quedas con el código sin costo. Mi servicio asegura que tu sitio web funcione sin problemas, esté seguro y atraiga clientes, para que nunca tengas que preocuparte por problemas técnicos o SEO nuevamente.",
      benefits: [
        { title: "Diseño Web Personalizado", text: "Diseño sitios web adaptados a las necesidades de tu negocio, asegurando que se vean profesionales y funcionen bien." },
        { title: "Optimización SEO", text: "Implemento las mejores prácticas de SEO para asegurar que tu sitio se posicione bien en los resultados de búsqueda." },
        { title: "Seguro y Mantenido", text: "Tu sitio web se mantiene constantemente actualizado, seguro y sin problemas." },
        { title: "Precios Asequibles", text: "Ofrezco planes asequibles de mantenimiento y SEO que no afectarán tu presupuesto." },
        { title: "Entrega Rápida", text: "Trabajo rápidamente para entregar sitios web de alta calidad, cumpliendo con los plazos y tus expectativas." },
        { title: "Soporte al Cliente", text: "Proporciono soporte continuo para garantizar que tu sitio web siga funcionando sin problemas después del lanzamiento." },
      ],
    },
  };

  const { title, description, benefits } = content[language];

  return (
    <div className={`relative z-10 sm:p-6 md:p-0 ${theme === "dark" ? "text-gray-200" : "text-gray-800"} bg-transparent`}>
      <div className="absolute inset-0 opacity-40">
        {/* Starry Background */}
        {Array.from({ length: 25 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-[2px] h-[2px] rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
            }}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      <div className="flex justify-center md:justify-start items-center md:items-end">
        <div className={`${theme === "dark" ? "bg-primary/90" : "bg-white/80"} w-full sm:w-[90%] md:max-w-[80%] lg:max-w-[60%] flex flex-col items-start justify-center sm:shadow-2xl sm:rounded-lg border-2 border-primary md:shadow-none md:rounded-none md:border-none`}>
          <div className="min-h-screen w-full flex flex-col justify-center items-start bg-transparent py-12 px-6">
            <p className={`w-full text-sm sm:text-md italic font-light mb-4 ${theme === "dark" ? "text-gray-200 border-cyan-300" : "text-primary border-accent"} border-b-2`}>{language === 'en' ? "My Curriculum Vitae" : "Mi Curriculum Vitae"}</p>
            <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8">
              {/* Left Section - Profile and Contact Info */}
              <div className="w-full md:w-1/2">
                <div className="bg-gray-800 rounded-xl w-full md:w-2/3 aspect-square mb-6"></div>
                <div className={`${theme === "dark" ? "text-cyan-300 border-cyan-300" : "text-accent border-accent"} text-lg font-bold border-l-4 pl-4`}>{language === "en" ? "Contact Info" : "Contacto"}</div>
                <ul className={`${theme === "dark" ? "text-white" : "text-primary"} mt-2 space-y-2`}>
                  <li>📞 +555 555 555555</li>
                  <li>✉️ martinvega2008.02@gmail.com</li>
                  <li>🌐 placeholder.web</li>
                </ul>
                <div className={`${theme === "dark" ? "text-cyan-300 border-cyan-300" : "text-accent border-accent"} text-lg font-bold mt-6 border-l-4 pl-4`}>{language === "en" ? "Education" : "Educacion"}</div>
                <ul className={`${theme === "dark" ? "text-white" : "text-primary"} mt-2 space-y-1`}>
                  <li>{language === "en" ? "Computer Science University" : "Universidad - Ingenieria Informatica"}<br />2022 – {language === "en" ? "today" : "presente"}</li>
                  <li>{language === "en" ? "Senior High School" : "Bachillerato"}<br />2019 – 2021</li>
                  <li>{language === "en" ? "Junior High School" : "Educacion Media"}<br />2016 – 2018</li>
                  <li>{language === "en" ? "Primary School" : "Educacion Basica"}<br />2009 – 2015</li>
                </ul>
                <div className={`${theme === "dark" ? "text-cyan-300 border-cyan-300" : "text-accent border-accent"} text-lg font-bold mt-6 border-l-4 pl-4`}>{language === "en" ? "Skills" : "Habilidades"}</div>
                <ul className={`${theme === "dark" ? "text-white" : "text-primary"} mt-2 space-y-1`}>
                  <li>{language === "en" ? "Frontend Development - High" : "Desarrollo Frontend - Alto"}</li>
                  <li>{language === "en" ? "Backend Development - Medium" : "Desarrollo Backend - Medio"}</li>
                  <li>{language === "en" ? "Databases - Medium" : "Bases de Datos - Medio"}</li>
                </ul>
              </div>

              {/* Right Section - Profile and Experience */}
              <div className="w-full md:w-1/2">
                <h1 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-primary"}`}>Martin Vega</h1>
                <h2 className={`${theme === "dark" ? "text-cyan-300" : "text-accent"} text-2xl`}>{language === "en" ? "Web Developer" : "Desarrollador Web"}</h2>
                <p className={`${theme === "dark" ? "text-white" : "text-primary"} mt-4`}>
                  {language === "en" ? 
                    <>
                      Hello, I’m Martin Vega, a web developer looking for his first experience in the field. I have been learning coding since 2020.
                      I consider myself decently practiced with Frontend Development (React & TailwindCSS) and really knowledgeable in backend development and SQL/NoSQL queries (Python, ExpressJS, PostgreSQL).
                    </> :
                    <>
                      Hola! Soy Martin Vega, Desarrollador Web que busca su primera experiencia en el Area. Estoy aprendiendo a escribir coding desde 2020. 
                      Me considero extremadamente competente en desarrollo frontend (React y TailwindCSS) y bastante entendido en el desarrollo backend y querys a base de datos (ExpressJS y PostgreSQL).  
                    </>
                  }
                </p>
                <div className={`${theme === "dark" ? "text-cyan-300 border-cyan-300" : "text-accent border-accent"} text-lg font-bold mt-8 border-l-4 pl-4`}>{language === "en" ? "Work Experience" : "Experiencia Laboral"}</div>
                <ul className={`${theme === "dark" ? "text-white" : "text-primary"} mt-4 space-y-4`}>
                  <li>
                    <span className="font-bold">{language === "en" ? "Administrative Role Rieder S.A." : "Rol Administrativo Rieder S.A."}</span><br />
                    <span className="text-sm italic font-extralight">{language === "en" ? "6 Months in 2024" : "6 Meses en 2024"}</span><br />
                    {language === "en" ? 
                      <>
                        I learnt to work in teams, manage my time, communicate and to administrate the financial aspects of the company.
                      </> :
                      <>
                        Aprendi a trabajar en equipo, comunicarme, manejar mi tiempo y a administrar los aspectos financieros de la compañía.
                      </> 
                    }
                  </li>
                  <li>
                    <span className="font-bold">{language === "en" ? "Administrative Role Confirming +" : "Rol Administrativo Confirming +"}</span><br />
                    <span className="text-sm italic font-extralight">{language === "en" ? "6 Months in 2024" : "6 Meses en 2024"}</span><br />
                    {language === "en" ? 
                      <>
                        I primarily managed the bills of the company using many software tools while doing this.
                      </> :
                      <>
                        Principalmente administre las facturas de la compañía utilizando diversos softwares.
                      </> 
                    }
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative z-10 w-full py-8 flex items-center justify-between">
              <button 
                className={`w-1/3 ${theme === "dark" ? "bg-white text-black hover:text-white border-2 border-white" : "bg-black text-white hover:text-black border-2 border-black"} hover:bg-transparent p-2 rounded-lg transition duration-300`}
              >
                Download CV In English
              </button>
              <button 
                className={`w-1/3 ${theme === "dark" ? "bg-cyan-300 text-primary hover:text-cyan-300 border-cyan-300" : "bg-accent text-white hover:text-accent border-accent"} hover:bg-transparent p-2 border-2 rounded-lg transition duration-300`}
              >
                Descargar CV En Español
              </button>
            </div>
          </div>
        </div>
        <div className="w-[15%] hidden lg:block"></div>
      </div>
    </div>
  );
};

export default MyOfferSection;

