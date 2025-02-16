import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

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
    <div className={`relative z-10 p-6 md:p-0 ${theme === "dark" ? "text-gray-200" : "text-gray-800"} bg-transparent`}>
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
        <div className={`${theme === "dark" ? "bg-primary/90" : "bg-white/80"} p-8 w-[95%] sm:w-[90%] md:max-w-[60%] flex flex-col items-start justify-center shadow-2xl rounded-lg border-2 border-primary md:shadow-none md:rounded-none md:border-none`}>
          {/* Left Side: Text Content */}
          <motion.div
            className="mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={leftTextVariants}
          >
            <p className={`text-sm sm:text-md italic font-light mb-4 ${theme === "dark" ? "text-gray-200" : "text-accent"} border-b-2 border-accent`}>{language === 'en' ? "What I Offer" : "Lo que ofrezco"}</p>
            <h1 className={`text-xl sm:text-3xl xl:text-5xl font-extrabold ${theme === "dark" ? "text-white" : "text-primary"} mb-4`}>{title}</h1>
            <p className={`text-sm sm:text-md xl:text-lg leading-relaxed ${theme === "dark" ? "text-gray-200" : "text-secondary"}`}>{description}</p>
            <div className="w-full border-t-2 border-accent my-6"></div>
          </motion.div>

          {/* Bottom Side: Bullet Points */}
          <motion.div
            className="flex items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="w-full flex flex-col md:flex-row justify-start items-start flex-wrap">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  variants={bulletPointVariants}
                  custom={index}
                  className="w-full lg:w-[45%] flex items-start rounded-3xl py-3 my-3 mr-3 lg:mr-6"
                >
                  <FaCheckCircle className={`min-w-7 min-h-7 text-blue-400 mr-3 mt-1`} />
                  <div className="w-full">
                    <h3 className={`font-bold text-xl ${theme === "dark" ? "text-white" : "text-primary"}`}>{item.title}</h3>
                    <p className={`${theme === "dark" ? "text-gray-200" : "text-secondary"}  text-sm xl:text-lg`}>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="w-[15%] hidden lg:block"></div>
      </div>
    </div>
  );
};

export default MyOfferSection;

