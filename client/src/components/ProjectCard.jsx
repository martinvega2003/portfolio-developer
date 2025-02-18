import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

export const ProjectCard = ({ project, theme, language }) => {

    return (
        <div className={`ml-2 sm:ml-8 flex-grow flex text-gray-100
					${project.id % 2 === 0 ? "flex-col lg:flex-row bg-primary" : "flex-col-reverse lg:flex-row-reverse bg-secondary"} 
					items-start sm:p-6 rounded-lg overflow-hidden cursor-pointer`}
				>
					<div className="flex flex-col w-full lg:w-1/2 p-3 sm:p-2 md:px-12 lg:px-4">
						<div className="flex justify-start items-center mb-2">
							<div className="mr-4 text-2xl sm:text-3xl md:text-4xl">{<project.icon />}</div>
							<h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
								{language === "en" ? project.title.en : project.title.es}
							</h3>
						</div>
						<p 
							dangerouslySetInnerHTML={language === "en" ? { __html: project.description.en } : { __html: project.description.es }} 
							className={`text-md mt-2 ${theme === "dark" ? "text-gray-400" : "text-gray-300"}`} 
						/>
						<div className="flex flex-wrap items-center mt-2">
							{project.technologies.map((tech, index) => (
								<div 
									key={index} 
									className={"flex items-center text-md hover:scale-110 transition duration-300 text-" + tech.color}
								>
									<span className="text-md mr-1">{<tech.icon />}</span>
									<span className="mr-3">{tech.name}</span>
								</div>
							))}
						</div>
						<div className="mt-4 md:mt-8 flex justify-between items-center gap-4">
							<a 
								href={project.linkToDeployment} 
								target="_blank" 
								rel="noopener noreferrer"
								className="flex items-center text-white hover:text-accent text-[11px] sm:text-lg px-4 py-1 rounded-full bg-accent hover:bg-transparent border-2 border-accent transition duration-300 cursor-pointer"
							>
								<FaLaptopCode className="mr-1" />
								{language === "en" ? "View Live" : "Ver en Vivo"}
								<AiOutlineArrowRight className="ml-1" /> 
							</a>
							<a 
								href={project.linkToCode} 
								target="_blank" 
								rel="noopener noreferrer"
								className="flex items-center text-white hover:text-orange-500 text-[11px] sm:text-lg px-4 py-1 rounded-full bg-orange-500 hover:bg-transparent border-2 border-orange-500 transition duration-300 cursor-pointer"
							>
								<SiGithub className="mr-1" />
								{language === "en" ? "View Code" : "Ver Código"}
								<AiOutlineArrowRight className="ml-1" /> 
							</a>
						</div>
					</div>
					<div className="w-full lg:w-1/2 h-full flex justify-center items-center mt-1 sm:p-2 md:px-12 lg:px-4">
						<img src={project.image} alt="" className="w-full h-auto sm:rounded-lg" />
					</div>
				</div>
    );
};

