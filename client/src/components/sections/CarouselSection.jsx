import React from "react";
import { projectsData as projects } from "../../data/projectsData";
import { ProjectCard } from "../ProjectCard";

export const ProjectsSection = () => {
  return (
    <section id="examples" className="relative w-full h-fit flex flex-col justify-start items-center">
      <div className="absolute inset-0 opacity-40 bg-blue-300" />
      <h2 className="relative z-10 w-full bg-white text-3xl md:text-6xl text-primary font-extrabold px-5 pt-28 pb-12">
        See Some Websites I created
      </h2>
      <div className="mt-8 py-6 px-12 w-full h-fit flex justify-center items-center overflow-x-scroll">
        {
          projects.map(project => {
            return (
              <div className="flex justify-center items-center p-9 bg-transparent rounded-3xl transition duration-200 hover:shadow-2xl">
                <ProjectCard
                name={project.title}
                desc={project.description}
                backgroundImage={project.image}
                linkToCode={project.linkToCode}
                linkToDeploy={project.linkToDeployment}
                />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}